const mem_personas = [];
const send_butt = document.querySelector("#send_button");
const container = document.querySelector("#container_cards")

//DETECCION DEL CLICK EN EL BOTON ENVIAR 

send_butt.addEventListener("click", () => {
  const link_url = document.querySelector("#url_form");
  const name = document.querySelector("#name_form");
  const last_name = document.querySelector("#last_form");
  const date_card = document.querySelector("#date_form");
  const country_option = document.querySelector("#country_option");
  const resume_person = document.querySelector("#Description_form");
                                                                                                                                                                                                                                                                                                                                        
  const persona = {
    url_link: link_url.value,
    nombre: name.value,
    apellido: last_name.value, 
    Fecha_Nac: date_card.value,
    Genero:"Masculino",
    Pais: country_option.options[country_option.selectedIndex].text,   
    Descripcion:  resume_person.value,
  };

  console.log(persona)

  mem_personas.push(persona);
  console.log(mem_personas)
  clean_list();
  render_list(mem_personas);
});

// Creaciòn de la tarjeta de manera dinamica

const render_card = (info, index) => {
  const name_user = document.createElement("li");
  const last_name_user = document.createElement("li");
  const birth_user = document.createElement("li");
  const edit_user = document.createElement("a");
  const erase_user = document.createElement("a");
  const img = document.createElement("img");
  const country = document.createElement("li");
  const resume = document.createElement("li");

  name_user.className = "list_group";
  name_user.textContent = info.nombre;

  last_name_user.className = "list_group";
  last_name_user.textContent = info.apellido;

  birth_user.className = "list_group";
  birth_user.textContent = info.Fecha_Nac;

  edit_user.className = "card-link";
  edit_user.textContent = "Editar";

  img.className = "img-fluid rounded-start";
  img.src =info.url_link

  country.className = "list_group";
  country.textContent = info.Pais;

  resume.className ="list_group";
  resume.textContent = info.Descripcion;

  erase_user.className = "card-link";
  erase_user.textContent = "Eliminar";
  erase_user.dataset.item = index;

  // Funcion para eliminar al hacer click
  erase_user.addEventListener("click", (event) => {
    alert("Persona " + mem_personas[index].nombre + "  Eliminada");
    const element_erase = event.target.dataset.item;
    mem_personas.splice(Number(element_erase), 1);
    clean_list();
    render_list(mem_personas);
  });


  // Contenedores de imagen
  const img_container = document.createElement("div");
  img_container.className = "col-md-4";
  img_container.appendChild(img);

  const card_container = document.createElement("div");
  card_container.className = "row g-0";
  card_container.appendChild(img_container);

  //Contenerdor de Eliminar y Editar

  const div_erase = document.createElement("div");
  div_erase.className = "card-body";
  div_erase.append(erase_user, edit_user);

  //Contenedores de lista de datos

  const list_container = document.createElement("div");
  list_container.className = "card-body";
  list_container.append(name_user, last_name_user, birth_user, country, resume);

  const div_listContainer = document.createElement("div");
  div_listContainer.className = "col-md-8";
  div_listContainer.append(list_container, div_erase);

  //Contenedor de ambos contenedores

  card_container.append(div_listContainer);

  const main_container = document.createElement("div");
  main_container.className = "card mb-3 mt-3 ms-2";
  main_container.style = "max-width: 540px";
  main_container.appendChild(card_container);

  container.appendChild(main_container);
};

// FUNCION  RENDERIZADO DE ARREGLO 

const render_list = (list_to_render) => {
  list_to_render.forEach((person, index) => {
    render_card(person, index);
  });
};

// FUNCION LIMPIADO DE DOM 

const clean_list = () => {
    while(container.firstChild){
        container.removeChild(container.firstChild)
    };

};
