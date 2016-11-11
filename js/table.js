var max=300;

window.onload=function(){document.getElementById('max').innerHTML=max;}

function toggle_insert() {
    var form=document.getElementById("insert-form");
    if(form.style.display =='none')
        form.style.display='block';
    else
        form.style.display='none';
}
function insert_item(){
    //get Input element
    var newName=document.getElementById('name');
    var newQuant=document.getElementById('quantity');
    if(newName.value!="" && newQuant.value!=""){
        if(newQuant.value>0)
        {
            var tabella=document.getElementById('tabella');
            var i;
            var total_capacity=0;
            var updated=false;
            for(i=1; i<tabella.rows.length;i++){
                if(tabella.rows[i].cells[0].innerHTML==newName.value){
                    var old=parseInt(tabella.rows[i].cells[1].innerHTML);
                    tabella.rows[i].cells[1].innerHTML=(old+parseInt(newQuant.value));
                    updated=true;
                }
                total_capacity+=parseInt(tabella.rows[i].cells[1].innerHTML);
            }
            if(!updated){
                var row=tabella.insertRow();
                var name=row.insertCell(0);
                var quantity=row.insertCell(1);
                name.innerHTML=newName.value;
                quantity.innerHTML=newQuant.value;
            }
            if(total_capacity>max)
                alert("Attention !!! Total Capacity OverFlowed");
            newName.value="";
            newQuant.value="";
        }
        else{
            alert("Error: You must insert a number in Quantity field");
        }
    }
}
function set_max(){
    var newMax=document.getElementById('new_max');
    if(newMax.value!="" && newMax.value>0){
        //set to span max & display
        max=parseInt(newMax.value);
        document.getElementById('max').innerHTML=max;
    }
    else
        alert("Error: You must insert a number>0 in New Capacity field ");
}
