import { Typography, Col, Row } from 'antd';
import { getDivStyle } from '../../util/Styles';
import MobileTitleContainer from './MobileTitleContainer';
import { SECTIONS_STYLE } from '../../constants/Styles';
import MobileChevronContainer from './MobileChevronContainer';
const { Paragraph } = Typography;

const PORTRAIT_TOP_SPACING = 3.5;
const PORTRAIT_BOTTOM_SPACING = 3;
const LANDSCAPE_TOP_SPACING = 7.5;
const TITLE_HEIGHT = 5;
const LIST_HEIGHT = 12;

function MobileSkills(props) {
    const responsiveStyles = props.responsiveStyles;
    if (responsiveStyles.portrait) {
        return (
            <>
                <MobileTitleContainer title="Skills" responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(PORTRAIT_TOP_SPACING, responsiveStyles.displayMobileSite)} />
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.skillsTitleMobile}>Programming Languages</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>C#</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>TypeScript</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>JavaScript</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>SQL</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Go</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>C++</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>C</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Java</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Swift</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Kotlin</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>PHP</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.skillsTitleMobile}>Tools</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Git</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Bash</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Powershell</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Docker</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>Xcode</Col>
                            <Col xs={8} style={responsiveStyles.skillsDateMobile}>IntelliJ</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={9} style={responsiveStyles.skillsDateMobile}>Android Studio</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>VS Code</Col>
                            <Col xs={9} style={responsiveStyles.skillsDateMobile}>Visual Studio</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.skillsTitleMobile}>Frameworks</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Node.js</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Deno</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>React</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Vue</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>ASP.NET</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Laravel</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>PyTorch</Col>
                            <Col xs={6} style={responsiveStyles.skillsDateMobile}>Kafka</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            <Col xs={5} style={responsiveStyles.skillsDateMobile}>Spark</Col>
                            <Col xs={5} style={responsiveStyles.skillsDateMobile}>WebGL</Col>
                            <Col xs={4} style={responsiveStyles.skillsDateMobile}>Jest</Col>
                            <Col xs={5} style={responsiveStyles.skillsDateMobile}>NUnit</Col>
                            <Col xs={5} style={responsiveStyles.skillsDateMobile}>JUnit</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(PORTRAIT_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
                <MobileChevronContainer link="#experience" responsiveStyles={responsiveStyles} />
            </>
        );
    } else {
        return (
            <>
                <MobileTitleContainer title="Skills" responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_TOP_SPACING, responsiveStyles.displayMobileSite)} />
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>Programming Languages</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(LIST_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={responsiveStyles.skillsRow}>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>C#</Col>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>TypeScript</Col>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>JavaScript</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>SQL</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Go</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>C++</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>C</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Java</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Swift</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Kotlin</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>PHP</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>Tools</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={responsiveStyles.skillsRow}>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Git</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Bash</Col>
                            <Col xs={4} style={responsiveStyles.projectDescriptionMobile}>Powershell</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Docker</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>VS Code</Col>
                            <Col xs={4} style={responsiveStyles.projectDescriptionMobile}>Visual Studio</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>IntelliJ</Col>
                            <Col xs={4} style={responsiveStyles.projectDescriptionMobile}>Android Studio</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Xcode</Col>
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>Frameworks</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={responsiveStyles.skillsRow}>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Node.js</Col>
                            <Col xs={1} style={responsiveStyles.projectDescriptionMobile}>Deno</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>React</Col>
                            <Col xs={1} style={responsiveStyles.projectDescriptionMobile}>Vue</Col>
                            <Col xs={3} style={responsiveStyles.projectDescriptionMobile}>ASP.NET</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Laravel</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>PyTorch</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Kafka</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>Spark</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>WebGL</Col>
                            <Col xs={1} style={responsiveStyles.projectDescriptionMobile}>Jest</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>NUnit</Col>
                            <Col xs={2} style={responsiveStyles.projectDescriptionMobile}>JUnit</Col>
                        </Row>
                    </div>
                </div>
                <MobileChevronContainer link="#experience" responsiveStyles={responsiveStyles} />
            </>
        );
    }
}

export default MobileSkills;