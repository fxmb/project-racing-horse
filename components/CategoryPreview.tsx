import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

const categories = [
  {
    name: "Leitungsverbinder",
    href: "#",
    imageSrc: "https://www.festo.com/media/pim/717/D15000100116717_264x198.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Leitungsverbinder",
    href: "#",
    imageSrc: "https://www.festo.com/media/pim/717/D15000100116717_264x198.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Leitungsverbinder",
    href: "#",
    imageSrc: "https://www.festo.com/media/pim/717/D15000100116717_264x198.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Leitungsverbinder",
    href: "#",
    imageSrc: "https://www.festo.com/media/pim/717/D15000100116717_264x198.jpg",
  },
];

export default function CategoryPreview() {
  return (
    <div className="pt-4">
      <div className="py-4 border-t ">
        <Breadcrumb
          product_parents={{
            parent_1: "Parent_1",
            parent_2: "Parent_2",
            parent_3: "Parent_3",
            parent_4: "Parent_4",
          }}
        />
      </div>{" "}
      <h1 className="text-3xl font-bold text-indigo-500 my-6">Parent_1</h1>
      <p className="text-sm prose max-w-5xl mb-12">
        Die preisgünstigen EMC-Pneumatikventile unserer Eco-Line sind für
        einfache Pneumatikanwendungen (wenige Schaltungen pro Stunde, geringe
        Temperatur- und Druckschwankungen) bestens geeignet. Ventile einer
        Baureihe (RV10, RV20, RV30 oder RV40) und Bauform (3/2-Wege oder 5/2- &
        5/3-Wege) können auf einer Mehrfachanschlussplatte sogar als Mischung
        zwischen Magnetventilen und pneumatisch betätigten Ventilen kombiniert
        werden. Wir empfehlen die Entlüftungsbohrungen mit einem Schalldämpfer
        zu versehen. Der Steuerdruck an dem Pilotanschluss sollte nicht geringer
        sein als der zu schaltende Betriebsdruck. Ventile der nächsthöheren
        Qualitätsstufe von YPC oder der höchsten Qualitätsstufe von Airtec,
        Festo & Aventics finden Sie ebenfalls in diesem Shop.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {categories.map((category, idx) => (
          <Link href="#" key={idx}>
            <div className="group aspect-w-16 aspect-h-11 overflow-hidden rounded-lg sm:aspect-h-11 sm:aspect-w-16 ">
              <img
                src="/images/22AP08A7.jpg"
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className="object-cover object-center group-hover:opacity-75 "
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50"
              />
              <div className="flex items-end p-6">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Kategorie
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Anzahl Artikel
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
