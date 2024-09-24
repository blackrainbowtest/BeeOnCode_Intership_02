import React from "react";
import styled from "styled-components";

function SVGPreview({ svgContent }) {
  return <SVGContainer dangerouslySetInnerHTML={{ __html: svgContent }} />;
}

export default SVGPreview;

const SVGContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  & svg {
    width: 100%;
    height: 100%;
    fill: inherit;
  }
`;
