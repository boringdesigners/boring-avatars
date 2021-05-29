import Color from './color.js';

import { 
  getNumber, 
  getUnit, 
  getBoolean, 
  getRandomColor, 
  getContrast 
} from '../utilities.js';

export default class AvatarBeam extends HTMLElement {
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
          <rect rx="20" fill="white" />
        </mask>

        <g mask="url( #mask )" fill="transparent">
          <rect id="background" rx="20" />       
          <rect id="wrapper" x="0" y="0" />             

          <g id="face">
            <path />
            <rect 
              class="eye"
              y="14" 
              width="1.5"
              height="2" 
              rx="1" 
              stroke="none" />
            <rect 
              class="eye"
              y="14" 
              width="1.5"
              height="2" 
              rx="1" 
              stroke="none" />
          </g>            
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
    this.$background = this.shadowRoot.querySelector( '#background' );
    this.$wrapper = this.shadowRoot.querySelector( '#wrapper' );
    this.$face = this.shadowRoot.querySelector( '#face' );
    this.$mouth = this.shadowRoot.querySelector( 'path' );
    this.$eyes = this.shadowRoot.querySelectorAll( '.eye' );

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
    const size = 36;

    // Specific to beam style
    const wrapper_color = getRandomColor( number, colors, range );    
    const face_color = getContrast( wrapper_color );        
    const background_color = getRandomColor( number + 13, colors, range );
    const pre_translate_x = getUnit( number, 10, 1 );
    const pre_translate_y = getUnit( number, 10, 2 );  
    const wrapper_translate_x = pre_translate_x < 5 ? ( pre_translate_x + size / 9 ) : pre_translate_x;
    const wrapper_translate_y = pre_translate_y < 5 ? ( pre_translate_y + size / 9 ) : pre_translate_y;      
    const wrapper_rotate = getUnit( number, 360 );
    const wrapper_scale = ( 1 + ( getUnit( number, size / 12 ) / 10 ) );
    const is_open = getBoolean( number, 2 );
    const is_circle = getBoolean( number, 1 );
    const eye_spread = getUnit( number, 5 );
    const mouth_spread = getUnit( number, 3 );
    const face_rotate = getUnit( number, 10, 3 );
    const face_translate_x = wrapper_translate_x > ( size / 6 ) ? wrapper_translate_x / 2 : getUnit( number, 8, 1 );
    const face_translate_y = wrapper_translate_y > ( size / 6 )  ? wrapper_translate_y / 2 : getUnit( number, 7, 2 );

    // SVG
    this.$svg.setAttribute( 'viewBox', `0 0 ${size} ${size}` );
    this.$svg.setAttribute( 'width', box );
    this.$svg.setAttribute( 'height', box );

    // Mask
    this.$mask.setAttributeNS( null, 'width', size );
    this.$mask.setAttributeNS( null, 'height', size );

    // Mask shape
    this.$shape.setAttributeNS( null, 'width', size );
    this.$shape.setAttributeNS( null, 'height', size );

    // Background 
    this.$background.setAttributeNS( null, 'width', size );
    this.$background.setAttributeNS( null, 'height', size );
    this.$background.setAttributeNS( null, 'fill', background_color );
    
    // Wrapper 
    this.$wrapper.setAttributeNS( null, 'width', size );
    this.$wrapper.setAttributeNS( null, 'height', size );
    this.$wrapper.setAttributeNS( null, 'fill', wrapper_color );    
    this.$wrapper.setAttributeNS( null, 'rx', is_circle ? size : size / 6 );   
    this.$wrapper.setAttributeNS( 
      null, 
      'transform', 
      `translate( ${wrapper_translate_x} ${wrapper_translate_y} ) 
       rotate( ${wrapper_rotate} ${size / 2} ${size / 2} ) 
       scale( ${wrapper_scale} )` 
    );   

    // Face
    this.$face.setAttributeNS( 
      null, 
      'transform', 
      `translate( ${face_translate_x} ${face_translate_y} ) 
        rotate( ${face_rotate} ${size / 2 } ${size / 2} )` 
      );

    // Mouth
    if( is_open ) {
      this.$mouth.setAttributeNS( 
        null, 
        'd', 
        `M15 ${( 19 + mouth_spread )}c2 1 4 1 6 0` 
      );
      this.$mouth.setAttributeNS( null, 'stroke', face_color );
      this.$mouth.setAttributeNS( null, 'fill', 'none' );
      this.$mouth.setAttributeNS( null, 'strokeLinecap', 'round' );
    } else {
      this.$mouth.setAttributeNS( 
        null, 
        'd', 
        `M13,${( 19 + mouth_spread )} a1,0.75 0 0,0 10,0` 
      );      
      this.$mouth.setAttributeNS( null, 'stroke', 'none' );      
      this.$mouth.setAttributeNS( null, 'fill', face_color );      
    }

    // Eyes
    this.$eyes[0].setAttributeNS( null, 'x', 14 - eye_spread );
    this.$eyes[0].setAttributeNS( null, 'fill', face_color );
    this.$eyes[1].setAttributeNS( null, 'x', 20 + eye_spread );
    this.$eyes[1].setAttributeNS( null, 'fill', face_color );    
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

window.customElements.define( 'boring-avatar-beam', AvatarBeam );
