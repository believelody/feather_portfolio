const VideoHomePage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PhotoHomePage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const DesignHomePage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const IllustrationHomePage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

<div style={{width: '100%', height: '100%', margin: 0, padding: 0, opacity: 0.9, borderRadius: '20px', position: 'relative'}}>
  <VideoHomePage>
    <ContainerLayer>
      <TextWrapper top='60' left='15'>
        <NavLink to='/' style={{textDecoration: 'none', color: 'white'}}>
          Videos
        </NavLink>
      </TextWrapper>
      <ImgWrapper onMouseOver={() => console.log('enter')} src={VideoLayer} alt="video" />
    </ContainerLayer>
  </VideoHomePage>
  <PhotoHomePage>
    <img src={PhotoLayer} alt="photo" />
  </PhotoHomePage>
  <DesignHomePage>
    <img src={DesignLayer} alt="design" />
  </DesignHomePage>
  <IllustrationHomePage>
    <img src={IllustrationLayer} alt="illustration" />
  </IllustrationHomePage>
</div>
