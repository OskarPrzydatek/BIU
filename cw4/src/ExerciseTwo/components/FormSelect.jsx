export default function FormSelect({ register, options }) {
  const defaultValue = "";

  return (
    <select defaultValue={defaultValue} {...register}>
      <option value={defaultValue} disabled>
        Wyberz Opcje
      </option>
      {options.map((optionValue) => (
        <option key={optionValue} value={optionValue}>
          {optionValue}
        </option>
      ))}
    </select>
  );
}
