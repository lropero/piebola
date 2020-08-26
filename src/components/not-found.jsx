import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { MehTwoTone } from '@ant-design/icons'
import { Space, Typography } from 'antd'

const Center = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const NotFound = () => {
  const theme = useContext(ThemeContext)

  return (
    <Center>
      <Space align='center' direction='vertical'>
        <MehTwoTone style={{ fontSize: '8em' }} />
        <Typography.Title level={3} style={{ color: theme.notFound.color }}>
          Page not found
        </Typography.Title>
      </Space>
    </Center>
  )
}

export default NotFound
