import { ReactNode } from 'react';

type Placement = 'top' | 'right' | 'left' | 'bottom';

interface TooltipProps {
  title: ReactNode;
  placement?: Placement;
  children: ReactNode;
}

const placementClasses: Record<Placement, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

/**
 * CSS-only replacement for MUI's HtmlTooltip. Headless UI ships no tooltip
 * primitive, and this only ever needs hover/focus reveal - no positioning
 * engine. Colours come from the accent token so it follows the theme.
 */
const Tooltip = ({ title, placement = 'top', children }: TooltipProps) => (
  <span className="group relative inline-flex">
    {children}
    <span
      role="tooltip"
      className={`pointer-events-none absolute z-50 max-w-[220px] scale-95 whitespace-nowrap rounded border border-line bg-primary px-2 py-1 text-xs text-white opacity-0 transition duration-200 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100 ${placementClasses[placement]}`}
    >
      {title}
    </span>
  </span>
);

export default Tooltip;
