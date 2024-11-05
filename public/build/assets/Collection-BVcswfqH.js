import{T as U,o as f,c as p,w as i,a as r,b as s,f as n,u as o,t as y,e as c,h as j,r as V,d as A,p as x,F as M,n as F}from"./app-CDtmAv_n.js";import{_ as q}from"./AppLayout-eSaL16b2.js";import{F as w,_ as B,a as O,C as P,b as N}from"./FormValidationError-8IUzXQga.js";import{_ as $}from"./PrimaryButton-7WJAAcpb.js";import{_ as T}from"./ConfirmationModal-UMPdWLn9.js";import{_ as D}from"./Modal-CCgCMeDh.js";import{_ as W,a as E}from"./FileInput-U8LUhIwa.js";import{_ as S}from"./TextInput-B0hd0IQT.js";import{_ as v}from"./InputLabel-xup2gs8s.js";import{_ as I,C as z,a as Q}from"./CollectionsDropdown-DZjngt8V.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const R={class:"px-6 py-4 space-y-4"},G={class:"flex flex-row justify-end gap-2 px-6 py-4 bg-gray-100 text-right"},H={__name:"AddProductModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},collection:{type:Object,required:!0}},emits:["close"],setup(d,{emit:C}){const m=C,t=U({collection_id:d.collection.id,title:"",description:"",price:"0",stock:0,file:null}),u=()=>{t.reset(),m("close")},g=()=>{t.post("/product/store",{onSuccess:()=>{u()}})};return(k,e)=>(f(),p(D,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:u},{default:i(()=>[r("form",{onSubmit:j(g,["prevent"])},[r("div",R,[e[11]||(e[11]=r("h3",{class:"text-lg font-medium text-gray-900"}," Add Product ",-1)),r("div",null,[s(v,{for:"title"},{default:i(()=>e[6]||(e[6]=[n("Title :")])),_:1}),s(S,{class:"w-full",id:"title",modelValue:o(t).title,"onUpdate:modelValue":e[0]||(e[0]=l=>o(t).title=l)},null,8,["modelValue"]),o(t).errors.title?(f(),p(w,{key:0},{default:i(()=>[n(y(o(t).errors.title),1)]),_:1})):c("",!0)]),r("div",null,[s(v,{for:"description"},{default:i(()=>e[7]||(e[7]=[n("Description :")])),_:1}),s(B,{class:"w-full",id:"description",modelValue:o(t).description,"onUpdate:modelValue":e[1]||(e[1]=l=>o(t).description=l)},null,8,["modelValue"]),o(t).errors.description?(f(),p(w,{key:0},{default:i(()=>[n(y(o(t).errors.description),1)]),_:1})):c("",!0)]),r("div",null,[s(v,{for:"price"},{default:i(()=>e[8]||(e[8]=[n("Price :")])),_:1}),s(S,{class:"w-full",id:"price",modelValue:o(t).price,"onUpdate:modelValue":e[2]||(e[2]=l=>o(t).price=l)},null,8,["modelValue"]),o(t).errors.price?(f(),p(w,{key:0},{default:i(()=>[n(y(o(t).errors.price),1)]),_:1})):c("",!0)]),r("div",null,[s(v,{for:"stock"},{default:i(()=>e[9]||(e[9]=[n("Stock :")])),_:1}),s(W,{class:"w-full",id:"stock",modelValue:o(t).stock,"onUpdate:modelValue":e[3]||(e[3]=l=>o(t).stock=l)},null,8,["modelValue"]),o(t).errors.stock?(f(),p(w,{key:0},{default:i(()=>[n(y(o(t).errors.stock),1)]),_:1})):c("",!0)]),r("div",null,[s(v,{for:"file"},{default:i(()=>e[10]||(e[10]=[n("Image :")])),_:1}),s(E,{class:"w-full",id:"file",modelValue:o(t).file,"onUpdate:modelValue":e[4]||(e[4]=l=>o(t).file=l)},null,8,["modelValue"]),o(t).errors.file?(f(),p(w,{key:0},{default:i(()=>[n(y(o(t).errors.file),1)]),_:1})):c("",!0)])]),r("div",G,[s($,{onClick:e[5]||(e[5]=l=>u()),type:"button"},{default:i(()=>e[12]||(e[12]=[n("cancel")])),_:1}),s($,{type:"submit",disabled:o(t).processing},{default:i(()=>e[13]||(e[13]=[n("Add")])),_:1},8,["disabled"])])],32)]),_:1},8,["show","max-width","closeable"]))}},J={class:"px-6 py-4 space-y-4"},K={class:"flex flex-row justify-end gap-2 px-6 py-4 bg-gray-100 text-right"},L={__name:"UpdateCollectionModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},collection:{type:Object,required:!0}},emits:["close"],setup(d,{emit:C}){const m=C;let a=d;const t=U({title:a.collection.title,description:a.collection.description}),u=()=>{t.reset(),m("close")},g=k=>{t.put(`/collection/${k}/update`,{onSuccess:()=>{u()}})};return(k,e)=>(f(),p(D,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:u},{default:i(()=>[r("form",{onSubmit:e[3]||(e[3]=j(l=>g(d.collection.id),["prevent"]))},[r("div",J,[e[6]||(e[6]=r("h3",{class:"text-lg font-medium text-gray-900"}," Update Collection ",-1)),r("div",null,[s(v,{for:"title"},{default:i(()=>e[4]||(e[4]=[n("Title :")])),_:1}),s(S,{class:"w-full",id:"title",modelValue:o(t).title,"onUpdate:modelValue":e[0]||(e[0]=l=>o(t).title=l)},null,8,["modelValue"]),o(t).errors.title?(f(),p(w,{key:0},{default:i(()=>[n(y(o(t).errors.title),1)]),_:1})):c("",!0)]),r("div",null,[s(v,{for:"description"},{default:i(()=>e[5]||(e[5]=[n("Description :")])),_:1}),s(B,{class:"w-full",id:"description",modelValue:o(t).description,"onUpdate:modelValue":e[1]||(e[1]=l=>o(t).description=l)},null,8,["modelValue"]),o(t).errors.description?(f(),p(w,{key:0},{default:i(()=>[n(y(o(t).errors.description),1)]),_:1})):c("",!0)])]),r("div",K,[s($,{onClick:e[2]||(e[2]=l=>u()),type:"button"},{default:i(()=>e[7]||(e[7]=[n("cancel")])),_:1}),s($,{type:"submit",disabled:o(t).processing},{default:i(()=>e[8]||(e[8]=[n("update")])),_:1},8,["disabled"])])],32)]),_:1},8,["show","max-width","closeable"]))}},X={key:0,class:"max-w-7xl mx-auto px-6 flex items-center gap-2 mt-16"},Y={key:1,class:"max-w-7xl mx-auto px-6 flex justify-end my-16"},Z={class:"flex flex-row justify-end gap-2 bg-gray-100 text-right"},ue={__name:"Collection",props:{collection:{type:Object,required:!0},collections:{type:Object,required:!0},currentCollection:{required:!0,default:"All"}},setup(d){let C=d,m=V(!1),a=V(!1),t=V(!1),u=V(!1);const g=U({id:C.collection.id}),k=e=>{g.delete(`/collection/${e}/destroy`),a.value=!1};return(e,l)=>(f(),A(M,null,[s(q,{title:"Collection"},{default:i(()=>[s(z,{collections:d.collections,currentCollection:d.currentCollection,onShowAddCollectionModal:l[0]||(l[0]=b=>x(u)?u.value=!0:u=!0)},null,8,["collections","currentCollection"]),e.$page.props.auth.user?(f(),A("div",X,[r("button",{onClick:l[1]||(l[1]=b=>x(m)?m.value=!0:m=!0),class:"px-3 py-2 rounded-md border border-blue-900 text-blue-900 text-xs hover:bg-blue-900 hover:text-white",type:"button"},"Edit"),r("button",{onClick:l[2]||(l[2]=b=>x(a)?a.value=!0:a=!0),class:"px-3 py-2 rounded-md border border-blue-900 text-blue-900 text-xs hover:bg-blue-900 hover:text-white",type:"button"},"Delete")])):c("",!0),s(Q,{collection:d.collection,class:F({"my-16":!e.$page.props.auth.user,"mt-4 mb-16":e.$page.props.auth.user})},null,8,["collection","class"]),e.$page.props.auth.user?(f(),A("div",Y,[r("button",{onClick:l[3]||(l[3]=b=>x(t)?t.value=!0:t=!0),class:"px-3 py-2 rounded-md border border-blue-900 text-blue-900 text-xs hover:bg-blue-900 hover:text-white",type:"button"},"Add Product")])):c("",!0),s(O),s(P),s(N,{class:"mt-16"})]),_:1}),s(I,{show:o(u),onClose:l[4]||(l[4]=b=>x(u)?u.value=!1:u=!1)},null,8,["show"]),s(H,{show:o(t),onClose:l[5]||(l[5]=b=>x(t)?t.value=!1:t=!1),collection:d.collection},null,8,["show","collection"]),s(L,{show:o(m),collection:d.collection,onClose:l[6]||(l[6]=b=>x(m)?m.value=!1:m=!1)},null,8,["show","collection"]),s(T,{show:o(a)},{title:i(()=>l[9]||(l[9]=[n(" Delete Collection Confirmation ")])),content:i(()=>l[10]||(l[10]=[r("p",{class:"text-base font-bold"}," Are you sure you want to delete this collection ? ",-1),r("ul",{class:"pl-5 mt-2 list-disc text-red-500"},[r("li",null," Once deleted you won't be able to recover it ! "),r("li",null," Also all it's products will be deleted as well ! ")],-1)])),footer:i(()=>[r("div",Z,[s($,{onClick:l[7]||(l[7]=b=>x(a)?a.value=!1:a=!1),type:"button"},{default:i(()=>l[11]||(l[11]=[n("cancel")])),_:1}),s($,{onClick:l[8]||(l[8]=b=>k(d.collection.id)),type:"submit"},{default:i(()=>l[12]||(l[12]=[n("delete")])),_:1})])]),_:1},8,["show"])],64))}};export{ue as default};