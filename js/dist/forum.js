(()=>{var t={n:n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},d:(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};(()=>{"use strict";t.r(n),t.d(n,{components:()=>R,models:()=>H,utils:()=>A});const r=flarum.core.compat["forum/app"];var e=t.n(r);const o=flarum.core.compat["common/extend"],i=flarum.core.compat["common/components/HeaderPrimary"];var a=t.n(i);function s(t,n){return s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},s(t,n)}function l(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,s(t,n)}const c=flarum.core.compat["common/Model"];var u=t.n(c);const p=flarum.core.compat["common/utils/mixin"];var f=function(t){function n(){return t.apply(this,arguments)||this}return l(n,t),n}(t.n(p)()(u(),{title:u().attribute("title"),icon:u().attribute("icon"),type:u().attribute("type"),url:u().attribute("url"),position:u().attribute("position"),isInternal:u().attribute("isInternal"),isNewtab:u().attribute("isNewtab"),useRelMe:u().attribute("useRelMe"),isChild:u().attribute("isChild"),parent:u().hasOne("parent"),visibility:u().attribute("visibility")}));function d(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}const h=flarum.core.compat["common/components/Link"];var k=t.n(h);const b=flarum.core.compat["common/components/LinkButton"];var v=t.n(b);const y=flarum.core.compat["common/helpers/icon"];var w=t.n(y);const g=flarum.core.compat["common/components/Separator"];var L=t.n(g);const B=flarum.core.compat["common/utils/classList"];var N=t.n(B);const D=flarum.core.compat["common/components/Button"];var O=t.n(D),P=function(t){function n(){for(var n,r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];return(n=t.call.apply(t,[this].concat(e))||this).attrs=void 0,n}l(n,t);var r,o,i=n.prototype;return i.view=function(t){return this.isLabel?this.labelView(t):this.linkView(t)},i.labelView=function(t){var n=this,r=this.attrs.link,e=this.attrs.inDropdown?"span":O();return m("[",null,this.attrs.inDropdown&&m(L(),null),m(e,{class:N()(this.class,"LinksButton--label"),onclick:function(t){n.attrs.inDropdown&&t.stopPropagation()},"data-toggle":this.attrs.isDropdownButton?"dropdown":void 0},this.icon,m("span",{className:"LinksButton-title"},r.title())),this.attrs.inDropdown&&m(L(),null))},i.linkView=function(t){var n=this.attrs.link,r={className:this.class,rel:this.rel,target:this.linkTarget,external:!n.isNewtab()&&!n.isInternal(),href:this.linkHref};return m(k(),r,this.icon,m("span",{className:"LinksButton-title"},n.title()))},r=n,(o=[{key:"isInternal",get:function(){var t=this.attrs.link;return t.isInternal()&&!t.isNewtab()}},{key:"isLabel",get:function(){return 0===this.attrs.link.url().length}},{key:"linkHref",get:function(){var t=this.attrs.link,n=t.url();return n.startsWith("/")&&t.isInternal()?e().forum.attribute("baseUrl")+n:n}},{key:"icon",get:function(){var t=this.attrs.link.icon();return t?w()(t,{className:"Button-icon LinksButton-icon"}):null}},{key:"rel",get:function(){return N()(this.attrs.link.isNewtab()&&"noopener noreferrer",this.attrs.link.useRelMe()&&"me")||void 0}},{key:"class",get:function(){return N()("LinksButton",this.attrs.className||"Button Button--link",{"LinksButton--inDropdown":this.attrs.inDropdown,active:this.isLinkCurrentPage})}},{key:"isLinkCurrentPage",get:function(){if(!this.attrs.link.isInternal())return!1;var t=e().forum.attribute("baseUrl"),n=new URL(m.route.get()||"/",t).href.replace(t,""),r=new URL(this.linkHref,t).href.replace(t,"");return 0===n.indexOf(r)&&("/"===n||"/"!==r)}},{key:"linkTarget",get:function(){var t=this.attrs.link;if(!this.isInternal)return t.isNewtab()?"_blank":void 0}}])&&d(r.prototype,o),n}(v());function I(){return I=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},I.apply(this,arguments)}const j=flarum.core.compat["common/components/SplitDropdown"];var C=t.n(j);const _=flarum.core.compat["common/utils/ItemList"];var S=t.n(_);function x(t){return t.slice(0).sort((function(t,n){var r=t.position(),e=n.position();return r>e?1:r<e?-1:0}))}var M=function(t){function n(){return t.apply(this,arguments)||this}l(n,t),n.initAttrs=function(n){t.initAttrs.call(this,n),n.className+=" LinkDropdown",n.buttonClassName+=" Button--link"};var r=n.prototype;return r.view=function(n){var r=this.items().toArray();return t.prototype.view.call(this,I({},n,{children:r}))},r.getButton=function(t){var n=this.getFirstChild(t);return n.attrs.className=N()(n.attrs.className,"SplitDropdown-button Button",this.attrs.buttonClassName),n.attrs.isDropdownButton=!0,[n,m("button",{className:N()("Dropdown-toggle","Button","Button--icon",this.attrs.buttonClassName),"data-toggle":"dropdown"},w()("fas fa-caret-down",{className:"Button-caret"}))]},r.items=function(){var t=new(S()),n=this.attrs.link;return t.add("link"+n.id(),P.component({link:n})),x(e().store.all("links")).filter((function(t){return t.parent()===n})).forEach((function(r){t.add("link"+n.id()+"-"+r.id(),P.component({link:r,inDropdown:!0}))})),t},n}(C()),R={LinkDropdown:M,LinkItem:P},A={sortLinks:x},H={Link:f};e().initializers.add("gtdxyz-ui-links",(function(){e().store.models.links=f,(0,o.extend)(a().prototype,"items",(function(t){x(e().store.all("links").filter((function(t){return!t.isChild()}))).map((function(n){var r=e().store.all("links").some((function(t){return t.parent()==n}));t.add("link"+n.id(),r?M.component({link:n}):P.component({link:n}))}))}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map