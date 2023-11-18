import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './Chevron';
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
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skills}>C#</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Git</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Node.js</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skills}>TypeScript</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Bash</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Deno</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skills}>JavaScript</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Powershell</Col>
                        <Col xs={8} style={responsiveStyles.skills}>React</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skills}>SQL</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Docker</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Vue</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skills}>Go</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Visual Studio</Col>
                        <Col xs={8} style={responsiveStyles.skills}>.NET</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skills}>C++</Col>
                        <Col xs={8} style={responsiveStyles.skills}>IntelliJ</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Xamarin</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skills}>C</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Android Studio</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Jest</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skills}>Swift</Col>
                        <Col xs={8} style={responsiveStyles.skills}>Xcode</Col>
                        <Col xs={8} style={responsiveStyles.skills}>NUnit</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skills}>Java</Col>
                        <Col xs={8} style={responsiveStyles.skills}></Col>
                        <Col xs={8} style={responsiveStyles.skills}>JUnit</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skills}>PHP</Col>
                        <Col xs={8} style={responsiveStyles.skills}></Col>
                        <Col xs={8} style={responsiveStyles.skills}></Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '15vh', maxHeight: '15vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#experience" size={responsiveStyles.chevronSize} />
                </div>
            </div>
        </>
    );
}

export default MobileSkills;