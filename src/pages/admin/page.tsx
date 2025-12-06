
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [showAddBannerModal, setShowAddBannerModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Mock data
  const stats = {
    totalOrders: 156,
    totalRevenue: 45680,
    totalProducts: 8,
    totalCustomers: 89,
    pendingOrders: 12,
    completedOrders: 144,
    totalBlogPosts: 6,
    totalBanners: 3
  };

  const recentOrders = [
    { id: '#1001', customer: 'أحمد محمد', product: 'عسل السدر الملكي', amount: 250, status: 'مكتمل', date: '2024-01-15' },
    { id: '#1002', customer: 'فاطمة علي', product: 'عسل السُمرة', amount: 180, status: 'قيد التجهيز', date: '2024-01-14' },
    { id: '#1003', customer: 'محمد سالم', product: 'تمور حضرمية', amount: 80, status: 'مرسل', date: '2024-01-14' },
    { id: '#1004', customer: 'عائشة حسن', product: 'عسل المراعي', amount: 120, status: 'مكتمل', date: '2024-01-13' },
    { id: '#1005', customer: 'يوسف أحمد', product: 'العسل المربعي', amount: 300, status: 'قيد التجهيز', date: '2024-01-13' }
  ];

  const [products, setProducts] = useState([
    { id: 1, name: 'عسل السدر الملكي', price: 250, stock: 45, sales: 89, status: 'متوفر', category: 'عسل', image: 'https://readdy.ai/api/search-image?query=Premium%20royal%20Sidr%20honey%20in%20elegant%20glass%20jar&width=100&height=100&seq=admin1&orientation=squarish' },
    { id: 2, name: 'عسل السُمرة', price: 180, stock: 32, sales: 67, status: 'متوفر', category: 'عسل', image: 'https://readdy.ai/api/search-image?query=Dark%20Sumra%20honey%20in%20glass%20jar&width=100&height=100&seq=admin2&orientation=squarish' },
    { id: 3, name: 'عسل المراعي', price: 120, stock: 28, sales: 54, status: 'متوفر', category: 'عسل', image: 'https://readdy.ai/api/search-image?query=Multi-floral%20meadow%20honey%20in%20jar&width=100&height=100&seq=admin3&orientation=squarish' },
    { id: 4, name: 'العسل المربعي', price: 300, stock: 8, sales: 23, status: 'مخزون منخفض', category: 'عسل', image: 'https://readdy.ai/api/search-image?query=Rare%20seasonal%20honey%20in%20premium%20jar&width=100&height=100&seq=admin4&orientation=squarish' },
    { id: 5, name: 'العسل الصيفي', price: 90, stock: 56, sales: 78, status: 'متوفر', category: 'عسل', image: 'https://readdy.ai/api/search-image?query=Summer%20honey%20in%20jar&width=100&height=100&seq=admin5&orientation=squarish' },
    { id: 6, name: 'تمور حضرمية فاخرة', price: 80, stock: 34, sales: 45, status: 'متوفر', category: 'تمور', image: 'https://readdy.ai/api/search-image?query=Premium%20Hadramout%20dates%20in%20elegant%20packaging&width=100&height=100&seq=admin6&orientation=squarish' },
    { id: 7, name: 'أعشاب طبيعية', price: 45, stock: 67, sales: 34, status: 'متوفر', category: 'أعشاب', image: 'https://readdy.ai/api/search-image?query=Natural%20herbs%20collection%20from%20Hadramout&width=100&height=100&seq=admin7&orientation=squarish' },
    { id: 8, name: 'زيوت طبيعية', price: 65, stock: 23, sales: 29, status: 'متوفر', category: 'زيوت', image: 'https://readdy.ai/api/search-image?query=Natural%20oils%20from%20Hadramout%20plants&width=100&height=100&seq=admin8&orientation=squarish' }
  ]);

  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: 'فوائد عسل السدر الملكي للصحة العامة', author: 'د. محمد الحضرمي', date: '2024-01-10', status: 'منشور', views: 1250, category: 'الصحة' },
    { id: 2, title: 'كيفية التمييز بين العسل الأصلي والمغشوش', author: 'أحمد سالم', date: '2024-01-08', status: 'منشور', views: 980, category: 'نصائح' },
    { id: 3, title: 'تاريخ تربية النحل في حضرموت', author: 'فاطمة علي', date: '2024-01-05', status: 'مسودة', views: 0, category: 'التراث' },
    { id: 4, title: 'وصفات طبيعية بالعسل لتقوية المناعة', author: 'د. عائشة حسن', date: '2024-01-03', status: 'منشور', views: 1450, category: 'وصفات' }
  ]);

  const [banners, setBanners] = useState([
    { id: 1, title: 'عرض خاص على عسل السدر', description: 'خصم 20% على جميع أنواع عسل السدر', status: 'نشط', position: 'الصفحة الرئيسية', startDate: '2024-01-01', endDate: '2024-01-31' },
    { id: 2, title: 'شحن مجاني', description: 'شحن مجاني للطلبات أكثر من 200 ريال', status: 'نشط', position: 'جميع الصفحات', startDate: '2024-01-01', endDate: '2024-12-31' },
    { id: 3, title: 'منتجات جديدة', description: 'اكتشف مجموعتنا الجديدة من المنتجات الطبيعية', status: 'معطل', position: 'صفحة المنتجات', startDate: '2024-02-01', endDate: '2024-02-28' }
  ]);

  const customers = [
    { id: 1, name: 'أحمد محمد', email: 'ahmed@example.com', phone: '0501234567', orders: 5, totalSpent: 890, joinDate: '2023-12-01' },
    { id: 2, name: 'فاطمة علي', email: 'fatima@example.com', phone: '0507654321', orders: 3, totalSpent: 540, joinDate: '2023-11-15' },
    { id: 3, name: 'محمد سالم', email: 'mohammed@example.com', phone: '0509876543', orders: 7, totalSpent: 1250, joinDate: '2023-10-20' },
    { id: 4, name: 'عائشة حسن', email: 'aisha@example.com', phone: '0502468135', orders: 2, totalSpent: 300, joinDate: '2024-01-05' },
    { id: 5, name: 'يوسف أحمد', email: 'youssef@example.com', phone: '0508642097', orders: 4, totalSpent: 720, joinDate: '2023-12-10' }
  ];

  const handleAddProduct = (productData) => {
    const newProduct = {
      id: products.length + 1,
      ...productData,
      sales: 0,
      status: 'متوفر'
    };
    setProducts([...products, newProduct]);
    setShowAddProductModal(false);
  };

  const handleEditProduct = (productData) => {
    setProducts(products.map(p => p.id === selectedProduct.id ? { ...p, ...productData } : p));
    setShowEditProductModal(false);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleAddBlogPost = (blogData) => {
    const newPost = {
      id: blogPosts.length + 1,
      ...blogData,
      views: 0,
      date: new Date().toISOString().split('T')[0]
    };
    setBlogPosts([...blogPosts, newPost]);
    setShowAddBlogModal(false);
  };

  const handleAddBanner = (bannerData) => {
    const newBanner = {
      id: banners.length + 1,
      ...bannerData
    };
    setBanners([...banners, newBanner]);
    setShowAddBannerModal(false);
  };

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">إجمالي الطلبات</p>
              <p className="text-3xl font-bold text-[#16372e]">{stats.totalOrders}</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
              <i className="ri-shopping-bag-line text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">إجمالي الإيرادات</p>
              <p className="text-3xl font-bold text-[#16372e]">{stats.totalRevenue.toLocaleString()} ريال</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
              <i className="ri-money-dollar-circle-line text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">عدد المنتجات</p>
              <p className="text-3xl font-bold text-[#16372e]">{stats.totalProducts}</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
              <i className="ri-product-hunt-line text-yellow-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">عدد العملاء</p>
              <p className="text-3xl font-bold text-[#16372e]">{stats.totalCustomers}</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full">
              <i className="ri-user-line text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">مقالات المدونة</p>
              <p className="text-2xl font-bold text-[#16372e]">{stats.totalBlogPosts}</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full">
              <i className="ri-article-line text-indigo-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">الإعلانات النشطة</p>
              <p className="text-2xl font-bold text-[#16372e]">{banners.filter(b => b.status === 'نشط').length}</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-pink-100 rounded-full">
              <i className="ri-megaphone-line text-pink-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">الطلبات المعلقة</p>
              <p className="text-2xl font-bold text-[#16372e]">{stats.pendingOrders}</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-full">
              <i className="ri-time-line text-orange-600"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#16372e] mb-6">المبيعات الشهرية</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[45, 52, 38, 67, 73, 89, 95, 78, 84, 92, 88, 96].map((height, index) => (
              <div key={index} className="flex-1 bg-[#935624] rounded-t" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <span>يناير</span>
            <span>فبراير</span>
            <span>مارس</span>
            <span>أبريل</span>
            <span>مايو</span>
            <span>يونيو</span>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#16372e] mb-6">الطلبات الأخيرة</h3>
          <div className="space-y-4">
            {recentOrders.slice(0, 5).map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-[#16372e]">{order.customer}</p>
                  <p className="text-sm text-gray-600">{order.product}</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-[#935624]">{order.amount} ريال</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    order.status === 'مكتمل' ? 'bg-green-100 text-green-800' :
                    order.status === 'قيد التجهيز' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-[#16372e] mb-6">إجراءات سريعة</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            variant="primary" 
            className="whitespace-nowrap"
            onClick={() => setShowAddProductModal(true)}
          >
            <i className="ri-add-line ml-2"></i>
            إضافة منتج جديد
          </Button>
          <Button 
            variant="outline" 
            className="whitespace-nowrap"
            onClick={() => setShowAddBlogModal(true)}
          >
            <i className="ri-article-line ml-2"></i>
            كتابة مقال جديد
          </Button>
          <Button 
            variant="outline" 
            className="whitespace-nowrap"
            onClick={() => setShowAddBannerModal(true)}
          >
            <i className="ri-megaphone-line ml-2"></i>
            إضافة إعلان
          </Button>
          <Button 
            variant="outline" 
            className="whitespace-nowrap"
            onClick={() => setActiveTab('orders')}
          >
            <i className="ri-eye-line ml-2"></i>
            عرض الطلبات
          </Button>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#16372e]">إدارة الطلبات</h3>
          <div className="flex space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg pr-8">
              <option>جميع الطلبات</option>
              <option>قيد التجهيز</option>
              <option>مرسل</option>
              <option>مكتمل</option>
            </select>
            <Button variant="primary" size="sm" className="whitespace-nowrap">
              <i className="ri-download-line ml-1"></i>
              تصدير
            </Button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">رقم الطلب</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">العميل</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المنتج</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المبلغ</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">التاريخ</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#16372e]">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#935624]">{order.amount} ريال</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select className={`px-2 py-1 text-xs rounded-full border-0 pr-6 ${
                    order.status === 'مكتمل' ? 'bg-green-100 text-green-800' :
                    order.status === 'قيد التجهيز' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    <option value="قيد التجهيز">قيد التجهيز</option>
                    <option value="مرسل">مرسل</option>
                    <option value="مكتمل">مكتمل</option>
                    <option value="ملغي">ملغي</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button className="text-green-600 hover:text-green-800 cursor-pointer">
                    <i className="ri-edit-line"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-800 cursor-pointer">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#16372e]">إدارة المنتجات</h3>
            <div className="flex space-x-4">
              <input 
                type="text" 
                placeholder="البحث في المنتجات..." 
                className="px-4 py-2 border border-gray-300 rounded-lg"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-lg pr-8">
                <option>جميع الفئات</option>
                <option>عسل</option>
                <option>تمور</option>
                <option>أعشاب</option>
                <option>زيوت</option>
              </select>
              <Button 
                variant="primary" 
                size="sm" 
                className="whitespace-nowrap"
                onClick={() => setShowAddProductModal(true)}
              >
                <i className="ri-add-line ml-1"></i>
                إضافة منتج جديد
              </Button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الصورة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المنتج</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الفئة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">السعر</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المخزون</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المبيعات</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#16372e]">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#935624]">{product.price} ريال</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <input 
                      type="number" 
                      value={product.stock} 
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                      onChange={(e) => {
                        const newStock = parseInt(e.target.value);
                        setProducts(products.map(p => 
                          p.id === product.id ? { ...p, stock: newStock, status: newStock < 10 ? 'مخزون منخفض' : 'متوفر' } : p
                        ));
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.sales}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      product.status === 'متوفر' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                      <i className="ri-eye-line"></i>
                    </button>
                    <button 
                      className="text-green-600 hover:text-green-800 cursor-pointer"
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowEditProductModal(true);
                      }}
                    >
                      <i className="ri-edit-line"></i>
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-800 cursor-pointer"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderBlogManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#16372e]">إدارة المدونة</h3>
            <div className="flex space-x-4">
              <input 
                type="text" 
                placeholder="البحث في المقالات..." 
                className="px-4 py-2 border border-gray-300 rounded-lg"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-lg pr-8">
                <option>جميع الحالات</option>
                <option>منشور</option>
                <option>مسودة</option>
                <option>مؤرشف</option>
              </select>
              <Button 
                variant="primary" 
                size="sm" 
                className="whitespace-nowrap"
                onClick={() => setShowAddBlogModal(true)}
              >
                <i className="ri-add-line ml-1"></i>
                مقال جديد
              </Button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">العنوان</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الكاتب</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الفئة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">التاريخ</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المشاهدات</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-[#16372e] max-w-xs">
                    <div className="truncate">{post.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.views.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select className={`px-2 py-1 text-xs rounded-full border-0 pr-6 ${
                      post.status === 'منشور' ? 'bg-green-100 text-green-800' :
                      post.status === 'مسودة' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      <option value="مسودة">مسودة</option>
                      <option value="منشور">منشور</option>
                      <option value="مؤرشف">مؤرشف</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                      <i className="ri-eye-line"></i>
                    </button>
                    <button className="text-green-600 hover:text-green-800 cursor-pointer">
                      <i className="ri-edit-line"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-800 cursor-pointer">
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderBannerManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#16372e]">إدارة الإعلانات والبانرات</h3>
            <Button 
              variant="primary" 
              size="sm" 
              className="whitespace-nowrap"
              onClick={() => setShowAddBannerModal(true)}
            >
              <i className="ri-add-line ml-1"></i>
              إضافة إعلان جديد
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">العنوان</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الوصف</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الموقع</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تاريخ البداية</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تاريخ النهاية</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {banners.map((banner) => (
                <tr key={banner.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-[#16372e]">{banner.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                    <div className="truncate">{banner.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{banner.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{banner.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{banner.endDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select className={`px-2 py-1 text-xs rounded-full border-0 pr-6 ${
                      banner.status === 'نشط' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      <option value="نشط">نشط</option>
                      <option value="معطل">معطل</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                      <i className="ri-eye-line"></i>
                    </button>
                    <button className="text-green-600 hover:text-green-800 cursor-pointer">
                      <i className="ri-edit-line"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-800 cursor-pointer">
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCustomers = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#16372e]">إدارة العملاء</h3>
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="البحث عن عميل..." 
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
            <Button variant="primary" size="sm" className="whitespace-nowrap">
              <i className="ri-download-line ml-1"></i>
              تصدير
            </Button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاسم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">البريد الإلكتروني</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الهاتف</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">عدد الطلبات</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">إجمالي الإنفاق</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تاريخ الانضمام</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#16372e]">{customer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.orders}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#935624]">{customer.totalSpent} ريال</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.joinDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button className="text-green-600 hover:text-green-800 cursor-pointer">
                    <i className="ri-mail-line"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-800 cursor-pointer">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      {/* General Settings */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#16372e] mb-6">الإعدادات العامة</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">اسم المتجر</label>
            <input type="text" defaultValue="عسل حضرموت الأصيل" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
            <input type="email" defaultValue="info@hadramouthoney.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
            <input type="tel" defaultValue="+966501234567" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">العنوان</label>
            <input type="text" defaultValue="الرياض، المملكة العربية السعودية" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">وصف المتجر</label>
            <textarea 
              rows={3}
              defaultValue="متجر متخصص في بيع أجود أنواع العسل الطبيعي من حضرموت والمنتجات الطبيعية الأصيلة"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>
        </div>
      </div>

      {/* SEO Settings */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#16372e] mb-6">إعدادات تحسين محركات البحث</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">عنوان الموقع (Title)</label>
            <input type="text" defaultValue="عسل حضرموت الأصيل - أجود أنواع العسل الطبيعي" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">وصف الموقع (Meta Description)</label>
            <textarea 
              rows={2}
              defaultValue="اكتشف أجود أنواع العسل الطبيعي من حضرموت. عسل السدر الملكي والسُمرة والمراعي بجودة عالية وأسعار مناسبة مع التوصيل لجميع أنحاء المملكة"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">الكلمات المفتاحية</label>
            <input type="text" defaultValue="عسل حضرموت، عسل السدر، عسل طبيعي، عسل أصلي، تمور حضرمية" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Shipping Settings */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#16372e] mb-6">إعدادات الشحن</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">تكلفة الشحن الافتراضية</label>
            <input type="number" defaultValue="25" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">الحد الأدنى للشحن المجاني</label>
            <input type="number" defaultValue="200" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">مدة التوصيل (أيام)</label>
            <input type="number" defaultValue="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">رسوم الدفع عند الاستلام</label>
            <input type="number" defaultValue="10" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Tax Settings */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#16372e] mb-6">إعدادات الضرائب</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ضريبة القيمة المضافة (%)</label>
            <input type="number" defaultValue="15" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">الرقم الضريبي</label>
            <input type="text" defaultValue="123456789012345" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Social Media Settings */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#16372e] mb-6">إعدادات وسائل التواصل الاجتماعي</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">فيسبوك</label>
            <input type="url" placeholder="https://facebook.com/hadramouthoney" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">تويتر</label>
            <input type="url" placeholder="https://twitter.com/hadramouthoney" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">إنستغرام</label>
            <input type="url" placeholder="https://instagram.com/hadramouthoney" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">واتساب</label>
            <input type="tel" placeholder="+966501234567" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button variant="primary" className="whitespace-nowrap">
          <i className="ri-save-line ml-1"></i>
          حفظ جميع الإعدادات
        </Button>
      </div>
    </div>
  );

  // Modal Components
  const AddProductModal = () => (
    showAddProductModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#16372e]">إضافة منتج جديد</h3>
            <button 
              onClick={() => setShowAddProductModal(false)}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            handleAddProduct({
              name: formData.get('name'),
              category: formData.get('category'),
              price: parseInt(formData.get('price')),
              stock: parseInt(formData.get('stock')),
              description: formData.get('description'),
              image: 'https://readdy.ai/api/search-image?query=Natural%20honey%20product%20in%20jar&width=100&height=100&seq=new1&orientation=squarish'
            });
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">اسم المنتج</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="مثال: عسل السدر الفاخر"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الفئة</label>
                <select name="category" required className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-8">
                  <option value="">اختر الفئة</option>
                  <option value="عسل">عسل</option>
                  <option value="تمور">تمور</option>
                  <option value="أعشاب">أعشاب</option>
                  <option value="زيوت">زيوت</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">السعر (ريال)</label>
                <input 
                  type="number" 
                  name="price"
                  required
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="250"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الكمية في المخزون</label>
                <input 
                  type="number" 
                  name="stock"
                  required
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="50"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">وصف المنتج</label>
                <textarea 
                  name="description"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="وصف تفصيلي للمنتج وفوائده..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">صورة المنتج</label>
                <input 
                  type="file" 
                  accept="image/*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-1">يُفضل صور بحجم 400x400 بكسل</p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 mt-6">
              <Button 
                type="button"
                variant="outline" 
                onClick={() => setShowAddProductModal(false)}
                className="whitespace-nowrap"
              >
                إلغاء
              </Button>
              <Button type="submit" variant="primary" className="whitespace-nowrap">
                إضافة المنتج
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );

  const AddBlogModal = () => (
    showAddBlogModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#16372e]">كتابة مقال جديد</h3>
            <button 
              onClick={() => setShowAddBlogModal(false)}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            handleAddBlogPost({
              title: formData.get('title'),
              author: formData.get('author'),
              category: formData.get('category'),
              status: formData.get('status'),
              content: formData.get('content'),
              excerpt: formData.get('excerpt')
            });
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">عنوان المقال</label>
                <input 
                  type="text" 
                  name="title"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="مثال: فوائد العسل الطبيعي للصحة"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الكاتب</label>
                <input 
                  type="text" 
                  name="author"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="اسم الكاتب"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الفئة</label>
                <select name="category" required className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-8">
                  <option value="">اختر الفئة</option>
                  <option value="الصحة">الصحة</option>
                  <option value="نصائح">نصائح</option>
                  <option value="التراث">التراث</option>
                  <option value="وصفات">وصفات</option>
                  <option value="أخبار">أخبار</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">حالة النشر</label>
                <select name="status" required className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-8">
                  <option value="مسودة">مسودة</option>
                  <option value="منشور">منشور</option>
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">ملخص المقال</label>
              <textarea 
                name="excerpt"
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="ملخص قصير عن محتوى المقال..."
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">محتوى المقال</label>
              <textarea 
                name="content"
                rows={10}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="اكتب محتوى المقال هنا..."
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">صورة المقال</label>
              <input 
                type="file" 
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            
            <div className="flex justify-end space-x-4">
              <Button 
                type="button"
                variant="outline" 
                onClick={() => setShowAddBlogModal(false)}
                className="whitespace-nowrap"
              >
                إلغاء
              </Button>
              <Button type="submit" variant="primary" className="whitespace-nowrap">
                حفظ المقال
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );

  const AddBannerModal = () => (
    showAddBannerModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#16372e]">إضافة إعلان جديد</h3>
            <button 
              onClick={() => setShowAddBannerModal(false)}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            handleAddBanner({
              title: formData.get('title'),
              description: formData.get('description'),
              position: formData.get('position'),
              status: formData.get('status'),
              startDate: formData.get('startDate'),
              endDate: formData.get('endDate')
            });
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">عنوان الإعلان</label>
                <input 
                  type="text" 
                  name="title"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="مثال: عرض خاص على العسل"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">موقع العرض</label>
                <select name="position" required className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-8">
                  <option value="">اختر الموقع</option>
                  <option value="الصفحة الرئيسية">الصفحة الرئيسية</option>
                  <option value="صفحة المنتجات">صفحة المنتجات</option>
                  <option value="جميع الصفحات">جميع الصفحات</option>
                  <option value="السلة">السلة</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تاريخ البداية</label>
                <input 
                  type="date" 
                  name="startDate"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تاريخ النهاية</label>
                <input 
                  type="date" 
                  name="endDate"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">حالة الإعلان</label>
                <select name="status" required className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-8">
                  <option value="نشط">نشط</option>
                  <option value="معطل">معطل</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">صورة الإعلان</label>
                <input 
                  type="file" 
                  accept="image/*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">وصف الإعلان</label>
                <textarea 
                  name="description"
                  rows={3}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="وصف الإعلان والعرض..."
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 mt-6">
              <Button 
                type="button"
                variant="outline" 
                onClick={() => setShowAddBannerModal(false)}
                className="whitespace-nowrap"
              >
                إلغاء
              </Button>
              <Button type="submit" variant="primary" className="whitespace-nowrap">
                إضافة الإعلان
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );

  const tabs = [
    { id: 'dashboard', name: 'لوحة التحكم', icon: 'ri-dashboard-line' },
    { id: 'orders', name: 'الطلبات', icon: 'ri-shopping-bag-line' },
    { id: 'products', name: 'المنتجات', icon: 'ri-product-hunt-line' },
    { id: 'blog', name: 'المدونة', icon: 'ri-article-line' },
    { id: 'banners', name: 'الإعلانات', icon: 'ri-megaphone-line' },
    { id: 'customers', name: 'العملاء', icon: 'ri-user-line' },
    { id: 'settings', name: 'الإعدادات', icon: 'ri-settings-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Admin Header */}
      <div className="bg-[#16372e] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">لوحة التحكم الإدارية المتقدمة</h1>
          <p className="text-xl mt-2">إدارة شاملة ومتكاملة لمتجر عسل حضرموت الأصيل</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-right rounded-lg transition-colors cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#935624] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <i className={`${tab.icon} ml-3`}></i>
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'products' && renderProducts()}
            {activeTab === 'blog' && renderBlogManagement()}
            {activeTab === 'banners' && renderBannerManagement()}
            {activeTab === 'customers' && renderCustomers()}
            {activeTab === 'settings' && renderSettings()}
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddProductModal />
      <AddBlogModal />
      <AddBannerModal />

      <Footer />
    </div>
  );
}
