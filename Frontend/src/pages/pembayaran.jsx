import React from "react";
import { CiSearch } from "react-icons/ci";
import "../styles/pembayaran.css";

export const MenuPayment = () => {
  return (
    <div className="menu-payment">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="navbar-marketplace">
            <div className="frame">
              <div className="logoipsum" />
              <div className="div">
                <div className="content">
                  <div className="left-part">
                    <div className="text">Search...</div>
                  </div>
                </div>
                <div className="icon-research-wrapper">
                  <CiSearch className="icon-research" color="#7E7E7E"/>
                </div>
              </div>
              <a href="/keranjang">
              
              <img className="icon-cart-outline" alt="keranjang" src="keranjang.svg" />
              </a>
            </div>
            <img className="vector" alt="Vector" src="vector.svg" />
            <p className="hi-parto">
              <span className="text-wrapper">Hi,</span>
              <span className="span"> Parto</span>
            </p>
            <img className="communication" alt="Communication" src="chat.svg" />
          </div>
          <img className="whatsapp-image" alt="Whatsapp image" src="whatsapp-image-2024-05-07-at-19-04-1.png" />
          <div className="text-wrapper-2">Digital Foods</div>
          <img className="group" alt="Group" src="group-103.png" />
          <img className="rectangle" alt="Rectangle" src="rectangle-100.svg" />
          <img className="img" alt="Rectangle" src="rectangle-103.svg" />
          <img className="rectangle-2" alt="Rectangle" src="rectangle-109.svg" />
          <div className="text-wrapper-3">Alamat Pengiriman</div>
          <p className="p">
            Street: Jl Purnawarman 36 B, Jawa Barat. City: Jawa Barat. State/province/area: Bandung. Phone number:
            0-22-426-5482. Zip code: 40117.
          </p>
          <div className="text-wrapper-4">Parto</div>
          <div className="text-wrapper-5">(+62) 89536435436</div>
          <div className="text-wrapper-6">Bank BCA</div>
          <p className="subtotal-untuk">
            <span className="text-wrapper-7">
              Subtotal untuk produk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-wrapper-8">Rp20.000</span>
          </p>
          <p className="total-ongkos">
            <span className="text-wrapper-9">Total Ongkos :&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-wrapper-8">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Rp20.000
            </span>
          </p>
          <p className="biaya-layanan">
            <span className="text-wrapper-9">Biaya Layanan :&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-wrapper-8">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp1.000
            </span>
          </p>
          <p className="biaya-penanganan">
            <span className="text-wrapper-9">Biaya Penanganan : </span>
            <span className="text-wrapper-8">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp1.000
            </span>
          </p>
          <p className="total-pembayaran">
            <span className="text-wrapper-9">
              Total Pembayaran:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span className="text-wrapper-10">Rp42.000</span>
          </p>
          <div className="text-wrapper-11">Bank Mandiri</div>
          <div className="text-wrapper-12">Bank BNI</div>
          <div className="text-wrapper-13">Bank BRI</div>
          <div className="text-wrapper-14">Bank Lainnya</div>
          <div className="text-wrapper-15">Metode Pembayaran</div>
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <img className="rectangle-3" alt="Rectangle" src="rectangle-107.png" />
          <img className="rectangle-4" alt="Rectangle" src="rectangle-108.png" />
          <img
            className="element-bank"
            alt="Element bank"
            src="105-1051729-bank-negara-indonesia-logo-bank-bni-transparan-clipart-1.png"
          />
          <img className="bri-logo" alt="Bri logo" src="bri-logo-freelogovectors-1.png" />
          <img className="bank-building" alt="Bank building" src="bank-building.png" />
          <div className="div-wrapper">
            <div className="text-wrapper-16">Buat Pesanan</div>
          </div>
          <div className="frame-2">
            <div className="navbar">
              <div className="text-wrapper-17">Sayur Kol</div>
              <div className="text-wrapper-18">Rp 20.000</div>
              <div className="text-wrapper-19">Rp 20.000</div>
              <div className="text-wrapper-20">1</div>
              <img className="rectangle-5" alt="Rectangle" src="rectangle.png" />
            </div>
            <div className="text-wrapper-21">Produk Dipesan</div>
            <div className="text-wrapper-22">Harga Satuan</div>
            <div className="text-wrapper-23">Jumlah</div>
            <div className="text-wrapper-24">Subtotal Produk</div>
            <img className="line" alt="Line" src="line-11.svg" />
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="overlap-group-2">
                <div className="text-wrapper-25">Pesan :</div>
                <div className="text-wrapper-26">Reguler</div>
                <p className="text-wrapper-27">Garansi tiba : 16 - 17 Mei</p>
                <div className="text-wrapper-28">Opsi Pengiriman :</div>
                <div className="text-wrapper-29">Rp 20.000</div>
                <div className="overlap-2">
                  <div className="text-wrapper-30">(Opsional) Tinggalkan pesanan kepenjual</div>
                </div>
              </div>
              <div className="total-pesanan-wrapper">
                <p className="total-pesanan">
                  <span className="text-wrapper-31">Total Pesanan (1 Produk): </span>
                  <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="text-wrapper-33"> Rp40.000</span>
                </p>
              </div>
            </div>
          </div>
          <img className="location" alt="Location" src="location.png" />
        </div>
      </div>
    </div>
  );
};
