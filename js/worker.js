import("../pkg").catch(console.error).then(module => {
    onmessage = function(input) {
        is_valid = module.check_valid(input.data);
        if (is_valid) {
            postMessage("valid");
        } else {
            postMessage("invalid");
        }
    };
})