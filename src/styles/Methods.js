import * as sizingConstants from "../constants/Sizing";
import * as stylesConstants from "../constants/Styles";
import * as stringsUtils from "../util/Strings";
import * as stylesUtils from "../util/Styles";

const populateDesktopStyles = (that, padding) => {
    that.name = stylesUtils.getNameStyle(sizingConstants.MARGIN_BOTTOM,
        sizingConstants.DESKTOP_NAME_FONT_SIZE, stylesConstants.DESKTOP_TEXT_ALIGN);
    that.linksParagraph = stylesUtils.getLinksParagraphStyle(sizingConstants.DESKTOP_LINKS_FONT_SIZE);
    that.linksSection = stylesConstants.NO_TEXT_DECORATION;
    that.linksSvgSection = stylesConstants.NO_STYLE;
    that.linksSvgSize = sizingConstants.DESKTOP_LINKS_SVG_SIZE.toString();
    that.sectionTitle = stylesUtils.getSectionTitleStyle(true, padding.paddingLeft, sizingConstants.PADDING_TOP,
        sizingConstants.DESKTOP_SECTION_TITLE_FONT_SIZE, stylesConstants.DESKTOP_TEXT_ALIGN);
    that.chevronSize = stringsUtils.toPx(sizingConstants.DESKTOP_CHEVRON_SIZE);
    that.skills = stylesUtils.getSkillsStyle(sizingConstants.DESKTOP_SKILLS_FONT_SIZE);
    that.universityName = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_UNIVERSITY_NAME_FONT_SIZE);
    that.degreeName = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_DEGREE_NAME_FONT_SIZE);
    that.degreeMentions = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_DEGREE_MENTIONS_FONT_SIZE);
    that.relevantCoursesTitle = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_RELEVANT_COURSES_TITLE_FONT_SIZE);
    that.linksFirstDot = stylesUtils.getLinksFirstDotStyle(sizingConstants.DESKTOP_LINKS_FONT_SIZE, sizingConstants.MARGIN_LEFT_AND_RIGHT);
    that.linksSubsequentDots = stylesUtils.getLinksSubsequentDotsStyle(sizingConstants.DESKTOP_LINKS_FONT_SIZE, sizingConstants.MARGIN_LEFT_AND_RIGHT);
    that.sectionsMobileSite = stylesConstants.DISPLAY_BLOCK;
    that.displayMobileSite = stylesConstants.DISPLAY_NONE;
    that.skillsTitle = stylesUtils.getSkillsTitleStyle(sizingConstants.DESKTOP_SKILLS_TITLE_FONT_SIZE, sizingConstants.PADDING_LEFT_SKILLS);
    that.skillsRow = stylesUtils.getSkillsRowStyle(sizingConstants.PADDING_LEFT_SKILLS_ROW, sizingConstants.PADDING_RIGHT);
    that.skillsVh = stringsUtils.toVh(sizingConstants.DESKTOP_SKILLS_HEIGHT);
    that.relevantCourses = stylesUtils.getTitleStyle(sizingConstants.DESKTOP_RELEVANT_COURSES_FONT_SIZE);
};

const populateMobileStyles = (that, orientation, size, padding) => {
    that.name = stylesUtils.getNameStyle(sizingConstants.MARGIN_BOTTOM,
        sizingConstants.MOBILE_NAME_FONT_SIZE[orientation][size], stylesConstants.MOBILE_TEXT_ALIGN);
    that.linksParagraph = stylesUtils.getLinksParagraphStyle(sizingConstants.MOBILE_LINKS_FONT_SIZE[orientation][size]);
    that.linksSection = stylesUtils.getLinksSectionStyle(padding.linksSectionPadding);
    that.linksSvgSection = stylesUtils.getLinksSvgSectionStyle(padding.linksSvgSectionPadding);
    that.linksSvgSize = sizingConstants.MOBILE_LINKS_SVG_SIZE[orientation][size].toString();
    that.sectionTitle = stylesUtils.getSectionTitleStyle(false, padding.paddingLeft, sizingConstants.PADDING_TOP,
        sizingConstants.MOBILE_SECTION_TITLE_FONT_SIZE[size], stylesConstants.MOBILE_TEXT_ALIGN);
    that.chevronSize = stringsUtils.toPx(sizingConstants.MOBILE_CHEVRON_SIZE[orientation][size]);
    that.skills = stylesUtils.getSkillsStyle(sizingConstants.MOBILE_SKILLS_FONT_SIZE[size]);
    that.universityName = stylesUtils.getTitleStyle(sizingConstants.MOBILE_UNIVERSITY_NAME_FONT_SIZE[size]);
    that.degreeName = stylesUtils.getTitleStyle(sizingConstants.MOBILE_DEGREE_NAME_FONT_SIZE[size]);
    that.degreeMentions = stylesUtils.getTitleStyle(sizingConstants.MOBILE_DEGREE_MENTIONS_FONT_SIZE[size]);
    that.relevantCoursesTitle = stylesUtils.getTitleStyle(sizingConstants.MOBILE_RELEVANT_COURSES_TITLE_FONT_SIZE[size]);
    that.skillsTitle = that.sectionTitle;
    that.jobTitleMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_JOB_TITLE_FONT_SIZE[size]);
    that.jobDateMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_JOB_DATE_FONT_SIZE[size]);
    that.educationTitleMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_EDUCATION_TITLE_FONT_SIZE[size]);
    that.educationDateMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_EDUCATION_DATE_FONT_SIZE[size]);
    that.projectTitleMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_PROJECT_TITLE_FONT_SIZE[size]);
    that.projectDescriptionMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_PROJECT_DESCRIPTION_FONT_SIZE[size]);
    that.projectDateMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_PROJECT_DATE_FONT_SIZE[size]);
    that.skillsTitleMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_SKILLS_TITLE_FONT_SIZE[size]);
    that.skillsDateMobile = stylesUtils.getTitleStyle(sizingConstants.MOBILE_SKILLS_DATE_FONT_SIZE[size]);
};

export const populateStyles = (that, desktop, orientation, size, padding, chevronMargin) => {
    that.portrait = orientation === 'portrait';
    that.headerContainer = stylesUtils.getHeaderContainerStyle(padding.paddingLeft);
    that.headerContainerContainer = stylesUtils.getHeaderContainerContainerStyle(padding.paddingBottom);
    that.headerChevronMarginTop = chevronMargin;
    that.skillsSidePadding = padding.skillsSidePadding;
    if (desktop) {
        populateDesktopStyles(that, padding);
    } else {
        populateMobileStyles(that, orientation, size, padding);
    }
}

export const createPadding = (linksSectionPadding, linksSvgSectionPadding, paddingLeft, paddingBottom, skillsSidePadding) => {
    return { linksSectionPadding: linksSectionPadding, linksSvgSectionPadding: linksSvgSectionPadding,
        paddingLeft: paddingLeft, paddingBottom: paddingBottom, skillsSidePadding: skillsSidePadding };
};
