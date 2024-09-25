import { Box } from "@mui/material";
import Modal from "components/Modal";
import { memo, useEffect, useState } from "react";
import { ReactComponent as AddSvg } from "static/add_image.svg";
import styled from "styled-components";
import AddForm from "./AddForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurEdit } from "features/Processes/ProcessSlice";

function AddProcess() {
  const [isOpen, setIsOpen] = useState(false);
  const cur_edit = useSelector((state) => state?.processes.cur_edit);
  const dispatch = useDispatch();

  const addProcess = (e) => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    dispatch(setCurEdit(null));
  };

  useEffect(() => {
    if (cur_edit) setIsOpen(true);
  }, [cur_edit]);

  return (
    <>
      <MainContainer>
        <SVGContainer onClick={(e) => addProcess(e)}>
          <AddSvg />
        </SVGContainer>
      </MainContainer>
      <Modal open={isOpen} handleClose={handleClose}>
        <AddForm handleClose={handleClose} />
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
  "& svg": {
    width: "50px",
    height: "50px",
  },
  "& svg:hover": {
    width: "60px",
    height: "60px",
    transform: "translate(-5px, -5px)",
  },
}));
