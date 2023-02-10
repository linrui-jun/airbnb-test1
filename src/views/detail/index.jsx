import PictureBrowser from '@/base-ui/picture-borwser'
import { changeHeaderConfigAction } from '@/stores/modules/main'
import React, { Fragment, memo, useState } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false)

  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false}))
  }, [dispatch])

  function pictureItem(url = detailInfo?.picture_urls[0]) {
    return (
      <div className="item" onClick={e => setShowBrowser(true)}>
        <img src={url} alt=""/>
        <div className="cover"></div>
      </div>
    )
  }

  return (
    <DetailWrapper>
      <div className="pictures">
        <div className="left">
        {pictureItem()}
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <Fragment key={item}>
                  {pictureItem(item)}
                </Fragment>
              )
            })
          }
        </div>
      </div>

      <div className="show-btn" onClick={e => setShowBrowser(true)}>查看照片</div>

      {showBrowser && <PictureBrowser pictureUrls={detailInfo.picture_urls} closeClick={e => setShowBrowser(false)} />}
    </DetailWrapper>
  )
})

export default Detail