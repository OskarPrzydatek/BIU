import React from "react";
import Button from "./Button";

const convertButtonLabels = {
  decimal: "Convert To Hex",
  hex: "Convert To Decimal",
};

export default function RandomNumberListItem({ randomNumber, deleteNumber }) {
  const [isHex, setIsHex] = React.useState(false);
  const [convertButtonLabel, setConvertButtonLabel] = React.useState(
    convertButtonLabels.decimal
  );

  const randomNumberFigure = (number) =>
    isHex ? `#${number.toString(16)}` : number;

  const handeCovertBehaviour = () => {
    setIsHex(!isHex);

    isHex
      ? setConvertButtonLabel(convertButtonLabels.decimal)
      : setConvertButtonLabel(convertButtonLabels.hex);
  };

  return (
    <li>
      <span>{randomNumberFigure(randomNumber)}</span>
      <Button label="Delete Number" onClick={deleteNumber} />
      <Button label={convertButtonLabel} onClick={handeCovertBehaviour} />
    </li>
  );
}
