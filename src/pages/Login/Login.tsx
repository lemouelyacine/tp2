import './Login.css'
import { Button } from '../../design/Button.tsx'
import {Card} from "../../design/Card.tsx";
import styled from "@emotion/styled";

function Login({connectUser}: {connectUser: () => void} ) {

  const BowserImage = styled.img`
    width: 319px
  ;
    height: 328px;
  `
  const Text = styled.p`
    font-size: 24px;
    font-weight: 500;
    color: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 20px;
  `

  return (
      <Card customStyle={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column"
      }}>
          <BowserImage src={"/bowser.webp"} />
          <Text style={{ fontSize: "32px"}}>Hey pas si vite ! Vous n'etes pas conneter</Text>
          <Button
              onClick={connectUser}
              customStyle={{
              width: "377px",
              height: "73px",
              borderRadius: "20px",
              padding: "0px",
              color: "#000",
              fontFamily: "Helvetica Neue",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal"
          }}>Se connecter</Button>
      </Card>
  )
}

export default Login
