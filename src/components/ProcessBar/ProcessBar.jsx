import ProcessName from "./ProcessName";
import ProcessLine from './ProcessLine';
import styled from 'styled-components';
import { Box } from '@mui/material';

function ProcessBar() {
  return (
    <MainContainer>
      <ProcessLine />
      <ProcessName />
    </MainContainer>
  );
}

export default ProcessBar;

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  color: theme.palette.primary.text,
  display: "flex",
  flexDirection: "column",
}));