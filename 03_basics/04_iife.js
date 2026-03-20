// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// used as an precaution so our function doesnt get polluted from global scopes


(function chai() {
    // NAMED IIFE
    console.log(`DB CONNECTED`);
}) ();

// (define fucntion inside it) (for execution and it will be empty)

((name) => {
    // UNAMED IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('chirag');
// treat it like function only
// arror function is also function