import{j as a,o as i,d as m,b as n,w as r,m as e,a as t,h as l,n as c,e as p,D as u}from"./app-CEspCjqf.js";import{S as h}from"./SectionTitle-CxV4f2i-.js";const _={class:"md:grid md:grid-cols-3 md:gap-6"},g={class:"mt-5 md:mt-0 md:col-span-2"},v={class:"grid grid-cols-6 gap-6"},b={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},y={__name:"FormSection",emits:["submitted"],setup(f){const o=a(()=>!!u().actions);return(s,d)=>(i(),m("div",_,[n(h,null,{title:r(()=>[e(s.$slots,"title")]),description:r(()=>[e(s.$slots,"description")]),_:3}),t("div",g,[t("form",{onSubmit:d[0]||(d[0]=l(w=>s.$emit("submitted"),["prevent"]))},[t("div",{class:c(["px-4 py-5 bg-white sm:p-6 shadow",o.value?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[t("div",v,[e(s.$slots,"form")])],2),o.value?(i(),m("div",b,[e(s.$slots,"actions")])):p("",!0)],32)])]))}};export{y as _};