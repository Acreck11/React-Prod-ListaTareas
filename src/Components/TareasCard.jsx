import { useContext } from "react";
import { ContextoTarea } from "../Contexto/ContextoTarea";

function TareasCard({ tarea }) {
  const { eliminaTarea } = useContext(ContextoTarea);

  return (
    <div className="bg-slate-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tarea.title}</h1>
      <p className="text-gray-500 text-sm">{tarea.descripcion}</p>
      <button
        className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => eliminaTarea(tarea.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TareasCard;
