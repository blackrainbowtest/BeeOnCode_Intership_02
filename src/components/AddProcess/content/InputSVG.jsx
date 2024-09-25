import React, { useState, useEffect } from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import UploadArea from "./SVGComponent/UploadArea";
import SVGPreview from "./SVGComponent/SVGPreview";
import IconWithText from "./SVGComponent/IconWithText";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

function InputSVG() {
  const { control } = useFormContext();
  const processes = useSelector((state) => state?.processes);
  const [dragging, setDragging] = useState(false);
  const [displayedSvg, setDisplayedSvg] = useState(null);

  const selectedColor = useWatch({
    control,
    name: "color",
    defaultValue: processes.cur_edit
      ? processes.data.filter((proc) => proc.id === processes.cur_edit)[0].color
      : "#000000",
  });

  const svgValue = useWatch({
    control,
    name: "svg",
    defaultValue: "",
  });

  useEffect(() => {
    if (processes.cur_edit) {
      let curr = processes.data.filter(
        (proc) => proc.id === processes.cur_edit
      )[0];
      console.log(curr.svg);
      setDisplayedSvg(curr.svg);
    }
  }, [processes.cur_edit, processes.data, svgValue]);

  useEffect(() => {
    if (displayedSvg) {
      const updatedSvg = displayedSvg.replace(
        /fill="[^"]*"/g,
        `fill="${selectedColor}"`
      );
      setDisplayedSvg(updatedSvg);
    }
  }, [displayedSvg, selectedColor]);

  const handleFileChange = (selectedFile, onChange) => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        let svgContent = reader.result;
        svgContent = svgContent.replace(
          /fill="[^"]*"/g,
          `fill="${selectedColor}"`
        );
        setDisplayedSvg(svgContent);
        onChange(svgContent);
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleDrop = (e, onChange) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    handleFileChange(selectedFile, onChange);
  };

  const handlePaste = (e, onChange) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const items = clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type === "image/svg+xml") {
        const file = item.getAsFile();
        handleFileChange(file, onChange);
      }
    }
  };

  return (
    <Controller
      name='svg'
      control={control}
      defaultValue=''
      rules={{
        required: "SVG is required",
      }}
      render={({ field: { onChange, value }, fieldState }) => (
        <UploadArea
          onFileChange={(file) => handleFileChange(file, onChange)}
          onDrop={(e) => handleDrop(e, onChange)}
          onPaste={(e) => handlePaste(e, onChange)}
          dragging={dragging}
          setDragging={setDragging}
        >
          {displayedSvg ? (
            <>
              <SVGPreview svgContent={displayedSvg} />
              <Typography variant='p' fontSize={14}>
                SVG загружен. Вы можете выбрать другой.
              </Typography>
            </>
          ) : (
            <IconWithText
              text={
                dragging
                  ? "Бросьте тут SVG"
                  : "Загрузите SVG (или перетащите / вставьте)"
              }
            />
          )}
          {fieldState.error && (
            <Typography color='error' variant='body2'>
              {fieldState.error.message}
            </Typography>
          )}
        </UploadArea>
      )}
    />
  );
}

export default InputSVG;
