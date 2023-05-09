import React, { useEffect, useMemo } from "react";

import { Container, Flex } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

import { cataloguesTC } from "../../bll/filtersReducer";
import { setPackParams, vacancyTC } from "../../bll/vacanciesReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getActualSearchParams } from "../../utils/getActualParams";

import { Filters } from "./Filters/Filters";
import { Vacancies } from "./Vacancies/Vacancies";

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const { vacancies } = useAppSelector((state) => state.vacancies);
  const params = useAppSelector((state) => state.vacancies.searchParams);

  const [searchParams] = useSearchParams();
  const URLParams = useMemo(
    () => getActualSearchParams(searchParams),
    [searchParams],
  );

  useEffect(() => {
    dispatch(cataloguesTC());
  }, []);

  useEffect(() => {
    dispatch(setPackParams({ ...URLParams, count: 4, page: 1 }));
  }, [dispatch, URLParams]);

  useEffect(() => {
    dispatch(vacancyTC(params));
  }, [params]);
  console.log(params);

  return (
    <Container size="lg" px="xs" pt="100px">
      <Flex
        mih={550}
        gap="xl"
        justify="space-between"
        direction="row"
        wrap="nowrap"
      >
        <Filters />
        <Vacancies vacancies={vacancies} />
      </Flex>
    </Container>
  );
};
