import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props

  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setNames] = useState(initialName)
  
  const tabsNames = infoData.dest_address?.map(item => item.name)

  const tabClickHandel = useCallback((item) => {
    setNames(item)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabsNames} tabClick={tabClickHandel}/>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%"/>
      <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2