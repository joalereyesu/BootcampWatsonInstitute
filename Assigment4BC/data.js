var to_dos = ['Leer Econometria', 'Ver video bootcamp', 'Tarea Ecuas', 'Estudiar Financiera 2', 'Lab Data Science', 'Pseudocodigo', 'Lab Progra'];
var to_do_states = [false, false, false, false, false, false, false];

var next_week = ['Parcial Econometria', 'Lab Data Science', 'Quiz Financiera 2', 'Guia Seminario', 'Parcial Estructuras', 'Assigment Bootcamp']
var exams_states = [true, false, true, false, true, false];
let next_week_list = document.getElementById("next_week_list");

next_week.forEach((item)=>{
    let li = document.createElement("li");
    li.className = 'done_list';
    li.innerText = item;
    next_week_list.appendChild(li);

  });

function todo_done () {
    for (var i=0; i < to_dos.length; i++){
        const cb = document.querySelector('#todo'+i);
        if (cb.checked){
            to_do_states[i] = true;
            done_tasks.push(to_dos[i])
        }
    }
};

let done_tasks = [];
let done_list = document.getElementById("doneList");

function refresh_done (){
    done_tasks.forEach((item)=>{
        let li = document.createElement("li");
        li.className = 'done_list';
        li.innerText = item;
        done_list.appendChild(li);

      });
}

function get_exams (){
    let exams = []
    for (var i=0; i < next_week.length; i++){
        if (exams_states[i]){
            exams.push(next_week[i]);
        }
    }
    alert(exams);
}




