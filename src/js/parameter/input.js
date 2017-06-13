/**
 * Input module
 * @module input
 */

/**
 * Adds an input element to the element with the specified id and calls the
 * callback function when the input value changes.
 * @param {string} selector - The id of the parent element.
 * @param {function} callback - The function to call on change.
 */
export default function input(label, callback) {
  const div = d3.select(label)
    .append("div")
      .attr("class", "a-parameter-input");

  const readonly = eval(label.dataset.readonly);

  div.append("input")
    .on("change", function() {
      callback(label, this.value);
    })
    .each(function() {
      if (readonly) {
        d3.select(this).attr("disabled", "true");
      } else {
        const svg = div.append("svg")
            .attr("class", "a-parameter-reset")
            .attr("width", 19)
            .attr("height", 19)
          .append("g")
            .attr("transform", "translate(" + 10 + "," + 10 + ")");

        svg.append("circle")
            .attr("r", 8)
            .on("click", () => callback(label, null));

        svg.append("path")
           .attr("d", d3.symbol()
              .size(40)
              .type(d3.symbolCross))
           .attr("transform", "rotate(-45)");
      }
    });
}
