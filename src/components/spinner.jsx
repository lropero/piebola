import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const indicator = <LoadingOutlined style={{ fontSize: '5em' }} spin />

const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  padding: 30px;
`

const Spinner = () => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper backgroundColor={theme.spinner.backgroundColor}>
      <Spin indicator={indicator} />
    </Wrapper>
  )
}

export default Spinner
