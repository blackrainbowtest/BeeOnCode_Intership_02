import { Box, Typography } from "@mui/material";
import AddProcess from "components/AddProcess";
import ProcessBar from "components/ProcessBar";
import { getProcesses } from "features/Processes/ProcessAPI";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ProcessesContent from "./content/ProcessesContent";

function ProcessComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProcesses());
  }, [dispatch]);

  return (
    <MainContainer>
      <Typography variant='h5'>Процессы</Typography>
      <ProcessesContainer>
        <ProcessesContent />
        <AddProcess />
      </ProcessesContainer>
      <ProcessBar />
    </MainContainer>
  );
}

export default ProcessComponent;

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
