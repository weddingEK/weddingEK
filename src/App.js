import "./App.css";
// import BannerComponent from "./component/BannerComponent";
// import WeddingConvert from "./component/WeddingConvert";
// import Place from "./component/Place";
// import Colors from "./component/Colors";
// import Prog from "./component/Prog";
// import Form from "./component/Form";
// import Contacts from "./component/Contacts";
import FirstBlock from "./component/FirstBlock";
import SecondBlock from "./component/SecondBlock";
import ThirdBlock from "./component/ThirdBlock";
import FourthBlock from "./component/FourthBlock";
import FifthBlock from "./component/FifthBlock";
import SixBlock from "./component/SixBlock";
import SevenBlock from "./component/SevenBlock";
import "./font/sweet.ttf";
import "./font/montserrat.ttf";
import "./font/czizh.ttf";
import "./font/madelyn.otf";
import "./font/lemon.otf";
import "./font/exo.otf";

import "./font/maki.ttf";
import "./font/Oranienbaum.ttf";
import { Container } from "./styles";
import { useState, useEffect } from "react";

function App() {
  // const handleClick = () => {
  //   const context = new AudioContext();
  //   context.resume();
  // };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading)
    return (
      <div class='loaderdiv'>
        <span class='loader'></span>
      </div>
    );
  return (
    <Container>
      <FirstBlock />
      <SecondBlock />
      <FourthBlock />
      <ThirdBlock />
      <FifthBlock />
      <SixBlock />
      <SevenBlock />
      {/* <audio id='myaudio' loop controls autoPlay>
        <source
          src='https://od.lk/s/N18yMzgyNDE2NzJf/song.ogg'
          type='audio/ogg'
        />
      </audio> */}
      {/* <BannerComponent />
      <WeddingConvert />
      <Prog />
      <Place />
      <Colors />
      <Form />
      <Contacts /> */}
    </Container>
  );
}

export default App;
