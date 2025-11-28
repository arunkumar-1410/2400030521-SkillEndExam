// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Welcome to SkillEnd College Portal
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          View department details and faculty contact information.
        </p>
        <Link
          href="/departments"
          className="inline-block px-6 py-3 rounded-lg bg-black text-white text-sm sm:text-base"
        >
          View Departments
        </Link>
      </div>
    </main>
  );
}
