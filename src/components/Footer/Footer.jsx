import React from 'react'
import { Div1, P, P2 } from './FooterStyles'


export default function Footer() {
  return (
    <Div1>
      <P>
        Page made by students:<br/>
        - Hernández Maya Diego Alfredo <br/>
        - Juárez Terrazas Aarón<br/>
        - Martínez González Luis Angel<br/>
      </P>

      <P2 style={{'textAlign': 'center', color: 'gray'}}>
        <br/>
        2022 Instituto Politecnico Nacional - UPIITA
      </P2>
    </Div1>
  )
}
