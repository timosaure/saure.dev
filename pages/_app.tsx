import '@fortawesome/fontawesome-svg-core/styles.css'; // Fix https://github.com/vercel/next.js/issues/20682. Increases bundle size though, should be removed when issue is fixed
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}
