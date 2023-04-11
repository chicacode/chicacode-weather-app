import { useNavigate } from "react-router-dom";
import GeneralInfo from "../components/GeneralInfo";
import useWeather from "../hooks/useWeather";

const SettingsPage = () => {
  const navigation = useNavigate();
  const { resultForecastData } = useWeather();
  return (
    <div>
      {resultForecastData?.current && <GeneralInfo />}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-success hover:bg-success-hover uppercase text-black font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => navigation("/")}
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        <i className="fa-regular fa-user text-black"></i>
                      </span>
                      <span className="text-sm text-gray-500">Personal</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        <i className="fa-regular fa-address-card"></i>
                      </span>
                      <span className="text-sm text-gray-500">Profile</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        <i className="fa fa-gear"></i>
                      </span>
                      <span className="text-sm text-gray-500">
                        Language & Regions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                  Jenna Stones
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  Vancouver, Canada
                </div>
                <div className="mb-2 text-primary mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  University of Computer Science
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a
                      href="https://github.com/settings/profile"
                      className="font-normal text-indigo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Show more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
