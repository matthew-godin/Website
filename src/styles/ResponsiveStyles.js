import * as sizingConstants from "../constants/Sizing";
import * as stylesConstants from "../constants/Styles";
import * as stringsUtils from "../util/Strings";
import * as stylesUtils from "../util/Styles";
import { populateStyles, createPadding } from "./Methods";

class ResponsiveStyles {
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
            let padding = createPadding(undefined, undefined, sizingConstants.PADDING_LEFT, sizingConstants.PADDING_BOTTOM, sizingConstants.PADDING_SKILLS_SIDE);
            populateStyles(this, true, 'portrait', 'xxl', padding, sizingConstants.CHEVRON_MARGIN_TOP);
        } else if (xl) { // >= 1200px, Mobile site
            if (orientationType.startsWith('portrait')) {
                let padding = createPadding(stringsUtils.toPx(sizingConstants.PADDING), stringsUtils.toPx(sizingConstants.PADDING),
                sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE, sizingConstants.PADDING_SKILLS_SIDE);
                populateStyles(this, false, 'portrait', 'xl', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE);
            } else {
                let padding = createPadding(sizingConstants.PADDING_LANDSCAPE, sizingConstants.PADDING_LANDSCAPE,
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE, sizingConstants.PADDING_SKILLS_SIDE);
                populateStyles(this, false, 'landscape', 'xl', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE);
            }
        } else if (lg) { // >= 992px
            if (orientationType.startsWith('portrait')) {
                let padding = createPadding(stringsUtils.toPx(sizingConstants.PADDING), stringsUtils.toPx(sizingConstants.PADDING_LG_MD_SM),
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_LG, sizingConstants.PADDING_SKILLS_SIDE);
                populateStyles(this, false, 'portrait', 'lg', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT);
            } else {
                let padding = createPadding(sizingConstants.PADDING_LANDSCAPE, sizingConstants.PADDING_LANDSCAPE,
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_LG, sizingConstants.PADDING_SKILLS_SIDE);
                populateStyles(this, false, 'landscape', 'lg', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE);
            }
            
        } else if (md) { // >= 768px
            if (orientationType.startsWith('portrait')) {
                let padding = createPadding(stringsUtils.toPx(sizingConstants.PADDING), stringsUtils.toPx(sizingConstants.PADDING_LG_MD_SM),
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_MD, sizingConstants.PADDING_SKILLS_SIDE);
                populateStyles(this, false, 'portrait', 'md', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT);
            } else {
                let padding = createPadding(sizingConstants.PADDING_LANDSCAPE, sizingConstants.PADDING_LANDSCAPE,
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_MD, sizingConstants.PADDING_SKILLS_SIDE);
                populateStyles(this, false, 'landscape', 'md', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE);
            }
        } else if (sm) { // >= 576px
            if (orientationType.startsWith('portrait')) {
                let padding = createPadding(stringsUtils.toPx(sizingConstants.PADDING), stringsUtils.toPx(sizingConstants.PADDING_LG_MD_SM),
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_SM, sizingConstants.PADDING_SKILLS_SIDE_SM);
                populateStyles(this, false, 'portrait', 'sm', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT);
            } else {
                let padding = createPadding(sizingConstants.PADDING_SM_XS_LANDSCAPE, sizingConstants.PADDING_SM_XS_LANDSCAPE,
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_SM, sizingConstants.PADDING_SKILLS_SIDE_SM);
                populateStyles(this, false, 'landscape', 'sm', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_LANDSCAPE_SM);
            }
            
        } else if (xs) { // < 576px
            if (orientationType.startsWith('portrait')) {
                let padding = createPadding(stringsUtils.toPx(sizingConstants.PADDING_XS), stringsUtils.toPx(sizingConstants.PADDING_XS),
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_XS, sizingConstants.PADDING_SKILLS_SIDE_XS);
                populateStyles(this, false, 'portrait', 'xs', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_PORTRAIT);
            } else {
                let padding = createPadding(sizingConstants.PADDING_SM_XS_LANDSCAPE, sizingConstants.PADDING_SM_XS_LANDSCAPE,
                    sizingConstants.PADDING_LEFT_HEADER_MOBILE, sizingConstants.PADDING_BOTTOM_MOBILE_XS, sizingConstants.PADDING_SKILLS_SIDE_XS);
                populateStyles(this, false, 'landscape', 'xs', padding, sizingConstants.CHEVRON_MARGIN_TOP_MOBILE_LANDSCAPE_XS);
            }
            this.linksSvgSpan.verticalAlign = stylesConstants.VERTICAL_ALIGN_BASELINE;
            this.linksParagraph.verticalAlign = stylesConstants.VERTICAL_ALIGN_TOP;
        }
    }
}

export default ResponsiveStyles;
