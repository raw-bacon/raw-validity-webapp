import("../pkg/index.js").catch(console.error).then(module => {
    document.body.innerHTML += '\
\ \ <input style = "width:500px" type = "text" id = "text_box" placeholder = "Enter an l-group (in)equation ..." >\n\
\ \ <button id="btn">Check</button>'

    document.getElementById("btn").onclick = function check() {
        var input = document.getElementById("text_box").value;
        alert(module.check_valid(input));
    }
});

