import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
const { Title, Paragraph } = Typography;

function Chevron(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <div style={{marginTop: props.marginTop}}>
            <HashLink to={props.link} style={{maxWidth: props.size, maxHeight: props.size, display: 'block', margin: 'auto'}}>
                <svg fill={props.color} height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg" viewBox="-81.49 -81.49 570.42 570.42" stroke={props.color} stroke-width="16.29748">
                    <g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g>
                    <g>
                        <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "></polygon>
                    </g>
                </svg>
            </HashLink>
        </div>
    );
}

export default Chevron;