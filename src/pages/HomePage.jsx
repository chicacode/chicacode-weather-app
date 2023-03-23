
const HomePage = () => {
  return (
    <div>
       <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover rounded-t-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
              }}>

          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-light font-semibold text-5xl">
                      Welcome to ChicaCode Weather App.
                    </h1>
                    <p className="mt-4 text-lg text-gray">
                      This is a simple of a Landing Page where you can search
                      the Weather of your city 
                    </p>
                  </div>
                </div>

              </div>
          </div>
  
        </div>

        <section className="p-20 bg-primary-hover">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                   
                    <h6 className="text-xl text-primary">How To Use</h6>
                    <p className="mt-2 mb-4 text-gray">
                      Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                   
                    <h6 className="text-xl  text-primary">
                      About Us
                    </h6>
                    <p className="mt-2 mb-4 text-gray">
                      Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                   
                    <h6 className="text-xl text-primary">
                      Using verified API
                    </h6>
                    <p className="mt-2 mb-4 text-gray">
                      Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl text-primary"></i>
                  </div>
                  <h3 className="text-3xl text-primary-light">
                    Weather App explained
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray">
                  Through the Weather app, you can check the current weather, see the hourly forecast and view the 10-day forecast. The app also displays other types of data such as the air quality, UV index, wind, precipitation, humidity and air pressure.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-cloud text-primary-light"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray">
                            Created your profile
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i class="fas fa-sun text-yellow"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray">Search weather</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-heart text-indigo"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray">Select your favorites</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default HomePage;