import {
  ArrowPathIcon,
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  CloudArrowUpIcon,
  CogIcon,
  DocumentCheckIcon,
  LockClosedIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  ServerIcon,
  ShieldCheckIcon,
  StarIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Kostenloser Paketversand",
    description:
      "Bei Bestellung in unserem Online-Shop versenden wir innerhalb Deutschlands frei Haus.",
    icon: TruckIcon,
  },
  {
    name: "Versand am gleichen Tag",
    description:
      "Mehr als 99% der Bestellungen, die bis 18:00 Uhr in unserem Online-Shop getätigt werden, versenden wir am gleichen Tag.",
    icon: DocumentCheckIcon,
  },
  {
    name: "Bestellt am WE: Montag geliefert  ",
    description:
      "Sie können in unserem Online-Shop auch bis Sonntagnachmittag bestellen. Wir versenden sofort.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Technische Beratung",
    description:
      "Wir stehen Ihnen per Telefon und E-Mail jederzeit zur Verfügung.",
    icon: PhoneIcon,
  },
  {
    name: "Umschlüsselservice",
    description:
      "Über die Suchfunktion finden Sie auch mit der Artikelnummer anderer Anbieter oder Hersteller schnell das passende Produkt.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Qualitäts-Partnerschaften",
    description:
      "Wir bevorraten nahezu das komplette Produktprogramm von weltweit führenden Pneumatik- und Hydraulik Herstellern.",
    icon: StarIcon,
  },
];

export default function Usps() {
  return (
    <div className="relative bg-transparent py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-indigo-600">
          Bestellen Sie schneller
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Alles für den Fluidbedarf
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Geparts ist Ihre erste Anlaufstelle für technisch komplexe Produkte
          und Ersatzteile von Qualitätsherstellern im Bereich Hydraulik &
          Pneumatik.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 flex items-stretch">
                <div className="flow-root rounded-lg bg-gradient-to-b from-gray-100 to-gray-300 px-6 pb-8 ">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
