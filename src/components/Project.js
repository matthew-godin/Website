import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import { getDatesWeightStyle, getDescriptionStyle, getDivStyle, getTitleWeightStyle } from '../util/Styles';
import { FONT_WEIGHT, FONT_WEIGHT_DESCRIPTION, LINE_STYLE, SECTIONS_STYLE } from '../constants/Styles';

const MAIN_FONT_SIZE = 24;
const SECONDARY_FONT_SIZE = 20;
const TOP_SECTION_HEIGHT = 6;
const BOTTOM_SECTION_HEIGHT = 7;

function Project(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={getDivStyle(TOP_SECTION_HEIGHT, responsiveStyles)}>
                <div style={SECTIONS_STYLE}>
                    <Row style={LINE_STYLE}>
                        <Col style={getTitleWeightStyle(MAIN_FONT_SIZE)} xs={12}>
                            <Link to={props.link} style={{textDecoration: 'none', color: 'black'}}>{props.title}</Link>
                        </Col>
                        <Col xs={4}></Col>
                        <Col xs={8} style={getDatesWeightStyle(MAIN_FONT_SIZE, FONT_WEIGHT)}>{props.date}</Col>
                    </Row>
                </div>
            </div>
            <div style={getDivStyle(BOTTOM_SECTION_HEIGHT, responsiveStyles)}>
                <div style={SECTIONS_STYLE}>
                    <Row style={LINE_STYLE}>
                        <Col style={getDescriptionStyle(SECONDARY_FONT_SIZE, FONT_WEIGHT_DESCRIPTION)} xs={props.largeDescription ? 20 : 16}>{props.description}</Col>
                        <Col xs={props.largeDescription ? 4 : 8} style={getDatesWeightStyle(SECONDARY_FONT_SIZE, FONT_WEIGHT_DESCRIPTION)}>{props.skills}</Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Project;