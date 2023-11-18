import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './Chevron';
const { Title, Paragraph } = Typography;

function MobileTools(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '16vh', maxHeight: '16vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id="tools" style={responsiveStyles.skillsTitle} level={5}>Tools</Title>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Git</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Bash</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Powershell</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Docker</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Visual Studio</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>IntelliJ</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Android Studio</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.skills}>Xcode</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#frameworks" size={responsiveStyles.chevronSize} />
                </div>
            </div>
        </>
    );
}

export default MobileTools;