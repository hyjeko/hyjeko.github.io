/*! For license information please see 137.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[137],{56137:(t,e,i)=>{i.r(e),i.d(e,{CalciteCheckbox:()=>m,defineCustomElement:()=>d});var a=i(77210),n=i(22398),o=i(48031),c=i(67449),r=i(69835),s=i(84294);const l=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalCheckboxBlur=(0,a.yM)(this,"calciteInternalCheckboxBlur",7),this.calciteCheckboxChange=(0,a.yM)(this,"calciteCheckboxChange",7),this.calciteInternalCheckboxFocus=(0,a.yM)(this,"calciteInternalCheckboxFocus",7),this.checked=!1,this.disabled=!1,this.hovered=!1,this.indeterminate=!1,this.required=!1,this.scale="m",this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",this.indeterminatePath="M13 8v1H3V8z",this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"",this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.setFocus(),this.indeterminate=!1,this.calciteCheckboxChange.emit())},this.keyDownHandler=t=>{" "!==t.key&&"Enter"!==t.key||(this.toggle(),t.preventDefault())},this.clickHandler=()=>{this.toggle()},this.onToggleBlur=()=>{this.calciteInternalCheckboxBlur.emit(!1)},this.onToggleFocus=()=>{this.calciteInternalCheckboxFocus.emit(!0)},this.onLabelClick=()=>{this.toggle()}}async setFocus(){var t;null===(t=this.toggleEl)||void 0===t||t.focus()}connectedCallback(){this.guid=this.el.id||`calcite-checkbox-${(0,n.g)()}`,(0,c.c)(this),(0,o.c)(this)}disconnectedCallback(){(0,c.d)(this),(0,o.d)(this)}componentDidRender(){(0,r.u)(this)}render(){return(0,a.h)(a.AA,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,a.h)("div",{"aria-checked":(0,s.t)(this.checked),"aria-label":(0,c.g)(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,ref:t=>this.toggleEl=t,role:"checkbox",tabIndex:this.disabled?void 0:0},(0,a.h)("svg",{class:"check-svg",viewBox:"0 0 16 16"},(0,a.h)("path",{d:this.getPath()})),(0,a.h)("slot",null)),(0,a.h)(o.H,{component:this}))}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host .toggle:focus .check-svg,:host .toggle:active .check-svg{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);-webkit-transition:var(--calcite-animation-timing);transition:var(--calcite-animation-timing)}.toggle:focus-visible{outline:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}},[1,"calcite-checkbox",{checked:[1540],disabled:[516],guid:[1537],hovered:[1540],indeterminate:[1540],label:[1],name:[520],required:[516],scale:[513],value:[8],setFocus:[64]}]);function h(){"undefined"!=typeof customElements&&["calcite-checkbox"].forEach((t=>{"calcite-checkbox"===t&&(customElements.get(t)||customElements.define(t,l))}))}h();const m=l,d=h},22398:(t,e,i)=>{i.d(e,{g:()=>a});const a=()=>[2,1,1,1,3].map((t=>{let e="";for(let i=0;i<t;i++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}}]);