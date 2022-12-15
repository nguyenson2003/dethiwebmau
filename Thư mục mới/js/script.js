// 1. PHAN CODE CO THE SU DUNG TRONG DE THI
function validate_bo_trong(e) {
    if (e.value.length == 0) {
        return true;
    }
    return false;
}

function validate_rating(e) {
    let num = e.value;
    if (isNaN(parseInt(num))) return true;
    return false;
}

function checkEmail(e) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
    if (!filter.test(e.value)) {
        return true;
    }
    return false
}

//vi du kiem tra xau chu dau khong fai so, cac chu khong phai ky tu dac biet
// true: xau ko hop le, false: xau hop le
function custom(e) { 
    let str = e.value;
    let n = str.length;
    if(str[0]<'0' && '9'<str[0]) return true;
    for(let i = 0;i<n;i++){
        let z = true;
        if('0'<=str[i] && str[i]<='9') z = false;
        if('a'<=str[i] && str[i]<='z') z = false;
        if('A'<=str[i] && str[i]<='Z') z = false;
        if(z) return true;
    }

    return false;
}

// 2. PHAN CODE TRONG DE THI

// (bắt buộc fai gõ)
document.body.onload =
    () => {
        //const submit = document.getElementById("ten_id_cua_nut_submit");
        const submit = document.getElementById("submit");
        submit.setAttribute("type", "button")
        submit.onclick =
            () => {

                //tuy theo de bai

                //function validate bo trong duoc viet ở muc 1
                // validate_bo_trong(document.getElementById("ten_id_ktra_validate_bo_trong"))
                if (validate_bo_trong(document.getElementById("email"))) {
                    alert("chua dien email")
                    return;
                }
                if (validate_bo_trong(document.getElementById("com"))) {
                    alert("chua dien comment")
                    return;
                }
                if (validate_bo_trong(document.getElementById("rate"))) {
                    alert("chua dien rate")
                    return;
                }

                //validate_rating(document.getElementById("ten_id_ktra_dinh_dang_so"))
                if (validate_rating(document.getElementById("rate"))) {
                    alert("rate phai la mot so")
                    return;
                }

                //
                if (checkEmail(document.getElementById("email"))) {
                    alert("email khong dung dinh dang")
                    return;
                }
                //bat buoc
                location.reload()
            }
    }
