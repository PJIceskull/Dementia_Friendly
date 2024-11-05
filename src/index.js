// Import
import { changeRoute } from "./model.js";

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function initListeners() {}

$(document).ready(function () {
  initURLListener();
  initListeners();
});
