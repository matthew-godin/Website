import { DISPLAY_BLOCK, DISPLAY_NONE, LINKS_STYLE, NO_DISPLAY, NO_STYLE, NO_TEXT_DECORATION, VERTICAL_ALIGN_BASELINE, VERTICAL_ALIGN_BOTTOM } from "./constants/Styles";
import { toVh, toPx } from "./util/Strings";
import { getHeaderContainerContainerStyle, getHeaderContainerStyle, getLinksFirstDotStyle, getLinksParagraphStyle, getLinksSectionStyle,
    getLinksSubsequentDotsStyle, getLinksSvgSectionStyle, getNameStyle, getSectionTitleStyle, getSkillsRowStyle, getSkillsStyle, getSkillsTitleStyle,
    getSvgSpanStyle, getTitleStyle } from "./util/Styles";

const MARGIN_BOTTOM = 8;
const MARGIN_LEFT_AND_RIGHT = 10;
const CHEVRON_MARGIN_TOP = '3.5%';
const CHEVRON_MARGIN_TOP_MOBILE = '5vh';
const CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT = '10vh';
const CHEVRON_MARGIN_TOP_MOBILE_LANDSCAPE_SM = '2.5vh';
const CHEVRON_MARGIN_TOP_MOBILE_LANDSCAPE_XS = '1vh';
const PADDING = 10;
const PADDING_LG_MD_SM = 8;
const PADDING_XS = 4;
const PADDING_LANDSCAPE = '0.25%';
const PADDING_SM_XS_LANDSCAPE = '0';
const PADDING_LEFT = '6%';
const PADDING_LEFT_HEADER_MOBILE = '0';
const PADDING_LEFT_MOBILE = '3%';
const PADDING_LEFT_SKILLS = '9%';
const PADDING_LEFT_SKILLS_ROW = '12%';
const PADDING_BOTTOM = '2%';
const PADDING_BOTTOM_MOBILE = '3%';
const PADDING_BOTTOM_MOBILE_LG = '4%';
const PADDING_BOTTOM_MOBILE_MD = '5%';
const PADDING_BOTTOM_MOBILE_SM = '6%';
const PADDING_BOTTOM_MOBILE_XS = '7%';
const PADDING_TOP = '3%';
const PADDING_RIGHT = '3%';
const PADDING_SKILLS_SIDE = '30%';
const PADDING_SKILLS_SIDE_SM = '20%';
const PADDING_SKILLS_SIDE_XS = '10%';

const DESKTOP_NAME_FONT_SIZE = 88;
const DESKTOP_TEXT_ALIGN = 'left';
const DESKTOP_LINKS_FONT_SIZE = 25;
const DESKTOP_LINKS_SVG_SIZE = 28;
const DESKTOP_SECTION_TITLE_FONT_SIZE = 54;
const DESKTOP_CHEVRON_SIZE = 50;
const DESKTOP_SKILLS_FONT_SIZE= 28;
const DESKTOP_SKILLS_TITLE_FONT_SIZE = 36;
const DESKTOP_UNIVERSITY_NAME_FONT_SIZE = 42;
const DESKTOP_DEGREE_NAME_FONT_SIZE = 32;
const DESKTOP_DEGREE_MENTIONS_FONT_SIZE = 22;
const DESKTOP_RELEVANT_COURSES_TITLE_FONT_SIZE = 28;
const DESKTOP_RELEVANT_COURSES_FONT_SIZE = 18;
const DESKTOP_SKILLS_HEIGHT = 22;
const DESKTOP_HEADER_LINK = '#skills';

