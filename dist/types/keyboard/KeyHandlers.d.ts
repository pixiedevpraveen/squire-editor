import type { Squire } from '../Editor';
declare function getKeyHandlers(): {
    _onKey: (this: Squire, event: KeyboardEvent) => void;
    keyHandlers: Record<string, (self: Squire, event: KeyboardEvent, range: Range) => void>;
};
export { getKeyHandlers };
//# sourceMappingURL=KeyHandlers.d.ts.map