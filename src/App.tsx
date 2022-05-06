import { Alert, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Rodape from "./components/Footer";
import Cabecalho from "./components/Header";
import ListaAparicoes from "./pages/ListaPersonagem";
import Main from "./pages/Personagem";
import { StyledHeader } from "./pages/PersonagensMarvel/style";

type Props = {
  idCharacter: number | null;
};

export default function App({ idCharacter }: Props) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  return (
    <StyledHeader>
      <Grid>
        <Cabecalho />
      </Grid>
      <Grid flex={1}>
        <Grid mx="auto" container xs={12} md={9} sm={12} flex={1} item>
          <Grid xs={11} md={8} sm={12} item>
            <Main idCharacter={idCharacter} />
          </Grid>
          <Grid bgcolor="#C0392B" xs={12} md={4} sm={12} item>
            <Grid width={"70%"} marginX="auto" display="flex">
              <ListaAparicoes idCharacter={idCharacter} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Rodape />
      </Grid>
    </StyledHeader>
  );
}
