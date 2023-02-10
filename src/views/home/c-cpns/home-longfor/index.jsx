import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className='longfor-list'>
        <ScrollView isLinear={false}>
          {
            infoData.list.map(item => {
              return (
                <LongforItem key={item.city} itemData={item}/>
              )
            })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3