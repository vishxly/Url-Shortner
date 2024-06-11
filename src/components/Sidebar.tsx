import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md overflow-y-auto">
      <div className="flex flex-col h-full">
        <div className="p-4">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            URL Shorty
          </Link>
        </div>
        <nav className="flex-1 py-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/urls"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-md"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Shortened URLs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-md"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;