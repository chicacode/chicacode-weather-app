
const Search = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    
       console.log("submiting data")
      };
  return (
    <div>
         <form onSubmit={handleSubmit}>
          <div className="form-field-city">
            <input
              type="text"
              placeholder="Enter city name"
              className="px-4 py-3 font-normal"
              id="city"
              name="city"
            //   onChange={setData}
            //   value={city}
            />
          </div>
          </form>

    </div>
  )
}

export default Search;