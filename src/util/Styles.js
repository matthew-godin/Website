import { POSITION_RELATIVE, WIDTH, TEXT_ALIGN, FONT_WEIGHT, COLOR, DISPLAY, FONT_WEIGHT_DESCRIPTION, MARGIN_TOP, COLOR_HEADER,
    NO_PADDING, NO_MARGIN, TEXT_DECORATION, DISPLAY_BLOCK, TEXT_ALIGN_CENTER, MARGIN_BOTTOM, POSITION, BOTTOM } from "../constants/Styles";
import { toVh, toPx } from "./Strings";

export function getDivStyle(size, display) {
    return { minHeight: toVh(size), maxHeight: toVh(size), position: POSITION_RELATIVE, width: WIDTH, display: display };
};

export function getDatesWeightStyle(size, fontWeight) {
    return { textAlign: TEXT_ALIGN, fontSize: toPx(size), fontWeight: fontWeight };
};

export function getTitleWeightStyle(size) {
    return { fontSize: toPx(size), fontWeight: FONT_WEIGHT };
};

export function getDescriptionStyle(size, fontWeight) {
    return { fontSize: toPx(size), fontWeight: fontWeight, color: COLOR, display: DISPLAY };
};

export function getNameStyle(marginBottom, fontSize, textAlign) {
    return { marginTop: MARGIN_TOP, marginBottom: toPx(marginBottom), color: COLOR_HEADER, fontWeight: FONT_WEIGHT_DESCRIPTION,
        fontSize: toPx(fontSize), textAlign: textAlign };
};

export function getLinksParagraphStyle(fontSize) {
    return { fontSize: toPx(fontSize), display: DISPLAY, padding: NO_PADDING, margin: NO_MARGIN, color: COLOR_HEADER, fontWeight: FONT_WEIGHT };
};

export function getSvgSpanStyle(verticalAlign, margin) {
    return { verticalAlign: verticalAlign, display: DISPLAY, padding: NO_PADDING, margin: NO_MARGIN, marginRight: toPx(margin), marginLeft: toPx(margin) };
};

export function getLinksFirstDotStyle(fontSize, margin) {
    return { fontSize: toPx(fontSize), display: DISPLAY, padding: NO_PADDING, margin: NO_MARGIN, color: COLOR_HEADER, fontWeight: FONT_WEIGHT,
        marginLeft: toPx(margin), marginRight: toPx(margin) };
};

export function getLinksSubsequentDotsStyle(fontSize, margin) {
    return { fontSize: toPx(fontSize), display: DISPLAY, padding: NO_PADDING, margin: NO_MARGIN, color: COLOR_HEADER, fontWeight: FONT_WEIGHT,
        marginLeft: toPx(margin) };
};

export function getLinksSectionStyle(padding) {
    return { textDecoration: TEXT_DECORATION, display: DISPLAY_BLOCK, textAlign: TEXT_ALIGN_CENTER, padding: padding };
};

export function getLinksSvgSectionStyle(padding) {
    return { display: DISPLAY_BLOCK, textAlign: TEXT_ALIGN_CENTER, padding: padding };
};

export function getHeaderContainerStyle(padding) {
    return { paddingLeft: padding };
};

export function getHeaderContainerContainerStyle(padding) {
    return { paddingBottom: padding, marginTop: MARGIN_TOP, marginBottom: MARGIN_BOTTOM, width: WIDTH, position: POSITION, bottom: BOTTOM};
};

export function getSectionTitleStyle(desktop, paddingLeft, paddingTop, fontSize, textAlign) {
    if (desktop) {
        return { paddingLeft: paddingLeft, margin: NO_MARGIN, paddingTop: paddingTop, fontWeight: FONT_WEIGHT, color: COLOR, fontSize: toPx(fontSize) };
    }
    return { margin: NO_MARGIN, fontSize: toPx(fontSize), fontWeight: FONT_WEIGHT, color: COLOR, textAlign: textAlign};
};

export function getSkillsStyle(fontSize) {
    return { textAlign: TEXT_ALIGN_CENTER, fontSize: toPx(fontSize), fontWeight: FONT_WEIGHT, color: COLOR };
};

export function getSkillsTitleStyle(fontSize, padding) {
    return { margin: NO_MARGIN, fontSize: toPx(fontSize), paddingLeft: padding, fontWeight: FONT_WEIGHT, color: COLOR };
};

export function getSkillsRowStyle(paddingLeft, paddingRight) {
    return { paddingLeft: paddingLeft, paddingRight: paddingRight, color: COLOR };
};

export function getTitleStyle(fontSize) {
    return { textAlign: TEXT_ALIGN_CENTER, fontWeight: FONT_WEIGHT, fontSize: toPx(fontSize), color: COLOR};
};
