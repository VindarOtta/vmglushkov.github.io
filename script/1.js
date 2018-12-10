/* (All) Pre-loader */
$(document).ready(function() {
	typeWriter();
  setTimeout(typeLoadWriter, 1210);
});
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(100).fadeOut(190);
});
/* Animations onLoad */
window.onload = function loadAnim(){ 
	document.getElementById("gr_line").classList.add('load-anim4');
	document.getElementById("mockup1").classList.add('load-anim5');
	document.getElementById("mockup2").classList.add('load-anim6');
	document.getElementById("mockup3").classList.add('load-anim7');
	setTimeout(animStop, 490);
}
/* Easter egg link */
function eggOpen(){
	if(window.matchMedia('(min-width: 800px)').matches) {
 	 	window.open('terminal.html');
	}
}
/* Copy on click */
function copy(id) {   
  window.getSelection().removeAllRanges();
  var Link = document.getElementById(id);  
  var range = document.createRange();  
  range.selectNode(Link);  
  window.getSelection().addRange(range);  
  try {  
    var successful = document.execCommand('copy');   
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }
  window.getSelection().removeAllRanges();  
}
/* 'Copied' sign */
function copied(id){
  document.getElementById(id).classList.add('copy-anim');
  setTimeout(animStop, 1700);
} 
/* Remove animations */
function animStop() {
	document.getElementById("gr_line").classList.remove('load-anim4');
}
/* typing */
var c=0;var t=0;var l=0;var k=0;var f=0;var t1=0;var l1=0;var k1=0;var f1=0;
var vindar = 'Vindar';
var etta = 'etta';
var ovs = 'ovs';
var iezel = 'iezel';
var ar = 'ar';
var vindetta = 'Vindetta';
var vindovs = 'Vindovs';
var vindiezel = 'Vindiezel';
var speed = 200;
var VindarFactor = 0;
var loadVindarFactor = 0;

function typeWriter() {
  if (c < vindar.length) {
    document.getElementById("demo").innerHTML += vindar.charAt(c);
    c++;
    setTimeout(typeWriter, speed);
  }
}
function typeLoadWriter() {
    document.getElementById("demo").classList.add('cross');
    document.getElementById("demo").classList.add('after_cross');
    setTimeout(typeCleaner1, 1420);
    if (loadVindarFactor == 0) { 
      setTimeout(typeLoadWriter1, 1490); 
    } else if (loadVindarFactor == 1) { 
      setTimeout(typeLoadWriter2, 1490);
    } else if (loadVindarFactor == 2) {
      setTimeout(typeLoadWriter3, 1490);
    } else if (loadVindarFactor == 3) {
      setTimeout(typeLoadWriter4, 1490);
    }
}
function typeLoadWriter1() {
  if (t1 < vindetta.length) {
    document.getElementById("demo").innerHTML += vindetta.charAt(t1);
    t1++;
    setTimeout(typeLoadWriter1, speed);
  } else {
    typeLoadWriter();
    t1 = 0;
  }
  loadVindarFactor = 1;
}
function typeLoadWriter2() {
  if (l1 < vindovs.length) {
    document.getElementById("demo").innerHTML += vindovs.charAt(l1);
    l1++;
    setTimeout(typeLoadWriter2, speed);
  } else {
    typeLoadWriter();
    l1 = 0;
  }
  loadVindarFactor = 2;
}
function typeLoadWriter3() {
  if (k1 < vindiezel.length) {
    document.getElementById("demo").innerHTML += vindiezel.charAt(k1);
    k1++;
    setTimeout(typeLoadWriter3, speed);
  } else {
    typeLoadWriter();
    k1 = 0;
  }
  loadVindarFactor = 3;
}
function typeLoadWriter4() {
  if (f1 < vindar.length) {
    document.getElementById("demo").innerHTML += vindar.charAt(f1);
    f1++;
    setTimeout(typeLoadWriter4, speed);
  } else {
    typeLoadWriter();
    f1 = 0;
  }
  loadVindarFactor = 0;
}
function typeReWriter() {
  if (VindarFactor != 4) {
  	document.getElementById("ar").classList.add('cross');
  	document.getElementById("ar").classList.add('after_cross');
  	setTimeout(typeCleaner, 1420);
  	if (VindarFactor == 0) { 
  		setTimeout(typeAfterWriter1, 1490);
  		document.getElementById("imgBtn").style.pointerEvents = 'none';
  		setTimeout(nonClick, 2190);	
  	} else if (VindarFactor == 1) { 
  		setTimeout(typeAfterWriter2, 1490);
  		document.getElementById("imgBtn").style.pointerEvents = 'none';
  		setTimeout(nonClick, 1950);
  	} else if (VindarFactor == 2) {
  		setTimeout(typeAfterWriter3, 1490);
  		document.getElementById("imgBtn").style.pointerEvents = 'none';
  		setTimeout(nonClick, 2350);
  	} else if (VindarFactor == 3) {
  		setTimeout(typeAfterWriter4, 1490);
  		document.getElementById("imgBtn").style.pointerEvents = 'none';
  		setTimeout(nonClick, 1800);
  	}
  } else {
  	window.scroll(0, 250);
  	setTimeout(afterScroll, 1);
  }
}
var j;
function afterScroll() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0, -10);
    j = setTimeout('afterScroll()', 1);
  } else clearTimeout(j);
  return false;
}
function nonClick() {
	document.getElementById("imgBtn").style.pointerEvents = 'auto';
}	
function typeCleaner() {
  document.getElementById("ar").innerHTML = "";
  document.getElementById("ar").classList.remove('cross');
  document.getElementById("ar").classList.remove('after_cross');
}
function typeCleaner1() {
  document.getElementById("demo").innerHTML = "";
  document.getElementById("demo").classList.remove('cross');
  document.getElementById("demo").classList.remove('after_cross');
}
function typeAfterWriter1() {
  if (t < etta.length) {
    document.getElementById("ar").innerHTML += etta.charAt(t);
    t++;
    setTimeout(typeAfterWriter1, speed);
  }
  VindarFactor = 1;
}
function typeAfterWriter2() {
  if (l < ovs.length) {
    document.getElementById("ar").innerHTML += ovs.charAt(l);
    l++;
    setTimeout(typeAfterWriter2, speed);
  }
  VindarFactor = 2;
}
function typeAfterWriter3() {
  if (k < iezel.length) {
    document.getElementById("ar").innerHTML += iezel.charAt(k);
    k++;
    setTimeout(typeAfterWriter3, speed);
  }
  VindarFactor = 3;
}
function typeAfterWriter4() {
  if (f < ar.length) {
    document.getElementById("ar").innerHTML += ar.charAt(f);
    f++;
    setTimeout(typeAfterWriter4, speed);
  }
  VindarFactor = 4;
}
