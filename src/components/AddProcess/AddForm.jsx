import { Box, Button } from "@mui/material";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as AddSvg } from "static/add_image.svg";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import InputContent from "./content/InputContent";
import InputSVG from "./content/InputSVG";
import ColorPicker from "./content/ColorPicker";

function AddForm({handleClose}) {
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      name: "",
      svg: "",
      color: "#000000",
    },
  });
  const [processName, setProcessName] = useState("");
  const [selectedSvg, setSelectedSvg] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#000000");

    const selectSvg = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          let svgContent = reader.result;
          svgContent = svgContent.replace(/fill="[^"]*"/g, 'fill="inherit"');
          setSelectedSvg(svgContent);
        };
        reader.readAsText(selectedFile);
      }
    };
    
  const submitForm = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <FormProvider {...methods}>
      <MainContainer component='form' onSubmit={methods.handleSubmit(submitForm)}>
        <InputContent />
        <InputSVG />
        <ColorPicker />
        <Button type='submit' variant='contained' color='primary'>
          Сохранить
        </Button>
      </MainContainer>
    </FormProvider>
  );
}

export default memo(AddForm);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "300px",
  height: "300px",
  padding: theme.spacing(5),
  color: theme.palette.primary.text,
  background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(3),
  alignItems: "center",
  borderRadius: theme.spacing(2),
}));
