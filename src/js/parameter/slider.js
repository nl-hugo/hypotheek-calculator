/**
 * Slider module
 * @module slider
 */

export default function slider(label, callback, x, width, height, margin) {
  const div = d3.select(label)
    .append("div")
      .attr("class", "a-parameter-slider");

  const svg = div.append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const data = label.dataset;

  const slider = svg.append("g")
      .attr("class", "slider")
      .attr("transform", "translate(0," + margin.top  + ")");

  slider.append("line")
      .attr("class", "track")
      .attr("x1", x.range()[0])
      .attr("x2", x.range()[1])
    .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
      .attr("class", "track-inset")
    .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
      .attr("class", "track-overlay")
      .call(d3.drag()
          .on("start.interrupt", function() { slider.interrupt(); })
          .on("start drag", () =>
            callback(label, x.invert(d3.event.x))
          ));

  slider.insert("g", ".track-overlay")
      .attr("class", "ticks")
      .attr("transform", "translate(0," + 18 + ")")
    .selectAll("text")
    .data(x.ticks(4))
    .enter().append("text")
      .attr("x", x)
      .attr("text-anchor", "middle")
      .text(d => d3.format(data.scaleformat)(d));

  slider.insert("circle", ".track-overlay")
      .attr("class", "handle")
      .attr("r", 8);
}
