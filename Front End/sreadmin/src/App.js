import "./App.css";
import { useEffect } from "react";
import i18n from "./translations/i18n";
import AdminPanel from "./pages/AdminPanel";

function App() {
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18n.changeLanguage("en");
    }
  }, []);

  return <AdminPanel />;
}

export default App;
