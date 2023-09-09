import ProjectBody from './card components/ProjectBody'
import ProjectImage from './card components/ProjectImage'

function ProjectCard(props) {
  return (
    <div className='project-card'>
      <ProjectImage />
      <ProjectBody />
    </div>
  )
}
export default ProjectCard
