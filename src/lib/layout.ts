// Shared page layout, taken from the Figma hero.
//
// Every full-width band (hero, Home sections, footer) uses the same side
// padding (24px on mobile, 132px from lg = Figma `layout/page-gutter-lg`)
// and the same centered content column, so their left and right edges line up.

/** Side padding of a band: 24px on mobile, 132px from 1024px up. */
export const bandPadding = "px-6 lg:px-gutter-lg";

/** Centered content column (1184px max) inside a band. */
export const container = "mx-auto w-full max-w-[1184px]";
