import { useNavigate } from "react-router-dom";

const NoFound = () => {
  const navigation = useNavigate();
  return (
    <div className="h-96 bg-error text-light flex justify-center py-10 my-10">
      <div class="flex justify-center">
        <div class="block max-w-sm rounded-lg bg-light p-6 shadow-lg dark:bg-neutral-700">
          <h5 class="mb-2 text-xl font-medium leading-tight text-secondary dark:text-neutral-50">
            Not found
          </h5>
          <p class="mb-4 text-base text-secondary dark:text-neutral-200">
            <h5>You have landed on a page that doesn't exist!</h5>
          </p>
          <button
            type="button"
            class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={() => navigation("/")}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoFound;
