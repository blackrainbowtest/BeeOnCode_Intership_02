import { Box, Typography } from "@mui/material";
import AddProcess from "components/AddProcess";
import Process from "components/Process/Process";
import ProcessBar from "components/ProcessBar";
import { getProcesses } from "features/Processes/ProcessAPI";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { updateProcessOrder } from "features/Processes/ProcessSlice";

function ProcessComponent() {
  const processes = useSelector((state) => state?.processes.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProcesses());
  }, [dispatch]);

  console.log(processes);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      processes,
      result.source.index,
      result.destination.index
    );

    dispatch(updateProcessOrder(newItems));
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 8 * 2,
    margin: `0 ${8}px 0 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    display: "flex",
    overflow: "auto",
  });

  return (
    <MainContainer>
      <Typography variant='h5'>Процессы</Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable' direction='horizontal'>
          {(provided, snapshot) => (
            <ProcessesContainer
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {processes.map((proc, index) => {
                return (
                  <Draggable key={proc.id} draggableId={proc.id} index={index}>
                    {(provided, snapshot) => (
                      <Process
                        process={proc}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      />
                    )}
                  </Draggable>
                );
              })}
              <AddProcess />
            </ProcessesContainer>
          )}
        </Droppable>
      </DragDropContext>
      <ProcessBar />
    </MainContainer>
  );
}

export default memo(ProcessComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  minHeight: "100vh",
  padding: theme.spacing(5),
  color: theme.palette.primary.text,
  background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
}));

const ProcessesContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexWrap: "nowrap",
}));
