import "src/styles/globals.css";
import "src/styles/global.scss";
import type { AppProps } from "next/app";
import NavBar from "src/components/navBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
