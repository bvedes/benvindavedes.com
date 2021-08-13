import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component className="bg-gray-50 text-gray-900 text-lg" {...pageProps} />;
}

export default MyApp;
