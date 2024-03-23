import { Typography } from 'antd';
import { toMobileId } from '../../util/Strings';
import { MOBILE_TITLE_CONTAINER_HEIGHT, MOBILE_TOP_SPACING } from '../../constants/Sizing';
import { SECTIONS_STYLE } from '../../constants/Styles';
import { getDivStyle } from '../../util/Styles';
const { Title } = Typography;

function MobileTitleContainer(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div id={responsiveStyles.sectionsMobileSite !== 'none' ? toMobileId(props.title.toLowerCase()) : props.title.toLowerCase()} style={getDivStyle(MOBILE_TOP_SPACING, responsiveStyles.displayMobileSite)} />
            <div style={getDivStyle(MOBILE_TITLE_CONTAINER_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Title style={responsiveStyles.sectionTitle} level={5}>{props.title}</Title>
                </div>
            </div>
        </>
    );
}

export default MobileTitleContainer;