import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";

function ProcessName() {
  const processes = useSelector((state) => state?.processes.data);

  return (
    <MainContainer>
      {processes.map((proc) => {
        return (
          <NameContainer key={proc.id}>
            <TypographyContainer>{proc.name}</TypographyContainer>
          </NameContainer>
        );
      })}
      <TypographyContainer>Добавить</TypographyContainer>
    </MainContainer>
  );
}

export default ProcessName;

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  color: theme.palette.primary.text,
  display: "flex",
}));

const NameContainer = styled(Box)(({ theme }) => ({
  width: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const TypographyContainer = styled(Typography)(({ theme }) => ({
  width: "100px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  textAlign: "center",
}));
