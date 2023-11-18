import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './Chevron';
import MobileSkillsColumns from './MobileSkillsColumns';
const { Title, Paragraph } = Typography;

function MobileSkills(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '17vh', maxHeight: '17vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id={responsiveStyles.sectionsMobileSite !== 'none' ? "skills-mobile" : "skills"} style={responsiveStyles.sectionTitle} level={5}>Skills</Title>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skillsTitle}>Programming Languages</Col>
                        <Col xs={8} style={responsiveStyles.skillsTitle}>Tools</Col>
                        <Col xs={8} style={responsiveStyles.skillsTitle}>Frameworks</Col>
                    </Row>
                </div>
            </div>
            <MobileSkillsColumns responsiveStyles={responsiveStyles} />
            <div style={{minHeight: '15vh', maxHeight: '15vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#experience" size={responsiveStyles.chevronSize} />
                </div>
            </div>
        </>
    );
}

export default MobileSkills;