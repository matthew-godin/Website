import MobileProjects from './mobile/MobileProjects';
import Project from './Project';
import TitleContainer from './TitleContainer';
import { PROJECTS } from '../constants/Content';

function Projects(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <TitleContainer title={PROJECTS.title} responsiveStyles={responsiveStyles} />
            <div style={{minHeight: '5vh', maxHeight: '5vh', display: responsiveStyles.sectionsMobileSite}} />
            <Project title="Licode" link="https://github.com/matthew-godin/Licode" date="September 2020 - Present"
                description="Coding challenge platform with a 1v1 format (University of Waterloo capstone project)"
                skills="TypeScript • Deno • React • Go • Python • Docker • SQL" responsiveStyles={responsiveStyles} />
            <Project title="Talk to Me" link="https://github.com/matthew-godin/Talk-to-Me" date="August 2022"
                description="Chat bot app that simplifies filling in HR forms (first place, Ceridian Hackathon 2022)"
                skills="Swift • iOS • TypeScript • React" responsiveStyles={responsiveStyles} />
            <Project title="Once Upon a Time" link="https://github.com/matthew-godin/Once-Upon-a-Time" date="September 2018"
                description="VR app generating scenery according to the story being told (first place, Hack the North 2018)"
                skills="C# • Unity • JavaScript • Node.js • IBM Watson" responsiveStyles={responsiveStyles} />
            <Project title="Aya" link="https://github.com/matthew-godin/Aya" date="September 2017"
                description="Intelligent robot head capable of recognizing people and objects (first place, Hack the North 2017)"
                skills="Python • AWS" responsiveStyles={responsiveStyles} />
            <Project title="Messenger Latex" link="https://github.com/matthew-godin/Messenger-Latex" date="June 2017"
                description="Google Chrome plugin that allows writing mathematical expressions in Facebook Messenger (first place, MHacks Nano 2017)"
                skills="JavaScript" largeDescription={true} responsiveStyles={responsiveStyles} />
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}} />
            </div>
            <MobileProjects responsiveStyles={responsiveStyles} />
        </>
    );
}

export default Projects;