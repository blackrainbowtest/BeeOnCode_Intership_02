import Process from "components/Process/Process";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ProcessesContent() {
  const processes = useSelector((state) => state?.processes.data);
  console.log(processes);
  return (
    <>
      {processes.map((proc, index) => {
        return <Process key={proc.id} process={proc} />;
      })}
    </>
  );
}

export default ProcessesContent;
