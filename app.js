// Method 1: Uri encoding

function encodeExample() {
  let uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
  let encoded = encodeURIComponent(uri);
  document.getElementById("demo").innerHTML = "Encode URI" + encoded;
  console.log("Encoded URI:" + encoded);
}

// Method 2: Uri decoding
function decodeExample() {
  let encoded =
    "https%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab";
  let decoded = decodeURIComponent(encoded);
  document.getElementById("demo").innerHTML = "Decoded URI:" + decoded;
  console.log("Decoded URI:" + decoded);
}

// Method 3: Custom Method
function customMethod() {
  document.getElementById("demo").innerHTML =
    "Dies ist eine Benutzerdefinierte Methode.";
  console.log("Custom Method executed!");
}
