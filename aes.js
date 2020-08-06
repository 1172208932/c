var c = require("crypto-js");
/**
 * 解密算法
 * @param {*} a
 */
export function getAcc(a) {
  //解密
  let r = "";
  try {
    var k = c.enc.Utf8.parse(
      [
        109,
        42,
        111,
        38,
        107,
        94,
        117,
        37,
        97,
        36,
        105,
        35,
        116,
        64,
        118,
        33,
      ].reduce(
        (pre, next) =>
          (pre = typeof pre == "number" ? String.fromCharCode(pre) : pre) +
          String.fromCharCode(next)
      )
    );
    var d = c.AES.decrypt(a, k, {
      mode: c.mode.ECB,
      padding: c.pad.Pkcs7,
    });
    r = d.toString(c.enc.Utf8);
  } catch (error) {
    console.log(error);
  }
  return r;
}
/**
 * 加密算法
 */
export function getAccEncryption(a) {
  //加密
  let r = "";
  try {
    var k = c.enc.Utf8.parse(
      [
        109,
        42,
        111,
        38,
        107,
        94,
        117,
        37,
        97,
        36,
        105,
        35,
        116,
        64,
        118,
        33,
      ].reduce(
        (pre, next) =>
          (pre = typeof pre == "number" ? String.fromCharCode(pre) : pre) +
          String.fromCharCode(next)
      )
    );
    var d = c.AES.encrypt(a, k, {
      mode: c.mode.ECB,
      padding: c.pad.Pkcs7,
    });
    r = d.toString();
  } catch (error) {
    console.log(error);
  }
  return r;
}

/** 身份证脱敏 */
export function tuomin(identity) {
  if (typeof identity === "number") {
    identity = identity + "";
  }
  return identity.replace(/^(.{4})(?:\d+)(.{4})$/, "$1*********$2");
}
