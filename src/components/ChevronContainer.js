import { CHEVRON_BOTTOM_SPACE_HEIGHT, CHEVRON_HEIGHT } from '../constants/Sizing';
import { PADDING_BOTTOM, POSITION, WIDTH, BOTTOM } from '../constants/Styles';
import { toVh } from '../util/Strings';
import { getDivStyle } from '../util/Styles';
import Chevron from './Chevron';

function ChevronContainer(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={getDivStyle(CHEVRON_HEIGHT, responsiveStyles)}>
                <div style={{paddingBottom: PADDING_BOTTOM, position: POSITION, bottom: BOTTOM, width: WIDTH}}>
                    <Chevron color="black" marginTop="0" link={props.link} size={responsiveStyles.chevronSize} />
                </div>
            </div>
            <div style={{minHeight: toVh(CHEVRON_BOTTOM_SPACE_HEIGHT), display: responsiveStyles.sectionsMobileSite}}></div>
        </>
    );
}

export default ChevronContainer;