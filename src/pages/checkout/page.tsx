
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  buildingNumber: string;
  additionalNumber: string;
}

interface PaymentInfo {
  method: 'card' | 'bank' | 'cod';
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
    buildingNumber: '',
    additionalNumber: ''
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    method: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // بيانات السلة (في التطبيق الحقيقي ستأتي من state management)
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: 'عسل السدر الملكي',
      price: 250,
      quantity: 2,
      size: '500g',
      image: 'https://readdy.ai/api/search-image?query=Premium%20royal%20Sidr%20honey%20in%20elegant%20glass%20jar%2C%20golden%20amber%20color%2C%20luxury%20honey%20product%20photography%2C%20clean%20white%20background%2C%20high%20quality%20natural%20honey&width=100&height=100&seq=checkout1&orientation=squarish'
    },
    {
      id: 2,
      name: 'عسل السُمرة',
      price: 180,
      quantity: 1,
      size: '500g',
      image: 'https://readdy.ai/api/search-image?query=Dark%20Sumra%20honey%20in%20glass%20jar%2C%20rich%20dark%20amber%20color%2C%20natural%20honey%20product%2C%20traditional%20Yemeni%20honey%2C%20clean%20background%2C%20premium%20quality&width=100&height=100&seq=checkout2&orientation=squarish'
    }
  ];

  const saudiRegions = [
    'الرياض', 'مكة المكرمة', 'المدينة المنورة', 'القصيم', 'المنطقة الشرقية',
    'عسير', 'تبوك', 'حائل', 'الحدود الشمالية', 'جازان', 'نجران', 'الباحة', 'الجوف'
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 25;
  const tax = subtotal * 0.15; // ضريبة القيمة المضافة 15%
  const total = subtotal + shipping + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateShippingInfo()) {
      setCurrentStep(2);
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePaymentInfo()) {
      setCurrentStep(3);
    }
  };

  const validateShippingInfo = () => {
    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'region'];
    return required.every(field => shippingInfo[field as keyof ShippingInfo]);
  };

  const validatePaymentInfo = () => {
    if (paymentInfo.method === 'cod') return true;
    if (paymentInfo.method === 'card') {
      return paymentInfo.cardNumber && paymentInfo.expiryDate && paymentInfo.cvv && paymentInfo.cardName;
    }
    return true;
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-[#935624] hover:underline">الرئيسية</a>
            <i className="ri-arrow-left-s-line text-gray-400"></i>
            <a href="/cart" className="text-[#935624] hover:underline">سلة التسوق</a>
            <i className="ri-arrow-left-s-line text-gray-400"></i>
            <span className="text-gray-600">إتمام الطلب</span>
          </nav>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-8">
              {[
                { step: 1, title: 'معلومات الشحن', icon: 'ri-truck-line' },
                { step: 2, title: 'طريقة الدفع', icon: 'ri-bank-card-line' },
                { step: 3, title: 'تأكيد الطلب', icon: 'ri-check-line' }
              ].map((item) => (
                <div key={item.step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    currentStep >= item.step 
                      ? 'bg-[#935624] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <span className={`mr-3 font-medium ${
                    currentStep >= item.step ? 'text-[#935624]' : 'text-gray-500'
                  }`}>
                    {item.title}
                  </span>
                  {item.step < 3 && (
                    <div className={`w-16 h-1 mx-4 ${
                      currentStep > item.step ? 'bg-[#935624]' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-[#16372e] mb-6">معلومات الشحن</h2>
                  
                  <form onSubmit={handleShippingSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الاسم الأول *
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.firstName}
                          onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                          placeholder="أدخل الاسم الأول"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الاسم الأخير *
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.lastName}
                          onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                          placeholder="أدخل الاسم الأخير"
                        />
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          البريد الإلكتروني *
                        </label>
                        <input
                          type="email"
                          required
                          value={shippingInfo.email}
                          onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                          placeholder="example@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          رقم الجوال *
                        </label>
                        <input
                          type="tel"
                          required
                          value={shippingInfo.phone}
                          onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                          placeholder="05xxxxxxxx"
                        />
                      </div>
                    </div>

                    {/* Address Info */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        العنوان التفصيلي *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                        placeholder="اسم الشارع، رقم المبنى، الحي"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          المدينة *
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                          placeholder="اسم المدينة"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          المنطقة *
                        </label>
                        <select
                          required
                          value={shippingInfo.region}
                          onChange={(e) => setShippingInfo({...shippingInfo, region: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624] pr-8"
                        >
                          <option value="">اختر المنطقة</option>
                          {saudiRegions.map((region) => (
                            <option key={region} value={region}>{region}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الرمز البريدي
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.postalCode}
                          onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                          placeholder="12345"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          رقم المبنى
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.buildingNumber}
                          onChange={(e) => setShippingInfo({...shippingInfo, buildingNumber: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                          placeholder="1234"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الرقم الإضافي
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.additionalNumber}
                          onChange={(e) => setShippingInfo({...shippingInfo, additionalNumber: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                          placeholder="5678"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-6">
                      <Button type="submit" variant="primary" className="whitespace-nowrap">
                        متابعة إلى الدفع
                        <i className="ri-arrow-left-line mr-2"></i>
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-[#16372e] mb-6">طريقة الدفع</h2>
                  
                  {/* Payment Methods */}
                  <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        onClick={() => setPaymentInfo({...paymentInfo, method: 'card'})}
                        className={`p-4 border-2 rounded-lg text-center transition-all ${
                          paymentInfo.method === 'card' 
                            ? 'border-[#935624] bg-[#935624]/10' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <i className="ri-bank-card-line text-2xl mb-2 text-[#935624]"></i>
                        <div className="font-medium">البطاقة البنكية</div>
                        <div className="text-sm text-gray-600">فيزا، ماستركارد</div>
                      </button>
                      
                      <button
                        onClick={() => setPaymentInfo({...paymentInfo, method: 'bank'})}
                        className={`p-4 border-2 rounded-lg text-center transition-all ${
                          paymentInfo.method === 'bank' 
                            ? 'border-[#935624] bg-[#935624]/10' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <i className="ri-bank-line text-2xl mb-2 text-[#935624]"></i>
                        <div className="font-medium">التحويل البنكي</div>
                        <div className="text-sm text-gray-600">تحويل مباشر</div>
                      </button>
                      
                      <button
                        onClick={() => setPaymentInfo({...paymentInfo, method: 'cod'})}
                        className={`p-4 border-2 rounded-lg text-center transition-all ${
                          paymentInfo.method === 'cod' 
                            ? 'border-[#935624] bg-[#935624]/10' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <i className="ri-hand-coin-line text-2xl mb-2 text-[#935624]"></i>
                        <div className="font-medium">الدفع عند الاستلام</div>
                        <div className="text-sm text-gray-600">نقداً</div>
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    {/* Card Payment Form */}
                    {paymentInfo.method === 'card' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            رقم البطاقة *
                          </label>
                          <input
                            type="text"
                            required
                            value={paymentInfo.cardNumber}
                            onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: formatCardNumber(e.target.value)})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              تاريخ الانتهاء *
                            </label>
                            <input
                              type="text"
                              required
                              value={paymentInfo.expiryDate}
                              onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, '');
                                if (value.length >= 2) {
                                  value = value.substring(0, 2) + '/' + value.substring(2, 4);
                                }
                                setPaymentInfo({...paymentInfo, expiryDate: value});
                              }}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                              placeholder="MM/YY"
                              maxLength={5}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              رمز الأمان *
                            </label>
                            <input
                              type="text"
                              required
                              value={paymentInfo.cvv}
                              onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value.replace(/\D/g, '')})}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                              placeholder="123"
                              maxLength={4}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            اسم حامل البطاقة *
                          </label>
                          <input
                            type="text"
                            required
                            value={paymentInfo.cardName}
                            onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#935624]"
                            placeholder="الاسم كما هو مكتوب على البطاقة"
                          />
                        </div>
                      </div>
                    )}

                    {/* Bank Transfer Info */}
                    {paymentInfo.method === 'bank' && (
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-bold text-[#16372e] mb-4">معلومات التحويل البنكي</h3>
                        <div className="space-y-2 text-sm">
                          <div><strong>اسم البنك:</strong> البنك الأهلي السعودي</div>
                          <div><strong>رقم الحساب:</strong> SA1234567890123456789012</div>
                          <div><strong>اسم المستفيد:</strong> شركة العسل الحضرمي</div>
                          <div><strong>رقم السويفت:</strong> NCBKSARI</div>
                        </div>
                        <div className="mt-4 p-3 bg-yellow-100 rounded-lg text-sm text-yellow-800">
                          <i className="ri-information-line ml-2"></i>
                          يرجى إرسال إيصال التحويل عبر الواتساب: 966501234567
                        </div>
                      </div>
                    )}

                    {/* Cash on Delivery Info */}
                    {paymentInfo.method === 'cod' && (
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="font-bold text-[#16372e] mb-4">الدفع عند الاستلام</h3>
                        <div className="space-y-2 text-sm text-green-800">
                          <div className="flex items-center">
                            <i className="ri-check-line ml-2"></i>
                            ادفع نقداً عند وصول الطلب
                          </div>
                          <div className="flex items-center">
                            <i className="ri-check-line ml-2"></i>
                            رسوم إضافية: 10 ريال
                          </div>
                          <div className="flex items-center">
                            <i className="ri-check-line ml-2"></i>
                            متاح في جميع المدن الرئيسية
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between pt-6">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setCurrentStep(1)}
                        className="whitespace-nowrap"
                      >
                        <i className="ri-arrow-right-line ml-2"></i>
                        العودة
                      </Button>
                      <Button type="submit" variant="primary" className="whitespace-nowrap">
                        مراجعة الطلب
                        <i className="ri-arrow-left-line mr-2"></i>
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3: Order Confirmation */}
              {currentStep === 3 && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-[#16372e] mb-6">مراجعة وتأكيد الطلب</h2>
                  
                  {/* Shipping Info Review */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-[#16372e] mb-4">معلومات الشحن</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><strong>الاسم:</strong> {shippingInfo.firstName} {shippingInfo.lastName}</div>
                        <div><strong>الجوال:</strong> {shippingInfo.phone}</div>
                        <div><strong>البريد:</strong> {shippingInfo.email}</div>
                        <div><strong>المنطقة:</strong> {shippingInfo.region}</div>
                        <div className="md:col-span-2"><strong>العنوان:</strong> {shippingInfo.address}, {shippingInfo.city}</div>
                      </div>
                      <button 
                        onClick={() => setCurrentStep(1)}
                        className="text-[#935624] hover:underline text-sm mt-2"
                      >
                        تعديل معلومات الشحن
                      </button>
                    </div>
                  </div>

                  {/* Payment Info Review */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-[#16372e] mb-4">طريقة الدفع</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm">
                        {paymentInfo.method === 'card' && (
                          <div>
                            <strong>البطاقة البنكية:</strong> **** **** **** {paymentInfo.cardNumber.slice(-4)}
                          </div>
                        )}
                        {paymentInfo.method === 'bank' && (
                          <div><strong>التحويل البنكي</strong></div>
                        )}
                        {paymentInfo.method === 'cod' && (
                          <div><strong>الدفع عند الاستلام</strong></div>
                        )}
                      </div>
                      <button 
                        onClick={() => setCurrentStep(2)}
                        className="text-[#935624] hover:underline text-sm mt-2"
                      >
                        تعديل طريقة الدفع
                      </button>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-8">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray-600">
                        أوافق على <a href="/terms" className="text-[#935624] hover:underline">الشروط والأحكام</a> و 
                        <a href="/privacy" className="text-[#935624] hover:underline"> سياسة الخصوصية</a>
                      </span>
                    </label>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setCurrentStep(2)}
                      className="whitespace-nowrap"
                    >
                      <i className="ri-arrow-right-line ml-2"></i>
                      العودة
                    </Button>
                    <Button 
                      variant="primary" 
                      disabled={!agreeToTerms}
                      className="whitespace-nowrap"
                    >
                      <i className="ri-check-line ml-2"></i>
                      تأكيد الطلب
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h3 className="text-xl font-bold text-[#16372e] mb-6">ملخص الطلب</h3>
                
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-[#16372e] text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-600">{item.size}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">الكمية: {item.quantity}</span>
                          <span className="font-bold text-[#935624]">{item.price * item.quantity} ريال</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">المجموع الفرعي</span>
                    <span className="font-semibold">{subtotal} ريال</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">الشحن</span>
                    <span className="font-semibold">{shipping} ريال</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">ضريبة القيمة المضافة (15%)</span>
                    <span className="font-semibold">{tax.toFixed(2)} ريال</span>
                  </div>

                  {paymentInfo.method === 'cod' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">رسوم الدفع عند الاستلام</span>
                      <span className="font-semibold">10 ريال</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-[#16372e]">المجموع الكلي</span>
                    <span className="text-[#935624]">
                      {(total + (paymentInfo.method === 'cod' ? 10 : 0)).toFixed(2)} ريال
                    </span>
                  </div>
                </div>

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
              </div>

              {/* Contact Support */}
              <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                <h3 className="font-bold text-[#16372e] mb-4">تحتاج مساعدة؟</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <i className="ri-phone-line text-[#935624] ml-2"></i>
                    <span>920001234</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-whatsapp-line text-[#935624] ml-2"></i>
                    <span>966501234567</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-mail-line text-[#935624] ml-2"></i>
                    <span>support@hadramihoney.com</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-time-line text-[#935624] ml-2"></i>
                    <span>خدمة عملاء 24/7</span>
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