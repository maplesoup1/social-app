import "@/styles/globals.css";
import Footer from "@/componets/Home/Footer";
import Header from "@/componets/Home/Header";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>

  )

}
