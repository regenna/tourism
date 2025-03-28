using System.Security.Cryptography;
using System.Text;


namespace web_do_an.Commons
{
    public class EncryptMK
    {
        public static string GetHashMD5(string plainText)
        {
            using (MD5 md5 = MD5.Create())
            {
                // Compute hash from the bytes of text
                md5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(plainText));
                // Get hash result after compute it
                byte[] result = md5.Hash;
                StringBuilder strBuilder = new StringBuilder();
                for (int i = 0; i < result.Length; i++)
                {
                    strBuilder.Append(result[i].ToString("x2"));
                }

                return strBuilder.ToString();
            }
        }
    }
}
