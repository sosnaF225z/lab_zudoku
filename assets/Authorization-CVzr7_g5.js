import{u as s,j as e}from"./entry.client-ClDn2R70.js";const a="The Task Management API uses API Keys or Bearer Tokens to ensure that only authorized users can access project data.",o=[{depth:2,text:"🔑 Authorization",id:"-authorization",children:[{depth:3,text:"1. Obtaining your Credentials",id:"1-obtaining-your-credentials"},{depth:3,text:"2. Configuring the Client",id:"2-configuring-the-client"}]}],c={lastModifiedTime:"2026-04-01T15:45:29.000Z"},l="pages/Authorization.mdx";function i(t){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"-authorization",children:"🔑 Authorization"}),`
`,e.jsxs(n.p,{children:["The Task Management API uses ",e.jsx(n.strong,{children:"API Keys"})," or ",e.jsx(n.strong,{children:"Bearer Tokens"})," to ensure that only authorized users can access project data."]}),`
`,e.jsx(n.h3,{id:"1-obtaining-your-credentials",children:"1. Obtaining your Credentials"}),`
`,e.jsxs(n.p,{children:["To interact with the API, you need an ",e.jsx(n.code,{inline:"true",children:"api_key"}),'. Usually, this is generated in your User Profile under the "Developer Settings" tab of the Task Management Web Portal.']}),`
`,e.jsx(n.h3,{id:"2-configuring-the-client",children:"2. Configuring the Client"}),`
`,e.jsx(n.p,{children:"The Java SDK uses a singleton Configuration or a specific ApiClient instance."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," Never hardcode your API key in public repositories. Use environment variables."]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{children:e.jsxs(n.code,{className:"language-text shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ApiClient client = Configuration.getDefaultApiClient();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'client.setApiKey("YOUR_API_KEY");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// Or for Bearer Token"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'// client.setAccessToken("YOUR_JWT_TOKEN");'})})]})})})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{l as __filepath,h as default,a as excerpt,c as frontmatter,o as tableOfContents};
//# sourceMappingURL=Authorization-CVzr7_g5.js.map
