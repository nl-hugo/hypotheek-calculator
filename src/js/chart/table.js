/**
 *
 */
export function update(data) {
  d3.selectAll(".metric").each(function() {
    const dataset = this.dataset;
    const valueFormat = dataset.valueformat;
    this.textContent = d3.nest()
      .rollup(v => d3.format(valueFormat)(eval(dataset.value))) // eslint-disable-line no-unused-vars
      .entries(data);
  });
}
