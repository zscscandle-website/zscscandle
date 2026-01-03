export default function CandleWebsite() {
  return (
    <div style={{ fontFamily: "system-ui", margin: 0 }}>

      {/* HERO – kép + szöveg */}
      <section
        style={{
          position: "relative",
          height: "70vh",
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* sötét réteg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.45)"
          }}
        />

        {/* szöveg */}
        <div
          style={{
            position: "relative",
            color: "white",
            textAlign: "center",
            padding: "20px"
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
            Zs&CsCandle
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            Kézzel készített gyertyák, amelyek meghitté teszik a pillanatokat
          </p>
        </div>
      </section>

      {/* RÓLUNK */}
      <section style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2>Rólunk</h2>
        <p>
          A Zs&CsCandle gyertyái kézzel készülnek, kis szériában, természetes
          alapanyagok felhasználásával. Minden darab a nyugalmat és az
          otthon melegségét képviseli.
        </p>
      </section>

      {/* TERMÉKEK */}
      <section style={{ padding: "60px 20px", background: "#fafafa" }}>
        <h2 style={{ textAlign: "center" }}>Gyertyáink</h2>
        <ul style={{ maxWidth: "600px", margin: "20px auto", lineHeight: "1.8" }}>
          <li>Levendula illatú gyertya</li>
          <li>Vanília illatú gyertya</li>
          <li>Fahéj illatú gyertya</li>
        </ul>
      </section>

      {/* KAPCSOLAT */}
<section
  style={{
    padding: "60px 20px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center"
  }}
>
  <h2>Kapcsolat</h2>

  <p style={{ marginBottom: "20px" }}>
    Ha kérdésed van vagy rendelni szeretnél, keress minket bátran:
  </p>

  <p style={{ fontSize: "18px", marginBottom: "10px" }}>
    📧 Email:{" "}
    <a href="mailto:justmeandyou20241212@gmail.com">
      justmeandyou20241212@gmail.com
    </a>
  </p>

  <p style={{ fontSize: "18px" }}>
    📞 Telefon:{" "}
    <a href="tel:+36706334104">
      +36 30 123 4567
    </a>
  </p>
</section>


      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "20px", fontSize: "14px" }}>
        © 2026 Zs&CsCandle
      </footer>

    </div>
  );
}
