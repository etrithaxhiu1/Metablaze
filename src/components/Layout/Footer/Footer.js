import React from 'react';
import '../../../Assets/css/_footer.scss';
import divideLine from '../../../Assets/Images/SVG/divideLine.svg';
import footerGoblin from '../../../Assets/Images/SVG/footerGoblin.svg'
import logoFooter from '../../../Assets/Images/Metablaze-logo.png';
import instagram from '../../../Assets/Images/SVG/SocialMedia/instagram.svg';
import twitter from '../../../Assets/Images/SVG/SocialMedia/twitter.svg';
import discord from '../../../Assets/Images/SVG/SocialMedia/discord.svg';
import telegram from '../../../Assets/Images/SVG/SocialMedia/telegram.svg';
import tiktok from '../../../Assets/Images/SVG/SocialMedia/tiktok.svg';

const Footer = () => {
  return (
    <div className="Footer">
      <img src={divideLine} className='divideLine' alt="DivideLine"/>
      <div className='container-fluid'>
        <img src={footerGoblin} className='leftGoblin_footer'/>
        <img src={footerGoblin} className='rightGoblin_footer'/>
        <div className='container'>
          <div className='row top_footer'>
            <div className='col-lg-5 col-md-12'>
              <a href='#' className='logo_Footer'><img src={logoFooter} className='footer_logo' alt="Logo Footer"/></a>
            </div>
            <div className='col-lg-7 col-md-12 footer_nav_links'>
              <div className='footer_nav'>
                <a href='https://nftpresale.metablazetoken.com/login' className='footer_links' target='_blank'>Buy MetaGoblin</a>
                <a href='https://drive.google.com/file/d/1OxhIVvQOj9wnONUSbwcSQx2DbDyR_Pu-/view' className='footer_links' target='_blank'>NFT Litepaper</a>
                <a href='https://metablazetoken.com/' className='footer_links' target='_blank'>Visit MetaBlaze</a>
              </div>
            </div>
          </div>
          <div className='row bottom_footer'>
            <div className='col-lg-5 col-md-12'>
              <p className='copyright'>&copy; {new Date().getFullYear()} MetaBlaze All Rights Reserved</p>
            </div>
            <div className='col-lg-7 col-md-12'>
              <div className='social_medias'>
                <a href='https://www.instagram.com/meta.blaze/' className='sm_link' target='_blank'><img src={instagram} className='social_media_icon' alt="SM Icon"/></a>
                <a href='https://twitter.com/meta_blaze' className='sm_link' target='_blank'><img src={twitter} className='social_media_icon' alt="SM Icon"/></a>
                <a href='https://discord.com/invite/wTZc9yCYRA' className='sm_link' target='_blank'><img src={discord} className='social_media_icon' alt="SM Icon"/></a>
                <a href='https://t.me/meta_blaze' className='sm_link' target='_blank'><img src={telegram} className='social_media_icon' alt="SM Icon"/></a>
                <a href='https://www.tiktok.com/@meta_blaze' className='sm_link' target='_blank'><img src={tiktok} className='social_media_icon' alt="SM Icon"/></a>
              </div>
            </div>
            <div className='col-md-12'>
              <p className='copyrightMobile'>&copy; {new Date().getFullYear()} MetaBlaze All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;