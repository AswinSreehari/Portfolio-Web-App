import styles from './ProjectsStyles.module.css';
import chronocove from '../../assets/chronocove.png';
import passGen from '../../assets/passGen.png';
import todo from '../../assets/todo.png';
import bgChanger from '../../assets/bg_changer.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chronocove}
          link="https://github.com/AswinSreehari/CHRONOCOVE"
          h3="chronocove"
          p="An E-commerce App"
        />
        <ProjectCard
          src={passGen}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Pass_Gen"
          p="Password Generator"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Todire"
          p="Todo List App"
        />
        <ProjectCard
          src={bgChanger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="bgChanger"
          p="Background Changer"
        />
      </div>
    </section>
  );
}

export default Projects;
