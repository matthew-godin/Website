import MobileExperience from './mobile/MobileExperience';
import Position from './Position';
import ChevronContainer from './ChevronContainer';
import TitleContainer from './TitleContainer';
import { EXPERIENCE } from '../constants/Content';

function Experience(props) {
    const responsiveStyles = props.responsiveStyles;
    return (
        <>
            <TitleContainer title={EXPERIENCE.title} responsiveStyles={responsiveStyles} />
            <Position job="Software Developer - Ceridian " location="Toronto, ON" date="May 2022 - Present"
                description="Dayforce Candidate Management, Compensation Guidelines and Message Center"
                skills="C# • ASP.NET • TypeScript • React • SQL" responsiveStyles={responsiveStyles} />
            <Position job="Software Developer Intern - Ceridian " location="Toronto, ON" date="September 2021 - December 2021"
                description="Dayforce Reward Letters and Compensation Cycles"
                skills="C# • ASP.NET • TypeScript • React • SQL" responsiveStyles={responsiveStyles} />
            <Position job="Software Developer Intern - Skillbook Academy " location="Toronto, ON" date="January 2021 - April 2021"
                description="Skillbook Academy's Website"
                skills="PHP • Laravel • TypeScript • Vue • SQL" responsiveStyles={responsiveStyles} />
            <Position job="Software Developer Intern - Virtek Vision " location="Waterloo, ON" date="June 2020 - August 2020"
                description="PDC 2020.08"
                skills="C++ • ACIS • C# • WPF • Python" responsiveStyles={responsiveStyles} />
            <Position job="Software Developer Intern - Bentley Systems " location="Burlington, ON" date="September 2019 - December 2019"
                description="APM Mobile Inspections"
                skills="C# • Xamarin • Android • iOS • YAML" responsiveStyles={responsiveStyles} />
            <Position job="Software Developer Intern - Netint Technologies " location="Markham, ON" date="January 2019 - April 2019"
                description="Codensity T408 SSD Automated Testing"
                skills="Python • NVMe" responsiveStyles={responsiveStyles} />
            <Position job="Software Developer Intern - Wind River Systems " location="Ottawa, ON" date="May 2018 - August 2018"
                description="Titanium Cloud Infrastructure"
                skills="Python • Grafana • InfluxDB" responsiveStyles={responsiveStyles} />
            <ChevronContainer link="#education" responsiveStyles={responsiveStyles} />
            <MobileExperience responsiveStyles={responsiveStyles} />
        </>
    );
}

export default Experience;