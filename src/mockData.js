import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "📋Por hacer",
    task: [
      {
        id: uuidv4(),
        title: "Estudiar Javascript"
      },
      {
        id: uuidv4(),
        title: "Estudiar HTML y CSS"
      },
      {
        id: uuidv4(),
        title: "Actualizar portfolio"
      },
    ]
  },
  {
    id: uuidv4(),
    title: "✏️En progeso",
    task: [
      {
        id: uuidv4(),
        title: "Proyecto kanban"
      },
      {
        id: uuidv4(),
        title: "Curso de React"
      },
    ]
  },
  {
    id: uuidv4(),
    title: "✔️ Completado",
    task: [
      {
        id: uuidv4(),
        title: "Inserte tarea generica"
      },
    ]
  },
];

export default mockData;
