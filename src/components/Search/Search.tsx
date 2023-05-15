import React, { useEffect, useMemo } from "react";

import { Container, Flex } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

import { setParamsState } from "../../bll/filtersReducer";
import { vacancyTC } from "../../bll/vacanciesReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getActualSearchParams } from "../../utils/getActualParams";
import { Filters } from "../common/Filters";

import { Vacancies } from "./Vacancies";

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const { paramsState } = useAppSelector((state) => state.filters);

  const [searchParams, setSearchParams] = useSearchParams();

  const URLParams = useMemo(
    () => getActualSearchParams(searchParams),
    [searchParams],
  );

  const setFilters = (
    catalog: string | undefined,
    paymentFrom: string | undefined,
    paymentTo: string | undefined,
  ): void => {
    const queryParams: {
      catalogues?: string;
      payment_from?: string;
      payment_to?: string;
      published?: string;
    } = {};

    if (catalog) queryParams.catalogues = catalog;
    else searchParams.delete("catalogues");

    if (paymentFrom) queryParams.payment_from = paymentFrom;
    else searchParams.delete("payment_from");

    if (paymentTo) queryParams.payment_to = paymentTo;
    else searchParams.delete("payment_to");

    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...queryParams,
      page: "0",
    });
  };

  useEffect(() => {
    if (JSON.stringify(paramsState) !== JSON.stringify(URLParams))
      dispatch(setParamsState(URLParams));
  }, [dispatch, URLParams]);

  useEffect(() => {
    if (JSON.stringify(paramsState) === JSON.stringify(URLParams))
      dispatch(vacancyTC(paramsState));
  }, [dispatch, paramsState]);

  return (
    <Container size="lg">
      <Flex
        py={40}
        gap="md"
        justify="space-between"
        direction="row"
        wrap="nowrap"
      >
        <Filters
          onChangeFilters={(catalog, paymentFrom, paymentTo) =>
            setFilters(catalog, paymentFrom, paymentTo)
          }
        />
        <Vacancies />
      </Flex>
    </Container>
  );
};
