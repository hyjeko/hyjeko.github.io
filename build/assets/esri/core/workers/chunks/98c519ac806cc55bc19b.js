"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4695],{90344:(e,t,r)=>{r.d(t,{Ze:()=>p,p6:()=>f});var n=r(35454),o=r(70171);const a={year:"numeric",month:"numeric",day:"numeric"},i={year:"numeric",month:"long",day:"numeric"},s={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},u={hour:"numeric",minute:"numeric"},h={...u,second:"numeric"},m={"short-date":a,"short-date-short-time":{...a,...u},"short-date-short-time-24":{...a,...u,hour12:!1},"short-date-long-time":{...a,...h},"short-date-long-time-24":{...a,...h,hour12:!1},"short-date-le":a,"short-date-le-short-time":{...a,...u},"short-date-le-short-time-24":{...a,...u,hour12:!1},"short-date-le-long-time":{...a,...h},"short-date-le-long-time-24":{...a,...h,hour12:!1},"long-month-day-year":i,"long-month-day-year-short-time":{...i,...u},"long-month-day-year-short-time-24":{...i,...u,hour12:!1},"long-month-day-year-long-time":{...i,...h},"long-month-day-year-long-time-24":{...i,...h,hour12:!1},"day-short-month-year":s,"day-short-month-year-short-time":{...s,...u},"day-short-month-year-short-time-24":{...s,...u,hour12:!1},"day-short-month-year-long-time":{...s,...h},"day-short-month-year-long-time-24":{...s,...h,hour12:!1},"long-date":l,"long-date-short-time":{...l,...u},"long-date-short-time-24":{...l,...u,hour12:!1},"long-date-long-time":{...l,...h},"long-date-long-time-24":{...l,...h,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":u,"long-time":h},c=(0,n.w)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),g=(c.apiValues,c.toJSON.bind(c),c.fromJSON.bind(c),{ar:"ar-u-nu-latn-ca-gregory"});let d=new WeakMap,y=m["short-date-short-time"];function p(e){return m[e]||null}function f(e,t){return function(e){const t=e||y;if(!d.has(t)){const e=(0,o.Kd)(),r=g[(0,o.Kd)()]||e;d.set(t,new Intl.DateTimeFormat(r,t))}return d.get(t)}(t).format(e)}(0,o.Ze)((()=>{d=new WeakMap,y=m["short-date-short-time"]}))},70171:(e,t,r)=>{let n;r.d(t,{Kd:()=>i,Ze:()=>h,qe:()=>l});const o=globalThis.esriConfig?.locale??globalThis.dojoConfig?.locale;function a(){return o??globalThis.navigator?.language??"en"}function i(){return void 0===n&&(n=a()),n}const s=[];function l(e){return s.push(e),{remove(){s.splice(s.indexOf(e),1)}}}const u=[];function h(e){return u.push(e),{remove(){s.splice(u.indexOf(e),1)}}}globalThis.addEventListener?.("languagechange",(function(){const e=a();n!==e&&(n=e,[...u].forEach((t=>{t.call(null,e)})),[...s].forEach((t=>{t.call(null,e)})))}))},18848:(e,t,r)=>{r.d(t,{sh:()=>l,uf:()=>u});var n=r(70586),o=r(70171);const a={ar:"ar-u-nu-latn"};let i=new WeakMap,s={};function l(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function u(e,t){return-0===e&&(e=0),function(e){const t=e||s;if(!i.has(t)){const r=(0,o.Kd)(),n=a[(0,o.Kd)()]||r;i.set(t,new Intl.NumberFormat(n,e))}return(0,n.j0)(i.get(t))}(t).format(e)}(0,o.Ze)((()=>{i=new WeakMap,s={}}))},14695:(e,t,r)=>{r.r(t),r.d(t,{createLabelFunction:()=>g,formatField:()=>d});var n=r(20102),o=r(92604),a=r(90344),i=r(18848),s=r(35671),l=r(8813),u=r(59266);const h=o.Z.getLogger("esri.layers.support.labelFormatUtils"),m={type:"simple",evaluate:()=>null},c={getAttribute:(e,t)=>e.field(t)};async function g(e,t,o){if(!e||!e.symbol)return m;const a=e.where,i=(0,l.hV)(e),s=a?await Promise.resolve().then(r.bind(r,41534)):null;let g;if("arcade"===i.type){const e=await(0,u.WW)(i.expression,o,t);g={type:"arcade",evaluate(t){try{const r=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):t});if(null!=r)return r.toString()}catch(e){h.error(new n.Z("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:t,expression:i}))}return null},needsHydrationToEvaluate:()=>null==(0,l.el)(i.expression)}}else g={type:"simple",evaluate:e=>i.expression.replace(/{[^}]*}/g,(r=>{const n=r.slice(1,-1),o=t.get(n);if(!o)return r;let a=null;return"attributes"in e?e&&e.attributes&&(a=e.attributes[o.name]):a=e.field(o.name),null==a?"":d(a,o)}))};if(a){let r;try{r=s.WhereClause.create(a,t)}catch(e){return h.error(new n.Z("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:a,error:e})),m}const o=g.evaluate;g.evaluate=e=>{const t="attributes"in e?void 0:c;try{if(r.testFeature(e,t))return o(e)}catch(t){h.error(new n.Z("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:a,feature:e,error:t}))}return null}}return g}function d(e,t){if(null==e)return"";const r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){const t=e;for(const e of r.codedValues)if(e.code===t)return e.name}else if("range"===r.type){const t=+e,n="range"in r?r.range[0]:r.minValue,o="range"in r?r.range[1]:r.maxValue;if(n<=t&&t<=o)return r.name}let n=e;return"date"===t.type||"esriFieldTypeDate"===t.type?n=(0,a.p6)(n,(0,a.Ze)("short-date")):(0,s.H7)(t)&&(n=(0,i.uf)(+n)),n||""}},8813:(e,t,r)=>{r.d(t,{UO:()=>g,YI:()=>c,dI:()=>d,el:()=>x,hV:()=>m,z7:()=>h});var n=r(19153);const o="__begin__",a="__end__",i=new RegExp(o,"ig"),s=new RegExp(a,"ig"),l=new RegExp("^"+o,"i"),u=new RegExp(a+"$","i");function h(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function m(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),t.type="conventional"),t}function c(e){const t=m(e);if(!t)return null;switch(t.type){case"conventional":return d(t.expression);case"arcade":return t.expression}return null}function g(e){const t=m(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e.match(y);return t&&t[1].trim()||null}(t.expression);case"arcade":return x(t.expression)}return null}function d(e){let t;return e?(t=(0,n.gx)(e,(e=>o+'$feature["'+e+'"]'+a)),t=l.test(t)?t.replace(l,""):'"'+t,t=u.test(t)?t.replace(u,""):t+'"',t=t.replace(i,'" + ').replace(s,' + "')):t='""',t}const y=/^\s*\{([^}]+)\}\s*$/i,p=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,f=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,w=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function x(e){if(!e)return null;let t=p.exec(e)||f.exec(e);return t?t[1]||t[3]:(t=w.exec(e),t?t[2]:null)}}}]);