const MOBILE_NAME_FONT_SIZE = { portrait: { xl: 125, lg: 105, md: 85, sm: 65, xs: 33.5 }, landscape: { xl: 60, lg: 50, md: 45, sm: 30, xs: 20 } };
const MOBILE_TEXT_ALIGN = 'center';
const MOBILE_LINKS_FONT_SIZE = { portrait: { xl: 35, lg: 30, md: 25, sm: 20, xs: 11 }, landscape: { xl: 23, lg: 18, md: 15, sm: 13, xs: 11 } };
const MOBILE_LINKS_SVG_SIZE = { portrait: { xl: 38, lg: 33, md: 28, sm: 23, xs: 14 }, landscape: { xl: 26, lg: 21, md: 21, sm: 16, xs: 14 } };
const MOBILE_SECTION_TITLE_FONT_SIZE = { xl: 40, lg: 36, md: 33, sm: 29, xs: 26 };
const MOBILE_CHEVRON_SIZE = { portrait: { xl: 47.5, lg: 45, md: 42.5, sm: 40, xs: 37.5 }, landscape: { xl: 47.5, lg: 45, md: 42.5, sm: 30, xs: 25 } };
const MOBILE_SKILLS_FONT_SIZE = { xl: 30, lg: 27.5, md: 25, sm: 22.5, xs: 20 };
const MOBILE_JOB_TITLE_FONT_SIZE = { xl: 24, lg: 22, md: 20, sm: 18, xs: 14 };
const MOBILE_JOB_DATE_FONT_SIZE = { xl: 20, lg: 18, md: 16, sm: 14, xs: 12 };
const MOBILE_EDUCATION_TITLE_FONT_SIZE = { xl: 40, lg: 37, md: 33, sm: 30, xs: 21 };
const MOBILE_EDUCATION_DATE_FONT_SIZE = { xl: 35, lg: 32, md: 28, sm: 25, xs: 19 };
const MOBILE_PROJECT_TITLE_FONT_SIZE = { xl: 24, lg: 22, md: 18, sm: 15, xs: 14 };
const MOBILE_PROJECT_DESCRIPTION_FONT_SIZE = { xl: 20, lg: 17, md: 15, sm: 13, xs: 12 };
const MOBILE_PROJECT_DATE_FONT_SIZE = { xl: 19, lg: 16, md: 14, sm: 12, xs: 11 };
const MOBILE_UNIVERSITY_NAME_FONT_SIZE = { xl: 38, lg: 34, md: 30, sm: 26, xs: 22 };
const MOBILE_DEGREE_NAME_FONT_SIZE = { xl: 29, lg: 26, md: 23, sm: 20, xs: 15 };
const MOBILE_DEGREE_MENTIONS_FONT_SIZE = { xl: 22, lg: 20, md: 18, sm: 16, xs: 13 };
const MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE = { xl: 28, lg: 25, md: 22, sm: 19, xs: 16 };
const MOBILE_SKILLS_TITLE_FONT_SIZE = { xl: 25, lg: 23, md: 21, sm: 19, xs: 17 };
const MOBILE_SKILLS_DATE_FONT_SIZE = { xl: 21, lg: 19, md: 17, sm: 15, xs: 13 };
const MOBILE_SKILLS_HEIGHT = 10;
const MOBILE_HEADER_LINK = '#programming-languages';

