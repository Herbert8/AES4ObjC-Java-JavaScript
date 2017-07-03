/**
 * Created by bahb on 2017/7/3.
 * 
 * 这是个包装库，引用的原始 AES 库在这里 https://code.google.com/archive/p/crypto-js/downloads
 * 
 * 使用过程请根据实际需要，调整 iv
 */


(function (win) {

    var aesWrapper = win.AESCipherWrapper;

    if (typeof (aesWrapper) === 'undefined') {
        aesWrapper = {};
        win.AESCipherWrapper = aesWrapper;
    }


    const iv = CryptoJS.enc.Utf8.parse("A-16-Byte-String");
                                        
    /**
     * AES 加密
     *
     * @param word
     * @param key
     * @returns {string}
     */
    aesWrapper.encrypt = function (word, key) {
        var keyData = CryptoJS.enc.Utf8.parse(key); //16位
        var encrypted = '';
        if (typeof (word) === 'string') {
            var srcs = CryptoJS.enc.Utf8.parse(word);
            encrypted = CryptoJS.AES.encrypt(srcs, keyData, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        } else if (typeof (word) === 'object') {//对象格式的转成json字符串
            data = JSON.stringify(word);
            var srcs = CryptoJS.enc.Utf8.parse(data);
            encrypted = CryptoJS.AES.encrypt(srcs, keyData, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            })
        }

        // 加密后的数据，如果需要以 16 进制字符串的形式显示，则使用 encrypted.ciphertext.toString();
        // return encrypted.ciphertext.toString();

        // 使用 encrypted.toString() 形式，则将加密后内容做 Base64 编码，然后以字符串形式返回
        return encrypted.toString();

    };


    /**
     * AES 解密
     *
     * @param word 需要解密内容的 Base64 编码
     * @param key  秘钥
     * @returns {string}
     */
    aesWrapper.decrypt = function (word, key) {
        var keyData = CryptoJS.enc.Utf8.parse(key); //16位
        var encryptedBase64Str = CryptoJS.enc.Base64.parse(word);
        var srcs = CryptoJS.enc.Base64.stringify(encryptedBase64Str);
        var decrypt = CryptoJS.AES.decrypt(srcs, keyData, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypt.toString(CryptoJS.enc.Utf8);
    }

})(window);
