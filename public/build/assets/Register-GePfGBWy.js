import{T as g,d as f,b as e,u as o,w as l,F as _,o as c,Z as w,a as t,f as d,e as v,i as y,n as V,h}from"./app-CDtmAv_n.js";import{A as k}from"./AuthenticationCard-DN8mFLUJ.js";import{_ as x}from"./AuthenticationCardLogo-Ba8dvyAT.js";import{_ as b}from"./Checkbox-Cty-SeLd.js";import{_ as i}from"./InputError-DNAc46Ft.js";import{_ as m}from"./InputLabel-xup2gs8s.js";import{_ as $}from"./PrimaryButton-7WJAAcpb.js";import{_ as u}from"./TextInput-B0hd0IQT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const P={class:"mt-4"},q={class:"mt-4"},C={class:"mt-4"},N={key:0,class:"mt-4"},U={class:"flex items-center"},A={class:"ml-2"},F=["href"],T=["href"],B={class:"flex items-center justify-end mt-4"},H={__name:"Register",setup(R){const s=g({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(n,r)=>(c(),f(_,null,[e(o(w),{title:"Register"}),e(k,null,{logo:l(()=>[e(x)]),default:l(()=>[t("form",{onSubmit:h(p,["prevent"])},[t("div",null,[e(m,{for:"name",value:"Name"}),e(u,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":r[0]||(r[0]=a=>o(s).name=a),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),t("div",P,[e(m,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":r[1]||(r[1]=a=>o(s).email=a),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),t("div",q,[e(m,{for:"password",value:"Password"}),e(u,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":r[2]||(r[2]=a=>o(s).password=a),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),t("div",C,[e(m,{for:"password_confirmation",value:"Confirm Password"}),e(u,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":r[3]||(r[3]=a=>o(s).password_confirmation=a),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),n.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",N,[e(m,{for:"terms"},{default:l(()=>[t("div",U,[e(b,{id:"terms",checked:o(s).terms,"onUpdate:checked":r[4]||(r[4]=a=>o(s).terms=a),name:"terms",required:""},null,8,["checked"]),t("div",A,[r[5]||(r[5]=d(" I agree to the ")),t("a",{target:"_blank",href:n.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,F),r[6]||(r[6]=d(" and ")),t("a",{target:"_blank",href:n.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,T)])]),e(i,{class:"mt-2",message:o(s).errors.terms},null,8,["message"])]),_:1})])):v("",!0),t("div",B,[e(o(y),{href:n.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:l(()=>r[7]||(r[7]=[d(" Already registered? ")])),_:1},8,["href"]),e($,{class:V(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:l(()=>r[8]||(r[8]=[d(" Register ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{H as default};