import { Container, H1, Div1, ipnImage, upiitaIcon } from "./HeaderStyles"

export default function Header() {
  return (
      <Div1
        animate={{ x: [-100,0], opacity: [0.1,1] }}
        transition={{
          default: { duration: 1 },
        }}
      >
        <Container>
          <H1>ORBSLAM2 3D Map Plotter</H1>
          <img src="img/IPN_LOGO.webp" style={ipnImage} alt='IPN_LOGO'/>
          <img src="img/upiitaIcon.png" style={upiitaIcon} alt='upiitaIcon'/>
        </Container>
      </Div1>
  )
}