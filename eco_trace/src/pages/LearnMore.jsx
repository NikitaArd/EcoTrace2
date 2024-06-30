import Logo from "../assets/logo.svg";
import Co2Impact from "../assets/co2-impact.svg";
import Bike from "../assets/Bike.svg";
import Plants from "../assets/Plants.svg";


import { Link } from "react-router-dom";


export default function LearnMore() {
  return (
    <>
      <nav class="flex w-3/5 mx-auto pt-10" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <Link
              to="/"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home Page
            </Link>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Larn more
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <header class="h-fit my-16">
        <h1 class="w-fit m-auto mb-4 text-5xl font-extrabold tracking-tigh text-stone-900">
          Learn more about{" "}
          <span class="text-red-600">
            CO<sub>2</sub>
          </span>{" "}
          emissions.
        </h1>

        <blockquote class="w-fit m-auto mt-16 mb-4 text-xl italic font-semibold text-gray-600 dark:text-white">
          <svg
            class="w-4 h-4 text-gray-400 dark:text-gray-600 mb-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>"The creation of a thousand forests is in one acorn."</p>
        </blockquote>

        <figcaption class="flex items-center justify-center mt-0 space-x-3 rtl:space-x-reverse">
          <img
            class="w-6 h-6 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg/1024px-Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg"
            alt="profile picture"
          />
          <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite class="pe-3 font-medium text-gray-900 dark:text-white">
              Ralph Waldo Emerson
            </cite>
          </div>
        </figcaption>
      </header>
      <section class="mb-20 mt-10">
        <video class="w-3/5 m-auto" controls>
          <source src="{% static 'video/co2-impact.mp4' %}" type="video/mp4" />
          Looks like your browser does not support the video tag.
        </video>

        <p class="italic w-3/5 m-auto">
          *Video by{" "}
          <a
            href="https://www.youtube.com/@PlanetNutshell"
            target="blank"
            class="underline"
          >
            Planet Nutshell
          </a>
          .
        </p>
      </section>
      <section class="flex justify-between w-2/3 align-middle m-auto mt-40">
        <img src={Co2Impact} class="max-h-80 mr-32" />
        <article class="h-fit m-auto">
          <h1 class="text-3xl font-semibold pb-6 pl-3">
            Impact of CO<sub>2</sub> on our life
          </h1>
          <p class="h-fit text-lg">
            CO<sub>2</sub> absorbs and emits infrared radiation trapping heat
            and this is the core reason for climate change. Extreme weather,
            food supply disruptions, and increased wildfires are other effects
            of climate change caused by high CO<sub>2</sub> and other greenhouse
            gases.
          </p>
        </article>
      </section>
      <section class="flex justify-between w-2/3 align-middle m-auto mt-40">
        <article class="h-fit m-auto">
          <h1 class="text-3xl font-semibold pb-6 pl-3">
            Sources of global CO<sub>2</sub> emissions
          </h1>
          <p class="h-fit text-lg">
            About 90 per cent of the world's carbon emissions comes from the
            burning of fossil fuels – mainly for electricity, heat and
            transport.
          </p>
          <p class="h-fit text-lg mt-4">
            In 2022, most of the world's fossil fuel carbon emissions came from
            coal (40 per cent), oil (32 per cent), natural gas (21 per cent),
            cement (5 per cent) and flaring and other smaller sources (2 per
            cent).
          </p>
        </article>

        <img src={Bike} class="max-h-80 ml-32" />
      </section>
      <section class="flex justify-between w-2/3 align-middle m-auto mt-40">
        <img src={Plants} class="max-h-72 mr-32" />

        <article class="h-fit m-auto">
          <h1 class="text-3xl font-semibold pb-6 pl-3">
            How can you reduce CO<sub>2</sub> emissions?
          </h1>
          <ul class="list-disc ml-3 h-fit text-lg">
            <li class="my-1">Tap into renewable energy sources</li>
            <li class="my-1">Plant a tree</li>
            <li class="my-1">Commit to sustainable mobility</li>
            <li class="my-1">Stop buying water in plastic</li>
          </ul>
        </article>
      </section>
      <footer class="bg-green-200 dark:bg-gray-900 mt-40">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={Logo}
                class="h-8"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                EcoTrace
              </span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-stone-700 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  to="/"
                  class="hover:underline me-4 md:me-6"
                >
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="#" class="hover:underline me-4 md:me-6">
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/NikitaArd"
                  target="blank"
                  class="hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-stone-200">
            © 2024 Nikita Smolenskyi. Some info about rights.
          </span>
        </div>
      </footer>
    </>
  );
}
