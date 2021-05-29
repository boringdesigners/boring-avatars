import Color from './color.js';

import { getNumber, getUnit, getRandomColor } from '../utilities.js';

export default class AvatarMarble extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement( 'template' );
    template.innerHTML = /* template */ `
      <style>
        :host {
          box-sizing: border-box;
          display: block;
          position: relative;
        }

        :host( [hidden] ) {
          display: none;
        }

        ::slotted( boring-color ) {
          display: none;
        }

      </style>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">

        <mask
          id="mask"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0">
          <path
            d="M80 40C80 17.909 62.091 0 40 0S0 17.909 0 40s17.909 40 40 40 40-17.909 40-40z"
            fill="#ffffff" />
        </mask>

        <g mask="url( #mask )">
          <path
            id="one"
            d="M80 40C80 17.909 62.091 0 40 0S0 17.909 0 40s17.909 40 40 40 40-17.909 40-40z" />
          <path
            id="two"
            filter="url( #filter )"
            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" />
          <path
            id="three"
            filter="url( #filter )"
            style="mix-blend-mode: overlay"
            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" />            
        </g>

        <defs>
          <filter
            id="filter"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur" />
          </filter>
        </defs>        

      </svg>
      <slot></slot>
    `;

    // Properties    
    this._colors = null;

    // Root
    this.attachShadow( {mode: 'open'} );
    this.shadowRoot.appendChild( template.content.cloneNode( true ) );

    // Elements
    this.$svg = this.shadowRoot.querySelector( 'svg' );
    this.$mask = this.shadowRoot.querySelector( 'mask' );
    this.$one = this.shadowRoot.querySelector( '#one' );
    this.$two = this.shadowRoot.querySelector( '#two' );
    this.$three = this.shadowRoot.querySelector( '#three' );

    // Slot
    this.$slot = this.shadowRoot.querySelector( 'slot' );
    this.$slot.addEventListener( 
      'slotchange', 
      ( evt ) => this.doSlotChange( evt ) 
    );    
  }

  doSlotChange( evt ) {
    const colors = [];

    for( let c = 0; c < this.children.length; c++ ) {
      colors.push( this.children[c].value );
    }

    if( colors.length > 0 )
      this._colors = [... colors];

    this._render();
  }

  // When things change
  _render() {
    // The usual suspects
    const box = this.size === null ? 80 : this.size;
    const colors = this.colors === null ? ['#00000000'] : this.colors;
    const elements = 3;
    const name = this.name === null ? '' : this.name;
    const number = getNumber( name );    
    const range = colors.length;    
    const size = 80;

    // Specific to marble style    
    const fades = Array.from( {length: elements}, ( _, i ) => ( {
      color: getRandomColor( number + i, colors, range ),
      translate_x: getUnit( number * ( i + 1 ), size / 10, 1 ),
      translate_y: getUnit( number * ( i + 1 ), size / 10, 2 ),
      scale: ( 1.2 + ( getUnit( number * ( i + 1 ), size / 20 ) / 10 ) ),
      rotate: getUnit( number * ( i + 1 ), 360, 1 )
    } ) );

    // SVG
    this.$svg.setAttribute( 'viewBox', `0 0 ${size} ${size}` );
    this.$svg.setAttribute( 'width', box );
    this.$svg.setAttribute( 'height', box );

    // Mask
    this.$mask.setAttributeNS( null, 'width', size );
    this.$mask.setAttributeNS( null, 'height', size );

    // One
    this.$one.setAttributeNS( null, 'fill', fades[0].color ); 

    // Two
    this.$two.setAttributeNS( null, 'fill', fades[1].color );  
    this.$two.setAttributeNS( null, 'transform', `translate( ${fades[1].translate_x} ${fades[1].translate_y} ) rotate( ${fades[1].rotate} ${size / 2} ${size / 2} ) scale( ${fades[2].scale} )` );   

    // Three
    this.$three.setAttributeNS( null, 'fill', fades[2].color );  
    this.$three.setAttributeNS( null, 'transform', `translate( ${fades[2].translate_x} ${fades[2].translate_y} ) rotate( ${fades[2].rotate} ${size / 2} ${size / 2} ) scale( ${fades[2].scale} )` );       
  }

  // Properties set before module loaded
  _upgrade( property ) {
    if( this.hasOwnProperty( property ) ) {
      const value = this[property];
      delete this[property];
      this[property] = value;
    }
  }

  // Connceted to DOM
  // Update render
  connectedCallback() {  
    // Check data property before render
    // May be assigned before module is loaded
    this._upgrade( 'colors' );
    this._upgrade( 'hidden' );
    this._upgrade( 'name' );
    this._upgrade( 'size' );

    this._render();
  }

  // Watched attributes
  static get observedAttributes() {
    return [
      'hidden',
      'name',
      'size'
    ];
  }

  // Observed tag attribute has changed
  // Update render
  attributeChangedCallback( name, old, value ) {
    this._render();
  }

  // Properties
  // Not reflected
  get colors() {
    let values = null;
    
    for( let c = 0; c < this.children.length; c++ ) {
      if( values === null )
        values = [];

      values.push( this.children[c].value );
    }

    return values;
  }

  set colors( values ) {
    while( this.children.length > 0 ) 
      this.children[0].remove();

    if( values === null ) {
      this._colors = null;
    } else {
      for( let v = 0; v < values.length; v++ ) {
        const element = document.createElement( 'boring-color' );
        element.value = values[v];
        this.appendChild( element );
      }
    }
  }

  // Attributes
  // Reflected
  get hidden() {
    return this.hasAttribute( 'hidden' );
  }

  set hidden( value ) {
    if( value !== null ) {
      if( typeof value === 'boolean' ) {
        value = value.toString();
      }

      if( value === 'false' ) {
        this.removeAttribute( 'hidden' );
      } else {
        this.setAttribute( 'hidden', '' );
      }
    } else {
      this.removeAttribute( 'hidden' );
    }
  }

  get name() {
    if( this.hasAttribute( 'name' ) ) {
      return this.getAttribute( 'name' );
    }

    return null;
  }

  set name( value ) {
    if( value !== null ) {
      this.setAttribute( 'name', value );
    } else {
      this.removeAttribute( 'name' );
    }
  }

  get size() {
    if( this.hasAttribute( 'size' ) ) {
      return parseInt( this.getAttribute( 'size' ) );
    }

    return null;
  }

  set size( value ) {
    if( value !== null ) {
      this.setAttribute( 'size', value );
    } else {
      this.removeAttribute( 'size' );
    }
  }    
}

window.customElements.define( 'boring-avatar-marble', AvatarMarble );
