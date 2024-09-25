import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MenuContent from "./MenuContent";

function MenuDots({ process }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuRef = useRef(null);

  const openContent = (e) => {
    e.stopPropagation();
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const closeContent = () => {
    setAnchorEl(null);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeContent();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const open = Boolean(anchorEl);

  return (
    <>
      <MainContainer currentcolor={process.color} onClick={openContent}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          color={process.color}
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='12' cy='5' r='2' fill='currentColor' />
          <circle cx='12' cy='12' r='2' fill='currentColor' />
          <circle cx='12' cy='19' r='2' fill='currentColor' />
        </svg>
      </MainContainer>
      <MenuContent
        open={open}
        anchorEl={anchorEl}
        onClose={closeContent}
        ref={menuRef}
        color={process.color}
        id={process.id}
      />
    </>
  );
}

export default MenuDots;

const MainContainer = styled(Box)(({ theme, currentcolor }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  right: "5%",
  bottom: "24%",
  cursor: "pointer",
  "& :hover": {
    backgroundColor: `${currentcolor}40`,
    boxShadow: `0 0 10px ${currentcolor}80`,
    borderRadius: "50%",
  },
}));
