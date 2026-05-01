import { ImageResponse } from "next/og";

export const runtime = "edge";

const OgImage = () => {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 100% 80% at 50% 20%, rgba(217,127,26,0.45) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 900,
              letterSpacing: "-3px",
            }}
          >
            <span style={{ color: "#ffffff" }}>Moto</span>
            <span style={{ color: "#f97316" }}>Community</span>
          </div>
          <div
            style={{
              fontSize: 36,
              color: "rgba(255,255,255,0.6)",
              marginTop: "-8px",
            }}
          >
            Find Your Ride
          </div>
          <div
            style={{
              marginTop: "16px",
              padding: "12px 32px",
              borderRadius: "100px",
              border: "1.5px solid rgba(249,115,22,0.5)",
              background: "rgba(249,115,22,0.12)",
              color: "#fb923c",
              fontSize: 24,
            }}
          >
            Coming Soon on App Store
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
};

export default OgImage;
