/*! For license information please see 20f421de.56a189de.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[525299],{637732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"structure-of-a-plugin",title:"Structure of a Plugin",description:"Details about structure of a plugin"},a=void 0,s={id:"plugins/structure-of-a-plugin",title:"Structure of a Plugin",description:"Details about structure of a plugin",source:"@site/../docs/plugins/structure-of-a-plugin.md",sourceDirName:"plugins",slug:"/plugins/structure-of-a-plugin",permalink:"/docs/plugins/structure-of-a-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/structure-of-a-plugin.md",tags:[],version:"current",frontMatter:{id:"structure-of-a-plugin",title:"Structure of a Plugin",description:"Details about structure of a plugin"},sidebar:"docs",previous:{title:"Plugin Development",permalink:"/docs/plugins/plugin-development"},next:{title:"Integrate into the Software Catalog",permalink:"/docs/plugins/integrating-plugin-into-software-catalog"}},u={},l=[{value:"Folder structure",id:"folder-structure",level:2},{value:"Base files",id:"base-files",level:2},{value:"The plugin file",id:"the-plugin-file",level:2},{value:"Components",id:"components",level:2},{value:"Connecting the plugin to the Backstage app",id:"connecting-the-plugin-to-the-backstage-app",level:2},{value:"Talking to the outside world",id:"talking-to-the-outside-world",level:2}];function c(e){const t=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",a:"a",ol:"ol",li:"li"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Nice, you have a new plugin! We'll soon see how we can develop it into doing\ngreat things. But first off, let's look at what we get out of the box."}),"\n",(0,r.jsx)(t.h2,{id:"folder-structure",children:"Folder structure"}),"\n",(0,r.jsx)(t.p,{children:"The new plugin should look something like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"new-plugin/\n    dev/\n        index.ts\n    node_modules/\n    src/\n        components/\n            ExampleComponent/\n                ExampleComponent.test.tsx\n                ExampleComponent.tsx\n                index.ts\n            ExampleFetchComponent/\n                ExampleFetchComponent.test.tsx\n                ExampleFetchComponent.tsx\n                index.ts\n        index.ts\n        plugin.test.ts\n        plugin.ts\n        routes.ts\n        setupTests.ts\n    .eslintrc.js\n    package.json\n    README.md\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You might note a thing or two. Yes, a plugin looks like a mini project on it's\nown with a ",(0,r.jsx)(t.code,{children:"package.json"})," and a ",(0,r.jsx)(t.code,{children:"src"})," folder. And this is because we want\nplugins to be separate packages. This makes it possible to ship plugins on npm\nand it lets you work on a plugin in isolation, without loading all the other\nplugins in a potentially big Backstage app."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"index.ts"})," files are there to let us import from the folder path and not\nspecific files. It's a way to have control over the exports in one file per\nfolder."]}),"\n",(0,r.jsx)(t.h2,{id:"base-files",children:"Base files"}),"\n",(0,r.jsx)(t.p,{children:"You get a readme to populate with info about your plugin and a\npackage.json to declare the plugin dependencies, metadata and scripts."}),"\n",(0,r.jsx)(t.h2,{id:"the-plugin-file",children:"The plugin file"}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"src"})," folder we get to the interesting bits. Check out the ",(0,r.jsx)(t.code,{children:"plugin.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import {\n  createPlugin,\n  createRoutableExtension,\n} from '@backstage/core-plugin-api';\n\nimport { rootRouteRef } from './routes';\n\nexport const examplePlugin = createPlugin({\n  id: 'example',\n  routes: {\n    root: rootRouteRef,\n  },\n});\n\nexport const ExamplePage = examplePlugin.provide(\n  createRoutableExtension({\n    name: 'ExamplePage',\n    component: () =>\n      import('./components/ExampleComponent').then(m => m.ExampleComponent),\n    mountPoint: rootRouteRef,\n  }),\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This is where the plugin is created and where it creates and exports extensions\nthat can be imported and used the app. See reference docs for\n",(0,r.jsx)(t.a,{href:"/docs/reference/core-plugin-api.createplugin",children:(0,r.jsx)(t.code,{children:"createPlugin"})})," or introduction to\nthe new ",(0,r.jsx)(t.a,{href:"/docs/plugins/composability",children:"Composability System"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,r.jsx)(t.p,{children:"The generated plugin includes two example components to showcase how we\nstructure our plugins. There are usually one or multiple page components and\nnext to them you can split up the UI in as many components as you feel like."}),"\n",(0,r.jsxs)(t.p,{children:["We have the ",(0,r.jsx)(t.code,{children:"ExampleComponent"})," to show an example Backstage page component. The\n",(0,r.jsx)(t.code,{children:"ExampleFetchComponent"})," showcases the common task of making an async request to\na public API and plot the response data in a table using Material UI components."]}),"\n",(0,r.jsx)(t.p,{children:"You may tweak these components, rename them and/or replace them completely."}),"\n",(0,r.jsx)(t.h2,{id:"connecting-the-plugin-to-the-backstage-app",children:"Connecting the plugin to the Backstage app"}),"\n",(0,r.jsx)(t.p,{children:"There are two things needed for a Backstage app to start making use of a plugin."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Add plugin as dependency in ",(0,r.jsx)(t.code,{children:"app/package.json"})]}),"\n",(0,r.jsxs)(t.li,{children:["Import and use one or more plugin extensions, for example in\n",(0,r.jsx)(t.code,{children:"app/src/App.tsx"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Luckily both of these steps happen automatically when you create a plugin with\nthe Backstage CLI."}),"\n",(0,r.jsx)(t.h2,{id:"talking-to-the-outside-world",children:"Talking to the outside world"}),"\n",(0,r.jsxs)(t.p,{children:["If your plugin needs to communicate with services outside the Backstage\nenvironment you will probably face challenges like CORS policies and/or\nbackend-side authorization. To smooth this process out you can use proxy -\neither the one you already have (like Nginx, HAProxy, etc.) or the proxy-backend\nplugin that we provide for the Backstage backend.\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/proxy-backend/README.md",children:"Read more"})]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function x(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var v=b.prototype=new x;v.constructor=b,m(v,y.prototype),v.isPureReactComponent=!0;var k=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,o)&&!_.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return a=a(u=e),e=""===i?"."+R(u,0):i,k(a)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),P(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),t.push(a)),1;if(u=0,i=""===i?".":i+":",k(e))for(var l=0;l<e.length;l++){var c=i+R(s=e[l],l);u+=P(s,t,o,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(s=e.next()).done;)u+=P(s=s.value,t,o,c=i+R(s,l++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function O(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},D={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){u=Array(l);for(var c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},t)}}}]);