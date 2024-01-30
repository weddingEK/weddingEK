import "./App.css";
// import BannerComponent from "./component/BannerComponent";
// import WeddingConvert from "./component/WeddingConvert";
// import Place from "./component/Place";
// import Colors from "./component/Colors";
// import Prog from "./component/Prog";
// import Form from "./component/Form";
// import Contacts from "./component/Contacts";
import FirstBlock from "./component/FirstBlock";
import "./font/sweet.ttf";
import "./font/madelyn.otf";
import "./font/lemon.otf";
import "./font/exo.otf";
import "./font/Oranienbaum.ttf";
import { Container } from "./styles";
import { useLayoutEffect } from "react";

function App() {
  // const handleClick = () => {
  //   const context = new AudioContext();
  //   context.resume();
  // };
  return (
    <Container>
      <FirstBlock />
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
