import{d as c,m as d,e as i,h as t,aV as p,f as n,w as _,g as s,s as u,t as l,n as f}from"./index-2a868905.js";const x={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},m=t("path",{d:"M30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53z",fill:"currentColor"},null,-1),h=[m],v=c({name:"PlayBack",render:function(e,o){return d(),i("svg",x,h)}}),w={class:"pt-1 mr-2 cursor-pointer"},g={class:"text-lg text-[#555]"},b={class:"text-truncate text-[#626569] mt-1"},C=c({__name:"titleBar",props:{title:{default:""},des:{default:""},padding:{default:4}},setup(a){const e=a,o=p();return(k,r)=>(d(),i("div",{class:f(["flex border-b border-[#ebebeb] dark:border-[#ffffff17] py-4",[`px-${e.padding}`]])},[t("div",w,[n(s(u),{size:"16",class:"text-primary",onClick:r[0]||(r[0]=B=>s(o).push("/"))},{default:_(()=>[n(s(v))]),_:1})]),t("div",null,[t("b",g,l(e.title),1),t("div",b,l(e.des),1)])],2))}});export{C as _};