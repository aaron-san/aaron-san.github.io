import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Header";

export default function Layout()
{
  return (
    <div className="bg-gradient-to-b from-stone-100 to-stone-300 min-h-screen">
      <Navbar />

      <main className="mx-auto px-4 py-8 max-w-4xl">
        <Outlet />
      </main>

      <footer className="opacity-70 mt-12 py-6 border-red-600 border-t text-center">
        © {new Date().getFullYear()} Aaron's Portfolio
      </footer>
    </div>
  );
}
