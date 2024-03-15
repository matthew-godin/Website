import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './subcomponents/Chevron';
import MobileEducation from './subcomponents/MobileEducation';
const { Title, Paragraph } = Typography;

const mainSize = '40px';
const secondarySize = '35px';

const experienceLineStyle = { paddingLeft: '9%', paddingRight: '3%' };
const experienceSecondLineStyle = { paddingLeft: '9%', paddingRight: '3%' };

const jobUniversityProjectSkillsWeight = '500';
const jobSkillsWeight = jobUniversityProjectSkillsWeight;
const universitySkillsWeight = jobUniversityProjectSkillsWeight;
const projectSkillsWeight = jobUniversityProjectSkillsWeight;

const jobUniversityProjectDatesStyle = {textAlign: 'right', fontSize: mainSize, fontWeight: 'bold'};
const jobDatesWeight = jobUniversityProjectDatesStyle;
const universityDatesWeight = jobUniversityProjectDatesStyle;
const projectDatesWeight = jobUniversityProjectDatesStyle;

const jobUniversityProjectTitleStyle = {fontSize: mainSize, fontWeight: 'bold'};
const jobTitleWeight = jobUniversityProjectTitleStyle;
const universityTitleWeight = jobUniversityProjectTitleStyle;
const projectTitleWeight = jobUniversityProjectTitleStyle;

const jobUniversityProjectCityStyle = {fontSize: secondarySize, fontWeight: 'bold', color: 'black', display: 'inline'};
const jobCityStyle = jobUniversityProjectCityStyle;
const universityCityStyle = jobUniversityProjectCityStyle;

const jobUniversityProjectDescriptionStyle = {fontSize: secondarySize, fontWeight: '500', color: 'black', display: 'inline'};
const jobDescriptionStyle = jobUniversityProjectDescriptionStyle;
const universityDescriptionStyle = jobUniversityProjectDescriptionStyle;
const projectDescriptionStyle = jobUniversityProjectDescriptionStyle;

function Education(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '18vh', maxHeight: '18vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id={responsiveStyles.sectionsMobileSite === 'none' ? "education-desktop" : "education"} style={responsiveStyles.sectionTitle} level={5}>Education</Title>
                </div>
            </div>
            <div style={{minHeight: '23.625vh', maxHeight: '23.625vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
            </div>
            <div style={{minHeight: '7vh', maxHeight: '7vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceLineStyle}>
                        <Col style={jobTitleWeight} xs={13}>University of Waterloo</Col>
                        <Col xs={11} style={jobDatesWeight}>September 2017 - April 2022</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '8.75vh', maxHeight: '8.75vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={experienceSecondLineStyle}>
                        <Col style={jobDescriptionStyle} xs={24}>Bachelor's Degree, Honours Software Engineering</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '23.625vh', maxHeight: '23.625vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
            </div>
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#projects" size={responsiveStyles.chevronSize} />
                </div>
            </div>
            <div style={{minHeight: '7vh', display: responsiveStyles.sectionsMobileSite}}></div>
            <MobileEducation responsiveStyles={responsiveStyles} />
        </>
    );
}

export default Education;