import { AppBar, Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo-marvel.png'

export default function Cabecalho() {
  const LogoMarvel = styled("img")({
    maxHeight: '4rem'
  })

  const navigate = useNavigate();
  return (
    <AppBar position="static" elevation={0}>
      <Box
        display="flex"
        bgcolor={"#780800"}
        padding="0.5rem 0"
        justifyContent="center"
      >
          <Box
            display="flex"
            alignItems="center"
            width="70%">
              <Link to="" onClick={() => navigate(-1)}>
                <LogoMarvel src={Logo} alt="Logo Marvel" />
              </Link>
          </Box>  
      </Box>
    </AppBar>
  )
}
