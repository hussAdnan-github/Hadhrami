
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#16372e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-[#b37932] mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              حضرمي
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              منذ 1962، ونحن نحمل إرث حضرموت في كل قطرة من عسل السدر الملكي. 
              نقدم عسلاً نقياً، غنياً بفوائده، وأصيلاً بطعمه من قلب حضرموت إلى موائد الناس حول العالم.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#935624] rounded-full hover:bg-[#b37932] transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#935624] rounded-full hover:bg-[#b37932] transition-colors cursor-pointer">
                <i className="ri-instagram-line text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#935624] rounded-full hover:bg-[#b37932] transition-colors cursor-pointer">
                <i className="ri-twitter-line text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#935624] rounded-full hover:bg-[#b37932] transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#b37932]">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/our-story" className="text-gray-300 hover:text-white transition-colors cursor-pointer">قصتنا</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors cursor-pointer">المنتجات</Link></li>
              <li><Link to="/initiatives" className="text-gray-300 hover:text-white transition-colors cursor-pointer">المبادرات</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors cursor-pointer">المدونة</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#b37932]">المزيد</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">تواصل معنا</Link></li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-3 text-[#b37932]">تواصل معنا</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <i className="ri-mail-line text-[#b37932] ml-2"></i>
                  <span className="text-gray-300">info@hadramee.com</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line text-[#b37932] ml-2"></i>
                  <span className="text-gray-300">+967 xxx xxx xxx</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 حضرمي. جميع الحقوق محفوظة. | 
            <a href="https://readdy.ai/?origin=logo" className="text-[#b37932] hover:text-white transition-colors mr-2 cursor-pointer">
              Website Builder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
