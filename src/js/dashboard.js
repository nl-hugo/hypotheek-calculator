// src/dashboard.js
import * as parameter from "./parameter";
import * as chart from "./chart";
import * as mortgage from "./mortgage";

let args = {
  "looptijd" : 30
};

export default function dashboard() {
  d3.json("data/nl-NL.json", function(error, locale){
    if (error) throw error;

    d3.formatDefaultLocale(locale);

    chart.init("#the-chart");
    d3.selectAll(".a-parameter").each(function () {
      parameter.init(this, update);
    });

  });
}

function update(label, value) {
  args[label] = value;
  mortgage.mortgageCombined(args, updateChart);
}

function updateChart(error, data) {
  // TODO: alleen indien res geldig is!!
  if (data) {
    chart.update(data);
  }
}
