import { Link } from 'react-router-dom';

export default function GallerySection() {
  const galleryItems = [
    {
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Yemeni%20beekeeper%20in%20protective%20suit%20working%20with%20natural%20beehives%20in%20Hadramaut%20mountains%2C%20authentic%20beekeeping%20process%2C%20mountain%20valley%20landscape%2C%20golden%20hour%20lighting%2C%20professional%20photography%2C%20heritage%20craftsmanship&width=800&height=600&seq=gallery-1&orientation=landscape',
      title: 'النحالة التقليدية',
      category: 'عملنا'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Golden%20honey%20dripping%20from%20honeycomb%20with%20wooden%20dipper%2C%20close-up%20macro%20photography%2C%20natural%20organic%20honey%2C%20warm%20golden%20lighting%2C%20premium%20quality%2C%20professional%20food%20photography&width=600&height=800&seq=gallery-2&orientation=portrait',
      title: 'العسل الذهبي',
      category: 'منتجاتنا'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20acacia%20trees%20in%20Hadramaut%20valley%20with%20mountains%20in%20background%2C%20natural%20beekeeping%20environment%2C%20serene%20landscape%2C%20golden%20hour%2C%20pristine%20nature%2C%20professional%20landscape%20photography&width=800&height=600&seq=gallery-3&orientation=landscape',
      title: 'وديان حضرموت',
      category: 'مصادرنا'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Premium%20honey%20jars%20collection%20on%20wooden%20table%2C%20elegant%20product%20display%2C%20natural%20lighting%2C%20rustic%20setting%2C%20professional%20product%20photography%2C%20luxury%20presentation&width=600&height=800&seq=gallery-4&orientation=portrait',
      title: 'منتجاتنا المميزة',
      category: 'منتجاتنا'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Natural%20beehives%20in%20acacia%20trees%2C%20wild%20bees%20working%2C%20Hadramaut%20mountains%20landscape%2C%20natural%20ecosystem%2C%20sustainable%20beekeeping%2C%20professional%20nature%20photography&width=800&height=600&seq=gallery-5&orientation=landscape',
      title: 'النحل البري',
      category: 'الطبيعة'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#b37932]/10 rounded-full px-4 py-2 mb-6">
            <i className="ri-image-line text-[#b37932]"></i>
            <span className="text-sm font-medium text-[#935624]">معرض الصور</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#16372e] mb-6">
            رحلة العسل
            <br />
            <span className="text-[#b37932]">من الطبيعة إليك</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            شاهد رحلة إنتاج العسل من الوديان الحضرمية إلى منزلك
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large Item */}
          <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer">
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-8 right-8 text-white">
                <div className="text-sm font-medium mb-2 text-[#b37932]">{galleryItems[0].category}</div>
                <h3 className="text-3xl font-bold">{galleryItems[0].title}</h3>
              </div>
            </div>
          </div>

          {/* Small Items */}
          {galleryItems.slice(1).map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                index === 1 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 right-6 text-white">
                  <div className="text-xs font-medium mb-1 text-[#b37932]">{item.category}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#b37932] to-[#935624] rounded-2xl mx-auto mb-4">
              <i className="ri-map-pin-line text-white text-3xl"></i>
            </div>
            <div className="text-4xl font-bold text-[#16372e] mb-2">15+</div>
            <div className="text-gray-600">وادٍ حضرمي</div>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#16372e] to-[#0f2620] rounded-2xl mx-auto mb-4">
              <i className="ri-plant-line text-white text-3xl"></i>
            </div>
            <div className="text-4xl font-bold text-[#16372e] mb-2">1000+</div>
            <div className="text-gray-600">شجرة سدر</div>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#b37932] to-[#935624] rounded-2xl mx-auto mb-4">
              <i className="ri-community-line text-white text-3xl"></i>
            </div>
            <div className="text-4xl font-bold text-[#16372e] mb-2">200+</div>
            <div className="text-gray-600">نحال محلي</div>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#16372e] to-[#0f2620] rounded-2xl mx-auto mb-4">
              <i className="ri-award-line text-white text-3xl"></i>
            </div>
            <div className="text-4xl font-bold text-[#16372e] mb-2">50K+</div>
            <div className="text-gray-600">عميل سعيد</div>
          </div>
        </div>
      </div>
    </section>
  );
}
