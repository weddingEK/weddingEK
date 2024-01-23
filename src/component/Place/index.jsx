import { Title } from "../WeddingConvert/styles";
import {
  Container,
  PlaceBackground,
  Im,
  Content,
  Text,
  SubText,
  Con,
} from "./styles";
import image from "./assets/image.png";
export default function Place() {
  return (
    <Container id='place'>
      <Title>Место проведения</Title>
      <PlaceBackground>
        <Im src={image} />
        <Content>
          <Con>
            <SubText>30.04.2023</SubText>
            <Text>GRAND HALL</Text>
          </Con>
          <Con>
            <SubText>Саранск</SubText>
            <SubText>ул. Гожувская 41В</SubText>
          </Con>
        </Content>
      </PlaceBackground>
    </Container>
  );
}
