import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledHeader, StyledLink } from "./style";
import { parmsApi } from "../../utils/parmsApi";
import { MarvelRequest } from "./type";
import Cabecalho from "../../components/Header";
import Rodape from "../../components/Footer";

type Props = {
  setIdCharacter: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function PersonagensMarvel({ setIdCharacter }: Props) {
  const [apiData, setApiData] = useState<MarvelRequest[]>([]);

  const parms = parmsApi();
  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters?ts=${parms.ts}&apikey=${parms.apiKey}&hash=${parms.hash}`
    )
      .then((res) => res.json())
      .then((res) => {
        setApiData(res.data.results);
      });
  }, []);

  return (
    <StyledHeader>
      <Grid>
        <Cabecalho />
      </Grid>
      <Grid container justifyContent="center" flex={1}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          xs={10}
          md={10}
          sm={10}
          item
        >
          {apiData?.map((dado: MarvelRequest, index) => (
            <Grid md={3} sm={6} xs={12} my={2} item key={index}>
              <Card variant="outlined">
                <StyledLink to="personagem">
                  <CardActionArea onClick={() => setIdCharacter(dado.id)}>
                    <CardMedia
                      component="img"
                      image={`${dado.thumbnail.path}.${dado.thumbnail.extension}`}
                      height="300px"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign={"center"}
                        padding="5px"
                        bgcolor="#C0392B"
                        color="#FFF"
                      >
                        {dado.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </StyledLink>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid>
        <Rodape />
      </Grid>
    </StyledHeader>
  );
}
