import NavBar from "../../componets/Navbar/NavBar"
import { MessageList } from "../../componets/messageList/MessageList";

export default function Login() {
  const mensajes = [
    { text: "Hola Camilo, ¿cómo vas?", mine: false },
    { text: "Todo bien, ¿y tú?", mine: true },
    { text: "Bien también. ¿Ya avanzaste con el proyecto?", mine: false }
  ];
  return (
    <>
    <NavBar />
    <MessageList messages={mensajes} />
    </>
  )
}
