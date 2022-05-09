import "../styles/Form.css";

export default function Form({ handleSubmit, children }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
