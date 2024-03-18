import { Typography, Col, Row } from 'antd';
import { getDivStyle } from '../../util/Styles';
import MobileTitleContainer from './MobileTitleContainer';
import { SECTIONS_STYLE } from '../../constants/Styles';
import MobileChevronContainer from './MobileChevronContainer';
import SKILLS from '../../constants/content/Skills';
import { toIdLink } from '../../util/Strings';
const { Paragraph } = Typography;

const PORTRAIT_TOP_SPACING = 1.25;
const PORTRAIT_BOTTOM_SPACING = 5.25;
const LANDSCAPE_TOP_SPACING = 8.5;
const LANDSCAPE_BOTTOM_SPACING = 2;
const TITLE_HEIGHT = 5;
const LIST_HEIGHT = 12;

function MobileSkills(props) {
    const responsiveStyles = props.responsiveStyles;
    if (responsiveStyles.portrait) {
        return (
            <>
                <MobileTitleContainer title={SKILLS.title} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(PORTRAIT_TOP_SPACING, responsiveStyles.displayMobileSite)} />
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.skillsTitleMobile}>{SKILLS.programmingLanguages.title}</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            {SKILLS.programmingLanguages.content.slice(0, 4).map((skill) =>
                                <Col xs={skill.mobile} style={responsiveStyles.skillsDateMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            {SKILLS.programmingLanguages.content.slice(4, 8).map((skill) =>
                                <Col xs={skill.mobile} style={responsiveStyles.skillsDateMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            {SKILLS.programmingLanguages.content.slice(8, 12).map((skill) =>
                                <Col xs={skill.mobile} style={responsiveStyles.skillsDateMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.skillsTitleMobile}>{SKILLS.tools.title}</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            {SKILLS.tools.content.slice(0, 3).map((skill) =>
                                <Col xs={skill.mobile} style={responsiveStyles.skillsDateMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            {SKILLS.tools.content.slice(3, 6).map((skill) =>
                                <Col xs={skill.mobile} style={responsiveStyles.skillsDateMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            {SKILLS.tools.content.slice(6, 9).map((skill) =>
                                <Col xs={skill.mobile} style={responsiveStyles.skillsDateMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.skillsTitleMobile}>{SKILLS.frameworks.title}</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            {SKILLS.frameworks.content.slice(0, 4).map((skill) =>
                                <Col xs={skill.mobile} style={responsiveStyles.skillsDateMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            {SKILLS.frameworks.content.slice(4, 8).map((skill) =>
                                <Col xs={skill.mobile} style={responsiveStyles.skillsDateMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={{paddingLeft: responsiveStyles.skillsSidePadding, paddingRight: responsiveStyles.skillsSidePadding}}>
                            {SKILLS.frameworks.content.slice(8, 13).map((skill) =>
                                <Col xs={skill.mobile} style={responsiveStyles.skillsDateMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <MobileChevronContainer link={toIdLink(SKILLS.nextId)} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(PORTRAIT_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
            </>
        );
    } else {
        return (
            <>
                <MobileTitleContainer title={SKILLS.title} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_TOP_SPACING, responsiveStyles.displayMobileSite)} />
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>{SKILLS.programmingLanguages.title}</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(LIST_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={responsiveStyles.skillsRow}>
                            {SKILLS.programmingLanguages.content.map((skill) =>
                                <Col xs={skill.desktop} style={responsiveStyles.projectDescriptionMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>{SKILLS.tools.title}</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(LIST_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={responsiveStyles.skillsRow}>
                            {SKILLS.tools.content.map((skill) =>
                                <Col xs={skill.desktop} style={responsiveStyles.projectDescriptionMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(TITLE_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>{SKILLS.frameworks.title}</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(LIST_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Row style={responsiveStyles.skillsRow}>
                            {SKILLS.frameworks.content.map((skill) =>
                                <Col xs={skill.desktop} style={responsiveStyles.projectDescriptionMobile}>{skill.name}</Col>
                            )}
                        </Row>
                    </div>
                </div>
                <div style={getDivStyle(LANDSCAPE_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
                <MobileChevronContainer link={toIdLink(SKILLS.nextId)} responsiveStyles={responsiveStyles} />
            </>
        );
    }
}

export default MobileSkills;
