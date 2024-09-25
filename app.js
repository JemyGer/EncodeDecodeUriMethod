let uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
let encoded = encodeURIComponent(uri);
let decoded = decodeURIComponent(encoded);

console.log("Encoded URI: " + encoded);
console.log("Decoded URI: " + decoded);

document.getElementById("demo").innerHTML =
  "Encoded URI:<br>" + encoded + "<br><br>" + "Decoded URI:<br>" + decoded;
