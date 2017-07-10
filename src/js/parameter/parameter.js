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

  // console.log("raw update = " + value);
  // console.log(label);

  const data = label.dataset;
  // console.log(data);

  const restrict = data.restrict;
  const valueFormat = data.valueformat;
  const scaleFormat = data.scaleformat;
  const x = eval(data.scale).range([margin.left, width]);

  let v = value, modified = true;

  // swap . and , for internationalization
  if (isNaN(v)) {
    v = (v + "").replace(/,/g, ".");
  }

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
  const lin = d3.select("[data-parameter=renteLineair]");
  lin.classed("hidden", (data.parameter === "hypotheekvorm" && v > 0.96) 
    || (lin.classed("hidden") && data.parameter !== "hypotheekvorm"));

  const ann = d3.select("[data-parameter=renteAnnuitair]");
  ann.classed("hidden", (data.parameter === "hypotheekvorm" && v < 0.04) 
    || (ann.classed("hidden") && data.parameter !== "hypotheekvorm"));

  // notify model to update chart
  next(data.parameter, v);
}

// translates the value of 1 field to a value on another
function translate(val, field, scale) { // eslint-disable-line no-unused-vars
  d3.select("[data-parameter=" + field + "]").each(function() {
    setChanged(this, scale(Math.round(val)));
  });
}

// rounds the value of x to the nearest n
function roundN(x, n) { // eslint-disable-line no-unused-vars
  return n > 0 ? Math.round(x / n) * n : x;
}
