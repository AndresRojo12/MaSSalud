import{u as h,r as l,i as s,t as d,v as p,z as a,A as c,M as w,B as y,x as g,l as k}from"./DtLBaeiB.js";import{u as C}from"./V6JjYiG_.js";import{S as u}from"./ewufKi8d.js";const B=g("div",{class:"text-subtitle-1 text-medium-emphasis",style:{"text-align":"center"}}," Inserte contraseña nueva ",-1),S={__name:"ContrasenaNueva",setup(m){const r=k(),n=h(),v=l(n.currentRoute.value.query.token||""),o=l(""),_=async()=>{try{const{data:e,error:t}=await C(`${r.public.API_BASE_URL}auth/change-password`,{method:"POST",body:{token:v.value,newPassword:o.value}},"$r6TWUTOKHz");e.value!=null?(u.fire({title:"Success!",text:"Se ha cambiado la contraseña correctamente",icon:"success",confirmButtonText:"OK"}),n.push("/login/usuario")):u.fire({title:"Error!",icon:"error",text:t.value.data.message,confirmButtonText:"Aceptar"})}catch{}};return(e,t)=>{const f=s("v-text-field"),b=s("v-btn"),x=s("v-card");return d(),p("div",null,[a(x,{class:"mx-auto pa-12 pb-8",style:{"margin-top":"60px"},elevation:"8","max-width":"380",rounded:"lg"},{default:c(()=>[B,a(f,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),"append-inner-icon":e.visible?"mdi-eye-off":"mdi-eye",type:e.visible?"text":"password",density:"compact",placeholder:"Contraseña","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":t[1]||(t[1]=i=>e.visible=!e.visible)},null,8,["modelValue","append-inner-icon","type"]),a(b,{class:"mb-8",color:"blue",size:"large",variant:"tonal",block:"",onClick:w(_,["prevent"])},{default:c(()=>[y(" Cambiar ")]),_:1})]),_:1})])}}},P={__name:"nueva_contrasena",setup(m){return(r,n)=>(d(),p("div",null,[a(S)]))}};export{P as default};
