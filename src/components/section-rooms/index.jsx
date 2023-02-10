import React, { memo } from 'react'

import PropTypes from 'prop-types'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'

const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props

  return (
    <RoomsWrapper>
      {
        roomList?.slice(0, 8)?.map(item => {
          return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth}/>
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomsList: PropTypes.array
}

export default SectionRooms