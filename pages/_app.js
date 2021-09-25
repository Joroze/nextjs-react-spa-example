import '../styles/globals.css';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  console.log('hi');
  return (
    <Auth0Provider
      domain="joroze.auth0.com"
      clientId="8ftOtNWBVoOPS4yW0Yo0x1vdXy7MoG5X"
      redirectUri="http://localhost:3000/"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
