import MobileTitleContainer from './MobileTitleContainer';
import MobileChevronContainer from './MobileChevronContainer';
import MobilePortraitPosition from './MobilePortraitPosition';
import MobileLandscapePosition from './MobileLandscapePosition';
import { getDivStyle } from '../../util/Styles';
import EXPERIENCE from '../../constants/content/Experience';
import { toIdLink } from '../../util/Strings';

const PORTRAIT_BOTTOM_SPACING = 4;
const LANDSCAPE_TOP_SECTION_HEIGHT = 8.5;
const LANDSCAPE_BOTTOM_SECTION_HEIGHT = 5;
const LANDSCAPE_BOTTOM_SPACING = 6;

function MobileExperience(props) {
    const responsiveStyles = props.responsiveStyles;
    if (responsiveStyles.portrait) {
        return (
            <>
                <MobileTitleContainer title={EXPERIENCE.title} responsiveStyles={responsiveStyles} />
                {EXPERIENCE.content.map((position) =>
                    <MobilePortraitPosition job={position.title} company={position.company} date={position.date} responsiveStyles={responsiveStyles} />
                )}
                <MobileChevronContainer link={toIdLink(EXPERIENCE.nextId)} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(PORTRAIT_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
            </>
        );
    } else {
        return (
            <>
                <MobileTitleContainer title={EXPERIENCE.title} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_TOP_SECTION_HEIGHT, responsiveStyles.displayMobileSite)} />
                {EXPERIENCE.content.map((position) =>
                    <MobileLandscapePosition job={position.title + " - " + position.company} responsiveStyles={responsiveStyles} />
                )}
                <div style={getDivStyle(LANDSCAPE_BOTTOM_SECTION_HEIGHT, responsiveStyles.displayMobileSite)} />
                <MobileChevronContainer link={toIdLink(EXPERIENCE.nextId)} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
            </>
        );
    }
}

export default MobileExperience;
