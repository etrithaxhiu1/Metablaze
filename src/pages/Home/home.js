import React from 'react';
import '../../Assets/css/_home.scss';
import {Header, Footer, MetaGoblinGallery, Discover, VideoSlider, Subscribe, Blaziverse} from '../../components';

const Home = () => {
  return (
    <div className="Home-page">
      <div className='metaGoblinGallery-bg'></div>
      <Header />
      <MetaGoblinGallery />
      <Discover />
      <VideoSlider />
      <Subscribe />
      <Blaziverse />
      <Footer />
    </div>
  );
}

export default Home;