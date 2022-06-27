// Caesar Cipher is a type of encryption
// where you take letters in the alphabet and shift them a certain number of positions.

// This function returns encrypted text
const caesarCipherEncoded = (value, shift) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerCase = alphabet.replace(/\s/g, "").toLowerCase().split("");
  let upperCase = alphabet.replace(/\s/g, "").toUpperCase().split("");

  return Array.from(value)
    .map((v) => {
      if (
        lowerCase.indexOf(v.toLowerCase()) === -1 ||
        upperCase.indexOf(v.toUpperCase()) === -1
      ) {
        return v;
      }

      const lcEncryptIndex =
        (lowerCase.indexOf(v.toLowerCase()) + shift) % alphabet.length;
      const lcEncryptedChar = lowerCase[lcEncryptIndex];

      const ucEncryptIndex =
        (upperCase.indexOf(v.toUpperCase()) + shift) % alphabet.length;
      const ucEncryptedChar = upperCase[ucEncryptIndex];

      return lowerCase.indexOf(v) !== -1 ? lcEncryptedChar : ucEncryptedChar;
    })
    .join("");
};

// This function decodes the text
const caesarCipherDecoded = (value, shift) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerCase = alphabet.replace(/\s/g, "").toLowerCase().split("");
  let upperCase = alphabet.replace(/\s/g, "").toUpperCase().split("");

  return Array.from(value)
    .map((v) => {
      if (
        lowerCase.indexOf(v.toLowerCase()) === -1 ||
        upperCase.indexOf(v.toUpperCase()) === -1
      ) {
        return v;
      }

      let lcEncryptIndex =
        (lowerCase.indexOf(v.toLowerCase()) - shift) % alphabet.length;
      lcEncryptIndex =
        lcEncryptIndex < 0 ? lcEncryptIndex + alphabet.length : lcEncryptIndex;
      const lcEncryptedChar = lowerCase[lcEncryptIndex];

      let ucEncryptIndex =
        (upperCase.indexOf(v.toUpperCase()) - shift) % alphabet.length;
      ucEncryptIndex =
        ucEncryptIndex < 0 ? ucEncryptIndex + alphabet.length : ucEncryptIndex;
      const ucEncryptedChar = upperCase[ucEncryptIndex];

      return lowerCase.indexOf(v) !== -1 ? lcEncryptedChar : ucEncryptedChar;
    })
    .join("");
};
//Driver Code
console.log(
  caesarCipherEncoded("SHERLOCK HOLMES IS THE GREATEST DETECTIVE", 30)
);
console.log(
  caesarCipherDecoded("WLIVPSGO LSPQIW MW XLI KVIEXIWX HIXIGXMZI", 30)
);

// Vigenere Cipher is a method of encrypting alphabetic text.
// It uses a simple form of polyalphabetic substitution.

// This function generates a key from the key given
function generateKey(value, string) {
  let str = value.toUpperCase();
  let key = string.toUpperCase().replace(/\s/g, "");
  key = key.split("");
  if (str.length == key.length) return key.join("");
  else {
    let temp = key.length;
    for (let i = 0; i < str.length - temp; i++) {
      key.push(key[i % key.length]);
    }
  }
  return key.join("");
}

// This function returns the encrypted text which is generated with the help of the key
function cipherText(value, key) {
  let cipher_text = "";
  let str = value.toUpperCase().replace(/\s/g, "");

  for (let i = 0; i < str.length; i++) {
    // converting in range 0-25
    let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;

    // convert into alphabets(ASCII)
    x += "A".charCodeAt(0);
    cipher_text += String.fromCharCode(x);
  }
  return cipher_text;
}

// This function decrypts the encrypted text
// and returns the original text
function originalText(cipher_text, key) {
  let orig_text = "";

  for (let i = 0; i < cipher_text.length; i++) {
    // converting in range 0-25
    let x = (cipher_text[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;

    // convert into alphabets(ASCII)
    x += "A".charCodeAt(0);
    orig_text += String.fromCharCode(x);
  }
  return orig_text;
}

// Driver code
let str = "BATMAN";
let keyword = "WORD";

let key = generateKey(str, keyword);

let cipher_text = cipherText(str, key);

console.log(cipher_text);

console.log(originalText(cipher_text, key));



function get
