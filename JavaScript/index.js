import suma from "./DOM/suma.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    console.log(localStorage.getItem("text"));
    suma(".valor", "panel");
})