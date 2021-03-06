function myfunction(event){
    var url = document.getElementById('original-url').value;
    console.log(url);
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null){
        //alert for invalid url
    }else{
        var req = new Request("http://127.0.0.1:3000/shorten",{
            method:"POST",
            headers: new Headers({"Content-Type":"application/json"}),
            body: JSON.stringify({url:document.getElementById('original-url').value})
        })
        fetch(req).then(function(res){
            res.json().then((data)=>{
                console.log(data.url);
                document.getElementById('short-url').value = data.url;
            });
        });
    }
    console.log(document.getElementsByClassName('hidden'));
    document.getElementById("animate").classList.remove("hidden")
    document.getElementById("animate").classList.add("active")
}

function copyfunction(){
    var copyText = document.getElementById("copy-btn").value;
    copyText.select();
    document.execCommand("copy");
}