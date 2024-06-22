import React from 'react';

const Footer = ({ children }) => {
  return (
    <footer className="bg-[#FFF2D7]">
           <div className='bg-[#FFF2D7]'>{children}</div>
      <div className='w-full h-[393px] bg-[#93BE33] bg-opacity-40 shadow-large-top py-8'>
        <div className='px-40'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-[20px] font-semibold'>Digital Foods</h1>
              <a href='#' className='text-[16px] opacity-60'>
                Home
              </a>
              <a href='#' className='text-[16px] opacity-60'>
                Tentang Kami
              </a>
              <a href='#' className='text-[16px] opacity-60'>
                Kontak
              </a>
              <a href='#' className='text-[16px] opacity-60'>
                Marketplace
              </a>
              <a href='#' className='text-[16px] opacity-60'>
                Kebijakan Privasi
              </a>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-[20px] font-semibold'>Bantuan</h1>
              <a href='#' className='text-[16px] opacity-60'>
                FAQ
              </a>
              <a href='#' className='text-[16px] opacity-60'>
                Hubungi Kami
              </a>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-[20px] font-semibold'>Social Media</h1>
              <div className='flex items-center text-[16px]'>
                <img src='/public/instagram.svg' alt='instagram' />
                <p className='opacity-60'>@digitalfoods</p>
              </div>
              <div className='flex items-center text-[16px]'>
                <img src='/public/whatsapp.svg' alt='instagram' />
                <p className='opacity-60'>+62 8111 2222 3333</p>
              </div>
              <div className='flex items-center text-[16px]'>
                <img src='/public/twitter.svg' alt='instagram' />
                <p className='opacity-60'>@digitalfoods</p>
              </div>
            </div>
            <div className='text-[16px] text-justify w-[337px]'>
              <img
                src='/public/logo.svg'
                alt='logo'
                className='w-[109px] h-[109px]'
              />
              <p className='opacity-60'>
                Digital Foods Adalah pemasokDigital Food Adalah Digital Foods
                Adalah pemasokDigital Food Adalah Digital Foods Adalah
                pemasokDigital Food Adalah Digital Foods Adalah pemasokDigital
                Food Adalah Digital Foods Adalah pemasokDigital Food Adalah
                Digital Foods Adalah pemasokDigital Food Adalah{" "}
              </p>
            </div>
          </div>
        </div>
        <div className='text-center text-[14px] font-normal mt-7'>
          <p>&copy;Copyright © 2024 Digital Foods . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
