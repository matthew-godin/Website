class ResponsiveStyles {
    constructor(xs, sm, md, lg, xl, xxl) {
        console.log('Getting ResponsiveStyles')
        if (xxl) { // >= 1600px, Desktop site
            console.log('xxl');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '88px'};
            this.links = {verticalAlign: 'middle', display: 'inline', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '25px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {fontSize: '25px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDots = {fontSize: '25px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.linksSection = {textDecoration: 'none'};
            this.linksSvgSection = {};
            this.linksSvgSize = "28";
            this.headerContainer = {paddingLeft: '6%'};
            this.headerContainerContainer = { paddingBottom: '2%', marginTop: 0, marginBottom: 0, width: '100%', position: 'absolute', bottom: '0'};
            this.headerChevronMarginTop = "3.5%";
            this.headerLink = '#skills';
            
            this.sectionTitle = { paddingLeft: '6%', margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.chevronSize = '50px';
            this.sectionsMobileSite = 'block';
            this.displayMobileSite = 'none';
            
            this.skills = { textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingLeft: '9%', fontWeight: 'bold', color: 'black'};
            this.skillsRow = {paddingLeft: '12%', paddingRight: '3%'};
            this.skillsVh = '22vh';
        } else if (xl) { // >= 1200px, Mobile site
            console.log('xl');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '125px', textAlign: 'center'};
            this.links = {verticalAlign: 'middle', display: 'inline', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '35px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {display: 'none'};
            this.linksSubsequentDots = {display: 'none'};
            this.linksSection = {textDecoration: 'none', display: 'block', textAlign: 'center', padding: '10px'};
            this.linksSvgSection = {display: 'block', textAlign: 'center', padding: '10px'};
            this.linksSvgSize = "38";
            this.headerContainer = {paddingLeft: '0'};
            this.headerContainerContainer = { paddingBottom: '3%', marginTop: 0, marginBottom: 0, width: '100%', position: 'absolute', bottom: '0'};
            this.headerChevronMarginTop = "10%";
            this.headerLink = '#programming-languages';

            this.sectionTitle = { margin: '0', fontSize: '40px', paddingTop: '3.5%', fontWeight: 'bold', color: 'black', textAlign: 'center' };
            this.chevronSize = '47.5px';
            this.sectionsMobileSite = 'none';
            this.displayMobileSite = 'block';
            
            this.skillsTitle = { fontSize: '32px', fontWeight: 'bold', color: 'black', textAlign: 'center' };
            this.skills = { textAlign: 'center', fontSize: '28px', fontWeight: 'bold', color: 'black'};
            this.skillsVh = '10vh';

            this.jobTitleMobile = { textAlign: 'center', fontSize: '24px', fontWeight: 'bold'};
            this.jobDateMobile = { textAlign: 'center', fontSize: '18px', fontWeight: 'bold'};

            this.projectDateMobile = { textAlign: 'center', fontSize: '21px', fontWeight: 'bold'};
        } else if (lg) { // >= 992px
            console.log('lg');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '105px', textAlign: 'center'};
            this.links = {verticalAlign: 'middle', display: 'inline', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '30px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {display: 'none'};
            this.linksSubsequentDots = {display: 'none'};
            this.linksSection = {textDecoration: 'none', display: 'block', textAlign: 'center', padding: '10px'};
            this.linksSvgSection = {display: 'block', textAlign: 'center', padding: '8px'};
            this.linksSvgSize = "33";
            this.headerContainer = {paddingLeft: '0'};
            this.headerContainerContainer = { paddingBottom: '4%', marginTop: 0, marginBottom: 0, width: '100%', position: 'absolute', bottom: '0'};
            this.headerChevronMarginTop = "10%";
            this.headerLink = '#programming-languages';
            
            this.sectionTitle = { paddingLeft: '6%', margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.chevronSize = '45px';
            this.sectionsMobileSite = 'none';
            this.displayMobileSite = 'block';
            
            this.skills = { textAlign: 'center', fontSize: '28px', fontWeight: 'bold', color: 'black'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingLeft: '9%', fontWeight: 'bold', color: 'black'};
            this.skillsRow = {paddingLeft: '12%', paddingRight: '3%'};
            this.skillsVh = '10vh';
        } else if (md) { // >= 768px
            console.log('md');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '85px', textAlign: 'center'};
            this.links = {verticalAlign: 'middle', display: 'inline', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '25px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {display: 'none'};
            this.linksSubsequentDots = {display: 'none'};
            this.linksSection = {textDecoration: 'none', display: 'block', textAlign: 'center', padding: '10px'};
            this.linksSvgSection = {display: 'block', textAlign: 'center', padding: '8px'};
            this.linksSvgSize = "28";
            this.headerContainer = {paddingLeft: '0'};
            this.headerContainerContainer = { paddingBottom: '5%', marginTop: 0, marginBottom: 0, width: '100%', position: 'absolute', bottom: '0'};
            this.headerChevronMarginTop = "10%";
            this.headerLink = '#programming-languages';
            
            this.sectionTitle = { paddingLeft: '6%', margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.chevronSize = '42.5px';
            this.sectionsMobileSite = 'none';
            this.displayMobileSite = 'block';
            
            this.skills = { textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingLeft: '9%', fontWeight: 'bold', color: 'black'};
            this.skillsRow = {paddingLeft: '12%', paddingRight: '3%'};
            this.skillsVh = '10vh';
        } else if (sm) { // >= 576px
            console.log('sm');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '65px', textAlign: 'center'};
            this.links = {verticalAlign: 'middle', display: 'inline', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '20px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {display: 'none'};
            this.linksSubsequentDots = {display: 'none'};
            this.linksSection = {textDecoration: 'none', display: 'block', textAlign: 'center', padding: '10px'};
            this.linksSvgSection = {display: 'block', textAlign: 'center', padding: '8px'};
            this.linksSvgSize = "23";
            this.headerContainer = {paddingLeft: '0'};
            this.headerContainerContainer = { paddingBottom: '6%', marginTop: 0, marginBottom: 0, width: '100%', position: 'absolute', bottom: '0'};
            this.headerChevronMarginTop = "10%";
            this.headerLink = '#programming-languages';
            
            this.sectionTitle = { paddingLeft: '6%', margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.chevronSize = '40px';
            this.sectionsMobileSite = 'none';
            this.displayMobileSite = 'block';
            
            this.skills = { textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingLeft: '9%', fontWeight: 'bold', color: 'black'};
            this.skillsRow = {paddingLeft: '12%', paddingRight: '3%'};
            this.skillsVh = '10vh';
        } else if (xs) { // < 576px
            console.log('xs');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '45px', textAlign: 'center'};
            this.links = {verticalAlign: 'middle', display: 'inline', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '15px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {display: 'none'};
            this.linksSubsequentDots = {display: 'none'};
            this.linksSection = {textDecoration: 'none', display: 'block', textAlign: 'center', padding: '10px'};
            this.linksSvgSection = {display: 'block', textAlign: 'center', padding: '8px'};
            this.linksSvgSize = "18";
            this.headerContainer = {paddingLeft: '0'};
            this.headerContainerContainer = { paddingBottom: '7%', marginTop: 0, marginBottom: 0, width: '100%', position: 'absolute', bottom: '0'};
            this.headerChevronMarginTop = "10%";
            this.headerLink = '#programming-languages';
            
            this.sectionTitle = { paddingLeft: '6%', margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.chevronSize = '37.5px';
            this.sectionsMobileSite = 'none';
            this.displayMobileSite = 'block';
            
            this.skills = { textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingLeft: '9%', fontWeight: 'bold', color: 'black'};
            this.skillsRow = {paddingLeft: '12%', paddingRight: '3%'};
            this.skillsVh = '10vh';
        }
    }
}

export default ResponsiveStyles;