import React from "react"
import css from "./ProjectPreview.module.css"

export default function ProjectPreview({ project }) {
  return (
    <div className={css.ProjectPreview}>
      {project.video ? (
        <video controls preload="metadata">
          <source src={project.video} type='video/webm' />
        </video>
      ) : (
        <img src={project.image} alt={project.title} />
      )}
    </div>
  )
}
