import * as $ from 'jquery';

export class Exercise{
    armWorkouts: Workout[] = [];
    legWorkouts: Workout[] = [];
    init() {
        return $.when(
            $.getJSON("/routines/arms").done( data => {
                this.armWorkouts = data;
                console.log(this.armWorkouts[0].text)
            }),
            $.getJSON("/routines/legs").done( data =>{
                this.legWorkouts = data;
            })
        );
    }

}
export class Workout{
    text: string;
}

export class Routine{
    completedWorkouts: Workout[] = [];
    armWorkouts: Workout[] = [];
    legWorkouts: Workout[] = [];
    drawArmWorkout(){
        console.log("drawArm");
        $("#arm-workouts").html(
            this.armWorkouts.map(x => `<li class="list-group-item id="workout-selected">${x.text}</li>`).join("")
        );
    }

    drawLegWorkout(){
        $("#leg-workouts").html(
            this.legWorkouts.map(x => `<li class="list-group-item">${x.text}</li>`).join("")
        );
    }

    drawCompleted(){
        $("#completed-workouts").html(
            this.completedWorkouts.map(x => `<li class="list-group-item">${x.text}</li>`).join("")
        );
    }
}

//controller

const routine = new Routine();
const exercise = new Exercise();

var i = 0;

var arms = document.getElementById("arm-workouts");
var legs = document.getElementById("leg-workouts");
var completed = document.getElementById("completed-workouts");
exercise.init().done(() => {
    routine.armWorkouts = exercise.armWorkouts;
    routine.legWorkouts = exercise.legWorkouts;
    routine.drawArmWorkout();
    routine.drawLegWorkout();

});

$("#arm-workouts").click(function(e){
    var item = e.target;
    if(item.nodeName === "LI"){
        var li = document.createElement("li");
        li.setAttribute('class', "list-group-item");
        li.appendChild(document.createTextNode(item.innerText));
        completed.appendChild(li);
        arms.removeChild(item);
    }
});

$("#leg-workouts").click(function(e){
    var item = e.target;
    if(item.nodeName === "LI"){
        var li = document.createElement("li");
        li.setAttribute('class', "list-group-item");
        li.appendChild(document.createTextNode(item.innerText));
        completed.appendChild(li);
        legs.removeChild(item);
    }
});
