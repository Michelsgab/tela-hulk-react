import {
  Box,
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { parmsApi } from "../../utils/parmsApi";
import { recuperaId, recuperaStorieId } from "./helpers";
import { NewTable, Personagem, StyledTable } from "./style";
import { MarvelRequest } from "./type";
type Props = {
  idCharacter: number | null;
};

export default function Main({ idCharacter }: Props) {
  const [apiData, setApiData] = useState<MarvelRequest>();
  const [idStorie, setIdStorie] = useState<any>();
  const [storiesData, setStoriesData] = useState<any>();

  const parms = parmsApi();
  async function fetchTabela(id: number) {
    console.log(id);
    await fetch(
      `http://gateway.marvel.com/v1/public/stories/${id}?ts=${parms.ts}&apikey=${parms.apiKey}&hash=${parms.hash}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setStoriesData(res.data.results[0].description);
      });
  }

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters/${idCharacter}?ts=${parms.ts}&apikey=${parms.apiKey}&hash=${parms.hash}`
    )
      .then((res) => res.json())
      .then((res) => {
        setApiData(res.data.results[0]);
        setIdStorie(recuperaStorieId(res.data.results[0].stories.items[0].resourceURI));
        console.log(res.data.results[0])
        const id = recuperaStorieId(res.data.results[0].stories.items[0].resourceURI);
        fetchTabela(id);
      });
  }, []);

  async function handleId(id: number) {
    await fetchTabela(id);
    await setIdStorie(id);
  }
  console.log(storiesData);
  

  return (
    <Container>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        fontWeight="500"
        marginTop={5}
      >
        Personagem Marvel
      </Typography>
      <Typography variant="h5" gutterBottom component="div" fontWeight="700">
        {apiData?.name}
      </Typography>

      <Typography gutterBottom>{apiData?.description}</Typography>

      <Grid container>
        <Personagem
          src={`${apiData?.thumbnail.path}.${apiData?.thumbnail.extension}`}
          alt={apiData?.name}
        />
      </Grid>

      <Box marginBottom={5}>
        <TableContainer>
          <Typography
            textAlign="center"
            fontWeight="700"
            mt="2rem"
            marginRight="30px"
            variant="h5"
          >
            Histórias
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <NewTable align="center">
                  <Typography variant="h6">ID</Typography>
                </NewTable>
                <NewTable align="center">
                  <Typography variant="h6">Título</Typography>
                </NewTable>
                <NewTable align="center">
                  <Typography variant="h6">Tipo</Typography>
                </NewTable>
              </TableRow>
            </TableHead>
            <StyledTable>
              {apiData?.stories.items.map((dado, index) => (
                <>
                  <TableRow
                    component={"tr"}
                    key={index}
                    onClick={() => {
                      handleId(recuperaStorieId(dado.resourceURI));
                      // setIdStorie(recuperaStorieId(dado.resourceURI));
                    }}
                  >
                    <NewTable component={"td"} align="center">
                      {recuperaId(`${dado.resourceURI}`)}
                    </NewTable>
                    <NewTable component={"td"} align="center">
                      {dado.name}
                    </NewTable>
                    <NewTable component={"td"} align="center">
                      {dado.type}
                    </NewTable>
                  </TableRow>
                  {console.log(idStorie, recuperaId(dado.resourceURI))}
                  {idStorie == recuperaId(dado.resourceURI) ? (
                    <TableRow>
                      <NewTable colSpan={3} align="center" bgcolor="red">
                        <Typography color="white">
                          {!storiesData ? "Não há descrições para esse título" : storiesData}
                        </Typography>
                      </NewTable>
                    </TableRow>
                  ) : null}
                </>
              ))}
            </StyledTable>
          </Table>
          <Divider />
        </TableContainer>
      </Box>
    </Container>
  );
}
