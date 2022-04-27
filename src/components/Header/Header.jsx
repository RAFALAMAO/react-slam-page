import { Container, H1, Div1, IpnImage, UpiitaIcon } from "./HeaderStyles"

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
          <IpnImage src="img/IPN_LOGO.webp" alt='IPN_LOGO'/>
          <UpiitaIcon src="img/upiitaIcon.png" alt='upiitaIcon'/>
        </Container>
      </Div1>
  )
}