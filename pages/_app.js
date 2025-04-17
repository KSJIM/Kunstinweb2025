// pages/_app.js
import '../styles/style.css';
import '../components/Cursor.css';
import Cursor from '../components/Cursor';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
