import "./App.css";
import RouterLink from "./Routes/RouterLink";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import ImageCarousel from "./components/Test";
import ImageSlideWallet from "./components/ImageSlideWallet";
import Spinner from "./helper/Loading";
function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <RouterLink />
        {/* <ImageSlideWallet/> */}
        {/* <ImageCarousel/> */}
        {/* <Spinner/> */}
      </I18nextProvider>
    </>
  );
}
export default App;
