import "./ExerciseLayout.css";

export default function ExerciseLayout({ title, children }) {
  return (
    <section className="exercise-layout">
      <h2 className="exercise-layout__title">{title}</h2>
      {children}
    </section>
  );
}
