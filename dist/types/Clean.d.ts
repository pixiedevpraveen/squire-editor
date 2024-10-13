import { isLineBreak } from './node/Whitespace';
import type { SquireConfig } from './Editor';
export declare const cleanTree: (node: Node, config: SquireConfig, preserveWS?: boolean) => Node;
export declare const removeEmptyInlines: (node: Node) => void;
export declare const cleanupBRs: (node: Element | DocumentFragment, root: Element, keepForBlankLine: boolean) => void;
export declare const escapeHTML: (text: string) => string;
export { isLineBreak };
//# sourceMappingURL=Clean.d.ts.map