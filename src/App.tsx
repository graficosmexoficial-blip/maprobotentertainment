import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import LanguageSelector from "./components/feature/LanguageSelector";
import { LanguageProvider } from "./contexts/LanguageContext";
import { QuoteProvider } from "./contexts/QuoteContext";
import QuoteCart from "./components/feature/QuoteCart";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <QuoteProvider>
          <BrowserRouter basename={__BASE_PATH__}>
            <LanguageSelector />
            <QuoteCart />
            <AppRoutes />
          </BrowserRouter>
        </QuoteProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
}

export default App;