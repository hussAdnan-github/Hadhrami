import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://readdy.ai/api/form/d3ttiv01gb80hj2123l0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=A%20serene%20and%20professional%20contact%20us%20background%20featuring%20warm%20golden%20honey%20tones%2C%20soft%20natural%20lighting%2C%20elegant%20minimalist%20design%20with%20subtle%20honeycomb%20patterns%2C%20clean%20modern%20aesthetic%2C%20inviting%20atmosphere%2C%20high-end%20business%20communication%20concept%2C%20sophisticated%20color%20palette%20of%20amber%2C%20cream%20and%20soft%20browns&width=1920&height=500&seq=contact-hero-bg&orientation=landscape"
            alt="Contact Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#16372e]/85 via-[#16372e]/75 to-[#16372e]/85"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <i className="ri-customer-service-2-line text-[#b37932] text-xl"></i>
            <span className="text-sm font-medium text-white">نحن هنا لمساعدتك</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            تواصل معنا
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            نسعد دائماً بالتواصل معك والإجابة على جميع استفساراتك
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-20 bg-gradient-to-b from-[#f8f6f3] to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#b37932] to-[#935624] rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                <i className="ri-phone-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#16372e] mb-4 text-center">اتصل بنا</h3>
              <div className="space-y-3 text-center">
                <p className="text-gray-700 text-lg font-medium" dir="ltr">+967 777 123 456</p>
                <p className="text-gray-700 text-lg font-medium" dir="ltr">+967 733 123 456</p>
                <p className="text-gray-500 text-sm mt-4">متاح من 8 صباحاً إلى 6 مساءً</p>
              </div>
              <a href="tel:+967777123456" className="mt-6 block text-center text-[#b37932] hover:text-[#935624] font-medium cursor-pointer">
                اتصل الآن
                <i className="ri-arrow-left-line mr-2"></i>
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#16372e] to-[#0f2620] rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                <i className="ri-mail-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#16372e] mb-4 text-center">راسلنا</h3>
              <div className="space-y-3 text-center">
                <p className="text-gray-700 text-lg font-medium">info@hadramee.com</p>
                <p className="text-gray-700 text-lg font-medium">support@hadramee.com</p>
                <p className="text-gray-500 text-sm mt-4">نرد خلال 24 ساعة</p>
              </div>
              <a href="mailto:info@hadramee.com" className="mt-6 block text-center text-[#b37932] hover:text-[#935624] font-medium cursor-pointer">
                أرسل بريد
                <i className="ri-arrow-left-line mr-2"></i>
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#b37932] to-[#935624] rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                <i className="ri-map-pin-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#16372e] mb-4 text-center">زورنا</h3>
              <div className="space-y-3 text-center">
                <p className="text-gray-700 text-lg font-medium">وادي حضرموت</p>
                <p className="text-gray-700 text-lg font-medium">اليمن</p>
                <p className="text-gray-500 text-sm mt-4">مفتوح يومياً</p>
              </div>
              <a href="#map" className="mt-6 block text-center text-[#b37932] hover:text-[#935624] font-medium cursor-pointer">
                عرض الخريطة
                <i className="ri-arrow-left-line mr-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#b37932]/10 rounded-full px-4 py-2 mb-6">
                <i className="ri-message-3-line text-[#b37932]"></i>
                <span className="text-sm font-medium text-[#935624]">أرسل لنا رسالة</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-6 leading-tight">
                نحن في انتظار
                <br />
                <span className="text-[#b37932]">رسالتك</span>
              </h2>

              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                سواء كان لديك استفسار عن منتجاتنا، أو ترغب في الشراكة معنا، 
                أو لديك أي سؤال آخر، فريقنا جاهز للمساعدة
              </p>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#b37932]/10 rounded-xl flex-shrink-0">
                    <i className="ri-time-line text-[#b37932] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#16372e] mb-1">رد سريع</h4>
                    <p className="text-gray-600">نرد على جميع الرسائل خلال 24 ساعة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#b37932]/10 rounded-xl flex-shrink-0">
                    <i className="ri-shield-check-line text-[#b37932] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#16372e] mb-1">خصوصية تامة</h4>
                    <p className="text-gray-600">معلوماتك محمية ولن نشاركها مع أي طرف</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#b37932]/10 rounded-xl flex-shrink-0">
                    <i className="ri-customer-service-line text-[#b37932] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#16372e] mb-1">دعم احترافي</h4>
                    <p className="text-gray-600">فريق متخصص لخدمتك بأفضل طريقة</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-10 p-6 bg-gradient-to-br from-[#f8f6f3] to-white rounded-2xl border-2 border-[#b37932]/20">
                <h4 className="font-bold text-[#16372e] mb-4 flex items-center gap-2">
                  <i className="ri-calendar-line text-[#b37932]"></i>
                  ساعات العمل
                </h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>السبت - الخميس</span>
                    <span className="font-medium">8:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة</span>
                    <span className="font-medium">مغلق</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <form onSubmit={handleSubmit} id="contact-form" data-readdy-form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-[#16372e] font-semibold mb-2 text-sm">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#b37932] focus:outline-none transition-colors text-base"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#16372e] font-semibold mb-2 text-sm">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#b37932] focus:outline-none transition-colors text-base"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-[#16372e] font-semibold mb-2 text-sm">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#b37932] focus:outline-none transition-colors text-base"
                      placeholder="+967 777 123 456"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-[#16372e] font-semibold mb-2 text-sm">
                      الموضوع
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#b37932] focus:outline-none transition-colors text-base cursor-pointer"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="استفسار عن المنتجات">استفسار عن المنتجات</option>
                      <option value="طلب عرض سعر">طلب عرض سعر</option>
                      <option value="شكوى أو اقتراح">شكوى أو اقتراح</option>
                      <option value="شراكة تجارية">شراكة تجارية</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#16372e] font-semibold mb-2 text-sm">
                    رسالتك *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#b37932] focus:outline-none transition-colors resize-none text-base"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-2">الحد الأقصى: 500 حرف</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 bg-green-50 border-2 border-green-500 text-green-700 px-4 py-4 rounded-xl flex items-center gap-3">
                    <i className="ri-checkbox-circle-fill text-2xl"></i>
                    <span className="font-medium">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 bg-red-50 border-2 border-red-500 text-red-700 px-4 py-4 rounded-xl flex items-center gap-3">
                    <i className="ri-error-warning-fill text-2xl"></i>
                    <span className="font-medium">حدث خطأ! يرجى التحقق من البيانات والمحاولة مرة أخرى</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#16372e] to-[#0f2620] hover:from-[#b37932] hover:to-[#935624] text-white whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin ml-2"></i>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-fill ml-2"></i>
                      إرسال الرسالة
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-24 bg-gradient-to-b from-white to-[#f8f6f3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#b37932]/10 rounded-full px-4 py-2 mb-6">
              <i className="ri-map-pin-line text-[#b37932]"></i>
              <span className="text-sm font-medium text-[#935624]">موقعنا</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-6">
              تفضل بزيارتنا
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نرحب بك في قلب وادي حضرموت، حيث يُنتج أجود أنواع العسل
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d48.7758!3d15.9094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU0JzMzLjgiTiA0OMKwNDYnMzMuOSJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع حضرمي"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-gradient-to-br from-[#16372e] to-[#0f2620] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">تابعنا على وسائل التواصل</h2>
            <p className="text-xl text-white/80 mb-12">
              ابق على اطلاع بآخر أخبارنا، منتجاتنا، ومبادراتنا المجتمعية
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#" className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-[#1877f2] transition-all duration-300 hover:scale-110 cursor-pointer group">
                <i className="ri-facebook-fill text-white text-2xl group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="#" className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-[#e4405f] transition-all duration-300 hover:scale-110 cursor-pointer group">
                <i className="ri-instagram-line text-white text-2xl group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="#" className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-[#1da1f2] transition-all duration-300 hover:scale-110 cursor-pointer group">
                <i className="ri-twitter-line text-white text-2xl group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="#" className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-[#25d366] transition-all duration-300 hover:scale-110 cursor-pointer group">
                <i className="ri-whatsapp-line text-white text-2xl group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="#" className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-[#ff0000] transition-all duration-300 hover:scale-110 cursor-pointer group">
                <i className="ri-youtube-line text-white text-2xl group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
