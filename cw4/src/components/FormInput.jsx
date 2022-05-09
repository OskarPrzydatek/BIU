import { InputTypesConst } from "../consts/InputTypesConst";

export default function FormInput({ register, type, label, placeholder }) {
  const invalidChars = ["e", "E", "+", "-"];

  const preventInvalidChar = (event) => {
    invalidChars.includes(event.key) && event.preventDefault();
  };

  return (
    <label>
      {label && <span>{label}: </span>}
      <input
        {...register}
        type={type ? type : InputTypesConst.TEXT}
        placeholder={placeholder && placeholder}
        onKeyDown={
          type === InputTypesConst.NUMBER ? preventInvalidChar : () => null
        }
      />
    </label>
  );
}
