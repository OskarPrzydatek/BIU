import "../styles/ResultPanel.css";

import { ResultPanelConst } from "../consts/ResultPanelConst";
import { ResultPanelListKeys } from "../consts/ResultPanelListKeys";

export default function ResultPanel({ input, numbers }) {
  const isNumbers = numbers.length > 0;

  const countTotal = () => isNumbers && numbers.reduce((a, b) => a + b);

  const countAverage = () => isNumbers && countTotal() / numbers.length;

  return (
    <ul>
      <li key={ResultPanelListKeys.CURRENT_INPUT_VALUE}>
        {ResultPanelConst.CURRENT_INPUT_VALUE} {input}
      </li>
      <li key={ResultPanelListKeys.TOTAL}>
        {ResultPanelConst.TOTAL} {countTotal()}
      </li>
      <li key={ResultPanelListKeys.AVERAGE}>
        {ResultPanelConst.AVERAGE} {countAverage()}
      </li>
      <li key={ResultPanelListKeys.ALL_NUMBERS}>
        {ResultPanelConst.ALL_NUMBERS}
        {numbers.length > 0 ? (
          <ul className="numbers-list">
            {numbers.map((number, index) => (
              <li key={`${number}-${index}`} className="numbers-list__item">
                {number}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-elements-added">
            {ResultPanelConst.NO_ELEMENTS_ADDED}
          </p>
        )}
      </li>
    </ul>
  );
}
