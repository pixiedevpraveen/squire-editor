import { TreeIterator } from '../node/TreeIterator';
export declare function createRange(startContainer: Node, startOffset: number): Range;
export declare function createRange(startContainer: Node, startOffset: number, endContainer: Node, endOffset: number): Range;
export declare const insertNodeInRange: (range: Range, node: Node) => void;
/**
 * Removes the contents of the range and returns it as a DocumentFragment.
 * The range at the end will be at the same position, with the edges just
 * before/after the split. If the start/end have the same parents, it will
 * be collapsed.
 */
export declare const extractContentsOfRange: (range: Range, common: Node | null, root: Element) => DocumentFragment;
/**
 * Returns the next/prev node that's part of the same inline content.
 */
export declare const getAdjacentInlineNode: (iterator: TreeIterator<Node>, method: "nextNode" | "previousPONode", node: Node) => Node | null;
export declare const deleteContentsOfRange: (range: Range, root: Element) => DocumentFragment;
export declare const insertTreeFragmentIntoRange: (range: Range, frag: DocumentFragment, root: Element) => void;
//# sourceMappingURL=InsertDelete.d.ts.map