import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { getDivStyle } from '../../util/Styles';
import { SECTIONS_STYLE, LINK_STYLE } from '../../constants/Styles';
const { Paragraph } = Typography;

const SECTION_HEIGHT = 12;

function MobileLandscapeProject(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <div style={getDivStyle(SECTION_HEIGHT, responsiveStyles.displayMobileSite)}>
            <div style={SECTIONS_STYLE}>
                <Paragraph style={responsiveStyles.projectTitleMobile}><Link to={props.link} style={LINK_STYLE}>{props.title}</Link></Paragraph>
            </div>
        </div>
    );
}

export default MobileLandscapeProject;