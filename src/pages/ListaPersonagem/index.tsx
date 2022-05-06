import styled from "@emotion/styled";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { parmsApi } from "../../utils/parmsApi";
import { StyledHeader } from "../PersonagensMarvel/style";
import { MarvelRequest } from "./type";

type Props = {
  idCharacter: number | null;
};

export default function ListaAparicoes({ idCharacter }: Props) {
  const [apiData, setApiData] = useState<MarvelRequest>();
  const MyListItem = styled(ListItem)({
    display: "list-item",
    listStyle: "disc",
    color: "wheat",
    lineHeight: "1.5rem",
    padding: "0",
  });

  const parms = parmsApi();
  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters/${idCharacter}?ts=${parms.ts}&apikey=${parms.apiKey}&hash=${parms.hash}`
    )
      .then((res) => res.json())
      .then((res) => {
        setApiData(res.data.results[0]);
      });
  }, []);

  return (
    <Grid marginTop={4}>
      <List>
        <Typography color="wheat" fontWeight="700">
          Lista de Aparições (comics)
        </Typography>
        {apiData?.series.items.map((dado, index) => (
          <MyListItem key={index}>{dado.name}</MyListItem>
        ))}
      </List>
    </Grid>
  );
}
