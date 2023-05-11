import React from "react";

import { Box, Flex, Text, Image } from "@mantine/core";

import pin from "../../../img/pin.svg";
import star from "../../../img/Star.svg";

type VacancyProps = {
  vacancy: any;
};
export const Vacancy: React.FC<VacancyProps> = ({ vacancy }) => {
  const payment = (from: number, to: number): string => {
    let res = "";

    if (from !== 0 && to !== 0) {
      res +=
        from === to
          ? `${to} ${vacancy.currency}`
          : `${from} - ${to} ${vacancy.currency}`;
    }
    if (from === 0 && to === 0) {
      res += vacancy.agreement ? `по договоренности` : `не указана`;
    }
    if ((from === 0 && to !== 0) || (from !== 0 && to === 0)) {
      if (from === 0 && to !== 0) res += `до ${to} ${vacancy.currency}`;
      if (from !== 0 && to === 0) res += `от ${from} ${vacancy.currency}`;
    }

    return res;
  };

  return (
    <Box
      pos="relative"
      sx={{
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: "0.7rem",
        width: "100%",
      }}
    >
      <Flex gap="sm" justify="flex-start" align="flex-start" direction="column">
        <Flex w="100%" justify="space-between" direction="row">
          <Text fz="lg" fw={700} c="blue">
            {vacancy.profession}
          </Text>
          <Image maw={24} src={star} alt="Star" />
        </Flex>
        <Flex>
          <Text fw={600}>
            з/п {payment(vacancy.payment_from, vacancy.payment_to)}
          </Text>
          <div style={{ color: "gray", padding: "0 12px" }}>•</div>
          <Text>{vacancy.type_of_work.title}</Text>
        </Flex>
        <Flex align="center">
          <Image maw={13.33} mr={11.33} src={pin} alt="Pin" />
          <Text>{vacancy.town.title}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
