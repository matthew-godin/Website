class ResponsiveStyles {
    constructor(xs, sm, md, lg, xl, xxl) {
        console.log('Getting ResponsiveStyles')
        if (xxl) { // >= 1600px, Desktop site
            console.log('xxl');
            this.nameStyle = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '88px'};
            this.linksStyle = {verticalAlign: 'middle', display: 'inline', padding: '0', margin: '0'};
            this.linksParagraphStyle = {fontSize: '25px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpanStyle = {verticalAlign: 'bottom', display: 'inline', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDotStyle = {fontSize: '25px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDotsStyle = {fontSize: '25px', display: 'inline', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skillsStyle = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitleStyle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitleStyle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        } else if (xl) { // >= 1200px, Mobile site
            console.log('xl');
            this.nameStyle = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '82px', textAlign: 'center'};
            this.linksStyle = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};
            this.linksParagraphStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpanStyle = {verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDotStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDotsStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skillsStyle = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitleStyle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitleStyle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        } else if (lg) { // >= 992px
            console.log('lg');
            this.nameStyle = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '58px'};
            this.linksStyle = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};
            this.linksParagraphStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpanStyle = {verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDotStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDotsStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skillsStyle = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitleStyle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitleStyle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        } else if (md) { // >= 768px
            console.log('md');
            this.nameStyle = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '48px'};
            this.linksStyle = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};
            this.linksParagraphStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpanStyle = {verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDotStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDotsStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skillsStyle = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitleStyle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitleStyle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        } else if (sm) { // >= 576px
            console.log('sm');
            this.nameStyle = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '32px'};
            this.linksStyle = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};
            this.linksParagraphStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpanStyle = {verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDotStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDotsStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skillsStyle = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitleStyle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitleStyle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        } else if (xs) { // < 576px
            console.log('xs');
            this.nameStyle = {marginTop: '0', marginBottom: '8px', color: 'white', fontWeight: '500', fontSize: '28px'};
            this.linksStyle = {verticalAlign: 'middle', display: 'inline-block', padding: '0', margin: '0'};
            this.linksParagraphStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold'};
            this.linksSvgSpanStyle = {verticalAlign: 'bottom', display: 'inline-block', padding: '0', margin: '0', marginRight: '10px', marginLeft: '10px'};
            this.linksFirstDotStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'};
            this.linksSubsequentDotsStyle = {fontSize: '28px', padding: '0', margin: '0', color: 'white', fontWeight: 'bold', marginLeft: '10px'};
            this.skillsStyle = { paddingTop: '3%', textAlign: 'center', fontSize: '28px', fontWeight: 'bold'};
            this.sectionTitleStyle = { margin: '0', paddingTop: '3%', fontWeight: 'bold', color: 'black', fontSize: '54px'};
            this.skillsTitleStyle = { margin: '0', fontSize: '36px', paddingTop: '3%', paddingLeft: '3%', fontWeight: 'bold', color: 'black'};
        }
    }
}

export default ResponsiveStyles;