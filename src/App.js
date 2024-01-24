import "./App.css";
import BannerComponent from "./component/BannerComponent";
import WeddingConvert from "./component/WeddingConvert";
import Place from "./component/Place";
import BaseContainer from "./component/BaseContainer";
import Colors from "./component/Colors";
import Prog from "./component/Prog";
import { Text, Btn } from "./component/Colors/styles";
import Form from "./component/Form";
import "./font/sweet.ttf";
import "./font/Oranienbaum.ttf";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <BannerComponent />
      <WeddingConvert />
      <Place />
      <div id='prog'>
        <BaseContainer title='ПРОГРАММА ДНЯ' bottom>
          <Prog />
        </BaseContainer>
      </div>
      <BaseContainer title='ЦВЕТОВАЯ ГАММА'>
        <Colors />
      </BaseContainer>
      <BaseContainer title='ПОДАРКИ ВМЕСТО ЦВЕТОВ' bottom>
        <Text>
          Мы просиим вас не дарить нам цветы, мы не успеем насладиться этой
          красотой! Но, по желанию, выразить вашу любовь и радость можно в виде
          бутылки вина или шампанского, которые мы обещаем не завянет.
        </Text>
      </BaseContainer>
      <BaseContainer title='КАКИЕ ПОДАРКИ ПРЕДПОЧТИТЕЛЬНЫ'>
        <Text>
          Не ломайте голову над подарками! Лучший подарок молодой семье - в
          конверте {":)"}
        </Text>
      </BaseContainer>
      <BaseContainer title='ХЕШТЕГ' bottom>
        <Text>
          Для публикации фотографий с нашей свадьбы воспользуйтесь хештегом, это
          позволиит нам насладиться фотографиями
        </Text>
        <Btn onClick={() => navigator.clipboard.writeText("#weddingVP")}>
          #weddingVP
        </Btn>
      </BaseContainer>
      <div id='form'>
        <BaseContainer title='ПОЖАЛУЙСТА, ПОДТВЕРДИТЕ СВОЕ ПРИСУТСТВИЕ И ОТВЕТЬТЕ НА ВОПРОСЫ'>
          <Form />
        </BaseContainer>
      </div>
      <BaseContainer title='КОНТАКТЫ' bottom>
        <Text>
          По всем вопросам вам поможеет наш свадебный организоватор Ксения
        </Text>
        <a href='tel:89272751199' style={{ textDecoration: "none" }}>
          <Btn>+79272751199</Btn>
        </a>
      </BaseContainer>
    </Container>
  );
}

export default App;
