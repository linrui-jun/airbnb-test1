import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/stores/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'
import LongforWrapper from './c-cpns/home-longfor'
import HomePlus from './c-cpns/home-plus'
import { changeHeaderConfigAction } from '@/stores/modules/main'

const Home = memo(() => {
  const { 
    goodPriceInfo, 
    highScoreInfo, 
    discountInfo, 
    recommendInfo, 
    longforInfo ,
    plusInfo
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
        
        {isEmptyO(longforInfo) && <LongforWrapper infoData={longforInfo}/>}

        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}

        {isEmptyO(plusInfo) && <HomePlus infoData={plusInfo}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home