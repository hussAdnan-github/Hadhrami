
import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Stunning%20golden%20honey%20dripping%20from%20wooden%20dipper%20with%20honeycomb%2C%20traditional%20Yemeni%20Hadramaut%20mountains%20landscape%20in%20background%2C%20warm%20golden%20hour%20lighting%2C%20natural%20organic%20honey%20production%2C%20traditional%20beekeeping%20heritage%2C%20serene%20mountain%20valleys%20with%20acacia%20trees%2C%20authentic%20Middle%20Eastern%20countryside%2C%20premium%20quality%20honey%2C%20artisanal%20craftsmanship%2C%20heritage%20and%20tradition%2C%20peaceful%20rural%20setting%2C%20cinematic%20composition&width=1920&height=1080&seq=hero-main-1&orientation=landscape')`
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <i className="ri-award-line text-[#b37932] text-xl"></i>
              <span className="text-sm font-medium">منذ 1962 - أكثر من 60 عاماً من التميز</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              حكاية أرض..
              <br />
              <span className="text-[#b37932]">وإرث شعب</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-6 leading-relaxed font-medium">
              من مزرعتنا.. إلى باب بيتك
            </p>
            
            <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto opacity-95">
              أجود أنواع العسل الحضرمي الأصيل من قلب الوديان والجبال
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/our-story">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[#16372e] px-8 py-4 text-lg whitespace-nowrap">
                  <i className="ri-book-open-line ml-2"></i>
                  اكتشف قصتنا
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="primary" size="lg" className="bg-[#b37932] hover:bg-[#935624] text-white px-8 py-4 text-lg whitespace-nowrap">
                  <i className="ri-phone-line ml-2"></i>
                  تواصل معنا
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-4xl font-bold text-[#b37932] mb-2">60+</div>
                <div className="text-sm opacity-90">عاماً من الخبرة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-4xl font-bold text-[#b37932] mb-2">100%</div>
                <div className="text-sm opacity-90">طبيعي وأصيل</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-4xl font-bold text-[#b37932] mb-2">15+</div>
                <div className="text-sm opacity-90">نوع من العسل</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-4xl font-bold text-[#b37932] mb-2">50K+</div>
                <div className="text-sm opacity-90">عميل راضٍ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm opacity-75">اكتشف المزيد</span>
          <i className="ri-arrow-down-line text-3xl"></i>
        </div>
      </div>
    </section>
  );
}
