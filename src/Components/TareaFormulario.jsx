import { useState, useContext } from "react";
import { ContextoTarea } from "../Contexto/ContextoTarea";

function TareaFormulario() {
  const [title, setTitle] = useState(""); // hook llena variable con funcion y estable variable por defecto
  const [descripcion, setdescripcion] = useState(""); 

  const {crearTarea} = useContext(ContextoTarea)

  const handlesubmit = (e) => {
    e.preventDefault(); // Evita la actualizacion de la pagina al ejecutar el submit, para efectos de visualizacion

    crearTarea({title,descripcion}); // la funcion 'crearTarea' Recibe las variables como objeto del form
    setTitle('');  // Despues del submit regresa el valor a vacio
    setdescripcion('');  // Despues del submit regresa el valor a vacio

  };

  return (
  <div className="max-w-md mx-auto">
  <form on onSubmit={handlesubmit} className="bg-slate-800 p-10 mb-4">
    <h1 className="text-2x1 font-bold text-white mb-3">Creat tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)} //Va llenando el valor del titulo
        value={title} 
        className="bg-slate-300 p-3 w-full mb-2"// Despues del submit regresa el valor a vacio
        autoFocus // Permite comenzar el texto en el primer input
      />
      <textarea
        placeholder="Escribe la descripcion"
        onChange={(e) => setdescripcion(e.target.value)} //Va llenando el valor del titulo
        className="bg-slate-300 p-3 w-full mb-2"
        value={descripcion} // Despues del submit regresa el valor a vacio
        
      />
      <button className="bg-indigo-500 px-3 py-1 text-white ">Guardar</button>
    </form>

  </div>
  );
}

export default TareaFormulario;
