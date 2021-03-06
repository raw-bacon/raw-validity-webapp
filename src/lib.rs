use wasm_bindgen::prelude::*;
// use web_sys::console;
use l_group_validity::is_valid_from_string;

// When the `wee_alloc` feature is enabled, this uses `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


// This is like the `main` function, except for JavaScript.
#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    //// Your code goes here!
    //console::log_1(&JsValue::from_str("Hello world!"));

    Ok(())
}

#[wasm_bindgen]
pub fn check_valid(string: &str) -> bool {
    return is_valid_from_string(string);
}