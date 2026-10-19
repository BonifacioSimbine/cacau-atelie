import "./style.css";
import img1 from "./assets/bolo-1.jpg";
import img2 from "./assets/bolo-2.jpg";
import img3 from "./assets/biscoitos-coloridos.jpg";
import img4 from "./assets/cookies-cacau.jpg";
import img5 from "./assets/caixa-coco-chocolate.jpg";
import img6 from "./assets/bolo-quadrados.jpg";
import img7 from "./assets/bolo-aniversario.jpg";
import img8 from "./assets/bolo-lilas.jpg";
import img9 from "./assets/biscoitos-amanteigados.jpg";
import img10 from "./assets/bolinhos-coco-canela.jpg";
import img11 from "./assets/biscoitos-coco-doce.jpg";
import img12 from "./assets/bolo-rosa-coroa.jpg";
import img13 from "./assets/bolo-branco-flores.jpg";
import img14 from "./assets/bolo-branco-topo.jpg";
const CFG={tel:"258863108477",marca:"Cacau Ateliê",moeda:"MT"};
const IMGS={1:img1,2:img2,3:img3,4:img4,5:img5,6:img6,7:img7,8:img8,9:img9,10:img10,11:img11,12:img12,13:img13,14:img14};
const P=[
{c:"bolos",t:"Bolo de chocolate tradicional",d:"Massa húmida de cacau com ganache brilhante e granulado crocante.",p:450,img:1},
{c:"bolos",t:"Dupla de bolos tradicionais",d:"Dois bolos individuais na mesma caixa. Para partilhar ou levar.",p:800,img:2},
{c:"bolos",t:"Bolo de chocolate em quadrados",d:"Massa fofa de cacau com cobertura de chocolate e granulado.",p:null,img:6},
{c:"festa",t:"Bolo rosa com coroa dourada",d:"Cobertura rosa com pérolas, coroa e letreiro dourado.",p:null,img:12},
{c:"festa",t:"Bolo branco com flores",d:"Acabamento texturado, flores e letreiro dourado.",p:null,img:13},
{c:"festa",t:"Bolo branco com topo de aniversário",d:"Flores brancas, pérolas douradas e topo personalizado.",p:null,img:14},
{c:"festa",t:"Bolo lilás com laços",d:"Decoração em tons de lilás, laços de cetim e mensagem à escolha.",p:null,img:8},
{c:"festa",t:"Bolo de aniversário com creme",d:"Cobertura de creme com rosetas e topo personalizado.",p:null,img:7},
{c:"biscoitos",t:"Biscoitos de coco coloridos",d:"Coco em três cores com fio de chocolate. Para festas e presentes.",p:300,img:3},
{c:"biscoitos",t:"Cookies de cacau com cobertura",d:"Cookies crocantes com cobertura de chocolate. Caixa de 8.",p:340,img:4},
{c:"biscoitos",t:"Caixa de coco e chocolate",d:"Mistura de coco e cacau na caixa, pronta a oferecer.",p:280,img:5},
{c:"biscoitos",t:"Biscoitos amanteigados",d:"Massa amanteigada com doce de fruta e fio de chocolate.",p:null,img:9},
{c:"biscoitos",t:"Biscoitos de coco com doce",d:"Cobertos de coco ralado, com doce de fruta no centro.",p:null,img:11},
{c:"biscoitos",t:"Bolinhos de coco e canela",d:"Bolinhos dourados cobertos de coco ralado e canela.",p:null,img:10}
];
const $=s=>document.querySelector(s);const fmt=n=>n.toLocaleString("pt-PT")+" "+CFG.moeda;
const wa=t=>`https://wa.me/${CFG.tel}?text=${encodeURIComponent(t)}`;
const orderTemplate=`Olá, ${CFG.marca}! Gostaria de fazer um pedido:
Produto(s):
Quantidade:
Data desejada:
Personalização/observações:
Bairro/local de entrega:
Podem confirmar a disponibilidade e o custo da entrega?`;
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(orderTemplate);a.target="_blank";a.rel="noopener"});
document.querySelectorAll("img[data-i]").forEach(i=>i.src=IMGS[i.dataset.i]);
document.querySelectorAll("[data-bg]").forEach(e=>{const o=e.dataset.ov;e.style.backgroundImage=(o?`linear-gradient(${o},${o}),`:"")+`url(${IMGS[e.dataset.bg]})`});
$("#yr").textContent=new Date().getFullYear();
function grid(){
 ["bolos","festa","biscoitos"].forEach(cat=>{$("#g-"+cat).innerHTML=P.filter(x=>x.c==cat).map(x=>{
  const m=wa(`Olá, ${CFG.marca}! Gostaria de encomendar:
Produto: ${x.t}
${x.p==null?"Preço: sob consulta":"Preço indicado: "+fmt(x.p)}
Quantidade: 1
Data desejada:
Personalização/observações:
Bairro/local de entrega:
Podem confirmar a disponibilidade e o custo da entrega?`);
  return `<article class="card"><div class="pic"><img src="${IMGS[x.img]}" alt="${x.t}" loading="lazy"></div><div class="body"><h3>${x.t}</h3><p>${x.d}</p><div class="buy"><span class="price${x.p==null?" q":""}">${x.p==null?"Sob consulta":fmt(x.p)}</span><a class="btn wa" href="${m}" target="_blank" rel="noopener"><svg class="wi" aria-hidden="true"><use href="#wa"/></svg>Pedir</a></div></div></article>`}).join("")});
}
$("#askBtn").href=wa(`Olá, ${CFG.marca}! Qual é o custo de entrega para o meu bairro?`);
$("#burger").onclick=()=>{const o=$("#mob").classList.toggle("open");$("#burger").setAttribute("aria-expanded",o)};
$("#mob").onclick=()=>{$("#mob").classList.remove("open");$("#burger").setAttribute("aria-expanded",false)};
const secs=["inicio","bolos","festa","biscoitos","contacto"].map(id=>document.getElementById(id));
const links=[...document.querySelectorAll("#links a")];
function spy(){let c=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.4)c=i});links.forEach((l,i)=>l.classList.toggle("on",i==c))}
addEventListener("scroll",spy,{passive:true});
grid();
