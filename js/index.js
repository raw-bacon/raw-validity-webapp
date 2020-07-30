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

    document.getElementById("help_button").onsubmit = function help() {
        document.body.innerHTML += "<ul>";
        document.body.innerHTML += "<li>Names of variables are characters, possibly followed by a number, e.g., <code>x</code> or <code>x31</code>.</ul>"
        document.body.innerHTML += "<li>Meets and joins are denoted by <code>^</code> and <code>v</code>, respectively. This means that the letter <code>v</code> can not appear in the name of a variable.</li>";
        document.body.innerHTML += "<li>Inverses are denoted by prefix <code>-</code>. E.g., the inverse of <code>x v y</code> is <code>-(x v y)</code>.</li>"
        document.body.innerHTML += "<li>Whitespace and non-alphanumeric characters except <code>^</code>, <code>-</code>, <code>(</code>, and <code>)</code> are ignored. In particular, products do not have a symbol. The product of x v y and z ^ w is (x v z)(z ^ w).</li>"
        document.body.innerHTML += "<li>Equations are two l-group terms, separated by the symbol <code>=</code>. Similarly, separating terms with <code><=</code> encodes an inequation.</li>"
        document.body.innerHTML += "</ul>";
    }

});


