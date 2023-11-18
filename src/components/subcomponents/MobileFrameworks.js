import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './Chevron';
const { Title, Paragraph } = Typography;

function MobileFrameworks(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '16vh', maxHeight: '16vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id="frameworks" style={responsiveStyles.skillsTitle} level={5}>Frameworks</Title>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Node.js</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Deno</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>React</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Vue</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>.NET</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Xamarin</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Jest</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>NUnit</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>JUnit</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#experience" size={responsiveStyles.chevronSize} />
                </div>
            </div>
        </>
    );
}

export default MobileFrameworks;