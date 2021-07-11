import "../styles/globals.css";
import Appbar from "../components/Appbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Appbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
