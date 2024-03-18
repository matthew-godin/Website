import { Typography, Col, Row } from 'antd';
import MobileSkills from './mobile/MobileSkills';
import TitleContainer from './TitleContainer';
import ChevronContainer from './ChevronContainer';
import SKILLS from '../constants/content/Skills';
import { toIdLink } from '../util/Strings';
const { Paragraph } = Typography;

function Skills(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <TitleContainer title={SKILLS.title} responsiveStyles={responsiveStyles} />
            <div style={{minHeight: '3vh', maxHeight: '3vh', display: responsiveStyles.sectionsMobileSite}} />
            <div style={{minHeight: '11vh', maxHeight: '11vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skillsTitle}>{SKILLS.programmingLanguages.title}</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={responsiveStyles.skillsRow}>
                        {SKILLS.programmingLanguages.content.map((skill) =>
                            <Col xs={skill.desktop} style={responsiveStyles.skills}>{skill.name}</Col>
                        )}
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '11vh', maxHeight: '11vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skillsTitle}>{SKILLS.tools.title}</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={responsiveStyles.skillsRow}>
                        {SKILLS.tools.content.map((skill) =>
                            <Col xs={skill.desktop} style={responsiveStyles.skills}>{skill.name}</Col>
                        )}
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '11vh', maxHeight: '11vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skillsTitle}>{SKILLS.frameworks.title}</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={responsiveStyles.skillsRow}>
                        {SKILLS.frameworks.content.map((skill) =>
                            <Col xs={skill.desktop} style={responsiveStyles.skills}>{skill.name}</Col>
                        )}
                    </Row>
                </div>
            </div>
            <ChevronContainer link={toIdLink(SKILLS.nextId)} responsiveStyles={responsiveStyles} />
            <MobileSkills responsiveStyles={responsiveStyles} />
        </>
    );
}

export default Skills;
