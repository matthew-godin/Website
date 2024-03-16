import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { getDivStyle } from '../../util/Styles';
import { LINK_STYLE, SECTIONS_STYLE } from '../../constants/Styles';
const { Paragraph } = Typography;

const TOP_SECTION_HEIGHT = 5;
const MIDDLE_SECTION_HEIGHT = 3;
const BOTTOM_SECTION_HEIGHT = 4;

function MobilePortraitProject(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={getDivStyle(TOP_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Paragraph style={responsiveStyles.projectTitleMobile}><Link to={props.link} style={LINK_STYLE}>{props.title}</Link></Paragraph>
                </div>
            </div>
            <div style={getDivStyle(MIDDLE_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Paragraph style={responsiveStyles.projectDescriptionMobile}>{props.description}</Paragraph>
                </div>
            </div>
            <div style={getDivStyle(MIDDLE_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Paragraph style={responsiveStyles.projectDateMobile}>{props.additionalDescription}</Paragraph>
                </div>
            </div>
            <div style={getDivStyle(BOTTOM_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Paragraph style={responsiveStyles.projectDateMobile}>{props.date}</Paragraph>
                </div>
            </div>
        </>
    );
}

export default MobilePortraitProject;