"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3293],{5680:(t,e,n)=>{n.d(e,{xA:()=>d,yg:()=>g});var a=n(6540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=l(n),u=r,g=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3062:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(8168),r=(n(6540),n(5680));const i={},o="Team",s={unversionedId:"administration/settings/contact/team",id:"administration/settings/contact/team",title:"Team",description:"Like Individuals, there are often groups of individuals (teams) that need to be engaged and notified during an incident. Dispatch manages those groups \\(typically, team distribution lists\\), providing a centralized data store for that contact data.",source:"@site/docs/administration/settings/contact/team.mdx",sourceDirName:"administration/settings/contact",slug:"/administration/settings/contact/team",permalink:"/dispatch/docs/administration/settings/contact/team",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/contact/team.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Service",permalink:"/dispatch/docs/administration/settings/contact/service"},next:{title:"Cost Model",permalink:"/dispatch/docs/administration/settings/cost_model"}},c={},l=[{value:"Engagement",id:"engagement",level:4}],d={toc:l},p="wrapper";function m(t){let{components:e,...i}=t;return(0,r.yg)(p,(0,a.A)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"team"},"Team"),(0,r.yg)("p",null,"Like ",(0,r.yg)("inlineCode",{parentName:"p"},"Individuals"),", there are often groups of individuals (teams) that need to be engaged and notified during an incident. Dispatch manages those groups ","(","typically, team distribution lists",")",", providing a centralized data store for that contact data."),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("p",null,(0,r.yg)("img",{src:n(858).A,width:"491",height:"695"}))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Name:")," Name of the team."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Email:")," Email address associated with the team."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Company:")," Company associated with the team."),(0,r.yg)("h4",{id:"engagement"},"Engagement"),(0,r.yg)("p",null,"In addition to fields about the team, Dispatch allows you to associate a team with other Dispatch primitives. For instance, if you would like to involve an entire team for all incidents of a given priority, associate that priority with the team."))}m.isMDXComponent=!0},858:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/admin-ui-contacts-teams-6dace8496552866bc77ef70b751c133c.png"}}]);