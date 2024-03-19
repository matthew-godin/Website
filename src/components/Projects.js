import MobileProjects from './mobile/MobileProjects';
import Project from './Project';
import TitleContainer from './TitleContainer';
import PROJECTS from '../constants/content/Projects';

function Projects(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <TitleContainer title={PROJECTS.title} responsiveStyles={responsiveStyles} />
            <div style={{minHeight: '5vh', maxHeight: '5vh', display: responsiveStyles.sectionsMobileSite}} />
                {PROJECTS.content.map((project, i) =>
                    <Project title={project.title} link={project.link} date={project.date}
                        description={project.description + " (" + project.mention + ")"}
                        skills={project.skills} responsiveStyles={responsiveStyles} largeDescription={i >= PROJECTS.content.length - 2} />
                )}
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}} />
            </div>
            <MobileProjects responsiveStyles={responsiveStyles} />
        </>
    );
}

export default Projects;