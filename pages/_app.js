import '../styles/globals.css';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../redux/store'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return (
      <Provider store={store}>
        {Component.getLayout(<Component {...pageProps} />)}
      </Provider>
    )
  }

  return (
    <div style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  )
}

export default MyApp
