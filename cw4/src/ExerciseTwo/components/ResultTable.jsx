import React from "react";

import "../styles/ResultTable.css";

import { DataContext } from "../contexts/DataContext";

import { FormTwoContent } from "../consts/FormTwoContent";
import { ResultTableValueConst } from "../consts/ResultTableValueConst";

export default function ResultTable() {
  const { data } = React.useContext(DataContext);

  const radioValue =
    data.radio === ResultTableValueConst.ON
      ? ResultTableValueConst.ON
      : ResultTableValueConst.OFF;

  const checkboxValue = data.checkbox
    ? ResultTableValueConst.TRUE
    : ResultTableValueConst.FALSE;

  return (
    <table className="result-array">
      <thead>
        <tr>
          <th>{FormTwoContent.TEXT_ONE_PLACEHOLDER}</th>
          <th>{FormTwoContent.TEXT_TWO_PLACEHOLDER}</th>
          <th>{FormTwoContent.RADIO_LABEL}</th>
          <th>{FormTwoContent.SELECT_LABEL}</th>
          <th>{FormTwoContent.CHECKBOX_LABEL}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.textOne}</td>
          <td>{data.textTwo}</td>
          <td>{radioValue}</td>
          <td>{data.select}</td>
          <td>{checkboxValue}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
