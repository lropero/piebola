import React, { useEffect } from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { differenceInYears } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPlayers } from 'piebola/store/players'
import { Filters, Layout, List, Spinner } from 'piebola/components'
import { resetFilters, updateFilters } from 'piebola/store/filters'

const Players = () => {
  const filtersStore = useSelector(state => state.filters)
  const playersStore = useSelector(state => state.players)

  const filteredPlayers = useSelector(
    createSelector(
      state => state.filters,
      state => state.players,
      (filters, players) =>
        Object.keys(filters).reduce(
          (filteredPlayers, input) => {
            switch (input) {
              case 'age':
                return filteredPlayers.filter(player => differenceInYears(new Date(), new Date(player.dateOfBirth)).toString() === filters[input])
              case 'name':
                return filteredPlayers.filter(player => player.name.toLowerCase().includes(filters[input].toLowerCase()))
              case 'position':
                return filteredPlayers.filter(player => player.position.toLowerCase() === filters[input].toLowerCase())
            }
          },
          [...players]
        )
    )
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [])

  const handleClearClick = () => {
    dispatch(resetFilters())
  }

  const handleFilterChange = (input, value) => {
    dispatch(updateFilters({ input, value }))
  }

  return (
    <Layout>
      {playersStore.length ? (
        <>
          <Filters filters={filtersStore} handleClearClick={handleClearClick} handleFilterChange={handleFilterChange} />
          <List players={filteredPlayers} />
        </>
      ) : (
        <Spinner />
      )}
    </Layout>
  )
}

export default Players
