const mousePos = ev => {
    console.log('vertex(',mouseX,',',mouseY,');');
};


function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    //drawGrid(canvasWidth, canvasHeight);

        //THIS AREA FOR FILLS
        fillcb()
        fillca()
        fillcc()
        fillcc2()
        fillce()
        fillcd()
        fill2()
        fill3()
        fill4()
        fill5()
        fill6()
        fill7()
        fill8()
        fill9()
        fill10()
        fill11()
        fill12()
        fill13()
        fill14()
        fill17()
        fill15()
        fill16()

    //THIS AREA FOR LINES
    //drawLine(b1x,b1y,l1x,l1y,l2x,l2y,b2x,b2y,sw)

    //COLLAR LEFT
    drawLine(45,637,   221,440,   555,418,   671,553,3)
    drawLine(854,407,   555,418,   412,542,   422,589,3)
    drawLine(388,526,   412,542,   473,568,   487,626,3)
    drawLine(470,564,   473,568,   465,570,   457,566,3)
    drawLine(429,546,   465,570,   439,605,   480,632,4)
    drawLine(104,572,   232,442,   514,421,   744,502,3)
    drawLine(637,389,   514,421,   398,548,   385,653,4)
    drawLine(350,539,   398,548,   456,568,   491,623,3)
    drawLine(214,477,   234,450,   270,438,   270,438,5)
    drawLine(240,418,   270,438,   251,452,   281,452,4)
    drawLine(231,462,   251,453,   277,448,   287,435,3)
    drawLine(56,685,   220,475,   351,504,   629,703,5)


    //COLLAR RIGHT
    drawLine(488,488,   560,534,   752,649,   957,540,5)
    drawLine(789,607,   752,649,   554,663,   523,688,3)
    drawLine(482,540,   502,588,   577,681,   698,699,3)
    drawLine(638,687,   577,681,   516,699,   483,743,3)
    drawLine(470,524,   554,541,   672,638,   851,629,3)
    drawLine(633,598,   590,574,   521,604,   460,599,3)
    drawLine(432,690,   548,653,   637,643,   709,651,3)
    drawLine(465,555,   487,593,   544,667,   557,715,3)
    drawLine(504,697,   513,688,   547,677,   615,682,4)

    //JAWLINE
    drawLine(344,249,   350,338,   379,407,   428,456,4)
    drawLine(425,370,   449,496,   546,552,   760,490,4)
    drawLine(502,571,   546,552,   582,494,   610,469,3)
    drawLine(368,647,   595,476,   676,304,   754,183,3)

    //NOSE
    drawLine(444,400,   575,419,   626,393,   631,295,4)
    drawLine(444,400,   575,419,   626,393,   631,295,4)
    drawLine(652,426,   623,374,   609,308,   612,221,3)
    drawLine(553,403,   575,407,   587,405,   611,403,4)

    //MOUTH
    drawLine(624,506,   586,459,   510,448,   314,496,5)
    drawLine(490,423,   507,448,   547,463,   625,473,4)

    //CIGARETTE
    drawLine(487,436,   533,447,   592,504,   606,515,4)
    drawLine(550,442,   568,451,   616,498,   621,499,4)
    drawLine(586,511,   589,501,   607,492,   652,487,4)
    drawLine(519,496,   556,458,   596,487,   619,510,4)
    drawLine(596,479,   617,499,   672,553,   718,616,2)
    drawLine(596,479,   660,540,   672,553,   718,616,3)
    drawLine(414,428,   591,504,   654,567,   827,717,2)
    drawLine(632,546,   639,549,   654,567,   827,717,3)
    drawLine(618,582,   654,567,   672,553,   693,524,3)
    drawLine(618,582,   643,556,   657,548,   693,524,3)

    //CIGARETTE SMOKE
    drawLine(524,523,   660,568,   736,541,   804,553,4)
    drawLine(524,523,   674,560,   736,541,   804,553,3)
    drawLine(559,419,   772,546,   905,647,   1452,709,2)
    drawLine(559,359,   823,609,   894,640,   952,636,3)
    drawLine(559,359,   823,609,   894,649,   952,636,3)
    drawLine(659,419,   772,546,   804,580,   828,638,3)
    drawLine(659,419,   772,546,   798,578,   828,638,4)
    drawLine(547,543,   693,545,   724,526,   783,529,2)
    drawLine(631,522,   764,524,   808,538,   959,542,3)
    drawLine(631,522,   832,543,   923,531,   959,642,3)
    drawLine(631,722,   812,530,   941,568,   959,442,4)
    drawLine(731,822,   881,571,   984,512,   859,442,4)
    drawLine(407,275,   915,612,   1288,367,   2095,705,5)
    drawLine(407,575,   909,481,   1432,475,   2095,-205,6)

    //EYE LEFT
    drawLine(347,277,   469,249,   555,273,   609,340,5)
    drawLine(463,121,   472,248,   516,278,   602,279,4)
    drawLine(429,256,   500,252,   533,277,   297,278,4)
    drawLine(412,275,   496,272,   510,255,   490,280,3)
    drawLine(372,181,   489,222,   600,263,   685,270,4)
    drawLine(600,242,   600,263,   588,275,   573,286,4)
    drawLine(661,302,   588,275,   495,236,   403,257,3)
    drawLine(422,268,   501,247,   553,265,   597,288,3)
    drawLine(548,261,   563,271,   577,278,   595,295,3)
    drawLine(468,241,   467,256,   485,274,   500,263,3)
    drawLine(454,212,   455,257,   488,281,   553,258,4)
    drawLine(422,284,   526,296,   566,282,   580,244,4)
    drawLine(535,304,   548,300,   566,282,   580,244,3)

    //EYE RIGHT
    drawLine(590,363,   610,306,   662,325,   693,380,5)
    drawLine(602,250,   610,306,   635,329,   675,320,4)
    drawLine(600,332,   642,330,   658,321,   666,301,4)
    drawLine(600,332,   642,330,   655,319,   666,301,4)
    drawLine(600,332,   642,330,   651,317,   666,301,4)
    drawLine(553,337,   622,323,   637,309,   642,285,3)
    drawLine(629,265,   610,313,   647,337,   705,300,3)
    drawLine(629,295,   616,331,   647,337,   705,300,3)
    drawLine(539,339,   610,305,   671,299,   761,459,4)
    drawLine(659,338,   668,308,   671,299,   679,246,4)
    drawLine(691,319,   668,308,   636,298,   599,344,3)
    drawLine(691,319,   642,304,   664,316,   640,344,4)

    //EAR
    drawLine(774,300,   353,351,   328,243,   645,630,4)
    drawLine(380,240,   329,329,   314,245,   523,200,4)
    drawLine(451,395,   325,275,   337,305,   446,327,3)

    //HAIR LEFT
    drawLine(384,443,   288,419,   234,421,   191,469,4)
    drawLine(384,443,   289,401,   234,421,   221,479,4)
    drawLine(456,326,   261,402,   198,365,   241,320,4)
    drawLine(220,126,   260,357,   198,365,   201,190,3)
    drawLine(259,445,   252,375,   172,336,   31,374,3)
    drawLine(320,316,   232,307,   172,336,   123,420,3)
    drawLine(264,351,   201,314,   134,325,   123,420,2)
    drawLine(301,273,   174,272,   134,325,   123,420,2)
    drawLine(264,351,   202,285,   122,273,   123,420,2)
    drawLine(264,351,   194,222,   122,273,   123,500,1)
    drawLine(459,292,   153,224,   140,127,   434,100,1)
    drawLine(329,-150,   225,159,   140,127,   534,-200,1)

    //HAIR RIGHT
    drawLine(527,350,   638,405,   656,467,   631,520,4)
    drawLine(527,350,   669,386,   656,467,   631,520,4)
    drawLine(646,391,   677,406,   703,434,   700,476,4)
    drawLine(696,362,   704,393,   703,434,   660,476,3)
    drawLine(556,391,   690,388,   760,442,   700,476,3)
    drawLine(691,272,   724,342,   760,442,   652,537,3)
    drawLine(756,382,   738,369,   799,349,   936,372,2)
    drawLine(672,305,   750,316,   799,349,   834,423,2)
    drawLine(821,457,   765,321,   830,292,   834,423,2)
    drawLine(714,250,   782,261,   830,292,   834,423,1)
    drawLine(758,331,   796,265,   863,250,   954,289,1)
    drawLine(682,195,   803,196,   863,250,   876,350,1)

    //HAIR FOREHEAD
    drawLine(330,116,   341,267,   370,368,   426,403,3)
    drawLine(481,268,   396,294,   370,368,   426,403,3)
    drawLine(352,270,   388,302,   398,338,   383,381,3)
    drawLine(503,188,   432,226,   398,338,   344,386,3)
    drawLine(350,251,   417,269,   430,311,   395,320,3)
    drawLine(624,167,   474,212,   430,311,   395,320,3)
    drawLine(428,198,   460,226,   467,265,   457,324,3)
    drawLine(526,128,   532,199,   467,265,   409,278,3)
    drawLine(576,100,   529,205,   528,287,   409,278,3)
    drawLine(576,100,   570,238,   528,287,   409,278,3)
    drawLine(626,100,   562,190,   574,323,   409,478,3)
    drawLine(737,700,   677,303,   574,323,   495,308,3)

}

