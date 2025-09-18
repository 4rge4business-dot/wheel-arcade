import { useEffect } from "react";

export default function AdBanner({ adSlot, adFormat = "auto" }) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-8306818191166444"
      data-ad-slot={adSlot}   // replace with your AdSense slot ID
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    ></ins>
  );
}
