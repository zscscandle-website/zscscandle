export default function CandleWebsite() {
  return (
    <div style={{ fontFamily: "system-ui", margin: 0 }}>

      {/* Hero */}
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
  {/* sötét overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.4)"
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
      Kézzel készített, letisztult gyertyák meghitt otthonokba
    </p>
  </div>
</section>

      <section style={{ padding: "80px 20px", background: "#f5f3ef", textAlign: "center" }}>
        <h1>Zs&CsCandle</h1>
        <p>Kézzel készített, letisztult gyertyák meghitt otthonokba.</p>
      </section>

      {/* About */}
      <section style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2>Rólunk</h2>
        <p>
          A Zs&CsCandle gyertyái kézzel készülnek, kis szériában, természetes
          alapanyagok felhasználásával. Minden darab a nyugalmat és harmóniát
          képviseli.
        </p>
      </section>

      {/* Products */}
      <section style={{ padding: "60px 20px", background: "#fafafa" }}>
        <h2 style={{ textAlign: "center" }}>Gyertyáink</h2>
        <ul style={{ maxWidth: "600px", margin: "20px auto" }}>
          <li>Levendula illatú gyertya</li>
          <li>Vanília illatú gyertya</li>
          <li>Fahéj illatú gyertya</li>
        </ul>
      </section>

      {/* Contact */}
      <section style={{ padding: "60px 20px", maxWidth: "600px", margin: "0 auto" }}>
        <h2>Kapcsolat</h2>
        <form>
          <input placeholder="Név" style={{ display: "block", width: "100%", marginBottom: "10px" }} />
          <input placeholder="Email" style={{ display: "block", width: "100%", marginBottom: "10px" }} />
          <textarea placeholder="Üzenet" style={{ display: "block", width: "100%", marginBottom: "10px" }} />
          <button type="submit">Üzenet küldése</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", fontSize: "14px" }}>
        © 2026 Zs&CsCandle
      </footer>

    </div>
  );
}
