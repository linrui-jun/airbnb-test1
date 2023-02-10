import PropTypes from 'prop-types'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowleft] = useState(false)
  const [posIndex, setPosIndex] = useState(0)

  const totalDistanceRef = useRef()
  const scrollContentRef = useRef()

  const { isLinear } = props

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth

    totalDistanceRef.current = scrollWidth - clientWidth

    setShowRight(totalDistanceRef.current > 0)
  }, [props.children])

  function controlClickHandel(num) {
    const newIndex = posIndex + num
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft

    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`

    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowleft(newOffsetLeft > 0)
    setPosIndex(newIndex)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control-btn left" onClick={e => controlClickHandel(-1)}>
          <IconArrowLeft/>
        </div>
      )}
      {showRight && (
        <div className="control-btn right" onClick={e => controlClickHandel(1)}>
          <IconArrowRight/>
        </div>
      )}
      {isLinear && <div className="cover-left"></div>}
      {isLinear && <div className="cover-right"></div>}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {
  isLinear: PropTypes.bool
}

export default ScrollView