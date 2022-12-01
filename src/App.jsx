// Extensión es7 react -> Permite crear componentes sin escribir tanto -> rfce
//Otro atajo es imp para crear el import, con tab te mueves en los parametros a cambiar.
//clg como abreviación del console.
//Libreria tailwind para estilo CSS

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
import React from "react";
