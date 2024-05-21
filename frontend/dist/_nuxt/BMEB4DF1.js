import{Q as se,R as W,S as de,r as d,T as ce,U as me,L as fe,H as L,V as ae,W as J,c as pe,O as ve,o as ye,i as H,t as le,v as re,z as r,A as b,M as he,B as be,x as Te,l as ge}from"./DtLBaeiB.js";import{S as Q}from"./ewufKi8d.js";function ue(e){return ce()?(me(e),!0):!1}function K(){const e=new Set,n=i=>{e.delete(i)};return{on:i=>{e.add(i);const o=()=>n(i);return ue(o),{off:o}},off:n,trigger:(...i)=>Promise.all(Array.from(e).map(o=>o(...i)))}}function j(e){return typeof e=="function"?e():fe(e)}const ie=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ve=()=>{};function te(e,n=!1,s="Timeout"){return new Promise((V,i)=>{setTimeout(n?()=>i(s):V,e)})}function Pe(e,...n){return n.some(s=>s in e)}function X(...e){if(e.length!==1)return se(...e);const n=e[0];return typeof n=="function"?W(de(()=>({get:n,set:Ve}))):d(n)}function Z(e,n=!1){function s(a,{flush:f="sync",deep:p=!1,timeout:y,throwOnTimeout:w}={}){let h=null;const E=[new Promise(S=>{h=L(e,F=>{a(F)!==n&&(h==null||h(),S(F))},{flush:f,deep:p,immediate:!0})})];return y!=null&&E.push(te(y,w).then(()=>j(e)).finally(()=>h==null?void 0:h())),Promise.race(E)}function V(a,f){if(!ae(a))return s(F=>F===a,f);const{flush:p="sync",deep:y=!1,timeout:w,throwOnTimeout:h}=f??{};let T=null;const S=[new Promise(F=>{T=L([e,a],([A,P])=>{n!==(A===P)&&(T==null||T(),F(A))},{flush:p,deep:y,immediate:!0})})];return w!=null&&S.push(te(w,h).then(()=>j(e)).finally(()=>(T==null||T(),j(e)))),Promise.race(S)}function i(a){return s(f=>!!f,a)}function o(a){return V(null,a)}function u(a){return V(void 0,a)}function _(a){return s(Number.isNaN,a)}function O(a,f){return s(p=>{const y=Array.from(p);return y.includes(a)||y.includes(j(a))},f)}function x(a){return C(1,a)}function C(a=1,f){let p=-1;return s(()=>(p+=1,p>=a),f)}return Array.isArray(j(e))?{toMatch:s,toContains:O,changed:x,changedTimes:C,get not(){return Z(e,!n)}}:{toMatch:s,toBe:V,toBeTruthy:i,toBeNull:o,toBeNaN:_,toBeUndefined:u,changed:x,changedTimes:C,get not(){return Z(e,!n)}}}function we(e){return Z(e)}function _e(e,n,s={}){const{immediate:V=!0}=s,i=d(!1);let o=null;function u(){o&&(clearTimeout(o),o=null)}function _(){i.value=!1,u()}function O(...x){u(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...x)},j(n))}return V&&(i.value=!0,ie&&O()),ue(_),{isPending:W(i),start:O,stop:_}}const xe=ie?window:void 0,Ee={json:"application/json",text:"text/plain"};function ne(e){return e&&Pe(e,"immediate","refetch","initialData","timeout","beforeFetch","afterFetch","onFetchError","fetch","updateDataOnError")}function Y(e){return typeof Headers<"u"&&e instanceof Headers?Object.fromEntries(e.entries()):e}function oe(e,...n){var s;const V=typeof AbortController=="function";let i={},o={immediate:!0,refetch:!1,timeout:0,updateDataOnError:!1};const u={method:"GET",type:"text",payload:void 0};n.length>0&&(ne(n[0])?o={...o,...n[0]}:i=n[0]),n.length>1&&ne(n[1])&&(o={...o,...n[1]});const{fetch:_=(s=xe)==null?void 0:s.fetch,initialData:O,timeout:x}=o,C=K(),a=K(),f=K(),p=d(!1),y=d(!1),w=d(!1),h=d(null),T=J(null),E=J(null),S=J(O||null),F=pe(()=>V&&y.value);let A,P;const t=()=>{V&&(A==null||A.abort(),A=new AbortController,A.signal.onabort=()=>w.value=!0,i={...i,signal:A.signal})},c=g=>{y.value=g,p.value=!g};x&&(P=_e(t,x,{immediate:!1}));let m=0;const k=async(g=!1)=>{var U,D;t(),c(!0),E.value=null,h.value=null,w.value=!1,m+=1;const $=m,I={method:u.method,headers:{}};if(u.payload){const v=Y(I.headers),N=j(u.payload);!u.payloadType&&N&&Object.getPrototypeOf(N)===Object.prototype&&!(N instanceof FormData)&&(u.payloadType="json"),u.payloadType&&(v["Content-Type"]=(U=Ee[u.payloadType])!=null?U:u.payloadType),I.body=u.payloadType==="json"?JSON.stringify(N):N}let ee=!1;const q={url:j(e),options:{...I,...i},cancel:()=>{ee=!0}};if(o.beforeFetch&&Object.assign(q,await o.beforeFetch(q)),ee||!_)return c(!1),Promise.resolve(null);let G=null;return P&&P.start(),_(q.url,{...I,...q.options,headers:{...Y(I.headers),...Y((D=q.options)==null?void 0:D.headers)}}).then(async v=>{if(T.value=v,h.value=v.status,G=await v.clone()[u.type](),!v.ok)throw S.value=O||null,new Error(v.statusText);return o.afterFetch&&({data:G}=await o.afterFetch({data:G,response:v})),S.value=G,C.trigger(v),v}).catch(async v=>{let N=v.message||v.name;if(o.onFetchError&&({error:N,data:G}=await o.onFetchError({data:G,error:v,response:T.value})),E.value=N,o.updateDataOnError&&(S.value=G),a.trigger(v),g)throw v;return null}).finally(()=>{$===m&&c(!1),P&&P.stop(),f.trigger(null)})},z=X(o.refetch);L([z,X(e)],([g])=>g&&k(),{deep:!0});const M={isFinished:W(p),isFetching:W(y),statusCode:h,response:T,error:E,data:S,canAbort:F,aborted:w,abort:t,execute:k,onFetchResponse:C.on,onFetchError:a.on,onFetchFinally:f.on,get:B("GET"),put:B("PUT"),post:B("POST"),delete:B("DELETE"),patch:B("PATCH"),head:B("HEAD"),options:B("OPTIONS"),json:l("json"),text:l("text"),blob:l("blob"),arrayBuffer:l("arrayBuffer"),formData:l("formData")};function B(g){return(U,D)=>{if(!y.value)return u.method=g,u.payload=U,u.payloadType=D,ae(u.payload)&&L([z,X(u.payload)],([$])=>$&&k(),{deep:!0}),{...M,then($,I){return R().then($,I)}}}}function R(){return new Promise((g,U)=>{we(p).toBe(!0).then(()=>g(M)).catch(D=>U(D))})}function l(g){return()=>{if(!y.value)return u.type=g,{...M,then(U,D){return R().then(U,D)}}}}return o.immediate&&Promise.resolve().then(()=>k()),{...M,then(g,U){return R().then(g,U)}}}const Se={style:{display:"flex","justify-content":"center"}},Ce=Te("h1",{style:{"text-align":"center"}},"Actualizar Información",-1),Fe={__name:"PacienteUpdate",props:["editedPetSpecie"],setup(e){const n=ge(),s=ve(),{editedPaciente:V}=e,i=d(V||{id:null,name:""}),o=d(""),u=d(""),_=d(""),O=["Cédula de Ciudadanía","Cédula de Extranjería","Pasaporte","Tarjeta de Identidad","Registro Civil","Número de Identificación Tributaria (NIT)","Permiso Especial de Permanencia (PEP)","Visa de Residencia","Tarjeta de Residencia"],x=d(""),C=d(""),a=d(""),f=d(""),p=d(""),y=["EPS Sura","EPS Sanitas","EPS Coomeva","EPS Salud Total","EPS Compensar","EPS Famisanar","EPS Medimás","EPS Nueva EPS","EPS Aliansalud","EPS Cajacopi"],w=d(""),h=d(""),T=d(""),E=d(""),S=d([]),F=async()=>{var c;const{data:P,error:t}=await oe(`${n.public.API_BASE_URL}usuarios/`,{method:"GET"});P.value!=null?S.value=P.value:Q.fire({title:"¡Ops!",icon:"warning",text:`${(c=t.value)==null?void 0:c.data.message}`,confirmButtonText:"Aceptar"})},A=async P=>{var m;const{data:t,error:c}=await oe(`${n.public.API_BASE_URL}usuarios/${P}`,{method:"PATCH",body:{name:o.value,lastName:u.value,secondSurname:_.value,documentType:h.value,identificationCard:x.value,expeditionDate:C.value,birthdate:a.value,gender:f.value,phone:p.value,eps:w.value,email:T.value,password:E.value}});t.value!=null?(Q.fire({title:"Usuario actualizado con éxito!",icon:"success",confirmButtonText:"Aceptar"}),s.push("/")):Q.fire({title:"¡Ops!",icon:"warning",text:`${(m=c.value)==null?void 0:m.data.message}`,confirmButtonText:"Aceptar"})};return ye(()=>{F()}),(P,t)=>{const c=H("v-text-field"),m=H("v-col"),k=H("v-autocomplete"),z=H("v-row"),M=H("v-icon"),B=H("v-btn"),R=H("v-form");return le(),re("div",Se,[r(R,{style:{"max-width":"45%"}},{default:b(()=>[Ce,r(z,null,{default:b(()=>[r(m,{cols:"12",md:"4",style:{"margin-top":"5%"}},{default:b(()=>[r(c,{modelValue:i.value.data,"onUpdate:modelValue":t[0]||(t[0]=l=>i.value.data=l),counter:10,label:"Nombre",class:"mx-auto","hide-details":"",required:""},null,8,["modelValue"])]),_:1}),r(m,{cols:"4",md:"4",style:{"margin-top":"5%"}},{default:b(()=>[r(c,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=l=>u.value=l),counter:10,label:"Apellido",class:"mx-auto","hide-details":"",required:""},null,8,["modelValue"])]),_:1}),r(m,{cols:"8",md:"4",style:{"margin-top":"5%"}},{default:b(()=>[r(c,{modelValue:_.value,"onUpdate:modelValue":t[2]||(t[2]=l=>_.value=l),counter:10,label:"Segundo apellido",class:"mx-auto","hide-details":"",required:""},null,8,["modelValue"])]),_:1}),r(m,{cols:"8",md:"8"},{default:b(()=>[r(k,{modelValue:h.value,"onUpdate:modelValue":t[3]||(t[3]=l=>h.value=l),items:O,counter:10,class:"mx-auto",label:"Tipo de documento",placeholder:"Select...",required:""},null,8,["modelValue"])]),_:1}),r(m,{cols:"8",md:"4"},{default:b(()=>[r(c,{class:"mx-auto",counter:10,modelValue:x.value,"onUpdate:modelValue":t[4]||(t[4]=l=>x.value=l),color:"primary",label:"Número",variant:"underlined"},null,8,["modelValue"])]),_:1}),r(m,{cols:"8",md:"4"},{default:b(()=>[r(c,{modelValue:C.value,"onUpdate:modelValue":t[5]||(t[5]=l=>C.value=l),class:"mx-auto",color:"primary",label:"Fecha de expedición",type:"date",variant:"underlined"},null,8,["modelValue"])]),_:1}),r(m,{cols:"8",md:"4"},{default:b(()=>[r(c,{modelValue:a.value,"onUpdate:modelValue":t[6]||(t[6]=l=>a.value=l),color:"primary",label:"Fecha de nacimiento",type:"date",variant:"underlined"},null,8,["modelValue"])]),_:1}),r(m,{cols:"8",md:"4"},{default:b(()=>[r(c,{modelValue:f.value,"onUpdate:modelValue":t[7]||(t[7]=l=>f.value=l),color:"primary",label:"Género",variant:"underlined"},null,8,["modelValue"])]),_:1}),r(m,{cols:"8",md:"4"},{default:b(()=>[r(c,{modelValue:p.value,"onUpdate:modelValue":t[8]||(t[8]=l=>p.value=l),color:"primary",label:"Teléfono",variant:"underlined"},null,8,["modelValue"])]),_:1}),r(m,{cols:"8",md:"8"},{default:b(()=>[r(k,{modelValue:w.value,"onUpdate:modelValue":t[9]||(t[9]=l=>w.value=l),items:y,label:"Eps",placeholder:"Select...",required:""},null,8,["modelValue"])]),_:1}),r(m,null,{default:b(()=>[r(c,{modelValue:T.value,"onUpdate:modelValue":t[10]||(t[10]=l=>T.value=l),color:"primary",label:"Correo electrónico",variant:"underlined"},null,8,["modelValue"])]),_:1}),r(m,null,{default:b(()=>[r(c,{modelValue:E.value,"onUpdate:modelValue":t[11]||(t[11]=l=>E.value=l),color:"primary",label:"Contraseña",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1}),r(B,{style:{"margin-left":"35%","background-color":"aqua","margin-top":"5%"},onClick:he(A,["prevent"])},{default:b(()=>[be(" Completar Actualización "),r(M,{icon:"mdi-chevron-right",end:""})]),_:1})]),_:1})])}}},Oe={__name:"actualizar",setup(e){return(n,s)=>(le(),re("div",null,[r(Fe)]))}};export{Oe as default};
