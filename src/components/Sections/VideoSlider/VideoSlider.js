import React  from 'react';
import '../../../Assets/css/_videoSlider.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import threeKings from '../../../Assets/Images/SVG/Fonts/txt-threeKings.svg';
import video_leftBlob from '../../../Assets/Images/Blobs/leftBlob-videos.png';
import videoGrid from '../../../Assets/Images/Grids/grid-videos.png';
import ReactPlayer from 'react-player';

const rewardsVideo = 'https://www.youtube.com/watch?v=zK5aPJitANU';

const VideoSlider = () => {

    return (
        <div className='VideoSlider'>
            <img src={video_leftBlob} className='video_leftBlob absElement'/>
            <img src={videoGrid} className='videoGrid absElement'/>
              <div className='container'>
                <img src={threeKings} className='videos_tittle'></img>
                <p className='rewards'>Unlock <span className='rewards_bold'>$10,000, $25,000 & $50,000</span> Bitcoin Rewards or a <span className='rewards_bold'>2023 Tesla Model 3</span></p>
                <div className='threekingVideo'>
                  <ReactPlayer url={rewardsVideo} controls className='video'/>
                </div>
              </div>
        </div>
    );
}

export default VideoSlider;