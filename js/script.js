// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the area of a trpezoid.
 */
function calculate() {  
  
  // Data being collected 
  let sideA = parseFloat(document.getElementById('side_a').value);
  let sideB = parseFloat(document.getElementById('side_b').value);
  let height = parseFloat(document.getElementById('height').value);

  //Data being processed
  let bothSides = sideA + sideB;
  let allMesurements = bothSides * height;
  let area = allMesurements / 2;
  
  // Data being shown
  document.getElementById('areaOfTrapezoid').innerHTML = 'The area of the trapezoid is ' + area.toFixed(2) + 'cm²'
}