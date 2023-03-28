import Search from "./Search";

const Header = () => {



  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const date = new Date();
const month = months[date.getMonth()];;
const year = date.getFullYear();
const today = date.toDateString();

console.log("month",month)
  return (
    <div className="container mx-auto mt-2 p-4">
    <div className="grid grid-col-1 mb-6 lg:grid-cols-3 items-center">
     
        <div className=" flex flex-col text-sm font-medium text-secondary">
          <div className="flex items-center">
          <h6 className="text-lg text-secondary font-bold pr-1">{month}, </h6>
          <h6 className="text-lg text-secondary font-bold">{year}</h6>
          </div>
       
        <h6 className="text-sm text-grayText font-medium">{today}</h6>
        </div>
      
     
        <div className="text-sm font-medium text-secondary pt-8">
        <Search />
        </div>
    
      <span className="flex justify-end px-4 py-5">
        <span className="text-sm font-medium text-secondary px-2">
        <svg xmlns="http://www.w3.org/2000/svg"   fill="none"
          className="w-5 h-5 hover:cursor-pointer hover:text-primary-light"
          viewBox="0 0 24 24"
          stroke="#BDBDC0"
          strokeWidth={1}
          ><path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z"/></svg>
        </span>
        <span className="text-sm font-medium text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg"  className="w-4 h-4 hover:cursor-pointer hover:text-primary-light"
          viewBox="0 0 24 24"
          stroke="#BDBDC0"
          strokeWidth={1}><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z"/></svg>
        </span>
      </span>
    </div>
</div>

  );
};

export default Header;
