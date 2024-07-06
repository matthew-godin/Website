import { Typography } from 'antd';
import { getDivStyle } from '../../util/Styles';
import { SECTIONS_STYLE } from '../../constants/Styles';
const { Paragraph } = Typography;

const TOP_SECTION_HEIGHT = 2.5;
const MIDDLE_SECTION_HEIGHT = 1.75;
const BOTTOM_SECTION_HEIGHT = 4;

function MobilePortraitPosition(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={getDivStyle(TOP_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Paragraph style={responsiveStyles.jobTitleMobile}>{props.job}</Paragraph>
                </div>
            </div>
            <div style={getDivStyle(MIDDLE_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>{props.company}</Paragraph>
                </div>
            </div>
            <div style={getDivStyle(BOTTOM_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>{props.date}</Paragraph>
                </div>
            </div>
        </>
    );
}

export default MobilePortraitPosition;
