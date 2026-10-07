_eval = eval;
eval = (x)=>{console.log("Decoded: "+x)}
decode_value = prompt("Enter JSFuck to decode: ");
_eval(decode_value)
