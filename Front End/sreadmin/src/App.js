import "./App.css";
import { useEffect } from "react";
import i18n from "./translations/i18n";
import AdminPanel from "./pages/AdminPanel";
//import Translator from "./components/translator";
//<Translator style={{"display":"inline-block","position":"absolute", "right":10,"marginTop":10}}/>
//<p style={{display:"inline-block","position":"absolute", "right":250,"marginTop":5}}>{t("changelang")}</p>

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
