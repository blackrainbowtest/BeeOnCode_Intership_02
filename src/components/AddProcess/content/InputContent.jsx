import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";

function InputContent() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name='name'
      control={control}
      defaultValue=''
      rules={{
        required: "Name is required",
        validate: {
          startsWithCapital: (value) =>
            /^[A-ZА-Я\u0531-\u054D].*/.test(value) || "Name must start with a capital letter",
          noSpecialChars: (value) =>
            /^[A-Za-zА-Яа-я0-9\s\u0531-\u0587]+$/.test(value) ||
          "Name cannot contain special characters",
        },
      }}
      render={({ field }) => (
        <TextFieldContainer
          {...field}
          label='Name'
          variant='outlined'
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
        />
      )}
    />
  );
}

export default InputContent;

const TextFieldContainer = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-root": {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.text,
    borderColor: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.add,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.add,
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.secondary.text,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.primary.add,
  },
  "& .MuiInputBase-input": {
    maxHeight: "32px",
    overflow: "hidden",
  },
}));
