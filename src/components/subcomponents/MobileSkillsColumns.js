import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './Chevron';
const { Title, Paragraph } = Typography;

function MobileSkillsColumns(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '60vh', maxHeight: '60vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '94%', paddingLeft: '3%', paddingRight: '3%'}}>
                    <Row>
                        <Col xs={8} style={responsiveStyles.skillsTitle}>
                            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>C#</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>TypeScript</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>JavaScript</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>SQL</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Go</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>C++</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>C</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Swift</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Java</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>PHP</Paragraph>
                                </div>
                            </div>
                        </Col>
                        <Col xs={8} style={responsiveStyles.skillsTitle}>
                        <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Git</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Bash</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Powershell</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Docker</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Visual Studio</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>IntelliJ</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Android Studio</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Xcode</Paragraph>
                                </div>
                            </div>
                        </Col>
                        <Col xs={8} style={responsiveStyles.skillsTitle}>
                            <div style={{minHeight: '6.666vh', maxHeight: '6.666vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Node.js</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6.666vh', maxHeight: '6.666vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Deno</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6.666vh', maxHeight: '6.666vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>React</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6.666vh', maxHeight: '6.666vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Vue</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6.666vh', maxHeight: '6.666vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>ASP.NET Core</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6.666vh', maxHeight: '6.666vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Xamarin</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6.666vh', maxHeight: '6.666vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>Jest</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6.666vh', maxHeight: '6.666vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>NUnit</Paragraph>
                                </div>
                            </div>
                            <div style={{minHeight: '6.666vh', maxHeight: '6.666vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                                    <Paragraph style={responsiveStyles.skills}>JUnit</Paragraph>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default MobileSkillsColumns;