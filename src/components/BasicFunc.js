import React from 'react';

function BasicFunc(){
    return(
        <div>
            Hello! I was made by a function with a return.
        </div>
    )
}

const BasicFuncTwo = () => <div> Hello! I was made by a function without a return.</div>


export {BasicFunc, BasicFuncTwo};