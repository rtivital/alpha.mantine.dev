(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3165],{3165:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y},meta:function(){return L}});var o=n(5893),r=n(7128),l=n(5669),a=n(7294),i=n(9429),s=n(3637),d=n(987),c=n(9580),u=n(5437),m=n(9535),p={root:"m-e9408a47","root--default":"m-84c9523a","root--filled":"m-ef274e49","root--unstyled":"m-eda993d3",legend:"m-90794832","legend--unstyled":"m-74ca27fe"};let h={variant:"default"},x=(0,s.Z)((e,{radius:t})=>({root:{"--fieldset-radius":void 0===t?void 0:(0,i.H5)(t)}})),f=(0,m.d)((e,t)=>{let n=(0,d.w)("Fieldset",h,e),{classNames:o,className:r,style:l,styles:i,unstyled:s,vars:m,legend:f,variant:b,children:_,...j}=n,g=(0,c.y)({name:"Fieldset",classes:p,props:n,className:r,style:l,classNames:o,styles:i,unstyled:s,vars:m,varsResolver:x});return a.createElement(u.x,{component:"fieldset",ref:t,variant:b,...g("root",{variant:b}),...j},f&&a.createElement("legend",{...g("legend",{variant:b})},f),_)});f.classes=p,f.displayName="@mantine/core/Fieldset";var b=n(6414),_=n(3362),j=n(1166),g=n(6556),v=n(8565),y={root:"m-77c9d27d",inner:"m-80f1301b",loader:"m-a25b86ee",label:"m-811560b9",section:"m-a74036a",group:"m-80d6d844"};let k={orientation:"horizontal"},N=(0,s.Z)((e,{borderWidth:t})=>({group:{"--button-border-width":(0,v.h)(t)}})),E=(0,m.d)((e,t)=>{let n=(0,d.w)("ButtonGroup",k,e),{className:o,style:r,classNames:l,styles:i,unstyled:s,orientation:m,vars:p,borderWidth:h,variant:x,...f}=(0,d.w)("ButtonGroup",k,e),b=(0,c.y)({name:"ButtonGroup",props:n,classes:y,className:o,style:r,classNames:l,styles:i,unstyled:s,vars:p,varsResolver:N,rootSelector:"group"});return a.createElement(u.x,{...b("group"),ref:t,variant:x,mod:{"data-orientation":m},role:"group",...f})});E.classes=y,E.displayName="@mantine/core/ButtonGroup";let w={},F=(0,s.Z)((e,{radius:t,color:n,gradient:o,variant:r,size:l,justify:a})=>{let s=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:r||"filled"});return{root:{"--button-justify":a,"--button-height":(0,i.ap)(l,"button-height"),"--button-padding-x":(0,i.ap)(l,"button-padding-x"),"--button-fz":l?.includes("compact")?(0,i.yv)(l.replace("compact-","")):(0,i.yv)(l),"--button-radius":void 0===t?void 0:(0,i.H5)(t),"--button-bg":n||r?s.background:void 0,"--button-hover":n||r?s.hover:void 0,"--button-color":n||r?s.color:void 0,"--button-bd":n||r?s.border:void 0,"--button-hover-color":n||r?s.hoverColor:void 0}}}),B=(0,_.b)((e,t)=>{let n=(0,d.w)("Button",w,e),{style:o,vars:r,className:l,color:i,disabled:s,children:m,leftSection:p,rightSection:h,fullWidth:x,variant:f,radius:b,loading:_,loaderProps:v,gradient:k,classNames:N,styles:E,unstyled:B,"data-disabled":M,...L}=n,z=(0,c.y)({name:"Button",props:n,classes:y,className:l,style:o,classNames:N,styles:E,unstyled:B,vars:r,varsResolver:F}),H=!!p,Y=!!h;return a.createElement(j.k,{ref:t,...z("root",{active:!s&&!_&&!M}),unstyled:B,variant:f,disabled:s||_,mod:{disabled:s||M,loading:_,block:x,"with-left-section":H,"with-right-section":Y},...L},a.createElement(u.x,{component:"span",...z("loader"),"aria-hidden":!0},a.createElement(g.a,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...v})),a.createElement("span",{...z("inner")},p&&a.createElement(u.x,{component:"span",...z("section"),mod:{position:"left"}},p),a.createElement(u.x,{component:"span",mod:{loading:_},...z("label")},m),h&&a.createElement(u.x,{component:"span",...z("section"),mod:{position:"right"}},h)))});B.classes=y,B.displayName="@mantine/core/Button",B.Group=E;let M={type:"code",component:function(){return(0,o.jsx)("form",{children:(0,o.jsxs)(f,{disabled:!0,variant:"unstyled",children:[(0,o.jsx)(b.o,{label:"Your name",placeholder:"Your name"}),(0,o.jsx)(b.o,{label:"Your email",placeholder:"Your email",mt:"md"}),(0,o.jsx)(B,{type:"submit",mt:"md",children:"Submit"})]})})},code:'\nimport { Fieldset, TextInput, Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <form>\n      <Fieldset disabled variant="unstyled">\n        <TextInput label="Your name" placeholder="Your name" />\n        <TextInput label="Your email" placeholder="Your email" mt="md" />\n        <Button type="submit" mt="md">\n          Submit\n        </Button>\n      </Fieldset>\n    </form>\n  );\n}\n'},L={title:"How can I disable all inputs/inputs group inside form?",slug:"disable-all-inputs-in-form",category:"forms",tags:["form","inputs","Fieldset"],created_at:"November 30, 2023",last_updated_at:"November 30, 2023"},z=(0,l.A)(L);function H(e){let t={a:"a",code:"code",p:"p",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["To disable all inputs/inputs group inside form, you can use the ",(0,o.jsx)(t.a,{href:"https://mantine.dev/core/fieldset/",children:"Fieldset"})," component.\nIf ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set, all inputs inside ",(0,o.jsx)(t.code,{children:"Fieldset"})," are disabled. By default, ",(0,o.jsx)(t.code,{children:"Fieldset"})," has border and padding styles.\nIf you want to use ",(0,o.jsx)(t.code,{children:"Fieldset"})," only for ",(0,o.jsx)(t.code,{children:"disabled"})," feature, set ",(0,o.jsx)(t.code,{children:'variant="unstyled"'}),":"]}),"\n",(0,o.jsx)(n,{data:M})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(z,{...e,children:(0,o.jsx)(H,{...e})})}},7128:function(e,t,n){"use strict";n.d(t,{a:function(){return j}});var o=n(5893),r=n(512),l=n(8008),a=n(967),Image=n(929),i=n(6536),s=n(9068),d=n(6283),c=n(359),u=n.n(c);function m(e){let{id:t,children:n,order:a=2,...i}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{id:t,"data-heading":n,"data-order":a,className:u().titleOffset}),(0,o.jsx)(l.D,{order:a,className:u().title,...i,children:(0,o.jsx)("a",{className:(0,r.Z)(u().titleLink,"mantine-focus-auto"),href:"#".concat(t),children:n})})]})}let p=e=>t=>(0,o.jsx)(m,{order:e,...t});function h(e){let{children:t}=e;return(0,o.jsx)(d.P,{className:u().code,code:t.props.children,language:function(e){let t=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return t&&t.groups&&t.groups.lang?t.groups.lang:"tsx"}(t)})}function x(e){return(0,o.jsx)("p",{className:u().paragraph,...e})}function f(e){return(0,o.jsx)("ul",{className:u().ul,...e})}function b(e){return(0,o.jsx)("li",{className:u().li,...e})}function _(e){let{href:t,...n}=e;return(0,o.jsx)(a.e,{className:u().link,href:t,...n})}function j(e){return{img:Image.E,ul:f,li:b,p:x,a:_,code:i.E,h1:p(1),h2:p(2),h3:p(3),h4:p(4),h5:p(5),h6:p(6),pre:h,Demo:s.B,...e}}},5669:function(e,t,n){"use strict";n.d(t,{A:function(){return v}});var o=n(5893),r=n(1664),l=n.n(r),a=n(9008),i=n.n(a),s=n(3078),d=n(967),c=n(991),u=n(8008),Text=n(4410),m=n(3507),p=n(471),h=n(6247);n(7294);var x=n(207),f=n.n(x);function b(e){let{icon:t,children:n,link:r}=e,l=r?(0,o.jsxs)("a",{href:r,target:"_blank",className:f().body,rel:"noreferrer",children:[(0,o.jsx)("div",{className:f().icon,children:t}),(0,o.jsx)("div",{className:f().content,children:n})]}):(0,o.jsxs)("div",{className:f().body,children:[(0,o.jsx)("div",{className:f().icon,children:t}),(0,o.jsx)("div",{className:f().content,children:n})]});return(0,o.jsx)("div",{className:f().root,children:l})}var _=n(5372),j=n.n(_);function g(e){let{meta:t,children:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i(),{children:(0,o.jsx)("title",{children:"".concat(t.title," | Mantine")})}),(0,o.jsxs)("article",{children:[(0,o.jsx)("header",{className:j().header,children:(0,o.jsxs)(s.W,{size:"md",children:[(0,o.jsx)(d.e,{component:l(),href:"/",underline:"hover",fz:"sm",children:(0,o.jsxs)(c.M,{inline:!0,component:"span",style:{gap:5},children:[(0,o.jsx)(m.Z,{size:18,stroke:1.5}),(0,o.jsx)("span",{children:"Back to all questions"})]})}),(0,o.jsx)(u.D,{className:j().title,children:t.title}),(0,o.jsxs)("nav",{className:j().links,children:[(0,o.jsx)(b,{icon:(0,o.jsx)(p.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(t.slug,".mdx"),children:"Edit this page on GitHub"}),(0,o.jsx)(b,{icon:(0,o.jsx)(h.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(t.title))),children:"Report issue with the article"})]}),(0,o.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,o.jsx)(Text.x,{component:"time",dateTime:new Date(t.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:t.last_updated_at})]})]})}),(0,o.jsx)(s.W,{size:"md",children:n})]})]})}function v(e){return t=>{let{children:n}=t;return(0,o.jsx)(g,{meta:e,children:n})}}},359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},5372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L"}},207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}}}]);