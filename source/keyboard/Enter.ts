import type { Squire } from '../Editor';

// ---
/**
 * Handles the Enter key and split the block and if ctrl is pressed then move the cursor at the end first to create or moved to new block without splitting.
 */
export const Enter = (self: Squire, event: KeyboardEvent, range: Range): void => {
    event.preventDefault();
    self.splitBlock(event.shiftKey, range);
};
