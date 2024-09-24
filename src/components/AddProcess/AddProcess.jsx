import { Box } from "@mui/material";
import Modal from "components/Modal";
import { memo, useState } from "react";
import { ReactComponent as AddSvg } from "static/add_image.svg";
import styled from "styled-components";
import AddForm from "./AddForm";

function AddProcess() {
  const [isOpen, setIsOpen] = useState(false);
  const addProcess = (e) => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MainContainer>
        <SVGContainer onClick={(e) => addProcess(e)}>
          <AddSvg style={{ fill: "inherit", width: "50px", height: "50px" }} />
        </SVGContainer>
      </MainContainer>
      <Modal open={isOpen} handleClose={handleClose}>
        <AddForm handleClose={handleClose}/>
      </Modal>
    </>
  );
}

export default memo(AddProcess);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "100px",
  padding: theme.spacing(5),
  color: theme.palette.primary.text,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SVGContainer = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  fill: theme.palette.primary.add,
  cursor: "pointer",
}));
