import React from "react";
import { Box, Skeleton } from "@mui/material";
import styled from "styled-components";
import { setCurrent } from "features/Processes/ProcessSlice";
import { useDispatch } from "react-redux";

const Process = ({ process }) => {
  const dispatch = useDispatch();
  const setCurrentClick = (e, index) => {
    dispatch(setCurrent(index));
  };
  return (
    <MainContainer onClick={(e) => setCurrentClick(e, process.id)}>
      {process?.svg ? (
        <SVGContainer dangerouslySetInnerHTML={{ __html: process.svg }} />
      ) : (
        <Skeleton variant='rectangular' width={50} height={50} />
      )}
    </MainContainer>
  );
};

export default Process;

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "100px",
  padding: theme.spacing(5),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SVGContainer = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  cursor: "grab",
  "& svg": {
    width: "100%",
    height: "100%",
  },
  "& svg:hover": {
    width: "60px",
    height: "60px",
    transform: "translate(-5px, -5px)",
  },
}));
