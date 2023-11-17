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
            
            this.sectionTitle = { paddingLeft: '6%', margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            
            this.skills = { textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingLeft: '9%', fontWeight: 'bold', color: 'black'};
            this.skillsRow = {paddingLeft: '12%', paddingRight: '3%'};
        } else if (xl) { // >= 1200px, Mobile site
            console.log('xl');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '82px', textAlign: 'center'};
            this.links = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDots = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skills = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        } else if (lg) { // >= 992px
            console.log('lg');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '58px'};
            this.links = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDots = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skills = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        } else if (md) { // >= 768px
            console.log('md');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '48px'};
            this.links = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDots = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skills = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        } else if (sm) { // >= 576px
            console.log('sm');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '32px'};
            this.links = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDots = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skills = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        } else if (xs) { // < 576px
            console.log('xs');
            this.name = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '28px'};
            this.links = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};
            this.linksParagraph = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpan = {verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDot = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDots = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skills = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        }
    }
}

export default ResponsiveStyles;