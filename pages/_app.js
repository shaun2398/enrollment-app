import Layout from '../components/Layout';

// import provider and store
import { Provider } from 'react-redux';
import store from '../redux-toolkit/store';

import '../styles/globals.css';
import '../styles/globalstyles.scss';

function MyApp({ Component, pageProps }) {

  // wrap component with provider and store as prop
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp
