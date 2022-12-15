import React, { useState, useEffect, useRef } from 'react'

function useHover() {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  function mouseEnter() {
    setHovered(true)
  }

  function mouseLeave() {
    setHovered(false)
  }

  useEffect(() => {
    ref.current.addEventListener('mouseenter', mouseEnter)
    ref.current.addEventListener('mouseleave', mouseLeave)

    return () => {
      ref.current.removeEventListener('mouseenter', mouseEnter)
      ref.current.removeEventListener('mouseleave', mouseLeave)
    }
  }, [])

  return [hovered, ref]
}

export default useHover
