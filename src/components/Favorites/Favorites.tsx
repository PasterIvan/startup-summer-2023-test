import React from "react";

import { Container, Flex } from "@mantine/core";

import { useAppSelector } from "../../hooks/hooks";
import { NotFound } from "../NotFound/NotFound";
import { Vacancy } from "../Search/Vacancies/Vacancy";

export const Favorites: React.FC = () => {
  const { favourites } = useAppSelector((state) => state.auth);

  return (
    <Container>
      <Flex
        py={40}
        gap="md"
        justify="space-around"
        align="center"
        direction="column"
      >
        {favourites.length === 0 ? (
          <NotFound />
        ) : (
          favourites.map((vacancy) => (
            <Vacancy key={vacancy.id} vacancy={vacancy} />
          ))
        )}
      </Flex>
    </Container>
  );
};
