import * as React from "react";

const CrossIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeOpacity={0.7}
      d="m4.5 4.5 15 15m0-15-15 15"
    />
  </svg>
);

export default CrossIcon;