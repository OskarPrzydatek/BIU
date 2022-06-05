import "./PageLayout.css";

import LinkToPage from "../../components/LinkToPage/LinkToPage";

export default function PageLayout({ children }) {
  return (
    <section className="e-one-page-layout">
      <h2 className="e-one-page-layout__header">Zadanie 1 - Random User</h2>
      <p className="e-one-page-layout__exercise">
        Utwórz aplikacje React, która będzie wyświetlać w dość funkcjonalny
        sposób losowane dane z serwisu&nbsp;
        <LinkToPage
          link={`https://randomuser.me/`}
          label={`randomuser.me`}
          blank={true}
        />
        . Aplikacja powinna zawierać przycisk, dzięki któremu będziemy losować
        kolejne dane.
      </p>
      <div className="e-one-page-layout__content-wrapper">{children}</div>
    </section>
  );
}
