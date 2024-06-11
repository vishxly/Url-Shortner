"use client";
import React, { useState } from "react";
import Link from "next/link";
import shortenURL from "./serverActions/ShortenUrlAction";

export default function Home() {
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const originalUrl = formData.get("originalUrl") as string;

    if (originalUrl) {
      try {
        const shortUrl = await shortenURL(formData);
        setShortenedUrl(shortUrl);

        // Hide the shortened URL after 5 seconds
        setTimeout(() => {
          setShortenedUrl(null);
        }, 5000);
      } catch (error) {
        console.error("Error shortening URL:", error);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="p-10 bg-white rounded-lg shadow-2xl max-w-lg">
          <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
            URL Shorty
          </h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 flex flex-col items-center"
          >
            <input
              type="text"
              placeholder="Enter URL"
              name="originalUrl"
              className="input input-bordered w-full rounded-md px-6 py-4 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="submit"
              className="btn btn-primary w-full rounded-md py-4 px-8 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Shorten
            </button>
          </form>
          {shortenedUrl && (
            <div className="mt-6 p-4 bg-indigo-100 rounded-lg text-center">
              <p className="text-lg text-indigo-700">
                Shortened URL: {shortenedUrl}
              </p>
            </div>
          )}
        </div>
        <div className="mt-8 text-center">
          <Link href="/urls">
            <span className="btn btn-secondary w-full rounded-md py-4 px-8 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-indigo-600">
              View All Shortened URLs
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
