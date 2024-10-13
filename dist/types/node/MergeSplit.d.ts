export declare const fixCursor: (node: Node) => Node;
export declare const fixContainer: (container: Node, root: Element | DocumentFragment) => Node;
export declare const split: (node: Node, offset: number | Node | null, stopNode: Node, root: Element | DocumentFragment) => Node | null;
export declare const mergeInlines: (node: Node, range: Range) => void;
export declare const mergeWithBlock: (block: Node, next: Node, range: Range, root: Element) => void;
export declare const mergeContainers: (node: Node, root: Element) => void;
//# sourceMappingURL=MergeSplit.d.ts.map