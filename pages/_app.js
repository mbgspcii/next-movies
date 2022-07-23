

import { Provider } from 'react-redux';
import globalStyles from 'styles/global';

import { useStore } from 'store';
import ThemeProvider from 'utils/hocs/ThemeProvider';
import Layout from 'parts/Layout';
import { AuthProvider } from 'utils/hocs/AuthProvider';

// TwicPics Components importation
import { installTwicPics } from "@twicpics/components/react";
import "@twicpics/components/style.css";

// TwicPics Components configuration (see Setup Options)
installTwicPics( {
    // domain is mandatory
    "domain": process.env.NEXT_PUBLIC_TWICPICS_DOMAIN
  } );
  

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default MyApp;
