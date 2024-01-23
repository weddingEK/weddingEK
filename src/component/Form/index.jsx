import { useState } from "react";
import { Container, CheckOnIt, NameCont, Checkbox } from "./styles";
import { Btn } from "../Colors/styles";
import emailjs from "emailjs-com";
import confetti from "canvas-confetti";
export default function Form() {
  const [name, setName] = useState("");
  const [additionalName, setAdditionalName] = useState("");
  const [onIt, setOnIt] = useState(true);
  const [shamp, setShamp] = useState(false);
  const [vine, setVine] = useState(false);
  const [vodka, setVodka] = useState(false);
  const [wiskey, setWiskey] = useState(false);
  const [konyak, setKonyak] = useState(false);
  const [noAlco, setNoAlco] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleAdditionalGiestChange = (event) => {
    setAdditionalName(event.target.value);
  };

  const onItCheckbox = ({ target: { checked } }) => {
    setOnIt(checked);
  };

  const onOutCheckbox = () => {
    setOnIt(onIt ? false : true);
  };

  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    var templateParams = {
      name: `Имя гостя: ${name}`,
      extraUser: `Так же с гостем будут: ${additionalName}`,
      onit: `Присутствие: ${onIt ? "Да" : "Нет"}`,
      alco: `Алкоголь: ${shamp ? "шампанское," : ""} ${vine ? "вино," : ""} ${
        vodka ? "водкa" : ""
      } ${wiskey ? "виски," : ""} ${konyak ? "коньяк," : ""} ${
        noAlco ? "безалкогольные напитки" : ""
      }`,
    };
    emailjs
      .send(
        "service_w1725yc",
        "template_0ejopza",
        templateParams,
        "1E-X_CkWu__EQVMIh",
      )
      .then(
        (result) => {
          confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            origin: {
              x: Math.random(),
              // since they fall down, start a bit higher than random
              y: Math.random() - 0.2,
            },
          });
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  return (
    <form onSubmit={sendEmail}>
      <Container>
        <CheckOnIt>
          <Checkbox type='checkbox' checked={onIt} onChange={onItCheckbox} />
          <p>с радостью приду</p>
        </CheckOnIt>
        <CheckOnIt>
          <Checkbox type='checkbox' checked={!onIt} onChange={onOutCheckbox} />
          <p>к сожалению, не смогу быть</p>
        </CheckOnIt>
        <label>Меня зовут</label>
        <NameCont
          placeholder='Ваше имя и фамилия'
          type='text'
          value={name}
          onChange={handleChange}
        />
        <label>Кто еще будет с вами?</label>
        <NameCont
          placeholder='Имя и фамилия'
          type='text'
          value={additionalName}
          onChange={handleAdditionalGiestChange}
        />
        <label>Ваши предпочтениия по напиткам</label>
        <div>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={shamp}
              onChange={() => {
                setShamp(!shamp);
              }}
            />
            шампанское
          </CheckOnIt>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={vine}
              onChange={() => {
                setVine(!vine);
              }}
            />
            вино
          </CheckOnIt>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={vodka}
              onChange={() => {
                setVodka(!vodka);
              }}
            />
            водка
          </CheckOnIt>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={wiskey}
              onChange={() => {
                setWiskey(!wiskey);
              }}
            />
            виски
          </CheckOnIt>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={konyak}
              onChange={() => {
                setKonyak(!konyak);
              }}
            />
            коньяк
          </CheckOnIt>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={noAlco}
              onChange={() => {
                setNoAlco(!noAlco);
              }}
            />
            безалкогольные напитки
          </CheckOnIt>
        </div>
        <Btn id='button' type='submit' className='confetti-button'>
          Отправить
        </Btn>
      </Container>
    </form>
  );
}
