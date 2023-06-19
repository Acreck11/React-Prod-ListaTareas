import TareasCard from './TareasCard.jsx'
import {useContext} from "react";
import { ContextoTarea } from '../Contexto/ContextoTarea'

function ListaTareas() {


const {tareas} = useContext(ContextoTarea)

  if (tareas.length === 0) {
    // Si al arreglo de tareas esta vacio muestra sin tareas
    return <h2 className='text-white text-4xl font-bold text-center'>Sin tareas</h2>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((tarea) => (
        <TareasCard key={tarea.id} tarea={tarea} /> 
        ))}
    </div>
  );
}

export default ListaTareas;
