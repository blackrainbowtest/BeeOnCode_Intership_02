import React, { useState, memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ColorPickerButton from "./ColorPickerButton";
import ColorPickerMenu from "./ColorPickerMenu";
import styled from "styled-components";
import { Box } from "@mui/material";

function CustomColorPicker() {
  const { control } = useFormContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleColorSelect = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <ColorPickerContainer>
      <Controller
        name='color'
        control={control}
        defaultValue='#000000'
        render={({ field: { onChange, value } }) => (
          <>
            <ColorPickerButton onClick={handleClick} selectedColor={value} />
            <ColorPickerMenu
              open={open}
              anchorEl={anchorEl}
              onColorSelect={(color) => {
                onChange(color);
                handleColorSelect();
              }}
            />
          </>
        )}
      />
    </ColorPickerContainer>
  );
}

export default memo(CustomColorPicker);

const ColorPickerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));
