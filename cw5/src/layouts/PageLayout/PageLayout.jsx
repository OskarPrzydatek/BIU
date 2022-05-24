import "./PageLayout.css";

import NavBar from "../../components/NavBar/NavBar";

export default function PageLayout({ children }) {
  return (
    <>
      <header className="header">
        <h1>BIU 5</h1>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
