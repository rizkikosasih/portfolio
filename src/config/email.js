import CryptoJS from 'crypto-js';

const secretKey = 'HhPKXCw0Tsb17Hf4wBMuxQ';

const bytes = CryptoJS.AES.decrypt(
  'U2FsdGVkX1/JX1eDrSvIswWPAgZ5G9gwgH6fn8Z+P3vVg80k+92yPoE21PvWYAr515pEcYAZHVm2aCD3T4e2a+vxYwHK8qlQo5mGnG2bbmZwS27l5Q7WYL3Ui5U7sms4GDoQeOsaCvRzWYXkWSR39A',
  secretKey
);
const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
const emailConfig = JSON.parse(decryptedString);

export { emailConfig };
