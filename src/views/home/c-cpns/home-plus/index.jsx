import PropTypes from 'prop-types'
import React, { memo } from 'react'

import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-header'
import { PlusWrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomePlus = memo((props) => {
  const { infoData } = props
  
  return (
    <PlusWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className="room-list">
        <ScrollView isLinear={false}>
          {
            infoData.list.map(item => {
              return <RoomItem key={item.id} itemData={item} itemWidth="20%"/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter/>
    </PlusWrapper>
  )
})

HomePlus.propTypes = {
  infoData: PropTypes.object
}

export default HomePlus