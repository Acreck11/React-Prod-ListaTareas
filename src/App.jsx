import ListaTareas from "./Components/Tareas";
import TareaFormulario from "./Components/TareaFormulario";



function App() {



  return (
    //le pasamos a 'TareaFormulario' una propiedad llamada 'crearTarea' que sera la funcion 'crearTarea'
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TareaFormulario />

      <ListaTareas />
      </div>
    </main>
  );
}

export default App;
