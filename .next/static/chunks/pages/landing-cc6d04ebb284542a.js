(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{8505:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/landing",function(){return t(7856)}])},5811:function(e,n){"use strict";n.Z={src:"/_next/static/media/hero_left.ce59194e.png",height:3346,width:3583,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA4ElEQVR42mN4dHzxgrsHF9QzAMHz+dGz7vVY//93Yfb6/+8PmjKAwIMb5y68fv7kEIj9cmH+/nMtGf9/n5lx5u/bgwZ/GBjYGP7/vye8e9nk0kNTChbu7Gs3ZLCY5cfAwMDMAAQfz65kYfh/Nb/29ori/6f6iv//359fxAAFH1+eYWKAgU21k6ObkuYs+L+KQejzulL1S9MTPBhg4N70mPD9D35I/Xl9MOH/w4VTdlc7Pd5X6/z//96yIAYQ2LNj++EN67bLvbq4UPb/q5U2Tf5q+w/U+/z/f7LOjIGBgQEAsCls2j8dh3QAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7}},3215:function(e,n){"use strict";n.Z={src:"/_next/static/media/hero_right.ab21bf3a.png",height:3460,width:3671,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42mMAgbcBDLx/a9xWvZwStO9yrcGXzydWJe9891+AAQYmMzAw/220iX4zN/P7udr4/28OLln+7P9/5f+HGYQZwGD1f0YQtXf2NvfOzgst/xsYRJ6vjJjzdW/8BAYQ+L9JlfFZZQ4rzMSPS2LXLonm+b+vLnAxw9f/IN0I8K6OIfDdqpbtOyf0/z/W6t/JAAP7am2X7KxzffH/dI0uiN+//7/c/90Mdgx/n5zL///kxOIPi5L+rMhz/v9xaUTs//9/FX49OhJ1ZFF9I8PP59e8/j/cV3lp9cIO35C6dpDuPx8eqr1+cDlw+679kwG3aHc4AI1O6AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},7856:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var i=t(5893),r=t(7294),s=t(1664),a=t.n(s),o=t(5675),c=t.n(o),d=t(8633),l=t(9875),_=t(9583),h=t(2515),u=t(7584),p=t.n(u);let x=e=>fetch(e).then(e=>e.json());function b(){let{data:e,error:n}=(0,h.ZP)("/api/checkin/count",x);return n?(0,i.jsxs)("div",{className:p().wrapper,children:[(0,i.jsx)(_.ffH,{className:p().icon}),(0,i.jsx)("div",{className:p().text,children:"there seems to be an error."})]}):e?(0,i.jsxs)("div",{className:p().wrapper,children:[(0,i.jsx)(_.ffH,{className:p().icon}),(0,i.jsx)("div",{className:p().number,children:Object.keys(e.checkins).length}),(0,i.jsx)("div",{className:p().text,children:"members signed up so far!"})]}):(0,i.jsxs)("div",{className:p().wrapper,children:[(0,i.jsx)(_.ffH,{className:p().icon}),(0,i.jsx)("div",{className:p().number,children:"..."}),(0,i.jsx)("div",{className:p().text,children:"members joined so far!"})]})}t(2451);var A=t(5811),m=t(3215),w=t(4019),g=t.n(w);function f(){let[e]=(0,d.kP)(),[n,t]=(0,r.useState)(!1);var s={};n||(s={hover:{scale:1.05},tap:{scale:.995}});let[o,h]=(0,r.useState)(!1),u=async e=>{let n=await fetch("/api/checkin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e})}),t=await n.json();h(0!==Object.keys(t.checkins).length)},p=()=>{t(window.innerWidth<=720)};return(0,r.useEffect)(()=>{e&&u(e.user.id),window.addEventListener("resize",p),t(window.innerWidth<=720)},[e]),(0,i.jsxs)("div",{className:g().bgWrap,children:[(0,i.jsx)("div",{className:g().heroLeft,children:(0,i.jsx)(c(),{src:A.Z,alt:"Hero Image",objectFit:"contain",quality:50,placeholder:"blur",priority:!0})}),(0,i.jsxs)("section",{className:g().main,children:[(0,i.jsx)("h1",{className:g().title,children:"Startup@UCR"}),(0,i.jsx)("h3",{children:(0,i.jsx)("span",{className:g().subintrotext,children:"Entrepreneurship, Community, Execution."})}),(0,i.jsx)("p",{children:" "}),(0,i.jsxs)("div",{children:[e&&(0,i.jsxs)("h2",{className:g().greeting,children:["glad to have you, ",e.user.name,"!"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(b,{}),!e&&(0,i.jsxs)("div",{className:g().actionwrapper,children:[(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"/sponsorship-packet.pdf",children:(0,i.jsxs)(l.E.button,{"aria-label":"Sponsor Button",type:"button",variants:s,whileHover:"hover",whileTap:"tap",transition:{ease:"easeInOut",duration:.02},className:"".concat(g().secondarybutton," ").concat(g().sponsorbutton),children:[(0,i.jsx)("span",{children:"sponsor us"}),(0,i.jsx)(_.Dli,{className:g().arrow})]})}),(0,i.jsx)(l.E.button,{"aria-label":"Sign In Button",type:"button",variants:s,whileHover:"hover",whileTap:"tap",transition:{ease:"easeInOut",duration:.02},className:g().primarybutton,onClick:d.zB,children:"Join us!"})]}),e&&n&&!o&&(0,i.jsx)("div",{className:g().actionwrapper,children:(0,i.jsx)(a(),{passHref:!0,href:"/checkin",children:(0,i.jsx)(l.E.button,{"aria-label":"Check In Button",type:"button",variants:s,whileHover:"hover",whileTap:"tap",transition:{ease:"easeInOut",duration:.015},className:g().primarybutton,children:"check in"})})})]})]})]}),(0,i.jsx)("div",{className:g().heroRight,children:(0,i.jsx)(c(),{src:m.Z,alt:"Hero Image",objectFit:"contain",quality:50,placeholder:"blur",priority:!0})})]})}},4019:function(e){e.exports={element:"Index_element__zTb2M",bgWrap:"Index_bgWrap___Iy44",main:"Index_main__CIJfm",intro:"Index_intro__z5gH2",window:"Index_window__K7UVX",windowHeader:"Index_windowHeader__RZ4Z4",windowButton:"Index_windowButton__oWc8n",windowContent:"Index_windowContent__pY3SM",title:"Index_title__FUwyz",subintrotext:"Index_subintrotext__7oEIA",description:"Index_description__xlTQ3",greeting:"Index_greeting__mDjH_",code:"Index_code__CUQSm",row:"Index_row__IpLvX",iconWrapper:"Index_iconWrapper__xWoD6",actionwrapper:"Index_actionwrapper__zH8Yf",primarybutton:"Index_primarybutton__dsc1j",arrow:"Index_arrow__aF5RB",secondarybutton:"Index_secondarybutton__s7rgl",sponsorbutton:"Index_sponsorbutton__PgI0_",invisible:"Index_invisible__IrRKj",heroLeft:"Index_heroLeft__L_C_r",heroRight:"Index_heroRight__wZ_Jz",date:"Index_date__SrY_G",mobileimage:"Index_mobileimage__43cy_",desktopimage:"Index_desktopimage__g63Qd"}},7584:function(e){e.exports={wrapper:"SignupCounter_wrapper__Swhm4",icon:"SignupCounter_icon__6yCLh",number:"SignupCounter_number__bbLay",text:"SignupCounter_text__CoYSj"}}},function(e){e.O(0,[515,774,888,179],function(){return e(e.s=8505)}),_N_E=e.O()}]);