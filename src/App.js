import './App.css';
import { Typography, Space, Card, Col, Row, Grid } from 'antd';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ResponsiveStyles from './ResponsiveStyles';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

function App() {
  const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
  const responsiveStyles = new ResponsiveStyles(xs, sm, md, lg, xl, xxl);
  return (
    <>
      <Header responsiveStyles={responsiveStyles} />
      <Skills responsiveStyles={responsiveStyles} />
      {/*<Experience responsiveStyles={responsiveStyles} />
      <Education responsiveStyles={responsiveStyles} />
      <Projects responsiveStyles={responsiveStyles} />*/}
    </>
  );
}

export default App;
