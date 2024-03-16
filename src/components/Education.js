import { Col, Row } from 'antd';
import MobileEducation from './mobile/MobileEducation';
import { FONT_WEIGHT_DESCRIPTION, LINE_STYLE, SECTIONS_STYLE, FONT_WEIGHT } from '../constants/Styles';
import ChevronContainer from './ChevronContainer';
import TitleContainer from './TitleContainer';
import { CHEVRON_CONTAINER_HEIGHT, TITLE_CONTAINER_HEIGHT, TOTAL_HEIGHT } from '../constants/Sizing';
import { getDatesWeightStyle, getDescriptionStyle, getDivStyle, getTitleWeightStyle } from '../util/Styles';

const MAIN_FONT_SIZE = 40;
const SECONDARY_FONT_SIZE = 35;
const TOP_SECTION_HEIGHT = 7;
const BOTTOM_SECTION_HEIGHT = 8.75;
const SPACING_HEIGHT = (TOTAL_HEIGHT - TITLE_CONTAINER_HEIGHT - CHEVRON_CONTAINER_HEIGHT - TOP_SECTION_HEIGHT - BOTTOM_SECTION_HEIGHT) / 2.0;

function Education(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <TitleContainer title="Education" responsiveStyles={responsiveStyles} />
            <div style={getDivStyle(SPACING_HEIGHT, responsiveStyles.sectionsMobileSite)}>
            </div>
            <div style={getDivStyle(TOP_SECTION_HEIGHT, responsiveStyles.sectionsMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Row style={LINE_STYLE}>
                        <Col style={getTitleWeightStyle(MAIN_FONT_SIZE)} xs={13}>University of Waterloo</Col>
                        <Col xs={11} style={getDatesWeightStyle(MAIN_FONT_SIZE, FONT_WEIGHT)}>September 2017 - April 2022</Col>
                    </Row>
                </div>
            </div>
            <div style={getDivStyle(BOTTOM_SECTION_HEIGHT, responsiveStyles.sectionsMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Row style={LINE_STYLE}>
                        <Col style={getDescriptionStyle(SECONDARY_FONT_SIZE, FONT_WEIGHT_DESCRIPTION)} xs={24}>Bachelor's Degree, Honours Software Engineering</Col>
                    </Row>
                </div>
            </div>
            <div style={getDivStyle(SPACING_HEIGHT, responsiveStyles.sectionsMobileSite)}>
            </div>
            <ChevronContainer link="#projects" responsiveStyles={responsiveStyles} />
            <MobileEducation responsiveStyles={responsiveStyles} />
        </>
    );
}

export default Education;
