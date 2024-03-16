import Chevron from '../Chevron';
import { getDivStyle } from '../../util/Styles';
import { MOBILE_CHEVRON_HEIGHT, MOBILE_CHEVRON_BOTTOM_SPACE_HEIGHT } from '../../constants/Sizing';
import { toVh } from '../../util/Strings';
import { CHEVRON_STYLE } from '../../constants/Styles';

function MobileChevronContainer(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={getDivStyle(MOBILE_CHEVRON_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={CHEVRON_STYLE}>
                    <Chevron color="black" marginTop="0" link={props.link} size={responsiveStyles.chevronSize} />
                </div>
            </div>
            <div style={{minHeight: toVh(MOBILE_CHEVRON_BOTTOM_SPACE_HEIGHT), display: responsiveStyles.displayMobileSite}}></div>
        </>
    );
}

export default MobileChevronContainer;