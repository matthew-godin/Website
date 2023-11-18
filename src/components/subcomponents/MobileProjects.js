import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './Chevron';
const { Title, Paragraph } = Typography;

function MobileProjects(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div style={{minHeight: '19vh', maxHeight: '19vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id={responsiveStyles.sectionsMobileSite !== 'none' ? "projects-mobile" : "projects"} style={responsiveStyles.sectionTitle} level={5}>Projects</Title>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectTitleMobile}>Talk to Me - First Place, Ceridian Hackathon 2022 (chat bot app)</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectDateMobile}>August 2022</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectTitleMobile}>Licode - University of Waterloo Capstone Project (website similar to leetcode.com)</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectDateMobile}>September 2020 - April 2022</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectTitleMobile}>Once Upon a Time - First Place, Hack the North 2018 (VR app)</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectDateMobile}>September 2018</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectTitleMobile}>Aya - First Place, Hack the North 2017 (intelligent robot head)</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectDateMobile}>September 2017</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectTitleMobile}>Messenger Latex - First Place, MHacks Nano 2017 (Google Chrome plugin)</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectDateMobile}>June 2017</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectTitleMobile}>Hyper-V, Collège Lionel-Groulx graduation project (3D adventure game)</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '8vh', maxHeight: '8vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.projectDateMobile}>January 2017 - May 2017</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '9vh', maxHeight: '9vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                </div>
            </div>
        </>
    );
}

export default MobileProjects;