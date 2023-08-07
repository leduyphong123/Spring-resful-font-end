function edit(id){
    window.localStorage.setItem("editId",id);
    window.location.href = "http://127.0.0.1:5500/page/edit.html";
  
}

function del(id){
    if(confirm("You acount delete?") == true){
        $.ajax({
            url:"http://localhost:8080/api/delete/"+id,
            dataType: "json",
            type: "DELETE",
            crossDomain: true,
            success: (result) => {
                console.log("success");
                alert("delete success");
            },
            error: (e) =>{
                console.log("error");
            }
        })
    }

}