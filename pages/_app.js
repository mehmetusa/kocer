import Layout from '../components/Layout';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { Space_Grotesk, Manrope } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext';

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LanguageProvider>
            <div className={`${headingFont.variable} ${bodyFont.variable}`}>
              <div className="appWrapper">
                <div className="appContainer">
                  <Layout>
                    <DefaultSeo {...SEO} />
                    <Component {...pageProps} />
                  </Layout>
                </div>
              </div>
            </div>
          </LanguageProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
