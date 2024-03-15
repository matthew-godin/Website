import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from '../Chevron';
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
                        <Paragraph style={responsiveStyles.projectTitleMobile}><Link to='https://github.com/matthew-godin/Licode' style={{textDecoration: 'none', color: 'black'}}>Licode</Link></Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>Coding Challenge Platform With 1v1 Format</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>University of Waterloo Capstone Project</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>September 2020 - Present</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}><Link to='https://github.com/matthew-godin/Talk-to-Me' style={{textDecoration: 'none', color: 'black'}}>Talk to Me</Link></Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>HR Forms Chat Bot App</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>First Place, Ceridian Hackathon 2022</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>August 2022</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}><Link to='https://github.com/matthew-godin/Once-Upon-a-Time' style={{textDecoration: 'none', color: 'black'}}>Once Upon a Time</Link></Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>VR App Generating Story Scenery</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>First Place, Hack the North 2018</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>September 2018</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}><Link to='https://github.com/matthew-godin/Aya' style={{textDecoration: 'none', color: 'black'}}>Aya</Link></Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>Intelligent Robot Head</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>First Place, Hack the North 2017</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '4vh', maxHeight: '4vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>September 2017</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}><Link to='https://github.com/matthew-godin/Messenger-Latex' style={{textDecoration: 'none', color: 'black'}}>Messenge Latex</Link></Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDescriptionMobile}>Google Chrome Plugin</Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '3vh', maxHeight: '3vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectDateMobile}>First Place, MHacks Nano 2017</Paragraph>
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
                        <Paragraph style={responsiveStyles.projectTitleMobile}><Link to='https://github.com/matthew-godin/Licode' style={{textDecoration: 'none', color: 'black'}}>Licode - Coding Challenge Platform With 1v1 Format</Link></Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}><Link to='https://github.com/matthew-godin/Talk-to-Me' style={{textDecoration: 'none', color: 'black'}}>Talk to Me - HR Forms Chat Bot App</Link></Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}><Link to='https://github.com/matthew-godin/Once-Upon-a-Time' style={{textDecoration: 'none', color: 'black'}}>Once Upon a Time - VR App Generating Story Scenery</Link></Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}><Link to='https://github.com/matthew-godin/Aya' style={{textDecoration: 'none', color: 'black'}}>Aya - Intelligent Robot Head</Link></Paragraph>
                    </div>
                </div>
                <div style={{minHeight: '12vh', maxHeight: '12vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                    <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                        <Paragraph style={responsiveStyles.projectTitleMobile}><Link to='https://github.com/matthew-godin/Messenger-Latex' style={{textDecoration: 'none', color: 'black'}}>Messenger Latex - Google Chrome Plugin</Link></Paragraph>
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