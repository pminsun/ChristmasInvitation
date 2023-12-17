import { css } from "@emotion/react";
import { colors } from "./Color";

export const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "SCoreDream";
    font-weight: 400;
  }
  body {
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0;
    font-size: 14px;
    color: ${colors.text};
    background: ${colors.background};
  }
  em {
    font-style: normal;
  }
  ul,
  li {
    list-style: none;
  }
  input,
  select {
    border-radius: 5px;
    color: ${colors.text};
    background: ${colors.background};
  }
  input:focus,
  select:focus {
    outline: none;
  }
  a {
    text-decoration: none;
    color: ${colors.text};
  }
  button {
    border: none;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    color: ${colors.text};
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input:autofill,
  input:autofill:hover,
  input:autofill:focus,
  input:autofill:active {
    box-shadow: 0 0 0 1000px ${colors.background} inset;
    -webkit-box-shadow: 0 0 0 30px ${colors.background} inset !important;
    -webkit-text-fill-color: ${colors.text} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
  @media (max-width: 1023px) {
    #__next {
      height: 100%;
    }
  }
`;

export const loginReset = () => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "SCoreDream";
    font-weight: 400;
  }
  body {
    margin: 0;
    height: calc(var(--vh, 1vh) * 100);
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  input:autofill,
  input:autofill:hover,
  input:autofill:focus,
  input:autofill:active {
    box-shadow: 0 0 0 100rem ${colors.chartBackground} inset;
    -webkit-box-shadow: 0 0 0 30px ${colors.chartBackground} inset !important;
    -webkit-text-fill-color: ${colors.white} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
  // chrome
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px ${colors.chartBackground} inset;
    box-shadow: 0 0 0 1000px ${colors.chartBackground} inset;
    -webkit-text-fill-color: ${colors.white} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
  #__next {
    height: 100%;
  }
`;

export const loadingReset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background-color: ${colors.chartBackground};
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

// Common flex style
export const flexStyle = css`
  display: flex;
  align-items: center;
`;

export const flexCenterStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Modal style
export const modalTitle = css`
  svg {
    font-size: 20px;
  }
  span {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const modalContentText = css`
  margin: auto 0;

  @media (max-width: 1280px) {
    font-size: 12px;
  }
`;

export const modalBottomBtnArea = css`
  display: flex;
  margin-left: auto;
  margin-top: 12px;

  div:last-of-type {
    margin-left: 10px;
  }

  button {
    height: 32px;
    line-height: 3px;
    border-radius: 8px;
    color: ${colors.text};
    text-align: center;
    user-select: none;
    font-size: 13px;
    width: 70px;
  }
`;
