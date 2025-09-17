import { useEffect } from "react";

interface AdSlotProps {
  slot: string;
  format?: string;
  layout?: string;
  style?: React.CSSProperties;
}

export default function AdSlot({
  slot,
  format = "auto",
  layout = "",
  style = { display: "block" },
}: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-8306818191166444"
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-layout={layout}
      data-full-width-responsive="true"
    ></ins>
  );
}