class ResponsiveStyles {
    populateStyles(portrait, desktop, nameFontSize, textAlign, linksFontSize,
        linksSectionPadding, linksSvgSectionPadding, linksSvgSize,
        paddingLeft, paddingBottom, chevronMargin,
        sectionTitleFontSize, chevronSize, skillsFontSize,
        skillsSidePadding, universityNameFontSize, degreeNameFontSize,
        degreeMentionsFontSize, relevantCoursesTitleFontSize,
        jobTitleMobileFontSize, jobDateMobileFontSize, educationTitleMobileFontSize,
        educationDateMobileFontSize, projectTitleMobileFontSize, projectDescriptionMobileFontSize,
        projectDateMobileFontSize, skillsTitleMobileFontSize, skillsDateMobileFontSize) {
            this.portrait = portrait;
            this.name = getNameStyle(MARGIN_BOTTOM, nameFontSize, textAlign);
            this.linksParagraph = getLinksParagraphStyle(linksFontSize);
            this.linksSection = desktop ? NO_TEXT_DECORATION : getLinksSectionStyle(linksSectionPadding);
            this.linksSvgSection = desktop ? NO_STYLE : getLinksSvgSectionStyle(linksSvgSectionPadding);
            this.linksSvgSize = linksSvgSize.toString();
            this.headerContainer = getHeaderContainerStyle(paddingLeft);
            this.headerContainerContainer = getHeaderContainerContainerStyle(paddingBottom);
            this.headerChevronMarginTop = chevronMargin;
            this.sectionTitle = getSectionTitleStyle(desktop, paddingLeft, PADDING_TOP, sectionTitleFontSize, textAlign);
            this.chevronSize = toPx(chevronSize);
            this.skills = getSkillsStyle(skillsFontSize);
            this.skillsSidePadding = skillsSidePadding;
            this.universityName = getTitleStyle(universityNameFontSize);
            this.degreeName = getTitleStyle(degreeNameFontSize);
            this.degreeMentions = getTitleStyle(degreeMentionsFontSize);
            this.relevantCoursesTitle = getTitleStyle(relevantCoursesTitleFontSize);
            if (desktop) {
                this.linksFirstDot = getLinksFirstDotStyle(linksFontSize, MARGIN_LEFT_AND_RIGHT);
                this.linksSubsequentDots = getLinksSubsequentDotsStyle(linksFontSize, MARGIN_LEFT_AND_RIGHT);
                this.sectionsMobileSite = DISPLAY_BLOCK;
                this.displayMobileSite = DISPLAY_NONE;
                this.headerLink = DESKTOP_HEADER_LINK;
                this.skillsTitle = getSkillsTitleStyle(DESKTOP_SKILLS_TITLE_FONT_SIZE, PADDING_LEFT_SKILLS);
                this.skillsRow = getSkillsRowStyle(PADDING_LEFT_SKILLS_ROW, PADDING_RIGHT);
                this.skillsVh = toVh(DESKTOP_SKILLS_HEIGHT);
                this.relevantCourses = getTitleStyle(DESKTOP_RELEVANT_COURSES_FONT_SIZE);
            } else {
                this.skillsTitle = this.sectionTitle;
                this.jobTitleMobile = getTitleStyle(jobTitleMobileFontSize);
                this.jobDateMobile = getTitleStyle(jobDateMobileFontSize);
                this.educationTitleMobile = getTitleStyle(educationTitleMobileFontSize);
                this.educationDateMobile = getTitleStyle(educationDateMobileFontSize);
                this.projectTitleMobile = getTitleStyle(projectTitleMobileFontSize);
                this.projectDescriptionMobile = getTitleStyle(projectDescriptionMobileFontSize);
                this.projectDateMobile = getTitleStyle(projectDateMobileFontSize);
                this.skillsTitleMobile = getTitleStyle(skillsTitleMobileFontSize);
                this.skillsDateMobile = getTitleStyle(skillsDateMobileFontSize);
            }
    }

