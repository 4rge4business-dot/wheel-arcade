import "@/styles/globals.css";
import AdBanner from "@/components/AdBanner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* Footer Ad */}
      <footer style={{ marginTop: "2rem", textAlign: "center" }}>
        <AdBanner adSlot="1234567890" /> {/* replace with your AdSense slot ID */}
      </footer>
    </>
  );
}
