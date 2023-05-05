import React from 'react'
import { MantineProvider } from '@mantine/core'

import './App.css'

export const App: React.FC = () => {
  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
          sdf
      </MantineProvider>
  )
}
