import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f6f3] to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#b37932]/10 rounded-full px-4 py-2 mb-6">
              <i className="ri-customer-service-2-line text-[#b37932]"></i>
              <span className="text-sm font-medium text-[#935624]">تواصل معنا</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-[#16372e] mb-6 leading-tight">
              نحن هنا
              <br />
              <span className="text-[#b37932]">لخدمتك</span>
            </h2>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              لديك استفسار؟ تريد معرفة المزيد عن منتجاتنا؟ 
              فريقنا جاهز للإجابة على جميع أسئلتك
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#b37932] to-[#935624] rounded-2xl flex-shrink-0">
                  <i className="ri-phone-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-[#16372e] mb-1 text-lg">اتصل بنا</h3>
                  <p className="text-gray-600 text-lg" dir="ltr">+967 777 123 456</p>
                  <p className="text-gray-600 text-lg" dir="ltr">+967 733 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#16372e] to-[#0f2620] rounded-2xl flex-shrink-0">
                  <i className="ri-mail-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-[#16372e] mb-1 text-lg">راسلنا</h3>
                  <p className="text-gray-600 text-lg">info@hadramee.com</p>
                  <p className="text-gray-600 text-lg">support@hadramee.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#b37932] to-[#935624] rounded-2xl flex-shrink-0">
                  <i className="ri-map-pin-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-[#16372e] mb-1 text-lg">موقعنا</h3>
                  <p className="text-gray-600 text-lg">حضرموت، اليمن</p>
                  <p className="text-gray-600">وادي دوعن - المكلا</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-[#16372e] mb-4 text-lg">تابعنا على</h3>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-[#1877f2] text-white rounded-xl hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-[#1da1f2] text-white rounded-xl hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-[#e4405f] text-white rounded-xl hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-[#25d366] text-white rounded-xl hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-whatsapp-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-[#16372e] mb-6">أرسل رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#16372e] font-medium mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#b37932] focus:outline-none transition-colors text-base"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-[#16372e] font-medium mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#b37932] focus:outline-none transition-colors text-base"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-[#16372e] font-medium mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#b37932] focus:outline-none transition-colors text-base"
                  placeholder="+967 777 123 456"
                />
              </div>

              <div>
                <label className="block text-[#16372e] font-medium mb-2">رسالتك</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#b37932] focus:outline-none transition-colors resize-none text-base"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
                <p className="text-sm text-gray-500 mt-2">الحد الأقصى: 500 حرف</p>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-2xl"></i>
                  <span>تم إرسال رسالتك بنجاح! سنتواصل معك قريباً</span>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-[#16372e] hover:bg-[#b37932] text-white whitespace-nowrap"
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

            <div className="mt-6 text-center">
              <Link to="/contact" className="text-[#b37932] hover:text-[#935624] font-medium cursor-pointer">
                أو قم بزيارة صفحة التواصل الكاملة
                <i className="ri-arrow-left-line mr-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
