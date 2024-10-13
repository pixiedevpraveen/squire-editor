export declare const DOCUMENT_POSITION_PRECEDING = 2;
export declare const ELEMENT_NODE = 1;
export declare const TEXT_NODE = 3;
export declare const DOCUMENT_NODE = 9;
export declare const DOCUMENT_FRAGMENT_NODE = 11;
export declare const ZWS = "\u200B";
export declare const notWS: RegExp;
export declare function getClientConstants(): {
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
//# sourceMappingURL=Constants.d.ts.map