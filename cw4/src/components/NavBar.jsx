import { Link } from "react-router-dom";

import { RoutesConst } from "../consts/RoutesConst";
import { NavBarConst } from "../consts/NavBarConst";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={RoutesConst.EXERCISE_ONE}>{NavBarConst.EXERCISE_ONE}</Link>
        </li>
        <li>
          <Link to={RoutesConst.EXERCISE_TWO}>{NavBarConst.EXERCISE_TWO}</Link>
        </li>
      </ul>
    </nav>
  );
}
