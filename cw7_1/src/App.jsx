import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ContactIndex from "./pages/contact/ContactIndex";
import ContactUS from "./pages/contact/ContactUS";
import ContactPL from "./pages/contact/ContactPL";
import ContactDE from "./pages/contact/ContactDE";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />}>
          <Route index element={<ContactIndex />} />
          <Route path="us" element={<ContactUS />} />
          <Route path="pl" element={<ContactPL />} />
          <Route path="de" element={<ContactDE />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
