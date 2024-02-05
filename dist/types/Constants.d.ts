declare const DOCUMENT_POSITION_PRECEDING = 2;
declare const ELEMENT_NODE = 1;
declare const TEXT_NODE = 3;
declare const DOCUMENT_NODE = 9;
declare const DOCUMENT_FRAGMENT_NODE = 11;
declare const ZWS = "\u200B";
declare const notWS: RegExp;
declare function getConstants(): {
    init: boolean;
    ua: string;
    isMac: boolean;
    isWin: boolean;
    isIOS: boolean;
    isAndroid: boolean;
    isGecko: boolean;
    isLegacyEdge: boolean;
    isWebKit: boolean;
    ctrlKey: "Meta-" | "Ctrl-";
    cantFocusEmptyTextNodes: boolean;
    supportsInputEvents: boolean;
};
export { DOCUMENT_POSITION_PRECEDING, ELEMENT_NODE, TEXT_NODE, DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE, notWS, ZWS, getConstants };
//# sourceMappingURL=Constants.d.ts.map