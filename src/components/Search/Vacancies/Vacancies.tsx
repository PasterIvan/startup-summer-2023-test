import React, { ChangeEvent, useState } from "react";

import { Button, Flex, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useSearchParams } from "react-router-dom";

import { useAppSelector } from "../../../hooks/hooks";

import { Vacancy } from "./Vacancy";

export const Vacancies: React.FC = () => {
  const { vacancies } = useAppSelector((state) => state.vacancies);
  const { paramsState } = useAppSelector((state) => state.filters);
  const [searchParams, setSearchParams] = useSearchParams();

  const [keyword, setKeyword] = useState(paramsState.keyword);

  const setKeywordSearch = (): void => {
    const queryParams: {
      keyword?: string;
    } = {};

    if (keyword) queryParams.keyword = keyword;
    else searchParams.delete("keyword");

    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...queryParams,
    });
  };

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
        defaultValue={keyword}
        placeholder="Введите название вакансии"
        rightSection={
          <Button radius="md" onClick={setKeywordSearch}>
            Поиск
          </Button>
        }
        rightSectionWidth={100}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setKeyword(event.currentTarget.value);
        }}
      />
      {vacancies.map((vacancy) => (
        <Vacancy key={vacancy.id} vacancy={vacancy} />
      ))}
    </Flex>
  );
};
