import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const people = [
  {
    name: "Johann D.H. Harms",
    role: "CEO",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C5603AQEFlp0-SEIxqA/profile-displayphoto-shrink_800_800/0/1553265639188?e=1675900800&v=beta&t=y7vnHanhadkKvTfTmZfKyZ_Gh4fU4H3iVpwZEZNSLmE",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/johann-h-60a378139/",
    email: "harms.j@lippold.de",
  },
  {
    name: "Thorsten Kube",
    role: "Technischer Geschäftsführer",
    imageUrl:
      "https://www.lippold.de/wp-content/uploads/2019/02/lippold_assets_kontakt_kube_300x300.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    email: "kube@lippold.de",
  },

  // More people...
];

export default function AboutUs() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Das Geparts Team
            </h2>
            <p className="text-xl text-gray-500">
              Vertrauen, Gemeinschaft, Zuverlässigkeit und nachhaltiges
              Unternehmertum prägen unser Handeln – nach innen und nach außen.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <ul
                      role="list"
                      className="flex justify-center items-center space-x-5"
                    >
                      <li>
                        <a
                          href={`mailto:${person.email}`}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <EnvelopeIcon className="w-6 h-6" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
