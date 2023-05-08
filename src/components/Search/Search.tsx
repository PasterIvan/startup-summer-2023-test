import React from 'react'
import { Filters } from './Filters/Filters'
import { HEADER_HEIGHT } from '../Header/Head'
import { Vacancies } from './Vacancies/Vacancies'

export const Search: React.FC = () => {
  return (
        <div style={{ display: 'flex', marginTop: HEADER_HEIGHT }}>
            <Filters />
            <Vacancies />
        </div>
  )
}
