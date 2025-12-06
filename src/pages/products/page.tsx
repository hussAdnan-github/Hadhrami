import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function ProductsPage() {
  const products = [
    {
      id: 'sidr-royal',
      name: 'عسل السدر الملكي',
      description: 'أجود وأغلى أنواع العسل، ذو نكهة فريدة وقيمة غذائية عالية.',
      image: 'https://readdy.ai/api/search-image?query=Premium%20royal%20Sidr%20honey%20in%20elegant%20glass%20jar%20with%20golden%20amber%20color%20on%20simple%20clean%20white%20background%2C%20luxury%20honey%20product%20photography%2C%20high%20quality%20natural%20honey%20from%20Yemen%20Hadramout%2C%20traditional%20artisanal%20honey%20packaging%2C%20professional%20product%20shot%20with%20detailed%20honey%20texture%20visible&width=600&height=600&seq=sidr1&orientation=squarish',
      badge: 'الأفخر',
      color: 'from-amber-600 to-yellow-700',
      features: ['نكهة فريدة لا تُضاهى', 'قيمة غذائية عالية جداً', 'خصائص علاجية مثبتة', 'من أشجار السدر البرية']
    },
    {
      id: 'sumra',
      name: 'عسل السُمرة',
      description: 'بلونه الداكن وطعمه المميز، يأتي في المرتبة الثانية بعد السدر.',
      image: 'https://readdy.ai/api/search-image?query=Dark%20Sumra%20honey%20in%20glass%20jar%20with%20rich%20dark%20amber%20color%20on%20simple%20clean%20white%20background%2C%20natural%20honey%20product%20from%20Yemen%2C%20traditional%20Yemeni%20honey%20packaging%2C%20premium%20quality%20honey%20with%20visible%20texture%2C%20professional%20food%20photography&width=600&height=600&seq=sumra1&orientation=squarish',
      badge: 'مميز',
      color: 'from-amber-800 to-amber-900',
      features: ['لون داكن مميز', 'طعم غني وقوي', 'غني بالمعادن', 'فوائد صحية متعددة']
    },
    {
      id: 'meadow',
      name: 'عسل المراعي',
      description: 'يُنتج من أزهار متنوعة، يحمل مذاقًا مختلفًا مع كل موسم.',
      image: 'https://readdy.ai/api/search-image?query=Multi-floral%20meadow%20honey%20in%20glass%20jar%20with%20light%20golden%20color%20on%20simple%20clean%20white%20background%2C%20natural%20wildflower%20honey%20from%20Yemen%2C%20seasonal%20honey%20variety%2C%20organic%20honey%20product%20with%20visible%20texture%2C%20professional%20product%20photography&width=600&height=600&seq=meadow1&orientation=squarish',
      badge: 'موسمي',
      color: 'from-yellow-500 to-amber-600',
      features: ['من أزهار متنوعة', 'طعم متغير حسب الموسم', 'غني بالفيتامينات', 'قيمة ممتازة']
    },
    {
      id: 'square',
      name: 'العسل المربعي',
      description: 'نوع نادر يُنتج في مواسم استثنائية ومصدر أزهار أشجار السدر.',
      image: 'https://readdy.ai/api/search-image?query=Rare%20seasonal%20Sidr%20honey%20in%20premium%20jar%20with%20exceptional%20golden%20color%20on%20simple%20clean%20white%20background%2C%20limited%20edition%20honey%20product%20from%20Yemen%2C%20luxury%20natural%20honey%2C%20exclusive%20artisanal%20honey%20with%20visible%20texture%2C%20professional%20photography&width=600&height=600&seq=square1&orientation=squarish',
      badge: 'نادر',
      color: 'from-orange-600 to-red-700',
      features: ['نوع نادر ومحدود', 'إنتاج موسمي استثنائي', 'جودة فائقة', 'كمية محدودة']
    },
    {
      id: 'summer',
      name: 'العسل الصيفي',
      description: 'يحمل بصمة أرض حضرموت الحارة ويُنتج في فصل الصيف.',
      image: 'https://readdy.ai/api/search-image?query=Summer%20honey%20in%20jar%20with%20light%20golden%20color%20on%20simple%20clean%20white%20background%2C%20seasonal%20summer%20honey%20from%20Hadramout%20Yemen%2C%20natural%20organic%20honey%20product%2C%20affordable%20quality%20honey%20with%20visible%20texture%2C%20professional%20food%20photography&width=600&height=600&seq=summer1&orientation=squarish',
      badge: 'صيفي',
      color: 'from-yellow-400 to-orange-500',
      features: ['إنتاج صيفي', 'متوفر على مدار السنة', 'جودة موثوقة', 'قيمة ممتازة']
    }
  ];

  const naturalProducts = [
    {
      id: 6,
      name: 'مسحوق السدر',
      description: 'مستخلص طبيعي من أوراق السدر، يُستخدم للعناية بالشعر والبشرة',
      image: 'https://readdy.ai/api/search-image?query=Natural%20Sidr%20powder%20in%20elegant%20packaging%20on%20clean%20white%20background%2C%20organic%20Sidr%20leaf%20powder%2C%20traditional%20hair%20and%20skin%20care%20product%2C%20natural%20beauty%20product%20from%20Yemen%2C%20pure%20herbal%20powder%2C%20authentic%20Middle%20Eastern%20beauty%20care&width=500&height=500&seq=sidr-powder&orientation=squarish',
      icon: 'ri-leaf-line',
      color: 'from-green-600 to-teal-700'
    },
    {
      id: 7,
      name: 'الحناء',
      description: 'حناء طبيعية نقية، تمنح الشعر لونًا غنيًا ولمعانًا صحيًا',
      image: 'https://readdy.ai/api/search-image?query=Pure%20natural%20henna%20powder%20in%20traditional%20packaging%20on%20clean%20white%20background%2C%20organic%20henna%20for%20hair%2C%20natural%20hair%20dye%20product%2C%20traditional%20Middle%20Eastern%20henna%2C%20authentic%20beauty%20product%2C%20herbal%20hair%20care&width=500&height=500&seq=henna-product&orientation=squarish',
      icon: 'ri-paint-brush-line',
      color: 'from-red-700 to-orange-800'
    },
    {
      id: 8,
      name: 'اللبان الشحري',
      description: 'نوع فاخر من اللبان، يتميز برائحته الزكية ونقائه العالي، ويُستخدم للبخور والعلاج',
      image: 'https://readdy.ai/api/search-image?query=Premium%20Shehri%20frankincense%20resin%20on%20clean%20white%20background%2C%20luxury%20incense%20from%20Yemen%2C%20natural%20aromatic%20resin%2C%20traditional%20Middle%20Eastern%20frankincense%2C%20pure%20high%20quality%20luban%2C%20authentic%20Arabian%20incense&width=500&height=500&seq=frankincense&orientation=squarish',
      icon: 'ri-fire-line',
      color: 'from-amber-700 to-yellow-800'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=Beautiful%20Hadramout%20valley%20landscape%20with%20honey%20production%2C%20traditional%20Yemeni%20beekeeping%20in%20mountains%2C%20natural%20honey%20farms%20in%20valleys%2C%20authentic%20Middle%20Eastern%20honey%20production%2C%20scenic%20mountain%20valleys%20with%20wildflowers%2C%20traditional%20agriculture%20in%20Yemen&width=1920&height=1080&seq=products-hero&orientation=landscape')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-0.5 bg-[#935624]"></div>
              <i className="ri-plant-line text-5xl text-[#935624]"></i>
              <div className="w-16 h-0.5 bg-[#935624]"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">منتجاتنا الطبيعية</h1>
          <p className="text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light">
            كنوز طبيعية من قلب حضرموت، نقدمها لكم بأعلى معايير الجودة والأصالة
          </p>
          <div className="mt-12">
            <i className="ri-arrow-down-line text-4xl animate-bounce"></i>
          </div>
        </div>
      </section>

      {/* Honey Products Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-0.5 bg-[#935624]"></div>
                <i className="ri-drop-line text-4xl text-[#935624]"></i>
                <div className="w-12 h-0.5 bg-[#935624]"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-6">العسل الحضرمي بأنواعه</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              مجموعة متنوعة من أجود أنواع العسل الطبيعي، كل نوع يحمل قصة وطعمًا فريدًا من أرض حضرموت
            </p>
          </div>

          {/* Honey Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-product-shop
              >
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${product.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {product.badge}
                  </div>
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* View Details Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a 
                      href={`/products/${product.id}`}
                      className={`bg-white text-[#16372e] px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center whitespace-nowrap`}
                    >
                      <i className="ri-eye-line ml-2"></i>
                      عرض التفاصيل
                    </a>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#16372e] mb-3 group-hover:text-[#935624] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <i className="ri-check-line text-green-600 ml-2 mt-1 flex-shrink-0"></i>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a 
                    href={`/products/${product.id}`}
                    className={`w-full inline-flex items-center justify-center bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}
                  >
                    <i className="ri-information-line ml-2"></i>
                    اعرف المزيد
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Badge */}
          <div className="bg-gradient-to-r from-[#16372e] to-[#935624] rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="flex items-center justify-center space-x-6 flex-wrap gap-4">
              <div className="flex items-center">
                <i className="ri-shield-check-line text-3xl ml-3"></i>
                <span className="text-lg font-semibold">جودة مضمونة</span>
              </div>
              <div className="w-px h-8 bg-white/30 hidden md:block"></div>
              <div className="flex items-center">
                <i className="ri-leaf-line text-3xl ml-3"></i>
                <span className="text-lg font-semibold">طبيعي 100%</span>
              </div>
              <div className="w-px h-8 bg-white/30 hidden md:block"></div>
              <div className="flex items-center">
                <i className="ri-award-line text-3xl ml-3"></i>
                <span className="text-lg font-semibold">معايير عالمية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Products Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-0.5 bg-[#935624]"></div>
                <i className="ri-seedling-line text-4xl text-[#935624]"></i>
                <div className="w-12 h-0.5 bg-[#935624]"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#16372e] mb-6">منتجات طبيعية أخرى</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              كنوز طبيعية إضافية من أرض حضرموت، للعناية والجمال والصحة
            </p>
          </div>

          {/* Natural Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {naturalProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Icon Overlay */}
                  <div className={`absolute top-4 right-4 w-16 h-16 flex items-center justify-center bg-gradient-to-br ${product.color} rounded-full shadow-lg`}>
                    <i className={`${product.icon} text-white text-2xl`}></i>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#16372e] mb-3 group-hover:text-[#935624] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-[#16372e] to-[#935624]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">لماذا تختار منتجاتنا؟</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              نلتزم بأعلى معايير الجودة في كل مرحلة من مراحل الإنتاج
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-shield-check-line',
                title: 'معايير عالمية',
                description: 'نطبق أعلى معايير سلامة الغذاء العالمية في جميع منتجاتنا'
              },
              {
                icon: 'ri-leaf-line',
                title: 'طبيعي 100%',
                description: 'منتجات طبيعية خالية تمامًا من المواد الحافظة والإضافات'
              },
              {
                icon: 'ri-award-line',
                title: 'جودة مضمونة',
                description: 'فحص دقيق ومراقبة صارمة لكل منتج قبل الوصول إليك'
              },
              {
                icon: 'ri-map-pin-line',
                title: 'من حضرموت',
                description: 'منتجات أصيلة من قلب وديان حضرموت الخلابة'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mb-6 mx-auto shadow-lg">
                  <i className={`${item.icon} text-[#935624] text-4xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 text-center shadow-xl">
            <i className="ri-customer-service-2-line text-6xl text-[#935624] mb-6"></i>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16372e] mb-6">
              هل لديك استفسار عن منتجاتنا؟
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              فريقنا جاهز للإجابة على جميع أسئلتك ومساعدتك في اختيار المنتج المناسب
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#935624] to-[#16372e] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <i className="ri-message-3-line ml-2"></i>
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
