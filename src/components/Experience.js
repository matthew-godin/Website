import MobileExperience from './mobile/MobileExperience';
import Position from './Position';
import ChevronContainer from './ChevronContainer';
import TitleContainer from './TitleContainer';
import EXPERIENCE from '../constants/content/Experience';
import { toIdLink } from '../util/Strings';

function Experience(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <TitleContainer title={EXPERIENCE.title} responsiveStyles={responsiveStyles} />
            <div style={{minHeight: '5vh', maxHeight: '5vh', display: responsiveStyles.sectionsMobileSite}} />
            {EXPERIENCE.content.map((position) =>
                <Position job={position.title + " - " + position.company + " "} location={position.location} date={position.date}
                    description={position.description} skills={position.skills} responsiveStyles={responsiveStyles} />
            )}
            <ChevronContainer link={toIdLink(EXPERIENCE.nextId)} responsiveStyles={responsiveStyles} />
            <MobileExperience responsiveStyles={responsiveStyles} />
        </>
    );
}

export default Experience;