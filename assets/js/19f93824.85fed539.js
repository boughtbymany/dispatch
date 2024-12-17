"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7401],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),g=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=g(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=g(t),d=r,f=c["".concat(p,".").concat(d)]||c[d]||l[d]||o;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var g=2;g<o;g++)a[g]=t[g];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var i=t(8168),r=(t(6540),t(5680));const o={description:"Configuration options for the Opsgenie plugin."},a="Configuring Opsgenie",s={unversionedId:"administration/settings/plugins/configuring-opsgenie",id:"administration/settings/plugins/configuring-opsgenie",title:"Configuring Opsgenie",description:"Configuration options for the Opsgenie plugin.",source:"@site/docs/administration/settings/plugins/configuring-opsgenie.mdx",sourceDirName:"administration/settings/plugins",slug:"/administration/settings/plugins/configuring-opsgenie",permalink:"/dispatch/docs/administration/settings/plugins/configuring-opsgenie",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/plugins/configuring-opsgenie.mdx",tags:[],version:"current",frontMatter:{description:"Configuration options for the Opsgenie plugin."},sidebar:"adminSidebar",previous:{title:"Configuring Jira",permalink:"/dispatch/docs/administration/settings/plugins/configuring-jira"},next:{title:"Configuring PagerDuty",permalink:"/dispatch/docs/administration/settings/plugins/configuring-pagerduty"}},p={},g=[{value:"<code>OPSGENIE_API_KEY</code> [Required. Secret: True]",id:"opsgenie_api_key-required-secret-true",level:2},{value:"<code>OPSGENIE_TEAM_ID</code> [Required]",id:"opsgenie_team_id-required",level:2}],u={toc:g},c="wrapper";function l(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,i.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"configuring-opsgenie"},"Configuring Opsgenie"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Dispatch ships with support for resolving on-call schedules via the Opsgenie API. Below is how to configure the Opsgenie plugin to work with ",(0,r.yg)("inlineCode",{parentName:"p"},"Dispatch."))),(0,r.yg)("h2",{id:"opsgenie_api_key-required-secret-true"},(0,r.yg)("inlineCode",{parentName:"h2"},"OPSGENIE_API_KEY")," ","[","Required. Secret: True","]"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Opsgenie API key.")),(0,r.yg)("h2",{id:"opsgenie_team_id-required"},(0,r.yg)("inlineCode",{parentName:"h2"},"OPSGENIE_TEAM_ID")," ","[","Required","]"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Id for the Opsgenie team.")))}l.isMDXComponent=!0}}]);