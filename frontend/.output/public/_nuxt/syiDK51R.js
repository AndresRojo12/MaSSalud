import{r as f,i as r,t as l,v as u,z as a,A as c,M as x,B as g,x as h,l as b}from"./DtLBaeiB.js";import{u as y}from"./V6JjYiG_.js";import{S as i}from"./ewufKi8d.js";const C=h("div",{class:"text-subtitle-1 text-medium-emphasis",style:{"text-align":"center"}},"Recuperar contraseña",-1),w={__name:"RecuperarContrasena",setup(d){const e=f(""),s=b(),m=async()=>{var o;try{const{data:t,error:n}=await y(`${s.public.API_BASE_URL}auth/recovery`,{method:"POST",body:{email:e.value}},"$2TirisNIzj");t.value!=null?(await i.fire({title:"Se envio un codigo de recuperación a tu cuenta de gmail!",icon:"success",confirmButtonText:"Aceptar"}),e.value=""):i.fire({title:"Ops!",icon:"warning",text:`${(o=n.value)==null?void 0:o.data.message}`,confirmButtonText:"Aceptar"})}catch{}};return(o,t)=>{const n=r("v-text-field"),p=r("v-btn"),_=r("v-card");return l(),u("div",null,[a(_,{class:"mx-auto pa-12 pb-8",style:{"margin-top":"60px"},elevation:"8","max-width":"380",rounded:"lg"},{default:c(()=>[C,a(n,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=v=>e.value=v),density:"compact",style:{"margin-top":"20px"},placeholder:"Correo electronico","prepend-inner-icon":"mdi-email-outline",variant:"outlined"},null,8,["modelValue"]),a(p,{class:"mb-8",color:"blue",size:"large",variant:"tonal",block:"",onClick:x(m,["prevent"])},{default:c(()=>[g(" Enviar ")]),_:1})]),_:1})])}}},N={__name:"recuperar_contrasena",setup(d){return(e,s)=>(l(),u("div",null,[a(w)]))}};export{N as default};