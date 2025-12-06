import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f8f6f3]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Yemeni%20beekeeper%20in%20Hadramaut%20valley%20collecting%20honey%20from%20natural%20beehives%2C%20authentic%20beekeeping%20process%2C%20golden%20honey%20flowing%2C%20traditional%20methods%2C%20mountain%20landscape%20background%2C%20heritage%20craftsmanship%2C%20natural%20organic%20production%2C%20warm%20lighting%2C%20professional%20photography&width=800&height=900&seq=about-main-1&orientation=portrait"
                alt="عسل حضرمي أصيل"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-8 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#b37932] to-[#935624] rounded-2xl">
                  <i className="ri-award-fill text-white text-3xl"></i>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#16372e]">60+</div>
                  <div className="text-sm text-gray-600">عاماً من التميز</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                نفخر بتقديم أجود أنواع العسل الحضرمي الأصيل
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#b37932]/10 rounded-full px-4 py-2 mb-6">
              <i className="ri-leaf-line text-[#b37932]"></i>
              <span className="text-sm font-medium text-[#935624]">من نحن</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-[#16372e] mb-6 leading-tight">
              إرث حضرمي
              <br />
              <span className="text-[#b37932]">أصيل ومميز</span>
            </h2>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              منذ عام 1962، ونحن نحمل إرث حضرموت في كل قطرة من عسل السدر الملكي. 
              رحلة بدأت من قلب الوديان الحضرمية لتصل إلى كل بيت يبحث عن الجودة والأصالة.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نقدم منتجات طبيعية 100% من أجود أنواع العسل، مستخلصة من أشجار السدر 
              البرية في وديان حضرموت الخصبة. كل منتج يحمل قصة وتاريخاً عريقاً.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#b37932]/10 rounded-xl flex-shrink-0">
                  <i className="ri-checkbox-circle-fill text-[#b37932] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-[#16372e] mb-1">عسل طبيعي 100%</h3>
                  <p className="text-sm text-gray-600">بدون أي إضافات أو مواد حافظة</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#b37932]/10 rounded-xl flex-shrink-0">
                  <i className="ri-shield-check-fill text-[#b37932] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-[#16372e] mb-1">مفحوص معملياً</h3>
                  <p className="text-sm text-gray-600">شهادات جودة معتمدة</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#b37932]/10 rounded-xl flex-shrink-0">
                  <i className="ri-truck-fill text-[#b37932] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-[#16372e] mb-1">توصيل سريع</h3>
                  <p className="text-sm text-gray-600">نصل إلى باب منزلك</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#b37932]/10 rounded-xl flex-shrink-0">
                  <i className="ri-customer-service-2-fill text-[#b37932] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-[#16372e] mb-1">دعم متواصل</h3>
                  <p className="text-sm text-gray-600">نحن هنا لخدمتك دائماً</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/our-story">
                <Button variant="primary" size="lg" className="bg-[#16372e] hover:bg-[#0f2620] text-white whitespace-nowrap">
                  <i className="ri-book-open-line ml-2"></i>
                  اقرأ قصتنا الكاملة
                </Button>
              </Link>
              <Link to="/honey-guide">
                <Button variant="outline" size="lg" className="border-2 border-[#16372e] text-[#16372e] hover:bg-[#16372e] hover:text-white whitespace-nowrap">
                  <i className="ri-guide-line ml-2"></i>
                  دليل العسل
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
