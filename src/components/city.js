import React from "react"
import useHover from "../helpers/useHover"

const SvgTest = () => {
  const [hoverRef, isHovering] = useHover()

  return (
    <div ref={hoverRef}>
      <img src={isHovering ? iconHover : icon} alt={city} />
    </div>
  )
}
