const DOCUMENT_POSITION_PRECEDING = 2; // Node.DOCUMENT_POSITION_PRECEDING
const ELEMENT_NODE = 1; // Node.ELEMENT_NODE;
const TEXT_NODE = 3; // Node.TEXT_NODE;
const DOCUMENT_NODE = 9; // Node.DOCUMENT_NODE;
const DOCUMENT_FRAGMENT_NODE = 11; // Node.DOCUMENT_FRAGMENT_NODE;

const ZWS = '\u200B';

// Use [^ \t\r\n] instead of \S so that nbsp does not count as white-space
const notWS = /[^ \t\r\n]/;


const CONSTANTS = {} as {
    init: boolean
    ua: string
    isMac: boolean
    isWin: boolean
    isIOS: boolean
    isAndroid: boolean
    isGecko: boolean
    isLegacyEdge: boolean
    isWebKit: boolean
    ctrlKey: "Meta-" | "Ctrl-"
    cantFocusEmptyTextNodes: boolean
    supportsInputEvents: boolean
}

function getConstants() {
    if (!CONSTANTS.init) {

        CONSTANTS.ua = navigator.userAgent;
        CONSTANTS.isMac = /Mac OS X/.test(CONSTANTS.ua);
        CONSTANTS.isIOS =
            /iP(?:ad|hone|od)/.test(CONSTANTS.ua) || (CONSTANTS.isMac && !!navigator.maxTouchPoints);
        CONSTANTS.isLegacyEdge = /Edge\//.test(CONSTANTS.ua);
        CONSTANTS.isWebKit = !CONSTANTS.isLegacyEdge && /WebKit\//.test(CONSTANTS.ua);
        CONSTANTS.isWin = /Windows NT/.test(CONSTANTS.ua);
        CONSTANTS.isAndroid = /Android/.test(CONSTANTS.ua);
        CONSTANTS.isGecko = /Gecko\//.test(CONSTANTS.ua);
        CONSTANTS.ctrlKey = CONSTANTS.isMac || CONSTANTS.isIOS ? 'Meta-' : 'Ctrl-';
        CONSTANTS.cantFocusEmptyTextNodes = CONSTANTS.isWebKit;
        CONSTANTS.supportsInputEvents =
            'onbeforeinput' in document && 'inputType' in new InputEvent('input');
        CONSTANTS.init = true
    }

    return CONSTANTS
}

// ---

export {
    DOCUMENT_POSITION_PRECEDING,
    ELEMENT_NODE,
    TEXT_NODE,
    DOCUMENT_NODE,
    DOCUMENT_FRAGMENT_NODE,
    notWS,
    ZWS,
    getConstants
};
