import React from "react";

import { Input, Button, Flex } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { Vacancy } from "./Vacancy";

type VacanciesProps = {
  vacancies: any[];
};

export const Vacancies: React.FC<VacanciesProps> = ({ vacancies }) => {
  return (
    <Flex
      mih={50}
      miw={773}
      gap="sm"
      justify="flex-start"
      align="flex-start"
      direction="column"
      wrap="nowrap"
    >
      <Input
        size="lg"
        radius="0.7rem"
        miw={773}
        icon={<IconSearch size="1.5rem" />}
        placeholder="Введите название вакансии"
        rightSection={<Button>Поиск</Button>}
        rightSectionWidth={100}
      />
      {vacancies.map((vacancy) => (
        <Vacancy key={vacancy.id} vacancy={vacancy} />
      ))}
    </Flex>
  );
};
