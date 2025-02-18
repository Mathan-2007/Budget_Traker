        var x=0;
        var b=0;

        function update(){
            var j=document.getElementById("salary").value;
            var u=document.getElementById("expense").value ;
            if(j==''||j<=0){
                alert("Please Enter Your Salary");
            }
            else if (u<0||u==''){
                alert("Please Enter Your Expense");
            }
            else{
            x++;
            b=parseFloat(u)+b;
            document.getElementById("days").textContent=x;
            document.getElementById("expense").value='';
            var l=document.createElement("tr")
            l.innerHTML='<td class="tb">'+"Day "+x+'</td>'+'<td  class="tb">'+u+'</td>';
            var k=document.getElementById("table")
            k.append(l);
        }
        }
        function go(event){
            var e=document.getElementById("salary").value;
            var t=parseFloat(e)-b;
            var div=document.getElementById("div2")
            var y=document.createElement("h1")
            y.innerHTML='<center><p>'+"Profit or Loss + expense : "+t +" + "+ b +'</p></center>';
            console.log(t);
            div.append(y);
            event.target.disabled=true;}