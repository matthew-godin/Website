import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './Chevron';
const { Title, Paragraph } = Typography;

function MobileProgrammingLanguages(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '23vh', maxHeight: '23vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id="programming-languages" style={responsiveStyles.skillsTitle} level={5}>Programming Languages</Title>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>C#</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>TypeScript</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>JavaScript</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>SQL</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Go</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>C++</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>C</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Swift</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Java</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '6vh', maxHeight: '6vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>PHP</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '17vh', maxHeight: '17vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#tools" size={responsiveStyles.chevronSize} />
                </div>
            </div>
        </>
    );
}

export default MobileProgrammingLanguages;