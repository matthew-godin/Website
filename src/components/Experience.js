import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './subcomponents/Chevron';
import MobileExperience from './subcomponents/MobileExperience';
const { Title, Paragraph } = Typography;

const experienceLineStyle = { paddingLeft: '9%', paddingRight: '3%' };
const experienceSecondLineStyle = { paddingLeft: '9%', paddingRight: '3%' };

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

function Experience(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '18vh', maxHeight: '18vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id={responsiveStyles.sectionsMobileSite === 'none' ? "experience-desktop" : "experience"} style={responsiveStyles.sectionTitle} level={5}>Experience</Title>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceLineStyle}>
                        <Col style={jobTitleWeight} xs={12}>Software Developer - Ceridian <Paragraph style={jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={jobDatesWeight}>May 2022 - Present</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Developed new features for the  Dayforce application (Guidelines and Candidate Management)</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: jobSkillsWeight}}>C# • TypeScript • SQL • ASP.NET Core • React</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceLineStyle}>
                        <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Ceridian <Paragraph style={jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={jobDatesWeight}>September 2021 - December 2021</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Developed new features for the Dayforce application (Compensation Cycles and Reward Letters)</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: jobSkillsWeight}}>C# • TypeScript • SQL • ASP.NET Core • React</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceLineStyle}>
                        <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Skillbook Academy <Paragraph style={jobCityStyle}>&ensp;Toronto, ON</Paragraph></Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={jobDatesWeight}>January 2021 - April 2021</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Developed new features for Skillbook Academy's administrator dashboard</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: jobSkillsWeight}}>TypeScript • PHP • Laravel • Vue • SQL</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceLineStyle}>
                        <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Virtek Vision <Paragraph style={jobCityStyle}>&ensp;Waterloo, ON</Paragraph></Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={jobDatesWeight}>June 2020 - August 2020</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Developed new features for the Virtek PDC 2020.08 CAD authoring tool</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: jobSkillsWeight}}>C# • Python • C++ • WPF • ACIS</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                <Row style={experienceLineStyle}>
                    <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Bentley Systems <Paragraph style={jobCityStyle}>&ensp;Burlington, ON</Paragraph></Col>
                    <Col xs={4}></Col>
                    <Col xs={8} style={jobDatesWeight}>September 2019 - December 2019</Col>
                </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Developed new features for the Bentley APM Mobile Inspections application</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: jobSkillsWeight}}>C# • Xamarin • Android • iOS</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceLineStyle}>
                        <Col style={jobTitleWeight} xs={14}>Software Developer Intern - Netint Technologies <Paragraph style={jobCityStyle}>&ensp;Markham, ON</Paragraph></Col>
                        <Col xs={4}></Col>
                        <Col xs={6} style={jobDatesWeight}>January 2019 - April 2019</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Developed automated tests for the Netint T408 Codensity SSD</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: jobSkillsWeight}}>Python • NVMe</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceLineStyle}>
                        <Col style={jobTitleWeight} xs={12}>Software Developer Intern - Wind River Systems <Paragraph style={jobCityStyle}>&ensp;Ottawa, ON</Paragraph></Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={jobDatesWeight}>May 2018 - August 2018</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={16}>Developed dashboards for the Wind River Titanium Cloud infrastructure</Col>
                        <Col xs={8} style={{textAlign: 'right', fontSize: '20px', fontWeight: jobSkillsWeight}}>Python • InfluxDB • Grafana</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#education" size={responsiveStyles.chevronSize} />
                </div>
            </div>
            <MobileExperience responsiveStyles={responsiveStyles} />
        </>
    );
}

export default Experience;