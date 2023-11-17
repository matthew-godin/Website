import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './subcomponents/Chevron';
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
            <div style={{minHeight: '19vh', maxHeight: '19vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id="projects" style={responsiveStyles.sectionTitle} level={5}>Projects</Title>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}>Talk to Me</Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>August 2022</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={18}>First Place for Most Well-Rounded Hack in North America, Ceridian Hackathon 2022 (Chat bot app)</Col>
                        <Col xs={6} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>TypeScript • Swift • iOS • React</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}>Licode</Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>September 2020 - April 2022</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>University of Waterloo Capstone Project (Website similar to leetcode.com)</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>TypeScript • Go • Deno • Docker • React</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}>Once Upon a Time</Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>September 2018</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>First Place - Hack the North 2018 (VR app)</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>C# • Node.js • IBM Watson • Socket.io • Unity</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}>Aya</Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>September 2017</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={14}>First Place - Hack the North 2017 (Intelligent robot head)</Col>
                        <Col xs={10} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>Python • AWS • Embedded Software • 3D Printing</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}>Messenger Latex</Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>June 2017</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>First Place - MHacks Nano 2017 (Google Chrome plugin)</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>JavaScript</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectLineStyle}>
                        <Col style={projectTitleWeight} xs={12}>Hyper-V</Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={projectDatesWeight}>January 2017 - May 2017</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={projectSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Collège Lionel-Groulx graduation project (3D adventure game)</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: projectSkillsWeight}}>C# • WPF • XNA</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '15vh', maxHeight: '15vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                </div>
            </div>
        </>
    );
}

export default Projects;