import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout()
{
  return (
    <div className="bg-gradient-to-b from-stone-100 to-stone-300 min-h-screen">
      <Header />

      <main className="mx-auto px-4 py-8 max-w-4xl">
        <Outlet />
      </main>

      <footer className="opacity-70 mt-12 py-6 border-stone-50 border-t text-center">
        © {new Date().getFullYear()} Aaron's Portfolio
      </footer>
    </div>
  );
}
