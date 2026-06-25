import React from "react";
import ActivatePage from "./pages/ActivatePage";
import SimsPage from "./pages/SimsPage";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>SIM Card Activation Portal</h1>
      </header>

      <main className="app-content">
        <section className="activation-section">
          <ActivatePage />
        </section>

        <section className="history-section">
          <SimsPage />
        </section>
      </main>
    </div>
  );
}

export default App;
