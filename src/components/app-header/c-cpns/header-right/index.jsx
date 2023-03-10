import React, { memo, useState, useEffect } from 'react'

import { RightWrapper } from './style'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'

const HeaderRight = memo(() => {
  const [showPanel, setPanel] = useState(false)

  useEffect(() => {
    function windowClickHandel() {
      setPanel(false)
    }
    window.addEventListener("click", windowClickHandel)

    return () => {
      window.removeEventListener("click", windowClickHandel)
    }
  }, [])

  function porfileClickHandel(e) {
    // 阻止冒泡行为
    e.stopPropagation()
    setPanel(!showPanel)
  }

  return (
    <RightWrapper>
      <div className="btns"> 
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn"><IconGlobal/></span>
      </div>
      <div className="profile">
        <div className='btn' onClick={e => porfileClickHandel(e)}>
          <IconMenu/>
          <IconAvatar/>
        </div>
        { showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        ) }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight