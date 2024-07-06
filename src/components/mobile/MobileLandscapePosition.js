import { Typography } from 'antd';
import { SECTIONS_STYLE } from '../../constants/Styles';
import { getDivStyle } from '../../util/Styles';
const { Paragraph } = Typography;

const SECTION_HEIGHT = 6;

function MobileLandscapePosition(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={getDivStyle(SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>{props.job}</Paragraph>
                </div>
            </div>
        </>
    );
}

export default MobileLandscapePosition;
