import Color from './color.js';

import { getBoolean, getNumber, getUnit, getRandomColor } from '../utilities.js';

export default class AvatarBauhaus extends HTMLElement {
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
          maskUnits="userSpaceOnUse"
          x="0"
          y="0">
          <rect fill="#ffffff" />
        </mask>

        <g mask="url( #mask )">
          <rect />
          <rect />
          <circle />
          <line x1="0" stroke-width="2" />
        </g>

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
    this.$shape = this.shadowRoot.querySelector( 'mask rect' );
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
    // The usual suspects
    const box = this.size === null ? 80 : this.size;
    const colors = this.colors === null ? ['#00000000'] : this.colors;
    const elements = 4;
    const name = this.name === null ? '' : this.name;
    const number = getNumber( name );    
    const range = colors.length;    
    const size = 80;

    // Specific to bauhaus style    
    const parts = Array.from( {length: elements}, ( _, i ) => ( {
      color: getRandomColor( number + i, colors, range ),
      translate_x: getUnit( number * ( i + 1 ), ( size / 2 - ( i + 17 ) ), 1 ),
      translate_y: getUnit( number * ( i + 1 ), ( size / 2 - ( i + 17 ) ), 2 ),
      rotate: getUnit( number * ( i + 1 ), 360 ),
      is_square: getBoolean( number, 2 )
    } ) );

    // SVG
    this.$svg.setAttribute( 'viewBox', `0 0 ${size} ${size}` );
    this.$svg.setAttribute( 'width', box );
    this.$svg.setAttribute( 'height', box );

    // Mask
    this.$mask.setAttributeNS( null, 'width', size );
    this.$mask.setAttributeNS( null, 'height', size );

    // Shape
    this.$shape.setAttributeNS( null, 'width', size );
    this.$shape.setAttributeNS( null, 'height', size );    
    this.$shape.setAttributeNS( null, 'rx', size / 2 );        

    // Rectangle
    this.$group.children[0].setAttributeNS( null, 'width', size );
    this.$group.children[0].setAttributeNS( null, 'height', size );    
    this.$group.children[0].setAttributeNS( null, 'rx', size / 2 );    
    this.$group.children[0].setAttributeNS( null, 'fill', parts[0].color );
    
    // Rectangle
    this.$group.children[1].setAttributeNS( null, 'x', ( size - 60 ) / 2 );
    this.$group.children[1].setAttributeNS( null, 'y', ( size - 20 ) / 2 );  
    this.$group.children[1].setAttributeNS( null, 'width', size );      
    this.$group.children[1].setAttributeNS( 
      null, 
      'height', 
      parts[1].is_square ? size : size / 8 
    );    
    this.$group.children[1].setAttributeNS( null, 'fill', parts[1].color );    
    this.$group.children[1].setAttributeNS( 
      null, 
      'transform', 
      `translate( ${parts[1].translate_x} ${parts[1].translate_y} ) 
       rotate( ${parts[1].rotate} ${size / 2} ${size / 2} )` 
    );

    // Circle
    this.$group.children[2].setAttributeNS( null, 'cx', size / 2 );
    this.$group.children[2].setAttributeNS( null, 'cy', size / 2 );  
    this.$group.children[2].setAttributeNS( null, 'r', size / 5 );      
    this.$group.children[2].setAttributeNS( null, 'fill', parts[2].color );    
    this.$group.children[2].setAttributeNS( 
      null, 
      'transform', 
      `translate( ${parts[2].translate_x} ${parts[2].translate_y} )` 
    );    

    // Line
    this.$group.children[3].setAttributeNS( null, 'y1', size / 2 );
    this.$group.children[3].setAttributeNS( null, 'x2', size );  
    this.$group.children[3].setAttributeNS( null, 'y2', size / 2 );      
    this.$group.children[3].setAttributeNS( null, 'stroke', parts[3].color );    
    this.$group.children[3].setAttributeNS( 
      null, 
      'transform', 
      `translate( ${parts[3].translate_x} ${parts[3].translate_y} ) 
       rotate( ${parts[3].rotate} ${size / 2} ${size / 2} )` 
    );    
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

window.customElements.define( 'boring-avatar-bauhaus', AvatarBauhaus );
