import { TableBody, TableCell } from "@mui/material";
import { styled } from "@mui/system";

export const NewTable = styled(TableCell)({
  border: "1px solid #000",
});

export const Personagem = styled("img")({
  width: "100%",
});

export const StyledTable = styled(TableBody)`
  :hover {
      cursor: pointer;
  }
`;
