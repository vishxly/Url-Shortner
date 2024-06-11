import exp from "constants";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
          About URL Shortener
        </h1>
        <p className="text-gray-800 text-lg mb-4">
          Welcome to our URL Shortener app! We make long URLs shorter and easier
          to share.
        </p>
        <p className="text-gray-800 text-lg mb-4">
          Our app allows you to quickly shorten any URL and customize the
          shortened link to your liking. Say goodbye to long, cumbersome URLs
          and hello to concise, shareable links!
        </p>
        <p className="text-gray-800 text-lg mb-4">
          Here are some key features of our URL Shortener:
          <ul className="list-disc ml-8">
            <li>Instantly shorten any URL with just a few clicks.</li>
            <li>
              Customize your shortened links to make them easy to remember.
            </li>
            <li>Track the number of clicks on your shortened links.</li>
            <li>
              Secure and reliable service to ensure your links are always
              accessible.
            </li>
          </ul>
        </p>
        <p className="text-gray-800 text-lg mb-4">
          We hope you find our URL Shortener app useful! If you have any
          questions or feedback, please dont hesitate to{" "}
          <Link href="/contact">
            <span className="text-blue-600 cursor-pointer">contact us</span>
          </Link>
          .
        </p>
        <p className="text-gray-800 text-lg mb-4">
          Get started now by shortening your first URL{" "}
          <Link href="/">
            <span className="text-blue-600 cursor-pointer">here</span>
          </Link>
          !
        </p>
      </div>
    </div>
  );
}