    constructor(xs, sm, md, lg, xl, xxl, orientationType) {
        this.links = LINKS_STYLE;
        this.linksSvgSpan = getSvgSpanStyle(VERTICAL_ALIGN_BOTTOM, MARGIN_LEFT_AND_RIGHT);
        this.linksFirstDot = NO_DISPLAY;
        this.linksSubsequentDots = NO_DISPLAY;
        this.sectionsMobileSite = DISPLAY_NONE;
        this.displayMobileSite = DISPLAY_BLOCK;
        this.headerLink = MOBILE_HEADER_LINK;
        this.skillsRow = getSkillsRowStyle(PADDING_LEFT_MOBILE, PADDING_RIGHT);
        this.skillsVh = toVh(MOBILE_SKILLS_HEIGHT);
        if (xxl) { // >= 1600px, Desktop site
            this.populateStyles(true, true, DESKTOP_NAME_FONT_SIZE, DESKTOP_TEXT_ALIGN, DESKTOP_LINKS_FONT_SIZE,
                undefined, undefined, DESKTOP_LINKS_SVG_SIZE, PADDING_LEFT, PADDING_BOTTOM, CHEVRON_MARGIN_TOP,
                DESKTOP_SECTION_TITLE_FONT_SIZE, DESKTOP_CHEVRON_SIZE, DESKTOP_SKILLS_FONT_SIZE,
                PADDING_SKILLS_SIDE, DESKTOP_UNIVERSITY_NAME_FONT_SIZE, DESKTOP_DEGREE_NAME_FONT_SIZE,
                DESKTOP_DEGREE_MENTIONS_FONT_SIZE, DESKTOP_RELEVANT_COURSES_TITLE_FONT_SIZE, DESKTOP_RELEVANT_COURSES_FONT_SIZE,
                undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
        } else if (xl) { // >= 1200px, Mobile site
            if (orientationType.startsWith('portrait')) {
                this.populateStyles(true, false, MOBILE_NAME_FONT_SIZE.portrait.xl, MOBILE_TEXT_ALIGN, MOBILE_LINKS_FONT_SIZE.portrait.xl,
                    toPx(PADDING), toPx(PADDING), MOBILE_LINKS_SVG_SIZE.portrait.xl, PADDING_LEFT_HEADER_MOBILE, PADDING_BOTTOM_MOBILE,
                    CHEVRON_MARGIN_TOP_MOBILE, MOBILE_SECTION_TITLE_FONT_SIZE.xl, MOBILE_CHEVRON_SIZE.portrait.xl, MOBILE_SKILLS_FONT_SIZE.xl,
                    PADDING_SKILLS_SIDE, MOBILE_UNIVERSITY_NAME_FONT_SIZE.xl, MOBILE_DEGREE_NAME_FONT_SIZE.xl, MOBILE_DEGREE_MENTIONS_FONT_SIZE.xl,
                    MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE.xl, MOBILE_JOB_TITLE_FONT_SIZE.xl, MOBILE_JOB_DATE_FONT_SIZE.xl,
                    MOBILE_EDUCATION_TITLE_FONT_SIZE.xl, MOBILE_EDUCATION_DATE_FONT_SIZE.xl, MOBILE_PROJECT_TITLE_FONT_SIZE.xl,
                    MOBILE_PROJECT_DESCRIPTION_FONT_SIZE.xl, MOBILE_PROJECT_DATE_FONT_SIZE.xl,
                    MOBILE_SKILLS_TITLE_FONT_SIZE.xl, MOBILE_SKILLS_DATE_FONT_SIZE.xl);
            } else {
                this.populateStyles(false, false, MOBILE_NAME_FONT_SIZE.landscape.xl, MOBILE_TEXT_ALIGN, MOBILE_LINKS_FONT_SIZE.landscape.xl,
                    PADDING_LANDSCAPE, PADDING_LANDSCAPE, MOBILE_LINKS_SVG_SIZE.landscape.xl, PADDING_LEFT_HEADER_MOBILE, PADDING_BOTTOM_MOBILE,
                    CHEVRON_MARGIN_TOP_MOBILE, MOBILE_SECTION_TITLE_FONT_SIZE.xl, MOBILE_CHEVRON_SIZE.landscape.xl, MOBILE_SKILLS_FONT_SIZE.xl,
                    PADDING_SKILLS_SIDE, MOBILE_UNIVERSITY_NAME_FONT_SIZE.xl, MOBILE_DEGREE_NAME_FONT_SIZE.xl, MOBILE_DEGREE_MENTIONS_FONT_SIZE.xl,
                    MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE.xl, MOBILE_JOB_TITLE_FONT_SIZE.xl, MOBILE_JOB_DATE_FONT_SIZE.xl,
                    MOBILE_EDUCATION_TITLE_FONT_SIZE.xl, MOBILE_EDUCATION_DATE_FONT_SIZE.xl, MOBILE_PROJECT_TITLE_FONT_SIZE.xl,
                    MOBILE_PROJECT_DESCRIPTION_FONT_SIZE.xl, MOBILE_PROJECT_DATE_FONT_SIZE.xl,
                    MOBILE_SKILLS_TITLE_FONT_SIZE.xl, MOBILE_SKILLS_DATE_FONT_SIZE.xl);
            }
        } else if (lg) { // >= 992px
            if (orientationType.startsWith('portrait')) {
                this.populateStyles(true, false, MOBILE_NAME_FONT_SIZE.portrait.lg, MOBILE_TEXT_ALIGN, MOBILE_LINKS_FONT_SIZE.portrait.lg,
                    toPx(PADDING), toPx(PADDING_LG_MD_SM), MOBILE_LINKS_SVG_SIZE.portrait.lg, PADDING_LEFT_HEADER_MOBILE, PADDING_BOTTOM_MOBILE_LG,
                    CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT, MOBILE_SECTION_TITLE_FONT_SIZE.lg, MOBILE_CHEVRON_SIZE.portrait.lg, MOBILE_SKILLS_FONT_SIZE.lg,
                    PADDING_SKILLS_SIDE, MOBILE_UNIVERSITY_NAME_FONT_SIZE.lg, MOBILE_DEGREE_NAME_FONT_SIZE.lg, MOBILE_DEGREE_MENTIONS_FONT_SIZE.lg,
                    MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE.lg, MOBILE_JOB_TITLE_FONT_SIZE.lg, MOBILE_JOB_DATE_FONT_SIZE.lg,
                    MOBILE_EDUCATION_TITLE_FONT_SIZE.lg, MOBILE_EDUCATION_DATE_FONT_SIZE.lg, MOBILE_PROJECT_TITLE_FONT_SIZE.lg,
                    MOBILE_PROJECT_DESCRIPTION_FONT_SIZE.lg, MOBILE_PROJECT_DATE_FONT_SIZE.lg,
                    MOBILE_SKILLS_TITLE_FONT_SIZE.lg, MOBILE_SKILLS_DATE_FONT_SIZE.lg);
            } else {
                this.populateStyles(false, false, MOBILE_NAME_FONT_SIZE.landscape.lg, MOBILE_TEXT_ALIGN, MOBILE_LINKS_FONT_SIZE.landscape.lg,
                    PADDING_LANDSCAPE, PADDING_LANDSCAPE, MOBILE_LINKS_SVG_SIZE.landscape.lg, PADDING_LEFT_HEADER_MOBILE, PADDING_BOTTOM_MOBILE_LG,
                    CHEVRON_MARGIN_TOP_MOBILE, MOBILE_SECTION_TITLE_FONT_SIZE.lg, MOBILE_CHEVRON_SIZE.landscape.lg, MOBILE_SKILLS_FONT_SIZE.lg,
                    PADDING_SKILLS_SIDE, MOBILE_UNIVERSITY_NAME_FONT_SIZE.lg, MOBILE_DEGREE_NAME_FONT_SIZE.lg, MOBILE_DEGREE_MENTIONS_FONT_SIZE.lg,
                    MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE.lg, MOBILE_JOB_TITLE_FONT_SIZE.lg, MOBILE_JOB_DATE_FONT_SIZE.lg,
                    MOBILE_EDUCATION_TITLE_FONT_SIZE.lg, MOBILE_EDUCATION_DATE_FONT_SIZE.lg, MOBILE_PROJECT_TITLE_FONT_SIZE.lg,
                    MOBILE_PROJECT_DESCRIPTION_FONT_SIZE.lg, MOBILE_PROJECT_DATE_FONT_SIZE.lg,
                    MOBILE_SKILLS_TITLE_FONT_SIZE.lg, MOBILE_SKILLS_DATE_FONT_SIZE.lg);
            }
            
        } else if (md) { // >= 768px
            if (orientationType.startsWith('portrait')) {
                this.populateStyles(true, false, MOBILE_NAME_FONT_SIZE.portrait.md, MOBILE_TEXT_ALIGN, MOBILE_LINKS_FONT_SIZE.portrait.md,
                    toPx(PADDING), toPx(PADDING_LG_MD_SM), MOBILE_LINKS_SVG_SIZE.portrait.md, PADDING_LEFT_HEADER_MOBILE, PADDING_BOTTOM_MOBILE_MD,
                    CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT, MOBILE_SECTION_TITLE_FONT_SIZE.md, MOBILE_CHEVRON_SIZE.portrait.md, MOBILE_SKILLS_FONT_SIZE.md,
                    PADDING_SKILLS_SIDE, MOBILE_UNIVERSITY_NAME_FONT_SIZE.md, MOBILE_DEGREE_NAME_FONT_SIZE.md, MOBILE_DEGREE_MENTIONS_FONT_SIZE.md,
                    MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE.md, MOBILE_JOB_TITLE_FONT_SIZE.md, MOBILE_JOB_DATE_FONT_SIZE.md,
                    MOBILE_EDUCATION_TITLE_FONT_SIZE.md, MOBILE_EDUCATION_DATE_FONT_SIZE.md, MOBILE_PROJECT_TITLE_FONT_SIZE.md,
                    MOBILE_PROJECT_DESCRIPTION_FONT_SIZE.md, MOBILE_PROJECT_DATE_FONT_SIZE.md,
                    MOBILE_SKILLS_TITLE_FONT_SIZE.md, MOBILE_SKILLS_DATE_FONT_SIZE.md);
            } else {
                this.populateStyles(false, false, MOBILE_NAME_FONT_SIZE.landscape.md, MOBILE_TEXT_ALIGN, MOBILE_LINKS_FONT_SIZE.landscape.md,
                    PADDING_LANDSCAPE, PADDING_LANDSCAPE, MOBILE_LINKS_SVG_SIZE.landscape.md, PADDING_LEFT_HEADER_MOBILE, PADDING_BOTTOM_MOBILE_MD,
                    CHEVRON_MARGIN_TOP_MOBILE, MOBILE_SECTION_TITLE_FONT_SIZE.md, MOBILE_CHEVRON_SIZE.landscape.md, MOBILE_SKILLS_FONT_SIZE.md,
                    PADDING_SKILLS_SIDE, MOBILE_UNIVERSITY_NAME_FONT_SIZE.md, MOBILE_DEGREE_NAME_FONT_SIZE.md, MOBILE_DEGREE_MENTIONS_FONT_SIZE.md,
                    MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE.md, MOBILE_JOB_TITLE_FONT_SIZE.md, MOBILE_JOB_DATE_FONT_SIZE.md,
                    MOBILE_EDUCATION_TITLE_FONT_SIZE.md, MOBILE_EDUCATION_DATE_FONT_SIZE.md, MOBILE_PROJECT_TITLE_FONT_SIZE.md,
                    MOBILE_PROJECT_DESCRIPTION_FONT_SIZE.md, MOBILE_PROJECT_DATE_FONT_SIZE.md,
                    MOBILE_SKILLS_TITLE_FONT_SIZE.md, MOBILE_SKILLS_DATE_FONT_SIZE.md);
            }
        } else if (sm) { // >= 576px
            if (orientationType.startsWith('portrait')) {
                this.populateStyles(true, false, MOBILE_NAME_FONT_SIZE.portrait.sm, MOBILE_TEXT_ALIGN, MOBILE_LINKS_FONT_SIZE.portrait.sm,
                    toPx(PADDING), toPx(PADDING_LG_MD_SM), MOBILE_LINKS_SVG_SIZE.portrait.sm, PADDING_LEFT_HEADER_MOBILE, PADDING_BOTTOM_MOBILE_SM,
                    CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT, MOBILE_SECTION_TITLE_FONT_SIZE.sm, MOBILE_CHEVRON_SIZE.portrait.sm, MOBILE_SKILLS_FONT_SIZE.sm,
                    PADDING_SKILLS_SIDE_SM, MOBILE_UNIVERSITY_NAME_FONT_SIZE.sm, MOBILE_DEGREE_NAME_FONT_SIZE.sm, MOBILE_DEGREE_MENTIONS_FONT_SIZE.sm,
                    MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE.sm, MOBILE_JOB_TITLE_FONT_SIZE.sm, MOBILE_JOB_DATE_FONT_SIZE.sm,
                    MOBILE_EDUCATION_TITLE_FONT_SIZE.sm, MOBILE_EDUCATION_DATE_FONT_SIZE.sm, MOBILE_PROJECT_TITLE_FONT_SIZE.sm,
                    MOBILE_PROJECT_DESCRIPTION_FONT_SIZE.sm, MOBILE_PROJECT_DATE_FONT_SIZE.sm,
                    MOBILE_SKILLS_TITLE_FONT_SIZE.sm, MOBILE_SKILLS_DATE_FONT_SIZE.sm);
            } else {
                this.populateStyles(false, false, MOBILE_NAME_FONT_SIZE.landscape.sm, MOBILE_TEXT_ALIGN, MOBILE_LINKS_FONT_SIZE.landscape.sm,
                    PADDING_SM_XS_LANDSCAPE, PADDING_SM_XS_LANDSCAPE, MOBILE_LINKS_SVG_SIZE.landscape.sm, PADDING_LEFT_HEADER_MOBILE, PADDING_BOTTOM_MOBILE_SM,
                    CHEVRON_MARGIN_TOP_MOBILE_LANDSCAPE_SM, MOBILE_SECTION_TITLE_FONT_SIZE.sm, MOBILE_CHEVRON_SIZE.landscape.sm, MOBILE_SKILLS_FONT_SIZE.sm,
                    PADDING_SKILLS_SIDE_SM, MOBILE_UNIVERSITY_NAME_FONT_SIZE.sm, MOBILE_DEGREE_NAME_FONT_SIZE.sm, MOBILE_DEGREE_MENTIONS_FONT_SIZE.sm,
                    MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE.sm, MOBILE_JOB_TITLE_FONT_SIZE.sm, MOBILE_JOB_DATE_FONT_SIZE.sm,
                    MOBILE_EDUCATION_TITLE_FONT_SIZE.sm, MOBILE_EDUCATION_DATE_FONT_SIZE.sm, MOBILE_PROJECT_TITLE_FONT_SIZE.sm,
                    MOBILE_PROJECT_DESCRIPTION_FONT_SIZE.sm, MOBILE_PROJECT_DATE_FONT_SIZE.sm,
                    MOBILE_SKILLS_TITLE_FONT_SIZE.sm, MOBILE_SKILLS_DATE_FONT_SIZE.sm);
            }
            
        } else if (xs) { // < 576px
            this.linksSvgSpan.verticalAlign = VERTICAL_ALIGN_BASELINE;
            if (orientationType.startsWith('portrait')) {
                this.populateStyles(true, false, MOBILE_NAME_FONT_SIZE.portrait.xs, MOBILE_TEXT_ALIGN, MOBILE_LINKS_FONT_SIZE.portrait.xs,
                    toPx(PADDING_XS), toPx(PADDING_XS), MOBILE_LINKS_SVG_SIZE.portrait.xs, PADDING_LEFT_HEADER_MOBILE, PADDING_BOTTOM_MOBILE_XS,
                    CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT, MOBILE_SECTION_TITLE_FONT_SIZE.xs, MOBILE_CHEVRON_SIZE.portrait.xs, MOBILE_SKILLS_FONT_SIZE.xs,
                    PADDING_SKILLS_SIDE_XS, MOBILE_UNIVERSITY_NAME_FONT_SIZE.xs, MOBILE_DEGREE_NAME_FONT_SIZE.xs, MOBILE_DEGREE_MENTIONS_FONT_SIZE.xs,
                    MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE.xs, MOBILE_JOB_TITLE_FONT_SIZE.xs, MOBILE_JOB_DATE_FONT_SIZE.xs,
                    MOBILE_EDUCATION_TITLE_FONT_SIZE.xs, MOBILE_EDUCATION_DATE_FONT_SIZE.xs, MOBILE_PROJECT_TITLE_FONT_SIZE.xs,
                    MOBILE_PROJECT_DESCRIPTION_FONT_SIZE.xs, MOBILE_PROJECT_DATE_FONT_SIZE.xs,
                    MOBILE_SKILLS_TITLE_FONT_SIZE.xs, MOBILE_SKILLS_DATE_FONT_SIZE.xs);
            } else {
                this.populateStyles(false, false, MOBILE_NAME_FONT_SIZE.landscape.xs, MOBILE_TEXT_ALIGN, MOBILE_LINKS_FONT_SIZE.landscape.xs,
                    PADDING_SM_XS_LANDSCAPE, PADDING_SM_XS_LANDSCAPE, MOBILE_LINKS_SVG_SIZE.landscape.xs, PADDING_LEFT_HEADER_MOBILE, PADDING_BOTTOM_MOBILE_XS,
                    CHEVRON_MARGIN_TOP_MOBILE_LANDSCAPE_XS, MOBILE_SECTION_TITLE_FONT_SIZE.xs, MOBILE_CHEVRON_SIZE.landscape.xs, MOBILE_SKILLS_FONT_SIZE.xs,
                    PADDING_SKILLS_SIDE_XS, MOBILE_UNIVERSITY_NAME_FONT_SIZE.xs, MOBILE_DEGREE_NAME_FONT_SIZE.xs, MOBILE_DEGREE_MENTIONS_FONT_SIZE.xs,
                    MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE.xs, MOBILE_JOB_TITLE_FONT_SIZE.xs, MOBILE_JOB_DATE_FONT_SIZE.xs,
                    MOBILE_EDUCATION_TITLE_FONT_SIZE.xs, MOBILE_EDUCATION_DATE_FONT_SIZE.xs, MOBILE_PROJECT_TITLE_FONT_SIZE.xs,
                    MOBILE_PROJECT_DESCRIPTION_FONT_SIZE.xs, MOBILE_PROJECT_DATE_FONT_SIZE.xs,
                    MOBILE_SKILLS_TITLE_FONT_SIZE.xs, MOBILE_SKILLS_DATE_FONT_SIZE.xs);
            }
        }
    }
}

export default ResponsiveStyles;
