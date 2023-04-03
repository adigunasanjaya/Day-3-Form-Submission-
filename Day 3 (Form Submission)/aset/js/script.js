function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let address = document.getElementById("address").value

    //conditional
    if(name == "") {
        return alert("Nama Harus Diisi")
    } else if(email == "") {
        return alert("Email Harus Diisi")
    } else if(phone == ""){
        return alert("Nomor Telepon Harus Diisi")
    }else if(subject == ""){
        return alert("Pesan Harus Diisi")
    }else if(address == ""){
        return alert("Alamat Harus Diisi")
    }

    const emailReceiver="adis6586@gmail.com"

    let a = document.createElement('a')
    a.href = 'mailto:${emailReceiver}?subject=${subject}&body=Halo Nama Saya ${name}, alamat saya ${address}, bisakah anda menghubungi saya di ${phone}'
    a.click()

    let data = {
        name,
        email,
        phone,
        subject,
        address,
    }

    console.log(data)

}

//<a href=""></a>