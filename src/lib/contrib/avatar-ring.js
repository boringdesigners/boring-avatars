import Color from './color.js';

import { getNumber, getRandomColor } from '../utilities.js';

export default class AvatarRing extends HTMLElement {
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

        <path d="M90 45a45.001 45.001 0 00-76.82-31.82A45 45 0 000 45h90z" />
        <path d="M90 45a45.001 45.001 0 01-76.82 31.82A45 45 0 010 45h90z" />
        <path d="M83 45a38 38 0 00-76 0h76z" />
        <path d="M83 45a38 38 0 01-76 0h76z" />
        <path d="M77 45a32 32 0 10-64 0h64z" />
        <path d="M77 45a32 32 0 11-64 0h64z" />
        <path d="M71 45a26 26 0 00-52 0h52z" />
        <path d="M71 45a26 26 0 01-52 0h52z" />
        <circle cx="45" cy="45" r="23" />

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
    this.$paths = this.shadowRoot.querySelectorAll( 'path' );
    this.$circle = this.shadowRoot.querySelector( 'circle' );

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
    const name = this.name === null ? '' : this.name;
    const number = getNumber( name );    
    const range = colors.length;    
    const size = 90;

    // Specific to ring style    
    const shuffle = Array.from( 
      {length: 5}, 
      ( _, i ) => getRandomColor( number + ( i + 1 ), colors, range ) 
    );
    const icons = [];
    icons[0] = shuffle[0];
    icons[1] = shuffle[1];
    icons[2] = shuffle[1];
    icons[3] = shuffle[2];
    icons[4] = shuffle[2];
    icons[5] = shuffle[3];
    icons[6] = shuffle[3];
    icons[7] = shuffle[0];
    icons[8] = shuffle[4];

    // SVG
    this.$svg.setAttribute( 'viewBox', `0 0 ${size} ${size}` );
    this.$svg.setAttribute( 'width', box );
    this.$svg.setAttribute( 'height', box );

    // Paths
    for( let p = 0; p < this.$paths.length; p++ ) {
      this.$paths[p].setAttributeNS( null, 'fill', icons[p] );
    }

    // Circle
    this.$circle.setAttributeNS( null, 'fill', icons[8] );
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

window.customElements.define( 'boring-avatar-ring', AvatarRing );
