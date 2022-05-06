import styled from "@emotion/styled";
import { Alert, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  `;

export const StyledHeader = styled(Grid)`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  `;