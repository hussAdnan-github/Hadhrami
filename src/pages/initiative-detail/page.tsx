import { useParams } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function InitiativeDetailPage() {
  const { id } = useParams();

  const initiativesData: Record<string, any> = {
    'beekeepers-training': {
      title: 'تدريب النحالين الشباب',
      subtitle: 'على الممارسات الحديثة والمستدامة',
      icon: 'ri-graduation-cap-line',
      color: 'from-[#935624] to-[#b37932]',
      heroImage: 'https://readdy.ai/api/search-image?query=Young%20Yemeni%20beekeepers%20receiving%20professional%20training%20in%20modern%20sustainable%20beekeeping%20practices%2C%20educational%20workshop%20in%20Hadramout%20mountains%2C%20mentorship%20program%2C%20hands-on%20learning%2C%20traditional%20and%20modern%20techniques%2C%20community%20development%2C%20knowledge%20transfer%2C%20rural%20education%2C%20agricultural%20training%2C%20cultural%20heritage%20preservation%2C%20natural%20environment%2C%20authentic%20documentary%20style&width=1920&height=1080&seq=training-hero&orientation=landscape',
      description: 'نعمل على تأهيل جيل جديد من النحالين من خلال برامج تدريبية متخصصة في أساليب تربية النحل الحديثة، مع التركيز على الاستدامة وجودة الإنتاج. نؤمن بأن الاستثمار في الشباب هو استثمار في مستقبل حضرموت.',
      stats: [
        { label: 'متدرب سنوياً', value: '150+', icon: 'ri-user-line' },
        { label: 'ساعة تدريبية', value: '500+', icon: 'ri-time-line' },
        { label: 'برنامج متخصص', value: '12', icon: 'ri-book-line' },
        { label: 'معدل التوظيف', value: '85%', icon: 'ri-briefcase-line' }
      ],
      objectives: [
        'تأهيل جيل جديد من النحالين المحترفين',
        'نقل المعرفة التقليدية مع التقنيات الحديثة',
        'تعزيز الاستدامة في تربية النحل',
        'رفع جودة إنتاج العسل الحضرمي',
        'خلق فرص عمل للشباب في القطاع الزراعي'
      ],
      programs: [
        {
          title: 'البرنامج الأساسي',
          duration: '3 أشهر',
          description: 'تدريب شامل على أساسيات تربية النحل والممارسات الحديثة',
          topics: ['بيولوجيا النحل', 'إدارة المناحل', 'الصحة والوقاية', 'جني العسل']
        },
        {
          title: 'البرنامج المتقدم',
          duration: '6 أشهر',
          description: 'تدريب متخصص للنحالين ذوي الخبرة',
          topics: ['تربية الملكات', 'التلقيح الصناعي', 'إدارة الأعمال', 'التسويق']
        },
        {
          title: 'برنامج الإرشاد',
          duration: 'مستمر',
          description: 'متابعة ودعم مستمر للخريجين',
          topics: ['استشارات فنية', 'حل المشكلات', 'تطوير الأعمال', 'التواصل']
        }
      ],
      benefits: [
        'برامج تدريبية متخصصة في تربية النحل الحديثة',
        'ورش عمل عملية في المناحل الحقيقية',
        'شهادات معتمدة للمتدربين المتميزين',
        'متابعة ودعم مستمر بعد التدريب',
        'توفير المعدات الأساسية للمتدربين الجدد',
        'فرص تمويل لإنشاء مناحل خاصة',
        'شبكة تواصل مع نحالين محترفين',
        'وصول لأسواق تسويق العسل'
      ],
      gallery: [
        'https://readdy.ai/api/search-image?query=Beekeeping%20training%20workshop%2C%20young%20trainees%20learning%2C%20practical%20hands-on%20session%2C%20Hadramout%20mountains%2C%20educational%20program%2C%20mentor%20teaching%2C%20beekeeping%20equipment%2C%20traditional%20knowledge%20transfer&width=600&height=400&seq=training-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Beekeeping%20classroom%20session%2C%20theoretical%20training%2C%20educational%20materials%2C%20students%20taking%20notes%2C%20professional%20instructor%2C%20modern%20teaching%20methods%2C%20agricultural%20education&width=600&height=400&seq=training-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Field%20training%20in%20apiary%2C%20young%20beekeepers%20working%20with%20hives%2C%20protective%20gear%2C%20practical%20experience%2C%20mentor%20supervision%2C%20real%20beekeeping%20environment&width=600&height=400&seq=training-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Graduation%20ceremony%20for%20beekeepers%2C%20certificate%20distribution%2C%20proud%20graduates%2C%20community%20celebration%2C%20achievement%20recognition%2C%20traditional%20setting&width=600&height=400&seq=training-4&orientation=landscape'
      ],
      testimonials: [
        {
          name: 'أحمد سالم',
          role: 'خريج البرنامج الأساسي',
          text: 'البرنامج التدريبي غير حياتي تماماً. تعلمت أساليب حديثة ومستدامة في تربية النحل، والآن أملك منحلي الخاص وأنتج عسلاً عالي الجودة.',
          avatar: 'أ'
        },
        {
          name: 'خالد باحارثة',
          role: 'خريج البرنامج المتقدم',
          text: 'التدريب العملي في المناحل الحقيقية كان الأهم. تعلمت كيف أتعامل مع التحديات الواقعية وأصبحت نحالاً محترفاً.',
          avatar: 'خ'
        }
      ]
    },
    'reforestation': {
      title: 'التشجير وحماية المراعي',
      subtitle: 'دعم مبادرات التشجير وحماية المراعي الطبيعية',
      icon: 'ri-plant-line',
      color: 'from-[#16372e] to-[#1e4d3f]',
      heroImage: 'https://readdy.ai/api/search-image?query=Reforestation%20project%20in%20Hadramout%20valleys%2C%20planting%20Sidr%20and%20Samr%20trees%2C%20environmental%20conservation%2C%20natural%20pastures%20protection%2C%20flowering%20trees%20for%20bees%2C%20sustainable%20agriculture%2C%20ecological%20preservation%2C%20mountain%20landscape%2C%20green%20initiative%2C%20biodiversity%20conservation%2C%20community%20volunteers%20planting%20trees%2C%20natural%20habitat%20restoration%2C%20environmental%20sustainability%2C%20authentic%20documentary%20style&width=1920&height=1080&seq=reforestation-hero&orientation=landscape',
      description: 'نسهم في الحفاظ على البيئة من خلال زراعة الأشجار وحماية المراعي التي تُعد مصدرًا أساسيًا لغذاء النحل، مما يعزز جودة العسل ويضمن استدامة البيئة. نعمل على استعادة التوازن البيئي في حضرموت.',
      stats: [
        { label: 'شجرة مزروعة', value: '5000+', icon: 'ri-seedling-line' },
        { label: 'هكتار محمي', value: '1000+', icon: 'ri-map-pin-line' },
        { label: 'موقع طبيعي', value: '25', icon: 'ri-landscape-line' },
        { label: 'متطوع', value: '200+', icon: 'ri-team-line' }
      ],
      objectives: [
        'زراعة أشجار السدر والسمر في المناطق الجبلية',
        'حماية المراعي الطبيعية من التعديات',
        'إنشاء محميات طبيعية لتربية النحل',
        'تعزيز التنوع البيولوجي في المنطقة',
        'مكافحة التصحر والحفاظ على التربة'
      ],
      programs: [
        {
          title: 'برنامج زراعة السدر',
          duration: 'موسمي',
          description: 'زراعة أشجار السدر في المواقع المناسبة',
          topics: ['اختيار المواقع', 'إعداد التربة', 'الزراعة', 'الرعاية']
        },
        {
          title: 'برنامج حماية المراعي',
          duration: 'مستمر',
          description: 'حماية المراعي الطبيعية من الرعي الجائر',
          topics: ['المسح الميداني', 'التسييج', 'المراقبة', 'التوعية']
        },
        {
          title: 'برنامج المحميات',
          duration: 'طويل الأمد',
          description: 'إنشاء وإدارة محميات طبيعية',
          topics: ['التخطيط', 'التنفيذ', 'الإدارة', 'التطوير']
        }
      ],
      benefits: [
        'زراعة أشجار السدر والسمر في المناطق الجبلية',
        'حماية المراعي الطبيعية من التعديات',
        'إنشاء محميات طبيعية لتربية النحل',
        'تنظيم حملات تشجير مجتمعية',
        'مراقبة ومتابعة نمو الأشجار المزروعة',
        'توفير مصادر غذاء وفيرة للنحل',
        'تحسين جودة العسل المنتج',
        'المساهمة في مكافحة التغير المناخي'
      ],
      gallery: [
        'https://readdy.ai/api/search-image?query=Tree%20planting%20campaign%2C%20volunteers%20planting%20Sidr%20trees%2C%20community%20participation%2C%20environmental%20conservation%2C%20Hadramout%20landscape%2C%20green%20initiative%2C%20teamwork&width=600&height=400&seq=reforestation-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Natural%20pastures%20protection%2C%20fenced%20area%2C%20flowering%20plants%2C%20bee-friendly%20environment%2C%20biodiversity%20conservation%2C%20ecological%20preservation&width=600&height=400&seq=reforestation-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Young%20Sidr%20trees%20growing%2C%20successful%20reforestation%2C%20green%20landscape%2C%20environmental%20restoration%2C%20sustainable%20agriculture%2C%20natural%20habitat&width=600&height=400&seq=reforestation-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Natural%20reserve%20for%20beekeeping%2C%20protected%20area%2C%20flowering%20trees%2C%20bees%20foraging%2C%20ecological%20balance%2C%20environmental%20sustainability&width=600&height=400&seq=reforestation-4&orientation=landscape'
      ],
      testimonials: [
        {
          name: 'محمد باحارثة',
          role: 'مزارع ومتطوع',
          text: 'مبادرة التشجير أعادت الحياة لأرضنا. زرعنا مئات الأشجار وأصبحت المنطقة أكثر خضرة، والنحل يجد غذاءه بوفرة.',
          avatar: 'م'
        },
        {
          name: 'سالم بن عمر',
          role: 'نحال',
          text: 'بعد حماية المراعي، لاحظت تحسناً كبيراً في إنتاج العسل. الأزهار أصبحت أكثر وفرة والنحل أكثر نشاطاً.',
          avatar: 'س'
        }
      ]
    },
    'community-development': {
      title: 'التنمية المجتمعية',
      subtitle: 'مشاريع تنموية لتحسين سبل العيش',
      icon: 'ri-community-line',
      color: 'from-[#b37932] to-[#c89350]',
      heroImage: 'https://readdy.ai/api/search-image?query=Community%20development%20projects%20in%20rural%20Hadramout%20villages%2C%20infrastructure%20improvement%2C%20local%20people%20working%20together%2C%20agricultural%20equipment%20distribution%2C%20small%20business%20support%2C%20rural%20development%2C%20social%20initiatives%2C%20community%20empowerment%2C%20traditional%20Yemeni%20village%2C%20collaborative%20work%2C%20sustainable%20livelihood%2C%20social%20impact%2C%20community%20building%2C%20authentic%20documentary%20style&width=1920&height=1080&seq=community-hero&orientation=landscape',
      description: 'نشارك في مبادرات تخدم المجتمع مثل تطوير البنية الزراعية، توفير المعدات للنحالين، ودعم المشروعات الصغيرة المرتبطة بالقطاع الزراعي. نؤمن بأن التنمية الحقيقية تبدأ من المجتمع.',
      stats: [
        { label: 'قرية مستفيدة', value: '20+', icon: 'ri-home-line' },
        { label: 'مشروع صغير', value: '50+', icon: 'ri-briefcase-line' },
        { label: 'أسرة مستفيدة', value: '300+', icon: 'ri-team-line' },
        { label: 'فرصة عمل', value: '120+', icon: 'ri-user-star-line' }
      ],
      objectives: [
        'تطوير البنية التحتية الزراعية في القرى',
        'توفير المعدات الحديثة للنحالين',
        'دعم المشروعات الصغيرة والمتوسطة',
        'تمويل مشاريع تربية النحل للشباب',
        'بناء مراكز تجميع وتعبئة العسل'
      ],
      programs: [
        {
          title: 'برنامج البنية التحتية',
          duration: 'مستمر',
          description: 'تطوير البنية الزراعية في القرى',
          topics: ['الطرق الزراعية', 'مصادر المياه', 'مراكز التجميع', 'التخزين']
        },
        {
          title: 'برنامج المعدات',
          duration: 'سنوي',
          description: 'توفير المعدات الحديثة للنحالين',
          topics: ['خلايا النحل', 'أدوات الجني', 'معدات التعبئة', 'النقل']
        },
        {
          title: 'برنامج التمويل',
          duration: 'مستمر',
          description: 'دعم المشروعات الصغيرة',
          topics: ['قروض ميسرة', 'منح', 'استشارات', 'متابعة']
        }
      ],
      benefits: [
        'تطوير البنية التحتية الزراعية في القرى',
        'توفير المعدات الحديثة للنحالين',
        'دعم المشروعات الصغيرة والمتوسطة',
        'تمويل مشاريع تربية النحل للشباب',
        'بناء مراكز تجميع وتعبئة العسل',
        'تدريب على إدارة الأعمال',
        'ربط المنتجين بالأسواق',
        'خلق فرص عمل مستدامة'
      ],
      gallery: [
        'https://readdy.ai/api/search-image?query=Infrastructure%20development%20in%20rural%20village%2C%20road%20construction%2C%20community%20project%2C%20local%20workers%2C%20rural%20development%2C%20agricultural%20infrastructure&width=600&height=400&seq=community-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Equipment%20distribution%20to%20beekeepers%2C%20modern%20beekeeping%20tools%2C%20community%20support%2C%20agricultural%20equipment%2C%20empowerment%20program&width=600&height=400&seq=community-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Small%20business%20training%2C%20entrepreneurship%20workshop%2C%20community%20members%20learning%2C%20business%20development%2C%20economic%20empowerment&width=600&height=400&seq=community-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Honey%20collection%20center%2C%20modern%20facility%2C%20community%20infrastructure%2C%20agricultural%20processing%2C%20quality%20control%2C%20rural%20development&width=600&height=400&seq=community-4&orientation=landscape'
      ],
      testimonials: [
        {
          name: 'عبدالله سعيد',
          role: 'صاحب مشروع صغير',
          text: 'بفضل الدعم المقدم، تمكنت من إنشاء منحلي الخاص وتوظيف ثلاثة شباب من القرية. المشروع غير حياتنا جميعاً.',
          avatar: 'ع'
        },
        {
          name: 'حسين باعباد',
          role: 'مستفيد من البنية التحتية',
          text: 'الطريق الزراعي الجديد سهل علينا نقل العسل للأسواق. الآن نستطيع الوصول للمنحل في أي وقت.',
          avatar: 'ح'
        }
      ]
    },
    'health-awareness': {
      title: 'نشر الوعي الصحي',
      subtitle: 'التعريف بفوائد العسل الحضرمي',
      icon: 'ri-heart-pulse-line',
      color: 'from-[#935624] to-[#16372e]',
      heroImage: 'https://readdy.ai/api/search-image?query=Health%20awareness%20campaign%20about%20Hadramout%20honey%20benefits%2C%20educational%20workshop%2C%20community%20health%20program%2C%20traditional%20medicine%20knowledge%20sharing%2C%20cultural%20presentation%2C%20wellness%20seminar%2C%20natural%20health%20products%2C%20health%20promotion%2C%20traditional%20knowledge%2C%20natural%20remedies%2C%20community%20education%2C%20cultural%20heritage%2C%20authentic%20documentary%20style&width=1920&height=1080&seq=health-hero&orientation=landscape',
      description: 'نُطلق حملات تثقيفية للتعريف بقيمة العسل الحضرمي، من حيث فوائده الصحية وأهميته الثقافية، بهدف تعزيز مكانته في السوق ورفع الوعي المجتمعي. نؤمن بأن المعرفة هي أساس الصحة.',
      stats: [
        { label: 'شخص مستفيد', value: '10000+', icon: 'ri-user-heart-line' },
        { label: 'حملة توعوية', value: '30+', icon: 'ri-megaphone-line' },
        { label: 'ورشة عمل', value: '50+', icon: 'ri-presentation-line' },
        { label: 'مدرسة', value: '15', icon: 'ri-school-line' }
      ],
      objectives: [
        'نشر الوعي بالفوائد الصحية للعسل الحضرمي',
        'التعريف بالقيمة الثقافية والتراثية للعسل',
        'تعليم طرق الاستخدام الصحيحة',
        'مكافحة الغش التجاري',
        'تعزيز مكانة العسل الحضرمي في السوق'
      ],
      programs: [
        {
          title: 'برنامج المدارس',
          duration: 'سنوي',
          description: 'حملات توعوية في المدارس والجامعات',
          topics: ['الفوائد الصحية', 'التراث الثقافي', 'الاستخدام الصحيح', 'الجودة']
        },
        {
          title: 'برنامج الورش',
          duration: 'شهري',
          description: 'ورش عمل متخصصة للمجتمع',
          topics: ['التغذية', 'العلاج الطبيعي', 'الوقاية', 'الجودة']
        },
        {
          title: 'برنامج الإعلام',
          duration: 'مستمر',
          description: 'نشر المحتوى التثقيفي',
          topics: ['وسائل التواصل', 'الإعلام المحلي', 'المطبوعات', 'الفيديو']
        }
      ],
      benefits: [
        'حملات توعوية في المدارس والجامعات',
        'ورش عمل حول الفوائد الصحية للعسل',
        'نشر المحتوى التثقيفي عبر وسائل الإعلام',
        'تنظيم معارض ومهرجانات العسل',
        'التعاون مع المؤسسات الصحية',
        'إصدار مطبوعات تثقيفية',
        'تدريب على التمييز بين العسل الأصلي والمغشوش',
        'نشر الوصفات الصحية'
      ],
      gallery: [
        'https://readdy.ai/api/search-image?query=Health%20awareness%20workshop%2C%20community%20gathering%2C%20educational%20presentation%2C%20health%20promotion%2C%20traditional%20medicine%2C%20natural%20remedies%2C%20cultural%20knowledge%20sharing&width=600&height=400&seq=health-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=School%20awareness%20campaign%2C%20students%20learning%20about%20honey%20benefits%2C%20educational%20program%2C%20health%20education%2C%20youth%20engagement&width=600&height=400&seq=health-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Honey%20festival%2C%20community%20event%2C%20cultural%20celebration%2C%20product%20exhibition%2C%20traditional%20market%2C%20social%20gathering&width=600&height=400&seq=health-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Health%20consultation%2C%20traditional%20medicine%20expert%2C%20community%20health%20program%2C%20wellness%20advice%2C%20natural%20health%20products&width=600&height=400&seq=health-4&orientation=landscape'
      ],
      testimonials: [
        {
          name: 'فاطمة عبدالله',
          role: 'ربة منزل',
          text: 'ورش التوعية الصحية علمتني الكثير عن فوائد العسل الحضرمي. الآن أستخدمه يومياً لعائلتي كغذاء وعلاج طبيعي.',
          avatar: 'ف'
        },
        {
          name: 'د. علي الكثيري',
          role: 'طبيب',
          text: 'المعلومات المقدمة في الورش علمية ودقيقة. أنصح مرضاي باستخدام العسل الحضرمي كمكمل غذائي طبيعي.',
          avatar: 'د'
        }
      ]
    }
  };

  const initiative = initiativesData[id || ''];

  if (!initiative) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#16372e] mb-6">المبادرة غير موجودة</h1>
          <Button onClick={() => window.REACT_APP_NAVIGATE('/initiatives')}>
            العودة للمبادرات
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={initiative.heroImage}
            alt={initiative.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="mb-8">
            <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${initiative.color} rounded-full mb-6 shadow-2xl`}>
              <i className={`${initiative.icon} text-5xl text-white`}></i>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {initiative.title}
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed mb-12">
            {initiative.subtitle}
          </p>
          <div className="flex justify-center">
            <div className="animate-bounce">
              <i className="ri-arrow-down-line text-4xl"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-8">
                نظرة عامة
              </h2>
              <div className="w-24 h-1 bg-[#935624] mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                {initiative.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {initiative.stats.map((stat: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${initiative.color} rounded-full mx-auto mb-4`}>
                    <i className={`${stat.icon} text-3xl text-white`}></i>
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${initiative.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-8">
                أهدافنا
              </h2>
              <div className="w-24 h-1 bg-[#935624] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initiative.objectives.map((objective: string, index: number) => (
                <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${initiative.color} rounded-full flex-shrink-0`}>
                    <i className="ri-checkbox-circle-fill text-2xl text-white"></i>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed pt-2">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-8">
                برامجنا
              </h2>
              <div className="w-24 h-1 bg-[#935624] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {initiative.programs.map((program: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className={`h-3 bg-gradient-to-r ${initiative.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${initiative.color} rounded-full mb-6`}>
                      <span className="text-3xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#16372e] mb-3">
                      {program.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#935624] mb-4">
                      <i className="ri-time-line"></i>
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <div className="space-y-2">
                      {program.topics.map((topic: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <i className="ri-arrow-left-s-line text-[#935624]"></i>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-8">
                ما نقدمه
              </h2>
              <div className="w-24 h-1 bg-[#935624] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initiative.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-10 h-10 flex items-center justify-center bg-gradient-to-br ${initiative.color} rounded-full flex-shrink-0`}>
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-8">
                معرض الصور
              </h2>
              <div className="w-24 h-1 bg-[#935624] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiative.gallery.map((image: string, index: number) => (
                <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={image}
                    alt={`${initiative.title} - صورة ${index + 1}`}
                    className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-8">
                شهادات المستفيدين
              </h2>
              <div className="w-24 h-1 bg-[#935624] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiative.testimonials.map((testimonial: any, index: number) => (
                <div key={index} className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border-t-4 border-[#935624] hover:shadow-2xl transition-shadow duration-300`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#16372e] text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex gap-1 text-[#935624]">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`relative py-20 overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#16372e] to-[#935624]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">انضم إلى المبادرة</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              كن جزءاً من التغيير الإيجابي في مجتمعنا الحضرمي
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
                onClick={() => window.REACT_APP_NAVIGATE('/initiatives')}
              >
                <i className="ri-arrow-right-line ml-2"></i>
                المبادرات الأخرى
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
