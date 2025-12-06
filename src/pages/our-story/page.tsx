import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://readdy.ai/api/search-image?query=Majestic%20Hadramout%20mountains%20and%20valleys%20at%20golden%20hour%2C%20dramatic%20landscape%20with%20ancient%20Yemeni%20terrain%2C%20pristine%20natural%20beauty%2C%20warm%20golden%20sunlight%20illuminating%20mountain%20peaks%2C%20serene%20wilderness%2C%20cultural%20heritage%20landscape%2C%20artistic%20composition%20with%20strong%20contrast%20between%20light%20and%20shadow&width=1920&height=1080&seq=story-hero1&orientation=landscape"
          alt="جبال حضرموت"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-white/60"></div>
              <i className="ri-book-open-line text-5xl"></i>
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">قصتنا</h1>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light">
            حكاية عائلة، إرث حضارة، وشغف توارثته الأجيال منذ عام 1962
          </p>
          <div className="mt-12 animate-bounce">
            <i className="ri-arrow-down-line text-4xl"></i>
          </div>
        </div>
      </section>

      {/* Story Beginning */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#935624]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#16372e]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <div className="inline-block">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-[#935624]"></div>
                  <i className="ri-seedling-line text-5xl text-[#935624]"></i>
                  <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-[#935624]"></div>
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#16372e] mb-8 leading-tight">في البدء كان الشغف</h2>
              <p className="text-2xl text-gray-500 max-w-3xl mx-auto font-light">حكاية عائلة حملت إرث النحل عبر الأجيال</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
              <div className="order-2 lg:order-1">
                <div className="space-y-10">
                  {/* First Paragraph with decorative quote */}
                  <div className="relative">
                    <div className="absolute -right-6 -top-6 text-9xl text-[#935624]/10 font-serif leading-none">"</div>
                    <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 font-light relative z-10 pr-10">
                      في أعالي <span className="font-bold text-[#16372e]">جبال حضرموت</span> وبين أوديتها الخلّابة، بدأت حكايتنا قبل أكثر من <span className="font-bold text-[#935624]">ستين عامًا</span>، لعائلة بسيطة حملت شغف النحل في دمها، وتوارثت هذا العشق جيلًا بعد جيل.
                    </p>
                  </div>

                  {/* Decorative Divider */}
                  <div className="flex items-center gap-4 py-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#935624]/20 to-[#935624]/10 rounded-full">
                      <i className="ri-heart-fill text-[#935624] text-2xl"></i>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-l from-[#935624]/30 to-transparent"></div>
                  </div>

                  {/* Second Paragraph with highlight box */}
                  <div className="bg-gradient-to-br from-[#16372e]/5 via-[#935624]/5 to-[#16372e]/5 rounded-3xl p-10 border-r-4 border-[#935624] shadow-lg">
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
                      ومن ذلك الشغف العميق، وذلك الإرث الضارب في جذور التاريخ، وُلدت <span className="font-bold text-[#935624] text-3xl">حضْرَمي</span> لتحوّل هذا التقليد العائلي إلى علامة تجسّد أصالة المكان وروح حضرموت.
                    </p>
                  </div>

                  {/* Key Message Box */}
                  <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#935624] to-[#b37932] rounded-2xl flex-shrink-0 shadow-lg">
                        <i className="ri-message-3-line text-white text-3xl"></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#16372e] mb-4">رسالتنا للعالم</h3>
                        <p className="text-xl leading-relaxed text-gray-700 font-light">
                          عسل السدر في حضرموت انعكاس لهوية عريقة، وطبيعة فريدة وهبها الله لهذه الأرض دون سواها.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-6 pt-8">
                    <div className="text-center bg-gradient-to-br from-[#935624]/10 to-transparent rounded-2xl p-6">
                      <div className="text-4xl md:text-5xl font-bold text-[#935624] mb-2">60+</div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">عامًا من الخبرة</div>
                    </div>
                    <div className="text-center bg-gradient-to-br from-[#16372e]/10 to-transparent rounded-2xl p-6">
                      <div className="text-4xl md:text-5xl font-bold text-[#16372e] mb-2">3</div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">أجيال متعاقبة</div>
                    </div>
                    <div className="text-center bg-gradient-to-br from-[#935624]/10 to-transparent rounded-2xl p-6">
                      <div className="text-4xl md:text-5xl font-bold text-[#935624] mb-2">100%</div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">طبيعي وأصيل</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#935624]/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#16372e]/10 rounded-full blur-3xl"></div>
                  
                  {/* Main Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Traditional%20Yemeni%20family%20beekeeping%20heritage%20across%20generations%2C%20grandfather%20teaching%20grandson%20traditional%20beekeeping%20methods%20in%20Hadramout%20mountains%2C%20authentic%20cultural%20traditions%2C%20warm%20family%20atmosphere%2C%20golden%20honey%20production%2C%20heritage%20craftsmanship%2C%20emotional%20connection%2C%20simple%20background%20highlighting%20subjects&width=600&height=500&seq=family-heritage1&orientation=portrait"
                      alt="إرث العائلة"
                      className="w-full h-[700px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Image Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                        <p className="text-xl font-bold mb-2">إرث عائلي يتوارثه الأجيال</p>
                        <p className="text-base opacity-90">من جبال حضرموت إلى العالم</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-10 -left-10 bg-gradient-to-br from-[#935624] to-[#b37932] rounded-3xl p-8 shadow-2xl text-white transform rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">1962</div>
                      <div className="text-base">سنة التأسيس</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#935624] to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#16372e] to-[#1a4538] rounded-2xl mx-auto">
                  <i className="ri-building-line text-white text-3xl"></i>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#16372e] mb-6">عن الشركة</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#935624] to-transparent mx-auto"></div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 mb-16 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                <div className="text-center group">
                  <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-[#16372e] to-[#1a4538] rounded-3xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-calendar-line text-white text-4xl"></i>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#935624] mb-3">1962</h3>
                  <p className="text-lg text-gray-600">سنة التأسيس</p>
                </div>
                <div className="text-center group">
                  <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-[#935624] to-[#b37932] rounded-3xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-time-line text-white text-4xl"></i>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-3">+60</h3>
                  <p className="text-lg text-gray-600">عامًا من الخبرة</p>
                </div>
                <div className="text-center group">
                  <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-[#16372e] to-[#1a4538] rounded-3xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-global-line text-white text-4xl"></i>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#935624] mb-3">5</h3>
                  <p className="text-lg text-gray-600">دول نعمل فيها</p>
                </div>
              </div>

              <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-8">
                <p className="text-xl md:text-2xl font-light first-letter:text-6xl first-letter:font-bold first-letter:text-[#935624] first-letter:float-right first-letter:ml-3 first-letter:mt-1">
                  تأسست شركة <strong className="text-[#935624] font-bold">حضْرَمي</strong> عام 1962 لتكون الذراع الاستثماري في المنتجات الزراعية لحضرموت واليمن، وانطلقت برؤية طموحة تتجاوز الحدود المحلية، لتتوسع نحو عدد من الدول مثل المملكة العربية السعودية، وسلطنة عمان، وجمهورية مصر العربية، وجمهورية إندونيسيا.
                </p>
                <p className="text-xl md:text-2xl font-light">
                  على مدى أكثر من ستة عقود، عملت حضرمي على تمكين المزارعين، وتبني التقنيات المستدامة، وتأهيل كوادر زراعية متمكنة قادرة على قيادة مستقبل الزراعة نحو التميز والتنافسية على المستوى العالمي.
                </p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-[#16372e] via-[#1a4538] to-[#16372e] rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mb-8 shadow-lg">
                  <i className="ri-drop-line text-4xl"></i>
                </div>
                <h3 className="text-3xl font-bold mb-6">منتجاتنا</h3>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <i className="ri-check-line text-[#935624] ml-3 mt-1 text-2xl group-hover:scale-125 transition-transform duration-300"></i>
                    <span className="text-lg">عسل السدر الملكي</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="ri-check-line text-[#935624] ml-3 mt-1 text-2xl group-hover:scale-125 transition-transform duration-300"></i>
                    <span className="text-lg">عسل المربعي الفاخر</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="ri-check-line text-[#935624] ml-3 mt-1 text-2xl group-hover:scale-125 transition-transform duration-300"></i>
                    <span className="text-lg">مواسم العسل المتنوعة</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="ri-check-line text-[#935624] ml-3 mt-1 text-2xl group-hover:scale-125 transition-transform duration-300"></i>
                    <span className="text-lg">أجود أنواع الحبوب</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="ri-check-line text-[#935624] ml-3 mt-1 text-2xl group-hover:scale-125 transition-transform duration-300"></i>
                    <span className="text-lg">اللبان الحضرمي الأصيل</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="ri-check-line text-[#935624] ml-3 mt-1 text-2xl group-hover:scale-125 transition-transform duration-300"></i>
                    <span className="text-lg">منتجات زراعية متنوعة</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#935624] via-[#b37932] to-[#935624] rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mb-8 shadow-lg">
                  <i className="ri-team-line text-4xl"></i>
                </div>
                <h3 className="text-3xl font-bold mb-6">شراكاتنا ومبادراتنا</h3>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <i className="ri-arrow-left-s-line ml-3 mt-1 text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
                    <span className="text-lg">شراكات استراتيجية مع مؤسسات المجتمع المدني</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="ri-arrow-left-s-line ml-3 mt-1 text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
                    <span className="text-lg">التعاون مع الجهات الزراعية الرائدة</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="ri-arrow-left-s-line ml-3 mt-1 text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
                    <span className="text-lg">تشجيع البحث العلمي والدراسات التطبيقية</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="ri-arrow-left-s-line ml-3 mt-1 text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
                    <span className="text-lg">مبادرات مجتمعية للتنمية المستدامة</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="ri-arrow-left-s-line ml-3 mt-1 text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
                    <span className="text-lg">تطوير القطاع الزراعي وخدمة المجتمع</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Goals */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border-4 border-[#935624] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-[#16372e] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Vision */}
              <div className="bg-gradient-to-br from-[#16372e] via-[#1a4538] to-[#16372e] rounded-3xl p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className="w-24 h-24 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mb-8 shadow-lg">
                  <i className="ri-eye-line text-5xl"></i>
                </div>
                <h3 className="text-4xl font-bold mb-8">رؤيتنا</h3>
                <p className="text-2xl leading-relaxed font-light">
                  الوجهة الأولى للعسل الحضرمي الأصيل والموثوق.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-br from-[#935624] via-[#b37932] to-[#935624] rounded-3xl p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className="w-24 h-24 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mb-8 shadow-lg">
                  <i className="ri-compass-line text-5xl"></i>
                </div>
                <h3 className="text-4xl font-bold mb-8">رسالتنا</h3>
                <p className="text-xl leading-relaxed font-light">
                  نعمل على إنتاج أجود أنواع العسل الحضرمي الأصيل من مصادره الطبيعية في وديان حضرموت، ملتزمين بأعلى معايير الجودة، ومتّبعين ممارسات مستدامة تحافظ على البيئة وتدعم المجتمع المحلي، لنكون الخيار الأول محليًا وعالميًا في العسل الحضرمي الطبيعي والموثوق.
                </p>
              </div>
            </div>

            {/* Goals */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-100">
              <div className="text-center mb-16">
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-[#16372e] to-[#1a4538] rounded-3xl mx-auto mb-8 shadow-lg">
                  <i className="ri-target-line text-white text-5xl"></i>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-4">أهدافنا</h3>
                <p className="text-xl text-gray-600 font-light">نسعى لتحقيق التميز في كل جانب من جوانب عملنا</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#935624] to-[#b37932] rounded-2xl ml-5 flex-shrink-0 shadow-md">
                    <i className="ri-award-line text-white text-2xl"></i>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    الارتقاء بجودة العسل الحضرمي تربية وإنتاجاً وفق أعلى معايير سلامة الغذاء
                  </p>
                </div>

                <div className="flex items-start bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#935624] to-[#b37932] rounded-2xl ml-5 flex-shrink-0 shadow-md">
                    <i className="ri-global-line text-white text-2xl"></i>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    تعزيز حضور العسل الحضرمي في الأسواق الإقليمية والعالمية
                  </p>
                </div>

                <div className="flex items-start bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#935624] to-[#b37932] rounded-2xl ml-5 flex-shrink-0 shadow-md">
                    <i className="ri-team-line text-white text-2xl"></i>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    تمكين النحالين المحليين ودعم استدامة سبل عيشهم
                  </p>
                </div>

                <div className="flex items-start bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#935624] to-[#b37932] rounded-2xl ml-5 flex-shrink-0 shadow-md">
                    <i className="ri-leaf-line text-white text-2xl"></i>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    المساهمة في الحفاظ على البيئة والمراعي الطبيعية
                  </p>
                </div>

                <div className="flex items-start bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 md:col-span-2">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#935624] to-[#b37932] rounded-2xl ml-5 flex-shrink-0 shadow-md">
                    <i className="ri-lightbulb-line text-white text-2xl"></i>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    دعم الابتكار والبحث العلمي في قطاع العسل لزيادة المعرفة وتعزيز التنافسية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#935624] to-[#b37932] rounded-2xl mx-auto shadow-lg">
                  <i className="ri-time-line text-white text-4xl"></i>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#16372e] mb-6">رحلة ستة عقود</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#935624] to-transparent mx-auto mb-8"></div>
              <p className="text-2xl text-gray-600 font-light">من شغف عائلي إلى علامة عالمية</p>
            </div>

            <div className="relative">
              <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#935624] via-[#b37932] to-[#935624] transform translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-16">
                {/* 1962 */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0">
                      <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#935624] mb-5">1962</h3>
                        <h4 className="text-2xl font-bold text-[#16372e] mb-4">البداية</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          تأسيس الشركة على يد عائلة حضرمية عريقة، بدأت بشغف تربية النحل في جبال حضرموت
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute right-1/2 w-8 h-8 bg-gradient-to-br from-[#935624] to-[#b37932] rounded-full transform translate-x-1/2 border-4 border-white shadow-lg"></div>
                    <div className="md:w-1/2"></div>
                  </div>
                </div>

                {/* 1980s */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2"></div>
                    <div className="hidden md:block absolute right-1/2 w-8 h-8 bg-gradient-to-br from-[#935624] to-[#b37932] rounded-full transform translate-x-1/2 border-4 border-white shadow-lg"></div>
                    <div className="md:w-1/2 md:pr-16">
                      <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#935624] mb-5">الثمانينات</h3>
                        <h4 className="text-2xl font-bold text-[#16372e] mb-4">التوسع المحلي</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          توسع الإنتاج وتطوير تقنيات تربية النحل، وبناء شبكة من النحالين المحليين
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2000s */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0">
                      <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#935624] mb-5">الألفية الجديدة</h3>
                        <h4 className="text-2xl font-bold text-[#16372e] mb-4">الانطلاق الإقليمي</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          التوسع إلى الأسواق الإقليمية في السعودية وعمان ومصر، وتطبيق معايير الجودة العالمية
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute right-1/2 w-8 h-8 bg-gradient-to-br from-[#935624] to-[#b37932] rounded-full transform translate-x-1/2 border-4 border-white shadow-lg"></div>
                    <div className="md:w-1/2"></div>
                  </div>
                </div>

                {/* Today */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2"></div>
                    <div className="hidden md:block absolute right-1/2 w-8 h-8 bg-gradient-to-br from-[#935624] to-[#b37932] rounded-full transform translate-x-1/2 border-4 border-white shadow-lg"></div>
                    <div className="md:w-1/2 md:pr-16">
                      <div className="bg-gradient-to-br from-[#16372e] via-[#1a4538] to-[#16372e] p-10 rounded-3xl shadow-2xl text-white hover:shadow-3xl transition-all duration-300 hover:scale-105">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#935624] mb-5">اليوم</h3>
                        <h4 className="text-2xl font-bold mb-4">علامة عالمية</h4>
                        <p className="text-lg leading-relaxed">
                          حضرمي اليوم علامة تجارية رائدة في إنتاج العسل الحضرمي الأصيل، تصل منتجاتها إلى 5 دول، وتواصل رحلة التميز والابتكار
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <img 
          src="https://readdy.ai/api/search-image?query=Golden%20honey%20flowing%20in%20pristine%20Hadramout%20valley%20landscape%2C%20natural%20honey%20production%20scene%2C%20warm%20golden%20tones%2C%20serene%20mountain%20background%2C%20artistic%20composition%20with%20strong%20contrast%2C%20premium%20quality%20aesthetic&width=1920&height=600&seq=cta-bg1&orientation=landscape"
          alt="عسل حضرمي"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-8">
              <div className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mx-auto shadow-lg">
                <i className="ri-hand-heart-line text-5xl"></i>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">كن جزءًا من قصتنا</h2>
            <p className="text-2xl md:text-3xl mb-12 leading-relaxed font-light">
              اكتشف طعم العسل الحضرمي الأصيل، واستمتع بإرث ستة عقود من الجودة والأصالة
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.REACT_APP_NAVIGATE('/products')}
                className="text-xl px-10 py-6 whitespace-nowrap"
              >
                <i className="ri-shopping-bag-line ml-2 text-2xl"></i>
                تسوق منتجاتنا
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.REACT_APP_NAVIGATE('/contact')}
                className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#16372e] text-xl px-10 py-6 whitespace-nowrap backdrop-blur-sm"
              >
                <i className="ri-message-3-line ml-2 text-2xl"></i>
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
