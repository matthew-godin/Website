import * as sizingConstants from "./constants/Sizing";
import * as stylesConstants from "./constants/Styles";
import * as stringsUtils from "./util/Strings";
import * as stylesUtils from "./util/Styles";

class ResponsiveStyles {
    populateStyles(desktop, orientation, size, padding, chevronMargin) {
            this.portrait = orientation === 'portrait';
            this.headerContainer = stylesUtils.getHeaderContainerStyle(padding.paddingLeft);
            this.headerContainerContainer = stylesUtils.getHeaderContainerContainerStyle(padding.paddingBottom);
            this.headerChevronMarginTop = chevronMargin;
            this.skillsSidePadding = padding.skillsSidePadding;
            if (desktop) {
                this.name = stylesUtils.getNameStyle(sizingConstants.MARGIN_BOTTOM,
                    sizingConstants.DESKTOP_NAME_FONT_SIZE, stylesConstants.DESKTOP_TEXT_ALIGN);
                this.linksParagraph = stylesUtils.getLinksParagraphStyle(sizingConstants.DESKTOP_LINKS_FONT_SIZE);
                this.linksSection = stylesConstants.NO_TEXT_DECORATION;
                this.linksSvgSection = stylesConstants.NO_STYLE;
                this.linksSvgSize = sizingConstants.DESKTOP_LINKS_SVG_SIZE.toString();
                this.sectionTitle = stylesUtils.getSectionTitleStyle(true, padding.paddingLeft, sizingConstants.PADDING_TOP,
                    sizingConstants.DESKTOP_SECTION_TITLE_FONT_SIZE, stylesConstants.DESKTOP_TEXT_ALIGN);
                this.chevronSize = stringsUtils.toPx(sizingConstants.DESKTOP_CHEVRON_SIZE);
                this.skills = stylesUtils.getSkillsStyle(sizingConstants.DESKTOP_SKILLS_FONT_SIZE);
                this.universityName = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_UNIVERSITY_NAME_FONT_SIZE);
                this.degreeName = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_DEGREE_NAME_FONT_SIZE);
                this.degreeMentions = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_DEGREE_MENTIONS_FONT_SIZE);
                this.relevantCoursesTitle = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_RELEVANT_COURSES_TITLE_FONT_SIZE);
                this.linksFirstDot = stylesUtils.getLinksFirstDotStyle(sizingConstants.DESKTOP_LINKS_FONT_SIZE, sizingConstants.MARGIN_LEFT_AND_RIGHT);
                this.linksSubsequentDots = stylesUtils.getLinksSubsequentDotsStyle(sizingConstants.DESKTOP_LINKS_FONT_SIZE, sizingConstants.MARGIN_LEFT_AND_RIGHT);
                this.sectionsMobileSite = stylesConstants.DISPLAY_BLOCK;
                this.displayMobileSite = stylesConstants.DISPLAY_NONE;
                this.skillsTitle = stylesUtils.getSkillsTitleStyle(sizingConstants.DESKTOP_SKILLS_TITLE_FONT_SIZE, sizingConstants.PADDING_LEFT_SKILLS);
                this.skillsRow = stylesUtils.getSkillsRowStyle(sizingConstants.PADDING_LEFT_SKILLS_ROW, sizingConstants.PADDING_RIGHT);
                this.skillsVh = stringsUtils.toVh(sizingConstants.DESKTOP_SKILLS_HEIGHT);
                this.relevantCourses = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_RELEVANT_COURSES_FONT_SIZE);
            } else {
                this.name = stylesUtils.getNameStyle(sizingConstants.MARGIN_BOTTOM,
                    sizingConstants.MOBILE_NAME_FONT_SIZE[orientation][size], stylesConstants.MOBILE_TEXT_ALIGN);
                this.linksParagraph = stylesUtils.getLinksParagraphStyle(sizingConstants.MOBILE_LINKS_FONT_SIZE[orientation][size]);
                this.linksSection = stylesUtils.getLinksSectionStyle(padding.linksSectionPadding);
                this.linksSvgSection = stylesUtils.getLinksSvgSectionStyle(padding.linksSvgSectionPadding);
                this.linksSvgSize = sizingConstants.MOBILE_LINKS_SVG_SIZE[orientation][size].toString();
                this.sectionTitle = stylesUtils.getSectionTitleStyle(true, padding.paddingLeft, sizingConstants.PADDING_TOP,
                    sizingConstants.MOBILE_SECTION_TITLE_FONT_SIZE[size], stylesConstants.DESKTOP_TEXT_ALIGN);
                this.chevronSize = stringsUtils.toPx(sizingConstants.MOBILE_CHEVRON_SIZE[orientation][size]);
                this.skills = stylesUtils.getSkillsStyle(sizingConstants.MOBILE_SKILLS_FONT_SIZE[size]);
                this.universityName = stylesUtils.getTitleStyle(sizingConstants.MOBILE_UNIVERSITY_NAME_FONT_SIZE[size]);
                this.degreeName = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_DEGREE_NAME_FONT_SIZE[size]);
                this.degreeMentions = stylesUtils.getTitleStyle(sizingConstants.MOBILE_DEGREE_MENTIONS_FONT_SIZE[size]);
                this.relevantCoursesTitle = stylesUtils.getTitleStyle(sizingConstants.MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE[size]);
                this.skillsTitle = this.sectionTitle;
                this.jobTitleMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_JOB_TITLE_FONT_SIZE[size]);
                this.jobDateMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_JOB_DATE_FONT_SIZE[size]);
                this.educationTitleMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_EDUCATION_TITLE_FONT_SIZE[size]);
                this.educationDateMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_EDUCATION_DATE_FONT_SIZE[size]);
                this.projectTitleMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_PROJECT_TITLE_FONT_SIZE[size]);
                this.projectDescriptionMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_PROJECT_DESCRIPTION_FONT_SIZE[size]);
                this.projectDateMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_PROJECT_DATE_FONT_SIZE[size]);
                this.skillsTitleMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_SKILLS_TITLE_FONT_SIZE[size]);
                this.skillsDateMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_SKILLS_DATE_FONT_SIZE[size]);
            }
    }

    createPadding(linksSectionPadding, linksSvgSectionPadding, paddingLeft, paddingBottom, skillsSidePadding) {
        return { linksSectionPadding: linksSectionPadding, linksSvgSectionPadding: linksSvgSectionPadding,
            paddingLeft: paddingLeft, paddingBottom: paddingBottom, skillsSidePadding: skillsSidePadding };
    }

    constructor(xs, sm, md, lg, xl, xxl, orientationType) {
        this.links = stylesConstants.LINKS_STYLE;
        this.linksSvgSpan = stylesUtils.getSvgSpanStyle(stylesConstants.VERTICAL_ALIGN_BOTTOM, sizingConstants.MARGIN_LEFT_AND_RIGHT);
        this.linksFirstDot = stylesConstants.NO_DISPLAY;
        this.linksSubsequentDots = stylesConstants.NO_DISPLAY;
        this.sectionsMobileSite = stylesConstants.DISPLAY_NONE;
        this.displayMobileSite = stylesConstants.DISPLAY_BLOCK;
        this.skillsRow = stylesUtils.getSkillsRowStyle(sizingConstants.PADDING_LEFT_MOBILE, sizingConstants.PADDING_RIGHT);
        this.skillsVh = stringsUtils.toVh(sizingConstants.MOBILE_SKILLS_HEIGHT);
        if (xxl) { // >= 1600px, Desktop site
            let padding = this.createPadding(undefined, undefined, sizingConstants.PADDING_LEFT, sizingConstants.PADDING_BOTTOM, sizingConstants.PADDING_SKILLS_SIDE);
            this.populateStyles(true, 'portrait', 'xxl', padding, sizingConstants.CHEVRON_MARGIN_TOP);
        } else if (xl) { // >= 1200px, Mobile site
            if (orientationType.startsWith('portrait')) {
                let padding = this.createPadding(stringsUtils.toPx(sizingConstants.PADDING), stringsUtils.toPx(sizingConstants.PADDING),
                sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE, sizingConstants.PADDING_SKILLS_SIDE);
                this.populateStyles(false, 'portrait', 'xl', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE);
            } else {
                let padding = this.createPadding(sizingConstants.PADDING_LANDSCAPE, sizingConstants.PADDING_LANDSCAPE,
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE, sizingConstants.PADDING_SKILLS_SIDE);
                this.populateStyles(false, 'landscape', 'xl', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE);
            }
        } else if (lg) { // >= 992px
            if (orientationType.startsWith('portrait')) {
                let padding = this.createPadding(stringsUtils.toPx(sizingConstants.PADDING), stringsUtils.toPx(sizingConstants.PADDING_LG_MD_SM),
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_LG, sizingConstants.PADDING_SKILLS_SIDE);
                this.populateStyles(false, 'portrait', 'lg', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT);
            } else {
                let padding = this.createPadding(sizingConstants.PADDING_LANDSCAPE, sizingConstants.PADDING_LANDSCAPE,
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_LG, sizingConstants.PADDING_SKILLS_SIDE);
                this.populateStyles(false, 'landscape', 'lg', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE);
            }
            
        } else if (md) { // >= 768px
            if (orientationType.startsWith('portrait')) {
                let padding = this.createPadding(stringsUtils.toPx(sizingConstants.PADDING), stringsUtils.toPx(sizingConstants.PADDING_LG_MD_SM),
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_MD, sizingConstants.PADDING_SKILLS_SIDE);
                this.populateStyles(false, 'portrait', 'md', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT);
            } else {
                let padding = this.createPadding(sizingConstants.PADDING_LANDSCAPE, sizingConstants.PADDING_LANDSCAPE,
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_MD, sizingConstants.PADDING_SKILLS_SIDE);
                this.populateStyles(false, 'landscape', 'md', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE);
            }
        } else if (sm) { // >= 576px
            if (orientationType.startsWith('portrait')) {
                let padding = this.createPadding(stringsUtils.toPx(sizingConstants.PADDING), stringsUtils.toPx(sizingConstants.PADDING_LG_MD_SM),
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_SM, sizingConstants.PADDING_SKILLS_SIDE_SM);
                this.populateStyles(false, 'portrait', 'sm', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT);
            } else {
                let padding = this.createPadding(sizingConstants.PADDING_SM_XS_LANDSCAPE, sizingConstants.PADDING_SM_XS_LANDSCAPE,
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_SM, sizingConstants.PADDING_SKILLS_SIDE_SM);
                this.populateStyles(false, 'landscape', 'sm', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_LANDSCAPE_SM);
            }
            
        } else if (xs) { // < 576px
            this.linksSvgSpan.verticalAlign = stylesConstants.VERTICAL_ALIGN_BASELINE;
            if (orientationType.startsWith('portrait')) {
                let padding = this.createPadding(stringsUtils.toPx(sizingConstants.PADDING_XS), stringsUtils.toPx(sizingConstants.PADDING_XS),
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_XS, sizingConstants.PADDING_SKILLS_SIDE_XS);
                this.populateStyles(false, 'portrait', 'xs', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT);
            } else {
                let padding = this.createPadding(sizingConstants.PADDING_SM_XS_LANDSCAPE, sizingConstants.PADDING_SM_XS_LANDSCAPE,
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_XS, sizingConstants.PADDING_SKILLS_SIDE_XS);
                this.populateStyles(false, 'landscape', 'xs', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_LANDSCAPE_XS);
            }
        }
    }
}

export default ResponsiveStyles;
