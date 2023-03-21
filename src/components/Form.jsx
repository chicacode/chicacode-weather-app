const Form = () => {
  return (
    <div className="text-primary container">
      <h1 className="py-4 text-5xl text-white text-center">Search Weather</h1>
      <div className="form">
        <form>
          <div className="form-field-city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="Enter city name"
              className="px-4 py-3"
              id="city"
              name="city"
            />
          </div>

          <div className="form-field-country">
            <label htmlFor="country">Country</label>
            <select name="country" id="country">
              <option value="">Select one country</option>
              <option value="US">United States of America</option>
              <option value="ES">Spain</option>
              <option value="MX">Mexico</option>
              <option value="BR">Brasil</option>
              <option value="CO">Colombia</option>
              <option value="VZ">Venezuela</option>
              <option value="CD">Canada</option>
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
