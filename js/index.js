import("../pkg/index.js").catch(console.error).then(module => {
    var text_box = document.getElementById("text_box");
    var output_div = document.getElementById("output");
    var check_button = document.getElementById("check_button");

    var worker = new Worker('worker.js');

    // put cursor in textbox on load
    text_box.focus();
    
    // onclick for check button
    check_button.onclick = function check() {
        var input = text_box.value;
        
        output_div.innerHTML = "<p id=\"response_paragraph\"></p>"
        var response = document.getElementById("response_paragraph");
        response.innerHTML = "You submitted " + input + ".<br>";

        response.innerHTML += "This formula is ";
        response.innerHTML += "<i id='result_text'>...</i></p>"

        worker.postMessage(input);

        text_box.focus();
        text_box.value = '';   
    }

    worker.onmessage = function (e) {
        document.getElementById("result_text").innerHTML = e.data;
    }

    // click submit on enter
    text_box.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            check_button.click();
        }
    });

    // onclick for help button
    document.getElementById("help_button").onclick = function help() {
        var output_div = document.getElementById("output")

        output_div.innerHTML = "<ul id=\"list\"></ul>";
        var list = document.getElementById("list");
        list.innerHTML += "<li>Names of variables are alphabetic characters except <code>v</code> and <code>e</code>, possibly followed by a number, e.g., <code>x</code> or <code>x31</code>.</ul>"
        list.innerHTML += "<li>Inverses of lower-case variables are their upper-case counterpart. E.g., the inverse of <code>x</code> is </code>X</code>.</li>"
        list.innerHTML += "<li>The identity is denoted <code>e</code>.</li>"
        list.innerHTML += "<li>Meets and joins are denoted by <code>^</code> and <code>v</code>, respectively. This means that the letter <code>v</code> can not appear in the name of a variable.</li>";
        list.innerHTML += "<li>Inverses are denoted by prefix minus sign (<code>-</code>). Using this notation, the inverse of <code>x v y</code> is <code>-(x v y)</code>.</li>"
        list.innerHTML += "<li>Whitespace and non-alphanumeric characters except <code>^</code>, <code>-</code>, <code>(</code>, and <code>)</code> are ignored. In particular, products do not have a symbol. The product of x v y and z ^ w can be written (x v z)(z ^ w).</li>"
        list.innerHTML += "<li>Equations are two l-group terms, separated by the symbol <code>=</code>. Similarly, separating terms with <code><=</code> encodes an inequation.</li>"
    }

});


