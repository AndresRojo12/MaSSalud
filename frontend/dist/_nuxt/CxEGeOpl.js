import{Z as n}from"./DtLBaeiB.js";const r=e=>{localStorage.setItem("token",e)},s=()=>typeof window<"u"?localStorage.getItem("token"):null,u=()=>typeof window<"u"?localStorage.removeItem("token"):null,i=e=>{localStorage.setItem("user",JSON.stringify(e))},o=()=>{const e=typeof window<"u"?localStorage.getItem("user"):null;return e?JSON.parse(e):null},l=()=>typeof window<"u"?localStorage.removeItem("user"):null,d=n("auth",{state:()=>({isAuthenticated:!!s(),userId:null,user:o(),token:s()}),actions:{login(e,t){r(e),i(t),this.token=e,this.user=t,this.isAuthenticated=!0,this.setUser(t),this.userId=t},setUser(e){this.userId=e,this.user=e},logout(){u(),l(),this.isAuthenticated=!1,this.userId=null,this.token=null,this.user=null},loadUserFromStorage(){const e=s(),t=o();e&&t&&(this.token=e,this.user=t,this.isAuthenticated=!0)}}});export{d as u};
