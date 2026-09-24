function divide(a, b) {
  debugger; // debugger statement

  if (b === 0) {
    
    return null;
  }
  return a / b;
}

divide(10, 0);


// to run the code use node inspect index.js >>cont>> repl
// cont or c ; continue exec to the next breakpoint or end of script
// next or n ; step to the next line of code
// out or o ; step out of the current function
// repl ; enter a Read Eval-Print Loop mode to execute expressions in the current context.
          // to access variables
// backtrace or bt ; show the call stack
// .exit ; exit the debugging shell
 
//use debugger for in-depth inspection and console log for quick checks 