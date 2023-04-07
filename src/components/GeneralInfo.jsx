const GeneralInfo = () => {
  return (
    <div>
      
      <div className="top-0 right-0 w-[20vw] bg-secondary  p-10  text-light fixed h-full">
      <div className="space-y-3">
        <div className="flex justify-between">
          <div className="flex flex-col text-grayText">
            <div className="text-2lg">city</div>
            <div className="text-sm">Country</div>
          </div>

          <div className="text-md">Hours</div>
        </div>

        <section>
          Weather Detail
          <img src="" alt="icon" />
          <div className="fles justify-between items-center">
            <div className="text-2xl">Temperature Cs</div>
            <div>Description</div>
          </div>
        </section>

        <section>Chance of Rain</section>

        <section>Sunrise & Sunset</section>
      </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
// hide-in-print z-30 fixed right-0 top-0 h-screen translate-x-full overflow-hidden w-20 lg:w-64 bg-white transition-all duration-500 p-3 bg-secondary-light shadow  pt-10 