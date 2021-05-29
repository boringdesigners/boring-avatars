import Color from './color.js';

import { getNumber, getRandomColor } from '../utilities.js';

export default class AvatarPixel extends HTMLElement {
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
          <circle fill="white" />
        </mask>

        <g mask="url( #mask )"></g>

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
    this.$mask = this.shadowRoot.querySelector( '#mask' );    
    this.$circle = this.shadowRoot.querySelector( 'circle' );    
    this.$group = this.shadowRoot.querySelector( 'g' ); 
    
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
    const box = this.size === null ? 80 : this.size;
    const colors = this.colors === null ? ['#00000000'] : this.colors;
    const elements = 64;
    const name = this.name === null ? '' : this.name;
    const number = getNumber( name );
    const range = colors.length;
    const size = 80;

    // SVG size and view box
    this.$svg.setAttribute( 'viewBox', `0 0 ${size} ${size}` );
    this.$svg.setAttribute( 'width', box );
    this.$svg.setAttribute( 'height', box );

    // Set size of mask
    this.$mask.setAttributeNS( null, 'width', size );
    this.$mask.setAttributeNS( null, 'height', size );

    // Set size of mask shape
    this.$circle.setAttributeNS( null, 'cx', size / 2 );
    this.$circle.setAttributeNS( null, 'cy', size / 2 );
    this.$circle.setAttributeNS( null, 'r', size / 2 ); 

    // Match number of elements
    // Without having to remove and rebuild
    // Only what is needed
    while( this.$group.children.length > elements )
      this.$group.children[0].remove();

    while ( this.$group.children.length < elements ) {
      const rect = document.createElementNS( 
        'http://www.w3.org/2000/svg', 
        'rect' 
      );
      rect.setAttributeNS( null, 'width', 10 );
      rect.setAttributeNS( null, 'height', 10 );      
      this.$group.appendChild( rect );
    }

    // Populate aspects of each pixel element
    for( let r = 0; r < 8; r++ ) {
      for( let c = 0; c < 8; c++ ) {
        const color = getRandomColor( 
          number % ( ( ( r * 8 ) + c ) + 13 ), 
          colors, 
          range 
        );
        const index = ( r * 8 ) + c;
        this.$group.children[index].setAttributeNS( null, 'x', r * 10 );
        this.$group.children[index].setAttributeNS( null, 'y', c * 10 );
        this.$group.children[index].setAttributeNS( null, 'fill', color );
      }
    }
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

window.customElements.define( 'boring-avatar-pixel', AvatarPixel );
