import React from 'react';
import '../../../Assets/css/_blaziverse.scss';
import metablazeToken from '../../../Assets/Images/SVG/Fonts/txt-metablazeToken.svg';
import blaziverseMobile from '../../../Assets/Images/blaziverse-mobile.png';
import blaziverse_rightBlob from '../../../Assets/Images/Blobs/rightBlob-blaziverse.png';
import blaziverse_Grid from '../../../Assets/Images/Grids/grid-blaziverse.png';

class Blaziverse extends React.Component{
    render() {
        return (
            <div className='Blaziverse'>
                <img src={blaziverse_rightBlob} className='blaziverse_rightBlob absElement'/>
                <img src={blaziverse_Grid} className='blaziverse_Grid absElement'/>
                <div className='container'>
                    <div className='blaziverse_box'>
                        <div className='row'>
                            <div className='col-lg-7 col-sm-12'>
                                <img src={metablazeToken} className='blaziverse_tittle'/>
                                <p className='blaziverse_paragraph'>
                                    MetaBlaze is a blockchain gaming firm but unlike the rest, MetaBlaze differentiates itself 
                                    with its multifaceted and synergistic ecosystem designed for gamers, and non-gamers alike. 
                                    MetaBlaze merges popular elements of web 3 technologies to bring a one-of-a-kind ecosystem 
                                    to the crypto space with an impact-focused roadmap.
                                </p>
                                <a href='https://metablazetoken.com/' target='_blank' className='mb_button mb_activeBtn btn_blaziverse'>Visit MetaBlaze</a>
                            </div>
                            <div className='col-lg-5 col-sm-12'>
                                <img src={blaziverseMobile} className='blaziverse_mobile'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blaziverse;