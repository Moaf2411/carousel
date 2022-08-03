import Wrapper from '../components/wrapper'
import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../components/store/store'

function MyApp({ Component, pageProps }) {
  return( 
  <Provider store={store}>
    <Wrapper> <Component {...pageProps} /> </Wrapper>
  </Provider>
  )
}

export default MyApp
