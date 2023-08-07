$(document).ready(function(){
    $.ajax({
        url:"http://localhost:8080/api/acounts/"+localStorage.getItem("editId"),
        dataType: "json",
        type: "GET",
        crossDomain: true,
        success: (result) => {
            console.log("success");
            render(result);
        },
        error: (e) => {
            console.log("error");
        }
})
})

function render(result){
    $("#email").val(result.email);
    $("#fullName").val(result.fullName);
    $("#address").val(result.address);
}

function changerEdit(){
    let dataRequest = JSON.stringify({
        email: $("#email").val(),
         fullName: $("#fullName").val(),
         address: $("#address").val()
     });
    $.ajax({
        type: "PUT",
        url : "http://localhost:8080/api/edit/"+localStorage.getItem("editId"),
        data: dataRequest,
        dataType: "json",
        crossDomain: true,
        contentType:'application/json',
        success : (result) =>{
            console.log("success");
        },
        error: (e) => {
            console.log("error")
        }
    })
    localStorage.clear("editId");
}

