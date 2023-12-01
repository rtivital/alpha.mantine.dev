(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6337],{81469:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/css-files-list",function(){return n(31731)}])},31731:function(s,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var t=n(24246),o=n(71670),c=n(3916),r=n(30289);n(27378);var l=n(94998),i=JSON.parse('{"q":["Accordion.css","ActionIcon.css","Alert.css","Affix.css","AppShell.css","AspectRatio.css","Anchor.css","Badge.css","Avatar.css","BackgroundImage.css","Blockquote.css","Button.css","Burger.css","Breadcrumbs.css","Center.css","Card.css","Checkbox.css","Chip.css","CloseButton.css","Code.css","ColorInput.css","ColorPicker.css","ColorSwatch.css","Combobox.css","Container.css","Dialog.css","Drawer.css","Divider.css","Fieldset.css","Flex.css","Grid.css","Group.css","Image.css","Indicator.css","InlineInput.css","Input.css","Kbd.css","Loader.css","List.css","LoadingOverlay.css","Menu.css","Mark.css","Modal.css","ModalBase.css","Notification.css","NumberInput.css","NavLink.css","Overlay.css","Pagination.css","PasswordInput.css","Paper.css","Pill.css","PillsInput.css","Popover.css","PinInput.css","Progress.css","Radio.css","Rating.css","RingProgress.css","ScrollArea.css","SegmentedControl.css","SimpleGrid.css","Skeleton.css","Slider.css","Spoiler.css","Switch.css","Stack.css","Stepper.css","Table.css","Tabs.css","Text.css","ThemeIcon.css","Title.css","Timeline.css","Tooltip.css","UnstyledButton.css","TypographyStylesProvider.css","VisuallyHidden.css"]}'),a=n(37430);function d(){let s=["global.css",...i.q].map(s=>[s.replace(".css",""),(0,t.jsx)(l.E,{style:{whiteSpace:"nowrap"},children:"import '@mantine/core/styles/".concat(s,"';")})]);return(0,t.jsx)(a.gw,{data:s,head:["Component","Import"]})}let p=(0,c.A)(r.us.CSSFilesList);function u(s){let e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"css-files-list",children:"CSS files list"}),"\n",(0,t.jsxs)(e.p,{children:["This page contains a list of CSS files that you can import from ",(0,t.jsx)(e.code,{children:"@mantine/core"})," package\nas a replacement for ",(0,t.jsx)(e.code,{children:"@mantine/core/styles.css"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"components-dependencies",children:"Components dependencies"}),"\n",(0,t.jsxs)(e.p,{children:["Some components require additional styles to work properly. For example, ",(0,t.jsx)(e.a,{href:"/core/button/",children:"Button"}),"\ncomponent is based on ",(0,t.jsx)(e.a,{href:"/core/unstyled-button/",children:"UnstyledButton"}),". If you want to use ",(0,t.jsx)(e.a,{href:"/core/button/",children:"Button"}),",\nyou need to import styles for ",(0,t.jsx)(e.code,{children:"UnstyledButton"})," as well."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import '@mantine/core/styles/UnstyledButton.css';\nimport '@mantine/core/styles/Button.css';\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Some components like ",(0,t.jsx)(e.a,{href:"/core/select/",children:"Select"})," do not have any styles on their own – they are built\non top of other components. To find out which components are used in a particular component, check\nthe component source code."]}),"\n",(0,t.jsx)(e.p,{children:"If you are not sure which components are used in a particular component, you can import\nall styles for components that are reused in other components:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import '@mantine/core/styles/ScrollArea.css';\nimport '@mantine/core/styles/UnstyledButton.css';\nimport '@mantine/core/styles/VisuallyHidden.css';\nimport '@mantine/core/styles/Paper.css';\nimport '@mantine/core/styles/Popover.css';\nimport '@mantine/core/styles/CloseButton.css';\nimport '@mantine/core/styles/Group.css';\nimport '@mantine/core/styles/Loader.css';\nimport '@mantine/core/styles/Overlay.css';\nimport '@mantine/core/styles/ModalBase.css';\nimport '@mantine/core/styles/Input.css';\nimport '@mantine/core/styles/Flex.css';\n"})}),"\n",(0,t.jsx)(e.h2,{id:"global-styles",children:"Global styles"}),"\n",(0,t.jsx)(e.p,{children:"All Mantine components depend on global styles, you need to import them before\nall other styles:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import '@mantine/core/styles/global.css';\n"})}),"\n",(0,t.jsx)(e.h2,{id:"import-order",children:"Import order"}),"\n",(0,t.jsxs)(e.p,{children:["It is important to keep correct styles import order. For example, if you want to use\n",(0,t.jsx)(e.a,{href:"/core/button/",children:"Button"})," component, you need to import styles for\n",(0,t.jsx)(e.a,{href:"/core/unstyled-button/",children:"UnstyledButton"})," first and then import styles for ",(0,t.jsx)(e.a,{href:"/core/button/",children:"Button"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"// ✅ Correct order – Button styles will override UnstyledButton styles\nimport '@mantine/core/styles/UnstyledButton.css';\nimport '@mantine/core/styles/Button.css';\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"// ❌ Incorrect order – UnstyledButton styles will override Button styles\nimport '@mantine/core/styles/Button.css';\nimport '@mantine/core/styles/UnstyledButton.css';\n"})}),"\n",(0,t.jsx)(e.h2,{id:"files-list",children:"Files list"}),"\n",(0,t.jsx)(d,{})]})}function m(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(p,{...s,children:(0,t.jsx)(u,{...s})})}}},function(s){s.O(0,[370,5819,2775,9774,2888,179],function(){return s(s.s=81469)}),_N_E=s.O()}]);