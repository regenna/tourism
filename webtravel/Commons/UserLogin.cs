using System.Runtime.Serialization;

namespace webtravel.Commons
{
    [Serializable]
    public class UserLogin
    {
        
        public int MaTK { get; set; }
        public string TenTK { get; set; }
        public string TenKH { get; set; }


    }
}
