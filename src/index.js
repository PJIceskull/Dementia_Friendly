// Import
import { changeRoute } from "./model.js";

function initListeners() {}

function initURLListener() {
  $(window).on("hashChange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
  initListeners();
});
