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
import img15 from "./assets/bolos-caseiros-coco-chocolate.jpg";
import img16 from "./assets/salgados-enrolados.jpg";
import img17 from "./assets/salgados-variados.jpg";
import img18 from "./assets/salgados-assados.jpg";
import img19 from "./assets/chamucas.jpg";
import img20 from "./assets/bolo-citrico.jpg";
import img21 from "./assets/bolo-no-pote.jpg";
import img22 from "./assets/cupcakes.jpg";
import img23 from "./assets/bolo-coco.jpg";
import img24 from "./assets/bolo-no-pote-chocolate.jpg";
const CFG={tel:"258856833194",marca:"Cacau Ateliê",moeda:"MT"};
const IMGS={1:img1,2:img2,3:img3,4:img4,5:img5,6:img6,7:img7,8:img8,9:img9,10:img10,11:img11,12:img12,13:img13,14:img14,15:img15,16:img16,17:img17,18:img18,19:img19,20:img20,21:img21,22:img22,23:img23,24:img24};
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
{c:"biscoitos",t:"Bolinhos de coco e canela",d:"Bolinhos dourados cobertos de coco ralado e canela.",p:null,img:10},
{c:"bolos",t:"Bolos caseiros de chocolate e coco",d:"Bolos caseiros de chocolate e coco, vendidos à unidade.",p:800,u:"cada",img:15},
{c:"salgados",t:"Rolinhos salgados",d:"Rolinhos salgados, vendidos à dúzia.",p:220,u:"1 dúzia",img:16},
{c:"salgados",t:"Salgados variados",d:"Seleção de salgados variados, vendida à dúzia.",p:250,u:"1 dúzia",img:17},
{c:"salgados",t:"Enroladinhos assados",d:"Enroladinhos assados, vendidos à dúzia.",p:180,u:"1 dúzia",img:18},
{c:"salgados",t:"Chamuças",d:"Chamuças douradas, vendidas à dúzia.",p:200,u:"1 dúzia",img:19},
{c:"bolos",t:"Bolo cítrico",d:"Bolo cítrico com cobertura e rodelas de fruta.",p:750,img:20},
{c:"bolos",t:"Bolo no pote",d:"Bolo em camadas com creme, servido no pote.",p:120,img:21},
{c:"bolos",t:"Bolinhos individuais",d:"Bolinhos macios com recheio de creme.",p:25,u:"cada",img:22},
{c:"bolos",t:"Bolo de coco",d:"Bolo coberto com coco e morangos.",p:null,img:23},
{c:"bolos",t:"Bolo no pote grande",d:"Bolo de chocolate em camadas, servido no pote grande.",p:150,u:"grande",img:24},
{c:"bolos",t:"Bolo no pote pequeno",d:"Bolo de chocolate em camadas, servido no pote pequeno.",p:75,u:"pequeno",img:24}
];
const $=s=>document.querySelector(s);const fmt=n=>n.toLocaleString("pt-PT")+" "+CFG.moeda;
const wa=t=>`https://wa.me/${CFG.tel}?text=${encodeURIComponent(t)}`;
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(`Olá, ${CFG.marca}! Gostaria de fazer um pedido.`);a.target="_blank";a.rel="noopener"});
document.querySelectorAll("img[data-i]").forEach(i=>i.src=IMGS[i.dataset.i]);
document.querySelectorAll("[data-bg]").forEach(e=>{const o=e.dataset.ov;e.style.backgroundImage=(o?`linear-gradient(${o},${o}),`:"")+`url(${IMGS[e.dataset.bg]})`});
$("#yr").textContent=new Date().getFullYear();
function grid(){
 ["bolos","festa","biscoitos","salgados"].forEach(cat=>{$("#g-"+cat).innerHTML=P.filter(x=>x.c==cat).map(x=>{
  const m=wa(`Olá, ${CFG.marca}! Quero encomendar ${x.t}.`);
  return `<article class="card"><div class="pic"><img src="${IMGS[x.img]}" alt="${x.t}" loading="lazy"></div><div class="body"><h3>${x.t}</h3><p>${x.d}</p><div class="buy"><span class="price">${x.p==null?"Sob encomenda":fmt(x.p)+(x.u?" "+x.u:"")}</span><a class="btn wa" href="${m}" target="_blank" rel="noopener"><svg class="wi" aria-hidden="true"><use href="#wa"/></svg>Pedir no WhatsApp</a></div></div></article>`;
 }).join("")});
}

$("#burger").onclick=()=>{const o=$("#mob").classList.toggle("open");$("#burger").setAttribute("aria-expanded",o)};
$("#mob").onclick=()=>{$("#mob").classList.remove("open");$("#burger").setAttribute("aria-expanded",false)};
const secs=["inicio","bolos","festa","biscoitos","salgados","contacto"].map(id=>document.getElementById(id));
const links=[...document.querySelectorAll("#links a")];
function spy(){let c=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.4)c=i});links.forEach((l,i)=>l.classList.toggle("on",i==c))}
addEventListener("scroll",spy,{passive:true});
grid();
