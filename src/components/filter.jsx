import React from 'react'
import styled from 'styled-components'
import { Button, Input, InputNumber, Select, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { resetFilters } from 'piebola/store/filters'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: center;
`

const Filter = ({ handleFilterChange }) => {
  const filtersStore = useSelector(state => state.filters)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(resetFilters())
  }

  return (
    <Wrapper>
      <Space align='center'>
        <Input onChange={event => handleFilterChange('name', event.target.value)} placeholder='Player Name' style={{ width: 280 }} value={filtersStore.name} />
        <Select onChange={value => handleFilterChange('position', value)} placeholder='Position' style={{ width: 200 }} value={filtersStore.position}>
          <Select.Option value='Attacking Midfield'>Attacking Midfield</Select.Option>
          <Select.Option value='Central Midfield'>Central Midfield</Select.Option>
          <Select.Option value='Centre-Back'>Centre-Back</Select.Option>
          <Select.Option value='Centre-Forward'>Centre-Forward</Select.Option>
          <Select.Option value='Defensive Midfield'>Defensive Midfield</Select.Option>
          <Select.Option value='Keeper'>Keeper</Select.Option>
          <Select.Option value='Left Midfield'>Left Midfield</Select.Option>
          <Select.Option value='Left Wing'>Left Wing</Select.Option>
          <Select.Option value='Left-Back'>Left-Back</Select.Option>
          <Select.Option value='Right-Back'>Right-Back</Select.Option>
        </Select>
        <InputNumber max={40} min={18} onChange={value => handleFilterChange('age', value)} placeholder='Age' style={{ width: 120 }} value={filtersStore.age} />
        <Button disabled={!Object.values(filtersStore).some(value => !!value.length)} onClick={handleClick}>
          Clear
        </Button>
      </Space>
    </Wrapper>
  )
}

export default Filter
