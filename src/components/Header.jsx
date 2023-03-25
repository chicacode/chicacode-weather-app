import Search from "./Search";

const Header = () => {
  return (
    <div className="container mx-auto mt-2 p-4">
    <div className="grid grid-col-1 mb-6 lg:grid-cols-3 items-center">
     
        <div className="text-sm font-medium text-secondary">
        <h2>Title Date</h2>
        </div>
      
     
        <div className="text-sm font-medium text-secondary pt-8">
        <Search />
        </div>
    
      <span className="flex justify-end px-4 py-5">
        <span className="text-sm font-medium text-secondary px-2">
          Icon
        </span>
        <spab className="text-sm font-medium text-secondary">
          Icon
        </spab>
      </span>
    </div>
</div>

  );
};

export default Header;
