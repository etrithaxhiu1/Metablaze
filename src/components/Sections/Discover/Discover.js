import React from 'react';
import Popup from 'reactjs-popup';
import '../../../Assets/css/_discover.scss';
import king from '../../../Assets/Images/SVG/Fonts/txt-king.svg';
import legend from '../../../Assets/Images/SVG/Fonts/txt-legend.svg';
import epic from '../../../Assets/Images/SVG/Fonts/txt-epic.svg';
import mystical from '../../../Assets/Images/SVG/Fonts/txt-mystical.svg';
import goblinKing from '../../../Assets/Images/SVG/GoblinSVG/goblin-king.png';
import goblinLegend from '../../../Assets/Images/SVG/GoblinSVG/goblin-legend.png';
import goblinEpic from '../../../Assets/Images/SVG/GoblinSVG/goblin-epic.png';
import goblinMystical from '../../../Assets/Images/SVG/GoblinSVG/goblin-mystical.png';
import rightCracked from '../../../Assets/Images/Decors/cracked-line-1.png';
import leftCracked from '../../../Assets/Images/Decors/cracked-line-2.png';
import neonLine from '../../../Assets/Images/Decors/neon-line.png';
import discover_leftBlob from '../../../Assets/Images/Blobs/leftBlob.png';
import discover_rightBlob from '../../../Assets/Images/Blobs/rightBlob.png';
import discoverGrid from '../../../Assets/Images/Grids/grid-discover.png';
import coins from '../../../Assets/Images/SVG/coins.svg';
import Lottie from "react-lottie";
import animationData from '../../../Assets/Lottie/discover-lottie.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


