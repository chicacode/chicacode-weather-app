import { Selector } from "./Selector";

const ChartHeader = () => {
  return (
    <div>
      <div className="flex justify-between text-secondary text-lg mt-10 mr-32">
        <h5 className="capitalize mr-10">average weekly temperature</h5>
        <div className="w-72">
        <Selector />
        </div>
       
      </div>
    </div>
  );
};

export default ChartHeader;
