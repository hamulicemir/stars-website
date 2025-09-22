export default function Page() {
  return (
    <div className="container-7xl py-10">
      <h1 className="text-3xl inline-block pb-2 border-b-4 border-sky-500 font-bold">Impressum</h1>
      <section className="mb-6 mt-6">
        <h2 className="text-xl font-semibold mb-2">
          Herausgeber
        </h2>
        <p>Sportverein STARS</p>
        <p>An der Neurisse 1/48, A-1220 Wien</p>
        <p>ZVR: 750035682</p>
        <p>
          Internet:{" "}
          <a
            href="https://www.stars-basketball.com"
            className="text-blue-600 underline">www.stars-basketball.com
          </a>
        </p>
        <p>
          E-Mail:{" "}
          <a href="mailto:office@stars-basketball.com" className="text-blue-600 underline">
            office@stars-basketball.com
          </a>
        </p>
        <p>Telefon: +43 699 171 667 95</p>
        <p>© 2013–2020, Sportverein STARS</p>
      </section>

      <section className="mb-6">
        <p>
          Der Sportverein STARS ist ein nach dem österreichischen Vereinsgesetz
          (VerG) im Zentralen Vereinsregister (ZVR) eingetragener Verein ohne
          kommerzielle Absichten.
        </p>
        <p className="mt-2">
          Falls ihr unseren Sportverein unterstützen möchtet, könnt ihr das
          gerne direkt über den Spenden-Button machen.
        </p>
        <section className="bg-sky-50 rounded-2xl shadow-md p-6 mt-10 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Unterstütze unseren Verein</h2>
          <p className="text-slate-600 mb-6">
            Mit deiner Spende hilfst du uns, unsere Nachwuchsarbeit und Vereinsprojekte
            weiter auszubauen. Vielen Dank für deine Unterstützung!
          </p>

          {/* PayPal Spenden-Button */}
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=DEIN_BUTTON_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold py-3 px-6 rounded-full shadow transition"
          >
            💛 Jetzt mit PayPal spenden
          </a>

          {/* Alternative: Bankverbindung */}
          <div className="mt-8 text-sm text-slate-500">
            <p>Oder per Überweisung:</p>
            <p className="mt-1">Kontoinhaber: SV Stars</p>
            <p>IBAN: AT81 3236 7000 0012 4248</p>
            <p>BIC: RLNWATWW367</p>
            <p className="mt-1 italic">Verwendungszweck: „Vereinsspende“</p>
          </div>
        </section>
        <h2 className="text-xl font-semibold mt-4 mb-2">Bankverbindung</h2>
        <p>Kontoinhaber: SV Stars</p>
        <p>Bankname: Raiffeisenbank Klosterneuburg eGen</p>
        <p>IBAN: AT81 3236 7000 0012 4248</p>
        <p>BIC: RLNWATWW367</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Rechtshinweise</h2>
        <p>
          Der Sportverein STARS hat die Homepage nach bestem Wissen erarbeitet,
          doch wird seitens des Vereins keine Garantie dafür übernommen, dass
          die bereitgestellten Informationen fehlerfrei und vollständig sind. Der
          Verein behält sich das Recht vor, jederzeit Änderungen oder
          Ergänzungen am Inhalt und am Aufbau seiner Webseiten vorzunehmen.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
        <p>
          Alle auf diesen Seiten veröffentlichten Inhalte (z. B. Texte, Bilder,
          Logos und Grafiken etc.), sofern nicht anders dargestellt, unterliegen
          dem Urheberrecht. Dementsprechend dürfen die Inhalte ohne ausdrückliche
          schriftliche Genehmigung des Urhebers nicht kopiert, bearbeitet,
          veröffentlicht oder anderweitig vervielfältigt werden. Alle namentlich
          gekennzeichneten Artikel und Berichte müssen nicht mit der Meinung des
          Vereins übereinstimmen.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Datenschutz</h2>
        <p>
          Personenbezogene Daten werden ausschließlich nach den Vorgaben des
          österreichischen Datenschutzrechts erhoben, verarbeitet und genutzt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
        <p>
          Dieser Internetauftritt beinhaltet Links zu externen
          Internetauftritten Dritter, auf deren Inhalt der Medieninhaber keinen
          Einfluss hat. Dementsprechend kann der Medieninhaber trotz sorgfältiger
          Prüfung für die Inhalte der entsprechenden Seiten keine Verantwortung
          übernehmen. Für diese Inhalte ist der Betreiber der jeweiligen Website
          verantwortlich. Sollten dennoch Rechtsverletzungen in Verbindung mit
          einer der verlinkten Seiten erkennbar werden, wird der Link
          selbstverständlich umgehend entfernt.
        </p>
      </section>
    </div>
  );
}