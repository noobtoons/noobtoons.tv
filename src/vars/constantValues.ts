import CryptoJS from "crypto-js";
const emailStuff =
  "U2FsdGVkX1+jIbQEokCrHwjk7sqcdwVjqEIqSFofiIhmbKz3+97eMIdtQM1pIUdq";

const decryptWithAES = (ciphertext: string) => {
  const phrase = "Email Stuff";
  const bytes = CryptoJS.AES.decrypt(ciphertext, phrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export const emailJSKey = decryptWithAES(emailStuff);
