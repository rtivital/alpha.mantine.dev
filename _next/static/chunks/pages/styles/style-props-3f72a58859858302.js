(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7993],{50775:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/style-props",function(){return r(51280)}])},51280:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return x}});var s=r(24246),t=r(71670),o=r(3916),l=r(30289),i=r(27378),a=r(56589);let c=`
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
`,d={type:"code",component:function(){return i.createElement(a.x,{w:{base:200,sm:400,lg:500},py:{base:"xs",sm:"md",lg:"xl"},bg:{base:"blue.7",sm:"red.7",lg:"green.7"},c:"#fff",ta:"center",mx:"auto"},"Box with responsive style props")},code:c};var m=r(40957);let p=(0,o.A)(l.us.StyleProps);function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"style-props",children:"Style props"}),"\n",(0,s.jsxs)(n.p,{children:["With style props, you can add inline styles to any Mantine component.\nStyle props add styles to the ",(0,s.jsx)(n.strong,{children:"root"})," element, if you need to style nested elements,\nuse ",(0,s.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," instead."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Box mx="auto" maw={400} c="blue.6" bg="#fff">\n      Your component\n    </Box>\n  );\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"supported-props",children:"Supported props"}),"\n",(0,s.jsx)(n.p,{children:"All Mantine components that have root element support the following style props:"}),"\n",(0,s.jsx)(m.T,{}),"\n",(0,s.jsx)(n.h2,{id:"theme-values",children:"Theme values"}),"\n",(0,s.jsxs)(n.p,{children:["Some style props can reference values from theme, for example ",(0,s.jsx)(n.code,{children:"mt"})," will use ",(0,s.jsx)(n.code,{children:"theme.spacing"})," value\nif you set ",(0,s.jsx)(n.code,{children:"xs"}),", ",(0,s.jsx)(n.code,{children:"sm"}),", ",(0,s.jsx)(n.code,{children:"md"}),", ",(0,s.jsx)(n.code,{children:"lg"}),", ",(0,s.jsx)(n.code,{children:"xl"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\n// margin-top: theme.spacing.xs\n<Box mt="xs" />\n\n// margin-top: theme.spacing.md * -1\n<Box mt="-md" />\n\n// margin-top: auto\n<Box mt="auto" />\n\n// margin-top: 1rem\n<Box mt={16} />\n\n// margin-top: 5rem\n<Box mt="5rem" />\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"c"})," and ",(0,s.jsx)(n.code,{children:"bg"})," props you can reference colors from ",(0,s.jsx)(n.code,{children:"theme.colors"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\n// color: theme.colors.blue[theme.fn.primaryShade()]\n<Box c="blue" />\n\n// background: theme.colors.orange[1]\n<Box bg="orange.1" />\n\n// color: if colorScheme is dark `var(--mantine-color-dark-2)`,\n// if color scheme is light `var(--mantine-color-gray-6)`\n<Box c="dimmed" />\n\n// color: if colorScheme is dark `var(--mantine-color-white)`,\n// if color scheme is light `var(--mantine-color-black)`\n<Box c="bright" />\n\n\n// background: #EDFEFF\n<Box bg="#EDFEFF" />\n\n// background: rgba(0, 34, 45, 0.6)\n<Box bg="rgba(0, 34, 45, 0.6)" />\n'})}),"\n",(0,s.jsx)(n.h2,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,s.jsxs)(n.p,{children:["You can use object syntax to add responsive styles with style props.\nNote that responsive style props are ",(0,s.jsx)(n.a,{href:"/styles/styles-performance",children:"less performant"})," than regular style props,\nit is not recommended to use them in large lists of elements."]}),"\n",(0,s.jsx)(r,{data:d}),"\n",(0,s.jsx)(n.p,{children:"Responsive values are calculated the following way:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"base"})," value is used when none of breakpoint values are applied"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"xs"}),", ",(0,s.jsx)(n.code,{children:"sm"}),", ",(0,s.jsx)(n.code,{children:"md"}),", ",(0,s.jsx)(n.code,{children:"lg"}),", ",(0,s.jsx)(n.code,{children:"xl"})," values are used when the viewport width is larger that the value of corresponding breakpoint specified in ",(0,s.jsx)(n.a,{href:"/styles/responsive/",children:"theme.breakpoints"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\n<Box w={{ base: 320, sm: 480, lg: 640 }}} />\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this case the element will have the following styles:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"/* Base styles added to element and then get overwritten with responsive values */\n.element {\n  width: 20rem;\n}\n\n/* 48em is theme.breakpoints.sm by default */\n@media (min-width: 48em) {\n  .element {\n    width: 30rem;\n  }\n}\n\n/* 75em is theme.breakpoints.lg by default */\n@media (min-width: 75em) {\n  .element {\n    width: 40rem;\n  }\n}\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(p,{...e,children:(0,s.jsx)(h,{...e})})}},40957:function(e,n,r){"use strict";r.d(n,{T:function(){return c}});var s=r(24246);r(27378);var t=r(22897),o=r(94998),l=r(24422),i=r(37430);let a={color:"theme.colors",fontSize:"theme.fontSizes",spacing:"theme.spacing",lineHeight:"theme.lineHeights"};function c(e){let{source:n=t.p}=e,r=Object.keys(n).map(e=>{let r=n[e],t=a[r.type];return[(0,s.jsx)(o.E,{children:e},"1"),(0,s.jsx)(l.O,{separator:",",styles:{separator:{marginLeft:2,marginRight:2}},children:Array.isArray(r.property)?r.property.map(e=>(0,s.jsx)(o.E,{children:e},e)):(0,s.jsx)(o.E,{children:r.property})}),t?(0,s.jsx)(o.E,{children:t}):"–"]});return(0,s.jsx)(i.gw,{head:["Prop","CSS Property","Theme key"],data:r})}},24422:function(e,n,r){"use strict";r.d(n,{O:function(){return x}});var s=r(27378),t=r(513),o=r(92082),l=r(83453),i=r(96739),a=r(6231),c=r(56589),d=r(20410),m={root:"m-8b3717df",breadcrumb:"m-f678d540",separator:"m-3b8f2208"};let p={separator:"/"},h=(0,l.Z)((e,{separatorMargin:n})=>({root:{"--bc-separator-margin":(0,o.bG)(n)}})),x=(0,d.d)((e,n)=>{let r=(0,i.w)("Breadcrumbs",p,e),{classNames:o,className:l,style:d,styles:x,unstyled:u,vars:g,children:f,separator:y,separatorMargin:j,...b}=r,v=(0,a.y)({name:"Breadcrumbs",classes:m,props:r,className:l,style:d,classNames:o,styles:x,unstyled:u,vars:g,varsResolver:h}),w=s.Children.toArray(f).reduce((e,n,r,o)=>{let l=(0,t.k)(n)?s.cloneElement(n,{...v("breadcrumb",{className:n.props?.className}),key:r}):s.createElement("div",{...v("breadcrumb"),key:r},n);return e.push(l),r!==o.length-1&&e.push(s.createElement(c.x,{...v("separator"),key:`separator-${r}`},y)),e},[]);return s.createElement(c.x,{ref:n,...v("root"),...b},w)});x.classes=m,x.displayName="@mantine/core/Breadcrumbs"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=50775)}),_N_E=e.O()}]);