function create(){
    let dataRequest = JSON.stringify({
        email : $("#email").val(),
        password: $("#password").val(),
        fullName : $("#fullName").val(),
        address : $("#address").val()
    });
    $.ajax({
        url: "http://localhost:8080/api/create",
        type: "POST",
        dataType: "json",
        crossDomain: true,
        contentType:'application/json',
        data: dataRequest,
        success: (result) =>{
            console.log("success");
            window.location.href = "http://127.0.0.1:5500/page/home.html";
        },
        error: (e) => {
            console.log(e);
        }
    })
}