import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FcCalendar } from "react-icons/fc";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <div style={{ "margin": "12px 0" }}>
          <a href='#academica' id="academica" style={{ "textDecoration": "none", "color": "black", "cursor": "default" }}>
            <h3>Acerca de mi</h3>
          </a>
          <Row style={{ margin: "12px 0" }}>
            <Col xs={12} sm={3} style={{ display: "flex", "margin": "auto", "textAlign": "center", "justifyContent": "center" }}>
              <Image roundedCircle src={`${process.env.PUBLIC_URL}/rodrigo.jpg`} width={140} height={200} />
            </Col>
            <Col xs={12} sm={9}>
              <p>Me llamo Rodrigo Alvarez Perez. Tengo 21 años y soy un aficionado a jugar videojuegos, programar cosas y ver anime.</p>
              <p>Estudié la secundaria en el Plantel Fundación Azteca, donde conocí mi amor por la programación gracias a un muy buen profesor.</p>
              <p>La vocacional la estudié en el CECyT #8, en la carrera de Tecnico en Computación. Ahi conocí a varios de mis mejores amigos y tuve la oportunidad de apoyar a varios profesores del área dando la presentación de la carrera.</p>
              <p>Hoy en dia estoy estudiando la carrera en ESCOM, voy en 5to semestre. Se podría decir que ha sido una de las mejores decisiones de mi vida.</p>
            </Col>
          </Row>
        </div>
        <div id="hobbies" style={{ "margin": "12px 0" }}>
          <a href='#hobbies' id="hobbies" style={{ "textDecoration": "none", "color": "black", "cursor": "default" }}>
            <h3>Mis hobbies</h3>
          </a>
          <Row style={{ "margin": "12px 0" }}>
            <Col xs={12} sm={9}>
              <h4>Videojuegos</h4>
              <p>Desde muy joven desarrollé una afición por los videojuegos, casi siempre estaba pegado a una consola jugando de todo tipo. Había veces en las que terminaba los juegos en cuestión de horas.</p>
              <p>Hoy en dia juego mucho Genshin Impact, Elden Ring y Battle Royales como Fortnite y Warzone.</p>
            </Col>
            <Col xs={12} sm={3} style={{ display: "flex", "margin": "auto", "textAlign": "center", "justifyContent": "center" }}>
              <Image roundedCircle src={`${process.env.PUBLIC_URL}/ganyu_sticker.webp`} width={200} />
            </Col>
          </Row>
          <Row style={{ "margin": "12px 0" }}>
            <Col xs={{ order: "last", span: 12 }} sm={{ order: "first", span: 4 }} style={{ display: "flex", "margin": "auto", "textAlign": "center", "justifyContent": "center" }}>
              <Image roundedCircle src={`${process.env.PUBLIC_URL}/anya_heh.webp`} height={130} />
            </Col>
            <Col xs={{ order: "first" }} sm={{ order: "last" }}>
              <h4>Anime y Mangas</h4>
              <p>Esta afición tambien la desarrollé desde temprana edad, sin embargo solo veía anime en esa entonces. Hace poco comencé a leer mangas y ya no puedo parar 😅. Cuando un anime o manga de verdad me gusta, solo hace falta un día completo para terminar la serie.</p>
              <p>Recomendación de la casa: Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai, SpyxFamily, That Time I Got Reincarnated as a Slime y The Quintessential Quintuplets.</p>
            </Col>
          </Row>
          <Row style={{ "margin": "12px 0" }}>
            <Col xs={12} sm={9}>
              <h4>Programación</h4>
              <p>Mi afición por la programación empezó en la secundaria, cuando me enseñaron por primera vez Turbo C. A partir de ahí quedé cautivado por el mundo de posibilidades que se puede hacer con la programación.</p>
              <p>Dentro de mis áreas y lenguajes favoritos se encuentran:</p>
              <ul>
                <li>Javascript. React, Express</li>
                <li>Java. Android</li>
                <li>Swift. iOS</li>
                <li>Python. Pymongo, Flask</li>
              </ul>
            </Col>
            <Col xs={12} sm={3} style={{ display: "flex", "margin": "auto", "textAlign": "center", "justifyContent": "center" }}>
              <Image roundedCircle src={`${process.env.PUBLIC_URL}/programming.jpeg`} height={180} />
            </Col>
          </Row>
        </div>
        <div id="crypto" style={{ margin: "12px 0" }}>
          <h3>Acerca de: Criptografia</h3>
          <h5>Tras Medio Siglo Criptógrafos Logran Descifrar Mensaje De Un Famoso Asesino Serial</h5>
          <p><FcCalendar size={28} />&nbsp;Diciembre 14, 2020</p>
          <Row style={{ margin: "12px 0" }}>
            <Col xs={12} sm={3} style={{ display: "flex", "margin": "auto", "textAlign": "center", "justifyContent": "center" }}>
              <Image src={`${process.env.PUBLIC_URL}/zodiac-killer.jpeg`} width={220} />
            </Col>
            <Col xs={12} sm={9}>
              <p>Un equipo de entusiastas de la criptografía anunció que había descifrado con éxito uno de los mensajes codificados enviados hace más de 50 años por el “Asesino del Zodiaco”, que aterrorizó al norte de California a fines de la década de 1960 y permanece sin identificar.<br />
                El mensaje fue enviado en noviembre de 1969 al periódico San Francisco Chronicle por el presunto asesino en serie, y su código constaba de una serie de letras y símbolos crípticos.<br />
                Según el trío que se dice que rompió el código, el mensaje incluye alardes y desafío a las autoridades sin pistas reales sobre el motivo o la identidad.
              </p>
            </Col>
          </Row>
          <Row style={{ "margin": "8px 0" }}>
            <Col xs={12} sm={9}>
              <p>
                La carta del asesino incluye el mensaje: <i>“Espero que se esté divirtiendo mucho tratando de atraparme… No le tengo miedo a la cámara de gas porque me enviará al paraíso (sic) mucho antes porque ahora tengo suficientes esclavos para trabajan para mi.”</i><br/>
                David Oranchak, un diseñador web estadounidense de 46 años, necesitó varios programas de computadora y años de trabajo para descifrar el complejo código en el que comenzó a trabajar en 2006.
                Fue ayudado por Sam Blake, un matemático australiano, y Jarl Van Eykcke, un logista belga, dijo Oranchak al San Francisco Chronicle, que confirmó el descubrimiento con el FBI, la agencia federal a cargo de la investigación.<br/>
                Pero el código utilizado en el primer mensaje era mucho más simple que el de “340 cifrado”, llamado así porque contiene 340 caracteres repartidos en 17 columnas.<br/>
                El cifrado 340 se lee en diagonal, comenzando desde la esquina superior izquierda y desplazando un cuadro hacia abajo y dos cuadros hacia la derecha.<br />
                Cuando se llega al fondo, el lector debe volver a la esquina opuesta, dijo el experto en un video publicado en su canal de YouTube.<br />
                Según él, el sistema de codificación aparece en particular en un manual de criptografía para el ejército estadounidense que data de la década de 1950.
              </p>
            </Col>
            <Col xs={12} sm={3} style={{ display: "flex", "margin": "auto", "textAlign": "center", "justifyContent": "center" }}>
              <Image src={`${process.env.PUBLIC_URL}/crypto_zodiac.webp`} height={250} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default App;
