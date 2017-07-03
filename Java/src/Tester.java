//
//  https://github.com/WelkinXie/AESCipher-Java
//

import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

public class Tester {

	public static void main(String[] args) throws InvalidKeyException, NoSuchAlgorithmException, NoSuchPaddingException, UnsupportedEncodingException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
		System.out.println(">>>>>>>>>>> 测试开始……");

		final String plainText = "abc`~!@#$%^&*()_+-=':;<>?,./|{}[]\\\"xyz123中文";
		final String key = "16BytesLengthKey";

		System.out.println("原始字符串：" + plainText);
		System.out.println("秘钥：" + key);

		String string = AESCipher.aesEncryptString(plainText, key);
		System.out.println("加密后得到的 Base64 字符串：" + string);

		String decryptedText = AESCipher.aesDecryptString(string, key);
		System.out.println("解密后得到的字符串：" + decryptedText);

		System.out.println("<<<<<<<<<<< 测试结束！");
	}

}
