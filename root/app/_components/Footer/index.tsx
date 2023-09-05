import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black m-5">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/home" className="flex items-center mb-3 sm:mb-0">
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              German III
            </span>
          </Link>
          <ul
            className="flex flex-wrap items-center mb-6 \
                        text-sm font-medium text-black sm:mb-0 dark:text-white  \
                        sm:ml-5"
          >
            <li>
              <a href="#" className="mr-4 md:mr-6 ">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 md:mr-6">
                G-mail
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 md:mr-6 ">
                Github
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 md:mr-6 ">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 md:mr-6 ">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 md:mr-6 ">
                Youtube
              </a>
            </li>
          </ul>
          <span className="block text-xs text-gray-500 text-baseline dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
