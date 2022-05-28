import React from 'react';
import '../../../Assets/css/_subscribe.scss';
import aboutMetablaze from '../../../Assets/Images/SVG/Fonts/txt-aboutMetablaze.svg';
import aboutMetablazeMobile from '../../../Assets/Images/SVG/Fonts/txt-aboutMetablaze-mobile.svg';
import subscribe_img from '../../../Assets/Images/subscribe-goblin.png';
import rightCracked from '../../../Assets/Images/Decors/cracked-line-3.png';
import leftCracked from '../../../Assets/Images/Decors/cracked-line-4.png';
import neonLine from '../../../Assets/Images/Decors/neon-line.png';
import subscribe_rightBlob from '../../../Assets/Images/Blobs/rightBlob-subscribe.png';
import subscribe_Grid from '../../../Assets/Images/Grids/grid-subscribe.png';

class Subscribe extends React.Component{
    render() {
        return (
            <div className='Subscribe'>
                <img src={rightCracked} className='rightCrackedSubscribe absElement'/>
                <img src={leftCracked} className='leftCrackedSubscribe absElement'/>
                <img src={neonLine} className='neonLine absElement'/>
                <img src={subscribe_rightBlob} className='subscribe_rightBlob absElement'/>
                <img src={subscribe_Grid} className='subscribe_Grid absElement'/>
                <div className='container'>
                    <div className='row subscribe_box'>
                        <img src={aboutMetablaze} className='subscribe_tittle'/>
                        <img src={aboutMetablazeMobile} className='subscribe_tittle_mobile'/>
                        <div className='col-lg-7'>
                            <p className='subscribe_paragraph'>
                            Read our Litepaper, or buy MetaGoblins in the links below
                            </p>
                            <div className='buttons'>
                                <a href="https://nftpresale.metablazetoken.com/login" className='mb_button mb_activeBtn btn_subscribe'>Buy MetaGoblin</a>
                                <a href='https://drive.google.com/file/d/1OxhIVvQOj9wnONUSbwcSQx2DbDyR_Pu-/view' target='_blank' className='mb_button'>NFT Litepaper</a>
                            </div>
                        </div>
                        <div className='col-lg-5 excavation_goblin'>
                            <img src={subscribe_img} className='subscribe_img'/>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Subscribe;