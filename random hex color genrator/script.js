function generateHex() {
    let charset = "0123456789ABCDEF",
        hex = "";
    for (var i = 0, n = charset.length; i < 6; ++i) {
        hex += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("hex").innerText = `#${hex}`;
    document.querySelector("body").style.background = `#${hex}`;

    

}

function copy(){
    var hexCode = document.getElementById("hex").innerText;


    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = hexCode;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand("copy");
    
    document.body.removeChild(tempTextarea);

    var copyButton = document.getElementById("copy");
    copyButton.innerText = "Copied!";
    setTimeout(() => {
        copyButton.innerText = "Copy";
    }, 3000);

}

