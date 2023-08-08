
$(document).ready(function (){
    $.ajax({
        url: "http://localhost:8080/api/acounts",
        // data: data,
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
    });
})
function render(result) {
    let temp = "";
    for(let i  in result){
        let index = parseInt(i) + 1;
        temp += "<tr><td>"
                +index+"</td><td>"
                +result[i].email + "</td><td>"
                +result[i].fullName + "</td><td class = 'd-flex justify-content-around'><span  onclick='edit("
                + result[i].id +
                ")' class='btn btn-primary'>Edit</span><span onclick='del("
                + result[i].id +")' class='btn btn-danger'>Delete</span></td></tr>";
    }
    $("#elementTable").html(temp);
}

