import{_ as c}from"./AppLayout-Dl9hTzlf.js";import l from"./DeleteUserForm-BNW41OjU.js";import f from"./LogoutOtherBrowserSessionsForm-oYviDfQ4.js";import{S as s}from"./SectionBorder-D-5eB7pd.js";import u from"./TwoFactorAuthenticationForm-Coqv__As.js";import d from"./UpdatePasswordForm-C0ewEeUN.js";import _ from"./UpdateProfileInformationForm-BTLvgVOD.js";import{c as h,w as p,o as e,a as i,d as r,b as t,e as a,F as g}from"./app-DmupeRkY.js";import"./DialogModal-CPgg_SKu.js";import"./SectionTitle-ByxUI9Y2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-CfAvNUiV.js";import"./DangerButton-CfMOGlqy.js";import"./InputError-BxOf9gVO.js";import"./SecondaryButton-yFujq9gD.js";import"./TextInput-CeTccftj.js";import"./ActionMessage-lXCgjIOq.js";import"./PrimaryButton-BOKZY8Oz.js";import"./InputLabel-C2KRwmnP.js";import"./FormSection-mN008cFI.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,n)=>(e(),h(c,{title:"Profile"},{header:p(()=>n[0]||(n[0]=[i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1)])),default:p(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(d,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(f,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(g,{key:3},[t(s),t(l,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};