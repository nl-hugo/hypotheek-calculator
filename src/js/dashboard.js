// src/dashboard.js
import * as parameter from "./parameter";
import * as chart from "./chart";
import * as mortgage from "./mortgage";

console.log(mortgage);
// console.log(chart);

// TODO: netjes initialiseren -- of alleen uitvoeren indien
let args = {
  // "koopsom" : 250000,
  "looptijd" : 30
  // "hypotheekvorm" : 1,
  // "renteAnnuitair" : 0.0345,
  // "renteLineair" : 0.0345
};

export default function dashboard() {
  d3.json("../data/nl-NL.json", function(error, locale){
    if (error) throw error;

    d3.formatDefaultLocale(locale);

    chart.init("#the-chart");
    d3.selectAll(".a-parameter").each(function () {
      parameter.init(this, update);
    });

  });



  const x = d3.scaleOrdinal([0,0.003,0.0045,0.0060,0.0075]).domain([12500,25000,50000,75000,1050000]);
  console.log(x(0));
  console.log(x(15000));
  console.log(x(60000));
  console.log(x(150000));



  // const y = d3.scaleOrdinal([0,0.003,0.0045,0.0060,0.0075]).domain([12500,25000,50000,75000,1050000]);
  // console.log(y(0));
  // console.log(y(1));
  // console.log(y(2));
  // console.log(y(3));
  // console.log(y(4));
}

function update(label, value) {
  // console.log("update " + label + " = " + value);

  args[label] = value;
  // console.log(args);

  // const res = mortgage.mortgageCombined(args);
  // console.log(res);
  mortgage.mortgageCombined(args, updateChart);

  // console.log(chart);

  // console.log(eval("if (v == 1) { return 0.03; } else { return 0.05; }"));
  // console.log((if (v == 1) { return 0.03; } else { return 0.05; }));

}

function updateChart(error, data) {
  // console.log(error);
  // console.log(data);

  // TODO: alleen indien res geldig is!!
  if (data) {
    chart.update(data);
    // table.update(data);
  }
}
