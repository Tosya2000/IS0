document.querySelector('#id13003, #id20000 , #id30000').oninput=function(){
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll('.accordion-header p, .sec3_mes_1_dop p');
	if ( val!= ''){
		elasticItems.forEach(function(elem){
			if(elem.innerText.search(val)==-1){
				elem.classList.add('hide');
				elem.innerHTML=elem.innerText;
			}
			else{
				elem.classList.remove('hide');
				let str=elem.innerText;
				elem.innerHTML=insertMark(str,elem.innerText.search(val),val.length);
			}
		});
	}
	else {
		elasticItems.forEach(function (elem){
			elem.classList.remove('hide');
			elem.innerHTML=elem.innerText;
		});
	}
}
function insertMark(string, pos, len){
	return string.slice(0,pos)+'<mark>' + string.slice(pos, pos+len) +'</mark>'+string.slice(pos+len);
}
