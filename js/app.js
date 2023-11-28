/*
3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
*/

const tareaInput = document.getElementById("tareaInput");
        const agregarBoton = document.getElementById("agregarBoton");
        const listaTareas = document.getElementById("listaTareas");

        agregarBoton.addEventListener("click", () => {
            const tarea = tareaInput.value;
            if (tarea) {
                const elementoLista = document.createElement("li");
                elementoLista.className = "list-group-item d-flex justify-content-between align-items-center px-2";
                elementoLista.textContent = tarea;

                const eliminarBoton = document.createElement("button");
                eliminarBoton.className = "btn btn-danger";
                eliminarBoton.textContent = "Eliminar";
                eliminarBoton.addEventListener("click", () => {
                    listaTareas.removeChild(elementoLista);
                });

                elementoLista.appendChild(eliminarBoton);
                listaTareas.appendChild(elementoLista);
                tareaInput.value = "";
            }
        });