import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './subcomponents/Chevron';
const { Title, Paragraph } = Typography;

function Skills(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <div style={{paddingLeft: '6%', minHeight: '100vh', maxHeight: '100vh', backgroundColor: 'red'}}>
            <Title id="skills" style={responsiveStyles.sectionTitleStyle} level={5}>Skills</Title>
            <Paragraph style={responsiveStyles.skillsTitleStyle}>Programming Languages</Paragraph>
            <Row style={{paddingLeft: '3%'}}>
                <Col xs={2} style={responsiveStyles.skillsStyle}>C#</Col>
                <Col xs={4} style={responsiveStyles.skillsStyle}>TypeScript</Col>
                <Col xs={4} style={responsiveStyles.skillsStyle}>JavaScript</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>SQL</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>Go</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>C++</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>C</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>Swift</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>Java</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>PHP</Col>
            </Row>
            <Paragraph style={responsiveStyles.skillsTitleStyle}>Tools</Paragraph>
                <Row style={{paddingLeft: '3%'}}>
                <Col xs={2} style={responsiveStyles.skillsStyle}>Git</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>Bash</Col>
                <Col xs={4} style={responsiveStyles.skillsStyle}>Powershell</Col>
                <Col xs={3} style={responsiveStyles.skillsStyle}>Docker</Col>
                <Col xs={4} style={responsiveStyles.skillsStyle}>Visual Studio</Col>
                <Col xs={3} style={responsiveStyles.skillsStyle}>IntelliJ</Col>
                <Col xs={4} style={responsiveStyles.skillsStyle}>Android Studio</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>Xcode</Col>
            </Row>
            <Paragraph style={responsiveStyles.skillsTitleStyle}>Frameworks</Paragraph>
            <Row style={{paddingLeft: '3%'}}>
                <Col xs={3} style={responsiveStyles.skillsStyle}>Node.js</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>Deno</Col>
                <Col xs={3} style={responsiveStyles.skillsStyle}>React</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>Vue</Col>
                <Col xs={2} style={responsiveStyles.skillsStyle}>.NET</Col>
                <Col xs={3} style={responsiveStyles.skillsStyle}>Xamarin</Col>
                <Col xs={3} style={responsiveStyles.skillsStyle}>Jest</Col>
                <Col xs={3} style={responsiveStyles.skillsStyle}>NUnit</Col>
                <Col xs={3} style={responsiveStyles.skillsStyle}>JUnit</Col>
            </Row>
            <Chevron color="black" />
        </div>
    );
}

export default Skills;