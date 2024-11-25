import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  creme: '#FFEBD9',
  branco: '#FFF8F2',
  preto: '#111',
  brancoTotal: '#fff'
}

export const GlobalCss = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
}

body {
background-color: ${cores.branco}
}
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
