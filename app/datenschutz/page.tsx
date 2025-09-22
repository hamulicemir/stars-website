export default function Page() {
  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl inline-block pb-2 border-b-4 border-sky-500 font-bold mb-6">Datenschutzerklärung</h1>

      <p className="text-slate-700 mb-6">
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
        Personenbezogene Daten werden vertraulich und entsprechend der
        gesetzlichen Datenschutzvorschriften (DSGVO, TKG 2003) sowie dieser
        Datenschutzerklärung behandelt.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Verantwortlicher</h2>
        <p>SV Stars</p>
        <p>An der Neurisse 1/48, 1220 Wien</p>
        <p>
          <a
            href="mailto:office@stars-basketball.com"
            className="text-blue-600 underline"
          >
            office@stars-basketball.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Erfassung und Verarbeitung personenbezogener Daten
        </h2>
        <p>
          Wir erheben personenbezogene Daten nur dann, wenn Sie uns diese im
          Rahmen einer Kontaktaufnahme (z. B. per E-Mail, Telefon oder
          Social-Media-Nachricht) oder durch die Anmeldung zum Verein mitteilen.
          Diese Daten werden ausschließlich zur Vereinsverwaltung,
          Mitgliederkommunikation und zur Abwicklung der Vereinsaktivitäten
          verwendet.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Server-Logfiles</h2>
        <p>
          Der Provider unserer Website erhebt und speichert automatisch
          Informationen in sogenannten Server-Logfiles, die Ihr Browser
          automatisch übermittelt. Dies sind:
        </p>
        <ul className="list-disc list-inside mt-2 text-slate-700">
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
        </ul>
        <p className="mt-2">
          Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht
          mit anderen Datenquellen zusammengeführt.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cookies</h2>
        <p>
          Unsere Website verwendet teilweise sogenannte Cookies. Cookies richten
          auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie
          dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer
          zu machen.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail oder über soziale Medien kontaktieren, werden
          Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten
          zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
          bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
          weiter.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Soziale Medien (Facebook &amp; Instagram)
        </h2>
        <p>
          Wir betreiben offizielle Seiten auf Facebook und Instagram. Betreiber
          dieser Dienste ist die Meta Platforms Ireland Ltd., 4 Grand Canal
          Square, Grand Canal Harbour, Dublin 2, Irland.
        </p>
        <p className="mt-2">
          Wenn Sie unsere Facebook- oder Instagram-Seiten besuchen, werden dort
          personenbezogene Daten durch Meta verarbeitet (z. B. Ihre IP-Adresse,
          Informationen über Ihr Endgerät, Ihr Verhalten auf unseren Seiten). Auf
          diese Datenverarbeitung haben wir keinen Einfluss.
        </p>
        <p className="mt-2">Weitere Informationen finden Sie in den Datenschutzhinweisen von Meta:</p>
        <ul className="list-disc list-inside mt-2 text-sky-700">
          <li>
            <a
              href="https://www.facebook.com/privacy/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Facebook Datenschutzerklärung
            </a>
          </li>
          <li>
            <a
              href="https://privacycenter.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Instagram Datenschutzerklärung
            </a>
          </li>
        </ul>
        <p className="mt-2">
          Wir erhalten von Meta nur anonyme Statistiken über die Nutzung unserer
          Seiten (sogenannte „Insights“).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Rechte der betroffenen Personen
        </h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          sowie den Zweck der Datenverarbeitung. Außerdem haben Sie das Recht auf
          Berichtigung, Einschränkung der Verarbeitung oder Löschung dieser
          Daten.
        </p>
        <p className="mt-2">
          Wenn Sie Fragen zum Thema Datenschutz haben, können Sie sich jederzeit
          unter der oben angegebenen Adresse an uns wenden.
        </p>
      </section>
    </div>
  );
}
