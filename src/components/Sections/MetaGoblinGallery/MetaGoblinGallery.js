import React from 'react';
import Popup from 'reactjs-popup';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';
import '../../../Assets/css/_metaGoblinGallery.scss';
import metagoblin from '../../../Assets/Images/SVG/Fonts/txt-metagoblin.svg';
import metagoblinMobile from '../../../Assets/Images/SVG/Fonts/txt-metagoblin-mobile.svg';
import goblin1 from '../../../Assets/Images/Goblins/Goblin-1.png';
import goblin2 from '../../../Assets/Images/Goblins/Goblin-2.png';
import goblin3 from '../../../Assets/Images/Goblins/Goblin-3.png';
import goblin4 from '../../../Assets/Images/Goblins/Goblin-4.png';
import goblin5 from '../../../Assets/Images/Goblins/Goblin-5.png';
import goblin6 from '../../../Assets/Images/Goblins/Goblin-6.png';
import discover from '../../../Assets/Images/SVG/Fonts/txt-discover.svg';
import discoverMobile from '../../../Assets/Images/SVG/Fonts/txt-discover-mobile.svg';
import discoverGoblin from '../../../Assets/Images/SVG/discoverGoblin.svg';
import play from '../../../Assets/Images/SVG/play-icon.svg';
import divideLine from '../../../Assets/Images/SVG/divideLine.svg';

const discoverVideo = 'https://www.youtube.com/watch?v=TPtQr-ox01M';

