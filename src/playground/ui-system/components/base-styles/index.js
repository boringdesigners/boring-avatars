import { createGlobalStyle, css } from 'styled-components'

const cssVariables = css`
  --sp-s: 0.5rem;
  --sp-m: 1rem;
  --sp-l: 1.5rem;
  --sp-xl: 3rem;

  --textbox: 0.4rem;

  --pagePadding: var(--sp-xl);
`

const BaseStyles = createGlobalStyle`
  :root {
    ${cssVariables}
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
  }
`

export default BaseStyles