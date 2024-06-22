import React from "react";
// import { Cart24Outline } from "./Cart24Outline";
import { MdOutlineInfo } from "react-icons/md";
// import { DownArrow24Outline } from "./DownArrow24Outline";
import { IoList } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { CiMenuKebab } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const DetailProductBahan = () => {
     const navigate = useNavigate();
        const [jumlahPembelian, setJumlahPembelian] = useState(1);
        const hargaPerItem = 20000;
      
        const handleTambah = () => {
          setJumlahPembelian(jumlahPembelian + 1);
        };
      
        const handleKurang = () => {
          if (jumlahPembelian > 1) {
            setJumlahPembelian(jumlahPembelian - 1);
          }
        };
      
        const totalHarga = jumlahPembelian * hargaPerItem;


        const handleTambahKeranjang = () => {
   
    navigate('/keranjang');
  };
    return (
        <div className="bg-[#fff2d7] flex flex-row justify-center w-full">
            <div className="bg-[#fff2d7] overflow-hidden w-[1440px] h-[2298px] relative">
                <div className="absolute w-[1440px] h-[137px] top-[-17px] left-0">
                    <div className="absolute w-[1440px] h-[72px] top-[17px] left-0 bg-white shadow-[0px_8px_8px_2px_#00000040]">
                        <div className="inline-flex items-center gap-6 absolute top-3.5 left-28">
                            <div className="relative w-[164px] h-11" />
                            <div className="flex w-[688px] items-start relative">
                                <div className="flex w-[619px] h-11 items-center pl-3 pr-[127px] py-3 relative bg-grey-10 rounded-[8px_0px_0px_8px] border border-solid border-grey-40">
                                    <div className="flex w-[343px] items-center gap-1 relative">
                                        <div className="relative w-fit mt-[-1.00px] font-archivo-body-input font-[number:var(--archivo-body-input-font-weight)] text-grey-60 text-[length:var(--archivo-body-input-font-size)] tracking-[var(--archivo-body-input-letter-spacing)] leading-[var(--archivo-body-input-line-height)] whitespace-nowrap [font-style:var(--archivo-body-input-font-style)]">
                                            Search...
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-[69px] h-11 items-center justify-center gap-2.5 p-[3px] relative bg-[#d9d9d9] rounded-[0px_10px_10px_0px]">
                                    <CiSearch className="!relative !w-6 !h-6" />
                                </div>
                            </div>
                            <a href="/keranjang">
                            <img className="!relative !w-8 !h-8" alt="keranjang" src="keranjang.svg"/>
                            </a>
                        </div>
                        <img className="absolute w-[33px] h-[33px] top-[21px] left-[1258px]" alt="Vector" src="Vector-m.svg" />
                        <p className="absolute top-[26px] left-[1301px] [font-family:'Roboto-Bold',Helvetica] font-bold text-transparent text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                            <span className="text-[#5f5f5f] tracking-[0.05px]">Hi,</span>
                            <span className="text-[#000000] tracking-[0.05px]"> Parto</span>
                        </p>
                    </div>
                    <div className="absolute w-[1440px] h-12 top-[89px] left-0">
                        <div className="relative h-[49px]">
                            <div className="absolute w-[1440px] h-[49px] top-0 left-0">
                                <div className="inline-flex items-center gap-6 absolute top-0 left-28">
                                    <div className="flex w-[337px] items-start gap-6 relative">
                                        <div className="inline-flex h-8 items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fff2d7] rounded-[5px] border border-solid border-[#000000]">
                                            <Link to="/MarketPlace" className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Archivo-Medium',Helvetica] font-medium text-[#000000] text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                                                Semua
                                            </Link>
                                        </div>
                                        <div className="inline-flex h-8 items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#fff2d7] rounded-[5px] border border-solid border-[#000000]">
                                            <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Archivo-Medium',Helvetica] font-medium text-[#000000] text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                                                Penjualan
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
                                        <div className="inline-flex flex-col items-start gap-2.5 px-2.5 py-3 relative flex-[0_0_auto] bg-[#aeaeae]">
                                            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                                                <IoList className="!relative !w-6 !h-6" />
                                                <div className="relative w-fit [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-[#000000] text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                                                    Kategori
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex flex-col items-start gap-2.5 px-2.5 py-3 relative flex-[0_0_auto]">
                                            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                                                <GrLocation className="!relative !w-6 !h-6" />
                                                <div className="relative w-fit [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-[#000000] text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                                                    Lokasi
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="relative w-px h-[49px] mr-[-1.00px] object-cover" alt="Line" src="line-6.svg" />
                                </div>
                                <img className="absolute w-[1440px] h-px top-12 left-0 object-cover" alt="Line" src="line-1.svg" />
                            </div>
                            <div className="absolute top-[13px] left-[774px] [font-family:'Archivo-Medium',Helvetica] font-medium text-[#4e4e4e] text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                                Buah-buahan &amp; Sayuran
                            </div>
                        </div>
                    </div>
                    <a href="/ChatbotSidecol">
                  {/* <img className="chat" alt="chat" src="chat.svg" /> */}
                    <img className="absolute w-8 h-8 top-[37px] left-[1066px]" alt="Communication" src="chat.svg" />
                    </a>
                    <div className="absolute w-[272px] h-[104px] top-0 left-7">
                        <div className="relative h-[104px]">
                            <div className="w-[272px] h-[73px] top-[15px] bg-white absolute left-0" />
                            <div className="absolute w-[261px] h-[104px] top-0 left-0">
                                <div className="relative w-[259px] h-[104px]">
                                    <img
                                        className="absolute w-[109px] h-[104px] top-0 left-0 object-cover"
                                        alt="Whatsapp image"
                                        src="whatsapp-image-2024-05-07-at-19-04-1.png"
                                    />
                                    <div className="absolute w-[170px] top-[42px] left-[89px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0.40px] leading-5 whitespace-nowrap">
                                        Digital Foods
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[918px] items-start gap-2.5 absolute top-[576px] left-28">
                    <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                            Detail
                        </div>
                        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                            < MdOutlineInfo className="!relative !w-6 !h-6" />
                            <div className="relative w-fit font-archivo-heading-tiny font-[number:var(--archivo-heading-tiny-font-weight)] text-[#000000] text-[length:var(--archivo-heading-tiny-font-size)] tracking-[var(--archivo-heading-tiny-letter-spacing)] leading-[var(--archivo-heading-tiny-line-height)] whitespace-nowrap [font-style:var(--archivo-heading-tiny-font-style)]">
                                Laporkan Produk
                            </div>
                        </div>
                    </div>
                    <p className="relative self-stretch [font-family:'Archivo-Regular',Helvetica] font-normal text-[#000000] text-base tracking-[0] leading-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="flex flex-col w-64 h-[236px] items-start gap-[30px] p-3 absolute top-40 left-[1054px] bg-white rounded-2xl shadow-[0px_0px_20px_#00000073]">
                    <div className="flex flex-col w-[188px] items-start gap-4 relative flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                           
                           
                           
                           
                           
                        <div>
      <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0] leading-6 whitespace-nowrap">
        Jumlah Pembelian
      </div>
      <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
        <div 
          className="flex flex-col w-9 h-9 items-center justify-center gap-2.5 p-[5px] relative bg-[#1d5d4f] rounded-[4px_0px_0px_4px] overflow-hidden cursor-pointer"
          onClick={handleKurang}
        >
          <div className="text-white relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-xs tracking-[0] leading-3 whitespace-nowrap">
            -
          </div>
        </div>
        <div className="flex flex-col w-[46px] h-[35px] items-center justify-center gap-2.5 p-[5px] relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#000000]">
          <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-xs tracking-[0] leading-3 whitespace-nowrap">
            {jumlahPembelian}
          </div>
        </div>
        <div 
          className="flex flex-col w-9 h-9 items-center justify-center gap-2.5 p-[5px] relative bg-[#1d5d4f] rounded-[0px_4px_4px_0px] cursor-pointer"
          onClick={handleTambah}
        >
          <div className="text-[#fbf6f6] relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-xs tracking-[0] leading-3 whitespace-nowrap">
            +
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          Total Pembelian
        </div>
        <div className="relative w-fit [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-[#000000] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
          Rp. {totalHarga.toLocaleString()}
        </div>
      </div>
      <div className="flex w-[236px] items-start gap-2 relative flex-[0_0_auto] mr-[-48.00px]">
        <div className="flex w-[97px] h-[38px] items-center justify-end gap-2.5 p-2.5 relative bg-white rounded-[5px] border border-solid border-[#000000]">
          <div className="relative flex-1 mt-[-4.00px] mb-[-2.00px] [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-xs text-center tracking-[0] leading-6">
            Beli
          </div>
        </div>
        <div className="flex w-[124px] h-[38px] items-center justify-center gap-2.5 p-1 relative bg-[#1d5d4f] rounded-[1px] border border-solid border-[#000000]">
        <Link to="/keranjang"> 
          <div className="relative w-[50px] mt-[-3.00px] mb-[-1.00px] ml-[-1.50px] mr-[-1.50px] [font-family:'Archivo-Bold',Helvetica] font-bold text-white text-1xl tracking-[0.48px] leading-5"
          onClick={handleTambahKeranjang}
          >
            Tambah Keranjang
          </div>
          </Link>
        </div>
      </div>
    </div>
 







                        </div>
                    </div>
                </div>
                <div className="flex w-[918px] items-start gap-8 absolute top-40 left-28">
                    <img className="relative w-[426px] h-[376px] object-cover" alt="Rectangle" src="sawii.png" />
                    <div className="inline-flex flex-col h-[376px] items-start gap-3.5 relative flex-[0_0_auto]">
                        <div className="flex flex-col w-[457px] items-start gap-6 relative flex-[0_0_auto]">
                            <div className="flex flex-col w-[457px] h-[82px] items-start relative">
                                <div className="relative w-[457px] h-[52px] mt-[-1.00px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-[#000000] text-2xl tracking-[0] leading-[normal]">
                                    Sayur Kol
                                </div>
                                <div className="w-32 h-8 top-11 rounded-[5px] border border-solid border-[#000000] absolute left-0  " />
                                <span className="[font-family:'Archivo-SemiBold',Helvetica] font-semibold text-[#000000] text-sm tracking-[0] leading-[normal] ">
                                    Diskon s/d 5%
                                </span>
                            </div>
                            <p className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-transparent text-[32px] tracking-[0] leading-6 whitespace-nowrap">
                                <span className="text-[#000000]">Rp. 20.000 </span>
                                <span className="text-[#9b9b9b]">/ pcs</span>
                            </p>
                            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                                <div className="inline-flex items-center gap-[52px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-[#000000] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                                        Kategori
                                    </div>
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Regular',Helvetica] font-normal text-[#000000] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                                        Buah-buahan dan sayuran
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-[18px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-[#000000] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                                        Sub-Kategori
                                    </div>
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Regular',Helvetica] font-normal text-[#000000] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                                        Sayuran
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-[31px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-[#000000] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                                        Persediaan
                                    </div>
                                    <div className="mt-[-1.00px] text-[#000000] text-base leading-[normal] relative w-fit [font-family:'Archivo-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                        30 pcs
                                    </div>
                                </div>
                                <div className="inline-flex items-start gap-[69px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-[#000000] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                                        Model
                                    </div>
                                    <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                                        <div className="inline-flex items-start gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-[#1d5d4f] rounded-[5px] border border-solid border-[#000000]">
                                            <div className="mt-[-1.00px] text-white text-base leading-3 relative w-fit [font-family:'Archivo-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                                1 Kg
                                            </div>
                                        </div>
                                        <div className="inline-flex items-start gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] rounded-[5px] border border-solid border-[#000000]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Regular',Helvetica] font-normal text-[#000000] text-base tracking-[0] leading-3 whitespace-nowrap">
                                                2 Kg
                                            </div>
                                        </div>
                                        <div className="inline-flex items-start gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] rounded-[5px] border border-solid border-[#000000]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Regular',Helvetica] font-normal text-[#000000] text-base tracking-[0] leading-3 whitespace-nowrap">
                                                3 Kg
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[414px] items-start justify-between relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                                Distribusi
                            </div>
                            <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
                                <div className="inline-flex items-start gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#1e564d] rounded-[5px]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-3 whitespace-nowrap">
                                        Kami Antar
                                    </div>
                                </div>
                                <div className="inline-flex items-start gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[5px] border border-solid border-gray">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Regular',Helvetica] font-normal text-gray text-base tracking-[0] leading-3 whitespace-nowrap">
                                        Ambil Sendiri
                                    </div>
                                </div>
                                <div className="inline-flex items-start gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[5px] border border-solid border-gray">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Regular',Helvetica] font-normal text-gray text-base tracking-[0] leading-3 whitespace-nowrap">
                                        Kurir
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[915px] items-start gap-2.5 p-2.5 absolute top-[794px] left-28">
                    <div className="inline-flex flex-col items-start gap-[5px] p-2.5 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-base tracking-[0] leading-4 whitespace-nowrap">
                            ULASAN TERBARU
                        </div>
                        <div className="text-[#000000] text-xs leading-3 relative w-fit [font-family:'Archivo-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                            65 Ulasan
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[5px] p-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                                <div className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 p-2.5 relative bg-[#ababab] rounded-[20px]">
                                    <div className="relative w-fit mt-[-0.50px] [font-family:'Archivo-Regular',Helvetica] font-normal text-[#000000] text-[11px] tracking-[0] leading-[11px] whitespace-nowrap">
                                        C
                                    </div>
                                </div>
                                <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-[13px] tracking-[0] leading-[11px] whitespace-nowrap">
                                    Claricia
                                </div>
                            </div>
                            <CiMenuKebab className="!relative !w-6 !h-6" />
                        </div>
                        <div className="inline-flex items-center gap-px relative flex-[0_0_auto]">
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            <div className="text-[#676161] text-[9px] leading-[11px] relative w-fit [font-family:'Archivo-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                3 hari lalu
                            </div>
                        </div>
                        <p className="relative self-stretch h-[60px] [font-family:'Archivo-Regular',Helvetica] font-normal text-black-alpha60 text-[11px] tracking-[0.22px] leading-6">
                            Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem
                            ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-[5px] p-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                                <div className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 p-2.5 relative bg-[#ababab] rounded-[20px]">
                                    <div className="relative w-fit mt-[-0.50px] [font-family:'Archivo-Regular',Helvetica] font-normal text-[#000000] text-[11px] tracking-[0] leading-[11px] whitespace-nowrap">
                                        A
                                    </div>
                                </div>
                                <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    Andrew
                                </div>
                            </div>
                            <CiMenuKebab className="!relative !w-6 !h-6" />
                        </div>
                        <div className="inline-flex items-center gap-px relative flex-[0_0_auto]">
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            <div className="text-[#676161] text-[9px] leading-[11px] relative w-fit [font-family:'Archivo-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                3 hari lalu
                            </div>
                        </div>
                        <p className="relative self-stretch [font-family:'Archivo-Regular',Helvetica] font-normal text-[#0c0d1499] text-[11px] tracking-[0.22px] leading-6">
                            Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean
                            vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor.
                            Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et.
                            Mauris dolor vestibulum et lacus a ante orci.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-[5px] p-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                                <div className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 p-2.5 relative bg-[#ababab] rounded-[20px]">
                                    <div className="relative w-fit mt-[-0.50px] [font-family:'Archivo-Regular',Helvetica] font-normal text-[#000000] text-[11px] tracking-[0] leading-[11px] whitespace-nowrap">
                                        J
                                    </div>
                                </div>
                                <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    Josh
                                </div>
                            </div>
                            <CiMenuKebab className="!relative !w-6 !h-6" />
                        </div>
                        <div className="inline-flex items-center gap-px relative flex-[0_0_auto]">
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            <div className="text-[#676161] text-[9px] leading-[11px] relative w-fit [font-family:'Archivo-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                3 hari lalu
                            </div>
                        </div>
                        <p className="relative self-stretch [font-family:'Archivo-Regular',Helvetica] font-normal text-[#0c0d1499] text-[11px] tracking-[0.22px] leading-6">
                            Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean
                            vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor.
                            Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et.
                            Mauris dolor vestibulum et lacus a ante orci.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-[5px] p-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                                <div className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 p-2.5 relative bg-[#ababab] rounded-[20px]">
                                    <div className="relative w-fit mt-[-0.50px] [font-family:'Archivo-Regular',Helvetica] font-normal text-[#000000] text-[11px] tracking-[0] leading-[11px] whitespace-nowrap">
                                        S
                                    </div>
                                </div>
                                <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-[13px] tracking-[0] leading-[11px] whitespace-nowrap">
                                    Steve
                                </div>
                            </div>
                            <CiMenuKebab className="!relative !w-6 !h-6" />
                        </div>
                        <div className="inline-flex items-center gap-px relative flex-[0_0_auto]">
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            <div className="text-[#676161] text-[9px] leading-[11px] relative w-fit [font-family:'Archivo-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                3 hari lalu
                            </div>
                        </div>
                        <p className="relative self-stretch [font-family:'Archivo-Regular',Helvetica] font-normal text-[#0c0d1499] text-[11px] tracking-[0.22px] leading-6">
                            Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean
                            vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor.
                            Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et.
                            Mauris dolor vestibulum et lacus a ante orci.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-[5px] p-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                                <div className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 p-2.5 relative bg-[#ababab] rounded-[20px]">
                                    <div className="relative w-fit mt-[-0.50px] [font-family:'Archivo-Regular',Helvetica] font-normal text-[#000000] text-[11px] tracking-[0] leading-[11px] whitespace-nowrap">
                                        S
                                    </div>
                                </div>
                                <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-[#000000] text-[13px] tracking-[0] leading-[11px] whitespace-nowrap">
                                    Steve
                                </div>
                            </div>
                            <CiMenuKebab className="!relative !w-6 !h-6" />
                        </div>
                        <div className="inline-flex items-center gap-px relative flex-[0_0_auto]">
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            < CiStar className="!relative !w-4 !h-4" />
                            <div className="text-[#676161] text-[9px] leading-[11px] relative w-fit [font-family:'Archivo-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                                3 hari lalu
                            </div>
                        </div>
                        <p className="relative self-stretch [font-family:'Archivo-Regular',Helvetica] font-normal text-[#0c0d1499] text-[11px] tracking-[0.22px] leading-6">
                            Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean
                            vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor.
                            Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et.
                            Mauris dolor vestibulum et lacus a ante orci.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        {/* <DownArrow24Outline className="!relative !w-12 !h-12" /> */}
                    </div>
                </div>
                <img className="absolute w-[1440px] h-[393px] top-[1930px] left-0" alt="Group" src="group-103.png" />
            </div>
        </div>
    );
};

export default DetailProductBahan