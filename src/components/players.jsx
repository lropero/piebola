import React, { useEffect, useState } from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { differenceInYears } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'

import { Filter, Layout, List, Spinner } from 'piebola/components'
import { updateFilters } from 'piebola/store/filters'
import { updatePlayers } from 'piebola/store/players'
import { useApi } from 'piebola/hooks'

const Players = () => {
  const filteredPlayers = useSelector(
    createSelector(
      state => state.filters,
      state => state.players,
      (filters, players) =>
        Object.keys(filters).reduce(
          (filteredPlayers, input) => {
            switch (input) {
              case 'name':
                return filteredPlayers.filter(player => player.name.toLowerCase().includes(filters[input]))
              case 'position':
                return filteredPlayers.filter(player => player.position.toLowerCase() === filters[input])
              case 'age':
                return filteredPlayers.filter(player => differenceInYears(new Date(), new Date(player.dateOfBirth)).toString() === filters[input])
            }
          },
          [...players]
        )
    )
  )

  const api = useApi()
  const dispatch = useDispatch()

  const [ready, setReady] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      const players = await api.players()
      dispatch(updatePlayers(players))
      setReady(true)
    }
    fetch()
  }, [])

  const handleFilterChange = (input, value) => {
    dispatch(updateFilters({ input, value }))
  }

  return (
    <Layout>
      {ready ? (
        <>
          <Filter handleFilterChange={handleFilterChange} />
          <List players={filteredPlayers} />
        </>
      ) : (
        <Spinner />
      )}
    </Layout>
  )
}

export default Players
