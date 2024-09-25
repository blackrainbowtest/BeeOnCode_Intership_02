import { IconButton, Paper, Popper } from "@mui/material";
import styled from "styled-components";
import { forwardRef } from "react";
import { ReactComponent as EditIcon } from "static/edit.svg";
import { ReactComponent as DeleteIcon } from "static/delete.svg";
import { deleteProcessesOrder } from "features/Processes/ProcessAPI";
import { useDispatch } from "react-redux";
import { setCurEdit } from "features/Processes/ProcessSlice";

const MenuContent = forwardRef(
  ({ open, anchorEl, onClose, color, id }, ref) => {
    const dispatch = useDispatch();

    const deleteProc = (e) => {
      dispatch(deleteProcessesOrder(id));
    };

    const setCurEditProc = (e) => {
      dispatch(setCurEdit(id));
    };

    return (
      <PopperContainer
        open={open}
        anchorEl={anchorEl}
        placement='bottom-start'
        disablePortal
        ref={ref}
      >
        <PaperContainer onClick={onClose}>
          <IconButton onClick={setCurEditProc}>
            <EditIcon width={24} height={24} color={color} />
          </IconButton>
          <IconButton onClick={deleteProc}>
            <DeleteIcon width={24} height={24} color={color} />
          </IconButton>
        </PaperContainer>
      </PopperContainer>
    );
  }
);

export default MenuContent;

const PopperContainer = styled(Popper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  zIndex: "55",
}));

const PaperContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})!important`,
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.text,
}));
