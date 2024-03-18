import { Typography } from 'antd';
import MobileTitleContainer from './MobileTitleContainer';
import MobileChevronContainer from './MobileChevronContainer';
import { TOTAL_HEIGHT, MOBILE_TITLE_CONTAINER_HEIGHT, MOBILE_TOP_SPACING, MOBILE_CHEVRON_CONTAINER_HEIGHT } from '../../constants/Sizing';
import { getDivStyle } from '../../util/Styles';
import { SECTIONS_STYLE } from '../../constants/Styles';
import EDUCATION from '../../constants/content/Education';
import { toIdLink } from '../../util/Strings';
const { Paragraph } = Typography;

const PORTRAIT_TOP_SECTION_HEIGHT = 5;
const PORTRAIT_MIDDLE_SECTION_HEIGHT = 4;
const PORTRAIT_BOTTOM_SECTION_HEIGHT = 9;
const PORTRAIT_BOTTOM_SPACING = 5.25;
const LANDSCAPE_TOP_SECTION_HEIGHT = 27;
const LANDSCAPE_MIDDLE_SECTION_HEIGHT = 12;
const LANDSCAPE_BOTTOM_SECTION_HEIGHT = 22.5;
const LANDSCAPE_BOTTOM_SPACING = 5;
const PORTRAIT_SPACING_HEIGHT = (TOTAL_HEIGHT - MOBILE_TOP_SPACING - MOBILE_TITLE_CONTAINER_HEIGHT - MOBILE_CHEVRON_CONTAINER_HEIGHT
    - PORTRAIT_TOP_SECTION_HEIGHT - PORTRAIT_MIDDLE_SECTION_HEIGHT - PORTRAIT_BOTTOM_SECTION_HEIGHT - PORTRAIT_BOTTOM_SPACING) / 2.0;

function MobileEducation(props) {
    const responsiveStyles = props.responsiveStyles;
    if (responsiveStyles.portrait) {
        return (
            <>
                <MobileTitleContainer title={EDUCATION.title} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(PORTRAIT_SPACING_HEIGHT, responsiveStyles.displayMobileSite)} />
                <div style={getDivStyle(PORTRAIT_TOP_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.educationTitleMobile}>{EDUCATION.university}</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(PORTRAIT_MIDDLE_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.educationDateMobile}>{EDUCATION.major}</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(PORTRAIT_BOTTOM_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.educationDateMobile}>{EDUCATION.date}</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(PORTRAIT_SPACING_HEIGHT, responsiveStyles.displayMobileSite)} />
                <MobileChevronContainer link={toIdLink(EDUCATION.nextId)} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(PORTRAIT_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
            </>
        );
    } else {
        return (
            <>
                <MobileTitleContainer title={EDUCATION.title} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_TOP_SECTION_HEIGHT, responsiveStyles.displayMobileSite)} />
                <div style={getDivStyle(LANDSCAPE_MIDDLE_SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                    <div style={SECTIONS_STYLE}>
                        <Paragraph style={responsiveStyles.educationDateMobile}>{EDUCATION.university + " - " + EDUCATION.major}</Paragraph>
                    </div>
                </div>
                <div style={getDivStyle(LANDSCAPE_BOTTOM_SECTION_HEIGHT, responsiveStyles.displayMobileSite)} />
                <MobileChevronContainer link={toIdLink(EDUCATION.nextId)} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
            </>
        );
    }
}

export default MobileEducation;
