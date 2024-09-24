import { Typography, IconButton } from "@mui/material";
import { ReactComponent as UploadIcon } from "static/upload.svg";

function IconWithText({ text }) {
  return (
    <>
      <IconButton>
        <UploadIcon width={48} height={48} />
      </IconButton>
      <Typography variant='p' fontSize={14}>{text}</Typography>
    </>
  );
}

export default IconWithText;
