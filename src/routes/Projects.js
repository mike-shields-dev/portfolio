import css from "./Projects.module.css"
import projectsData from "../data/projects"
import {
  CSS3Icon,
  ExpressIcon,
  HTML5Icon,
  JavaScriptIcon,
  JestIcon,
  NodeJSIcon,
  ReactIcon,
} from "../components/icons/TechIcons"

import { ExternalLinkIcon } from "../components/icons/GenericIcons"

const techIcons = {
  CSS3: <CSS3Icon />,
  Express: <ExpressIcon />,
  HTML5: <HTML5Icon />,
  JavaScript: <JavaScriptIcon />,
  Jest: <JestIcon />,
  NodeJS: <NodeJSIcon />,
  React: <ReactIcon />,
}

export default function Projects() {
  return (
    <main className={css.Projects}>
      {projectsData.map((project, i) => (
        <article
          key={`${project.title}-article`}
          className={css.ProjectArticle}>
          <header className={css.ProjectHeader}>
            <h2 className={css.ProjectTitle}>{project.title}</h2>
            <a
              className={css.ProjectLink}
              href={project.url}
              target='_blank'
              rel='noreferrer'>
              <ExternalLinkIcon />
            </a>
          </header>
          <img
            className={css.ProjectImage}
            src='https://picsum.photos/200/300'
            alt={project.title}
          />
          <p className={css.ProjectDescription}>{project.description}</p>
          <footer className={css.ProjectTechnologies}>
            {project.technologies.map((tech, j) =>
              techIcons[tech] ? (
                <div
                  className={css.ProjectTechnology}
                  key={`${project.name}-${tech}`}>
                  {techIcons[tech]}
                </div>
              ) : null
            )}
          </footer>
        </article>
      ))}
    </main>
  )
}
