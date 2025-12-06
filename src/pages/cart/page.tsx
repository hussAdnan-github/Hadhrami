
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  size: string;
  image: string;
  inStock: boolean;
  maxQuantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'عسل السدر الملكي',
      price: 250,
      originalPrice: 300,
      quantity: 2,
      size: '500g',
      image: 'https://readdy.ai/api/search-image?query=Premium%20royal%20Sidr%20honey%20in%20elegant%20glass%20jar%2C%20golden%20amber%20color%2C%20luxury%20honey%20product%20photography%2C%20clean%20white%20background%2C%20high%20quality%20natural%20honey&width=300&height=300&seq=cart1&orientation=squarish',
      inStock: true,
      maxQuantity: 15
    },
    {
      id: 2,
      name: 'عسل السُمرة',
      price: 180,
      quantity: 1,
      size: '500g',
      image: 'https://readdy.ai/api/search-image?query=Dark%20Sumra%20honey%20in%20glass%20jar%2C%20rich%20dark%20amber%20color%2C%20natural%20honey%20product%2C%20traditional%20Yemeni%20honey%2C%20clean%20background%2C%20premium%20quality&width=300&height=300&seq=cart2&orientation=squarish',
      inStock: true,
      maxQuantity: 20
    },
    {
      id: 3,
      name: 'تمور حضرمية فاخرة',
      price: 80,
      quantity: 3,
      size: '1kg',
      image: 'https://readdy.ai/api/search-image?query=Premium%20Hadramout%20dates%20in%20elegant%20packaging%2C%20fresh%20natural%20dates%2C%20traditional%20Yemeni%20dates%2C%20high%20quality%20date%20fruits%2C%20clean%20background&width=300&height=300&seq=cart3&orientation=squarish',
      inStock: true,
      maxQuantity: 10
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{code: string, discount: number} | null>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const quantity = Math.max(1, Math.min(newQuantity, item.maxQuantity));
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    const validCodes = {
      'HADRAMEE10': 10,
      'WELCOME15': 15,
      'HONEY20': 20
    };

    if (validCodes[promoCode as keyof typeof validCodes]) {
      setAppliedPromo({
        code: promoCode,
        discount: validCodes[promoCode as keyof typeof validCodes]
      });
      setPromoCode('');
    } else {
      alert('كود الخصم غير صحيح');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);
  const promoDiscount = appliedPromo ? (subtotal * appliedPromo.discount / 100) : 0;
  const shipping = subtotal >= 200 ? 0 : 25;
  const total = subtotal - promoDiscount + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-full mb-8 mx-auto">
                <i className="ri-shopping-cart-line text-6xl text-gray-400"></i>
              </div>
              <h1 className="text-3xl font-bold text-[#16372e] mb-4">السلة فارغة</h1>
              <p className="text-gray-600 mb-8">لم تقم بإضافة أي منتجات إلى السلة بعد</p>
              <Button variant="primary" className="whitespace-nowrap">
                <a href="/products">تصفح المنتجات</a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-[#935624] hover:underline">الرئيسية</a>
            <i className="ri-arrow-left-s-line text-gray-400"></i>
            <span className="text-gray-600">سلة التسوق</span>
          </nav>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-[#16372e]">سلة التسوق</h1>
                  <span className="text-gray-600">({cartItems.length} منتج)</span>
                </div>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-[#16372e] mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">الحجم: {item.size}</p>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-[#935624]">{item.price} ريال</span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-400 line-through">{item.originalPrice} ريال</span>
                            )}
                          </div>
                          
                          {!item.inStock && (
                            <span className="text-sm text-red-500 font-medium">نفد من المخزون</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <i className="ri-subtract-line"></i>
                          </button>
                          <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.maxQuantity}
                            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <i className="ri-add-line"></i>
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="حذف المنتج"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-8 pt-6 border-t">
                  <Button variant="outline" className="whitespace-nowrap">
                    <i className="ri-arrow-right-line ml-2"></i>
                    <a href="/products">متابعة التسوق</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold text-[#16372e] mb-6">ملخص الطلب</h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    كود الخصم
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="أدخل كود الخصم"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624] text-sm"
                    />
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={applyPromoCode}
                      disabled={!promoCode.trim()}
                      className="whitespace-nowrap"
                    >
                      تطبيق
                    </Button>
                  </div>
                  
                  {appliedPromo && (
                    <div className="mt-2 flex items-center justify-between bg-green-50 p-2 rounded-lg">
                      <span className="text-sm text-green-600">
                        خصم {appliedPromo.discount}% ({appliedPromo.code})
                      </span>
                      <button
                        onClick={removePromoCode}
                        className="text-red-500 hover:text-red-700"
                      >
                        <i className="ri-close-line"></i>
                      </button>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">المجموع الفرعي</span>
                    <span className="font-semibold">{subtotal} ريال</span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>توفير</span>
                      <span>-{savings} ريال</span>
                    </div>
                  )}
                  
                  {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                      <span>خصم ({appliedPromo.code})</span>
                      <span>-{promoDiscount.toFixed(2)} ريال</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">الشحن</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'مجاني' : `${shipping} ريال`}
                    </span>
                  </div>
                  
                  {shipping > 0 && (
                    <div className="text-sm text-gray-500">
                      شحن مجاني للطلبات أكثر من 200 ريال
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-[#16372e]">المجموع الكلي</span>
                    <span className="text-[#935624]">{total.toFixed(2)} ريال</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button variant="primary" className="w-full text-lg py-4 whitespace-nowrap mb-4">
                  <a href="/checkout" className="flex items-center justify-center w-full">
                    <i className="ri-secure-payment-line ml-2"></i>
                    إتمام الطلب
                  </a>
                </Button>

                {/* Security Info */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
                    <i className="ri-shield-check-line text-green-500"></i>
                    <span>دفع آمن ومضمون</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <span>SSL محمي</span>
                    <span>•</span>
                    <span>ضمان الاسترداد</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">طرق الدفع المقبولة</h3>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">VISA</span>
                    </div>
                    <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">MC</span>
                    </div>
                    <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AMEX</span>
                    </div>
                    <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">PP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                <h3 className="font-bold text-[#16372e] mb-4">معلومات الشحن</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <i className="ri-truck-line text-[#935624] ml-2"></i>
                    <span>شحن مجاني للطلبات أكثر من 200 ريال</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-time-line text-[#935624] ml-2"></i>
                    <span>التوصيل خلال 2-5 أيام عمل</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line text-[#935624] ml-2"></i>
                    <span>توصيل لجميع أنحاء المملكة</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-customer-service-line text-[#935624] ml-2"></i>
                    <span>خدمة عملاء على مدار الساعة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