//L

function drawLine(b1x,b1y,l1x,l1y,l2x,l2y,b2x,b2y,sw) {
    strokeWeight(sw)
    noFill()
    stroke('black');
    curve(
        b1x,b1y, 
        l1x,l1y, 
        l2x,l2y,
        b2x,b2y,
    );
    strokeWeight(0)
}


function fillca () {
    strokeWeight(0);
    fill('#6C739E');
    beginShape();
    vertex( 951 , 109 );
    vertex( 947 , 138 );
    vertex( 999 , 143 );
    vertex( 999 , 114 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fillcb () {
    strokeWeight(0);
    fill('#B7BFEA');
    beginShape();
    vertex( 933 , 129 );
    vertex( 971 , 131 );
    vertex( 970 , 98 );
    vertex( 924 , 88 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fillcc () {
    strokeWeight(0);
    fill('#EBD6CE');
    beginShape();
    vertex( 935 , 156 );
    vertex( 924 , 196 );
    vertex( 980 , 184 );
    vertex( 972 , 149 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fillcc2 () {
    strokeWeight(0);
    fill('#D3B2A7');
    beginShape();
    vertex( 955 , 202 );
    vertex( 956 , 166 );
    vertex( 1003 , 164 );
    vertex( 1003 , 202 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fillce () {
    strokeWeight(0);
    fill('#C0EBA0');
    beginShape();
    vertex( 934 , 211 );
    vertex( 975 , 215 );
    vertex( 970 , 244 );
    vertex( 936 , 229 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fillcd () {
    strokeWeight(0);
    fill('#869E73');
    beginShape();
    vertex( 955 , 221 );
    vertex( 948 , 271 );
    vertex( 998 , 258 );
    vertex( 998 , 230 );
    endShape(CLOSE);
    strokeWeight(0);
}

function fill2 () {
    strokeWeight(0);
    fill('#B7BFEA');
    beginShape();

    vertex( 224 , 158 );
    vertex( 212 , 167 );
    vertex( 194 , 177 );
    vertex( 164 , 183 );
    vertex( 142 , 178 );
    vertex( 130 , 171 );
    vertex( 127 , 151 );
    vertex( 132 , 137 );
    vertex( 138 , 127 );
    vertex( 129 , 131 );
    vertex( 119 , 140 );
    vertex( 110 , 151 );
    vertex( 108 , 167 );
    vertex( 114 , 185 );
    vertex( 122 , 203 );
    vertex( 137 , 215 );
    vertex( 155 , 223 );
    vertex( 144 , 229 );
    vertex( 136 , 241 );
    vertex( 129 , 253 );
    vertex( 121 , 272 );
    vertex( 141 , 264 );
    vertex( 161 , 269 );
    vertex( 169 , 272 );
    vertex( 157 , 279 );
    vertex( 149 , 287 );
    vertex( 142 , 299 );
    vertex( 138 , 312 );
    vertex( 134 , 322 );
    vertex( 157 , 313 );
    vertex( 178 , 312 );
    vertex( 199 , 313 );
    vertex( 184 , 322 );
    vertex( 171 , 329 );
    vertex( 170 , 334 );
    vertex( 207 , 341 );
    vertex( 234 , 359 );
    vertex( 246 , 368 );
    vertex( 251 , 375 );
    vertex( 241 , 383 );
    vertex( 226 , 384 );
    vertex( 214 , 381 );
    vertex( 202 , 371 );
    vertex( 198 , 364 );
    vertex( 202 , 376 );
    vertex( 215 , 390 );
    vertex( 228 , 399 );
    vertex( 240 , 400 );
    vertex( 252 , 401 );
    vertex( 244 , 410 );
    vertex( 237 , 416 );
    vertex( 243 , 417 );
    vertex( 263 , 416 );
    vertex( 277 , 418 );
    vertex( 287 , 421 );
    vertex( 307 , 416 );
    vertex( 324 , 414 );
    vertex( 353 , 411 );
    vertex( 373 , 409 );
    vertex( 381 , 408 );
    vertex( 368 , 394 );
    vertex( 361 , 374 );
    vertex( 356 , 354 );
    vertex( 354 , 352 );
    vertex( 340 , 345 );
    vertex( 319 , 333 );
    vertex( 312 , 322 );
    vertex( 296 , 290 );
    vertex( 294 , 258 );
    vertex( 308 , 236 );
    vertex( 317 , 234 );
    vertex( 328 , 242 );
    vertex( 342 , 268 );
    vertex( 346 , 298 );
    vertex( 355 , 331 );
    vertex( 362 , 350 );
    vertex( 370 , 363 );
    vertex( 374 , 331 );
    vertex( 381 , 312 );
    vertex( 386 , 304 );
    vertex( 391 , 304 );
    vertex( 396 , 321 );
    vertex( 396 , 334 );
    vertex( 403 , 315 );
    vertex( 403 , 314 );
    vertex( 411 , 291 );
    vertex( 420 , 268 );
    vertex( 426 , 241 );
    vertex( 435 , 228 );
    vertex( 421 , 250 );
    vertex( 417 , 267 );
    vertex( 418 , 268 );
    vertex( 425 , 279 );
    vertex( 430 , 288 );
    vertex( 430 , 308 );
    vertex( 439 , 283 );
    vertex( 444 , 261 );
    vertex( 453 , 243 );
    vertex( 460 , 234 );
    vertex( 466 , 244 );
    vertex( 466 , 262 );
    vertex( 477 , 254 );
    vertex( 488 , 247 );
    vertex( 503 , 238 );
    vertex( 520 , 221 );
    vertex( 532 , 199 );
    vertex( 530 , 213 );
    vertex( 529 , 236 );
    vertex( 531 , 249 );
    vertex( 532 , 259 );
    vertex( 533 , 274 );
    vertex( 528 , 282 );
    vertex( 544 , 279 );
    vertex( 553 , 268 );
    vertex( 561 , 256 );
    vertex( 569 , 242 );
    vertex( 575 , 256 );
    vertex( 577 , 270 );
    vertex( 582 , 292 );
    vertex( 578 , 311 );
    vertex( 572 , 323 );
    vertex( 587 , 318 );
    vertex( 603 , 304 );
    vertex( 617 , 294 );
    vertex( 636 , 287 );
    vertex( 658 , 284 );
    vertex( 666 , 289 );
    vertex( 677 , 303 );
    vertex( 667 , 318 );
    vertex( 659 , 356 );
    vertex( 644 , 392 );
    vertex( 639 , 414 );
    vertex( 653 , 435 );
    vertex( 660 , 464 );
    vertex( 658 , 473 );
    vertex( 667 , 447 );
    vertex( 675 , 424 );
    vertex( 677 , 407 );
    vertex( 672 , 390 );
    vertex( 677 , 405 );
    vertex( 684 , 413 );
    vertex( 694 , 423 );
    vertex( 702 , 433 );
    vertex( 705 , 413 );
    vertex( 701 , 394 );
    vertex( 718 , 400 );
    vertex( 741 , 413 );
    vertex( 752 , 426 );
    vertex( 762 , 443 );
    vertex( 762 , 417 );
    vertex( 755 , 401 );
    vertex( 744 , 383 );
    vertex( 738 , 370 );
    vertex( 757 , 360 );
    vertex( 784 , 351 );
    vertex( 799 , 350 );
    vertex( 785 , 333 );
    vertex( 763 , 322 );
    vertex( 772 , 311 );
    vertex( 786 , 292 );
    vertex( 806 , 289 );
    vertex( 824 , 289 );
    vertex( 829 , 293 );
    vertex( 821 , 277 );
    vertex( 809 , 269 );
    vertex( 799 , 264 );
    vertex( 814 , 257 );
    vertex( 847 , 246 );
    vertex( 863 , 247 );
    vertex( 844 , 221 );
    vertex( 831 , 207 );
    vertex( 810 , 198 );
    vertex( 801 , 196 );
    vertex( 819 , 165 );
    vertex( 851 , 164 );
    vertex( 876 , 178 );
    vertex( 863 , 144 );
    vertex( 832 , 135 );
    vertex( 800 , 130 );
    vertex( 814 , 110 );
    vertex( 854 , 97 );
    vertex( 825 , 85 );
    vertex( 774 , 70 );
    vertex( 732 , 67 );
    vertex( 756 , 30 );
    vertex( 691 , 28 );
     vertex( 701 , 1 );
    vertex( 344 , 1 );
    vertex( 354 , 13 );
    vertex( 278 , 6 );
    vertex( 320 , 49 );
    vertex( 270 , 30 );
    vertex( 268 , 30 );
    vertex( 230 , 36 );
    vertex( 257 , 54 );
    vertex( 278 , 86 );
    vertex( 212 , 73 );
    vertex( 187 , 80 );
    vertex( 232 , 105 );
    vertex( 250 , 127 );
    vertex( 178 , 128 );
    vertex( 155 , 94 );
    vertex( 157 , 142 );
    vertex( 203 , 155 );
    vertex( 224 , 158 );
    
    endShape(CLOSE);
    strokeWeight(0);

}function fill3 () {
    strokeWeight(0);
    fill('#EBD6CE');
    beginShape();
    vertex( 381 , 410 );
    vertex( 363 , 376 );
    vertex( 352 , 350 );
    vertex( 334 , 344 );
    vertex( 313 , 330 );
    vertex( 297 , 297 );
    vertex( 292 , 265 );
    vertex( 302 , 236 );
    vertex( 317 , 234 );
    vertex( 326 , 243 );
    vertex( 337 , 258 );
    vertex( 340 , 266 );
    vertex( 346 , 295 );
    vertex( 352 , 324 );
    vertex( 361 , 349 );
    vertex( 369 , 359 );
    vertex( 373 , 333 );
    vertex( 379 , 321 );
    vertex( 386 , 309 );
    vertex( 389 , 303 );
    vertex( 394 , 311 );
    vertex( 395 , 327 );
    vertex( 397 , 335 );
    vertex( 406 , 321 );
    vertex( 410 , 300 );
    vertex( 415 , 281 );
    vertex( 419 , 273 );
    vertex( 428 , 285 );
    vertex( 432 , 294 );
    vertex( 431 , 308 );
    vertex( 437 , 293 );
    vertex( 444 , 264 );
    vertex( 452 , 248 );
    vertex( 460 , 235 );
    vertex( 466 , 229 );
    vertex( 464 , 242 );
    vertex( 466 , 258 );
    vertex( 465 , 265 );
    vertex( 483 , 254 );
    vertex( 494 , 245 );
    vertex( 507 , 235 );
    vertex( 518 , 226 );
    vertex( 527 , 218 );
    vertex( 529 , 228 );
    vertex( 530 , 245 );
    vertex( 532 , 259 );
    vertex( 535 , 269 );
    vertex( 531 , 278 );
    vertex( 523 , 288 );
    vertex( 549 , 280 );
    vertex( 556 , 274 );
    vertex( 562 , 260 );
    vertex( 567 , 250 );
    vertex( 570 , 243 );
    vertex( 577 , 255 );
    vertex( 574 , 284 );
    vertex( 581 , 299 );
    vertex( 577 , 316 );
    vertex( 572 , 322 );
    vertex( 591 , 319 );
    vertex( 608 , 305 );
    vertex( 616 , 298 );
    vertex( 629 , 291 );
    vertex( 645 , 287 );
    vertex( 661 , 287 );
    vertex( 674 , 295 );
    vertex( 678 , 300 );
    vertex( 671 , 308 );
    vertex( 665 , 319 );
    vertex( 660 , 338 );
    vertex( 655 , 356 );
    vertex( 647 , 378 );
    vertex( 643 , 394 );
    vertex( 630 , 420 );
    vertex( 622 , 439 );
    vertex( 616 , 452 );
    vertex( 608 , 464 );
     vertex( 595 , 474 );
    vertex( 588 , 483 );
    vertex( 580 , 492 );
    vertex( 574 , 507 );
    vertex( 565 , 521 );
    vertex( 558 , 534 );
    vertex( 550 , 549 );
    vertex( 549 , 552 );
    vertex( 533 , 551 );
    vertex( 511 , 549 );
    vertex( 500 , 543 );
    vertex( 489 , 537 );
    vertex( 470 , 517 );
    vertex( 459 , 506 );
    vertex( 444 , 490 );
    vertex( 425 , 467 );
    vertex( 402 , 438 );
    vertex( 386 , 416 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill4 () {
    strokeWeight(0);
    fill('#869E73');
    beginShape();
    vertex( 474 , 247 );
    vertex( 486 , 249 );
    vertex( 496 , 250 );
    vertex( 509 , 253 );
    vertex( 509 , 259 );
    vertex( 503 , 267 );
    vertex( 500 , 269 );
    vertex( 495 , 269 );
    vertex( 492 , 271 );
    vertex( 481 , 262 );
    vertex( 476 , 257 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill5 () {
    strokeWeight(0);
    fill('#869E73');
    beginShape();
    vertex( 610 , 302 );
    vertex( 628 , 305 );
    vertex( 632 , 306 );
    vertex( 634 , 307 );
    vertex( 628 , 316 );
    vertex( 625 , 319 );
    vertex( 621 , 320 );
    vertex( 613 , 311 );
    vertex( 612 , 308 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill6 () {
    strokeWeight(0);
    fill('#6C739E');
    beginShape();
    vertex( 487 , 221 );
    vertex( 509 , 230 );
    vertex( 529 , 235 );
    vertex( 551 , 246 );
    vertex( 575 , 254 );
    vertex( 588 , 260 );
    vertex( 599 , 262 );
    vertex( 593 , 269 );
    vertex( 587 , 273 );
    vertex( 569 , 269 );
    vertex( 558 , 263 );
    vertex( 546 , 255 );
    vertex( 528 , 248 );
    vertex( 516 , 242 );
    vertex( 503 , 240 );
    vertex( 494 , 237 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill7 () {
    strokeWeight(0);
    fill('#6C739E');
    beginShape();
    vertex( 617 , 301 );
    vertex( 628 , 294 );
    vertex( 640 , 289 );
    vertex( 650 , 288 );
    vertex( 659 , 291 );
    vertex( 667 , 298 );
    vertex( 670 , 298 );
    vertex( 669 , 303 );
    vertex( 666 , 304 );
    vertex( 656 , 301 );
    vertex( 649 , 298 );
    vertex( 641 , 296 );
    vertex( 634 , 297 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill8 () {
    strokeWeight(0);
    fill('#869E73');
    beginShape();
    vertex( 219 , 439 );
    vertex( 244 , 429 );
    vertex( 256 , 422 );
    vertex( 289 , 417 );
    vertex( 319 , 417 );
    vertex( 361 , 410 );
    vertex( 381 , 410 );
    vertex( 419 , 408 );
    vertex( 439 , 408 );
    vertex( 461 , 407 );
    vertex( 475 , 408 );
    vertex( 507 , 412 );
    vertex( 521 , 414 );
    vertex( 537 , 413 );
    vertex( 546 , 415 );
    vertex( 555 , 416 );
    vertex( 543 , 420 );
    vertex( 525 , 431 );
    vertex( 512 , 435 );
    vertex( 501 , 442 );
    vertex( 489 , 451 );
    vertex( 477 , 463 );
    vertex( 462 , 478 );
    vertex( 454 , 485 );
    vertex( 449 , 495 );
    vertex( 449 , 496 );
    vertex( 461 , 509 );
    vertex( 472 , 519 );
    vertex( 488 , 532 );
    vertex( 500 , 542 );
    vertex( 518 , 551 );
    vertex( 535 , 554 );
    vertex( 547 , 555 );
    vertex( 551 , 546 );
    vertex( 556 , 538 );
    vertex( 560 , 533 );
    vertex( 575 , 545 );
    vertex( 592 , 558 );
    vertex( 609 , 571 );
    vertex( 631 , 587 );
    vertex( 647 , 599 );
    vertex( 664 , 614 );
    vertex( 681 , 625 );
    vertex( 691 , 630 );
    vertex( 702 , 638 );
    vertex( 720 , 644 );
    vertex( 735 , 650 );
    vertex( 747 , 654 );
    vertex( 735 , 653 );
    vertex( 722 , 653 );
    vertex( 703 , 656 );
    vertex( 689 , 656 );
    vertex( 668 , 660 );
    vertex( 648 , 659 );
    vertex( 629 , 659 );
    vertex( 611 , 659 );
    vertex( 585 , 660 );
    vertex( 574 , 660 );
    vertex( 564 , 660 );
    vertex( 556 , 661 );
    vertex( 554 , 662 );
    vertex( 565 , 672 );
    vertex( 574 , 677 );
    vertex( 579 , 680 );
    vertex( 564 , 679 );
    vertex( 552 , 684 );
    vertex( 536 , 689 );
    vertex( 524 , 694 );
    vertex( 516 , 698 );
    vertex( 55 , 801 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill9 () {
    strokeWeight(0);
    fill('#C0EBA0');
    beginShape();
    vertex( 219 , 440 );
    vertex( 235 , 436 );
    vertex( 257 , 427 );
    vertex( 285 , 420 );
    vertex( 311 , 416 );
    vertex( 338 , 414 );
    vertex( 373 , 410 );
    vertex( 396 , 408 );
    vertex( 416 , 406 );
    vertex( 437 , 407 );
    vertex( 469 , 407 );
    vertex( 501 , 409 );
    vertex( 519 , 410 );
    vertex( 540 , 413 );
    vertex( 553 , 416 );
    vertex( 552 , 418 );
    vertex( 541 , 421 );
    vertex( 529 , 429 );
    vertex( 518 , 436 );
    vertex( 499 , 450 );
    vertex( 486 , 457 );
    vertex( 472 , 467 );
    vertex( 460 , 482 );
    vertex( 450 , 493 );
    vertex( 438 , 506 );
    vertex( 428 , 516 );
    vertex( 416 , 535 );
    vertex( 414 , 537 );
    vertex( 411 , 540 );
    vertex( 432 , 547 );
    vertex( 456 , 556 );
    vertex( 465 , 560 );
    vertex( 469 , 563 );
    vertex( 473 , 569 );
    vertex( 465 , 569 );
    vertex( 464 , 573 );
    vertex( 458 , 579 );
    vertex( 450 , 588 );
    vertex( 441 , 597 );
    vertex( 438 , 607 );
    vertex( 448 , 578 );
    vertex( 455 , 566 );
    vertex( 438 , 561 );
    vertex( 430 , 558 );
    vertex( 416 , 551 );
    vertex( 405 , 549 );
    vertex( 400 , 547 );
    vertex( 409 , 528 );
    vertex( 425 , 511 );
    vertex( 449 , 479 );
    vertex( 469 , 459 );
    vertex( 494 , 440 );
    vertex( 505 , 428 );
    vertex( 511 , 421 );
    vertex( 481 , 420 );
    vertex( 441 , 416 );
    vertex( 399 , 413 );
    vertex( 370 , 414 );
    vertex( 309 , 425 );
    vertex( 286 , 427 );
    vertex( 260 , 432 );
    vertex( 248 , 435 );
    vertex( 232 , 441 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill10 () {
    strokeWeight(0);
    fill('#C0EBA0');
    beginShape();
    vertex( 560 , 533 );
    vertex( 570 , 539 );
    vertex( 584 , 550 );
    vertex( 592 , 559 );
    vertex( 607 , 571 );
    vertex( 619 , 582 );
    vertex( 634 , 593 );
    vertex( 648 , 602 );
    vertex( 672 , 617 );
    vertex( 688 , 626 );
    vertex( 705 , 637 );
    vertex( 715 , 642 );
    vertex( 739 , 650 );
    vertex( 747 , 649 );
    vertex( 733 , 651 );
    vertex( 713 , 655 );
    vertex( 700 , 658 );
    vertex( 681 , 657 );
    vertex( 654 , 660 );
    vertex( 632 , 657 );
    vertex( 609 , 657 );
    vertex( 587 , 660 );
    vertex( 572 , 661 );
    vertex( 562 , 662 );
    vertex( 554 , 662 );
    vertex( 565 , 674 );
    vertex( 575 , 679 );
    vertex( 576 , 680 );
    vertex( 549 , 685 );
    vertex( 527 , 693 );
    vertex( 518 , 697 );
    vertex( 508 , 699 );
    vertex( 499 , 701 );
    vertex( 516 , 686 );
    vertex( 532 , 679 );
    vertex( 548 , 674 );
    vertex( 541 , 662 );
    vertex( 535 , 652 );
    vertex( 532 , 648 );
    vertex( 520 , 637 );
    vertex( 512 , 626 );
    vertex( 507 , 619 );
    vertex( 499 , 606 );
    vertex( 487 , 595 );
    vertex( 504 , 592 );
    vertex( 516 , 611 );
    vertex( 530 , 633 );
    vertex( 539 , 644 );
    vertex( 548 , 653 );
    vertex( 568 , 648 );
    vertex( 586 , 646 );
    vertex( 619 , 644 );
    vertex( 630 , 644 );
    vertex( 646 , 643 );
    vertex( 666 , 643 );
    vertex( 678 , 641 );
    vertex( 663 , 633 );
    vertex( 627 , 611 );
    vertex( 614 , 598 );
    vertex( 605 , 587 );
    vertex( 597 , 578 );
    vertex( 583 , 566 );
    vertex( 570 , 558 );
    vertex( 564 , 547 );
    vertex( 554 , 541 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill11 () {
    strokeWeight(0);
    fill('#D3B2A7');
    beginShape();
    vertex( 575 , 417 );
    vertex( 578 , 425 );
    vertex( 583 , 432 );
    vertex( 591 , 433 );
    vertex( 597 , 430 );
    vertex( 605 , 424 );
    vertex( 608 , 418 );
    vertex( 615 , 406 );
    vertex( 606 , 413 );
    vertex( 597 , 415 );
    vertex( 587 , 418 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill12 () {
    strokeWeight(0);
    fill('#D3B2A7');
    beginShape();
    vertex( 516 , 474 );
    vertex( 525 , 481 );
    vertex( 525 , 486 );
    vertex( 534 , 491 );
    vertex( 541 , 495 );
    vertex( 551 , 502 );
    vertex( 552 , 505 );
    vertex( 562 , 491 );
    vertex( 571 , 478 );
    vertex( 577 , 473 );
    vertex( 585 , 466 );
    vertex( 591 , 460 );
    vertex( 595 , 457 );
    vertex( 599 , 451 );
    vertex( 594 , 448 );
    vertex( 587 , 450 );
    vertex( 578 , 454 );
    vertex( 565 , 461 );
    vertex( 558 , 462 );
    vertex( 553 , 464 );
    vertex( 557 , 466 );
    vertex( 558 , 475 );
    vertex( 552 , 484 );
    vertex( 545 , 485 );
    vertex( 535 , 482 );
    vertex( 528 , 477 );
    vertex( 522 , 475 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill13 () {
    strokeWeight(0);
    fill('#D3B2A7');
    beginShape();
    vertex( 611 , 315 );
    vertex( 615 , 320 );
    vertex( 618 , 322 );
    vertex( 625 , 330 );
    vertex( 633 , 333 );
    vertex( 637 , 334 );
    vertex( 641 , 337 );
    vertex( 636 , 344 );
    vertex( 635 , 350 );
    vertex( 634 , 352 );
    vertex( 633 , 352 );
    vertex( 623 , 350 );
    vertex( 620 , 348 );
    vertex( 613 , 343 );
    vertex( 611 , 337 );
    vertex( 611 , 327 );
    vertex( 610 , 321 );
    vertex( 611 , 317 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill17 () {
    strokeWeight(0);
    fill('#B7BFEA');
    beginShape();
    vertex( 686 , 554 );
    vertex( 707 , 546 );
    vertex( 717 , 532 );
    vertex( 736 , 522 );
    vertex( 745 , 522 );
    vertex( 757 , 525 );
    vertex( 786 , 532 );
    vertex( 803 , 529 );
    vertex( 826 , 526 );
    vertex( 849 , 528 );
    vertex( 870 , 523 );
    vertex( 888 , 515 );
    vertex( 901 , 501 );
    vertex( 910 , 488 );
    vertex( 939 , 481 );
    vertex( 967 , 477 );
    vertex( 992 , 473 );
    vertex( 1021 , 461 );
    vertex( 1044 , 439 );
    vertex( 1082 , 422 );
    vertex( 1106 , 416 );
    vertex( 1128 , 406 );
    vertex( 1159 , 385 );
    vertex( 1184 , 372 );
    vertex( 1219 , 364 );
    vertex( 1246 , 359 );
    vertex( 1270 , 358 );
    vertex( 1289 , 363 );
    vertex( 1310 , 377 );
    vertex( 1338 , 398 );
    vertex( 1360 , 411 );
    vertex( 1385 , 422 );
    vertex( 1414 , 433 );
    vertex( 1429 , 436 );
    vertex( 1437 , 475 );
    vertex( 1437 , 477 );
    vertex( 1433 , 480 );
    vertex( 1426 , 486 );
    vertex( 1406 , 503 );
    vertex( 1391 , 516 );
    vertex( 1386 , 536 );
    vertex( 1378 , 550 );
    vertex( 1351 , 562 );
    vertex( 1327 , 562 );
    vertex( 1283 , 546 );
    vertex( 1264 , 540 );
    vertex( 1237 , 540 );
    vertex( 1203 , 548 );
    vertex( 1156 , 547 );
    vertex( 1118 , 565 );
    vertex( 1106 , 590 );
    vertex( 1079 , 613 );
    vertex( 1044 , 616 );
    vertex( 1019 , 621 );
    vertex( 999 , 640 );
    vertex( 975 , 646 );
    vertex( 940 , 652 );
    vertex( 923 , 653 );
    vertex( 890 , 645 );
    vertex( 860 , 637 );
    vertex( 843 , 627 );
    vertex( 822 , 610 );
    vertex( 812 , 600 );
    vertex( 799 , 581 );
    vertex( 787 , 565 );
    vertex( 764 , 554 );
    vertex( 751 , 553 );
    vertex( 735 , 548 );
    vertex( 726 , 554 );
    vertex( 716 , 563 );
    vertex( 698 , 566 );
    vertex( 677 , 572 );
    vertex( 667 , 572 );
    vertex( 661 , 569 );
    vertex( 661 , 570 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill14 () {
    strokeWeight(0);
    fill('#D3B2A7');
    beginShape();
    vertex( 352 , 321 );
    vertex( 347 , 307 );
    vertex( 346 , 290 );
    vertex( 342 , 275 );
    vertex( 337 , 267 );
    vertex( 332 , 258 );
    vertex( 325 , 246 );
    vertex( 312 , 244 );
    vertex( 299 , 256 );
    vertex( 300 , 265 );
    vertex( 301 , 277 );
    vertex( 304 , 292 );
    vertex( 308 , 301 );
    vertex( 315 , 314 );
    vertex( 318 , 318 );
    vertex( 325 , 325 );
    vertex( 327 , 326 );
    vertex( 318 , 309 );
    vertex( 315 , 301 );
    vertex( 316 , 294 );
    vertex( 321 , 291 );
    vertex( 324 , 295 );
    vertex( 326 , 293 );
    vertex( 331 , 291 );
    vertex( 334 , 296 );
    vertex( 331 , 309 );
    vertex( 336 , 318 );
    vertex( 338 , 316 );
    vertex( 337 , 308 );
    vertex( 339 , 301 );
    vertex( 342 , 309 );
    vertex( 342 , 310 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill15 () {
    strokeWeight(0);
    fill('#6C739E');
    beginShape();
    vertex( 568 , 450 );
    vertex( 578 , 460 );
    vertex( 583 , 466 );
    vertex( 589 , 472 );
    vertex( 594 , 477 );
    vertex( 601 , 486 );
    vertex( 605 , 489 );
    vertex( 609 , 496 );
    vertex( 600 , 495 );
    vertex( 594 , 496 );
    vertex( 585 , 497 );
    vertex( 580 , 491 );
    vertex( 575 , 489 );
    vertex( 573 , 486 );
    vertex( 570 , 481 );
    vertex( 564 , 476 );
    vertex( 559 , 469 );
    vertex( 549 , 463 );
    vertex( 545 , 460 );
    vertex( 542 , 455 );
    vertex( 538 , 451 );
    vertex( 539 , 447 );
    vertex( 547 , 446 );
    vertex( 559 , 447 );
    vertex( 566 , 450 );
    endShape(CLOSE);
    strokeWeight(0);
}
function fill16 () {
    strokeWeight(0);
    fill('#6C739E');
    beginShape();
    vertex( 656 , 566 );
    vertex( 648 , 561 );
    vertex( 643 , 557 );
    vertex( 642 , 556 );
    vertex( 650 , 550 );
    vertex( 659 , 546 );
    vertex( 659 , 539 );
    vertex( 667 , 543 );
    vertex( 673 , 550 );
    vertex( 675 , 551 );
    vertex( 666 , 559 );
    vertex( 658 , 565 );
    endShape(CLOSE);
    strokeWeight(0);
}