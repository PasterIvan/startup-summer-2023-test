import React, { useEffect } from "react";

import { MantineProvider } from "@mantine/core";
import { Navigate, Route, Routes } from "react-router-dom";

import { loginTC } from "./bll/authReducer";
import { Head } from "./components/Header/Head";
import { Search } from "./components/Search/Search";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

const links = [
  { link: "search", label: "Поиск вакансий" },
  { link: "favourites", label: "Избранное" },
];

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { access_token } = useAppSelector((state) => state.auth.login);

  useEffect(() => {
    if (access_token === "") dispatch(loginTC());
  }, []);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div style={{ background: "#F7F7F8" }}>
        <Head links={links} />
        <Routes>
          <Route path="/" element={<Navigate to="search" />} />
          <Route path="search" element={<Search />} />
          <Route path="favourites" element={<div>Favourites</div>} />
          <Route path="404" element={<h1>404: PAGE NOT FOUND</h1>} />
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </div>
    </MantineProvider>
  );
};
