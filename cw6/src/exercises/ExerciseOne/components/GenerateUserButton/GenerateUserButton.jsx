import "./GenerateUserButton.css";

export default function GenerateUserButton({ label, onClick }) {
  return (
    <button
      className={`e-one-generate-user-button--cleaner e-one-generate-user-button`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
