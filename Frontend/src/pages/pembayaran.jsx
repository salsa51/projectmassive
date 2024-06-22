import React from "react";
import { CiSearch } from "react-icons/ci";
import "../styles/pembayaran.css";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

export const MenuPayment = () => {
    return (
        <div className="bg-[#fff2d7] flex flex-row justify-center w-full">
            <div className="bg-[#fff2d7] overflow-hidden w-[1440px] h-[1397px] relative">
                <div className="absolute w-[1444px] h-[768px] -top-4 -left-0.5">
                    <div className="absolute w-[1440px] h-[72px] top-4 left-0.5 bg-white shadow-[0px_8px_8px_2px_#00000040]">
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
                            <Link to="/keranjang">
                            <img className="icon-cart-outline" alt="keranjang" src="keranjang.svg" />
                            </Link>
                        </div>
                        <img className="absolute w-[33px] h-[33px] top-[21px] left-[1258px]" alt="Vector" src="Vector-m.svg" />
                        <p className="absolute top-[26px] left-[1301px] [font-family:'Roboto-Bold',Helvetica] font-bold text-transparent text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                            <span className="text-[#5f5f5f] tracking-[0.05px]">Hi,</span>
                            <span className="text-black tracking-[0.05px]"> Parto</span>
                        </p>
                        <Link to="/ChatbotSidecol">
                        <img className="absolute w-8 h-8 top-[21px] left-[1064px]" alt="Communication" src="chat.svg" />
                        </Link>
                    </div>
                    <img className="absolute w-[1440px] h-[419px] top-[225px] left-0.5" src="rectangle-100.svg" />
                    <img className="absolute w-[1444px] h-[261px] top-[90px] left-0" alt="Rectangle" src="rectangle-109.png" />
                    <div className="absolute top-[138px] left-[94px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                        Alamat Pengiriman
                    </div>
                    <p className="absolute w-[796px] top-[188px] left-[337px] [font-family:'Archivo-Regular',Helvetica] font-normal text-black text-base text-justify tracking-[0.32px] leading-6">
                        Street: Jl Purnawarman 36 B, Jawa Barat. City: Jawa Barat. State/province/area: Bandung. Phone number:
                        0-22-426-5482. Zip code: 40117.
                    </p>
                    <div className="absolute top-[181px] left-[94px] [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                        Parto
                    </div>
                    <div className="absolute top-[212px] left-[94px] [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                        (+62) 89536435436
                    </div>
                    <div className="absolute w-[1444px] h-[174px] top-[339px] left-0 shadow-[0px_4px_4px_#00000040]">
                        <div className="absolute w-[1440px] h-[90px] top-[76px] left-0 bg-[url(/rectangle-104.png)] bg-[100%_100%]">
                            <div className="absolute top-[31px] left-[162px] [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                                Sayur Kol
                            </div>
                            <div className="left-[731px] absolute top-[31px] [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                                Rp 20.000
                            </div>
                            <div className="absolute top-[31px] left-[1250px] [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                                Rp 20.000
                            </div>
                            <div className="left-[922px] absolute top-[31px] [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                                1
                            </div>
                            <img
                                className="absolute w-[82px] h-[72px] top-2 left-[55px] object-cover"
                                alt="Rectangle"
                                src="sawii.png"
                            />
                        </div>
                        <div className="absolute top-[11px] left-11 [font-family:'Archivo-ExtraBold',Helvetica] font-extrabold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                            Produk Dipesan
                        </div>
                        <div className="absolute top-[11px] left-[720px] [font-family:'Archivo-ExtraBold',Helvetica] font-extrabold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                            Harga Satuan
                        </div>
                        <div className="absolute top-[11px] left-[899px] [font-family:'Archivo-ExtraBold',Helvetica] font-extrabold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                            Jumlah
                        </div>
                        <div className="absolute top-[11px] left-[1230px] [font-family:'Archivo-ExtraBold',Helvetica] font-extrabold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                            Subtotal Produk
                        </div>
                        {/* <img className="absolute w-[1440px] h-0.5 -top-0.5 left-0 object-cover" alt="Line" src="line-11.png" /> */}
                       
                    </div>
                    <div className="absolute w-[1440px] h-[257px] top-[511px] left-0.5 shadow-[0px_4px_4px_#00000040]">
                        <div className="relative h-[255px] top-0.5 bg-[url(/rectangle-101.png)] bg-[100%_100%]">
                            <div className="absolute w-[1440px] h-[78px] top-[53px] left-0 bg-[url(/rectangle-105.png)] bg-[100%_100%]">
                                <div className="absolute top-8 left-[30px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                                    Pesan :
                                </div>
                                <div className="absolute top-2 left-[747px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                                    Reguler
                                </div>
                                <p className="absolute top-[41px] left-[746px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                                    Garansi tiba : 16 - 17 Mei
                                </p>
                                <div className="absolute top-2 left-[492px] [font-family:'Archivo-Medium',Helvetica] font-medium text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                                    Opsi Pengiriman :
                                </div>
                                <div className="absolute top-2 left-[1250px] [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                                    Rp 20.000
                                </div>
                                <div className="absolute w-[255px] h-[29px] top-[30px] left-[152px] bg-[#ccd5df]">
                                    <div className="absolute top-0.5 left-2.5 [font-family:'Archivo-Thin',Helvetica] font-thin text-black text-[10px] text-justify tracking-[0.20px] leading-6 whitespace-nowrap">
                                        (Opsional) Tinggalkan pesanan kepenjual
                                    </div>
                                </div>
                            </div>
                            <div className="absolute w-[318px] h-[49px] top-[180px] left-[1091px] bg-[url(/rectangle-106.svg)] bg-[100%_100%]">
                                <p className="absolute top-[9px] left-[9px] [font-family:'Archivo-Medium',Helvetica] font-normal text-transparent text-base text-justify tracking-[0.32px] leading-6 whitespace-nowrap">
                                    <span className="font-medium text-[#959595] tracking-[0.05px]">Total Pesanan (1 Produk): </span>
                                    <span className="font-medium text-black tracking-[0.05px]">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="[font-family:'Archivo-Black',Helvetica] font-black text-black tracking-[0.05px]">
                                        {" "}
                                        Rp40.000
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <GrLocation className="absolute w-7 h-11 top-[129px] left-[53px]"  />
                    <div className="absolute w-[272px] h-[104px] top-0 left-5">
                        <div className="relative h-[104px]">
                            <div className="absolute w-[272px] h-[73px] top-[15px] left-0 bg-white" />
                            <div className="absolute w-[261px] h-[104px] top-0 left-0">
                                <div className="relative w-[259px] h-[104px]">
                                <Link to="/DetailProductBahan">
                                    <img
                                        className="absolute w-[109px] h-[104px] top-0 left-0 object-cover"
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
                
                <div className="absolute w-[1444px] h-[275px] top-[752px] -left-0.5 bg-[url(/rectangle-103.svg)] bg-[100%_100%]">
                    <div className="absolute w-[98px] h-[47px] top-8 left-[325px]">
                        <div className="absolute top-0 left-0 [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-black text-base text-justify tracking-[0.16px] leading-6 whitespace-nowrap">
                            Bank BCA
                        </div>
                        <div className="absolute top-[23px] left-0 [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-black text-base text-justify tracking-[0.16px] leading-6 whitespace-nowrap">
                            Bank Mandiri
                        </div>
                    </div>
                    <div className="absolute w-[287px] h-[47px] top-11 left-[1093px]">
                        <p className="absolute top-0 left-0 [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-transparent text-base text-justify tracking-[0.16px] leading-6 whitespace-nowrap">
                            <span className="text-[#7b7b7b] tracking-[0.03px]">
                                Subtotal untuk produk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span className="text-black tracking-[0.03px]">Rp20.000</span>
                        </p>
                        <p className="absolute w-[287px] top-[23px] left-0 [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-transparent text-base text-justify tracking-[0.16px] leading-6">
                            <span className="text-[#7c7c7c] tracking-[0.03px]">Total Ongkos  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="text-black tracking-[0.03px]">
                                
                                Rp20.000
                            </span>
                        </p>
                    </div>
                    <p className="absolute w-[287px] top-[91px] left-[1093px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-transparent text-base text-justify tracking-[0.16px] leading-6">
                        <span className="text-[#7c7c7c] tracking-[0.03px]">Biaya Layanan </span>
                        <span className="text-black tracking-[0.03px]">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp1.000
                        </span>
                    </p>
                    <p className="absolute w-[278px] top-[115px] left-[1093px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-transparent text-base text-justify tracking-[0.16px] leading-6">
                        <span className="text-[#7c7c7c] tracking-[0.03px]">Biaya Penanganan </span>
                        <span className="text-black tracking-[0.03px]">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp1.000
                        </span>
                    </p>
                    <p className="absolute w-[278px] top-36 left-[1093px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-transparent text-base text-justify tracking-[0.16px] leading-6">
                        <span className="text-[#7c7c7c] tracking-[0.03px]">
                            Total Pembayaran &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                        <span className="text-black text-xl tracking-[0.04px]">Rp42.000</span>
                    </p>
                    <div className="absolute top-[81px] left-[325px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-black text-base text-justify tracking-[0.16px] leading-6 whitespace-nowrap">
                        Bank BNI
                    </div>
                    <div className="absolute w-[101px] h-[46px] top-[105px] left-[325px]">
                        <div className="absolute top-0 left-0 [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-black text-base text-justify tracking-[0.16px] leading-6 whitespace-nowrap">
                            Bank BRI
                        </div>
                        <div className="absolute top-[22px] left-0 [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-black text-base text-justify tracking-[0.16px] leading-6 whitespace-nowrap">
                            Bank Lainnya
                        </div>
                    </div>
                    <div className="absolute w-[130px] top-[19px] left-6 [font-family:'Archivo-ExtraBold',Helvetica] font-extrabold text-black text-base text-justify tracking-[0.16px] leading-6">
                        Metode Pembayaran
                    </div>
                    <div className="top-[37px] bg-[#ff730e] absolute w-[15px] h-[15px] left-[217px] rounded-[7.5px] border border-solid border-[#00000080]" />
                    <div className="top-[60px] bg-white absolute w-[15px] h-[15px] left-[217px] rounded-[7.5px] border border-solid border-[#00000080]" />
                    <div className="top-[85px] bg-white absolute w-[15px] h-[15px] left-[217px] rounded-[7.5px] border border-solid border-[#00000080]" />
                    <div className="top-[110px] bg-white absolute w-[15px] h-[15px] left-[217px] rounded-[7.5px] border border-solid border-[#00000080]" />
                    <div className="top-[133px] bg-white absolute w-[15px] h-[15px] left-[217px] rounded-[7.5px] border border-solid border-[#00000080]" />
                    <div className="absolute w-[42px] h-[52px] top-[30px] left-60">
                        <img className="absolute w-8 h-[30px] top-0 left-0 object-cover" alt="Rectangle" src="BCA.png" />
                        <img
                            className="absolute w-10 h-[30px] top-[22px] left-0.5 object-cover"
                            alt="Rectangle"
                            src="mandiri.png"
                        />
                    </div>
                    <img
                        className="absolute w-[68px] h-[18px] top-[85px] left-60 object-cover"
                        alt="Element bank"
                        src="BNI.png"
                    />
                    <img
                        className="absolute w-[33px] h-[18px] top-[110px] left-[241px] object-cover"
                        alt="Bri logo"
                        src="BRI.png"
                    />
                    <img className="absolute w-[18px] h-[25px] top-32 left-60" alt="Bank building" src="bank-building.png" />
                    <div className="flex w-[178px] h-[38px] items-center justify-center gap-2.5 p-2.5 absolute top-48 left-[1147px] bg-white rounded-[5px] border border-solid border-black">
                   <Link to="/DetailProductBahan">
                        <div className="relative w-fit mt-[-4.00px] mb-[-2.00px] [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-6 whitespace-nowrap">
                            Buat Pesanan
                        </div>
                        </Link>
                        {/* <img className="absolute w-[1444px] h-0.5 -top-339 left-0 object-cover" alt="Line" src="line-10.png" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPayment



