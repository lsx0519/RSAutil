/**
 * Created by Administrator on 2018/3/28.
 */
const utils = require('../RSAUtils');
const publicKeyString = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCzQMqRnHBjbwTW4Yr7cKDTrAyVd+zA2YMujB9x\n" +
    "Rx9wNjvzyII9kH2CgAH4ZsTdZ+ym/uyh5SpM/dV0OayoT5aOEJOs7k4dKCWcRDzEC0rDNXkOjbMT\n" +
    "H76SzsfjwyV1mEQOdS+ISEmo9AjNpWbas42Ehs8On3EFY6QsvsyTY6ySJwIDAQAB";

const ret = utils.encode(publicKeyString, "你好啊！");
console.log("加密后的数据\n" + ret);

signResult = 'aFnWOpF58vNL86ZSj7R1EvK8J963UnYrpGLiOypSShGMiwG0luhLkg/3V2QUVDafyUm7D/6mAL3r/RpwTvwpQUNnwW+y80mpv/iS50M6JctTZ02MQcEbw2MgM1tvamg6owbGhHM6JtoegJzHlBmVc4pY74G7njCBXrWpDzA16AY=';
signData = '987653231231456ad中国人你好啊！@￥~~！！@##￥%…………&&^^^^／／&&**())))_+_+';
const isValid = utils.verify(publicKeyString, signData, signResult);
console.log('签名验证结果:'+isValid);