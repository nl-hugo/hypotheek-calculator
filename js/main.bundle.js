webpackJsonp([0],{"../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./styles/style.scss":function(t,e,a){e=t.exports=a("../node_modules/css-loader/lib/css-base.js")(void 0),e.push([t.i,'.axis{-webkit-user-select:none;-moz-user-select:none;user-select:none}.axis .domain{fill:none;stroke:none}.track,.track-inset,.track-overlay{stroke-linecap:round}.track{stroke:#000;stroke-opacity:.3;stroke-width:10px}.track-inset{stroke:#eee;stroke-width:8px}.track-overlay{pointer-events:stroke;stroke-width:50px;stroke:transparent;cursor:pointer}.handle{fill:#fff;stroke:#000;stroke-opacity:.5;stroke-width:1.25px}.slider text{font-size:.7em;fill:#a9a9a9}input{font-family:Montserrat;font-size:1.35em;cursor:default;width:80%;border:none;border-radius:0;border-bottom:1px solid #d3d3d3}.a-parameter-reset{cursor:pointer;position:absolute;bottom:6px;right:0;display:none}.a-parameter-modified{display:inline}.a-parameter-reset circle{fill:gray}.a-parameter-reset:hover circle{fill:#a9a9a9}.a-parameter-reset path{fill:#fff}.a-parameter{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;display:block;position:relative;height:100px}.a-parameter-label:hover .a-parameter-label-tip,.a-question-label:hover .a-parameter-label-tip{display:inline}.a-parameter-input,.a-parameter-label,.a-parameter-sublabel{position:absolute;width:20%;min-width:160px}.a-parameter-slider{position:absolute;right:0;bottom:0}.a-parameter-input{bottom:53px}.a-parameter-label{color:#708090;bottom:28px}.a-parameter-sublabel{font-size:.75em;color:silver;bottom:10px}.a-parameter input:disabled{opacity:.6;background-color:#fff}.a-parameter input:focus{outline:none;border-bottom:1px solid #706677}.a-parameter-label-tip{font-size:.8em;bottom:-35px;position:absolute;background-color:#fff;background:hsla(0,0%,78%,.5);padding:5px;display:none;width:200px;z-index:100}.a-parameter-help{display:inline-block;color:#fff;background:silver;border-radius:13px;height:13px;width:13px;text-align:center;font-size:9px;cursor:pointer}.hidden{display:none}.axis--x line,.axis--y line{stroke:#fff;shape-rendering:crispEdges}.axis text{font-size:.9em;fill:silver}.overlay{fill:none;pointer-events:all}.focus circle{fill:none;stroke-width:2px}.focus text{font-size:.85em;fill:silver;text-anchor:middle}.focus line{stroke:#fff;shape-rendering:crispEdges;stroke-dasharray:2,2}.layer path.line{fill:none;stroke-width:1.4px}.layer path.area{opacity:.5}path.nett{fill:none}.table td{border-top:none}.a-section{margin-bottom:4em}.a-section-title{font-size:1.7em;line-height:2em}.a-section-content{line-height:1.7em}.a-section-result{font-size:.9em}.disclaimer{font-size:.7em;line-height:2em;text-transform:uppercase;color:#a9a9a9}h6{margin-top:1.8em}footer{border-top:.05rem solid #bfada3;padding-top:1.2em;font-size:.8em}@font-face{font-family:Montserrat;font-style:normal;font-weight:400;src:local("Montserrat Regular"),local("Montserrat-Regular"),url('+a("./fonts/montserrat-v10-latin-regular.woff2")+') format("woff2"),url('+a("./fonts/montserrat-v10-latin-regular.woff")+') format("woff")}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;src:local("Montserrat Bold"),local("Montserrat-Bold"),url('+a("./fonts/montserrat-v10-latin-700.woff2")+') format("woff2"),url('+a("./fonts/montserrat-v10-latin-700.woff")+') format("woff")}html{position:relative;min-height:100%}body{font-family:Montserrat,sans-serif;font-size:13px;color:#2f4f4f;margin-top:60px;margin-bottom:60px}.annuity{fill:#7bccc4;color:#7bccc4;stroke:#7bccc4}.linear{fill:#dd6e42;color:#dd6e42;stroke:#dd6e42}.amortization{fill:#706677;color:#706677;stroke:#706677}.interest{fill:#bfada3;color:#bfada3;stroke:#bfada3}.nett{fill:green;color:green;stroke:green}.navbar-brand{text-transform:uppercase}.jumbotron{background-color:#706677}.top{top:0;bottom:auto;padding:1em;width:100%;max-width:600px;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.fixedsticky{position:-webkit-sticky;position:-moz-sticky;position:-ms-sticky;position:-o-sticky;position:sticky}',""])},"./data/index.js":function(t,e,a){"use strict";var r=a("./data/nl-NL.json");a.n(r)},"./data/nl-NL.json":function(t,e,a){t.exports=a.p+"data/nl-NL.json"},"./fonts/montserrat-v10-latin-700.woff":function(t,e,a){t.exports=a.p+"fonts/montserrat-v10-latin-700.woff"},"./fonts/montserrat-v10-latin-700.woff2":function(t,e,a){t.exports=a.p+"fonts/montserrat-v10-latin-700.woff2"},"./fonts/montserrat-v10-latin-regular.woff":function(t,e,a){t.exports=a.p+"fonts/montserrat-v10-latin-regular.woff"},"./fonts/montserrat-v10-latin-regular.woff2":function(t,e,a){t.exports=a.p+"fonts/montserrat-v10-latin-regular.woff2"},"./images/index.js":function(t,e,a){"use strict";var r=a("./images/mortgage-icon.png");a.n(r)},"./images/mortgage-icon.png":function(t,e,a){t.exports=a.p+"images/mortgage-icon.png"},"./js/app.js":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("./styles/style.scss"),n=(a.n(r),a("./images/index.js"),a("./data/index.js"),a("./js/dashboard.js"));a.i(n.a)()},"./js/chart/chart.js":function(t,e,a){"use strict";(function(t){function a(e){var a=t.select(e),r={top:20,right:12,bottom:30,left:40},o=+a.attr("width")-r.left-r.right,p=+a.attr("height")-r.top-r.bottom;s=a.append("g").attr("class","a-chart").attr("transform","translate("+r.left+","+r.top+")"),d=t.scaleTime().range([0,o]),c=t.scaleLinear().range([p,0]),l=a.append("g").attr("class","a-axis").attr("transform","translate("+r.left+","+r.top+")"),l.append("g").attr("transform","translate(0,"+p+")").attr("class","axis axis--x"),l.append("g").attr("class","axis axis--y"),i=l.append("g").attr("class","focus").style("display","none"),i.append("circle").attr("class","interest").attr("r",4.5),i.append("line").attr("x1",0).attr("x2",0).attr("y2",p),i.append("text").attr("y",-10).attr("dy",".35em"),l.append("rect").attr("class","overlay").attr("width",o).attr("height",p).on("mouseover",function(){i.style("display",null)}).on("mouseout",function(){i.style("display","none")}).on("mousemove",n)}function r(e){o=e,c.domain([0,t.max(o,function(t){return t.payment})]),d.domain(t.extent(o,function(t){return t.date}));var a=s.selectAll(".layer").data(t.stack().keys(p)(o)),r=a.enter().append("g").attr("class",function(t){return"layer "+t.key});r.append("path").attr("class","area"),r.append("path").attr("class","line"),a.select(".area").attr("d",u),a.select(".line").attr("d",f),r.exit().remove(),s.selectAll(".nett").remove(),s.append("path").datum(o).attr("class","nett").attr("d",m),l.selectAll(".axis--x").call(t.axisBottom(d).ticks(t.timeYear.every(5))),l.selectAll(".axis--y").call(t.axisLeft(c).ticks(2,"$,.0f").tickSize(-d.range()[1]))}function n(){var e=d.invert(t.mouse(this)[0]),a=_(o,e,1),r=o[a-1],n=o[a],s=e-r.date>n.date-e?n:r;i.attr("transform","translate("+d(s.date)+","+c(s.payment)+")"),i.select("text").text(t.format("$,.0f")(s.payment)),i.select("line").attr("y2",c.range()[0]-c(s.payment))}e.a=a,e.b=r;var o=void 0,i=void 0,s=void 0,l=void 0,d=void 0,c=void 0,p=["amortization","interest"],u=t.area().x(function(t){return d(t.data.date)}).y0(function(t){return c(t[0])}).y1(function(t){return c(t[1])}),f=t.line().x(function(t){return d(t.data.date)}).y(function(t){return c(t[1])}),m=t.line().x(function(t){return d(t.date)}).y(function(t){return c(t.nett)}),_=t.bisector(function(t){return t.date}).left}).call(e,a("../node_modules/d3/build/d3.js"))},"./js/chart/index.js":function(t,e,a){"use strict";function r(t){o.a(t)}function n(t){o.b(t),i.a(t)}e.a=r,e.b=n;var o=a("./js/chart/chart.js"),i=a("./js/chart/table.js")},"./js/chart/table.js":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(d3){function update(data){d3.selectAll(".metric").each(function(){var dataset=this.dataset,valueFormat=dataset.valueformat;this.textContent=d3.nest().rollup(function(v){return d3.format(valueFormat)(eval(dataset.value))}).entries(data)})}__webpack_exports__.a=update}).call(__webpack_exports__,__webpack_require__("../node_modules/d3/build/d3.js"))},"./js/dashboard.js":function(t,e,a){"use strict";(function(t){function r(){t.json("data/nl-NL.json",function(e,a){if(e)throw e;t.formatDefaultLocale(a),s.a("#the-chart"),t.selectAll(".a-parameter").each(function(){i.a(this,n)})})}function n(t,e){d[t]=e,l.a(d,o)}function o(t,e){e&&s.b(e)}e.a=r;var i=a("./js/parameter/index.js"),s=a("./js/chart/index.js"),l=a("./js/mortgage/index.js"),d={looptijd:30}}).call(e,a("../node_modules/d3/build/d3.js"))},"./js/mortgage/index.js":function(t,e,a){"use strict";var r=a("./js/mortgage/mortgage.js");a.d(e,"a",function(){return r.a})},"./js/mortgage/mortgage.js":function(t,e,a){"use strict";(function(t){function r(t){var e=[{principal:t.koopsom*t.hypotheekvorm,rate:t.renteAnnuitair,type:"annuity"},{principal:t.koopsom*(1-t.hypotheekvorm),rate:t.renteLineair,type:"linear"}];return e.forEach(function(e){e.payments=a.i(c.a)(e.principal,e.rate,Math.round(t.looptijd),e.type)}),e}function n(t){return!isNaN(t[0].nett)}function o(t,e){return d().startOf("month").add(t+e,"M").toDate()}function i(t){return t.eigenwoningforfait*t.woz/12}function s(t,e){return(1-t.belasting)*(e[0].interest+e[1].interest)}function l(e,a){var l=r(e).map(function(t){return t.payments}),d=t.zip(l[0],l[1]),c=d.map(function(t){return{id:t[0].id,date:o(e.ingangsdatum,t[0].id),amortization:t[0].amortization+t[1].amortization,interest:t[0].interest+t[1].interest,principal:t[0].principal+t[1].principal,payment:t[0].payment+t[1].payment,remaining:t[0].principal+t[1].principal-(t[0].amortization+t[1].amortization),forfait:i(e),taxreturns:-s(e,t),nett:Math.min(t[0].payment+t[1].payment,t[0].payment+t[1].payment-s(e,t)+i(e))}});return a(null,n(c)?c:null)}e.a=l;var d=a("../node_modules/moment/moment.js"),c=(a.n(d),a("./js/mortgage/payments.js"))}).call(e,a("../node_modules/d3/build/d3.js"))},"./js/mortgage/payments.js":function(t,e,a){"use strict";function r(t){return t*d}function n(t){return t/d}function o(t,e){return t*n(e)}function i(t,e,a){var o=n(e),i=Math.pow(1+o,r(a));return o*t*i/(i-1)}function s(t,e){return t/r(e)}function l(t,e,a,n){return Array.apply(null,Array(r(a))).map(function(r,l,d){return r={id:l,principal:0===l?t:d[l-1].principal-d[l-1].amortization},r.interest=o(r.principal,e),"annuity"===n?(r.payment=i(t,e,a),r.amortization=r.payment-r.interest):(r.amortization=s(t,a),r.payment=r.amortization+r.interest),d[l]=r})}e.a=l;var d=12},"./js/parameter/index.js":function(t,e,a){"use strict";var r=a("./js/parameter/parameter.js");a.d(e,"a",function(){return r.a})},"./js/parameter/input.js":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(d3){function input(label,callback){var div=d3.select(label).append("div").attr("class","a-parameter-input"),readonly=eval(label.dataset.readonly);div.append("input").on("change",function(){callback(label,this.value)}).each(function(){if(readonly)d3.select(this).attr("disabled","true");else{var t=div.append("svg").attr("class","a-parameter-reset").attr("width",19).attr("height",19).append("g").attr("transform","translate(10,10)");t.append("circle").attr("r",8).on("click",function(){return callback(label,null)}),t.append("path").attr("d",d3.symbol().size(40).type(d3.symbolCross)).attr("transform","rotate(-45)")}})}__webpack_exports__.a=input}).call(__webpack_exports__,__webpack_require__("../node_modules/d3/build/d3.js"))},"./js/parameter/parameter.js":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(d3){function init(label,callback){next=callback;var data=label.dataset,x=eval(data.scale).range([margin.left,width]);__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__input__.a)(label,setChanged),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__slider__.a)(label,setChanged,x,width,height,margin),setChanged(label,null)}function setChanged(label,value){var data=label.dataset,restrict=data.restrict,valueFormat=data.valueformat,scaleFormat=data.scaleformat,x=eval(data.scale).range([margin.left,width]),v=value,modified=!0;isNaN(v)&&(v=(v+"").replace(/,/g,".")),v&&!isNaN(v)||(v=data.value,modified=!1),v=eval(restrict);var elt=d3.select(label);elt.select("input").property("value",d3.format(valueFormat)(v)),elt.select(".handle").attr("cx",x(v)),elt.select(".a-parameter-reset").classed("a-parameter-modified",modified),elt.select(".a-parameter-sublabel").selectAll(".a-value").html(function(){return d3.format(scaleFormat)(eval(this.dataset.value))}),d3.select("[data-parameter=renteLineair]").classed("hidden","hypotheekvorm"===data.parameter&&v>.96),d3.select("[data-parameter=renteAnnuitair]").classed("hidden","hypotheekvorm"===data.parameter&&v<.04),next(data.parameter,v)}function translate(t,e,a){d3.select("[data-parameter="+e+"]").each(function(){setChanged(this,a(Math.round(t)))})}function round(t,e){return e>0?Math.round(t/e)*e:t}__webpack_exports__.a=init;var __WEBPACK_IMPORTED_MODULE_0__input__=__webpack_require__("./js/parameter/input.js"),__WEBPACK_IMPORTED_MODULE_1__slider__=__webpack_require__("./js/parameter/slider.js"),margin={top:5,right:30,bottom:10,left:10},width=280-margin.left-margin.right,height=60-margin.top-margin.bottom,next=void 0}).call(__webpack_exports__,__webpack_require__("../node_modules/d3/build/d3.js"))},"./js/parameter/slider.js":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(d3){function slider(label,callback,x,width,height,margin){var div=d3.select(label).append("div").attr("class","a-parameter-slider"),readonly=eval(label.dataset.readonly),svg=div.append("svg").attr("width",width+margin.left+margin.right).attr("height",height+margin.top+margin.bottom).style("opacity",function(){return readonly?.6:1}).append("g").attr("transform","translate("+margin.left+","+margin.top+")"),data=label.dataset,slider=svg.append("g").attr("class","slider").attr("transform","translate(0,"+margin.top+")");slider.append("line").attr("class","track").attr("x1",x.range()[0]).attr("x2",x.range()[1]).select(function(){return this.parentNode.appendChild(this.cloneNode(!0))}).attr("class","track-inset").select(function(){return this.parentNode.appendChild(this.cloneNode(!0))}).attr("class","track-overlay").call(d3.drag().on("start.interrupt",function(){slider.interrupt()}).on("start drag",function(){return readonly?null:callback(label,x.invert(d3.event.x))})),slider.insert("g",".track-overlay").attr("class","ticks").attr("transform","translate(0,18)").selectAll("text").data(x.ticks(4)).enter().append("text").attr("x",x).attr("text-anchor","middle").text(function(t){return d3.format(data.scaleformat)(t)}),slider.insert("circle",".track-overlay").attr("class","handle").attr("r",8)}__webpack_exports__.a=slider}).call(__webpack_exports__,__webpack_require__("../node_modules/d3/build/d3.js"))},"./styles/style.scss":function(t,e,a){var r=a("../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./styles/style.scss");"string"==typeof r&&(r=[[t.i,r,""]]);a("../node_modules/style-loader/addStyles.js")(r,{});r.locals&&(t.exports=r.locals)},0:function(t,e,a){a("../node_modules/bootstrap-loader/loader.js"),t.exports=a("./js/app.js")}},[0]);
//# sourceMappingURL=main.bundle.js.map