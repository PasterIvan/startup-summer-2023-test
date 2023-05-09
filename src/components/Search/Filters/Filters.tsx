import React, { useState } from "react";

import { Box, Select, Text, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

import { useAppSelector } from "../../../hooks/hooks";
import { InputPayment } from "../../common/InputPayment";

export const Filters: React.FC = () => {
  const { catalogues } = useAppSelector((state) => state.filters);
  const [catalog, setCatalog] = useState<string | null>(null);
  const [paymentFrom, setPaymentFrom] = useState<number>(0);
  const [paymentTo, setPaymentTo] = useState<number>(0);

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
        onChange={(value) => setCatalog(value)}
        radius="md"
        size="md"
        styles={{ rightSection: { pointerEvents: "none" } }}
        pb={20}
        data={catalogues.map((el) => el.title_trimmed)}
        sx={{ width: 275, borderRadius: "0.5rem" }}
      />
      <Text fw={700} inline>
        Оклад
      </Text>
      <InputPayment
        placeholder="От"
        min={0}
        onChange={(val) => {
          setPaymentFrom(val);
        }}
      />
      <InputPayment
        placeholder="До"
        min={0}
        onChange={(val) => {
          setPaymentTo(val);
        }}
      />
      <Button fullWidth size="md" mt={20}>
        Применить
      </Button>
    </Box>
  );
};
