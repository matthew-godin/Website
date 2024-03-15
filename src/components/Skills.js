import { Typography, Col, Row } from 'antd';
import MobileSkills from './mobile/MobileSkills';
import TitleContainer from './TitleContainer';
import ChevronContainer from './ChevronContainer';
const { Paragraph } = Typography;

function Skills(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <TitleContainer title="Skills" responsiveStyles={responsiveStyles} />
            <div style={{minHeight: '3vh', maxHeight: '3vh', display: responsiveStyles.sectionsMobileSite}} />
            <div style={{minHeight: '11vh', maxHeight: '11vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skillsTitle}>Programming Languages</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={responsiveStyles.skillsRow}>
                        <Col xs={2} style={responsiveStyles.skills}>C#</Col>
                        <Col xs={3} style={responsiveStyles.skills}>TypeScript</Col>
                        <Col xs={3} style={responsiveStyles.skills}>JavaScript</Col>
                        <Col xs={2} style={responsiveStyles.skills}>SQL</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Go</Col>
                        <Col xs={2} style={responsiveStyles.skills}>C++</Col>
                        <Col xs={2} style={responsiveStyles.skills}>C</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Java</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Swift</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Kotlin</Col>
                        <Col xs={2} style={responsiveStyles.skills}>PHP</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '11vh', maxHeight: '11vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skillsTitle}>Tools</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={responsiveStyles.skillsRow}>
                        <Col xs={2} style={responsiveStyles.skills}>Git</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Bash</Col>
                        <Col xs={3} style={responsiveStyles.skills}>Powershell</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Docker</Col>
                        <Col xs={3} style={responsiveStyles.skills}>VS Code</Col>
                        <Col xs={3} style={responsiveStyles.skills}>Visual Studio</Col>
                        <Col xs={3} style={responsiveStyles.skills}>IntelliJ</Col>
                        <Col xs={4} style={responsiveStyles.skills}>Android Studio</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Xcode</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '11vh', maxHeight: '11vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skillsTitle}>Frameworks</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={responsiveStyles.skillsRow}>
                        <Col xs={2} style={responsiveStyles.skills}>Node.js</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Deno</Col>
                        <Col xs={2} style={responsiveStyles.skills}>React</Col>
                        <Col xs={1} style={responsiveStyles.skills}>Vue</Col>
                        <Col xs={2} style={responsiveStyles.skills}>ASP.NET</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Laravel</Col>
                        <Col xs={2} style={responsiveStyles.skills}>PyTorch</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Kafka</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Spark</Col>
                        <Col xs={2} style={responsiveStyles.skills}>WebGL</Col>
                        <Col xs={1} style={responsiveStyles.skills}>Jest</Col>
                        <Col xs={2} style={responsiveStyles.skills}>NUnit</Col>
                        <Col xs={2} style={responsiveStyles.skills}>JUnit</Col>
                    </Row>
                </div>
            </div>
            <ChevronContainer link="#experience" responsiveStyles={responsiveStyles} />
            <MobileSkills responsiveStyles={responsiveStyles} />
        </>
    );
}

export default Skills;