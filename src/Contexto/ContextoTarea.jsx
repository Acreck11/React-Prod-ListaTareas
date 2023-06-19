import { createContext, useState , useEffect} from "react";
import { tareas as datos } from "../data/Data"; // Obtenemos el arreglo llamado tareas del archivo data.js

export const ContextoTarea = createContext();

export function ContextoTareaProvider(props) {
  const [tareas, setTarea] = useState([]); // Hook. Primero se declara el arreglo, luego  se declara la funcion setTarea

  function crearTarea(tarea) {
    // Voy a añadir el objeto nuevo al arreglo 'tareas' se menciona arriba, lo recibire en el archivo TareaFormulario.jsx || Sera un objeto
    setTarea([
      ...tareas,
      {
        title: tarea.title,
        id: tarea.length,
        descripcion: tarea.descripcion,
      },
    ]); // vamos a copiar todos los elementos que tenga 'tareas' con (...) y luego recibimos un on valor objeto. Con funcion 'setTarea' se agrega el nuevo objeto
  }

  useEffect(() => {
    setTarea(datos);
  }, []);

  function eliminaTarea(tareaId) {
    setTarea(tareas.filter((tarea) => tarea.id !== tareaId));
  }

  return (
    <ContextoTarea.Provider
      value={{
        tareas: tareas,
        eliminaTarea: eliminaTarea,
        crearTarea: crearTarea,
      }}
    >
      {props.children}
    </ContextoTarea.Provider>
  );
}
