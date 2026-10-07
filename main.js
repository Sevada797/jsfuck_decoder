_eval = eval;
eval = (x)=>{console.log(x)}
decode_value = prompt("Enter JSFuck to decode: ");
eval(_eval(decode_value))
