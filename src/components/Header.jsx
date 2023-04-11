import Search from "./Search";

const Header = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const today = date.toDateString();

  return (
    <div className="mt-4 pr-44">
      <div className="grid grid-col-1 md:grid-cols-2 gap-1 justify-center items-center ">
        <div className=" flex flex-col text-sm font-medium text-secondary">
          <div className="flex items-center">
            <h6 className="text-lg text-secondary font-bold pr-1">{month}, </h6>
            <h6 className="text-lg text-secondary font-bold">{year}</h6>
          </div>

          <h6 className="text-sm text-grayText font-medium">{today}</h6>
        </div>

        <div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
