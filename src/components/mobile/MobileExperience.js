import MobileTitleContainer from './MobileTitleContainer';
import MobileChevronContainer from './MobileChevronContainer';
import MobilePortraitPosition from './MobilePortraitPosition';
import MobileLandscapePosition from './MobileLandscapePosition';
import { MOBILE_CHEVRON_BOTTOM_SPACE_HEIGHT } from '../../constants/Sizing';
import { getDivStyle } from '../../util/Styles';

const LANDSCAPE_TOP_SECTION_HEIGHT = 8.5;
const LANDSCAPE_BOTTOM_SECTION_HEIGHT = 4;
const LANDSCAPE_BOTTOM_SPACING = 3;

function MobileExperience(props) {
    const responsiveStyles = props.responsiveStyles;
    if (responsiveStyles.portrait) {
        return (
            <>
                <MobileTitleContainer title="Experience" responsiveStyles={responsiveStyles} />
                <MobilePortraitPosition job="Software Developer" company="Ceridian" date="May 2022 - Present" responsiveStyles={responsiveStyles} />
                <MobilePortraitPosition job="Software Developer Intern" company="Ceridian" date="September 2021 - December 2021" responsiveStyles={responsiveStyles} />
                <MobilePortraitPosition job="Software Developer Intern" company="Skillbook Academy" date="January 2021 - April 2021" responsiveStyles={responsiveStyles} />
                <MobilePortraitPosition job="Software Developer Intern" company="Virtek Vision" date="June 2020 - August 2020" responsiveStyles={responsiveStyles} />
                <MobilePortraitPosition job="Software Developer Intern" company="Bentley Systems" date="September 2019 - December 2019" responsiveStyles={responsiveStyles} />
                <MobilePortraitPosition job="Software Developer Intern" company="Netint Technologies" date="January 2019 - April 2019" responsiveStyles={responsiveStyles} />
                <MobilePortraitPosition job="Software Developer Intern" company="Wind River Systems" date="May 2018 - August 2018" responsiveStyles={responsiveStyles} />
                <MobileChevronContainer link="#education" responsiveStyles={responsiveStyles} />
            </>
        );
    } else {
        return (
            <>
                <MobileTitleContainer title="Experience" responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_TOP_SECTION_HEIGHT, responsiveStyles.displayMobileSite)} />
                <MobileLandscapePosition job="Software Developer - Ceridian" responsiveStyles={responsiveStyles} />
                <MobileLandscapePosition job="Software Developer Intern - Ceridian" responsiveStyles={responsiveStyles} />
                <MobileLandscapePosition job="Software Developer Intern - Skillbook Academy" responsiveStyles={responsiveStyles} />
                <MobileLandscapePosition job="Software Developer Intern - Virtek Vision" responsiveStyles={responsiveStyles} />
                <MobileLandscapePosition job="Software Developer Intern - Bentley Systems" responsiveStyles={responsiveStyles} />
                <MobileLandscapePosition job="Software Developer Intern - Netint Technologies" responsiveStyles={responsiveStyles} />
                <MobileLandscapePosition job="Software Developer Intern - Wind River Systems" responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_BOTTOM_SECTION_HEIGHT, responsiveStyles.displayMobileSite)} />
                <MobileChevronContainer link="#education" responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
            </>
        );
    }
}

export default MobileExperience;