class Discover extends React.Component{
    render() {
        return (
            <div className='Discover'>
                <img src={rightCracked} className='right_cracked absElement'/>
                <img src={leftCracked} className='left_cracked absElement'/>
                <img src={neonLine} className='neonLine absElement'/>
                <img src={discover_leftBlob} className='discover_leftBlob absElement'/>
                <img src={discover_rightBlob} className='discover_rightBlob absElement'/>
                <img src={discoverGrid} className='discover_grid absElement'/>
                <div className='container'>
                    <div className='discoverLottie'>
                    <Lottie 
                        options={defaultOptions}
                        title="dsicover-metablaze"
                    />
                    </div>
                    <div className='row tst'>
                        <div className='col-lg-6'>
                            <div className='discover_box'>
                                <img src={king} className='discover_tittle'></img>
                                <img src={goblinKing} className='discover_goblin'></img>
                                <p className='description_txt'>
                                As rulers of Planet Glozark and the MetaGoblin species, the 3 Kings retain full Cybernetic powers. 
                                The 3 Kings have access to the entire supply of Terranzinite and have established mining communes 
                                to preserve the MetaGoblin race and operate at maximum efficiency. 
                                Holders of the hyper-rare 3 Kings unlock the vault to an immediate reward ...
                                </p>
                                <Popup trigger={<button className='btn_seeMore'>See more</button>} position="center center">
                                    {close => (
                                    <div className='popup_custom'>
                                        <span className='popup_tittle'>KING</span><br/><br/>
                                        As rulers of Planet Glozark and the MetaGoblin species, the 3 Kings retain full Cybernetic powers. 
                                        The 3 Kings have access to the entire supply of Terranzinite and have established mining communes 
                                        to preserve the MetaGoblin race and operate at maximum efficiency. 
                                        Holders of the hyper-rare 3 Kings unlock the vault to an immediate reward ranging from $50k or (Tesla), 
                                        $25k, and $10k paid in Bitcoin. In addition, holders gain exclusive NFT airdrops and are granted the 
                                        most significant amount of Blazepoints, and Utility in the MetaGoblin collection. The 3 Kings are the 
                                        most valuable NFTs in the collection.
                                        <a href='https://drive.google.com/file/d/1OxhIVvQOj9wnONUSbwcSQx2DbDyR_Pu-/view' target='_blank' className='hyperlink_lp'> “See full utility list here” </a> 
                                        <a className="close" onClick={close}>
                                            &times;
                                        </a>
                                    </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='discover_box'>
                                <img src={legend} className='discover_tittle'></img>
                                <img src={goblinLegend} className='discover_goblin'></img> 
                                <p className='description_txt'>
                                The 100 Legendary MetaGoblins are Cyberntetic warriors sent on a mission to Blue Moon SES. Tasked to 
                                save Planet Glozark and the MetaGoblin species from extinction. Legendary MetaGoblins have retained 
                                most of their rare Cybernetic power, granting Legendary NFT holders increased Blazepoints and Rewards 
                                in the Blaziverse.
                                In addition ...
                                </p>
                                <Popup trigger={<button className='btn_seeMore'>See more</button>} position="center center">
                                    {close => (
                                    <div className='popup_custom'>
                                        <span className='popup_tittle'>LEGEND</span><br/><br/>
                                        The 100 Legendary MetaGoblins are Cyberntetic warriors sent on a mission to Blue Moon SES. Tasked to 
                                        save Planet Glozark and the MetaGoblin species from extinction. Legendary MetaGoblins have retained 
                                        most of their rare Cybernetic power, granting Legendary NFT holders increased Blazepoints and Rewards 
                                        in the Blaziverse.
                                        In addition to increased earning potential, the 100 Legendary NFT holders are to be paid future royalties 
                                        for their service to the planet Glozark. Legendary MetaGoblin holders are granted exclusive Airdrops for 
                                        in-game NFTs, exclusive access to Legendary IRL events, and Exclusive Legendary Merchandise.
                                        <a href='https://drive.google.com/file/d/1OxhIVvQOj9wnONUSbwcSQx2DbDyR_Pu-/view' target='_blank' className='hyperlink_lp'> “See full utility list here” </a>
                                        <a className="close" onClick={close}>
                                            &times;
                                        </a>
                                    </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    </div>
                    <div className='row tst'>
                        <div className='col-lg-6'>
                            <div className='discover_box'>
                                <img src={epic} className='discover_tittle'></img>
                                <img src={goblinEpic} className='discover_goblin'></img>
                                <p className='description_txt'>
                                The 1,000 Epic MetaGoblins have retained more robust cybernetic vision and focus capabilities than any 
                                other species on Planet Glozark. Their unique eyewear gives the class a distinct advantage for Terranzinite 
                                extraction, which, in turn, grants Epic MetaGoblin Holders increased Blazepoints and boosted rewards in 
                                the Blaziverse.
                                In addition to ...
                                </p>
                                <Popup trigger={<button className='btn_seeMore'>See more</button>} position="center center">
                                    {close => (
                                    <div className='popup_custom'>
                                        <span className='popup_tittle'>EPIC</span><br/><br/>
                                        The 1,000 Epic MetaGoblins have retained more robust cybernetic vision and focus capabilities than any 
                                        other species on Planet Glozark. Their unique eyewear gives the class a distinct advantage for Terranzinite 
                                        extraction, which, in turn, grants Epic MetaGoblin Holders increased Blazepoints and boosted rewards in 
                                        the Blaziverse.
                                        In addition to boosted reward earning, Epic NFT Holders will be paid future royalties for their extraction 
                                        efforts. Holders are granted access to airdrops for exclusive in-game NFTs, Epic MetaGoblin Merchandise, and 
                                        exclusive IRL events.
                                        <a href='https://drive.google.com/file/d/1OxhIVvQOj9wnONUSbwcSQx2DbDyR_Pu-/view' target='_blank' className='hyperlink_lp'> “See full utility list here” </a>
                                        <a className="close" onClick={close}>
                                            &times;
                                        </a>
                                    </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='discover_box'>
                                <img src={mystical} className='discover_tittle'></img>
                                <img src={goblinMystical} className='discover_goblin'></img> 
                                <p className='description_txt'>
                                The 8,897 Mystical MetaGoblins have retained most of their advanced consciousness. Their ability to work as 
                                a collective on planet Glozark makes these Mystical Green species the backbone of the ecosystem. While the 
                                Mystical MetaGoblins have lost most of their cybernetic power in the famine on Planet Glozark, all hope is 
                                not lost.
                                Mystical NFT ...
                                </p>
                                <Popup trigger={<button className='btn_seeMore'>See more</button>} position="center center">
                                    {close => (
                                    <div className='popup_custom'>
                                        <span className='popup_tittle'>MYSTICAL</span><br/><br/>
                                        The 8,897 Mystical MetaGoblins have retained most of their advanced consciousness. Their ability to work as 
                                        a collective on planet Glozark makes these Mystical Green species the backbone of the ecosystem. While the 
                                        Mystical MetaGoblins have lost most of their cybernetic power in the famine on Planet Glozark, all hope is 
                                        not lost.
                                        Mystical NFT holders will have the opportunity to put the Mystical Collection to work in an attempt to regain 
                                        the cybernetic strength of their ancestors. Mystical MetaGoblin holders will earn future Royalties for their 
                                        insights and wisdom. The most strategic Mystical NFT holders can traverse through the Blaziverse, earning in-game 
                                        rewards. As with the entire MetaGoblin collection, Mystical NFT holders are granted continued access to the 
                                        MetaBlaze ecosystem in its entirety.
                                        <a href='https://drive.google.com/file/d/1OxhIVvQOj9wnONUSbwcSQx2DbDyR_Pu-/view' target='_blank' className='hyperlink_lp'> “See full utility list here” </a>
                                        <a className="close" onClick={close}>
                                            &times;
                                        </a>
                                    </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    </div>
                    <img src={coins} className='coins' />
                </div>
            </div>
        );
    }
}

export default Discover;