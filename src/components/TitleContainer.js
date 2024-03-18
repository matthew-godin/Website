import { Typography } from 'antd';
import { toDesktopId } from '../util/Strings';
import { TITLE_CONTAINER_HEIGHT } from '../constants/Sizing';
import { SECTIONS_STYLE } from '../constants/Styles';
import { getDivStyle } from '../util/Styles';
const { Title } = Typography;

function TitleContainer(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={getDivStyle(TITLE_CONTAINER_HEIGHT, responsiveStyles.sectionsMobileSite)}>
                <div style={SECTIONS_STYLE}>
                    <Title id={responsiveStyles.sectionsMobileSite === 'none' ? toDesktopId(props.title.toLowerCase()) : props.title.toLowerCase()} style={responsiveStyles.sectionTitle} level={5}>{props.title}</Title>
                </div>
            </div>
        </>
    );
}

export default TitleContainer;