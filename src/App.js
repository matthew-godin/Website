import './App.css';
import { Grid } from 'antd';
import ResponsiveStyles from './styles/ResponsiveStyles';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import { useOrientation } from 'react-use';
const { useBreakpoint } = Grid;

function App() {
  const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
  const { type } = useOrientation(); 
  const responsiveStyles = new ResponsiveStyles(xs, sm, md, lg, xl, xxl, type);
  return (
    <>
      <Header responsiveStyles={responsiveStyles} />
      <Skills responsiveStyles={responsiveStyles} />
      <Experience responsiveStyles={responsiveStyles} />
      <Education responsiveStyles={responsiveStyles} />
      <Projects responsiveStyles={responsiveStyles} />
    </>
  );
}

export default App;
