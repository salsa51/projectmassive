import {useEffect, React} from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export const LandingPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
    script.async = true;
    script.onload = () => {
      window.watsonAssistantChatOptions = {
        integrationID: "b8e252de-aa6a-442c-b7c1-919b7833ea65", 
        region: "us-south", 
        serviceInstanceID: "ab37157b-7f3c-4b36-b062-bc1864d28e74", 
        onLoad: async (instance) => { await instance.render(); }
      };
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const navigate = useNavigate();
  const tahap = [
    {
      img: "/public/tahap1.svg",
      tahap: "1",
      desc: "Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat ",
    },
    {
      img: "/public/tahap2.svg",
      tahap: "2",
      desc: "Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat ",
    },
    {
      img: "/public/tahap3.svg",
      tahap: "3",
      desc: "Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat ",
    },
    {
      img: "/public/tahap4.svg",
      tahap: "4",
      desc: "Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat ",
    },
  ];



  return (
    <div className='font-archivo'>
      <div className='banner'>
        <img src='/public/banner.svg' alt='banner' className='w-full' />
      </div>
      <div className='flex flex-col items-center gap-20 my-10'>
        <h1
          className='text-bold text-[64px] text-center text-shadow-white'
          style={{
            textShadow: `-1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF`,
          }}
        > 
          Membantu <br /> menemukan bahan <br /> untuk restoran anda
        </h1>
        <button
           className='w-[190px] h-[44px] text-[16px] font-normal text-white bg-black rounded-[5px] flex justify-center items-center'
          onClick={() => navigate('/marketplace')}
        >
          Belanja Sekarang
        </button>
      </div>
      <div className='sm:my-10 md:mt-20 lg:my-40 w-full h-[440px] bg-[#FFE0B5] shadow-large-top-bottom'>
        <div className='flex flex-col items-center py-10'>
          <h1 className='text-[40px] font-bold'>Pencapaian Kami</h1>
          <p className='text-[16px] opacity-60 pt-5'>
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat
          </p>
          <div className='w-full flex flex-col gap-10 sm:flex-row sm:gap-32 justify-center text-center mt-10'>
            <div className='left'>
              <h2 className='text-[32px] font-bold text-[#20922B]'>896</h2>
              <p className='text-[24px] font-bold'>Pengguna Aktif</p>
            </div>
            <div className='right'>
              <h2 className='text-[32px] font-bold text-[#20922B]'>80.976kg</h2>
              <p className='text-[24px] font-bold'>Bahan Terjual</p>
            </div>
          </div>
          <button className='w-[161px] h-[44px] bg-[#1E564D] rounded-[5px] text-white text-[16px] font-normal mt-10'
          onClick={() => navigate('/Tentangkami')}
          >
          
            Tentang Kami
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center gap-10'>
        <div>
          <h1 className='text-[40px] font-bold'>Mitra Kerjasama</h1>
        </div>
        <button className='grid sm:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col items-center gap-4'>
            <img
              src='/public/logo.svg'
              alt='logo'
              className='w-[280px] h-[164px]'
            />
            <p className='text-[25px] font-bold'>PT. Digital Foods</p>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <img
              src='/public/logo.svg'
              alt='logo'
              className='w-[280px] h-[164px]'
            />
            <p className='text-[25px] font-bold'>PT. Digital Foods</p>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <img
              src='/public/logo.svg'
              alt='logo'
              className='w-[280px] h-[164px]'
            />
            <p className='text-[25px] font-bold'>PT. Digital Foods</p>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <img
              src='/public/logo.svg'
              alt='logo'
              className='w-[280px] h-[164px]'
            />
            <p className='text-[25px] font-bold'>PT. Digital Foods</p>
          </div>
        </button>
      </div>

      <div className='my-20 text-center justify-center mx-20'>
        <h1 className='text-[40px] font-bold'>
          Cara Memesan kebutuhan anda di Digital Foods!
        </h1>
        <p className='sm:my-2 md:my-4 text-[16px] opacity-60'>
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat
          <br />
          scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna
          semper orci a tincidunt.{" "}
        </p>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 sm:gap-y-7'>
          {tahap.map((item, index) => (
            <div className='flex flex-col items-center'>
              <img src={item.img} alt='tahap' className='w-[279px] h-[256px]' />
              <p className='text-[24px] font-bold'>Tahap {item.tahap}</p>
              <p className='text-[16px] opacity-60'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center items-center pb-40'>
        <div className='w-[800px] h-[240px] bg-[#CACA66] flex flex-col gap-6 justify-center items-center rounded-[10px]'>
          <h1 className='text-[24px] font-medium'>
            Informasi lebih lanjut hubungi kontak kami
          </h1>
          <button className='w-[153px] h-[44px] bg-[#1E564D] text-white text-[16px] font-normal rounded-[5px]'>
            Kontak Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
