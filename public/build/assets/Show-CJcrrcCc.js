import{_ as c}from"./AppLayout-CLqyP4w0.js";import l from"./DeleteUserForm-xqAXC1iV.js";import f from"./LogoutOtherBrowserSessionsForm-D4JyTfDE.js";import{S as s}from"./SectionBorder-uIe7r3u3.js";import u from"./TwoFactorAuthenticationForm-D9U2tHtO.js";import d from"./UpdatePasswordForm-Dop5Yubx.js";import _ from"./UpdateProfileInformationForm-DihgjiHg.js";import{c as h,w as p,o as e,a as i,d as r,b as t,e as a,F as g}from"./app-CEspCjqf.js";import"./DialogModal-ByyBTiPQ.js";import"./SectionTitle-CxV4f2i-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-DEJFRckO.js";import"./DangerButton-B_xb64Cs.js";import"./InputError-BL9kwDZB.js";import"./SecondaryButton-CZ5zFWVp.js";import"./TextInput-CLsBKM46.js";import"./ActionMessage-BhOxkHBD.js";import"./PrimaryButton-DkE2t6Nw.js";import"./InputLabel-DFj03lbi.js";import"./FormSection-Ctx7Grhz.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,n)=>(e(),h(c,{title:"Profile"},{header:p(()=>n[0]||(n[0]=[i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1)])),default:p(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(d,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(f,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(g,{key:3},[t(s),t(l,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};