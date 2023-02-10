import { fetchEntireRoomListAction } from '@/stores/modules/entire'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntrePagination from './c-cpns/entire-rooms'
import EntireRooms from './c-cpns/entire-pagination'
import { EntireWrapper } from './style'
import { changeHeaderConfigAction } from '@/stores/modules/main'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireRoomListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false}))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntrePagination/>
      <EntireRooms/>
    </EntireWrapper>
  )
})

export default Entire