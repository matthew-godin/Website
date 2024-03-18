import MobileTitleContainer from './MobileTitleContainer';
import { getDivStyle } from '../../util/Styles';
import MobilePortraitProject from './MobilePortraitProject';
import MobileLandscapeProject from './MobileLandscapeProject';

const PORTRAIT_BOTTOM_SPACING = 25.25;
const LANDSCAPE_TOP_SPACING = 11.5;
const LANDSCAPE_BOTTOM_SPACING = 15;

function MobileProjects(props) {
    const responsiveStyles = props.responsiveStyles;
    if (responsiveStyles.portrait) {
        return (
            <>
                <MobileTitleContainer title="Projects" responsiveStyles={responsiveStyles} />
                <MobilePortraitProject link="https://github.com/matthew-godin/Licode" title="Licode" description="Coding Challenge Platform With 1v1 Format"
                    additionalDescription="University of Waterloo Capstone Project" date="September 2020 - Present" responsiveStyles={responsiveStyles} />
                <MobilePortraitProject link="https://github.com/matthew-godin/Talk-to-Me" title="Talk to Me" description="HR Forms Chat Bot App"
                    additionalDescription="First Place, Ceridian Hackathon 2022" date="August 2022" responsiveStyles={responsiveStyles} />
                <MobilePortraitProject link="https://github.com/matthew-godin/Once-Upon-a-Time" title="Once Upon a Time" description="VR App Generating Story Scenery"
                    additionalDescription="First Place, Hack the North 2018" date="September 2018" responsiveStyles={responsiveStyles} />
                <MobilePortraitProject link="https://github.com/matthew-godin/Aya" title="Aya" description="Intelligent Robot Head"
                    additionalDescription="First Place, Hack the North 2017" date="September 2017" responsiveStyles={responsiveStyles} />
                <MobilePortraitProject link="https://github.com/matthew-godin/Messenger-Latex" title="Messenge Latex" description="Google Chrome Plugin"
                    additionalDescription="First Place, MHacks Nano 2017" date="June 2017" responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(PORTRAIT_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
            </>
        );
    } else {
        return (
            <>
                <MobileTitleContainer title="Projects" responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_TOP_SPACING, responsiveStyles.displayMobileSite)} />
                <MobileLandscapeProject link="https://github.com/matthew-godin/Licode" title="Licode - Coding Challenge Platform With 1v1 Format"
                    responsiveStyles={responsiveStyles} />
                <MobileLandscapeProject link="https://github.com/matthew-godin/Talk-to-Me" title="Talk to Me - HR Forms Chat Bot App"
                    responsiveStyles={responsiveStyles} />
                <MobileLandscapeProject link="https://github.com/matthew-godin/Once-Upon-a-Time" title="Once Upon a Time - VR App Generating Story Scenery"
                    responsiveStyles={responsiveStyles} />
                <MobileLandscapeProject link="https://github.com/matthew-godin/Aya" title="Aya - Intelligent Robot Head"
                    responsiveStyles={responsiveStyles} />
                <MobileLandscapeProject link="https://github.com/matthew-godin/Messenger-Latex" title="Messenger Latex - Google Chrome Plugin"
                    responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
            </>
        );
    }
}

export default MobileProjects;