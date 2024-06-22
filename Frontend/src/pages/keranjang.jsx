import React from "react";
// import { Cart24Outline } from "./Cart24Outline";
import { CiSearch } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Keranjang = () => {
    return (
        <div className="bg-[#fff2d7] flex flex-row justify-center w-full">
            <div className="bg-[#fff2d7] overflow-hidden w-[1440px] h-[1456px] relative">
                <div className="absolute w-[1440px] h-[104px] -top-4 left-0">
                    <div className="absolute w-[1440px] h-[77px] top-4 left-0 bg-white shadow-[0px_8px_8px_2px_#00000040]">
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
                                    <CiSearch className="!relative !w-6 !h-6"  />
                                </div>
                            </div>
                          
                        </div>
                        <img className="absolute w-[33px] h-[33px] top-[21px] left-[1258px]" alt="Vector" src="Vector-m.svg" />
                        <p className="absolute top-[26px] left-[1301px] [font-family:'Roboto-Bold',Helvetica] font-bold text-transparent text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                            <span className="text-[#5f5f5f] tracking-[0.05px]">Hi,</span>
                            <span className="text-black tracking-[0.05px]"> Parto</span>
                        </p>
                    </div>
                    <Link to="/ChatbotSidecol">
                    <img className="absolute w-8 h-23 top-9 left-[1020px]" alt="Communication" src="chat.svg" />
                    </Link>
                    <div className="w-[272px] left-[19px] absolute h-[104px] top-0">
                        <div className="relative h-[104px]">
                            <div className="absolute w-[272px] h-[73px] top-[15px] left-0 bg-white" />
                            <div className="w-[261px] left-0 absolute h-[104px] top-0">
                                <div className="relative w-[259px] h-[104px]">
                                <Link to="/LandingPage">
                                    <img
                                        className="h-[104px] top-0 left-0 absolute w-[109px] object-cover"
                                        alt="Whatsapp image"
                                        src="whatsapp-image-2024-05-07-at-19-04-1.png"
                                    />
                                     </Link>
                                    <div className="absolute w-[170px] top-[42px] left-[89px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-xl tracking-[0.40px] leading-5 whitespace-nowrap">
                                        Digital Foods
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute w-[1440px] h-[1023px] top-[1089px] left-0 bg-[url(/group-103.png)] bg-[100%_100%]">
                    <img
                        className="h-[109px] top-[25px] left-[1106px] absolute w-[109px] object-cover"
                        alt="Whatsapp image"
                        src="whatsapp-image-2024-05-07-at-19-04-2.png"
                    />
                    <p className="absolute w-[337px] top-[122px] left-[992px] font-archivo-body-big-paragraph font-[number:var(--archivo-body-big-paragraph-font-weight)] text-[#00000099] text-[length:var(--archivo-body-big-paragraph-font-size)] text-justify tracking-[var(--archivo-body-big-paragraph-letter-spacing)] leading-[var(--archivo-body-big-paragraph-line-height)] [font-style:var(--archivo-body-big-paragraph-font-style)]">
                        <span className="tracking-[var(--archivo-body-big-paragraph-letter-spacing)] font-archivo-body-big-paragraph [font-style:var(--archivo-body-big-paragraph-font-style)] font-[number:var(--archivo-body-big-paragraph-font-weight)] leading-[var(--archivo-body-big-paragraph-line-height)] text-[length:var(--archivo-body-big-paragraph-font-size)]">
                            Digital Foods Adalah pemasokDigital Food Adalah Digital Foods Adalah pemasokDigital Food Adalah Digital
                            Foods Adalah pemasokDigital Food Adalah Digital Foods Adalah pemasokDigital Food Adalah Digital Foods
                            Adalah pemasokDigital Food Adalah Digital Foods Adalah pemasokDigital Food Adalah{" "}
                        </span>
                    </p>
                </div> */}
                <div className="absolute top-[120px] left-[114px] [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0.64px] leading-5 whitespace-nowrap">
                    Keranjang Belanja
                </div>
                <div className="absolute top-[305px] left-[388px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Kembang Kol
                </div>
                <div className="top-[305px] absolute left-[664px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Rp. 20.000
                </div>
                <div className="top-[305px] left-[1084px] absolute [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Rp. 20.000
                </div>
                <div className="absolute top-[354px] left-[388px] [font-family:'Archivo-Medium',Helvetica] font-medium text-[#898989] text-xl tracking-[0.40px] leading-5 whitespace-nowrap">
                    1Kg
                </div>
                 <Link to="/DetailProductBahan">
                <IoChevronBack className="absolute w-[68px] h-11 top-[109px] left-7 color-#02040F" />
                </Link>
                <img
                    className="absolute w-[150px] h-[139px] top-[277px] left-40 object-cover"
                    alt="Rectangle"
                    src="sawii.png"
                />
                <div className="flex flex-col w-[25px] h-[25px] items-center justify-center gap-2.5 p-[5px] absolute top-[303px] left-[893px] bg-white rounded-[4px_0px_0px_4px] overflow-hidden border border-solid border-black">
                    <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3 whitespace-nowrap">
                        -
                    </div>
                </div>
                <div className="flex flex-col w-9 h-[25px] items-center justify-center gap-2.5 p-[5px] absolute top-[303px] left-[918px] bg-white border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-black">
                    <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3 whitespace-nowrap">
                        1
                    </div>
                </div>
                <div className="flex flex-col w-[25px] h-[25px] items-center justify-center gap-2.5 p-[5px] absolute top-[303px] left-[954px] bg-white rounded-[0px_4px_4px_0px] border border-solid border-black">
                    <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3 whitespace-nowrap">
                        +
                    </div>
                </div>
                <RiDeleteBin5Fill className="absolute w-[51px] h-[88px] top-[285px] left-[1280px]"  />
                <img
                    className="absolute w-[35px] h-[35px] top-[324px] left-[84px] object-cover"
                    alt="Rectangle"
                    src="Rectangle112.png"
                />
                <div className="absolute top-[512px] left-[388px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Selada
                </div>
                <div className="top-[512px] absolute left-[664px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Rp. 5.000
                </div>
                <div className="absolute top-[512px] left-[1084px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Rp. 5.000
                </div>
                <div className="top-[561px] absolute left-[388px] [font-family:'Archivo-Medium',Helvetica] font-medium text-[#898989] text-xl tracking-[0.40px] leading-5 whitespace-nowrap">
                    1Kg
                </div>
                <img
                    className="absolute w-[150px] h-[139px] top-[484px] left-40 object-cover"
                    alt="Rectangle"
                    src="seladaa.png"
                />
                <div className="flex flex-col w-[25px] h-[25px] items-center justify-center gap-2.5 p-[5px] absolute top-[510px] left-[893px] bg-white rounded-[4px_0px_0px_4px] overflow-hidden border border-solid border-black">
                    <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3 whitespace-nowrap">
                        -
                    </div>
                </div>
                <div className="flex flex-col w-9 h-[25px] items-center justify-center gap-2.5 p-[5px] absolute top-[510px] left-[918px] bg-white border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-black">
                    <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3 whitespace-nowrap">
                        1
                    </div>
                </div>
                <div className="flex flex-col w-[25px] h-[25px] items-center justify-center gap-2.5 p-[5px] absolute top-[510px] left-[954px] bg-white rounded-[0px_4px_4px_0px] border border-solid border-black">
                    <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3 whitespace-nowrap">
                        +
                    </div>
                </div>
                <RiDeleteBin5Fill  className="top-[492px] absolute w-[51px] h-[88px] left-[1280px]" />
                <div className="absolute w-[35px] h-[35px] top-[531px] left-[84px] border border-solid border-black" />
                <div className="absolute top-[703px] left-[388px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Cabai
                </div>
                <div className="top-[703px] absolute left-[664px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Rp. 8.000
                </div>
                <div className="absolute top-[703px] left-[1084px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Rp. 8.000
                </div>
                <div className="top-[752px] absolute left-[388px] [font-family:'Archivo-Medium',Helvetica] font-medium text-[#898989] text-xl tracking-[0.40px] leading-5 whitespace-nowrap">
                    1Kg
                </div>
                <img
                    className="absolute w-[150px] h-[139px] top-[675px] left-40 object-cover"
                    alt="Rectangle"
                    src="cabaii.png"
                />
                <div className="flex flex-col w-[25px] h-[25px] items-center justify-center gap-2.5 p-[5px] absolute top-[701px] left-[893px] bg-white rounded-[4px_0px_0px_4px] overflow-hidden border border-solid border-black">
                    <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3 whitespace-nowrap">
                        -
                    </div>
                </div>
                <div className="flex flex-col w-9 h-[25px] items-center justify-center gap-2.5 p-[5px] absolute top-[701px] left-[918px] bg-white border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-black">
                    <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3 whitespace-nowrap">
                        1
                    </div>
                </div>
                <div className="flex flex-col w-[25px] h-[25px] items-center justify-center gap-2.5 p-[5px] absolute top-[701px] left-[954px] bg-white rounded-[0px_4px_4px_0px] border border-solid border-black">
                    <div className="relative w-fit [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3 whitespace-nowrap">
                        +
                    </div>
                </div>
                <RiDeleteBin5Fill className="top-[683px] absolute w-[51px] h-[88px] left-[1280px]"  />
                <div className="absolute w-[35px] h-[35px] top-[722px] left-[84px] border border-solid border-black" />
                <img
                    className="w-[1250px] h-[3px] top-[438px] left-[84px] absolute object-cover"
                    alt="Line"
                    src="Line12.png"
                />
                <img
                    className="w-[1250px] h-[3px] top-[645px] left-[79px] absolute object-cover"
                    alt="Line"
                    src="Line13.png"
                />
                <img
                    className="w-[1250px] h-[3px] top-[836px] left-[79px] absolute object-cover"
                    alt="Line"
                    src="Line14.png"
                />
                <div className="absolute top-[892px] left-[916px] [font-family:'Archivo-Medium',Helvetica] font-medium text-[#898989] text-xl tracking-[0.40px] leading-5 whitespace-nowrap">
                    Subtotal Produk
                </div>
                <div className="absolute w-[413px] h-11 top-[969px] left-[916px] rounded-[15px]">
                  
                    <div className="absolute w-[413px] h-11 top-0 left-0 bg-neutral-700 rounded-[15px]" />
                    <Link to="/pembayaran">
                    <div className="absolute w-[124px] top-[11px] left-[145px] [font-family:'Archivo-Bold',Helvetica] font-bold text-white text-1xl ">
                        Check Out
                    </div>
                    </Link>
                </div>
                <div className="top-[884px] left-[1174px] absolute [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Rp. 20.000
                </div>
                <img className="w-[410px] h-px top-[944px] left-[919px] absolute object-cover" alt="Line" src="line-15.svg" />
                <div className="absolute w-[35px] h-[35px] top-[213px] left-[84px] border border-solid border-black" />
                <div className="absolute top-[220px] left-[163px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-2xl tracking-[0.48px] leading-5 whitespace-nowrap">
                    Pilih Semua
                </div>
            </div>
        </div>
    );
};
export default Keranjang
