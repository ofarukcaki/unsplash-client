import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div id="header">
      <div>
        <Logo width={50} height={50} />
      </div>
      <div>
        <input className="search" type="text" placeholder="Query" />
      </div>
      <div>
        <select id="collections">
          <option value="one">One</option>
          <option value="two">Two</option>
        </select>
      </div>
      <div>
        <button id="search-btn">SEARCH</button>
      </div>
    </div>
  );
}

const Logo = props => (
  <svg {...props} viewBox="0 0 70 70" fill="none">
    <rect width={70} height={70} rx={26} fill="url(#prefix__paint0_linear)" />
    <g clipPath="url(#prefix__clip0)">
      <path
        d="M44.263 23.902a28.744 28.744 0 00-12.945 2.073l-3.287-1.196a22.317 22.317 0 01-.072-3.87.872.872 0 00-.234-.64.854.854 0 00-.62-.269c-.118 0-2.957.043-6.584 3.71-4.045 4.084-4.501 11.907-4.52 12.231a.87.87 0 00.212.616 9.986 9.986 0 005.624 2.873c2.696.35 5.435-.103 7.88-1.304L27.36 42.68a.432.432 0 01-.38.232h-9.27c-.454 0-.888.182-1.209.506a1.738 1.738 0 000 2.443c.32.325.755.507 1.208.507h20.073c.453 0 .887-.183 1.208-.507a1.738 1.738 0 000-2.443 1.699 1.699 0 00-1.208-.506h-3.16a.424.424 0 01-.362-.203.436.436 0 01-.025-.418L37.9 34.6a1.296 1.296 0 01.715-.68 1.272 1.272 0 011.387.325 1.3 1.3 0 01.347.928c-.005.17-.043.338-.112.493l-1.418 3.178a.442.442 0 00.03.412.428.428 0 00.36.197h2.741c4.8 0 10.352 2.257 10.352 7.776a4.784 4.784 0 01-1.377 3.358 4.676 4.676 0 01-3.32 1.394c-.541 0-1.076-.116-1.57-.34a3.853 3.853 0 01-1.295-.956 1.3 1.3 0 01-.233-1.447 1.296 1.296 0 01.745-.674 1.269 1.269 0 011.396.393 1.29 1.29 0 00.956.432c.566-.001 1.11-.229 1.51-.634.4-.405.625-.953.626-1.526a3.063 3.063 0 00-.654-1.816c-2.477-3.338-7.46-.24-7.46 3.54 0 3.781 2.562 6.048 6.833 6.048C54.065 55 57 47.178 57 39.45c0-9.27-4.522-14.792-12.737-15.548z"
        fill="#0F1046"
      />
      <path d="M24.5 35a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="#fff" />
      <path d="M24.5 33a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#2A2B8D" />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear"
        x1={64.927}
        y1={90.29}
        x2={7.101}
        y2={-24.348}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2A2B8D" />
        <stop offset={0.033} stopColor="#2B2F8F" />
        <stop offset={1} stopColor="#559BD1" />
      </linearGradient>
      <clipPath id="prefix__clip0">
        <path fill="#fff" d="M16 18h40v40H16z" />
      </clipPath>
    </defs>
  </svg>
);

export default Navbar;
