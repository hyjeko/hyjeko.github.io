"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3750,4477],{42033:(e,t,r)=>{r.d(t,{E:()=>o,_:()=>l});var i=r(70586);async function o(e,t){const{WhereClause:i}=await Promise.resolve().then(r.bind(r,41534));return i.create(e,t)}function l(e,t){return(0,i.pC)(e)?(0,i.pC)(t)?`(${e}) AND (${t})`:e:t}},62128:(e,t,r)=>{r.r(t),r.d(t,{default:()=>B});var i=r(43697),o=(r(66577),r(38171)),l=(r(78223),r(46791)),n=r(20102),a=r(22974),s=r(70586),p=r(16453),y=r(78286),u=r(20941),d=r(5600),c=r(75215),m=r(71715),h=r(52011),f=r(30556),g=r(44547),b=r(82526),w=r(8744),v=r(3121),_=(r(67676),r(80442),r(70921)),S=r(3920);r(92604).Z.getLogger("esri.core.support.OwningCollection");let C=class extends((0,S.p)(l.Z)){constructor(e){super(e),this.handles.add([this.on("before-add",(e=>{(0,s.Wi)(e.item)&&e.preventDefault()})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(e=>this._release(e.item)))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(l.Z.ofType(this.itemType.Type))(e):new l.Z(e)}};(0,i._)([(0,d.Cb)()],C.prototype,"owner",null),C=(0,i._)([(0,h.j)("esri.core.support.OwningCollection")],C);var I=r(87085),O=r(71612),N=r(72965),L=(r(37697),r(52421));let x=class extends C{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};(0,i._)([(0,L.c)({Type:o.Z,ensureType:(0,c.se)(o.Z)})],x.prototype,"itemType",void 0),x=(0,i._)([(0,h.j)("esri.support.GraphicsCollection")],x);var T=r(86787);let Z=class extends((0,O.h)((0,N.M)(I.Z))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new x,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};var M,J;(0,i._)([(0,d.Cb)({type:T.ZP})],Z.prototype,"elevationInfo",void 0),(0,i._)([(0,d.Cb)((M=x,J="graphics",{type:M,cast:_.R,set(e){const t=(0,_.Z)(e,this._get(J),M);t.owner=this,this._set(J,t)}}))],Z.prototype,"graphics",void 0),(0,i._)([(0,d.Cb)({type:["show","hide"]})],Z.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)()],Z.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],Z.prototype,"type",void 0),(0,i._)([(0,d.Cb)({constructOnly:!0})],Z.prototype,"internal",void 0),Z=(0,i._)([(0,h.j)("esri.layers.GraphicsLayer")],Z);const P=Z;var D=r(92908),E=r(38009),R=r(16859),j=r(1231),F=r(20256),A=r(4095),k=r(77987),W=r(78724),U=r(82971),z=r(6570);function G(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const $=new j.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),K=new j.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let V=class extends P{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};(0,i._)([(0,d.Cb)({readOnly:!0})],V.prototype,"sublayers",null),(0,i._)([(0,d.Cb)()],V.prototype,"layer",void 0),(0,i._)([(0,d.Cb)()],V.prototype,"layerId",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],V.prototype,"visibilityMode",void 0),V=(0,i._)([(0,h.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],V);const q=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new F.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new A.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new k.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new k.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new W.Z).toJSON()}];let H=class extends((0,O.h)((0,N.M)((0,E.q)((0,R.I)((0,p.R)(I.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=U.Z.WGS84,this.sublayers=new l.Z(q.map((e=>new V({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!G(t)&&"portal-item"!==r?.origin}}}readFeatureCollections(e,t,r){if(!G(t))return null;const i=t.layers.map((e=>{const t=new v.default;return t.read(e,r),t}));return new l.Z({items:i})}readLegacyfeatureCollectionJSON(e,t){return G(t)?(0,a.d9)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every((e=>!e.layerDefinition.extent)))return new z.Z({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:U.Z.WGS84});const r=U.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?z.Z.fromJSON(r).union(e):e}),new z.Z({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?U.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):U.Z.WGS84}readSublayers(e,t,r){if(G(t))return null;const i=[];let n=t.layers.reduce(((e,t)=>Math.max(e,t.layerDefinition.id??-1)),-1)+1;for(const{layerDefinition:e,featureSet:r}of t.layers){const t=e.geometryType??r.geometryType,l=e.id??n++,a=q.find((r=>t===r.geometryTypeJSON&&e.drawingInfo?.renderer?.symbol?.type===r.identifyingSymbol.type));if(a){const t=new V({id:a.id,title:e.name,layerId:l,layer:this,graphics:r.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:i})=>o.Z.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:i})))});i.push(t)}}return new l.Z(i)}writeSublayers(e,t,r,i){const{minScale:o,maxScale:l}=this;if((0,s.Wi)(e))return;const a=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(a&&i?.messages?.push(new n.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const p=[];let u=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if((0,s.pC)(e.geometry)){u=e.geometry.spatialReference.toJSON();break e}for(const t of q){const r=e.find((e=>t.id===e.id));this._writeMapNoteSublayer(p,r,t,o,l,u,i)}(0,y.RB)("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,a.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if((0,s.Wi)(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const i of r.graphics)if((0,s.pC)(i.geometry)){const r=i.geometry;e?(0,w.fS)(r.spatialReference,e)||((0,g.Up)(r.spatialReference,e)||(0,g.kR)()||await(0,g.zD)(),i.geometry=(0,g.iV)(r,e)):e=r.spatialReference,t.push(i)}const r=await(0,b.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){return(0,s.Wi)(this.sublayers)?null:this.sublayers?.find((t=>t.id===e))??null}_writeMapNoteSublayer(e,t,r,i,o,l,n){const p=[];if(!(0,s.Wi)(t)){for(const e of t.graphics)this._writeMapNote(p,e,r.geometryType,n);this._normalizeObjectIds(p,$),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,a.d9)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:o,objectIdField:"OBJECTID",fields:[$.toJSON(),K.toJSON()],spatialReference:l},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,i){if((0,s.Wi)(t))return;const{geometry:o,symbol:l,popupTemplate:n}=t;if((0,s.Wi)(o))return;if(o.type!==r)return void i?.messages?.push(new u.Z("map-notes-layer:invalid-geometry-type",`Geometry "${o.type}" cannot be saved in "${r}" layer`,{graphic:t}));if((0,s.Wi)(l))return void i?.messages?.push(new u.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const a={attributes:{...t.attributes},geometry:o.toJSON(),symbol:l.toJSON()};(0,s.pC)(n)&&(a.popupInfo=n.toJSON()),e.push(a)}_normalizeObjectIds(e,t){const r=t.name;let i=(0,D.S)(r,e)+1;const o=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||o.has(e[r]))&&(e[r]=i++),o.add(e[r])}}};(0,i._)([(0,d.Cb)({readOnly:!0})],H.prototype,"capabilities",void 0),(0,i._)([(0,m.r)(["portal-item","web-map"],"capabilities",["layers"])],H.prototype,"readCapabilities",null),(0,i._)([(0,d.Cb)({readOnly:!0})],H.prototype,"featureCollections",void 0),(0,i._)([(0,m.r)(["web-map","portal-item"],"featureCollections",["layers"])],H.prototype,"readFeatureCollections",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],H.prototype,"featureCollectionJSON",void 0),(0,i._)([(0,m.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],H.prototype,"readLegacyfeatureCollectionJSON",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],H.prototype,"featureCollectionType",void 0),(0,i._)([(0,d.Cb)({json:{write:!1}})],H.prototype,"fullExtent",void 0),(0,i._)([(0,m.r)(["web-map","portal-item"],"fullExtent",["layers"])],H.prototype,"readFullExtent",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],H.prototype,"legendEnabled",void 0),(0,i._)([(0,d.Cb)({type:["show","hide"]})],H.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],H.prototype,"minScale",void 0),(0,i._)([(0,m.r)(["web-map","portal-item"],"minScale",["layers"])],H.prototype,"readMinScale",null),(0,i._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],H.prototype,"maxScale",void 0),(0,i._)([(0,m.r)(["web-map","portal-item"],"maxScale",["layers"])],H.prototype,"readMaxScale",null),(0,i._)([(0,d.Cb)({readOnly:!0})],H.prototype,"multipointLayer",null),(0,i._)([(0,d.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],H.prototype,"operationalLayerType",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],H.prototype,"pointLayer",null),(0,i._)([(0,d.Cb)({readOnly:!0})],H.prototype,"polygonLayer",null),(0,i._)([(0,d.Cb)({readOnly:!0})],H.prototype,"polylineLayer",null),(0,i._)([(0,d.Cb)({type:U.Z})],H.prototype,"spatialReference",void 0),(0,i._)([(0,m.r)(["web-map","portal-item"],"spatialReference",["layers"])],H.prototype,"readSpatialReference",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],H.prototype,"sublayers",void 0),(0,i._)([(0,m.r)("web-map","sublayers",["layers"])],H.prototype,"readSublayers",null),(0,i._)([(0,f.c)("web-map","sublayers")],H.prototype,"writeSublayers",null),(0,i._)([(0,d.Cb)({readOnly:!0})],H.prototype,"textLayer",null),(0,i._)([(0,d.Cb)()],H.prototype,"title",void 0),(0,i._)([(0,d.Cb)({readOnly:!0,json:{read:!1}})],H.prototype,"type",void 0),H=(0,i._)([(0,h.j)("esri.layers.MapNotesLayer")],H);const B=H},92908:(e,t,r)=>{r.d(t,{S:()=>o,X:()=>i});const i=1;function o(e,t){let r=0;for(const i of t){const t=i.attributes?.[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}},54295:(e,t,r)=>{r.d(t,{V:()=>n});var i=r(43697),o=r(5600),l=(r(67676),r(80442),r(75215),r(52011));const n=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,o.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,l.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>p});var i=r(43697),o=r(92604),l=r(70586),n=r(5600),a=(r(67676),r(80442),r(75215),r(52011)),s=r(66677);const p=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,s.Qc)(this.url);if((0,l.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,s.Nm)(e,o.Z.getLogger(this.declaredClass)))}};return(0,i._)([(0,n.Cb)()],t.prototype,"title",null),(0,i._)([(0,n.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,a.j)("esri.layers.mixins.ArcGISService")],t),t}},16859:(e,t,r)=>{r.d(t,{I:()=>v});var i=r(43697),o=r(40330),l=r(3172),n=r(66643),a=r(20102),s=r(92604),p=r(70586),y=r(95330),u=r(17452),d=r(5600),c=(r(67676),r(80442),r(75215),r(71715)),m=r(52011),h=r(30556),f=r(65587),g=r(15235),b=r(86082);const w=s.Z.getLogger("esri.layers.mixins.PortalLayer"),v=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new g.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(8062).then(r.bind(r,18062));return(0,y.k_)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,y.D_)(e)||w.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,y.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?o.id?.findCredential(this.url):null;if(!t)return!0;const r=_.credential===t?_.user:await this._fetchEditingUser(e);return _.credential=t,_.user=r,(0,p.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=o.id.findServerInfo(this.url);if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,a=f.Z.getDefault();if(a&&a.loaded&&(0,u.Fv)(a.restUrl)===(0,u.Fv)(i))return a.user;const s=`${i}/community/self`,y=(0,p.pC)(e)?e.signal:null,d=await(0,n.q6)((0,l.default)(s,{authMode:"no-prompt",query:{f:"json"},signal:y}));return d.ok?b.default.fromJSON(d.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||f.Z.getDefault());return r&&i&&!(0,u.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,d.Cb)({type:g.default})],t.prototype,"portalItem",null),(0,i._)([(0,c.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,h.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,d.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,i._)([(0,m.j)("esri.layers.mixins.PortalLayer")],t),t},_={credential:null,user:null}},56765:(e,t,r)=>{r.d(t,{Z:()=>y});var i,o=r(43697),l=r(46791),n=r(96674),a=r(5600),s=(r(67676),r(80442),r(75215),r(52011));let p=i=class extends n.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new l.Z}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"floorField",void 0),(0,o._)([(0,a.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,o._)([(0,a.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=i=(0,o._)([(0,s.j)("esri.layers.support.LayerFloorInfo")],p);const y=p},51706:(e,t,r)=>{var i,o;function l(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?i.Expression:e.field&&"string"==typeof e.field?i.Field:i.Unknown}function s(e,t){const r=t||a(e),l=e.valueUnit||"unknown";return r===i.Unknown?o.Constant:e.stops?o.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?o.ClampedLinear:"unknown"===l?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?o.Proportional:o.Additive:o.Identity:o.RealWorldSize}r.d(t,{PS:()=>a,QW:()=>s,RY:()=>i,hL:()=>o,iY:()=>l,qh:()=>n}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(i||(i={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(o||(o={}))}}]);