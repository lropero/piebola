import React, { useContext } from 'react'
import { Layout as L } from 'antd'
import { ThemeContext } from 'styled-components'

import { Nav } from 'piebola/components'

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext)

  return (
    <L>
      <L.Header
        style={{
          backgroundColor: theme.header.backgroundColor,
          boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2)',
          position: 'fixed',
          width: '100%',
          zIndex: 1
        }}
      >
        <Nav />
      </L.Header>
      <L.Content style={{ marginTop: 64 }}>{children}</L.Content>
    </L>
  )
}

export default Layout
