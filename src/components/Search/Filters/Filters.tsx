import React, { useEffect, useState } from "react";

import { Box, Select, Text, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useSearchParams } from "react-router-dom";

import { cataloguesTC } from "../../../bll/filtersReducer";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { InputPayment } from "../../common/InputPayment";

type FiltersProps = {
  onChangeFilters: (
    catalog: string | undefined,
    payment_from: string | undefined,
    payment_to: string | undefined,
  ) => void;
};

export const Filters: React.FC<FiltersProps> = ({ onChangeFilters }) => {
  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state) => state.filters);
  const [searchParams] = useSearchParams();

  const [catalog, setCatalog] = useState(
    searchParams.get("catalogues") || undefined,
  );
  const [paymentFrom, setPaymentFrom] = useState(
    searchParams.get("payment_from") || undefined,
  );
  const [paymentTo, setPaymentTo] = useState(
    searchParams.get("payment_to") || undefined,
  );

  useEffect(() => {
    dispatch(cataloguesTC());
  }, []);

  return (
    <Box
      maw={400}
      pos="relative"
      mah="360px"
      sx={{
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: "0.7rem",
      }}
    >
      <Text fw={700} size="lg" inline>
        Фильтры
      </Text>
      <Text fw={700} pt={32} pb={8} inline>
        Отрасль
      </Text>
      <Select
        placeholder="Выберете отрасль"
        rightSection={<IconChevronDown size="1rem" />}
        rightSectionWidth={36}
        onChange={(value) => setCatalog(value || undefined)}
        radius="md"
        size="md"
        styles={{ rightSection: { pointerEvents: "none" } }}
        pb={20}
        defaultValue={catalog}
        data={filters.map((el) => ({
          value: el.key.toString(),
          label: el.title_trimmed,
        }))}
        sx={{ width: 275, borderRadius: "0.5rem" }}
      />
      <Text fw={700} inline>
        Оклад
      </Text>
      <InputPayment
        placeholder="От"
        min={1}
        defaultValue={paymentFrom ? Number(paymentFrom) : undefined}
        onChange={(val) => {
          setPaymentFrom(val.toString());
        }}
      />
      <InputPayment
        placeholder="До"
        min={1}
        defaultValue={paymentTo ? Number(paymentTo) : undefined}
        onChange={(val) => {
          setPaymentTo(val.toString());
        }}
      />
      <Button
        fullWidth
        size="md"
        radius="md"
        mt={20}
        onClick={() => onChangeFilters(catalog, paymentFrom, paymentTo)}
      >
        Применить
      </Button>
    </Box>
  );
};
