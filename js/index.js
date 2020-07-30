import("../pkg/index.js").catch(console.error).then(module => {

    document.getElementById("text_box").focus();

    document.getElementById("form").onsubmit = function check() {
        var input = document.getElementById("text_box").value;
        document.body.innerHTML += "You submitted " + input + "<br>";
        document.body.innerHTML += "This formula is ";
        document.body.innerHTML += "<a id='result_text'>...</a>"
        if (module.check_valid(input)) {
            document.getElementById("result_text").innerHTML = "valid!";
        } else {
            document.getElementById("result_text").innerHTML = "invalid!";
        }

        document.getElementById("text_box").focus();
        document.body.innerHTML += "<br>Press ENTER or click Check before submitting a new equation.";
    }

});

