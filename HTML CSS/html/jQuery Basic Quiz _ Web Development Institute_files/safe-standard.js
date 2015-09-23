var psfyMRsid = "kTChsSv1kW0v";
// safe-standard@gecko.js

var psfyMRiso;
try {
	psfyMRiso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.psfyMRwid != null);
} catch(e) {
	psfyMRiso = false;
}
if (psfyMRiso) {
	window.psfyMRwid = opener.psfyMRwid + 1;
	psfyMRsid = psfyMRsid + "_" + window.psfyMRwid;
} else {
	window.psfyMRwid = 1;
}
function psfyMRn() {
	return (new Date()).getTime();
}
var psfyMRs = psfyMRn();
function psfyMRst(f, t) {
	if ((psfyMRn() - psfyMRs) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var psfyMRol = true;
function psfyMRow() {
	if (psfyMRol || (1 == 1)) {
		var pswo = "menubar=0,location=0,scrollbars=auto,resizable=1,status=0,width=650,height=680";
		var pswn = "pscw_" + psfyMRn();
		var url = "http://messenger.providesupport.com/messenger/0kjdj71x6pxd51c8zehwoeqptu.html?ps_l=" + escape(document.location) + "";
		window.open(url, pswn, pswo);
	} else if (1 == 2) {
		document.location = "http://";
	}
}
var psfyMRil;
var psfyMRit;
function psfyMRpi() {
	var il;
	if (3 == 2) {
		il = window.pageXOffset + 50;
	} else if (3 == 3) {
		il = (window.innerWidth * 50 / 100) + window.pageXOffset;
	} else {
		il = 50;
	}
	il -= (320 / 2);
	var it;
	if (3 == 2) {
		it = window.pageYOffset + 50;
	} else if (3 == 3) {
		it = (window.innerHeight * 50 / 100) + window.pageYOffset;
	} else {
		it = 50;
	}
	it -= (196 / 2);
	if ((il != psfyMRil) || (it != psfyMRit)) {
		psfyMRil = il;
		psfyMRit = it;
		var d = document.getElementById('cifyMR');
		if (d != null) {
			d.style.left  = Math.round(psfyMRil) + "px";
			d.style.top  = Math.round(psfyMRit) + "px";
		}
	}
	setTimeout("psfyMRpi()", 100);
}
var psfyMRlc = 0;
function psfyMRsi(t) {
	window.onscroll = psfyMRpi;
	window.onresize = psfyMRpi;
	psfyMRpi();
	psfyMRlc = 0;
	var url = "http://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/0kjdj71x6pxd51c8zehwoeqptu.html?ps_t=" + psfyMRn() + "";
	var d = document.getElementById('cifyMR');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:320;height:196" src="' + url + 
			'" onload="psfyMRld()" frameborder="no" width="320" height="196" scrolling="no"></iframe>';
	}
}
function psfyMRld() {
	if (psfyMRlc == 1) {
		var d = document.getElementById('cifyMR');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	psfyMRlc++;
}
if (false) {
	psfyMRsi(1);
}
var psfyMRd = document.getElementById('scfyMR');
if (psfyMRd != null) {
	if (psfyMRol || (1 == 1) || (1 == 2)) {
		var ctt = "";
		if (ctt != "") {
			tt = ' alt="' + ctt + '" title="' + ctt + '"';
		} else {
			tt = '';
		}
		if (false) {
			var p1 = '<table style="display:inline;border:0px;border-collapse:collapse;border-spacing:0;"><tr><td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="#" onclick="psfyMRow(); return false;"><img name="psfyMRimage" src="http://image.providesupport.com/image/0kjdj71x6pxd51c8zehwoeqptu/online-1914340724.gif" width="140" height="60" style="border:0;display:block;margin:auto"';
			var p2 = '<td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="http://www.providesupport.com/pb/0kjdj71x6pxd51c8zehwoeqptu" target="_blank"><img src="http://image.providesupport.com/';
			var p3 = 'style="border:0;display:block;margin:auto"></a></td></tr></table>';
			if ((140 >= 140) || (140 >= 60)) {
				psfyMRd.innerHTML = p1+tt+'></a></td></tr><tr>'+p2+'lcbpsh.gif" width="140" height="17"'+p3;
			} else {
				psfyMRd.innerHTML = p1+tt+'></a></td>'+p2+'lcbpsv.gif" width="17" height="140"'+p3;
			}
		} else {
			psfyMRd.innerHTML = '<a href="#" onclick="psfyMRow(); return false;"><img name="psfyMRimage" src="http://image.providesupport.com/image/0kjdj71x6pxd51c8zehwoeqptu/online-1914340724.gif" width="140" height="60" border="0"'+tt+'></a>';
		}
	} else {
		psfyMRd.innerHTML = '';
	}
}
var psfyMRop = false;
function psfyMRco() {
	var w1 = psfyMRci.width - 1;
	psfyMRol = (w1 & 1) != 0;
	psfyMRsb(psfyMRol ? "http://image.providesupport.com/image/0kjdj71x6pxd51c8zehwoeqptu/online-1914340724.gif" : "http://image.providesupport.com/image/0kjdj71x6pxd51c8zehwoeqptu/offline-1714592202.gif");
	psfyMRscf((w1 & 2) != 0);
	var h = psfyMRci.height;

	if (h == 1) {
		psfyMRop = false;

	// manual invitation
	} else if ((h == 2) && (!psfyMRop)) {
		psfyMRop = true;
		psfyMRsi(1);
		//alert("Chat invitation in standard code");
		
	// auto-invitation
	} else if ((h == 3) && (!psfyMRop)) {
		psfyMRop = true;
		psfyMRsi(2);
		//alert("Auto invitation in standard code");
	}
}
var psfyMRci = new Image();
psfyMRci.onload = psfyMRco;
var psfyMRpm = true;
var psfyMRcp = psfyMRpm ? 30 : 60;
var psfyMRct = null;
function psfyMRscf(p) {
	if (psfyMRpm != p) {
		psfyMRpm = p;
		psfyMRcp = psfyMRpm ? 30 : 60;
		if (psfyMRct != null) {
			clearTimeout(psfyMRct);
			psfyMRct = null;
		}
		psfyMRct = psfyMRst("psfyMRrc()", psfyMRcp);
	}
}
function psfyMRrc() {
	psfyMRct = psfyMRst("psfyMRrc()", psfyMRcp);
	try {
		psfyMRci.src = "http://image.providesupport.com/cmd/0kjdj71x6pxd51c8zehwoeqptu?" + "ps_t=" + psfyMRn() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + psfyMRsid + "" + "";
	} catch(e) {
	}
}
psfyMRrc();
var psfyMRcb = "http://image.providesupport.com/image/0kjdj71x6pxd51c8zehwoeqptu/online-1914340724.gif";
function psfyMRsb(b) {
	if (psfyMRcb != b) {
		var i = document.images['psfyMRimage'];
		if (i != null) {
			i.src = b;
		}
		psfyMRcb = b;
	}
}

