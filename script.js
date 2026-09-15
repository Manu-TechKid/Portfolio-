const progress=document.getElementById("progress");
const nav=document.getElementById("nav");
const menuBtn=document.getElementById("menuBtn");
const year=document.getElementById("year");
year.textContent=new Date().getFullYear();

window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/h*100)+"%";
});
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
