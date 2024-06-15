import "./App.css";
import RouterLink from "./Routes/RouterLink";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <RouterLink />
      </I18nextProvider>
    </>
  );
}

export default App;
