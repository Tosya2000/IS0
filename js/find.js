document.querySelector('#id13003, #id20000 , #id30000, #id40000, #id50000').oninput=function(){
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll('.accordion-header p, .sec3_mes_1_dop p, .table-responsive td');
	let elastItems=document.querySelectorAll('.accordion-collapse, .accordion-button');
	let elastItems1=document.querySelectorAll('.accordion-button');
	if ( val!= ''){
		//document.querySelector('#collapseOne').classList.add('show');
		//document.querySelector('#collapseOne_1').classList.add('show');
		//document.querySelector('#collapseOne_2').classList.add('show');
		//document.querySelector('#collapseTwo').classList.add('show');
		//document.querySelector('.accordion-button').classList.remove('collapsed');
		elastItems.forEach(function(eln){
				eln.classList.add('show');
		});
		elastItems1.forEach(function(eln){
				eln.classList.remove('collapsed');
		});
		
		elasticItems.forEach(function(elem){
			if(elem.innerText.search(new RegExp(val, "i"))==-1){
				//elem.classList.add('hide');
				elem.innerHTML=elem.innerText;
			}
			else{
				//elem.classList.remove('hide');
				let str=elem.innerText;
				elem.innerHTML=insertMark(str,elem.innerText.search(new RegExp(val, "i")),val.length);
			}
		});
	}
	else {
			//document.querySelector('.accordion-button').classList.add('collapsed');
			//document.querySelector('.accordion-collapse').classList.remove('show');
			//document.querySelector('#collapseOne_1').classList.remove('show');
			//document.querySelector('#collapseOne_2').classList.remove('show');
			//document.querySelector('#collapseTwo').classList.remove('show');
		elasticItems.forEach(function (elem){
			//elem.classList.remove('hide');
			elem.innerHTML=elem.innerText;
		});
	}
}
function insertMark(string, pos, len){
	return string.slice(0,pos)+'<mark>' + string.slice(pos, pos+len) +'</mark>'+string.slice(pos+len);
}
