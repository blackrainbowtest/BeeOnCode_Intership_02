import Process from "components/Process/Process";
import { useSelector } from "react-redux";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "helpers/StrictModeDroppable";
import styled from "styled-components";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateProcessesOrder } from "features/Processes/ProcessAPI";

function ProcessesContent() {
  const dispatch = useDispatch();
  const processes = useSelector((state) => state?.processes.data);
  const [processesData, setProcessesData] = useState(processes.data || []);

  useEffect(() => {
    setProcessesData(processes);
  }, [processes]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const process = Array.from(processesData);
    const [reorderedItem] = process.splice(result.source.index, 1);
    process.splice(result.destination.index, 0, reorderedItem);
    const reorderedProcesses = process.map((proc, index) => ({
      ...proc,
      order: index + 1,
    }));
    console.log(reorderedProcesses);

    setProcessesData(reorderedProcesses);
    dispatch(updateProcessesOrder(reorderedProcesses));
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="processes" direction="horizontal">
          {(provided) => (
            <ProcessesContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {processesData.map((proc, index) => {
                return (
                  <Draggable
                    key={proc.id}
                    draggableId={proc.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={{ ...provided.draggableProps.style }}
                      >
                        <Process process={proc} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ProcessesContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default ProcessesContent;

const ProcessesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
}));
