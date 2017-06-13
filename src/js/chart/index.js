/**
 *
 */

import * as chart from "./chart";
import * as table from "./table";

export function init(selector) {
  chart.init(selector);
}

export function update(data) {
  chart.update(data);
  table.update(data);
}