// coding implementation
document.body.onload =
    function test() {
        const submit = document.getElementById("submit");
        console.log(submit);
        submit.setAttribute("type","button")
        submit.onclick = 
            function test2(){
                const email = document.getElementById("email").value;
                console.log(email)
                if(email.length == 0){
                    alert("chua nhap email")
                    return null;
                }else{
                    let temp = email.indexOf("@")
                    if(temp<1){
                        alert("email sai dinh dang")
                        return null;
                    }
                    let temp2 = email.indexOf(".");
                    if(temp2<0 || temp>=temp2-1 || temp2>=email.length-1){
                        alert("email sai dinh dang")
                        return null;
                    }
                }
                const cmt = document.getElementById("com").value;
                if(cmt.length==0){
                    alert("chua nhap comment")
                    return null;
                }
                
                const rate = document.getElementById("rate").value;
                if(rate.length== 0){
                    alert("chua nhap rate")
                    return null;
                }else if(parseInt(rate) !== Number(rate)){
                    alert("rate dinh dang so")
                    return null;
                }
                location.reload()
            }
    }

// end coding implementation