const MetaGoblinGallery = () => {
  const settingsGallery = {
    infinite: true,
    autoplay: true,
    speed: 750,
    autoplaySpeed: 3500,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 596,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      ]
  };
        return (
          <div className='MetaGoblinGallery-Section'>
            <div className='MetablazeGallery'>
              <div className='metaGoblin_gallery'>
                <div className='container'>
                  <img src={metagoblin} className='metaGoblin_nftGalelry'/>
                  <img src={metagoblinMobile} className='metaGoblin_nftGalelryMobile'/>
                </div>
                <div className='row_cards'>
                  <div className='metaGoblin_cards'>
                    <Slider {...settingsGallery}>
                      <Popup trigger={<img src={goblin1} className='imgWidth' />} position="center center">
                        {close => (
                        <div className='popup_custom'>
                            <span className='popup_tittle'>LEGEND</span><br/><br/>
                            <span className='tittle_table'>APPAREL:</span> BLACK LEATHER CYBER HEART <br/>
                            <span className='tittle_table'>BACKGROUND:</span> MAGENTA PURPLE GRADIENT W/FUCHSIA BORDER <br/>
                            <span className='tittle_table'>BODY:</span> CYBER <br/>
                            <span className='tittle_table'>EARS ACCESS:</span> TEAL TRIANGLES <br/>
                            <span className='tittle_table'>EARS:</span> CYBER AQUA <br/>
                            <span className='tittle_table'>EYEGLASSES:</span> X-RAY GOGGLES <br/>
                            <span className='tittle_table'>HAIR/HAT:</span> GOLD TEAL RAM HORNS <br/>
                            <span className='tittle_table'>HAND:</span> BLACK LEATHER TEAL CYBER <br/>
                            <span className='tittle_table'>MOUTH:</span> CYBORG CHIN STITCHES
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                        </div>
                        )}
                      </Popup>
                      <Popup trigger={<img src={goblin2} className='middleGoblin'/>} position="center center">
                        {close => (
                        <div className='popup_custom'>
                            <span className='popup_tittle'>MYSTIC 3</span><br/><br/>
                            <span className='tittle_table'>APPAREL:</span> HAIRY BACK AND CHEST <br/>
                            <span className='tittle_table'>BACKGROUND:</span> NAVY W/DENIM BORDER <br/>
                            <span className='tittle_table'>BODY:</span> GREEN RIBCAGE <br/>
                            <span className='tittle_table'>EARS:</span> LARGE POINTED <br/>
                            <span className='tittle_table'>EYEGLASSES:</span> AMBER/CLEAR ROUND LENSES <br/>
                            <span className='tittle_table'>EYES:</span> WHITE IRIS WIDE EYES <br/>
                            <span className='tittle_table'>HAIR/HAT:</span> BROWN MAN BUN <br/>
                            <span className='tittle_table'>HAND:</span> FLESH GNARLED RING & PINKY FINGER <br/>
                            <span className='tittle_table'>HEAD:</span> FLESH <br/>
                            <span className='tittle_table'>MOUTH:</span> FU MANCHU WITH FANGS
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                        </div>
                        )}
                      </Popup>
                      <Popup trigger={<img src={goblin3} className='imgWidth' />} position="center center">
                        {close => (
                        <div className='popup_custom'>
                            <span className='popup_tittle'>MYSTIC 1</span><br/><br/>
                            <span className='tittle_table'>APPAREL:</span> BRONZE SHOULDER CHEST STRAPS <br/>
                            <span className='tittle_table'>BACKGROUND:</span> DEEP GREEN W/GREEN BORDER <br/>
                            <span className='tittle_table'>BODY:</span> GREEN NORMAL <br/>
                            <span className='tittle_table'>EARS:</span> HAIRY POINTED <br/>
                            <span className='tittle_table'>EYES:</span> BLOODSHOT <br/>
                            <span className='tittle_table'>HAIR/HAT:</span> BROWN SWEEPOVER <br/>
                            <span className='tittle_table'>HAND:</span> BLACKENED ISLVER NAILS <br/>
                            <span className='tittle_table'>HEAD:</span> FLESH <br/>
                            <span className='tittle_table'>MOUTH:</span> SNEERING RIGHT FANG EXPOSED
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                        </div>
                        )}
                      </Popup>
                      <Popup trigger={<img src={goblin4} className='middleGoblin'/>} position="center center">
                        {close => (
                        <div className='popup_custom'>
                            <span className='popup_tittle'>EPIC 1</span><br/><br/>
                            <span className='tittle_table'>APPAREL:</span> CYBER SHOULDER ANTENNA <br/>
                            <span className='tittle_table'>BACKGROUND:</span> NAVY W/ROYAL BLUE BORDER <br/>
                            <span className='tittle_table'>BODY:</span> NORMAL <br/>
                            <span className='tittle_table'>EARS:</span> MEDIUM WAVY <br/>
                            <span className='tittle_table'>EYEGLASSES:</span> RIGHT ROUND CYBER RED <br/>
                            <span className='tittle_table'>EYES:</span> GREEN IRIS LOOKING STRAIGHT <br/>
                            <span className='tittle_table'>HAIR/HAT:</span> BLACK MOHAWK <br/>
                            <span className='tittle_table'>HAND:</span> FLESH GNARLED RING & PINKY FINGER <br/>
                            <span className='tittle_table'>MOUTH:</span> MOUTH CLOSED TEETH SLIGHTLY EXPOSED
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                        </div>
                        )}
                      </Popup>
                      <Popup trigger={<img src={goblin5} className='imgWidth' />} position="center center">
                        {close => (
                        <div className='popup_custom'>
                            <span className='popup_tittle'>MYSTIC 2</span><br/><br/>
                            <span className='tittle_table'>APPAREL:</span> BROWN LEATHER VEST YELLOW PATCH <br/>
                            <span className='tittle_table'>BACKGROUND:</span> DEEP RED GEOMETRIC W/RED BORDER <br/>
                            <span className='tittle_table'>BODY:</span> BLACK TATTOOS <br/>
                            <span className='tittle_table'>EARS:</span> LARGE SPECKED POINTING UP <br/>
                            <span className='tittle_table'>EYES:</span> GREEN IRIS LOOKING RIGHT <br/>
                            <span className='tittle_table'>HAIR/HAT:</span> BROWN HAIR STRAIGHT UP <br/>
                            <span className='tittle_table'>HAND:</span> BLACK SKULL TATTOO <br/>
                            <span className='tittle_table'>HEAD:</span> FLESH <br/>
                            <span className='tittle_table'>MOUTH:</span> LONG BROWN BEARD
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                        </div>
                        )}
                      </Popup>
                      <Popup trigger={<img src={goblin6} className='middleGoblin'/>} position="center center">
                        {close => (
                        <div className='popup_custom'>
                            <span className='popup_tittle'>EPIC 3</span><br/><br/>
                            <span className='tittle_table'>APPAREL:</span> TURQUOISE CHEST COVER <br/>
                            <span className='tittle_table'>BACKGROUND:</span> BLUE W/AQUA SYMBOLS AND BORDER <br/>
                            <span className='tittle_table'>BODY:</span> NORMAL <br/>
                            <span className='tittle_table'>EAR ACCESS:</span> BLACK TEAL STUDS <br/>
                            <span className='tittle_table'>EARS:</span> LARGE SPECKLED POINTING DOWN <br/>
                            <span className='tittle_table'>EYEGLASSES:</span> AQUA SILVER WRAPAROUND <br/>
                            <span className='tittle_table'>EYES:</span> GREEN IRIS LOOKING LEFT <br/>
                            <span className='tittle_table'>HAIR/HAT:</span> GREEN MOHAWK <br/>
                            <span className='tittle_table'>HAND:</span> BLACK LEATHER RED CYBER <br/>
                            <span className='tittle_table'>HEAD:</span> FLESH <br/>
                            <span className='tittle_table'>MOUTH:</span> WET LIPS FANGS EXPOSED
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                        </div>
                        )}
                      </Popup>
                    </Slider>
                  </div>
                  <a href="https://nftpresale.metablazetoken.com/login" target='_blank' className='mb_button mb_activeBtn home_mb_button'>Buy MetaGoblin</a>
                </div>
              </div>
              {/* Discover Section*/}
              <div className='discoverMetaGoblin'>
                <div className='row'>
                  <img src={discoverGoblin} className='left_discoverGoblin'/>
                  <div className='col-lg-12'>
                    <img src={discover} className='discover_txt'/>
                    <img src={discoverMobile} className='discover_txtMobile'/>
                    <p className='discoverParagraph'>
                      In the year 2126, after centuries of unrest, the age of technological singularity led to civil war
                      amongst factions of cybernetic armies. The use of nuclear weaponry led to a cataclysmic
                      explosion devastating Galaxia Blue, home to mystical planets of all known cybernetic species.
                      Planet Glozark, home to the MetaGoblin race, survived the galactic explosion but suffered total
                      destruction of their Terranzinite supply, a highly coveted radioactive blue crystal. Time was
                      limited, and with their cybernetic powers and advanced  consciousness rapidly diminishing, the entire MetaGoblin population was at risk of going extinct.
                    </p>
                    <div className='buttonVideo'>
                      <Popup trigger={<button className='mb_button mb_activeBtn btn_video'><img src={play} />MetaGoblin Story</button>} position="center center">
                        <div className='popup_custom popup_video'>
                            <ReactPlayer url={discoverVideo} playing controls className='video'/>
                        </div>
                      </Popup>
                    </div>
                  </div>
                  <img src={discoverGoblin} className='right_discoverGoblin'/>
                </div>
              </div>
            </div>
            <img src={divideLine} className='divideLineMG' alt="DivideLine"/>
          </div>
        );
    
}

export default MetaGoblinGallery;