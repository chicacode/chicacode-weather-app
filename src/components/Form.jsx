import useWeather from "../hooks/useWeather";
import { useState } from "react";


const Form = () => {
  const [alert, setAlert] = useState("");
  // custom hook
  // getData handle Function
  const { searchData, setData, getData } = useWeather();

  // destructuring objects
  const { city, country } = searchData;

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (Object.values(searchData).includes("")) {
      setAlert("All fields are required");
    }
    getData(searchData);
  };

  return (
    <div className="text-primary container">
      <h1 className="py-4 text-5xl text-white text-center">Search Weather</h1>
      {alert && (
        <div className="flex justify-center text-center items-center container mx-auto w-64 bg-error text-light font-light">
          <span className="px-0.5">
            <i className="fa-solid fa-circle-exclamation"></i>
          </span>
          {alert}
        </div>
      )}
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-field-city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="Enter city name"
              className="px-4 py-3"
              id="city"
              name="city"
              onChange={setData}
              value={city}
            />
          </div>

          <div className="form-field-country">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              onChange={setData}
              value={country}
            >
              <option value="">Select one country</option>
              <option value="AR">Argentina</option>
              <option value="BM">Bermuda</option>
              <option value="BR">Brazil</option>
              <option value="CA">Canada</option>
              <option value="CO">Colombia</option>
              <option value="CL">Chile</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="IE">Ireland</option>
              <option value="IT">Italy</option>
              <option value="IN">India</option>
              <option value="IL">Israel</option>
              <option value="JP">Japan</option>
              <option value="LB">Lebanon</option>
              <option value="MX">Mexico</option>
              <option value="ES">Spain</option>
              <option value="CH">Switzerland</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States of America</option>
              <option value="TW">Taiwan</option>
              <option value="UY">Uruguay</option>
              <option value="VE">Venezuela</option>
            </select>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value={"Get wheather"}
              className="px-4 py-3 bg-primary text-light rounded-md border-0"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
