import { Typography, Col, Row } from 'antd';
import { FONT_WEIGHT, FONT_WEIGHT_DESCRIPTION, LINE_STYLE, SECTIONS_STYLE } from '../constants/Styles';
import { getDatesDescriptionWeightStyle, getDatesWeightStyle, getDescriptionStyle, getDivStyle, getTitleWeightStyle } from '../util/Styles';
const { Paragraph } = Typography;

const MAIN_FONT_SIZE = 24;
const SECONDARY_FONT_SIZE = 20;
const TOP_SECTION_HEIGHT = 3;
const BOTTOM_SECTION_HEIGHT = 4;

function Position(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={getDivStyle(TOP_SECTION_HEIGHT, responsiveStyles.sectionsMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Row style={LINE_STYLE}>
                        <Col style={getTitleWeightStyle(MAIN_FONT_SIZE)} xs={12}>{props.job}
                            <Paragraph style={getDescriptionStyle(SECONDARY_FONT_SIZE, FONT_WEIGHT)}>&ensp;{props.location}</Paragraph>
                        </Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={getDatesWeightStyle(MAIN_FONT_SIZE, FONT_WEIGHT)}>{props.date}</Col>
                    </Row>
                </div>
            </div>
            <div style={getDivStyle(BOTTOM_SECTION_HEIGHT, responsiveStyles.sectionsMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Row style={LINE_STYLE}>
                        <Col style={getDescriptionStyle(SECONDARY_FONT_SIZE, FONT_WEIGHT_DESCRIPTION)} xs={16}>{props.description}</Col>
                        <Col xs={8} style={getDatesWeightStyle(SECONDARY_FONT_SIZE, FONT_WEIGHT_DESCRIPTION)}>{props.skills}</Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Position;