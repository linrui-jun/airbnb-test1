import { useEffect, useState } from "react";
import { throttle } from 'underscore'

export default function useScrollProsition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handelScroll = throttle(function() {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)

    window.addEventListener("scroll", handelScroll)
    return () => {
      window.removeEventListener("scroll", handelScroll)
    }
  }, [])

  return {scrollX, scrollY}
}