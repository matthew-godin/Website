import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './subcomponents/Chevron';
import MobileProjects from './subcomponents/MobileProjects';
const { Title, Paragraph } = Typography;

const jobUniversityProjectSkillsWeight = '500';
const jobSkillsWeight = jobUniversityProjectSkillsWeight;
const universitySkillsWeight = jobUniversityProjectSkillsWeight;
const projectSkillsWeight = jobUniversityProjectSkillsWeight;

const jobUniversityProjectDatesStyle = {textAlign: 'right', fontSize: '24px', fontWeight: 'bold'};
const jobDatesWeight = jobUniversityProjectDatesStyle;
const universityDatesWeight = jobUniversityProjectDatesStyle;
const projectDatesWeight = jobUniversityProjectDatesStyle;

const jobUniversityProjectTitleStyle = {fontSize: '24px', fontWeight: 'bold'};
const jobTitleWeight = jobUniversityProjectTitleStyle;
const universityTitleWeight = jobUniversityProjectTitleStyle;
const projectTitleWeight = jobUniversityProjectTitleStyle;

const jobUniversityProjectCityStyle = {fontSize: '20px', fontWeight: 'bold', color: 'black', display: 'inline'};
const jobCityStyle = jobUniversityProjectCityStyle;
const universityCityStyle = jobUniversityProjectCityStyle;

const jobUniversityProjectDescriptionStyle = {fontSize: '20px', fontWeight: '500', color: 'black', display: 'inline'};
const jobDescriptionStyle = jobUniversityProjectDescriptionStyle;
const universityDescriptionStyle = jobUniversityProjectDescriptionStyle;
const projectDescriptionStyle = jobUniversityProjectDescriptionStyle;

const projectLineStyle = {paddingLeft: '9%', paddingRight: '3%'};
const projectSecondLineStyle = {paddingLeft: '9%', paddingRight: '3%'};

function Projects(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '23vh', maxHeight: '23vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id={responsiveStyles.sectionsMobileSite === 'none' ? "projects-desktop" : "projects"} style={responsiveStyles.sectionTitle} level={5}>Projects</Title>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}><Link to='https://github.com/matthew-godin/Licode-2023' style={{textDecoration: 'none', color: 'black'}}>Licode</Link></Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>September 2020 - April 2022</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '7vh', maxHeight: '7vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Coding challenge platform with a 1v1 format (University of Waterloo capstone project)</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>TypeScript • Go • Deno • Python • Docker • SQL • React</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}><Link to='https://github.com/matthew-godin/Talk-to-Me' style={{textDecoration: 'none', color: 'black'}}>Talk to Me</Link></Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>August 2022</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '7vh', maxHeight: '7vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Chat bot app that allows you to easily fill in HR forms (first place, Ceridian Hackathon 2022)</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>TypeScript • Swift • iOS • React</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}><Link to='https://github.com/matthew-godin/OnceUponATime' style={{textDecoration: 'none', color: 'black'}}>Once Upon a Time</Link></Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>September 2018</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '7vh', maxHeight: '7vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={14}>VR app generating scenery according to the story you're telling (first place, Hack the North 2018)</Col>
                        <Col xs={10} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>C# • Node.js • IBM Watson • Socket.io • Unity</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}><Link to='https://github.com/matthew-godin/Aya' style={{textDecoration: 'none', color: 'black'}}>Aya</Link></Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>September 2017</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '7vh', maxHeight: '7vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Intelligent robot head capable of recognizing people and objects (first place, Hack the North 2017)</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>Python • AWS • Embedded Software</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}><Link to='https://github.com/matthew-godin/messenger-latex' style={{textDecoration: 'none', color: 'black'}}>Messenger Latex</Link></Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>June 2017</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '7vh', maxHeight: '7vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={21}>Google Chrome plugin that allows you to write mathematical expressions in Facebook Messenger (first place, MHacks Nano 2017)</Col>
                        <Col xs={3} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>JavaScript</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                </div>
            </div>
            <MobileProjects responsiveStyles={responsiveStyles} />
        </>
    );
}

export default Projects;