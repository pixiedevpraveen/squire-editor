import { TreeIterator } from './TreeIterator';
export declare const getBlockWalker: (node: Node, root: Element | DocumentFragment) => TreeIterator<HTMLElement>;
export declare const getPreviousBlock: (node: Node, root: Element | DocumentFragment) => HTMLElement | null;
export declare const getNextBlock: (node: Node, root: Element | DocumentFragment) => HTMLElement | null;
export declare const isEmptyBlock: (block: Element) => boolean;
//# sourceMappingURL=Block.d.ts.map