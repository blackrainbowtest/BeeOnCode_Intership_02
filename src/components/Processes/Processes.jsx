import { Box, Typography } from "@mui/material";
import AddProcess from "components/AddProcess";
import Process from "components/Process/Process";
import ProcessBar from "components/ProcessBar";
import { getProcesses } from "features/Processes/ProcessAPI";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

function ProcessComponent() {
  const processes = useSelector((state) => state?.processes.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProcesses());
  }, [dispatch]);

  console.log(processes);
  return (
    <MainContainer>
      <Typography variant='h5'>Процессы</Typography>
      <ProcessesContainer>
        {processes.map((proc) => {
          return <Process key={proc.id} process={proc} />;
        })}
        <AddProcess />
      </ProcessesContainer>
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
