import("../pkg/index.js").catch(console.error).then(module => {
    var text_box = document.getElementById("text_box");
    var output_div = document.getElementById("output");
    var check_button = document.getElementById("check_button");

    // put cursor in textbox on load
    document.getElementById("text_box").focus();
    
    // onclick for check button
    check_button.onclick = function check() {
        var input = text_box.value;
        output_div.innerHTML = "<p>You submitted " + input + ".<br>";
        output_div.innerHTML += "This formula is ";
        output_div.innerHTML += "<a id='result_text'>...</a></p>"
        if (module.check_valid(input)) {
            document.getElementById("result_text").innerHTML = "valid!<br>";
        } else {
            document.getElementById("result_text").innerHTML = "invalid!<br>";
        }

        document.getElementById("text_box").focus();
    }

    // click submit on enter
    text_box.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            //event.preventDefault();
            check_button.click();
        }
    });

    // onclick for help button
    document.getElementById("help_button").onclick = function help() {
        var output_div = document.getElementById("output")

        output_div.innerHTML = "<ul>";
        output_div.innerHTML += "<li>Names of variables are characters, possibly followed by a number, e.g., <code>x</code> or <code>x31</code>.</ul>"
        output_div.innerHTML += "<li>Meets and joins are denoted by <code>^</code> and <code>v</code>, respectively. This means that the letter <code>v</code> can not appear in the name of a variable.</li>";
        output_div.innerHTML += "<li>Inverses are denoted by prefix <code>-</code>. E.g., the inverse of <code>x v y</code> is <code>-(x v y)</code>.</li>"
        output_div.innerHTML += "<li>Whitespace and non-alphanumeric characters except <code>^</code>, <code>-</code>, <code>(</code>, and <code>)</code> are ignored. In particular, products do not have a symbol. The product of x v y and z ^ w is (x v z)(z ^ w).</li>"
        output_div.innerHTML += "<li>Equations are two l-group terms, separated by the symbol <code>=</code>. Similarly, separating terms with <code><=</code> encodes an inequation.</li>"
        output_div.innerHTML += "</ul>";
    }

});


