// /pages/_app.tsx
import Script from 'next/script';
import type { AppProps } from 'next/app';
import Navbar from '../../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Translate Initialization */}
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,ru,uz',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `,
        }}
      />
      {/* Google Translate Script */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Optional: global header */}
      <Navbar/>

      <Component {...pageProps} />
    </>
  );
}
