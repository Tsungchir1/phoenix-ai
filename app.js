const chat=document.getElementById("chat");
const input=document.getElementById("input");

function add(role,text){
const d=document.createElement("div");
d.className=role;
d.innerText=text;
chat.appendChild(d);
chat.scrollTop=chat.scrollHeight;
}

add("ai","Hello, wanderer of the unknown woods of wisdom! How may I help you today?");

input.addEventListener("keydown",e=>{
if(e.key==="Enter"){
const t=input.value.trim();
if(!t)return;
input.value="";
add("user",t);
add("ai","PHOENIX is forging an answer...");
}
});