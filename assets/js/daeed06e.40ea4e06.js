"use strict";(self.webpackChunkdjango_deployment=self.webpackChunkdjango_deployment||[]).push([[444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,g=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Domain related setup",l={unversionedId:"going-live/domain-setup",id:"going-live/domain-setup",title:"Domain related setup",description:"Binding IP to domain",source:"@site/docs/going-live/domain-setup.md",sourceDirName:"going-live",slug:"/going-live/domain-setup",permalink:"/django-deployment/docs/going-live/domain-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/going-live/domain-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Reverse proxy (Nginx)",permalink:"/django-deployment/docs/going-live/reverse-proxy/rp-nginx"},next:{title:"Secruing with HTTPS",permalink:"/django-deployment/docs/going-live/ssl-cert"}},p={},d=[{value:"Binding IP to domain",id:"binding-ip-to-domain",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"domain-related-setup"},"Domain related setup"),(0,a.kt)("h2",{id:"binding-ip-to-domain"},"Binding IP to domain"),(0,a.kt)("p",null,"Go to your domain provider website and open DNS management of the corresponding domain."),(0,a.kt)("p",null,"Add the following records in DNS:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"TTL"),(0,a.kt)("th",{parentName:"tr",align:null},"Target"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"(blank)"),(0,a.kt)("td",{parentName:"tr",align:null},"A"),(0,a.kt)("td",{parentName:"tr",align:null},"3600"),(0,a.kt)("td",{parentName:"tr",align:null},"<static_ip>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WWW"),(0,a.kt)("td",{parentName:"tr",align:null},"CNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"3600"),(0,a.kt)("td",{parentName:"tr",align:null},"<domain_name>")))),(0,a.kt)("p",null,"Save the changes.\nDNS may take upto 5 mins - 24 hrs to update."),(0,a.kt)("p",null,"Now the site should be accessible by: ",(0,a.kt)("a",{parentName:"p",href:"http://domain"},"http://domain")))}c.isMDXComponent=!0}}]);