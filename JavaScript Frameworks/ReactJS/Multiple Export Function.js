function foo() { console.log('foo') }
function bar() { console.log('bar') }
function baz() { foo(); bar() }

export default {foo, bar, baz}


// ou

const funcs = {
    foo() { console.log('foo') }, 
    bar() { console.log('bar') },
    baz() { foo(); bar() }
}

export default funcs

const funcs = {
    foo() { console.log('foo') }, 
    bar() { console.log('bar') },
    baz() { funcs.foo(); funcs.bar() } // here is the fix
}

export default funcs