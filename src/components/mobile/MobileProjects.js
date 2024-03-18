import MobileTitleContainer from './MobileTitleContainer';
import { getDivStyle } from '../../util/Styles';
import MobilePortraitProject from './MobilePortraitProject';
import MobileLandscapeProject from './MobileLandscapeProject';
import PROJECTS from '../../constants/content/Projects';

const PORTRAIT_BOTTOM_SPACING = 25.25;
const LANDSCAPE_TOP_SPACING = 11.5;
const LANDSCAPE_BOTTOM_SPACING = 15;

function MobileProjects(props) {
    const responsiveStyles = props.responsiveStyles;
    if (responsiveStyles.portrait) {
        return (
            <>
                <MobileTitleContainer title={PROJECTS.title} responsiveStyles={responsiveStyles} />
                {PROJECTS.content.map((project) =>
                    <MobilePortraitProject link={project.link} title={project.title} description={project.headline}
                        additionalDescription={project.mentionHeadline} date={project.date} responsiveStyles={responsiveStyles} />
                )}
                <div style={getDivStyle(PORTRAIT_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
            </>
        );
    } else {
        return (
            <>
                <MobileTitleContainer title={PROJECTS.title} responsiveStyles={responsiveStyles} />
                <div style={getDivStyle(LANDSCAPE_TOP_SPACING, responsiveStyles.displayMobileSite)} />
                {PROJECTS.content.map((project) =>
                    <MobileLandscapeProject link={project.link} title={project.title + " - " + project.headline}
                        responsiveStyles={responsiveStyles} />
                )}
                <div style={getDivStyle(LANDSCAPE_BOTTOM_SPACING, responsiveStyles.displayMobileSite)} />
            </>
        );
    }
}

export default MobileProjects;