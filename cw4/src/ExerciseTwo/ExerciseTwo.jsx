import React from "react";

import "./ExerciseTwo.css";

import { useForm } from "react-hook-form";

import Form from "../components/Form";
import FormInput from "../components/FormInput";
import FormSelect from "./components/FormSelect";
import FormButton from "../components/FormButton";
import ResultTable from "./components/ResultTable";

import { exerciseTwoFormEmptyState } from "./state/exerciseTwoFormEmptyState";
import { options } from "./state/options";

import { DataContext } from "./contexts/DataContext";

import { InputTypesConst } from "../consts/InputTypesConst";
import { FormTwoRefs } from "./consts/FormTwoRefs";
import { FormTwoContent } from "./consts/FormTwoContent";
import { FormTwoButtonLabels } from "./consts/FormTwoButtonLabels";

export default function ExerciseTwo() {
  const { register, handleSubmit, reset } = useForm();

  const { data, setData } = React.useContext(DataContext);

  const isDataLenthGTZero = Object.keys(data).length > 0;

  const onSubmit = (formData) => setData(formData);

  return (
    <section className="exercise-two">
      <h2>Exercise 2</h2>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={register(FormTwoRefs.TEXT_ONE_REF)}
          placeholder={FormTwoContent.TEXT_ONE_PLACEHOLDER}
        />
        <FormInput
          register={register(FormTwoRefs.TEXT_TWO_REF)}
          placeholder={FormTwoContent.TEXT_TWO_PLACEHOLDER}
        />
        <FormInput
          register={register(FormTwoRefs.RADIO_REF)}
          type={InputTypesConst.RADIO}
          label={FormTwoContent.RADIO_LABEL}
        />
        <FormSelect
          register={register(FormTwoRefs.SELECT_REF)}
          options={options}
        />
        <FormInput
          register={register(FormTwoRefs.CHECKBOX_REF)}
          type={InputTypesConst.CHECKBOX}
          label={FormTwoContent.CHECKBOX_LABEL}
        />
        <FormButton label={FormTwoButtonLabels.SUBMIT_LABEL} />
        <FormButton
          label={FormTwoButtonLabels.RESET_LABEL}
          onClick={() => reset(exerciseTwoFormEmptyState)}
        />
      </Form>
      {isDataLenthGTZero && <ResultTable />}
    </section>
  );
}
