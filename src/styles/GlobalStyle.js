import styledNormalize from "styled-normalize"
import { createGlobalStyle } from "styled-components"
import fonts from "./fonts"

export default createGlobalStyle`
  ${styledNormalize}

  *, *:before, *:after {
    font-family: Brandon;
    box-sizing: border-box;
  }
  
  font-size: 12px;

  @media (min-width: 480px) {
    html {
      font-size: 16px;
    }
  }

  @font-face {
    font-family: "Brandon";
    font-style: normal;
    font-weight: 700;
    src: url(${fonts.BrandonBoldTTF}) format("truetype"), 
    url(${fonts.BrandonBoldWOFF}) format("woff"),
    url(${fonts.BrandonBoldWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "Brandon";
    font-style: italic;
    font-weight: 700;
    src: url(${fonts.BrandonBoldItalicTTF}) format("truetype"), 
    url(${fonts.BrandonBoldItalicWOFF}) format("woff"),
    url(${fonts.BrandonBoldItalicWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "Brandon";
    font-style: normal;
    font-weight: normal;
    src: url(${fonts.BrandonRegularTTF}) format("truetype"), 
    url(${fonts.BrandonRegularWOFF}) format("woff"),
    url(${fonts.BrandonRegularWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "Brandon";
    font-style: italic;
    font-weight: normal;
    src: url(${fonts.BrandonRegularItalicTTF}) format("truetype"), 
    url(${fonts.BrandonRegularItalicWOFF}) format("woff"),
    url(${fonts.BrandonRegularItalicWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "Brandon";
    font-style: normal;
    font-weight: 500;
    src: url(${fonts.BrandonMediumWOFF}) format("woff"), 
    url(${fonts.BrandonMediumWOFF2}) format("woff2");
  }
`
