import { createGlobalStyle, css } from 'styled-components'

const cssVariables = css`
  --sp-s: 0.5rem;
  --sp-m: 1rem;
  --sp-l: 1.5rem;
  --sp-xl: 3rem;

  --textbox: 0.4rem;

  --pagePadding: var(--sp-xl);

  --c-fieldHover: hsla(0,0%,0%,0.15);
  --c-fieldFocus: hsla(0,0%,0%,0.3);
  --c-background: hsl(0,0%,100%);
  --c-body: hsl(0,0%,20%);

  ${p => p.darkMode && css`
    --c-fieldHover: hsla(0,0%,100%,0.15);
    --c-fieldFocus: hsla(0,0%,100%,0.3);
    --c-background: hsl(0,0%,3%);
    --c-body: hsl(0,0%,80%);
  `};
`

const BaseStyles = createGlobalStyle`
  :root {
    ${cssVariables}
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background-color: var(--c-background);
    color: var(--c-body);
  }
`

export default BaseStyles