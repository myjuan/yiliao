window.onload=function(){
    var uls=document.getElementsByClassName('ul1')[0];
    var divs=document.getElementsByClassName('choose');
	var lis=uls.children;
	for(var i=0;i<lis.length;i++){
        lis[i].onclick=(function(num){
            return function(){
                Array.prototype.slice.call(lis,0).forEach(function(item){
                    item.className="";
                });
                lis[num].className="checked";
                Array.prototype.slice.call(divs,0).forEach(function(item){
                    item.className="choose";
                });
                divs[num].className="choose selected";
                
			}
        })(i);
    }
}