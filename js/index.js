function ao(){const e=16,t=48,c=d3.select(".chart-ao"),s=c.select("svg");let a;d3.csv("csv/ao.csv",(l,n)=>{if(l)console.log(l);else{a=n;let l=new RegExp("20[0-0][7-7]","g");const r=a.filter(e=>String(e.year).match(l));s.select(".chart-ao-container").append("g").attr("class","chart-ao-container-bis"),(l=>{const n=c.node().offsetWidth,r=650;s.attr("width",n).attr("height",r);const i=`translate(${t},${e})`;s.select(".chart-ao-container").attr("transform",i);const o=c.select(".chart-ao-container-bis");function d(e,t){let c=new RegExp(`20[${e}-${e}][${t}-${t}]`,"g");const s=a.filter(e=>String(e.year).match(c));o.selectAll(`.circle-${e}-${t}`).data(s).enter().append("circle").attr("class",`circles circle-${e}-${t}`).attr("r",0).attr("cy",r/2).attr("cx",0).transition().duration(500).attr("r",e=>1.25*e.radius).attr("cy",e=>e.cy).attr("cx",e=>e.cx)}o.selectAll(".circle-primero").data(l).enter().append("circle").attr("class","circles circle-primero").attr("r",0).attr("cy",r/2).attr("cx",0).transition().delay((e,t)=>10*t).duration(500).ease(d3.easeLinear).attr("r",e=>1.25*e.radius).attr("cy",e=>e.cy).attr("cx",e=>e.cx),(()=>{document.querySelector("#scroll").querySelectorAll(".scroll-ao");let e=scrollama();const t=e=>{1!==e.index||e.element.classList.contains("scrollaunch")?2!==e.index||e.element.classList.contains("scrollaunch")?3!==e.index||e.element.classList.contains("scrollaunch")?4!==e.index||e.element.classList.contains("scrollaunch")?5!==e.index||e.element.classList.contains("scrollaunch")?6!==e.index||e.element.classList.contains("scrollaunch")?7!==e.index||e.element.classList.contains("scrollaunch")?8!==e.index||e.element.classList.contains("scrollaunch")?9!==e.index||e.element.classList.contains("scrollaunch")?10!==e.index||e.element.classList.contains("scrollaunch")||(d(1,7),d(1,8),e.element.classList.add("scrollaunch")):(d(1,6),e.element.classList.add("scrollaunch")):(d(1,5),e.element.classList.add("scrollaunch")):(d(1,4),e.element.classList.add("scrollaunch")):(d(1,3),e.element.classList.add("scrollaunch")):(d(1,2),e.element.classList.add("scrollaunch")):(d(1,1),e.element.classList.add("scrollaunch")):(d(1,0),e.element.classList.add("scrollaunch")):(d(0,9),e.element.classList.add("scrollaunch")):(d(0,8),e.element.classList.add("scrollaunch"))};e.setup({step:".scroll-ao",debug:!1,offset:.33}).onStepEnter(t),window.addEventListener("resize",e.resize)})()})(r)}})}ao();