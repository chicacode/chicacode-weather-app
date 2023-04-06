import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="flex items-center">
        <h6 className="text-base text-secondary font-bold">Today overview</h6>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-primary hover:text-indigo underline pr-2">
          More details
        </p>

        <div>
          <Link
            target={"_blank"}
            to={`https://github.com/chicacode`}
            className="hover:no-underline font-medium text-base text-secondary-dark"
          >
            <svg
              className="w-4 h-4 hover:text-indigo "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
