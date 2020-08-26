import React from 'react'
import styled from 'styled-components'
import { Button, Input, InputNumber, Select, Space } from 'antd'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: center;
`

const Filters = ({ filters, handleClearClick, handleFilterChange }) => (
  <Wrapper>
    <Space align='center'>
      <Input onChange={event => handleFilterChange('name', event.target.value)} placeholder='Player' style={{ width: 280 }} value={filters.name} />
      <Select onChange={value => handleFilterChange('position', value)} placeholder='Position' style={{ width: 200 }} value={filters.position}>
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
      <InputNumber max={40} min={18} onChange={value => handleFilterChange('age', value)} placeholder='Age' style={{ width: 120 }} value={filters.age} />
      <Button disabled={!Object.values(filters).some(value => !!value.length)} onClick={handleClearClick}>
        Clear
      </Button>
    </Space>
  </Wrapper>
)

export default Filters
