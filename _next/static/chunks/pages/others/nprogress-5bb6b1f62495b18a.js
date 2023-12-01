(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6237],{58737:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/nprogress",function(){return r(55010)}])},55010:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return G}});var n=r(24246),o=r(71670),s=r(3916),a=r(30289),i=r(27378),l=r(22971),c=r(8671),u=r(13041),m=r(15666),p=r(30454),d=r(28086),g=r(33993);function v(e){let t=.5;return e>=0&&e<=20?t=10:e>=20&&e<=50?t=4:e>=50&&e<=80?t=2:e>=80&&e<=99?t=1:e>=99&&e<=100&&(t=0),e+t}let f=()=>(0,g.M)({mounted:!1,progress:0,interval:0,step:1,stepInterval:100,timeouts:[]}),h=e=>(0,g.o)(e);function w(e,t){let r=t.getState();t.setState({...r,...e(t.getState())})}function E(e){w(e=>(window.clearInterval(e.interval),e.timeouts.forEach(e=>window.clearTimeout(e)),{timeouts:[]}),e)}function x(e){w(e=>(window.clearInterval(e.interval),{interval:-1}),e)}function P(e){E(e),x(e),w(()=>({progress:0,mounted:!1}),e)}let[N,k]=function(){let e=f();return[e,{start:()=>{w(e=>({progress:v(e.progress),mounted:!0}),e),w(t=>{window.clearInterval(t.interval);let r=window.setInterval(()=>{w(e=>({progress:v(e.progress),mounted:!0}),e)},t.stepInterval);return{interval:r,mounted:!0}},e)},stop:()=>x(e),reset:()=>P(e),set:t=>{w(()=>({progress:(0,d.u)(t,0,100),mounted:!0}),e)},increment:()=>{var t;w(e=>{let r=Math.min(e.progress+e.step,100),n=100!==r&&0!==r;if(!n){let o=window.setTimeout(()=>P(t),e.stepInterval+50);return{progress:r,mounted:n,timeouts:[...e.timeouts,o]}}return{progress:r,mounted:n}},t=e)},decrement:()=>{w(e=>({progress:Math.max(e.progress-e.step,0)}),e)},complete:()=>{E(e),w(t=>{let r=window.setTimeout(()=>{w(()=>({mounted:!1}),e)},50),n=window.setTimeout(()=>{w(()=>({progress:0}),e)},t.stepInterval+50);return{progress:100,timeouts:[r,n]}},e)},cleanup:()=>E(e)}]}(),{start:j,stop:y,reset:C,set:S,increment:b,decrement:_,complete:B,cleanup:I}=k;var z={root:"m-8f2832ae",section:"m-7a0fe999"};function R({initialProgress:e=0,color:t,size:r=3,stepInterval:n=500,withinPortal:o=!0,portalProps:s,zIndex:a=(0,u.w)("max"),store:l=N,...c}){l.initialize({mounted:!1,progress:e,interval:-1,step:1,stepInterval:n,timeouts:[]});let d=h(l);return(0,i.useEffect)(()=>()=>P(l),[l]),i.createElement(m.q,{...s,withinPortal:o},i.createElement(p.E,{radius:0,value:d.progress,size:r,color:t,classNames:z,"data-mounted":d.mounted||void 0,__vars:{"--nprogress-z-index":a?.toString()},...c}))}R.displayName="@mantine/nprogress/NavigationProgress";let M=`
import { Button, Group } from '@mantine/core';
import { nprogress, NavigationProgress } from '@mantine/nprogress';

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group justify="center">
        <Button onClick={() => nprogress.start()}>Start</Button>
        <Button onClick={() => nprogress.stop()}>Stop</Button>
        <Button onClick={() => nprogress.increment()}>Increment</Button>
        <Button onClick={() => nprogress.decrement()}>Decrement</Button>
        <Button onClick={() => nprogress.set(50)}>Set 50%</Button>
        <Button onClick={() => nprogress.reset()}>Reset</Button>
        <Button onClick={() => nprogress.complete()}>Complete</Button>
      </Group>
    </>
  );
}
`,T={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(R,null),i.createElement(l.Z,{justify:"center"},i.createElement(c.z,{onClick:()=>k.start(),variant:"default"},"Start"),i.createElement(c.z,{onClick:()=>k.stop(),variant:"default"},"Stop"),i.createElement(c.z,{onClick:()=>k.increment(),variant:"default"},"Increment"),i.createElement(c.z,{onClick:()=>k.decrement(),variant:"default"},"Decrement"),i.createElement(c.z,{onClick:()=>k.set(50),variant:"default"},"Set 50%"),i.createElement(c.z,{onClick:()=>k.reset(),variant:"default"},"Reset"),i.createElement(c.z,{onClick:()=>k.complete(),variant:"default"},"Complete")))},code:M},D=(0,s.A)(a.us.Nprogress);function A(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:r,InstallScript:s}=t;return r||L("Demo",!0),s||L("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(s,{packages:"@mantine/nprogress"}),"\n",(0,n.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/nprogress/styles.css';\n"})}),"\n",(0,n.jsx)(t.h2,{id:"setup-navigationprogress",children:"Setup NavigationProgress"}),"\n",(0,n.jsxs)(t.p,{children:["Render ",(0,n.jsx)(t.code,{children:"NavigationProgress"})," anywhere in your app within ",(0,n.jsx)(t.a,{href:"/theming/mantine-provider/",children:"MantineProvider"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { NavigationProgress } from '@mantine/nprogress';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <NavigationProgress />\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:T})]})}function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(D,{...e,children:(0,n.jsx)(A,{...e})})}function L(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},30454:function(e,t,r){"use strict";r.d(t,{E:function(){return y}});var n=r(27378),o=r(5564),s=r(96739),a=r(20410),i=r(92082),l=r(83453),c=r(6231),u=r(56589),m=r(71656);let[p,d]=(0,m.R)("Progress.Root component was not found in tree");var g={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"};let v={},f=(0,l.Z)((e,{size:t,radius:r})=>({root:{"--progress-size":(0,i.ap)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,i.H5)(r)}})),h=(0,a.d)((e,t)=>{let r=(0,s.w)("ProgressRoot",v,e),{classNames:o,className:a,style:i,styles:l,unstyled:m,vars:d,...h}=r,w=(0,c.y)({name:"Progress",classes:g,props:r,className:a,style:i,classNames:o,styles:l,unstyled:m,vars:d,varsResolver:f});return n.createElement(p,{value:{getStyles:w}},n.createElement(u.x,{ref:t,...w("root"),...h}))});h.classes=g,h.displayName="@mantine/core/ProgressRoot";var w=r(89738),E=r(2256);let x={withAria:!0},P=(0,a.d)((e,t)=>{let{classNames:r,className:o,style:a,styles:i,vars:l,value:c,withAria:m,color:p,striped:g,animated:v,...f}=(0,s.w)("ProgressSection",x,e),h=d(),P=(0,E.rZ)(),N=m?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,"aria-valuetext":`${c}%`}:{};return n.createElement(u.x,{ref:t,...h.getStyles("section",{className:o,classNames:r,styles:i,style:a}),...f,...N,mod:{striped:g||v,animated:v},__vars:{"--progress-section-width":`${c}%`,"--progress-section-color":(0,w.p)(p,P)}})});P.classes=g,P.displayName="@mantine/core/ProgressSection";let N={},k=(0,a.d)((e,t)=>{let{classNames:r,className:o,style:a,styles:i,vars:l,...c}=(0,s.w)("ProgressLabel",N,e),m=d();return n.createElement(u.x,{ref:t,...m.getStyles("label",{className:o,style:a,classNames:r,styles:i}),...c})});k.classes=g,k.displayName="@mantine/core/ProgressLabel";let j={},y=(0,a.d)((e,t)=>{let r=(0,s.w)("Progress",j,e),{value:a,classNames:i,styles:l,vars:c,color:u,striped:m,animated:p,"aria-label":d,...g}=r,{resolvedClassNames:v,resolvedStyles:f}=(0,o.h)({classNames:i,styles:l,props:r});return n.createElement(h,{ref:t,classNames:v,styles:f,vars:c,...g},n.createElement(P,{value:a,color:u,striped:m,animated:p,"aria-label":d}))});y.classes=g,y.displayName="@mantine/core/Progress",y.Section=P,y.Root=h,y.Label=k}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=58737)}),_N_E=e.O()}]);