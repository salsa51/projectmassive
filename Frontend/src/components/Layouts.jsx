import React from "react";
import { Link } from "react-router-dom";

const NavLayout = ({ children }) => {
  return (
    <main className="mt-0"> {/* Tambahkan margin top di sini */}
      <div className='w-full h-30 z-40 bg-emerald-600 px-10 font-archivo shadow-large-bottom'>
        <nav className='flex gap-2 text-18 font-normal items-center w-full justify-between h-20'>
          <div className='flex items-center gap-4'>
            <Link to={"/"} className='flex items-center'>
              <img
                src='/logo.svg' // pastikan path logo.svg sesuai dengan struktur proyek
                className='w-12 h-12' // ubah ukuran logo sesuai kebutuhan
                alt='Logo'
              />
              <h1 className='text-20 font-bold font-poppins'>
                Digital Foods
              </h1>
            </Link>
          </div>
          <div className='flex flex-row gap-8'>
            <Link
              to={"/"}
              className='text-93BD36 text-lg transition-colors hover:underline hover:underline-offset-4'
            >
              Home
            </Link>
            <Link
              to={"/TentangKami"}
              className='text-black text-lg transition-colors hover:underline hover:underline-offset-4'
            >
              Tentang Kami
            </Link>
            <Link
              to={"/Kontak"}
              className='text-black text-lg transition-colors hover:underline hover:underline-offset-4'
            >
              Kontak
            </Link>
            <Link
              to={"/MarketPlace"}
              className='text-black text-lg transition-colors hover:underline hover:underline-offset-4'
            >
              Marketplace
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <Link to="/SignIn" className='px-4 py-2 bg-black text-white font-medium text-lg rounded-md hover:bg-gray-700'>
              Masuk
            </Link>
            <Link to="/SignUp" className='px-4 py-2 bg-black text-white font-medium text-lg rounded-md hover:bg-gray-700'>
              Daftar
            </Link>
          </div>
        </nav>
      </div>
      {children}
    </main>
  );
};

export default NavLayout;
