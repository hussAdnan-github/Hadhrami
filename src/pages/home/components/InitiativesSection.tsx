import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function InitiativesSection() {
  const initiatives = [
    {
      id: 1,
      title: 'دعم النحالين المحليين',
      description: 'نعمل على تمكين النحالين المحليين وتوفير الدعم الفني والمادي لهم لتطوير مهاراتهم وزيادة إنتاجهم',
      icon: 'ri-team-line',
      color: 'from-[#b37932] to-[#935624]',
      image: 'https://readdy.ai/api/search-image?query=Local%20Yemeni%20beekeepers%20working%20together%20in%20Hadramaut%20valley%2C%20traditional%20beekeeping%20community%2C%20honey%20production%2C%20mountain%20landscape%2C%20teamwork%20and%20cooperation%2C%20authentic%20Middle%20Eastern%20setting%2C%20warm%20natural%20lighting%2C%20professional%20photography&width=800&height=600&seq=initiative-beekeepers-1&orientation=landscape'
    },
    {
      id: 2,
      title: 'الحفاظ على البيئة',
      description: 'نلتزم بممارسات مستدامة للحفاظ على البيئة الطبيعية وحماية أشجار السدر والنحل البري',
      icon: 'ri-leaf-line',
      color: 'from-[#16372e] to-[#0f2620]',
      image: 'https://readdy.ai/api/search-image?query=Protected%20acacia%20trees%20and%20natural%20beehives%20in%20Hadramaut%20mountains%2C%20environmental%20conservation%2C%20sustainable%20beekeeping%2C%20green%20valleys%2C%20natural%20ecosystem%2C%20wildlife%20protection%2C%20pristine%20nature%2C%20professional%20photography&width=800&height=600&seq=initiative-environment-1&orientation=landscape'
    },
    {
      id: 3,
      title: 'التوعية الصحية',
      description: 'نقدم برامج توعوية حول فوائد العسل الطبيعي وأهميته في الحياة الصحية اليومية',
      icon: 'ri-heart-pulse-line',
      color: 'from-[#b37932] to-[#935624]',
      image: 'https://readdy.ai/api/search-image?query=Health%20awareness%20workshop%20about%20natural%20honey%20benefits%2C%20educational%20session%2C%20people%20learning%20about%20honey%20health%20benefits%2C%20modern%20presentation%2C%20professional%20setting%2C%20warm%20lighting%2C%20community%20engagement&width=800&height=600&seq=initiative-health-1&orientation=landscape'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f6f3] to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#b37932]/10 rounded-full px-4 py-2 mb-6">
            <i className="ri-hand-heart-line text-[#b37932]"></i>
            <span className="text-sm font-medium text-[#935624]">مبادراتنا</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#16372e] mb-6">
            نبني مستقبلاً
            <br />
            <span className="text-[#b37932]">أفضل معاً</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نؤمن بمسؤوليتنا تجاه المجتمع والبيئة، ونعمل على تحقيق 
            التنمية المستدامة من خلال مبادرات مجتمعية فعالة
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <Link 
              key={initiative.id}
              to={`/initiatives/${initiative.id}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className={`absolute top-6 right-6 w-16 h-16 flex items-center justify-center bg-gradient-to-br ${initiative.color} rounded-2xl shadow-lg`}>
                    <i className={`${initiative.icon} text-white text-3xl`}></i>
                  </div>

                  {/* Number */}
                  <div className="absolute bottom-6 left-6 text-white/30 text-7xl font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#16372e] mb-4 group-hover:text-[#b37932] transition-colors">
                    {initiative.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {initiative.description}
                  </p>

                  <div className="flex items-center text-[#b37932] font-medium group-hover:gap-3 transition-all">
                    <span>اقرأ المزيد</span>
                    <i className="ri-arrow-left-line mr-2 group-hover:mr-0 transition-all"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/initiatives">
            <Button variant="primary" size="lg" className="bg-[#16372e] hover:bg-[#b37932] text-white px-12 whitespace-nowrap">
              <span>جميع المبادرات المجتمعية</span>
              <i className="ri-arrow-left-line mr-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
