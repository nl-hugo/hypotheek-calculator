/**
 * Parameter module
 * @module parameter
 */
import input from "./input";
import slider from "./slider";

const margin = {top: 5, right: 30, bottom: 10, left: 10},
  width = 280 - margin.left - margin.right,
  height = 60 - margin.top - margin.bottom;

let next;

export function init(label, callback) {
  next = callback;
  const data = label.dataset;
  const x = eval(data.scale).range([margin.left, width]);

  input(label, setChanged);
  slider(label, setChanged, x, width, height, margin);

  // initialize
  setChanged(label, null);
}

function setChanged(label, value) {

  // console.log("update " + " = " + value);
  // console.log(label);

  const data = label.dataset;
  // console.log(data);

  const restrict = data.restrict;
  const valueFormat = data.valueformat;
  const scaleFormat = data.scaleformat;
  const x = eval(data.scale).range([margin.left, width]);

  let v = value, modified = true;
  if (!v || isNaN(v)) {
    v = data.value;
    modified = false;
  }
  v = eval(restrict);

  // update slider and input
  const elt = d3.select(label);
  elt.select("input").property("value", d3.format(valueFormat)(v));
  elt.select(".handle").attr("cx", x(v));
  elt.select(".a-parameter-reset").classed("a-parameter-modified", modified);

  // update sublabel
  elt.select(".a-parameter-sublabel").selectAll(".a-value").html(function() {
    return d3.format(scaleFormat)(eval(this.dataset.value));
  });

  // hide unused labels
  d3.select("[data-parameter=renteLineair]")
    .classed("hidden", (data.parameter === "hypotheekvorm" && v >= 1.0));

  d3.select("[data-parameter=renteAnnuitair]")
    .classed("hidden", (data.parameter === "hypotheekvorm" && v <= 0.0));

  // notify model to update chart
  next(data.parameter, v);
}

/*function translateTax(val) {
  let result = 0;
  switch(Math.round(val)) {
    case 1: result = 0.3655; break;
    case 2: result = 0.408; break;
    case 3: result = 0.408; break;
    case 4: result = 0.52; break;
  }
  d3.select("[data-parameter=belasting]").each(function() {
    setChanged(this, result);
  });
}
*/


function translate(val, field, scale) { // eslint-disable-line no-unused-vars

  console.log(val);
  console.log(field);
  console.log(scale);
  // console.log(to);
  console.log(scale.domain());
  console.log(scale.range());

  console.log(scale(Math.round(val)));

  console.log(scale(0));
  console.log(scale(15000));
  console.log(scale(60000));
  console.log(scale(150000));

  console.log("set " + field + " to " + scale(Math.round(val)));
  d3.select("[data-parameter=" + field + "]").each(function() {
    setChanged(this, scale(Math.round(val)));
  });
}