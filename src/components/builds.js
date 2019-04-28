import React from "react"
import PropTypes from "prop-types"
import Section from "../styles/Section"
import { HeaderLineBelow } from "../styles/Header"
import styled from "styled-components"
import Project from "./project.js"

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Builds = ({ title, projects }) => (
  <Section>
    <HeaderLineBelow>
      <span>{title}</span>
    </HeaderLineBelow>
    <ProjectContainer>
      {projects.map(p => (
            <Project
              title={p.title}
              tags={p.tags}
            />
      ))}
    </ProjectContainer>
  </Section>
)

Builds.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
      bgImg: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Builds
