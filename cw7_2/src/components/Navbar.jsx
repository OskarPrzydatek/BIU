import { Link } from "react-router-dom";

export default function Navbar({ firstNum, secondNum }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`add/${firstNum}/${secondNum}`}>ADD</Link>
        </li>
        <li>
          <Link to={`sub/${firstNum}/${secondNum}`}>SUB</Link>
        </li>
        <li>
          <Link to={`mul/${firstNum}/${secondNum}`}>MUL</Link>
        </li>
        <li>
          <Link to={`div/${firstNum}/${secondNum}`}>DIV</Link>
        </li>
      </ul>
    </nav>
  );
}
