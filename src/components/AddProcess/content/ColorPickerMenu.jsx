import React, { memo } from "react";
import { Popper, Paper, Grid, Box } from "@mui/material";
import styled from "styled-components";

const allowedColors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
];

function ColorPickerMenu({ open, anchorEl, onColorSelect = () => {} }) {
  return (
    <PopperContainer
      open={open}
      anchorEl={anchorEl}
      placement='bottom'
      disablePortal
    >
      <PaperContainer>
        <GridContainer container spacing={0}>
          {allowedColors.map((color) => (
            <GridContent item xs={3} key={color}>
              <ColorBox
                style={{ backgroundColor: color }}
                onClick={() => onColorSelect(color)}
              />
            </GridContent>
          ))}
        </GridContainer>
      </PaperContainer>
    </PopperContainer>
  );
}

export default memo(ColorPickerMenu);

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
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary.main}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

const GridContent = styled(Grid)(({ theme }) => ({
  maxWidth: "48px!important",
}));

const ColorBox = styled(Box)(({ theme }) => ({
  width: "48px",
  height: "48px",
  cursor: "pointer",
  transition: "bordet 0.3s",
  "&:hover": {
    border: "2px solid #000",
  },
}));
