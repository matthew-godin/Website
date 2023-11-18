import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './Chevron';
const { Title, Paragraph } = Typography;

function MobileTools(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '13.5vh', maxHeight: '13.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id={responsiveStyles.sectionsMobileSite !== 'none' ? "experience-mobile" : "experience"} style={responsiveStyles.sectionTitle} level={5}>Experience</Title>
                </div>
            </div>
            <div style={{minHeight: '2.5vh', maxHeight: '2.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobTitleMobile}>Software Developer</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2vh', maxHeight: '2vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>Ceridian</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>May 2022 - Present</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2.5vh', maxHeight: '2.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobTitleMobile}>Software Developer Intern</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2vh', maxHeight: '2vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>Ceridian</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>September 2021 - December 2021</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2.5vh', maxHeight: '2.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobTitleMobile}>Software Developer Intern</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2vh', maxHeight: '2vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>Skillbook Academy</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>January 2021 - April 2021</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2.5vh', maxHeight: '2.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobTitleMobile}>Software Developer Intern</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2vh', maxHeight: '2vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>Virtek Vision</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>June 2020 - August 2020</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2.5vh', maxHeight: '2.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobTitleMobile}>Software Developer Intern</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2vh', maxHeight: '2vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>Bentley Systems</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>September 2019 - December 2019</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2.5vh', maxHeight: '2.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobTitleMobile}>Software Developer Intern</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2vh', maxHeight: '2vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>Netint Technologies</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>January 2019 - April 2019</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2.5vh', maxHeight: '2.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobTitleMobile}>Software Developer Intern</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '2vh', maxHeight: '2vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>Wind River Systems</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.jobDateMobile}>May 2018 - August 2018</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '10vh', maxHeight: '10vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#education" size={responsiveStyles.chevronSize} />
                </div>
            </div>
            <div style={{minHeight: '10vh', display: responsiveStyles.displayMobileSite}}></div>
        </>
    );
}

export default MobileTools;