(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{7752:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return t(126)}])},3412:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r=t(5893),i=t(9875),o=t(9134),a=t.n(o);function s(n){let{children:e}=n;return(0,r.jsx)(i.E.main,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},layout:"position",className:a().layout,children:e})}},126:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var r=t(5893),i=t(7294),o=t(9008),a=t.n(o),s=t(1664),u=t.n(s),c=t(8633),d=t(880),_=t(9875),l=t(3412),p=t(7913),g=t.n(p);let h=n=>{var e;let{error:t}=n,i={Signin:"Try signing in with a different account.",OAuthSignin:"Try signing in with a different account.",OAuthCallback:"Try signing in with a different account.",OAuthCreateAccount:"Try signing in with a different account.",EmailCreateAccount:"Try signing in with a different account.",Callback:"Try signing in with a different account.",OAuthAccountNotLinked:"Please sign in with the same account you used orignally.",EmailSignin:"Check your email address.",CredentialsSignin:"Sign in failed. Make sure the details you provided are correct.",default:"Unable to sign in."},o=t&&(null!==(e=i[t])&&void 0!==e?e:i.default);return(0,r.jsx)("div",{className:"signin-error",children:o})};function m(n){let{providers:e}=n,{query:{callbackUrl:t,error:o}}=(0,d.useRouter)(),[s,p]=(0,i.useState)(!1);var m={};s||(m={hover:{scale:1.02},tap:{scale:.997}});let f=()=>{p(window.innerWidth<=720)};return(0,i.useEffect)(()=>{window.addEventListener("resize",f)}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Startup@UCR | Sign In"})}),(0,r.jsx)("div",{className:g().container,children:(0,r.jsxs)("section",{className:g().section,children:[o&&(0,r.jsx)("div",{className:g().errorMsg,children:(0,r.jsx)(h,{error:o})}),Object.values(e).map(n=>(0,r.jsxs)(_.E.button,{"aria-label":"Provider Sign In Button",type:"button",variants:m,whileHover:"hover",whileTap:"tap",transition:{ease:"easeInOut",duration:.015},className:g().button,onClick:()=>(0,c.zB)(n.id),children:["Sign in with ",n.name]},n.name)),(0,r.jsx)(u(),{passHref:!0,href:"/",children:(0,r.jsx)(_.E.button,{"aria-label":"Home Button",type:"button",variants:m,whileHover:"hover",whileTap:"tap",transition:{ease:"easeInOut",duration:.015},className:"".concat(g().button," ").concat(g().home),children:"Go Back to Homepage"})})]})})]})}m.getInitialProps=async n=>{let{req:e,res:t}=n,r=await (0,c.Gg)({req:e});if(r&&t&&r.accessToken){t.writeHead(302,{Location:"/"}),t.end();return}return{session:void 0,providers:await (0,c.a)(n)}}},7913:function(n){n.exports={container:"Form_container__QZyVS",section:"Form_section__En4Pt",mainContent:"Form_mainContent__O0Kcr",button:"Form_button__Jsx6p",home:"Form_home__iOoqR",danger:"Form_danger__s1kTK",cancel:"Form_cancel__taASY",inputWrapper:"Form_inputWrapper__nUW_B",inputHeader:"Form_inputHeader__GrJuy",trigger:"Form_trigger__OIRXb",inputBox:"Form_inputBox__sJnvz",dropdown:"Form_dropdown__f9RCB",dropdownHeader:"Form_dropdownHeader__XchyQ",dropdownSelected:"Form_dropdownSelected__EuX6m",dropdownContent:"Form_dropdownContent__H6BNk",show:"Form_show__pe3Bj",radio:"Form_radio__KTpgW",errorMsg:"Form_errorMsg__K4hyJ",triggered:"Form_triggered__buxMD",triggeredBox:"Form_triggeredBox__65jjq",groupbuttonWrapper:"Form_groupbuttonWrapper__wTA22",groupbuttonHeader:"Form_groupbuttonHeader__FXnjC"}},9134:function(n){n.exports={layout:"Layout_layout__k3ZVO"}},9008:function(n,e,t){n.exports=t(3121)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=7752)}),_N_E=n.O()}]);