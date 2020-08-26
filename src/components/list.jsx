import React from 'react'
import { differenceInYears } from 'date-fns'
import { Table } from 'antd'

const columns = [
  {
    dataIndex: 'name',
    key: 'player',
    title: 'Player'
  },
  {
    dataIndex: 'position',
    key: 'position',
    title: 'Position'
  },
  {
    dataIndex: 'nationality',
    key: 'nationality',
    title: 'Nationality'
  },
  {
    dataIndex: 'dateOfBirth',
    key: 'age',
    render: dateOfBirth => differenceInYears(new Date(), new Date(dateOfBirth)),
    sorter: (a, b) => differenceInYears(new Date(), new Date(a.dateOfBirth)) - differenceInYears(new Date(), new Date(b.dateOfBirth)),
    title: 'Age'
  }
]

const List = ({ players }) => {
  return (
    <Table
      columns={columns}
      dataSource={players}
      pagination={false}
      rowKey='name'
      scroll={{ y: window.innerHeight - (64 + 64 + 55) }}
      showSorterTooltip={false}
    />
  )
}

export default List
