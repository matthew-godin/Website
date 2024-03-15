import { POSITION_RELATIVE, WIDTH, TEXT_ALIGN, FONT_WEIGHT, COLOR, DISPLAY, FONT_WEIGHT_DESCRIPTION } from "../constants/Styles";
import { toVh, toPx } from "./Strings";

export function getDivStyle(size, responsiveStyles) {
    return {
        minHeight: toVh(size),
        maxHeight: toVh(size),
        position: POSITION_RELATIVE,
        width: WIDTH,
        display: responsiveStyles.sectionsMobileSite
    };
};

export function getDatesWeightStyle(size, fontWeight) {
    return {
        textAlign: TEXT_ALIGN,
        fontSize: toPx(size),
        fontWeight: fontWeight
    };
};

export function getTitleWeightStyle(size) {
    return {
        fontSize: toPx(size),
        fontWeight: FONT_WEIGHT
    };
};

export function getDescriptionStyle(size, fontWeight) {
    return {
        fontSize: toPx(size),
        fontWeight: fontWeight,
        color: COLOR,
        display: DISPLAY
    };
};
