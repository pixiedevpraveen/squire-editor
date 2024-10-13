type NODE_TYPE = 1 | 4 | 5;
export declare const SHOW_ELEMENT = 1;
export declare const SHOW_TEXT = 4;
export declare const SHOW_ELEMENT_OR_TEXT = 5;
export declare class TreeIterator<T extends Node> {
    root: Node;
    currentNode: Node;
    nodeType: NODE_TYPE;
    filter: (n: T) => boolean;
    constructor(root: Node, nodeType: NODE_TYPE, filter?: (n: T) => boolean);
    isAcceptableNode(node: Node): boolean;
    nextNode(): T | null;
    previousNode(): T | null;
    previousPONode(): T | null;
}
export {};
//# sourceMappingURL=TreeIterator.d.ts.map