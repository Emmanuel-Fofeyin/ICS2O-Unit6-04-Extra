// Copyright (c) 2022 fofeyin All rights reserved
//
// Created by: Emmanuel fofeyin
// Created on: June 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-Extra", {
    scope: "/ICS2O-Unit6-04-Extra/",
  })
}

;("use strict")

window.onload = function () {
  // this calculates area of a rectangle

  
const params = new URLSearchParams(document.location.search)

  // input
  const base = params.get("a")
  const height = params.get("b")

  // process
  const area = (base * height) / 2
  const dimensions = "<ul>\n<li>a = " + base + "</li>\n<li>b = " + height

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("area").innerHTML =
    "Area is: " + area.toFixed(2) + " cm²"
}
