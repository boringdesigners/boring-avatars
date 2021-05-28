import styled from 'styled-components'

const Slider = styled.input`
  &[type='range'] {
    -webkit-appearance: none;
    margin: 0;
    width: 100%;
    background-color: transparent;
  }
  &[type='range']:focus {
    outline: none;
  }
  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: var(--c-button);
    border-radius: 4px;
  }
  &[type='range']::-webkit-slider-thumb {
    height: 16px;
    width: 16px;
    margin-top: -4px;
    border-radius: 8px;
    background: var(--c-slider);
    cursor: pointer;
    -webkit-appearance: none;
  }
  &[type='range']:focus::-webkit-slider-runnable-track {
    background: var(--c-buttonHover);
  }
  &[type='range']::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: var(--c-button);
    border-radius: 4px;
  }
  &[type='range']::-moz-range-thumb {
    height: var(--buttonHeight);
    height: 16px;
    width: 16px;
    margin-top: -4px;
    border-radius: 8px;
    background: var(--c-button);
    cursor: pointer;
  }
  &[type='range']::-ms-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: var(--c-button);
  }
  &[type='range']::-ms-fill-lower {
    background: var(--c-button);
    border-radius: 8px;
  }
  &[type='range']::-ms-fill-upper {
    background: var(--c-button);
    border-radius: 8px;
  }
  &[type='range']::-ms-thumb {
    height: var(--buttonHeight);
    height: 16px;
    width: 16px;
    margin-top: -4px;
    border-radius: 4px;
    background: var(--c-button);
    cursor: pointer;
  }
  &[type='range']:focus::-ms-fill-lower {
    background: var(--c-buttonHover);
  }
  &[type='range']:focus::-ms-fill-upper {
    background: var(--c-buttonHover);
  }
`

export default Slider
