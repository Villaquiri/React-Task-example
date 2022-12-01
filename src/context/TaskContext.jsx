import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

//Este es el que almacena los datos, el nombre del contexto.
export const TaskContext = createContext();

//Este es el que engloba resto de componentes.
export function TaskContextProvider(props) {
  //Este sirve para poder tener variables.
  const [tasks, setTasks] = useState(data);

  function createTask(taskTitle, taskDescription) {
    //Copia todos los elementos de tasks y le adiciona task.
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: taskDescription,
      },
    ]);
  }

  function deleteTask(taskId) {
    //Por cada task que estes recorriendo verifica si es igual al id que te están pasando.
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  //Si yo quiero que esto se modifique en tiempo real debo de usar esta función.
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
