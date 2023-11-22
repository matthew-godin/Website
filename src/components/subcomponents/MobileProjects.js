import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './Chevron';
const { Title, Paragraph } = Typography;

function MobileProjects(props) {
    const responsiveStyles = props.responsiveStyles;
    if (responsiveStyles.portrait) {
        return (
            <>
                <div id={responsiveStyles.sectionsMobileSite !== 'none' ? "projects-mobile" : "projects"} style={{minHeight: '5vh', display: responsiveStyles.displayMobileSite}}></div>
                <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Title style={responsiveStyles.sectionTitle} level={5}>Projects</Title>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}>Talk to Me</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>First Place, Ceridian Hackathon 2022</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>Chat Bot App</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>August 2022</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}>Licode</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>University of Waterloo Capstone Project</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>Website Similar to leetcode.com</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>September 2020 - April 2022</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}>Once Upon a Time</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>First Place, Hack the North 2018</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>VR App</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>September 2018</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}>Aya</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>First Place, Hack the North 2017</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>Intelligent Robot Head</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>September 2017</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}>Messenger Latex</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>First Place, MHacks Nano 2017</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>Google Chrome Plugin</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>June 2017</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    </div>
                </div>
                <div style={{minHeight: '8.5vh', display: responsiveStyles.displayMobileSite}}></div>
            </>
        );
    } else {
        return (
            <>
                <div id={responsiveStyles.sectionsMobileSite !== 'none' ? "projects-mobile" : "projects"} style={{minHeight: '5vh', display: responsiveStyles.displayMobileSite}}></div>
                <div style={{minHeight: '20vh', maxHeight: '20vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Title style={responsiveStyles.sectionTitle} level={5}>Projects</Title>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}>Talk to Me - First Place, Ceridian Hackathon 2022</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}>Licode - University of Waterloo Capstone Project</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}>Once Upon a Time - First Place, Hack the North 2018</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}>Aya - First Place, Hack the North 2017</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}>Messenger Latex - First Place, MHacks Nano 2017</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    </div>
                </div>
                <div style={{minHeight: '11vh', display: responsiveStyles.displayMobileSite}}></div>
            </>
        );
    }
}

export default MobileProjects;