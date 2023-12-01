(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6370],{21071:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-queue",function(){return i(60527)}])},60527:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return r}});var t=i(24246),s=i(71670),a=i(3916),u=i(30289);let d=(0,a.A)(u.us.useQueue);function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-queue"})," limits the number of data in current state and places the rest of it in a queue.\nFor example, in ",(0,t.jsx)(n.a,{href:"/others/notifications/",children:"@mantine/notifications"})," package number of\nnotifications that is currently displayed is limited and other new notifications are added to the queue and displayed once\navailable space appears."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useQueue } from '@mantine/hooks';\n\nconst { state, queue, add, update, cleanQueue } = useQueue({\n  initialValues: [1],\n  limit: 2,\n});\n\n// state -> [1], queue -> []\n\n// When state.length is less that limit, new items are added to state\nadd(2);\n// state -> [1,2], queue -> []\n\n// When state.length is equal to limit, new items are added to queue\nadd(3, 4, 5, 6);\n// state -> [1,2], queue -> [3,4,5,6]\n\n// Use update function to modify items\nupdate((values) => values.map((item) => item * 3));\n// state -> [3,6], queue -> [9,12,15,18]\n\n// If you add or remove items in update function,\n// they will be divided between queue and state according to limit\n// order is always preserved\nupdate((values) => values.filter((item) => item % 2));\n// state -> [3,9], queue -> [15]\n\n// Remove all items from queue\ncleanQueue();\n// state -> [3,9], queue -> []\n\n// Remove all items from queue and state\nupdate(() => []);\n// state -> [], queue -> []\n"})}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.p,{children:"The hook accepts one argument – a configuration object with keys:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"initialValues"})," – optional initial values (divided between state and queue according to limit), defaults to empty array"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"limit"})," – maximum number of items that state can include, every next item after the limit is exceeded is put in queue"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Return value:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"state"})," – current state"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queue"})," – current queue"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"add"})," – add any number of items to state or queue"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"update"})," – apply given function to all items in state and queue, use it to filter, modify or add items"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cleanQueue"})," – remove all items from the queue"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"set-item-type",children:"Set item type"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the hook will get types information from ",(0,t.jsx)(n.code,{children:"initialValues"})," automatically:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const q = useQueue({\n  limit: 2,\n  initialValues: [\n    { name: 'Bob', id: 1 },\n    { name: 'Alice', id: 2 },\n  ],\n});\n\ntypeof q.state[number]; // -> { name: string; id: number; }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you do not provide ",(0,t.jsx)(n.code,{children:"initialValues"}),", pass in type for state item:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const q = useQueue<{ name: string; id: number }>({\n  limit: 2,\n  initialValues: [],\n});\n\nq.add({ name: 'Bob', id: 1 });\n"})}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useQueue<T>(configuration: {\n  initialValues?: T[];\n  limit: number;\n}): {\n  state: T[];\n  queue: T[];\n  add: (...items: T[]) => void;\n  update: (fn: (state: T[]) => T[]) => void;\n  cleanQueue: () => void;\n};\n"})})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(d,{...e,children:(0,t.jsx)(l,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=21071)}),_N_E=e.O()}]);