import { RefObject } from "react";

export function useDropdownPosition(
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>,
) {
  function getDropdownPosition() {
    if (ref.current == null) {
      return { left: 0, top: 0 };
    }

    // get the size and positioning of the category button relative to the viewport
    const rect = ref.current.getBoundingClientRect();

    // the dropdown with (formal)
    const dropdownWidth = 240; // which is the 50rem = 240px

    // calculate the initial position
    let left = rect.left + window.scrollX; // this determines if the button is off the right edge;
    const top = rect.bottom + window.scrollY; // This positions the dropdown wether the window scrolled to bottom or not.;

    // Check if the dropdown would go off the right edge of the viewport
    if (left + dropdownWidth > window.innerWidth) {
      // Align to the right edge of the button
      /**
       * Example:
       * - If the window is 1000 and the react.width = 100
       * - If rect.left is 900 and scrollX is 0
       * - Then the left becomes 900
       * - That Leads to this if condition cuz 900 + 240 = 1140 > 1000
       * - This makes the left = 1000 + 0 - 240 = 760 (which is on the right of the button)
       */
      left = rect.right + window.scrollX - dropdownWidth;

      //   If still off-screen, Align to the right edge of the screen with some padding.
      if (left < 0) {
        /**
         * Example:
         * - If the window 1000 and the button width is 100 and rect.right = -300, that means rect.left = 1200 and scrollX = 300.
         * - Then 1200 + 240 > 1000 -> In the if scope
         * -- left = -300 + 300 - 240 = -240 < 0 (Still off the viewport).
         * -- left = 1000 - 240 - 16 (to the right edge a bit)
         */
        left = window.innerWidth - dropdownWidth - 16;
      }
    }

    // Ensure Dropdown doesn't go off left.
    if (left < 0) {
      // This is in case of the button was left offset
      left = 16;
    }

    return { top, left };
  }

  return { getDropdownPosition };
}
