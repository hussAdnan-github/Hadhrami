import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function InitiativesPage() {
  const initiatives = [
    {
      id: 'beekeepers-training',
      title: 'تدريب النحالين الشباب',
      subtitle: 'على الممارسات الحديثة والمستدامة',
      shortDesc: 'نعمل على تأهيل جيل جديد من النحالين من خلال برامج تدريبية متخصصة',
      icon: 'ri-graduation-cap-line',
      color: 'from-[#935624] to-[#b37932]',
      image: 'https://readdy.ai/api/search-image?query=Young%20Yemeni%20beekeepers%20receiving%20professional%20training%20in%20modern%20sustainable%20beekeeping%20practices%2C%20educational%20workshop%20in%20Hadramout%20mountains%2C%20mentorship%20program%2C%20hands-on%20learning%2C%20traditional%20and%20modern%20techniques%2C%20community%20development%2C%20knowledge%20transfer%2C%20rural%20education%2C%20agricultural%20training%2C%20cultural%20heritage%20preservation%2C%20natural%20environment%2C%20authentic%20documentary%20style&width=800&height=600&seq=training-card&orientation=landscape',
      stats: [
        { label: 'متدرب سنوياً', value: '150+', icon: 'ri-user-line' },
        { label: 'ساعة تدريبية', value: '500+', icon: 'ri-time-line' },
        { label: 'برنامج متخصص', value: '12', icon: 'ri-book-line' }
      ]
    },
    {
      id: 'reforestation',
      title: 'التشجير وحماية المراعي',
      subtitle: 'دعم مبادرات التشجير وحماية المراعي الطبيعية',
      shortDesc: 'نسهم في الحفاظ على البيئة من خلال زراعة الأشجار وحماية المراعي',
      icon: 'ri-plant-line',
      color: 'from-[#16372e] to-[#1e4d3f]',
      image: 'https://readdy.ai/api/search-image?query=Reforestation%20project%20in%20Hadramout%20valleys%2C%20planting%20Sidr%20and%20Samr%20trees%2C%20environmental%20conservation%2C%20natural%20pastures%20protection%2C%20flowering%20trees%20for%20bees%2C%20sustainable%20agriculture%2C%20ecological%20preservation%2C%20mountain%20landscape%2C%20green%20initiative%2C%20biodiversity%20conservation%2C%20community%20volunteers%20planting%20trees%2C%20natural%20habitat%20restoration%2C%20environmental%20sustainability%2C%20authentic%20documentary%20style&width=800&height=600&seq=reforestation-card&orientation=landscape',
      stats: [
        { label: 'شجرة مزروعة', value: '5000+', icon: 'ri-seedling-line' },
        { label: 'هكتار محمي', value: '1000+', icon: 'ri-map-pin-line' },
        { label: 'موقع طبيعي', value: '25', icon: 'ri-landscape-line' }
      ]
    },
    {
      id: 'community-development',
      title: 'التنمية المجتمعية',
      subtitle: 'مشاريع تنموية لتحسين سبل العيش',
      shortDesc: 'نشارك في مبادرات تخدم المجتمع مثل تطوير البنية الزراعية',
      icon: 'ri-community-line',
      color: 'from-[#b37932] to-[#c89350]',
      image: 'https://readdy.ai/api/search-image?query=Community%20development%20projects%20in%20rural%20Hadramout%20villages%2C%20infrastructure%20improvement%2C%20local%20people%20working%20together%2C%20agricultural%20equipment%20distribution%2C%20small%20business%20support%2C%20rural%20development%2C%20social%20initiatives%2C%20community%20empowerment%2C%20traditional%20Yemeni%20village%2C%20collaborative%20work%2C%20sustainable%20livelihood%2C%20social%20impact%2C%20community%20building%2C%20authentic%20documentary%20style&width=800&height=600&seq=community-card&orientation=landscape',
      stats: [
        { label: 'قرية مستفيدة', value: '20+', icon: 'ri-home-line' },
        { label: 'مشروع صغير', value: '50+', icon: 'ri-briefcase-line' },
        { label: 'أسرة مستفيدة', value: '300+', icon: 'ri-team-line' }
      ]
    },
    {
      id: 'health-awareness',
      title: 'نشر الوعي الصحي',
      subtitle: 'التعريف بفوائد العسل الحضرمي',
      shortDesc: 'نُطلق حملات تثقيفية للتعريف بقيمة العسل الحضرمي',
      icon: 'ri-heart-pulse-line',
      color: 'from-[#935624] to-[#16372e]',
      image: 'https://readdy.ai/api/search-image?query=Health%20awareness%20campaign%20about%20Hadramout%20honey%20benefits%2C%20educational%20workshop%2C%20community%20health%20program%2C%20traditional%20medicine%20knowledge%20sharing%2C%20cultural%20presentation%2C%20wellness%20seminar%2C%20natural%20health%20products%2C%20health%20promotion%2C%20traditional%20knowledge%2C%20natural%20remedies%2C%20community%20education%2C%20cultural%20heritage%2C%20authentic%20documentary%20style&width=800&height=600&seq=health-card&orientation=landscape',
      stats: [
        { label: 'شخص مستفيد', value: '10000+', icon: 'ri-user-heart-line' },
        { label: 'حملة توعوية', value: '30+', icon: 'ri-megaphone-line' },
        { label: 'ورشة عمل', value: '50+', icon: 'ri-presentation-line' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Hadramout%20community%20working%20together%20in%20traditional%20village%2C%20social%20initiatives%2C%20community%20development%2C%20people%20helping%20each%20other%2C%20rural%20landscape%2C%20mountain%20valleys%2C%20traditional%20Yemeni%20architecture%2C%20collaborative%20work%2C%20social%20impact%2C%20community%20empowerment%2C%20natural%20environment%2C%20authentic%20documentary%20style%2C%20warm%20golden%20lighting&width=1920&height=1080&seq=hero-initiatives&orientation=landscape"
            alt="المبادرات المجتمعية"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#935624]/20 backdrop-blur-sm rounded-full mb-6">
              <i className="ri-heart-3-fill text-5xl text-[#935624] animate-pulse"></i>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            المبادرات المجتمعية
          </h1>
          <div className="w-32 h-1 bg-[#935624] mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed mb-8">
            لأننا في حضرمي ننتمي إلى مجتمعنا الحضرمي الكبير أرضاً وإنساناً
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 mb-12">
            كان حقٌّ علينا أن نستثمر في العديد من المبادرات المجتمعية التي تخدم أرضنا وإنساننا الحضرمي
          </p>
          <div className="flex justify-center">
            <div className="animate-bounce">
              <i className="ri-arrow-down-line text-4xl"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-6">
                أثرنا في المجتمع
              </h2>
              <div className="w-24 h-1 bg-[#935624] mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                نفخر بما حققناه من إنجازات تخدم مجتمعنا الحضرمي وتساهم في بناء مستقبل أفضل
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#935624]">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#935624] to-[#b37932] rounded-full mx-auto mb-4">
                  <i className="ri-user-line text-3xl text-white"></i>
                </div>
                <div className="text-4xl font-bold text-[#935624] mb-2">150+</div>
                <div className="text-gray-600 font-medium">متدرب سنوياً</div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#16372e]">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#16372e] to-[#1e4d3f] rounded-full mx-auto mb-4">
                  <i className="ri-seedling-line text-3xl text-white"></i>
                </div>
                <div className="text-4xl font-bold text-[#16372e] mb-2">5000+</div>
                <div className="text-gray-600 font-medium">شجرة مزروعة</div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#b37932]">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#b37932] to-[#c89350] rounded-full mx-auto mb-4">
                  <i className="ri-home-line text-3xl text-white"></i>
                </div>
                <div className="text-4xl font-bold text-[#b37932] mb-2">20+</div>
                <div className="text-gray-600 font-medium">قرية مستفيدة</div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#935624]">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#935624] to-[#16372e] rounded-full mx-auto mb-4">
                  <i className="ri-user-heart-line text-3xl text-white"></i>
                </div>
                <div className="text-4xl font-bold text-[#935624] mb-2">10000+</div>
                <div className="text-gray-600 font-medium">شخص مستفيد</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-6">
              مبادراتنا الأربع
            </h2>
            <div className="w-24 h-1 bg-[#935624] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              نعمل على أربع مبادرات رئيسية تخدم المجتمع الحضرمي وتساهم في التنمية المستدامة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {initiatives.map((initiative, index) => (
              <div 
                key={initiative.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-6 right-6 w-16 h-16 flex items-center justify-center bg-gradient-to-br ${initiative.color} rounded-full shadow-lg`}>
                    <i className={`${initiative.icon} text-3xl text-white`}></i>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                    <span className="text-2xl font-bold text-[#16372e]">{index + 1}</span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-lg text-white/90">
                      {initiative.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {initiative.shortDesc}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {initiative.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full mx-auto mb-2">
                          <i className={`${stat.icon} text-xl text-[#935624]`}></i>
                        </div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${initiative.color} bg-clip-text text-transparent mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    className={`w-full whitespace-nowrap bg-gradient-to-r ${initiative.color} hover:opacity-90 transition-opacity`}
                    onClick={() => window.REACT_APP_NAVIGATE(`/initiatives/${initiative.id}`)}
                  >
                    <span>اكتشف المزيد</span>
                    <i className="ri-arrow-left-line mr-2"></i>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-6">شهادات المستفيدين</h2>
            <div className="w-24 h-1 bg-[#935624] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              استمع لتجارب من استفادوا من مبادراتنا المجتمعية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#935624] hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#935624] to-[#b37932] rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  أ
                </div>
                <div>
                  <h4 className="font-bold text-[#16372e] text-lg">أحمد سالم</h4>
                  <p className="text-gray-600 text-sm">نحال شاب</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-4">
                "البرنامج التدريبي غير حياتي تماماً. تعلمت أساليب حديثة ومستدامة في تربية النحل، والآن أملك منحلي الخاص وأنتج عسلاً عالي الجودة."
              </p>
              <div className="flex gap-1 text-[#935624]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#16372e] hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#16372e] to-[#1e4d3f] rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  م
                </div>
                <div>
                  <h4 className="font-bold text-[#16372e] text-lg">محمد باحارثة</h4>
                  <p className="text-gray-600 text-sm">مزارع</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-4">
                "مبادرة التشجير أعادت الحياة لأرضنا. زرعنا مئات الأشجار وأصبحت المنطقة أكثر خضرة، والنحل يجد غذاءه بوفرة."
              </p>
              <div className="flex gap-1 text-[#16372e]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#b37932] hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#b37932] to-[#c89350] rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  ف
                </div>
                <div>
                  <h4 className="font-bold text-[#16372e] text-lg">فاطمة عبدالله</h4>
                  <p className="text-gray-600 text-sm">ربة منزل</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-4">
                "ورش التوعية الصحية علمتني الكثير عن فوائد العسل الحضرمي. الآن أستخدمه يومياً لعائلتي كغذاء وعلاج طبيعي."
              </p>
              <div className="flex gap-1 text-[#b37932]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Hadramout%20community%20celebration%2C%20people%20working%20together%2C%20social%20gathering%2C%20traditional%20village%2C%20community%20unity%2C%20collaborative%20spirit%2C%20cultural%20heritage%2C%20social%20impact%2C%20community%20empowerment%2C%20natural%20landscape%2C%20authentic%20documentary%20style%2C%20warm%20golden%20lighting&width=1920&height=600&seq=cta-initiatives&orientation=landscape"
            alt="انضم إلينا"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16372e]/90 to-[#935624]/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">كن جزءاً من التغيير</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              انضم إلينا في رحلة بناء مستقبل أفضل للمجتمع الحضرمي. معاً نستطيع أن نحدث فرقاً حقيقياً في حياة الناس والبيئة.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="whitespace-nowrap text-lg px-8 py-4"
                onClick={() => window.REACT_APP_NAVIGATE('/contact')}
              >
                <i className="ri-mail-line ml-2"></i>
                تواصل معنا
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="whitespace-nowrap border-2 border-white text-white hover:bg-white hover:text-[#16372e] text-lg px-8 py-4"
                onClick={() => window.REACT_APP_NAVIGATE('/products')}
              >
                <i className="ri-shopping-bag-line ml-2"></i>
                تعرف على منتجاتنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
