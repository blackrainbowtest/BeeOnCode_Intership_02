import { useRef } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

function UploadArea({
  onFileChange,
  onDrop,
  onPaste,
  dragging,
  setDragging,
  children,
}) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onFileChange(selectedFile);
  };

  return (
    <StyledUploadContainer
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        setDragging(false);
        onDrop(e);
      }}
      onPaste={(e) => onPaste(e)}
      onClick={() => fileInputRef.current.click()}
      dragging={dragging ? "true" : "false"}
    >
      <input
        type='file'
        accept='.svg'
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {children}
    </StyledUploadContainer>
  );
}

export default UploadArea;

const StyledUploadContainer = styled(Box)(({ theme, dragging }) => ({
  border: `${theme.spacing(1)} dashed ${
    dragging ? theme.palette.primary.light : theme.palette.primary.main
  }`,
  borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(2),
  backgroundColor: dragging ? theme.palette.action.selected : "transparent",
}));
