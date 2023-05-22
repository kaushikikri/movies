import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-800 border-t  dark:border-gray-800 ">
      <div className="w-full p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©2023 <Link to="/" className="hover:underline">movieApp</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kaushiki-kumari/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Linkdin</a>
          </li>
          <li>
            <a href="https://twitter.com/kaushikik690" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
