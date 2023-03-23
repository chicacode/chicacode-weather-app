

const AboutPage = () => {
  return (
    <div>
      <section class="container mx-auto px-6 p-10">
      <h2 class="text-4xl font-bold text-center text-primary mb-8">
        About Us
      </h2>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray font-bold mb-3">Functionality</h4>
          <p class="text-gray-600 mb-8">Our Smart Locations can be added or removed by pressing the list icon in the bottom right corner of the application, which allows the user to type in the city's name, ZIP Code or postal code or airport code.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="assets/health.svg" alt="Monitoring" />
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <img src="assets/report.svg" alt="Reporting" />
        </div>
        <div class="w-full md:w-1/2 pl-10">
          <h4 class="text-3xl text-gray font-bold mb-3">Reporting</h4>
          <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray font-bold mb-3">Syncing</h4>
          <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="assets/sync.svg" alt="Syncing" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutPage;