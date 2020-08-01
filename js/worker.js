import("../pkg/index.js").catch(console.error).then(module => {
    onmessage = function(input) {
        console.log("called worker");
        console.log(input.data);
        is_valid = module.check_valid(input.data);
        if (is_valid) {
            postMessage("valid");
        } else {
            postMessage("invalid");
        }
    };
});