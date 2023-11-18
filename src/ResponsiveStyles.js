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

            this.universityName = {textAlign: 'center', fontWeight: 'bold', fontSize: '42px'};
            this.degreeName = {textAlign: 'center', fontWeight: 'bold', fontSize: '32px'};
            this.degreeMentions = {textAlign: 'center', fontWeight: 'bold', fontSize: '22px'};
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

            this.sectionTitle = { margin: '0', fontSize: '40px', paddingTop: '45px', fontWeight: 'bold', color: 'black', textAlign: 'center' };
            this.chevronSize = '47.5px';
            this.sectionsMobileSite = 'none';
            this.displayMobileSite = 'block';
            
            this.skillsTitle = this.sectionTitle;
            this.skills = { textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: 'black'};
            this.skillsVh = '10vh';

            this.jobTitleMobile = { textAlign: 'center', fontSize: '24px', fontWeight: 'bold'};
            this.jobDateMobile = { textAlign: 'center', fontSize: '18px', fontWeight: 'bold'};

            this.projectTitleMobile = { textAlign: 'center', fontSize: '24px', fontWeight: 'bold'};
            this.projectDateMobile = { textAlign: 'center', fontSize: '21px', fontWeight: 'bold'};

            this.universityName = {textAlign: 'center', fontWeight: 'bold', fontSize: '38px'};
            this.degreeName = {textAlign: 'center', fontWeight: 'bold', fontSize: '29px'};
            this.degreeMentions = {textAlign: 'center', fontWeight: 'bold', fontSize: '20px'};
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
            
            this.sectionTitle = { margin: '0', fontSize: '36px', paddingTop: '50px', fontWeight: 'bold', color: 'black', textAlign: 'center' };
            this.chevronSize = '45px';
            this.sectionsMobileSite = 'none';
            this.displayMobileSite = 'block';
            
            this.skillsTitle = this.sectionTitle;
            this.skills = { textAlign: 'center', fontSize: '27.5px', fontWeight: 'bold', color: 'black'};
            this.skillsVh = '10vh';

            this.jobTitleMobile = { textAlign: 'center', fontSize: '22px', fontWeight: 'bold'};
            this.jobDateMobile = { textAlign: 'center', fontSize: '16px', fontWeight: 'bold'};

            this.projectTitleMobile = { textAlign: 'center', fontSize: '20px', fontWeight: 'bold'};
            this.projectDateMobile = { textAlign: 'center', fontSize: '18px', fontWeight: 'bold'};

            this.universityName = {textAlign: 'center', fontWeight: 'bold', fontSize: '34px'};
            this.degreeName = {textAlign: 'center', fontWeight: 'bold', fontSize: '26px'};
            this.degreeMentions = {textAlign: 'center', fontWeight: 'bold', fontSize: '18px'};
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
            
            this.sectionTitle = { margin: '0', fontSize: '33px', paddingTop: '55px', fontWeight: 'bold', color: 'black', textAlign: 'center' };
            this.chevronSize = '42.5px';
            this.sectionsMobileSite = 'none';
            this.displayMobileSite = 'block';
            
            this.skillsTitle = this.sectionTitle;
            this.skills = { textAlign: 'center', fontSize: '25px', fontWeight: 'bold', color: 'black'};
            this.skillsVh = '10vh';

            this.jobTitleMobile = { textAlign: 'center', fontSize: '20px', fontWeight: 'bold'};
            this.jobDateMobile = { textAlign: 'center', fontSize: '14px', fontWeight: 'bold'};

            this.projectTitleMobile = { textAlign: 'center', fontSize: '16px', fontWeight: 'bold'};
            this.projectDateMobile = { textAlign: 'center', fontSize: '15px', fontWeight: 'bold'};

            this.universityName = {textAlign: 'center', fontWeight: 'bold', fontSize: '30px'};
            this.degreeName = {textAlign: 'center', fontWeight: 'bold', fontSize: '23px'};
            this.degreeMentions = {textAlign: 'center', fontWeight: 'bold', fontSize: '16px'};
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
            
            this.sectionTitle = { margin: '0', fontSize: '29px', paddingTop: '67.5px', fontWeight: 'bold', color: 'black', textAlign: 'center' };
            this.chevronSize = '40px';
            this.sectionsMobileSite = 'none';
            this.displayMobileSite = 'block';
            
            this.skillsTitle = this.sectionTitle;
            this.skills = { textAlign: 'center', fontSize: '22.5px', fontWeight: 'bold', color: 'black'};
            this.skillsVh = '10vh';

            this.jobTitleMobile = { textAlign: 'center', fontSize: '18px', fontWeight: 'bold'};
            this.jobDateMobile = { textAlign: 'center', fontSize: '12px', fontWeight: 'bold'};

            this.projectTitleMobile = { textAlign: 'center', fontSize: '13px', fontWeight: 'bold'};
            this.projectDateMobile = { textAlign: 'center', fontSize: '12px', fontWeight: 'bold'};

            this.universityName = {textAlign: 'center', fontWeight: 'bold', fontSize: '26px'};
            this.degreeName = {textAlign: 'center', fontWeight: 'bold', fontSize: '20px'};
            this.degreeMentions = {textAlign: 'center', fontWeight: 'bold', fontSize: '14px'};
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
            
            this.sectionTitle = { margin: '0', fontSize: '26px', paddingTop: '75px', fontWeight: 'bold', color: 'black', textAlign: 'center' };
            this.chevronSize = '37.5px';
            this.sectionsMobileSite = 'none';
            this.displayMobileSite = 'block';
            
            this.skillsTitle = this.sectionTitle;
            this.skills = { textAlign: 'center', fontSize: '20px', fontWeight: 'bold', color: 'black'};
            this.skillsVh = '10vh';

            this.jobTitleMobile = { textAlign: 'center', fontSize: '14px', fontWeight: 'bold'};
            this.jobDateMobile = { textAlign: 'center', fontSize: '10px', fontWeight: 'bold'};

            this.projectTitleMobile = { textAlign: 'center', fontSize: '9px', fontWeight: 'bold'};
            this.projectDateMobile = { textAlign: 'center', fontSize: '8px', fontWeight: 'bold'};

            this.universityName = {textAlign: 'center', fontWeight: 'bold', fontSize: '22px'};
            this.degreeName = {textAlign: 'center', fontWeight: 'bold', fontSize: '17px'};
            this.degreeMentions = {textAlign: 'center', fontWeight: 'bold', fontSize: '12px'};
        }
    }
}

export default ResponsiveStyles;