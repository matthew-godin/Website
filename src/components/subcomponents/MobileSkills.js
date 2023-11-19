import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './Chevron';
const { Title, Paragraph } = Typography;

function MobileSkills(props) {
    const responsiveStyles = props.responsiveStyles;
    if (responsiveStyles.portrait) {
        return (
            <>
                <div id={responsiveStyles.sectionsMobileSite !== 'none' ? "skills-mobile" : "skills"} style={{minHeight: '5vh', display: responsiveStyles.displayMobileSite}}></div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Title style={responsiveStyles.sectionTitle} level={5}>Skills</Title>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.skillsTitleMobile}>Programming Languages</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>C#</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>TypeScript</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>JavaScript</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>SQL</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Go</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>C++</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>C</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Swift</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Java</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>PHP</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.skillsTitleMobile}>Tools</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Git</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Bash</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Powershell</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Docker</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Xcode</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>IntelliJ</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={12} style={responsiveStyles.skillsDateMobile}>Android Studio</Col>
                            <Col xs={12} style={responsiveStyles.skillsDateMobile}>Visual Studio</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.skillsTitleMobile}>Frameworks</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Node.js</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Deno</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>React</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Vue</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={12} style={responsiveStyles.skillsDateMobile}>.NET</Col>
                            <Col xs={12} style={responsiveStyles.skillsDateMobile}>Xamarin</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Jest</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>NUnit</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>JUnit</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '13vh', maxHeight: '13vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                        <Chevron color="black" marginTop="0" link="#experience" size={responsiveStyles.chevronSize} />
                    </div>
                </div>
                <div style={{minHeight: '10vh', display: responsiveStyles.displayMobileSite}}></div>
            </>
        );
    } else {
        return (
            <>
                <div id={responsiveStyles.sectionsMobileSite !== 'none' ? "skills-mobile" : "skills"} style={{minHeight: '5vh', display: responsiveStyles.displayMobileSite}}></div>
                <div style={{minHeight: '17vh', maxHeight: '17vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Title style={responsiveStyles.sectionTitle} level={5}>Skills</Title>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>Programming Languages</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>C#</Col>
                            <Col xs={4} style={responsiveStyles.projectDescriptionMobile}>TypeScript</Col>
                            <Col xs={4} style={responsiveStyles.projectDescriptionMobile}>JavaScript</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>SQL</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Go</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>C++</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>C</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Swift</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Java</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>PHP</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>Tools</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Git</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Bash</Col>
                            <Col xs={4} style={responsiveStyles.projectDescriptionMobile}>Powershell</Col>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>Docker</Col>
                            <Col xs={4} style={responsiveStyles.projectDescriptionMobile}>Visual Studio</Col>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>IntelliJ</Col>
                            <Col xs={4} style={responsiveStyles.projectDescriptionMobile}>Android Studio</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Xcode</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>Frameworks</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '11vh', maxHeight: '11vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Row>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>Node.js</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Deno</Col>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>React</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Vue</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>.NET</Col>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>Xamarin</Col>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>Jest</Col>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>NUnit</Col>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>JUnit</Col>
                        </Row>
                    </div>
                </div>
                <div style={{minHeight: '13vh', maxHeight: '13vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                        <Chevron color="black" marginTop="0" link="#experience" size={responsiveStyles.chevronSize} />
                    </div>
                </div>
                <div style={{minHeight: '10vh', display: responsiveStyles.displayMobileSite}}></div>
            </>
        );
    }
}

export default MobileSkills;