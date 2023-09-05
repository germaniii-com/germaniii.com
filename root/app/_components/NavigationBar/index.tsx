import Link from "next/link";

const navigationButtons: string[] = ["Home", "Projects"];

const NavigationBar = () => {
  return (
    <nav className="bg-white dark:bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-black font-medium text-center p-3 rounded \
            hover:text-white hover:bg-black \
            dark:text-white dark:hover:text-black dark:hover:bg-white"
          >
            Blog
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-black">
            {navigationButtons.map((button: string) => {
              return (
                <li key={2 + button}>
                  <Link
                    key={1 + button}
                    href={`/${button.toLocaleLowerCase()}`}
                    className="block text-black p-3 rounded \
                     hover:text-white hover:bg-black \
                     dark:text-white dark:hover:text-black dark:hover:bg-white "
                    aria-current="page"
                  >
                    {button}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
