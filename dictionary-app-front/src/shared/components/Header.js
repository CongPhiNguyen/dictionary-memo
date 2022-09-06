import React from "react";
import { NavLink } from "react-router-dom";

const navItem = "border-[1px] p-[0.4em] inline-block mr-[1em] hover:opacity";

export default function Header() {
  return (
    <div className="p-[0.2rem] border-[1px]">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${navItem} bg-[#ffff92] text-[black]`
            : `${navItem} text-[black]`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${navItem} bg-[#ffff92] text-[black]`
            : `${navItem} text-[black]`
        }
        to="/search"
      >
        Search
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${navItem} bg-[#ffff92] text-[black]`
            : `${navItem} text-[black]`
        }
        to="/test"
      >
        Test
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${navItem} bg-[#ffff92] text-[black]`
            : `${navItem} text-[black]`
        }
        to="/speech-2-text"
      >
        Speed to text
      </NavLink>
    </div>
  );
}
