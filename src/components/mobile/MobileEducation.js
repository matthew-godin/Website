import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from '../Chevron';
const { Title, Paragraph } = Typography;

function MobileEducation(props) {
    const responsiveStyles = props.responsiveStyles;
    if (responsiveStyles.portrait) {
        return (
            <>
                <div id={responsiveStyles.sectionsMobileSite !== 'none' ? "education-mobile" : "education"} style={{minHeight: '5vh', display: responsiveStyles.displayMobileSite}}></div>
                <div style={{minHeight: '8.5vh', maxHeight: '8.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Title style={responsiveStyles.sectionTitle} level={5}>Education</Title>
                    </div>
                </div>
                <div style={{minHeight: '24.25vh', maxHeight: '24.25vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.educationTitleMobile}>University of Waterloo</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.educationDateMobile}>Software Engineering</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.educationDateMobile}>September 2017 - April 2022</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '24.25vh', maxHeight: '24.25vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                </div>
                <div style={{minHeight: '10vh', maxHeight: '10vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                        <Chevron color="black" marginTop="0" link="#projects" size={responsiveStyles.chevronSize} />
                    </div>
                </div>
                <div style={{minHeight: '10vh', display: responsiveStyles.displayMobileSite}}></div>
            </>
        );
    } else {
        return (
            <>
                <div id={responsiveStyles.sectionsMobileSite !== 'none' ? "education-mobile" : "education"} style={{minHeight: '5vh', display: responsiveStyles.displayMobileSite}}></div>
                <div style={{minHeight: '8.5vh', maxHeight: '8.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Title style={responsiveStyles.sectionTitle} level={5}>Education</Title>
                    </div>
                </div>
                <div style={{minHeight: '5vh', display: responsiveStyles.displayMobileSite}}></div>
                <div style={{minHeight: '3.5vh', display: responsiveStyles.displayMobileSite}}></div>
                <div style={{minHeight: '18.5vh', maxHeight: '18.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.educationDateMobile}>University of Waterloo - Software Engineering</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '18.5vh', maxHeight: '18.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                </div>
                <div style={{minHeight: '4vh', display: responsiveStyles.displayMobileSite}}></div>
                <div style={{minHeight: '10vh', maxHeight: '10vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                        <Chevron color="black" marginTop="0" link="#projects" size={responsiveStyles.chevronSize} />
                    </div>
                </div>
                <div style={{minHeight: '16vh', display: responsiveStyles.displayMobileSite}}></div>
            </>
        );
    }
}

export default MobileEducation;