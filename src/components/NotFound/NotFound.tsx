import React from "react";

import { Container, Image, Text, Button, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import NotFoundImg from "../../img/NotFound.svg";

export const NotFound: React.FC = () => {
  const navigation = useNavigate();

  return (
    <Container size="md" py="xl">
      <Flex justify="space-between" align="center" direction="column">
        <Image src={NotFoundImg} alt="NotFoundImg" maw={240} />
        <Text size={24} fw={700}>
          Упс, здесь еще ничего нет!
        </Text>
        <Button variant="light" onClick={() => navigation("../search")}>
          Поиск Вакансий
        </Button>
      </Flex>
    </Container>
  );
};
