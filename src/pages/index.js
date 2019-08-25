import React from "react"
import useHover from "../helpers/useHover"
import { graphql } from "gatsby"

export const query = graphql`
  {
    event(info: { city: { eq: "Barcelona" } }) {
      info {
        icon {
          publicURL
        }
        iconHover {
          publicURL
        }
      }
      site {
        city
      }
      speakers {
        id
        name
      }
    }
  }
`

const Index = ({ data }) => {
  const [hoverRef, isHovering] = useHover()
  const icon = data.event.info.icon.publicURL
  const iconHover = data.event.info.iconHover.publicURL
  const city = data.event.site.city
  const speakers = data.event.speakers

  return (
    <div ref={hoverRef}>
      <img
        src={isHovering ? iconHover : icon}
        alt={city}
        style={{ maxWidth: 200 }}
      />
      <ul>
        {speakers.map(speaker => (
          <li key={speaker.id}>{speaker.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Index
