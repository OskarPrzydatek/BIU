export default function NumInput({ label, onInput }) {
  const invalidChars = ["e", "E", "+", "-"];

  const blockInvalidChar = (e) =>
    invalidChars.includes(e.key) && e.preventDefault();

  return (
    <label>
      <span>{label}</span>
      <input type="number" onKeyDown={blockInvalidChar} onInput={onInput} />
    </label>
  );
}
