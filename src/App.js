import "./App.css";
import BannerComponent from "./component/BannerComponent";
import WeddingConvert from "./component/WeddingConvert";
import Place from "./component/Place";
import Colors from "./component/Colors";
import Prog from "./component/Prog";
import Form from "./component/Form";
import "./font/sweet.ttf";
import "./font/Oranienbaum.ttf";
import { Container } from "./styles";
import Contacts from "./component/Contacts";

function App() {
  return (
    <Container>
      <BannerComponent />
      <WeddingConvert />
      <Prog />
      <Place />
      <Colors />
      <Form />
      <Contacts />
    </Container>
  );
}

export default App;
