/*! For license information please see 76899887.09f1e032.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[32187],{489860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(824246),o=t(511151);const i={id:"plugin-scaffolder-backend.creategithubrepocreateaction",title:"createGithubRepoCreateAction()",description:"API reference for createGithubRepoCreateAction()"},s=void 0,a={id:"reference/plugin-scaffolder-backend.creategithubrepocreateaction",title:"createGithubRepoCreateAction()",description:"API reference for createGithubRepoCreateAction()",source:"@site/../docs/reference/plugin-scaffolder-backend.creategithubrepocreateaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.creategithubrepocreateaction",permalink:"/docs/reference/plugin-scaffolder-backend.creategithubrepocreateaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.creategithubrepocreateaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.creategithubrepocreateaction",title:"createGithubRepoCreateAction()",description:"API reference for createGithubRepoCreateAction()"}},u={},c=[{value:"Parameters",id:"parameters",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend.creategithubrepocreateaction",children:(0,r.jsx)(n.code,{children:"createGithubRepoCreateAction"})})]}),"\n",(0,r.jsx)(n.p,{children:"Creates a new action that initializes a git repository"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function createGithubRepoCreateAction(options: {\n    integrations: ScmIntegrationRegistry;\n    githubCredentialsProvider?: GithubCredentialsProvider;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    description?: string | undefined;\n    homepage?: string | undefined;\n    access?: string | undefined;\n    deleteBranchOnMerge?: boolean | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    allowRebaseMerge?: boolean | undefined;\n    allowSquashMerge?: boolean | undefined;\n    squashMergeCommitTitle?: "PR_TITLE" | "COMMIT_OR_PR_TITLE" | undefined;\n    squashMergeCommitMessage?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK" | undefined;\n    allowMergeCommit?: boolean | undefined;\n    allowAutoMerge?: boolean | undefined;\n    requireCodeOwnerReviews?: boolean | undefined;\n    bypassPullRequestAllowances?: {\n        users?: string[] | undefined;\n        teams?: string[] | undefined;\n        apps?: string[] | undefined;\n    } | undefined;\n    requiredApprovingReviewCount?: number | undefined;\n    restrictions?: {\n        users: string[];\n        teams: string[];\n        apps?: string[] | undefined;\n    } | undefined;\n    requiredStatusCheckContexts?: string[] | undefined;\n    requireBranchesToBeUpToDate?: boolean | undefined;\n    requiredConversationResolution?: boolean | undefined;\n    repoVisibility?: "internal" | "private" | "public" | undefined;\n    collaborators?: ({\n        user: string;\n        access: string;\n    } | {\n        team: string;\n        access: string;\n    } | {\n        username: string;\n        access: \'pull\' | \'push\' | \'admin\' | \'maintain\' | \'triage\';\n    })[] | undefined;\n    hasProjects?: boolean | undefined;\n    hasWiki?: boolean | undefined;\n    hasIssues?: boolean | undefined;\n    token?: string | undefined;\n    topics?: string[] | undefined;\n    repoVariables?: {\n        [key: string]: string;\n    } | undefined;\n    secrets?: {\n        [key: string]: string;\n    } | undefined;\n    requireCommitSigning?: boolean | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:["{ integrations: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; githubCredentialsProvider?: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.githubcredentialsprovider",children:"GithubCredentialsProvider"}),"; }"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; description?: string | undefined; homepage?: string | undefined; access?: string | undefined; deleteBranchOnMerge?: boolean | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; allowRebaseMerge?: boolean | undefined; allowSquashMerge?: boolean | undefined; squashMergeCommitTitle?: "PR_TITLE" | "COMMIT_OR_PR_TITLE" | undefined; squashMergeCommitMessage?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK" | undefined; allowMergeCommit?: boolean | undefined; allowAutoMerge?: boolean | undefined; requireCodeOwnerReviews?: boolean | undefined; bypassPullRequestAllowances?: { users?: string[] | undefined; teams?: string[] | undefined; apps?: string[] | undefined; } | undefined; requiredApprovingReviewCount?: number | undefined; restrictions?: { users: string[]; teams: string[]; apps?: string[] | undefined; } | undefined; requiredStatusCheckContexts?: string[] | undefined; requireBranchesToBeUpToDate?: boolean | undefined; requiredConversationResolution?: boolean | undefined; repoVisibility?: "internal" | "private" | "public" | undefined; collaborators?: ({ user: string; access: string; } | { team: string; access: string; } | { username: string; access: \'pull\' | \'push\' | \'admin\' | \'maintain\' | \'triage\'; })[] | undefined; hasProjects?: boolean | undefined; hasWiki?: boolean | undefined; hasIssues?: boolean | undefined; token?: string | undefined; topics?: string[] | undefined; repoVariables?: { [key: string]: string; } | undefined; secrets?: { [key: string]: string; } | undefined; requireCommitSigning?: boolean | undefined; }, import("@backstage/types").',(0,r.jsx)(n.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!u.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:a.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function y(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||g}function m(){}function _(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var v=_.prototype=new m;v.constructor=_,h(v,y.prototype),v.isPureReactComponent=!0;var j=Array.isArray,C=Object.prototype.hasOwnProperty,k={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,r){var o,i={},s=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)C.call(n,o)&&!R.hasOwnProperty(o)&&(i[o]=n[o]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var c=Array(u),d=0;d<u;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:t,type:e,key:s,ref:a,props:i,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case r:u=!0}}if(u)return s=s(u=e),e=""===i?"."+E(u,0):i,j(s)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),O(s,n,o,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),n.push(s)),1;if(u=0,i=""===i?".":i+":",j(e))for(var c=0;c<e.length;c++){var d=i+E(a=e[c],c);u+=O(a,n,o,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(a=e.next()).done;)u+=O(a=a.value,n,o,d=i+E(a,c++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return u}function P(e,n,t){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function A(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},T={transition:null},I={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:T,ReactCurrentOwner:k};n.Children={map:P,forEach:function(e,n,t){P(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return P(e,(function(){n++})),n},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=o,n.Profiler=s,n.PureComponent=_,n.StrictMode=i,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=k.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in n)C.call(n,c)&&!R.hasOwnProperty(c)&&(o[c]=void 0===n[c]&&void 0!==u?u[c]:n[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){u=Array(c);for(var d=0;d<c;d++)u[d]=arguments[d+2];o.children=u}return{$$typeof:t,type:e.type,key:i,ref:s,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=x,n.createFactory=function(e){var n=x.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:A}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=T.transition;T.transition={};try{e()}finally{T.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return M.current.useCallback(e,n)},n.useContext=function(e){return M.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return M.current.useDeferredValue(e)},n.useEffect=function(e,n){return M.current.useEffect(e,n)},n.useId=function(){return M.current.useId()},n.useImperativeHandle=function(e,n,t){return M.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return M.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return M.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return M.current.useMemo(e,n)},n.useReducer=function(e,n,t){return M.current.useReducer(e,n,t)},n.useRef=function(e){return M.current.useRef(e)},n.useState=function(e){return M.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return M.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return M.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},n)}}}]);