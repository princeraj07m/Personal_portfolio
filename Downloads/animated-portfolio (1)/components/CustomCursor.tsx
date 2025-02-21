"use client"

import { useEffect, useState } from "react"

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      const onLinkHoverStart = () => {
        setLinkHovered(true)
      }

      const onLinkHoverEnd = () => {
        setLinkHovered(false)
      }

      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", onLinkHoverStart)
        el.addEventListener("mouseout", onLinkHoverEnd)
      })
    }

    addEventListeners()
    handleLinkHoverEvents()

    return () => removeEventListeners()
  }, [])

  const cursorClasses = `custom-cursor ${hidden ? "opacity-0" : "opacity-100"} 
    ${clicked ? "scale-75" : "scale-100"} ${linkHovered ? "hover" : ""}`

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

export default CustomCursor

