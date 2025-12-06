import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function PaymentSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#16372e] via-[#1a4538] to-[#b37932] p-12 lg:p-16 mb-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <i className="ri-gift-line"></i>
              <span className="text-sm font-medium">عرض خاص</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              احصل على خصم 15%
              <br />
              <span className="text-[#f4d4a0]">على طلبك الأول</span>
            </h2>

            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              اطلب الآن واستمتع بأجود أنواع العسل الحضرمي الأصيل 
              مع توصيل مجاني لجميع أنحاء اليمن
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <Button variant="primary" size="lg" className="bg-white text-[#16372e] hover:bg-[#f4d4a0] px-10 whitespace-nowrap">
                  <i className="ri-shopping-bag-line ml-2"></i>
                  تسوق الآن
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[#16372e] px-10 whitespace-nowrap">
                  <i className="ri-phone-line ml-2"></i>
                  اتصل بنا
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl flex-shrink-0">
                  <i className="ri-truck-line text-2xl"></i>
                </div>
                <div className="text-right">
                  <div className="font-bold">توصيل مجاني</div>
                  <div className="text-sm opacity-75">لجميع المحافظات</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl flex-shrink-0">
                  <i className="ri-shield-check-line text-2xl"></i>
                </div>
                <div className="text-right">
                  <div className="font-bold">ضمان الجودة</div>
                  <div className="text-sm opacity-75">منتجات مفحوصة</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl flex-shrink-0">
                  <i className="ri-customer-service-2-line text-2xl"></i>
                </div>
                <div className="text-right">
                  <div className="font-bold">دعم 24/7</div>
                  <div className="text-sm opacity-75">نحن هنا لخدمتك</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Blog */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Payment Methods */}
          <div className="bg-gradient-to-br from-[#f8f6f3] to-white rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#b37932] to-[#935624] rounded-2xl">
                <i className="ri-bank-card-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#16372e]">طرق الدفع</h3>
                <p className="text-gray-600">آمنة ومتنوعة</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              نوفر لك خيارات دفع متعددة وآمنة لراحتك
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border-2 border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-[#b37932]/10 rounded-xl">
                  <i className="ri-money-dollar-circle-line text-[#b37932] text-2xl"></i>
                </div>
                <div>
                  <div className="font-bold text-[#16372e]">الدفع عند الاستلام</div>
                  <div className="text-sm text-gray-600">ادفع عند وصول الطلب</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border-2 border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-[#b37932]/10 rounded-xl">
                  <i className="ri-bank-card-2-line text-[#b37932] text-2xl"></i>
                </div>
                <div>
                  <div className="font-bold text-[#16372e]">البطاقات البنكية</div>
                  <div className="text-sm text-gray-600">Visa, Mastercard</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border-2 border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-[#b37932]/10 rounded-xl">
                  <i className="ri-smartphone-line text-[#b37932] text-2xl"></i>
                </div>
                <div>
                  <div className="font-bold text-[#16372e]">المحافظ الإلكترونية</div>
                  <div className="text-sm text-gray-600">تحويل فوري وآمن</div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Preview */}
          <div className="bg-gradient-to-br from-[#f8f6f3] to-white rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#16372e] to-[#0f2620] rounded-2xl">
                <i className="ri-article-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#16372e]">مدونتنا</h3>
                <p className="text-gray-600">مقالات مفيدة</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              اكتشف المزيد عن العسل الحضرمي وفوائده الصحية
            </p>

            <div className="space-y-4 mb-6">
              <Link to="/blog/1" className="flex gap-4 bg-white rounded-2xl p-4 border-2 border-gray-100 hover:border-[#b37932] transition-colors cursor-pointer group">
                <img
                  src="https://readdy.ai/api/search-image?query=Golden%20honey%20jar%20with%20honeycomb%2C%20simple%20clean%20background%2C%20professional%20product%20photography&width=200&height=200&seq=blog-thumb-1&orientation=squarish"
                  alt="مقال"
                  className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-[#16372e] mb-1 group-hover:text-[#b37932] transition-colors">
                    فوائد عسل السدر الصحية
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    تعرف على الفوائد الصحية المذهلة لعسل السدر الحضرمي
                  </p>
                </div>
              </Link>

              <Link to="/blog/2" className="flex gap-4 bg-white rounded-2xl p-4 border-2 border-gray-100 hover:border-[#b37932] transition-colors cursor-pointer group">
                <img
                  src="https://readdy.ai/api/search-image?query=Beekeeper%20working%20with%20beehives%2C%20natural%20setting%2C%20professional%20photography&width=200&height=200&seq=blog-thumb-2&orientation=squarish"
                  alt="مقال"
                  className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-[#16372e] mb-1 group-hover:text-[#b37932] transition-colors">
                    كيف نميز العسل الأصلي
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    دليلك الشامل للتعرف على العسل الطبيعي الأصيل
                  </p>
                </div>
              </Link>
            </div>

            <Link to="/blog">
              <Button variant="outline" size="md" className="w-full border-2 border-[#16372e] text-[#16372e] hover:bg-[#16372e] hover:text-white whitespace-nowrap">
                <span>جميع المقالات</span>
                <i className="ri-arrow-left-line mr-2"></i>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
