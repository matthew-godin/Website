import { Typography } from 'antd';
import { toDesktopId, toVh } from '../util/Strings';
import { TITLE_CONTAINER_HEIGHT } from '../constants/Sizing';
const { Title } = Typography;

function TitleContainer(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: toVh(TITLE_CONTAINER_HEIGHT), maxHeight: toVh(TITLE_CONTAINER_HEIGHT), position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id={responsiveStyles.sectionsMobileSite === 'none' ? toDesktopId(props.title.toLowerCase()) : props.title.toLowerCase()} style={responsiveStyles.sectionTitle} level={5}>{props.title}</Title>
                </div>
            </div>
        </>
    );
}

export default TitleContainer;