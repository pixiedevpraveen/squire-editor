import type { Squire } from './Editor';
export declare const extractRangeToClipboard: (event: ClipboardEvent, range: Range, root: HTMLElement, removeRangeFromDocument: boolean, toCleanHTML: null | ((html: string) => string), toPlainText: null | ((html: string) => string), plainTextOnly: boolean) => boolean;
export declare const _onCut: (this: Squire, event: ClipboardEvent) => void;
export declare const _onCopy: (this: Squire, event: ClipboardEvent) => void;
export declare const _monitorShiftKey: (this: Squire, event: KeyboardEvent) => void;
export declare const _onPaste: (this: Squire, event: ClipboardEvent) => void;
export declare const _onDrop: (this: Squire, event: DragEvent) => void;
//# sourceMappingURL=Clipboard.d.ts.map