 // TAREA CONTADOR

var clicks_counter=0;

function count_click(){
  clicks_counter+=1;
  document.getElementById("clicks").value=clicks_counter;
}

function less_click(){
  if(clicks_counter>0) clicks_counter-=1;
  document.getElementById("clicks").value=clicks_counter;
}

// TAREA FORMULARIO

let user_data = {
  nombre:"",
  apellido:"",
};

nombre_user="";
apellido_user="";

function get_data_from_user (){
  const name_form=document.querySelector("#Name_form")
  const last_name_form=document.querySelector("#Last_name_form")

  user_data.nombre=name_form.value
  user_data.apellido=last_name_form.value
  
  console.log(user_data)

};