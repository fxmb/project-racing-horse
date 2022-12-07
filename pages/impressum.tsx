import Layout from "../components/Layout";

const Impressum = () => {
  return (
    <Layout title="Impressum">
      <div>
        <div className="flex flex-col mx-4 lg:mx-96 break-words	py-16">
          <h1 className="text-my-auto-abo-blue text-2xl my-4">Impressum</h1>
          <h2 id="m46">Diensteanbieter</h2>
          <p>Lippold GmbH</p>
          <p>Rondenbarg 11 – 17</p>
          <p>22525 Hamburg</p>
          <p>Deutschland</p>

          <h2 id="m56">Kontaktmöglichkeiten</h2>
          <p>
            E-Mail-Adresse: <a href="mailto:#">team@project-racing-horse.de</a>
          </p>
          <h2 className="text-my-auto-abo-blue text-2xl my-4" id="m153">
            Vertretungsberechtigte
          </h2>
          <p className="font-bold">Vertretungsberechtigt</p>
          <p>Johann Harms</p>
          <br />
          <h2 id="m58" className="font-bold">
            Angaben zum Unternehmen
          </h2>
          <h2 id="m151">Register und Registernummer</h2>
          <p>HRB Nr. 43445</p>
          <p>Amtsgericht Hamburg</p>
          <h2>Umsatzsteuer-Identifikationsnummer</h2>
          <p>USt-IdNr: DE 182416320</p>
          <h2 className="text-my-auto-abo-blue text-2xl my-4" id="m65">
            Haftungs- und Schutzrechtshinweise
          </h2>
          <p>
            <strong>Haftungsausschluss</strong>: Die Inhalte dieses
            Onlineangebotes wurden sorgfältig und nach unserem aktuellen
            Kenntnisstand erstellt, dienen jedoch nur der Information und
            entfalten keine rechtlich bindende Wirkung, sofern es sich nicht um
            gesetzlich verpflichtende Informationen (z.B. das Impressum, die
            Datenschutzerklärung, AGB oder verpflichtende Belehrungen von
            Verbrauchern) handelt. Wir behalten uns vor, die Inhalte vollständig
            oder teilweise zu ändern oder zu löschen, soweit vertragliche
            Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend
            und unverbindlich.{" "}
          </p>
          <p>
            <strong>Links auf fremde Webseiten</strong>: Inhalte fremder
            Webseiten, auf die wir direkt oder indirekt verweisen, liegen
            außerhalb unseres Verantwortungsbereiches und machen wir uns nicht
            zu Eigen. Für alle Inhalte und insbesondere für Schäden, die aus der
            Nutzung der in den verlinkten Webseiten aufrufbaren Informationen
            entstehen, haftet allein der Anbieter der verlinkten Webseiten.
          </p>
          <p>
            <strong>Urheberrechte und Markenrechte</strong>: Alle auf dieser
            Website dargestellten Inhalte, wie Texte, Fotografien, Grafiken,
            Marken und Warenzeichen sind durch die jeweiligen Schutzrechte
            (Urheberrechte, Markenrechte) geschützt. Die Verwendung,
            Vervielfältigung usw. unterliegen unseren Rechten oder den Rechten
            der jeweiligen Urheber bzw. Rechteverwalter.
          </p>
          <p>
            <strong>Hinweise auf Rechtsverstöße</strong>: Sollten Sie innerhalb
            unseres Internetauftritts Rechtsverstöße bemerken, bitten wir Sie
            uns auf diese hinzuweisen. Wir werden rechtswidrige Inhalte und
            Links nach Kenntnisnahme unverzüglich entfernen.
          </p>
          <h2 className="text-my-auto-abo-blue text-2xl my-4" id="m169">
            Bildnachweise
          </h2>
          <p>Bildquellen und Urheberrechtshinweise: </p>
          <p>
            Bilder:{" "}
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              https://unsplash.com/
            </a>
          </p>
          <p>
            Icons:{" "}
            <a
              href="https://www.flaticon.com/"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              https://www.flaticon.com/
            </a>
          </p>
          <p className="seal">
            <a
              href="https://datenschutz-generator.de/?l=de"
              title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Erstellt mit dem kostenlosen Datenschutz-Generator.de von Dr.
              Thomas Schwenke
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum;
