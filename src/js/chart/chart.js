

let data, focus, g, gAxis, x, y;

const keys = ["amortization", "interest"];

// const stack = d3.stack();

const area = d3.area()
  // .x(d => x(d.data.id))
    .x(d => x(d.data.date))
    .y0(d => y(d[0]))
    .y1(d => y(d[1]));

const line = d3.line()
    // .x(d => x(d.data.id))
    .x(d => x(d.data.date))
    .y(d => y(d[1]));

const netline = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.nett));


// const bisectDate = d3.bisector((d) => d.id).left;
const bisectDate = d3.bisector((d) => d.date).left;

export function init(selector) {
  const svg = d3.select(selector),
    margin = {top: 20, right: 12, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

  g = svg.append("g")
        .attr("class", "a-chart")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // x = d3.scaleLinear().range([0, width]);
  x = d3.scaleTime().range([0, width]);
  y = d3.scaleLinear().range([height, 0]);

  gAxis = svg.append("g")
        .attr("class", "a-axis")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  gAxis.append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr("class", "axis axis--x");

  gAxis.append("g")
      // .attr("transform", "translate(" + width + ",0)")
      .attr("class", "axis axis--y");

  focus = gAxis.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("circle")
      .attr("class", "interest")
      .attr("r", 4.5);

  focus.append("line")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y2", height);

  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  gAxis.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);
}

export function update(_data) {
  data = _data;
  // console.log(data);

  y.domain([0, d3.max(data, d => d.payment)]);
  x.domain(d3.extent(data, d => d.date));

  const layers = g.selectAll(".layer")
    .data(d3.stack().keys(keys)(data));

  const layer = layers.enter().append("g")
      .attr("class", d => "layer " + d.key);

  layer.append("path").attr("class", "area");
  layer.append("path").attr("class", "line");

  layers.select(".area").attr("d", area);
  layers.select(".line").attr("d", line);

  layer.exit().remove();

  // niet zo fraai...
  g.selectAll(".nett-line").remove();
  g.append("path")
    .datum(data)
    .attr("class", "nett-line")
    .attr("d", netline);

  gAxis.selectAll(".axis--x")
      .call(d3.axisBottom(x).ticks(d3.timeYear.every(5)));

  gAxis.selectAll(".axis--y")
      .call(d3.axisLeft(y)
        .ticks(2, "$,.0f")
        .tickSize(-x.range()[1]));
}

function mousemove() {
  const x0 = x.invert(d3.mouse(this)[0]),
    i = bisectDate(data, x0, 1),
    d0 = data[i - 1],
    d1 = data[i],
    // d = x0 - d0.id > d1.id - x0 ? d1 : d0;
    d = x0 - d0.date > d1.date - x0 ? d1 : d0;
  focus.attr("transform", "translate(" + x(d.date) + "," + y(d.payment) + ")");
  // focus.attr("transform", "translate(" + x(d.id) + "," + y(d.payment) + ")");
  focus.select("text").text(d3.format("$,.0f")(d.payment));
  focus.select("line").attr("y2", y.range()[0] - y(d.payment));
}