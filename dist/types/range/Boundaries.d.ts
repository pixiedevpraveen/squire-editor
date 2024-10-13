export declare const isNodeContainedInRange: (range: Range, node: Node, partial: boolean) => boolean;
/**
 * Moves the range to an equivalent position with the start/end as deep in
 * the tree as possible.
 */
export declare const moveRangeBoundariesDownTree: (range: Range) => void;
export declare const moveRangeBoundariesUpTree: (range: Range, startMax: Node, endMax: Node, root: Node) => void;
export declare const moveRangeBoundaryOutOf: (range: Range, tag: string, root: Element) => Range;
//# sourceMappingURL=Boundaries.d.ts.map