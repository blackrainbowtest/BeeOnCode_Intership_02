import Process from "components/Process/Process";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Box } from "@mui/material";

function ProcessesContent() {
  const processes = useSelector((state) => state?.processes.data);
  console.log(processes);
  return (
    <ProcessesContainer>
      <DragDropContext>
        <Droppable droppableId="processes">
          {(provided) => (
            <section {...provided.droppableProps} ref={provided.innerRef}>
              {processes.map((proc, index) => {
                return (
                  <Draggable key={proc.id} draggableId={proc.id.toString()} index={index}>
                  <Process process={proc} />
                  </Draggable>
                );
              })}
            </section>
          )}
        </Droppable>
      </DragDropContext>
    </ProcessesContainer>
  );
}

export default ProcessesContent;

const ProcessesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
}));
