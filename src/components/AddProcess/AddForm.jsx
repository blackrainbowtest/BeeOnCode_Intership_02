import { Box, Button } from "@mui/material";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import InputContent from "./content/InputContent";
import InputSVG from "./content/InputSVG";
import ColorPicker from "./content/ColorPicker";
import { addProcess } from "features/Processes/ProcessAPI";

function AddForm({ handleClose }) {
  const processes = useSelector((state) => state?.processes.data);
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      name: "",
      svg: "",
      color: "#000000",
    },
  });

  const submitForm = (data) => {
    const highestOrder = processes.reduce((prev, current) => {
      return prev.order > current.order ? prev : current;
    }, processes[0] || null);
    const updatedSvg = data.svg
      .replace(/fill="[^"]*"/g, `fill="${data.color}"`)
      .replace(/<svg([^>]*)>/, `<svg fill="${data.color}"$1>`);
    dispatch(
      addProcess({
        ...data,
        svg: updatedSvg,
        order: highestOrder?.order ? highestOrder.order + 1 : 1,
      })
    );
    handleClose();
  };

  return (
    <FormProvider {...methods}>
      <MainContainer
        component='form'
        onSubmit={methods.handleSubmit(submitForm)}
      >
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
