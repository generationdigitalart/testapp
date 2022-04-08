// LICENSE
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

// METADATA
const generationMetadata = {
    "name":"",
    "description":""
}

// SEEDS FOR OUTPUT
const seeds = []

function setup() {
    createCanvas(WIDTH, HEIGHT);
    background(255/2);
    translate(width/2, height/2);
    let r = DIM/2 - 50*M;
    ellipse(0,0,r*2);
    let a = radians(random(110,130));
    ellipse(sin(a)*r, cos(a)*r, r/4);
    noLoop();
}

function draw() {
  
}