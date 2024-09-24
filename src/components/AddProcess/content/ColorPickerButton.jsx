import React, { memo } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

function ColorPickerButton({ onClick, selectedColor }) {
  return (
    <ButtonContainer
      variant='outlined'
      onClick={onClick}
      style={{ backgroundColor: selectedColor }}
    >
      Выбрать цвет
    </ButtonContainer>
  );
}

export default memo(ColorPickerButton);

const ButtonContainer = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "56px",
  borderColor: `${theme.palette.primary.main}!important`,
  "&:hover": {
    borderColor: `${theme.palette.primary.add}!important`,
    backgroundColor: `${theme.palette.primary.main}!important`,
  },
  color: `${theme.palette.primary.text}!important`,
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
}));
