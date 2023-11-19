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
            <div style={{minHeight: responsiveStyles.displayMobileSite === 'none' ? '25vh' : '15vh', maxHeight: responsiveStyles.displayMobileSite === 'none' ? '25vh' : '15vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Title id={responsiveStyles.sectionsMobileSite === 'none' ? "education-desktop" : "education"} style={responsiveStyles.sectionTitle} level={5}>Education</Title>
                </div>
            </div>
            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.universityName}>University of Waterloo</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeName}>Bachelor of Software Engineering</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Honours - Co-operative Program</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '10vh', maxHeight: '10vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>September 2017 - April 2022</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.relevantCoursesTitle}>Relevant Courses</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Introduction to Machine Learning • Concurrent and Parallel Programming • Foundations of Sequential Programs • Introduction to Feedback Control</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Introduction to Machine Learning</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Algorithms • Distributed Computing • Computer Security • Computer Networks • Software Requirements Specification and Analysis</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Concurrent and Parallel Programming</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Software Design and Architectures • Data Structures and Data Management • Introduction to Database Management • Operating Systems</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Foundations of Sequential Programs</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>User Interfaces • Software Engineering Principles • Logic and Computation • Software Testing and Quality Assurance</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '5vh', maxHeight: '5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Introduction to Feedback Control</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.sectionsMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Introduction to Methods of Software Engineering • Introduction to Data Abstraction and Implementation • Programming Principles • Digital Computers</Paragraph>
                </div>
            </div>
            <div style={{minHeight: '7.5vh', maxHeight: '7.5vh', position: 'relative', width: '100%', display: responsiveStyles.displayMobileSite}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', top: 0, width: '100%'}}>
                    <Paragraph style={responsiveStyles.degreeMentions}>Algorithms</Paragraph>
                </div>
            </div>
            <div style={{minHeight: responsiveStyles.displayMobileSite === 'none' ? '15vh' : '10vh', maxHeight: responsiveStyles.displayMobileSite === 'none' ? '15vh' : '10vh', position: 'relative', width: '100%'}}>
                <div style={{ paddingBottom: '2%', position: 'absolute', bottom: 0, width: '100%'}}>
                    <Chevron color="black" marginTop="0" link="#projects" size={responsiveStyles.chevronSize} />
                </div>
            </div>
            <div style={{minHeight: '10vh', display: responsiveStyles.displayMobileSite}}></div>
        </>
    );
}

export default Education;