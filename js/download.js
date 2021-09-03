//  
function copyText(text, callback) { // text:  ， callback:  
	var tag = document.createElement('input');
	tag.setAttribute('id', 'cp_hgz_input');
	tag.value = text;
	document.getElementsByTagName('body')[0].appendChild(tag);
	document.getElementById('cp_hgz_input').select();
	document.execCommand('copy');
	document.getElementById('cp_hgz_input').remove();
	if (callback) { callback(text) }
}
// get 
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return ("");
}


 async function DownSoft() {
	//get link and flag
	let mylink
	let downFlag = await getQueryVariable("c")
	if (downFlag && downFlag != '') {
		mylink = "https://mm05-02.oss-ap-south-1.aliyuncs.com/INapk/teenpattipalace.apk"
	}else{
		mylink = "https://mm05-02.oss-ap-south-1.aliyuncs.com/INapk/teenpattipalace.apk"
	}

	var u = navigator.userAgent;
	//Android
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
	//iOS
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

	//begin get channel code from clipboarad
	let gameId = getQueryVariable("from_gameid")
	let code = getQueryVariable("channelCode")
	// console.log('gameId',gameId)
	// console.log('code',code)
	let copyObj = {
		from_gameid:1679086,
		channelCode:200000
	}
	let copyStr = JSON.stringify(copyObj)
	copyText( copyStr, function (){console.log('copy successful',copyStr)})
	//end get channel code from clipboarad


	if (isAndroid) {
		window.location.href = mylink
	}
	else if (isiOS) {
		//window.location.href = "itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/wanlijituan/ipa/master/joyrummy.plist"
	}
	else {
		window.location.href = mylink
	}
}