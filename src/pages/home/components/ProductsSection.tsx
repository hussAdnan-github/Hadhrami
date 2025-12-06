import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: 'عسل السدر الملكي',
      description: 'أجود أنواع العسل من أشجار السدر البرية',
      price: '450',
      image: 'https://readdy.ai/api/search-image?query=Premium%20royal%20Sidr%20honey%20in%20elegant%20glass%20jar%20with%20golden%20honey%20dripping%2C%20honeycomb%20pieces%2C%20acacia%20tree%20flowers%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20warm%20golden%20lighting%2C%20luxury%20presentation%2C%20high%20quality%20organic%20honey&width=600&height=700&seq=product-sidr-1&orientation=portrait',
      badge: 'الأكثر مبيعاً',
      rating: 5
    },
    {
      id: 2,
      name: 'عسل السمر الجبلي',
      description: 'عسل طبيعي من أزهار السمر الجبلية',
      price: '320',
      image: 'https://readdy.ai/api/search-image?query=Mountain%20Samar%20honey%20in%20glass%20jar%20with%20dark%20amber%20honey%2C%20mountain%20flowers%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20natural%20lighting%2C%20organic%20honey%20presentation%2C%20high%20quality&width=600&height=700&seq=product-samar-1&orientation=portrait',
      badge: 'جديد',
      rating: 5
    },
    {
      id: 3,
      name: 'عسل الشوكة',
      description: 'عسل نقي من زهور الشوكة البرية',
      price: '280',
      image: 'https://readdy.ai/api/search-image?query=Wild%20flower%20honey%20in%20glass%20jar%20with%20light%20golden%20honey%2C%20wildflowers%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20bright%20lighting%2C%20natural%20organic%20honey%2C%20high%20quality&width=600&height=700&seq=product-shawka-1&orientation=portrait',
      badge: 'مميز',
      rating: 5
    },
    {
      id: 4,
      name: 'عسل الضهيان',
      description: 'عسل فاخر من أزهار الضهيان النادرة',
      price: '380',
      image: 'https://readdy.ai/api/search-image?query=Rare%20Dhahyan%20honey%20in%20elegant%20jar%20with%20rich%20golden%20honey%2C%20rare%20flowers%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20luxury%20presentation%2C%20premium%20organic%20honey%2C%20high%20quality&width=600&height=700&seq=product-dhahyan-1&orientation=portrait',
      badge: 'حصري',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white" data-product-shop>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#b37932]/10 rounded-full px-4 py-2 mb-6">
            <i className="ri-shopping-bag-line text-[#b37932]"></i>
            <span className="text-sm font-medium text-[#935624]">منتجاتنا</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#16372e] mb-6">
            أجود أنواع
            <br />
            <span className="text-[#b37932]">العسل الحضرمي</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعتنا المتنوعة من العسل الطبيعي الأصيل، 
            المستخلص من أفضل المصادر في وديان حضرموت
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#f8f6f3] to-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-[#b37932] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {product.badge}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-[#b37932] hover:text-white transition-colors cursor-pointer">
                    <i className="ri-heart-line text-lg"></i>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-[#b37932] hover:text-white transition-colors cursor-pointer">
                    <i className="ri-eye-line text-lg"></i>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(product.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#b37932] text-sm"></i>
                  ))}
                  <span className="text-sm text-gray-500 mr-2">(128)</span>
                </div>

                <h3 className="text-xl font-bold text-[#16372e] mb-2 group-hover:text-[#b37932] transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-[#b37932]">{product.price}</span>
                    <span className="text-gray-500 text-sm mr-1">ريال</span>
                  </div>
                  
                  <Link to={`/products/${product.id}`}>
                    <button className="w-12 h-12 flex items-center justify-center bg-[#16372e] text-white rounded-xl hover:bg-[#b37932] transition-colors cursor-pointer group/btn">
                      <i className="ri-shopping-cart-line text-xl group-hover/btn:scale-110 transition-transform"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/products">
            <Button variant="primary" size="lg" className="bg-[#16372e] hover:bg-[#b37932] text-white px-12 whitespace-nowrap">
              <span>عرض جميع المنتجات</span>
              <i className="ri-arrow-left-line mr-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
