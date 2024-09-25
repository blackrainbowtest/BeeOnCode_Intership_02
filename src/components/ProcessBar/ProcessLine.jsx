import { Box, Typography } from "@mui/material";
import { setCurrent } from "features/Processes/ProcessSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";

function ProcessLine() {
  const processes = useSelector((state) => state?.processes);
  const dispatch = useDispatch();
  const setCurrentClick = (e, index) => {
    dispatch(setCurrent(index));
  };
  return (
    <MainContainer>
      {processes.data.map((proc, index, self) => {
        return (
          <MailwayContainer key={proc.id}>
            <BigCircleContainer
              cur_color={processes.current === proc.id ? proc.color : null}
              onClick={(e) => setCurrentClick(e, proc.id)}
            >
              <CircleContainer cur_color={proc.color} />
            </BigCircleContainer>
            <HorizonalStick
              cur_color={proc.color}
              neig_color={self[index + 1]?.color}
            />
          </MailwayContainer>
        );
      })}
      <MailwayContainer>
        <CircleContainer><Typography>+</Typography></CircleContainer>
      </MailwayContainer>
    </MainContainer>
  );
}

export default ProcessLine;

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  color: theme.palette.primary.text,
  display: "flex",
  padding: `${theme.spacing(3)} 0`,
}));

const MailwayContainer = styled(Box)(({ theme }) => ({
  minWidth: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: "10",
}));

const BigCircleContainer = styled(Box)(({ theme, cur_color }) => ({
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: `${cur_color}65`,
  borderRadius: "50%",
  boxShadow: `0 0 10px ${cur_color}80`,
  cursor: "pointer",
}));

const CircleContainer = styled(Box)(({ theme, cur_color }) => ({
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: cur_color ?? theme.palette.primary.add,
  borderRadius: "50%",
  cursor: cur_color ? "pointer" : "default",
  transition: "filter 0.3s ease",
  "&:hover": {
    filter: "brightness(0.8)",
  },
}));

const HorizonalStick = styled(Box)(({ theme, cur_color, neig_color }) => ({
  width: "100px",
  height: "10px",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  left: "50%",
  zIndex: "-1",
  background: `linear-gradient(to right, ${cur_color}, ${
    neig_color ?? theme.palette.primary.add
  })`,
}));
