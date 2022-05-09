import React from "react";

import { useForm } from "react-hook-form";

import Form from "../components/Form";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import ResultPanel from "./components/ResultPanel";

import { FormOneConst } from "./consts/FormOneConst";

export default function ExerciseOne() {
  const { register, handleSubmit } = useForm();

  const input = React.useRef();
  const [numbers, setNumbers] = React.useState([]);

  const onSubmit = (data) => {
    input.current = data.number;
    setNumbers((prev) => [...prev, input.current]);
  };

  return (
    <section>
      <h2>Exercise 1</h2>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={register(FormOneConst.INPUT_REF, {
            required: true,
            valueAsNumber: true,
            setValueAs: (v) => parseInt(v),
          })}
          type={FormOneConst.INPUT_TYPE}
          placeholder={FormOneConst.INPUT_PLACEHOLDER}
        />
        <FormButton label={FormOneConst.FORM_BUTTON_LABEL} />
      </Form>
      <ResultPanel input={input.current} numbers={numbers} />
    </section>
  );
}
