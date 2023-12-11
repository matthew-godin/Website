import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import Chevron from './subcomponents/Chevron';
const { Title, Paragraph } = Typography;

function Education(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <div id={responsiveStyles.sectionsMobileSite === 'none' ? "education" : "education-mobile"} style={{minHeight: '5vh', display: responsiveStyles.displayMobileSite}}></div>
            <div style={{minHeight: responsiveStyles.displayMobileSite === 'none' ? '20vh' : '10vh', maxHeight: responsiveStyles.displayMobileSite === 'none' ? '20vh' : '10vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id={responsiveStyles.sectionsMobileSite === 'none' ? "education-desktop" : "education"} style={responsiveStyles.sectionTitle} level={5}>Education</Title>
                </div>
            </div>
            {!responsiveStyles.portrait && <div style={{minHeight: '10vh', display: responsiveStyles.displayMobileSite}}></div>}
            <div style={{minHeight: !responsiveStyles.portrait ? '12.5vh' : '7.5vh', maxHeight: !responsiveStyles.portrait ? '12.5vh' : '7.5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.universityName}>University of Waterloo</Paragraph>
                </div>
            </div>
            <div style={{minHeight: !responsiveStyles.portrait ? '12.5vh' : '7.5vh', maxHeight: !responsiveStyles.portrait ? '12.5vh' : '7.5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeName}>Bachelor of Software Engineering</Paragraph>
                </div>
            </div>
            <div style={{minHeight: !responsiveStyles.portrait ? '12.5vh' : '5vh', maxHeight: !responsiveStyles.portrait ? '12.5vh' : '5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Honours - Co-operative Program</Paragraph>
                </div>
            </div>
            <div style={{minHeight: !responsiveStyles.portrait ? '17.5vh' : '10vh', maxHeight: !responsiveStyles.portrait ? '17.5vh' : '10vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>September 2017 - April 2022</Paragraph>
                </div>
            </div>
            {responsiveStyles.portrait && <><div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.relevantCoursesTitle}>Relevant Courses</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={{paddingLeft: '7%', paddingRight: '7%'}}>
                        <Col xs={6} style={responsiveStyles.relevantCourses}>Introduction to Machine Learning</Col>
                        <Col xs={6} style={responsiveStyles.relevantCourses}>Concurrent and Parallel Programming</Col>
                        <Col xs={6} style={responsiveStyles.relevantCourses}>Foundations of Sequential Programs</Col>
                        <Col xs={6} style={responsiveStyles.relevantCourses}>Introduction to Feedback Control</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Introduction to Machine Learning</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={{paddingLeft: '7%', paddingRight: '7%'}}>
                        <Col xs={3} style={responsiveStyles.relevantCourses}>Algorithms</Col>
                        <Col xs={5} style={responsiveStyles.relevantCourses}>Distributed Computing</Col>
                        <Col xs={4} style={responsiveStyles.relevantCourses}>Computer Security</Col>
                        <Col xs={4} style={responsiveStyles.relevantCourses}>Computer Networks</Col>
                        <Col xs={8} style={responsiveStyles.relevantCourses}>Software Requirements Specification and Analysis</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Concurrent and Parallel Programming</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={{paddingLeft: '7%', paddingRight: '7%'}}>
                        <Col xs={7} style={responsiveStyles.relevantCourses}>Software Design and Architectures</Col>
                        <Col xs={7} style={responsiveStyles.relevantCourses}>Data Structures and Data Management</Col>
                        <Col xs={7} style={responsiveStyles.relevantCourses}>Introduction to Database Management</Col>
                        <Col xs={3} style={responsiveStyles.relevantCourses}>Operating Systems</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Foundations of Sequential Programs</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={{paddingLeft: '7%', paddingRight: '7%'}}>
                        <Col xs={4} style={responsiveStyles.relevantCourses}>User Interfaces</Col>
                        <Col xs={8} style={responsiveStyles.relevantCourses}>Software Engineering Principles</Col>
                        <Col xs={4} style={responsiveStyles.relevantCourses}>Logic and Computation</Col>
                        <Col xs={8} style={responsiveStyles.relevantCourses}>Software Testing and Quality Assurance</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Introduction to Feedback Control</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Row style={{paddingLeft: '7%', paddingRight: '7%'}}>
                        <Col xs={8} style={responsiveStyles.relevantCourses}>Introduction to Methods of Software Engineering</Col>
                        <Col xs={8} style={responsiveStyles.relevantCourses}>Introduction to Data Abstraction and Implementation</Col>
                        <Col xs={4} style={responsiveStyles.relevantCourses}>Programming Principles</Col>
                        <Col xs={4} style={responsiveStyles.relevantCourses}>Digital Computers</Col>
                    </Row>
                </div>
            </div>
            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Algorithms</Paragraph>
                </div>
            </div></>}
            <div style={{minHeight: '3.5vh', display: responsiveStyles.sectionsMobileSite}}></div>
            <div style={{minHeight: responsiveStyles.displayMobileSite === 'none' ? '12vh' : '7vh', maxHeight: responsiveStyles.displayMobileSite === 'none' ? '12vh' : '7vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#projects" size={responsiveStyles.chevronSize} />
                </div>
            </div>
            <div style={{minHeight: '13vh', display: responsiveStyles.displayMobileSite}}></div>
        </>
    );
}

export default Education;