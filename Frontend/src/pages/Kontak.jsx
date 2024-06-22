import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
// import { NavbarWeb } from "../components/NavbarWeb";
import "../styles/kontak.css";

export const Kontak = () => {
  return (
    <div className="kontak-kami">
      
        <div className="overlap">
          <div className="kontak">
            <div className="overlap-group">
              <div className="frame-3">
                <div className="frame-4">
                  <div className="frame-5">
                    <div className="text-wrapper-3">Hubungi Kami</div>
                    <p className="p">
                      Jika anda membutuhkan Informasi atau bantuan silahkan menggunakan kontak email atau nomor telepon
                      yang ada dibawah untuk hubungi kami.
                    </p>
                  </div>
                  <div className="frame-6">
                    <div className="text-wrapper-4">Kantor&nbsp;&nbsp;Digital Foods</div>
                    <div className="frame-5">
                      <div className="frame-7">
                        <GrLocation className="icon-instance-node" />
                        <p className="text-wrapper-5">
                          Jl. Raya Taman Tiara, Nggrekmas, Pagerwojo, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur
                          61219
                        </p>
                      </div>
                      <div className="frame-7">
                        <PiWhatsappLogoLight className="icon-instance-node"  />
                        <div className="text-wrapper-6">111-222-333</div>
                      </div>
                      <div className="frame-7">
                        <MdOutlineEmail className="icon-instance-node" />
                        <div className="text-wrapper-6">service@digitalfoods.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-6">
                    <div className="text-wrapper-4">Sosial Media</div>
                    <div className="frame-5">
                      <div className="frame-7">
                        <IoLogoInstagram className="vector"/>
                        <div className="text-wrapper-6">@digitalfoods</div>
                      </div>
                      <div className="frame-7">
                        <CiTwitter  className="ph-twitter-logo" />
                        <div className="text-wrapper-7">@digitalfoods</div>
                      </div>
                      <div className="frame-7">
                        <GrFacebookOption className="icon-instance-node" />
                        <div className="text-wrapper-8">digitalfoods</div>
                      </div>
                    </div>
                  </div>
                  <img className="unsplash" alt="Unsplash" src="unsplash_l9NaijLp354.png" />
                </div>
               
                <div className="frame-8">
                  <div className="frame-9">
                    <div className="text-wrapper-3">Kontak kami melalui email</div>
                    <p className="text-wrapper-9">
                      Jika anda membutuhkan Informasi atau bantuan silahkan menggunakan kontak email dan tuliskan apa
                      yang anda ingin bertanya.
                    </p>
                  </div>
                  <div className="frame-10">
                    <div className="div-wrapper">
                      <div className="text-wrapper-10">Nama Lengkap Anda</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-10">Nomor Ponsel</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-10">Alamat Email</div>
                    </div>
                    <div className="frame-11">
                      <div className="text-wrapper-10">Pesan Anda</div>
                    </div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-12">
                      <div className="text-wrapper-10">Kirim</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <NavbarWeb
                buttonClassName="navbar-web-2"
                buttonClassNameOverride="navbar-web-2"
                className="navbar-web-instance"
                divClassName="design-component-instance-node"
                hasButton={false}
              
              /> */}
              {/* <img className="whatsa-image" alt="Whatsapp image" src="whatsapp-image-2024-05-07-at-19-04-1.png" />pp
              <div className="text-wrapper-11">Digital Foods</div> */}
              <img className="unsplash-jx" alt="Unsplash jx" src="unsplash_jX_07BO1jus.png" />
              {/* <img className="img" alt="Vector" src="Vector-m.svg" /> 
              <p className="hi-parto">
                <span className="span">Hi,</span>
                <span className="text-wrapper-12"> Parto</span>
              </p> */}
            </div>
          </div>
          {/* <img className="group" alt="Group" src="group-102.png" /> */}
        </div>
      
    </div>
  );
};

export default Kontak;

