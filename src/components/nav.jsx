import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import Logo from 'piebola/assets/logo.svg'
import { resetFilters } from 'piebola/store/filters'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
`

const Nav = () => {
  const dispatch = useDispatch()

  const handleLogoClick = () => {
    dispatch(resetFilters())
  }

  return (
    <Wrapper>
      <Logo onClick={handleLogoClick} style={{ cursor: 'pointer', height: 64, width: 180 }} />
    </Wrapper>
  )
}
export default Nav
