import { Typography } from 'antd';
import { getDivStyle } from '../../util/Styles';
import { LINK_STYLE, SECTIONS_STYLE } from '../../constants/Styles';
const { Paragraph } = Typography;

const TOP_SECTION_HEIGHT = 2.35;
const MIDDLE_SECTION_HEIGHT = 2.5;
const BOTTOM_SECTION_HEIGHT = 4.4;

function MobilePortraitProject(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={getDivStyle(TOP_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Paragraph style={responsiveStyles.projectTitleMobile}><a href={props.link} style={LINK_STYLE}>{props.title}</a></Paragraph>
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