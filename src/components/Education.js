import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './subcomponents/Chevron';
const { Title, Paragraph } = Typography;

function Education(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '30vh', maxHeight: '30vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id="education" style={responsiveStyles.sectionTitle} level={5}>Education</Title>
                </div>
            </div>
            <div style={{minHeight: '10vh', maxHeight: '10vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.universityName}>University of Waterloo</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '10vh', maxHeight: '10vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeName}>Bachelor of Software Engineering</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Honours - Co-operative Program</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '30vh', maxHeight: '30vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>September 2017 - April 2022</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#projects" size={responsiveStyles.chevronSize} />
                </div>
            </div>
            <div style={{minHeight: '10vh', display: responsiveStyles.displayMobileSite}}></div>
        </>
    );
}

export default Education;