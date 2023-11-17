import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './subcomponents/Chevron';
const { Title, Paragraph } = Typography;

function Skills(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '22vh', maxHeight: '22vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id="skills" style={responsiveStyles.sectionTitle} level={5}>Skills</Title>
                </div>
            </div>
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skillsTitle}>Programming Languages</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '10vh', maxHeight: '10vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={responsiveStyles.skillsRow}>
                        <Col xs={2} style={responsiveStyles.skills}>C#</Col>
                        <Col xs={4} style={responsiveStyles.skills}>TypeScript</Col>
                        <Col xs={4} style={responsiveStyles.skills}>JavaScript</Col>
                        <Col xs={2} style={responsiveStyles.skills}>SQL</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Go</Col>
                        <Col xs={2} style={responsiveStyles.skills}>C++</Col>
                        <Col xs={2} style={responsiveStyles.skills}>C</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Swift</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Java</Col>
                        <Col xs={2} style={responsiveStyles.skills}>PHP</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skillsTitle}>Tools</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '10vh', maxHeight: '10vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={responsiveStyles.skillsRow}>
                        <Col xs={2} style={responsiveStyles.skills}>Git</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Bash</Col>
                        <Col xs={4} style={responsiveStyles.skills}>Powershell</Col>
                        <Col xs={3} style={responsiveStyles.skills}>Docker</Col>
                        <Col xs={4} style={responsiveStyles.skills}>Visual Studio</Col>
                        <Col xs={3} style={responsiveStyles.skills}>IntelliJ</Col>
                        <Col xs={4} style={responsiveStyles.skills}>Android Studio</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Xcode</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skillsTitle}>Frameworks</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '10vh', maxHeight: '10vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={responsiveStyles.skillsRow}>
                        <Col xs={3} style={responsiveStyles.skills}>Node.js</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Deno</Col>
                        <Col xs={3} style={responsiveStyles.skills}>React</Col>
                        <Col xs={2} style={responsiveStyles.skills}>Vue</Col>
                        <Col xs={2} style={responsiveStyles.skills}>.NET</Col>
                        <Col xs={3} style={responsiveStyles.skills}>Xamarin</Col>
                        <Col xs={3} style={responsiveStyles.skills}>Jest</Col>
                        <Col xs={3} style={responsiveStyles.skills}>NUnit</Col>
                        <Col xs={3} style={responsiveStyles.skills}>JUnit</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#experience" size={responsiveStyles.chevronSize} />
                </div>
            </div>
        </>
    );
}

export default Skills;