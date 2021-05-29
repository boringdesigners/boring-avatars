import AvatarBauhaus from './avatar-bauhaus.js';
import AvatarBeam from './avatar-beam.js';
import AvatarMarble from './avatar-marble.js';
import AvatarPixel from './avatar-pixel.js';
import AvatarRing from './avatar-ring.js';
import AvatarSunset from './avatar-sunset.js';
import Color from './color.js';

export default class Avatar extends HTMLElement {
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

        ::slotted( boring-color ) {
          display: none;
        }
      </style>
      <boring-avatar-marble></boring-avatar-marble>      
      <boring-avatar-beam></boring-avatar-beam>
      <boring-avatar-pixel></boring-avatar-pixel>      
      <boring-avatar-sunset></boring-avatar-sunset>      
      <boring-avatar-bauhaus></boring-avatar-bauhaus>            
      <boring-avatar-ring></boring-avatar-ring>  
      <slot></slot>                
    `;

    // Properties    
    this._colors = null;

    // Root
    this.attachShadow( {mode: 'open'} );
    this.shadowRoot.appendChild( template.content.cloneNode( true ) );

    // Elements
    this.$beam = this.shadowRoot.querySelector( 'boring-avatar-beam' );
    this.$marble = this.shadowRoot.querySelector( 'boring-avatar-marble' );
    this.$pixel = this.shadowRoot.querySelector( 'boring-avatar-pixel' );    
    this.$sunset = this.shadowRoot.querySelector( 'boring-avatar-sunset' );    
    this.$bauhaus = this.shadowRoot.querySelector( 'boring-avatar-bauhaus' );        
    this.$ring = this.shadowRoot.querySelector( 'boring-avatar-ring' );            

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
    const colors = this.colors === null ? ['#00000000'] : this.colors;
    const name = this.name === null ? '' : this.name;
    const size = this.size === null ? 80 : this.size;
    const variant = this.variant === null ? 'marble' : this.variant;

    this.$beam.hidden = variant === 'beam' ? false : true;
    this.$beam.colors = colors;
    this.$beam.name = name;
    this.$beam.size = size;    

    this.$marble.hidden = variant === 'marble' ? false : true;
    this.$marble.colors = colors;
    this.$marble.name = name;
    this.$marble.size = size;        

    this.$pixel.hidden = variant === 'pixel' ? false : true;
    this.$pixel.colors = colors;
    this.$pixel.name = name;
    this.$pixel.size = size;

    this.$sunset.hidden = variant === 'sunset' ? false : true;
    this.$sunset.colors = colors;
    this.$sunset.name = name;
    this.$sunset.size = size;    

    this.$bauhaus.hidden = variant === 'bauhaus' ? false : true;
    this.$bauhaus.colors = colors;
    this.$bauhaus.name = name;
    this.$bauhaus.size = size;        

    this.$ring.hidden = variant === 'ring' ? false : true;
    this.$ring.colors = colors;
    this.$ring.name = name;
    this.$ring.size = size;            
  }

  // Properties set before module loaded
  _upgrade( property ) {
    if( this.hasOwnProperty( property ) ) {
      const value = this[property];
      delete this[property];
      this[property] = value;
    }
  }

  // Default render
  // No attributes set
  connectedCallback() {  
    // Check data property before render
    // May be assigned before module is loaded
    this._upgrade( 'colors' );
    this._upgrade( 'name' );
    this._upgrade( 'size' );
    this._upgrade( 'variant' );
    this._render();
  }

  // Watched attributes
  static get observedAttributes() {
    return [
      'name',
      'size',
      'variant'
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

  get variant() {
    if( this.hasAttribute( 'variant' ) ) {
      return this.getAttribute( 'variant' );
    }

    return null;
  }

  set variant( value ) {
    if( value !== null ) {
      this.setAttribute( 'variant', value );
    } else {
      this.removeAttribute( 'variant' );
    }
  }  
}

window.customElements.define( 'boring-avatar', Avatar );
