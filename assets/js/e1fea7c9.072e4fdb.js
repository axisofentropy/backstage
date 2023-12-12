/*! For license information please see e1fea7c9.072e4fdb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[957730],{229742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(824246),r=t(511151);const s={id:"analytics",title:"Plugin Analytics",description:"Measuring usage of your Backstage instance."},a=void 0,o={id:"plugins/analytics",title:"Plugin Analytics",description:"Measuring usage of your Backstage instance.",source:"@site/../docs/plugins/analytics.md",sourceDirName:"plugins",slug:"/plugins/analytics",permalink:"/docs/plugins/analytics",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/analytics.md",tags:[],version:"current",frontMatter:{id:"analytics",title:"Plugin Analytics",description:"Measuring usage of your Backstage instance."},sidebar:"docs",previous:{title:"Internationalization (Experimental)",permalink:"/docs/plugins/internationalization"},next:{title:"Feature Flags",permalink:"/docs/plugins/feature-flags"}},c={},l=[{value:"Concepts",id:"concepts",level:2},{value:"Supported Analytics Tools",id:"supported-analytics-tools",level:2},{value:"Key Events",id:"key-events",level:2},{value:"Writing Integrations",id:"writing-integrations",level:2},{value:"Handling User Identity",id:"handling-user-identity",level:3},{value:"Capturing Events",id:"capturing-events",level:2},{value:"Providing Extra Attributes",id:"providing-extra-attributes",level:3},{value:"Providing Context for Events",id:"providing-context-for-events",level:3},{value:"Event Naming Considerations",id:"event-naming-considerations",level:3},{value:"Unit Testing Event Capture",id:"unit-testing-event-capture",level:3}];function d(e){const n=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em",pre:"pre",h3:"h3"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setting up, maintaining, and iterating on an instance of Backstage can be a\nlarge investment. To help measure return on this investment, Backstage comes\nwith an event-based Analytics API that grants app integrators the flexibility to\ncollect and analyze Backstage usage in the analytics tool of their choice, while\nproviding plugin developers a standard interface for instrumenting key user\ninteractions."}),"\n",(0,i.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Events"})," consist of, at a minimum, an ",(0,i.jsx)(n.code,{children:"action"})," (like ",(0,i.jsx)(n.code,{children:"click"}),") and a\n",(0,i.jsx)(n.code,{children:"subject"})," (like ",(0,i.jsx)(n.code,{children:"thing that was clicked on"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Attributes"})," represent additional dimensional data (in the form of key/value\npairs) that may be provided on an event-by-event basis. To continue the above\nexample, the URL a user clicked to might look like ",(0,i.jsx)(n.code,{children:'{ "to": "/a/page" }'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Context"})," represents the broader context in which an event took place. By\ndefault, information like ",(0,i.jsx)(n.code,{children:"pluginId"}),", ",(0,i.jsx)(n.code,{children:"extension"}),", and ",(0,i.jsx)(n.code,{children:"routeRef"})," are\nprovided."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'This composition of events aims to allow analysis at different levels of detail,\nenabling very granular questions (like "what is the most clicked on thing on a\nparticular route") as well as very high-level questions (like "what is the most\nused plugin in my Backstage instance") to be answered.'}),"\n",(0,i.jsx)(n.h2,{id:"supported-analytics-tools",children:"Supported Analytics Tools"}),"\n",(0,i.jsxs)(n.p,{children:["While all that's needed to consume and forward these events to an analytics tool\nis a concrete implementation of ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/reference/core-plugin-api.analyticsapi",children:"AnalyticsApi"}),", common\nintegrations are packaged and provided as plugins. Find your analytics tool of\nchoice below."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Analytics Tool"}),(0,i.jsx)(n.th,{children:"Support Status"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/analytics-module-ga/README.md",children:"Google Analytics"})}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/analytics-module-ga4/README.md",children:"Google Analytics 4"})}),(0,i.jsx)(n.td,{children:"Yes \u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/analytics-module-newrelic-browser/README.md",children:"New Relic Browser"})}),(0,i.jsx)(n.td,{children:"Community \u2705"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["To suggest an integration, please ",(0,i.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues/new?assignees=&labels=plugin&template=plugin_template.md&title=%5BAnalytics+Module%5D+THE+ANALYTICS+TOOL+TO+INTEGRATE",children:"open an issue"})," for the analytics\ntool your organization uses. Or jump to ",(0,i.jsx)(n.a,{href:"#writing-integrations",children:"Writing Integrations"})," to\nlearn how to contribute the integration yourself!"]}),"\n",(0,i.jsx)(n.h2,{id:"key-events",children:"Key Events"}),"\n",(0,i.jsx)(n.p,{children:"The following table summarizes events that, depending on the plugins you have\ninstalled, may be captured."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Action"}),(0,i.jsx)(n.th,{children:"Subject"}),(0,i.jsx)(n.th,{children:"Other Notes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"navigate"})}),(0,i.jsx)(n.td,{children:"The URL of the page that was navigated to."}),(0,i.jsx)(n.td,{children:"Fired immediately when route location changes (unless associated plugin/route data is ambiguous, in which case the event is fired after plugin/route data becomes known, immediately before the next event or document unload). The parameters of the current route will be included as attributes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"click"})}),(0,i.jsx)(n.td,{children:"The text of the link that was clicked on."}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.code,{children:"to"})," attribute represents the URL clicked to."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"create"})}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.code,{children:"name"})," of the software being created; if no ",(0,i.jsx)(n.code,{children:"name"})," property is requested by the given Software Template, then the string ",(0,i.jsx)(n.code,{children:"new {templateName}"})," is used instead."]}),(0,i.jsxs)(n.td,{children:["The context holds an ",(0,i.jsx)(n.code,{children:"entityRef"}),", set to the template's ref (e.g. ",(0,i.jsx)(n.code,{children:"template:default/template-name"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"search"})}),(0,i.jsx)(n.td,{children:"The search term entered in any search bar component."}),(0,i.jsxs)(n.td,{children:["The context holds ",(0,i.jsx)(n.code,{children:"searchTypes"}),", representing ",(0,i.jsx)(n.code,{children:"types"})," constraining the search. The ",(0,i.jsx)(n.code,{children:"value"})," represents the total number of search results for the query. This may not be visible if the permission framework is being used."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"discover"})}),(0,i.jsx)(n.td,{children:"The title of the search result that was clicked on"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.code,{children:"value"})," is the result rank. A ",(0,i.jsx)(n.code,{children:"to"})," attribute is also provided."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["If there is an event you'd like to see captured, please ",(0,i.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues/new?assignees=&labels=enhancement&template=feature_template.md&title=%5BAnalytics%20Event%5D:%20THE+EVENT+TO+CAPTURE",children:"open an\nissue"})," describing the event you want to see and the questions it\nwould help you answer. Or jump to ",(0,i.jsx)(n.a,{href:"#capturing-events",children:"Capturing Events"})," to learn how\nto contribute the instrumentation yourself!"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"OSS plugin maintainers: feel free to document your events in the table above."})}),"\n",(0,i.jsx)(n.h2,{id:"writing-integrations",children:"Writing Integrations"}),"\n",(0,i.jsx)(n.p,{children:"Analytics event forwarding is implemented as a Backstage utility API. Just as\nyou might provide a custom API implementation for errors or SCM Authentication,\nyou can provide one for analytics."}),"\n",(0,i.jsxs)(n.p,{children:["The provided API need only provide a single method ",(0,i.jsx)(n.code,{children:"captureEvent"}),", which takes\nan ",(0,i.jsx)(n.code,{children:"AnalyticsEvent"})," object."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import {\n  analyticsApiRef,\n  AnalyticsEvent,\n  AnyApiFactory,\n  createApiFactory,\n} from '@backstage/core-plugin-api';\n\nexport const apis: AnyApiFactory[] = [\n  createApiFactory(analyticsApiRef, {\n    captureEvent: (event: AnalyticsEvent) => {\n      window._AcmeAnalyticsQ.push(event);\n    },\n  }),\n];\n"})}),"\n",(0,i.jsx)(n.p,{children:"In reality, you would likely want to encapsulate instantiation logic and pull\nsome details from configuration. A more complete example might look like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import {\n  AnalyticsApi,\n  analyticsApiRef,\n  AnalyticsEvent,\n  AnyApiFactory,\n  configApiRef,\n  createApiFactory,\n} from '@backstage/core-plugin-api';\nimport { AcmeAnalytics } from 'acme-analytics';\n\nclass AcmeAnalytics implements AnalyticsApi {\n  private constructor(accountId: number) {\n    AcmeAnalytics.init(accountId);\n  }\n\n  static fromConfig(config) {\n    const accountId = config.getString('app.analytics.acme.id');\n    return new AcmeAnalytics(accountId);\n  }\n\n  captureEvent(event: AnalyticsEvent) {\n    const { action, ...rest } = event;\n    AcmeAnalytics.send(action, rest);\n  }\n}\n\nexport const apis: AnyApiFactory[] = [\n  createApiFactory({\n    api: analyticsApiRef,\n    deps: { configApi: configApiRef },\n    factory: ({ configApi }) => AcmeAnalytics.fromConfig(configApi),\n  }),\n];\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you are integrating with an analytics service (as opposed to an internal\ntool), consider contributing your API implementation as a plugin!"}),"\n",(0,i.jsxs)(n.p,{children:["By convention, such packages should be named\n",(0,i.jsx)(n.code,{children:"@backstage/analytics-module-[name]"}),", and any configuration should be keyed\nunder ",(0,i.jsx)(n.code,{children:"app.analytics.[name]"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"handling-user-identity",children:"Handling User Identity"}),"\n",(0,i.jsx)(n.p,{children:"If the analytics platform you are integrating with has a first-class concept of\nuser identity, you can (optionally) choose to support this by the following this\nconvention:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Allow your implementation to be instantiated with the ",(0,i.jsx)(n.code,{children:"identityApi"})," as one of\nits options in a ",(0,i.jsx)(n.code,{children:"fromConfig"})," static method."]}),"\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.code,{children:"userEntityRef"})," resolved by ",(0,i.jsx)(n.code,{children:"identityApi"}),"'s ",(0,i.jsx)(n.code,{children:"getBackstageIdentity()"}),"\nmethod as the basis for the user ID you send to your analytics platform."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import {\n  AnalyticsApi,\n  analyticsApiRef,\n  AnyApiFactory,\n  configApiRef,\n  createApiFactory,\n  identityApiRef,\n  IdentityApi,\n} from '@backstage/core-plugin-api';\n\n// Implementation that optionally initializes with a userId.\nclass AcmeAnalytics implements AnalyticsApi {\n  private constructor(accountId: number, identityApi?: IdentityApi) {\n    if (identityApi) {\n      identityApi.getBackstageIdentity().then(identity => {\n        AcmeAnalytics.init(accountId, {\n          userId: identity.userEntityRef,\n        });\n      });\n    } else {\n      AcmeAnalytics.init(accountId);\n    }\n  }\n\n  static fromConfig(config, options) {\n    const accountId = config.getString('app.analytics.acme.id');\n    return new AcmeAnalytics(accountId, options.identityApi);\n  }\n}\n\n// Your implementation should be instantiated like this:\nexport const apis: AnyApiFactory[] = [\n  createApiFactory({\n    api: analyticsApiRef,\n    deps: { configApi: configApiRef, identityApi: identityApiRef },\n    factory: ({ configApi, identityApi }) =>\n      AcmeAnalytics.fromConfig(configApi, {\n        identityApi,\n      }),\n  }),\n];\n"})}),"\n",(0,i.jsx)(n.h2,{id:"capturing-events",children:"Capturing Events"}),"\n",(0,i.jsxs)(n.p,{children:["To instrument an event in a component, start by retrieving an analytics tracker\nusing the ",(0,i.jsx)(n.code,{children:"useAnalytics()"})," hook provided by ",(0,i.jsx)(n.code,{children:"@backstage/core-plugin-api"}),". The\ntracker includes a ",(0,i.jsx)(n.code,{children:"captureEvent"})," method which takes an ",(0,i.jsx)(n.code,{children:"action"})," and a ",(0,i.jsx)(n.code,{children:"subject"}),"\nas arguments."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { useAnalytics } from '@backstage/core-plugin-api';\n\nconst analytics = useAnalytics();\nanalytics.captureEvent('deploy', serviceName);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"providing-extra-attributes",children:"Providing Extra Attributes"}),"\n",(0,i.jsxs)(n.p,{children:["Additional dimensional ",(0,i.jsx)(n.code,{children:"attributes"})," as well as a numeric ",(0,i.jsx)(n.code,{children:"value"})," can be provided\non a third ",(0,i.jsx)(n.code,{children:"options"})," argument if/when relevant for the event:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"analytics.captureEvent('merge', pullRequestName, {\n  value: pullRequestAgeInMinutes,\n  attributes: {\n    org,\n    repo,\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the above example, an event resembling the following object would be\ncaptured:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "action": "merge",\n  "subject": "Name of Pull Request",\n  "value": 60,\n  "attributes": {\n    "org": "some-org",\n    "repo": "some-repo"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"providing-context-for-events",children:"Providing Context for Events"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"attributes"})," option is good for capturing details available to you within\nthe component that you're instrumenting. For capturing metadata only available\nfurther up the react tree, or to help app integrators aggregate distinct events\nby some common value, use an ",(0,i.jsx)(n.code,{children:"<AnalyticsContext>"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { AnalyticsContext, useAnalytics } from '@backstage/core-plugin-api';\n\nconst MyComponent = ({ value }) => {\n  const analytics = useAnalytics();\n  const handleClick = () => analytics.captureEvent('check', value);\n  return <SomeThing value={value} onClick={handleClick} />;\n};\n\nconst MyWrapper = () => {\n  return (\n    <AnalyticsContext attributes={{ segment: 'xyz' }}>\n      <MyComponent value={'Some Value'} />\n    </AnalyticsContext>\n  );\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above example, clicking on ",(0,i.jsx)(n.code,{children:"<SomeThing />"})," would result in an analytics\nevent resembling:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "action": "check",\n  "subject": "Some Value",\n  "context": {\n    "segment": "xyz"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note that, for brevity in the example above, the context keys provided by\nBackstage core (",(0,i.jsx)(n.code,{children:"pluginId"}),", ",(0,i.jsx)(n.code,{children:"extension"}),", and ",(0,i.jsx)(n.code,{children:"routeRef"}),") have been omitted. In\nreality, those details would be included alongside any additional context\nprovided by you."]}),"\n",(0,i.jsx)(n.p,{children:"Analytics contexts can be nested; their values are merged down the react tree,\nallowing keys to be overwritten."}),"\n",(0,i.jsx)(n.h3,{id:"event-naming-considerations",children:"Event Naming Considerations"}),"\n",(0,i.jsx)(n.p,{children:"An event is split into its constituent parts to enable analysis at various\nlevels of granularity. In order to maintain this flexibility at analysis-time,\nit's important to keep each of these levels of detail disaggregated."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Avoid providing an overly specific ",(0,i.jsx)(n.code,{children:"action"}),". For example, instead of\n",(0,i.jsx)(n.code,{children:"filterEntityTable"}),", consider just using ",(0,i.jsx)(n.code,{children:"filter"})," as the action, and allowing\n",(0,i.jsx)(n.code,{children:"EntityTable"})," to be specified as part of the event's ",(0,i.jsx)(n.code,{children:"context"})," (most likely\nautomatically as part of the ",(0,i.jsx)(n.code,{children:"extension"})," in which the ",(0,i.jsx)(n.code,{children:"filter"})," event was\ncaptured)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the flip side, when adding ",(0,i.jsx)(n.code,{children:"attributes"})," to or ",(0,i.jsx)(n.code,{children:"context"})," around an event,\nlook at existing events and see if the data you are capturing matches the\nintention, type, or even the content of ",(0,i.jsx)(n.em,{children:"their"})," ",(0,i.jsx)(n.code,{children:"attributes"})," or ",(0,i.jsx)(n.code,{children:"context"}),".\nFor instance, it's common for events that involve the Catalog to include an\n",(0,i.jsx)(n.code,{children:"entityRef"})," contextual key. Using the same keys and values in your event will\nensure that events instrumented across plugins can easily be aggregated."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"unit-testing-event-capture",children:"Unit Testing Event Capture"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@backstage/test-utils"})," package includes a ",(0,i.jsx)(n.code,{children:"MockAnalyticsApi"})," implementation\nthat you can use in your unit tests to spy on and make assertions about any\nanalytics events captured."]}),"\n",(0,i.jsx)(n.p,{children:"Use it like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { render, fireEvent, waitFor } from '@testing-library/react';\nimport { analyticsApiRef } from '@backstage/core-plugin-api';\nimport {\n  MockAnalyticsApi,\n  TestApiProvider,\n  wrapInTestApp,\n} from '@backstage/test-utils';\n\ndescribe('SomeComponent', () => {\n  it('should capture event on click', () => {\n    // Use the Mock Analytics API to spy on event captures.\n    const apiSpy = new MockAnalyticsApi();\n\n    // Render the component being tested\n    const { getByText } = render(\n      wrapInTestApp(\n        <TestApiProvider apis={[[analyticsApiRef, apiSpy]]}>\n          <SomeComponentUnderTest />\n        </TestApiProvider>,\n      ),\n    );\n\n    // Fire the event that triggers event capture.\n    fireEvent.click(getByText('some component text'));\n\n    // Assert that the event was captured with the expected data.\n    await waitFor(() => {\n      expect(apiSpy.getEvents()[0]).toMatchObject({\n        action: 'expected action',\n        subject: 'expected subject',\n        attributes: {\n          foo: 'bar',\n        },\n      });\n    });\n  });\n});\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},371426:(e,n,t)=>{var i=t(827378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,s={},l=null,d=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,i)&&!c.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}function x(){}function v(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var j=v.prototype=new x;j.constructor=v,y(j,m.prototype),j.isPureReactComponent=!0;var b=Array.isArray,A=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,i){var r,s={},a=null,o=null;if(null!=n)for(r in void 0!==n.ref&&(o=n.ref),void 0!==n.key&&(a=""+n.key),n)A.call(n,r)&&!w.hasOwnProperty(r)&&(s[r]=n[r]);var c=arguments.length-2;if(1===c)s.children=i;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===s[r]&&(s[r]=c[r]);return{$$typeof:t,type:e,key:a,ref:o,props:s,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var T=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,r,s,a){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case i:c=!0}}if(c)return a=a(c=e),e=""===s?"."+R(c,0):s,b(a)?(r="",null!=e&&(r=e.replace(T,"$&/")+"/"),S(a,n,r,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),n.push(a)),1;if(c=0,s=""===s?".":s+":",b(e))for(var l=0;l<e.length;l++){var d=s+R(o=e[l],l);c+=S(o,n,r,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(o=e.next()).done;)c+=S(o=o.value,n,r,d=s+R(o,l++),a);else if("object"===o)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,n,t){if(null==e)return e;var i=[],r=0;return S(e,i,"","",(function(e){return n.call(t,e,r++)})),i}function I(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},O={transition:null},F={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=r,n.Profiler=a,n.PureComponent=v,n.StrictMode=s,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,n.cloneElement=function(e,n,i){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=y({},e.props),s=e.key,a=e.ref,o=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,o=k.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)A.call(n,l)&&!w.hasOwnProperty(l)&&(r[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)r.children=i;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:t,type:e.type,key:s,ref:a,props:r,_owner:o}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var n=E.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:I}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=O.transition;O.transition={};try{e()}finally{O.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return P.current.useCallback(e,n)},n.useContext=function(e){return P.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return P.current.useDeferredValue(e)},n.useEffect=function(e,n){return P.current.useEffect(e,n)},n.useId=function(){return P.current.useId()},n.useImperativeHandle=function(e,n,t){return P.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return P.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return P.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return P.current.useMemo(e,n)},n.useReducer=function(e,n,t){return P.current.useReducer(e,n,t)},n.useRef=function(e){return P.current.useRef(e)},n.useState=function(e){return P.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return P.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return P.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>s});var i=t(667294);const r=i.createContext({});function s(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:s(e),i.createElement(r.Provider,{value:o},n)}}}]);