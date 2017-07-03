//
//  main.m
//  TestAES
//
//  Created by 巴宏斌 on 2017/7/3.
//  Copyright © 2017年 巴宏斌. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AESCipher.h"

int main(int argc, const char * argv[]) {
    @autoreleasepool {

        NSLog(@">>>>>>>>>>> 测试开始……");

        NSString *plainText = @"abc`~!@#$%^&*()_+-=':;<>?,./|{}[]\\\"xyz123中文";
        NSString *key = @"16BytesLengthKey";

        NSLog(@"原始字符串：%@", plainText);
        NSLog(@"秘钥：%@", key);

        NSString *cipherText = aesEncryptString(plainText, key);

        NSLog(@"加密后得到的 Base64 字符串：%@", cipherText);

        NSString *decryptedText = aesDecryptString(cipherText, key);

        NSLog(@"解密后得到的字符串：%@", decryptedText);

        NSLog(@"<<<<<<<<<<< 测试结束！");

    }
    return 0;
}
