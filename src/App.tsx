import React from 'react'
import { MantineProvider } from '@mantine/core'

import './App.css'
import { Head } from './components/Header/Head'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Search } from './components/Search/Search'

const links = [
  { link: 'search', label: 'Поиск вакансий' },
  { link: 'favourites', label: 'Избранное' }
]

export const App: React.FC = () => {
  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <Head links={links}/>
          <Routes>
              <Route path="/" element={<Navigate to="search" />} />
              <Route path="search" element={<Search/>} />
              <Route path="favourites" element={<div>Favourites</div>} />
              <Route path="404" element={<h1>404: PAGE NOT FOUND</h1>} />
              <Route path="*" element={<Navigate to="404" />} />
          </Routes>
      </MantineProvider>
  )
}
