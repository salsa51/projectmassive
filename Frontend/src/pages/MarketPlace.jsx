import React from 'react';
import { IoList } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { Frame } from '../components/Frame';
import '../styles/market.css';
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
//  import { useNavigate } from 'react-router-dom';

export const MarketPlace = () => {
  //  const navigate = useNavigate();
  return (
    <div className="market-place-semua">
      <div className="div-8">
        <div className="overlap">
          <div className="navbar-marketplace" >
            <div className="frame-10">
              <div className="logoipsum" />
              <div className="frame-11">
                <div className="content">
                  <div className="left-part">
                  
                    <div className="text">Search...</div>

                    <a href="/keranjang">
                    <img className="keranjang" alt="keranjang" src="keranjang.svg" />
                    </a>

                  </div>
                  <a href="/ChatbotSidecol">
                  <img className="chat" alt="chat" src="chat.svg" />
                  </a>
                </div>
                <div className="icon-research-wrapper">
                  <CiSearch className="icon-research" color="#7E7E7E"/>
                </div>
              </div>
            </div>
            
            <img className="vector" alt="Vector" src="Vector-m.svg" />
            <p className="hi-parto">
              <span className="span">Hi,</span>
              <span className="text-wrapper-8"> Parto</span>
            </p>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="overlap-group-2">
                <div className="frame-12">
                  <div className="frame-13">
                    <div className="frame-14">
                      <div className="text-wrapper-9">Semua</div>
                    </div>
                    <div className="frame-15">
                      <div className="text-wrapper-10">Buah-Buahan</div>
                    </div>
                  </div>
                  
                  <div className="frame-16">
                    <div className="frame-17">
                      <div className="frame-18">
                      <IoList style={{ marginRight: '1px' }} />
                        <div className="text-wrapper-11">Kategori</div>
                      </div>
                    </div>
                    <div className="frame-17">
                      <div className="frame-18">
                      <GrLocation style={{ marginRight: '1px' }} />
                        <div className="text-wrapper-11">Lokasi</div>
                      </div>
                    </div>
                   
                  </div>
                  
                  {/* <img className="relative w-px h-[49px] mr-[-1.00px] object-cover" alt="Line" src="Line6.png" /> */}
                </div>
               
              </div>
            
            </div>
            {/* <img className="absolute w-[1440px] h-px top-12 left-0 object-cover" alt="Line" src="Line1.png" /> */}
          </div>

          <a href="/">
    <img className="whatsapp-image" alt="Whatsapp image" src="whatsapp-image-2024-05-07-at-19-04-1.png" />
</a>
<div className="text-wrapper-13">Digital Foods</div>

        </div>
        
        

        <p className="text-wrapper-14">
          Lorem ipsum dolor sit amet consectetur. Et id viverra non dolor. Sed adipiscing nulla et sed. In sit
          adipiscing id congue eros posuere semper odio orci. Maecenas blandit id viverra varius tellus. Amet enim
          turpis et sollicitudin vel bibendum pulvinar. Adipiscing pharetra libero in urna accumsan. Congue cursus nam
          maecenas eu quam platea porttitor nisi.
        </p>
        <div className="overlap-2">
          <div className="frame-19">
            <div className="ellipse" />
            <div className="ellipse" />
            <div className="ellipse" />
            <div className="ellipse" />
          </div>
          <img className="unsplash" alt="Unsplash" src="unsplash_-YHSwy6uqvk.png" />
        </div>
        <div className="chiller-frozen">Chiller &amp; frozen</div>
          <div className="frame-23">
          <div className="frame-24">
            <Link to="/DetailProductBahan" className="frame-25">
              <Frame
              //  onClick={() => navigate('/DetailProductBahan')}
                className="frame-557"
                src="selada.svg"
              />
              <Frame
              // onClick={() => navigate('/DetailProductBahan')}
                className="frame-557"
                src="brokoli.svg"
              />
              <Frame
              // onClick={() => navigate('/DetailProductBahan')}
                className="frame-557"
                src="mentimun.svg"
              />
              <Frame
              // onClick={() => navigate('/DetailProductBahan')}
                className="frame-557"
                src="labu.svg"
              />
              <Frame
              // onClick={() => navigate('/DetailProductBahan')}
                className="frame-557"
                src="kubis.svg"
              />
            </Link>
            </div>

            <Link to="/DetailProductBahan" className="frame-26">
              <Frame
                className="frame-557"
                src="pepaya.svg"
              />
              <Frame
                className="frame-557"
                src="kol.svg"
              />
              <Frame
                className="frame-557"
                src="artichoke.svg"
              />
              <Frame
                className="frame-557"
                src="sawi.svg"
                />
              <Frame
                className="frame-557"
                src="kentan.svg"
              />
            </Link>
            </div>
        <div className="text-wrapper-15">Buah-buahan dan sayuran</div>
        <div className="frame-20">
          <Link to="/DetailProductBahan" className="frame-21">
          <Frame
              className="frame-535-instance"
              src="bayam.svg"
            />
            <Frame
              className="frame-535-instance"
              src="pakchoi.svg"
            />
            <Frame
              className="frame-535-instance"
              src="kentang.svg"
            />
            <Frame
              className="frame-535-instance"
              src="bawang.svg"
            />
            <Frame
              className="frame-535-instance"
              src="tomat.svg"
            />
          </Link>
          </div>

         
        <div className="text-wrapper-16">Barang Chiller</div>

        <div className="frame-22">
          <Link to="/DetailProductBahan" className="frame-21">
            <Frame
              className="frame-535-instance"
              src="paprika.svg"
            />
            <Frame
              className="frame-535-instance"
              src="jahe.svg"
            />
            <Frame
              className="frame-535-instance"
              src="seledri.svg"
            />
            <Frame
              className="frame-535-instance"
              src="cabai.svg"
            />
            <Frame
              className="frame-535-instance"
              src="pisang.svg"
             />
             </Link>
          </div>

        

        </div>
      </div>
  );
};

export default MarketPlace
