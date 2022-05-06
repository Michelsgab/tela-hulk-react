import { AppBar, Link } from "@mui/material";
import { Box } from "@mui/system";

export default function Rodape() {
  return (
    <AppBar position="static" elevation={0}>
      <Box
        display="flex"
        bgcolor={"#333333"}
        padding="0.8rem 0"
        justifyContent="center"
      >
          <Link 
            href="https://marvel.com" 
            underline="none"
            target="_blank"
            color="#fff"
            padding="0.5rem"
            fontWeight="500"
          >
            Data provided by Marvel. © 2022 MARVEL
          </Link>
      </Box>
    </AppBar>
  );
}
