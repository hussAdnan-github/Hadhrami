import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "شركة حضرمي تدشّن موسم إنتاج العسل لعام 2025م",
    excerpt: "أعلنت شركة حضْرَمي عن تدشين موسم إنتاج العسل لعام 2025م، في خطوة تعكس استمرار التزامها بجودة الإنتاج وتكريس مكانة العسل الحضرمي على المستويين المحلي والعالمي.",
    content: "حضرموت – 20 نوفمبر 2025م. أعلنت شركة حضْرَمي عن تدشين موسم إنتاج العسل لعام 2025م...",
    author: "فريق حضرمي الإعلامي",
    date: "2025-11-20",
    category: "أخبار الشركة",
    image: "https://readdy.ai/api/search-image?query=Yemeni%20beekeepers%20harvesting%20royal%20Sidr%20honey%20in%20Hadramout%20valleys%2C%20traditional%20honey%20production%20season%20launch%2C%20beehives%20in%20mountain%20valleys%2C%20authentic%20honey%20collection%20process%2C%20natural%20beekeeping%20in%20Yemen%2C%20golden%20honey%20harvest%2C%20traditional%20craftsmanship%2C%20pristine%20nature%20background&width=1200&height=600&seq=news1&orientation=landscape",
    readTime: "4 دقائق",
    tags: ["أخبار", "موسم الإنتاج", "2025", "حضرموت"],
    featured: true
  },
  {
    id: 2,
    title: "العسل الحضرمي.. تاريخ وهوية",
    excerpt: "رحلة عبر الزمن لاستكشاف تاريخ العسل الحضرمي العريق وكيف أصبح رمزاً للهوية الحضرمية وجزءاً لا يتجزأ من التراث الثقافي والاقتصادي للمنطقة.",
    content: "يمتد تاريخ العسل الحضرمي لآلاف السنين، حيث كان جزءاً أساسياً من الحياة الاقتصادية والثقافية في حضرموت...",
    author: "د. عبدالله باعلوي",
    date: "2024-12-15",
    category: "التراث والتاريخ",
    image: "https://readdy.ai/api/search-image?query=Ancient%20Hadramout%20honey%20heritage%2C%20historical%20beekeeping%20traditions%20in%20Yemen%2C%20traditional%20honey%20jars%20and%20containers%2C%20cultural%20identity%20of%20Hadramout%20honey%2C%20historical%20trade%20routes%2C%20heritage%20craftsmanship%2C%20golden%20honey%20legacy%2C%20traditional%20Yemeni%20architecture%20background%2C%20cultural%20heritage%20preservation&width=800&height=600&seq=heritage1&orientation=landscape",
    readTime: "8 دقائق",
    tags: ["تاريخ", "هوية", "تراث حضرمي", "ثقافة"]
  },
  {
    id: 3,
    title: "حكاية ستة عقود من إنتاج العسل في حضرموت",
    excerpt: "قصة ملهمة تروي مسيرة ستين عاماً من العمل الدؤوب في إنتاج أجود أنواع العسل، من البدايات المتواضعة إلى الريادة الإقليمية والعالمية.",
    content: "منذ ستة عقود، بدأت رحلة إنتاج العسل في حضرموت بخطوات بسيطة من نحالين محليين...",
    author: "أ. محمد الكثيري",
    date: "2024-12-10",
    category: "التراث والتاريخ",
    image: "https://readdy.ai/api/search-image?query=Six%20decades%20of%20honey%20production%20in%20Hadramout%2C%20evolution%20of%20beekeeping%20over%2060%20years%2C%20traditional%20to%20modern%20honey%20production%2C%20historical%20timeline%20of%20Yemeni%20honey%20industry%2C%20generational%20beekeeping%20legacy%2C%20vintage%20and%20modern%20beekeeping%20equipment%2C%20honey%20production%20milestones%2C%20Hadramout%20valleys%20transformation&width=800&height=600&seq=decades1&orientation=landscape",
    readTime: "10 دقائق",
    tags: ["تاريخ", "60 عام", "إنتاج العسل", "مسيرة نجاح"]
  },
  {
    id: 4,
    title: "حضرموت بين الاستيراد والتصدير: مواجهة الغش التجاري",
    excerpt: "تحليل شامل لواقع تجارة العسل في حضرموت، التحديات التي تواجه المنتج المحلي من الغش والتقليد، والجهود المبذولة لحماية الأصالة والجودة.",
    content: "تواجه صناعة العسل الحضرمي تحديات كبيرة في ظل انتشار العسل المغشوش والمستورد...",
    author: "م. سالم بن عمر",
    date: "2024-12-05",
    category: "نصائح وإرشادات",
    image: "https://readdy.ai/api/search-image?query=Honey%20authenticity%20verification%2C%20fake%20honey%20vs%20real%20honey%20comparison%2C%20import%20export%20trade%20challenges%2C%20quality%20control%20laboratory%20testing%2C%20counterfeit%20honey%20problem%2C%20authentic%20Hadramout%20honey%20protection%2C%20trade%20regulations%2C%20consumer%20awareness%2C%20quality%20certification%20stamps&width=800&height=600&seq=trade1&orientation=landscape",
    readTime: "9 دقائق",
    tags: ["تجارة", "غش تجاري", "جودة", "حماية المستهلك"]
  },
  {
    id: 5,
    title: "مصادر إنتاج عسل السدر في حضرموت: الوديان وشجرة السدر",
    excerpt: "دليل شامل لأهم وديان حضرموت المنتجة لعسل السدر، خصائص شجرة السدر الفريدة، والعوامل الطبيعية التي تجعل من حضرموت موطناً لأجود أنواع العسل.",
    content: "تشتهر وديان حضرموت بأشجار السدر الكثيفة التي تنتج أجود أنواع العسل في العالم...",
    author: "د. فاطمة الحضرمية",
    date: "2024-12-01",
    category: "التراث والتاريخ",
    image: "https://readdy.ai/api/search-image?query=Sidr%20trees%20in%20Hadramout%20valleys%2C%20natural%20honey%20production%20sources%2C%20Ziziphus%20spina-christi%20trees%2C%20Yemeni%20mountain%20valleys%20landscape%2C%20beehives%20among%20Sidr%20trees%2C%20natural%20beekeeping%20environment%2C%20pristine%20nature%20of%20Hadramout%2C%20golden%20honey%20sources%2C%20traditional%20honey%20harvesting%20locations&width=800&height=600&seq=valleys1&orientation=landscape",
    readTime: "7 دقائق",
    tags: ["وديان حضرموت", "شجرة السدر", "مصادر الإنتاج", "طبيعة"]
  },
  {
    id: 6,
    title: "مختبرات ومراكز فحص العسل المعتمدة في حضرموت",
    excerpt: "دليل شامل لأهم المختبرات والمراكز المعتمدة لفحص جودة العسل في حضرموت، الاختبارات المعملية المتبعة، وأهمية الشهادات في ضمان أصالة المنتج.",
    content: "تلعب المختبرات المعتمدة دوراً حيوياً في ضمان جودة وأصالة العسل الحضرمي...",
    author: "د. أحمد الشحري",
    date: "2024-11-28",
    category: "نصائح وإرشادات",
    image: "https://readdy.ai/api/search-image?query=Honey%20quality%20testing%20laboratory%2C%20certified%20honey%20testing%20center%2C%20scientific%20honey%20analysis%20equipment%2C%20laboratory%20technicians%20testing%20honey%20samples%2C%20quality%20control%20procedures%2C%20microscope%20and%20testing%20instruments%2C%20certification%20process%2C%20professional%20lab%20environment%2C%20honey%20authenticity%20verification&width=800&height=600&seq=lab1&orientation=landscape",
    readTime: "6 دقائق",
    tags: ["مختبرات", "فحص الجودة", "شهادات", "معايير"]
  },
  {
    id: 7,
    title: "فوائد عسل السدر الملكي للصحة العامة",
    excerpt: "اكتشف الفوائد المذهلة لعسل السدر الملكي الحضرمي وكيف يمكن أن يحسن من صحتك العامة ومناعتك الطبيعية.",
    content: "عسل السدر الملكي هو أجود أنواع العسل في العالم، ويتميز بخصائصه العلاجية الفريدة...",
    author: "د. أحمد الحضرمي",
    date: "2024-01-15",
    category: "الصحة والعافية",
    image: "https://readdy.ai/api/search-image?query=Premium%20royal%20Sidr%20honey%20in%20elegant%20glass%20jar%20with%20golden%20honey%20dripping%2C%20traditional%20Yemeni%20mountains%20background%2C%20natural%20lighting%2C%20health%20and%20wellness%20concept%2C%20organic%20honey%20benefits%2C%20traditional%20medicine%2C%20golden%20amber%20color%2C%20pure%20natural%20honey&width=800&height=600&seq=blog1&orientation=landscape",
    readTime: "5 دقائق",
    tags: ["عسل السدر", "الصحة", "المناعة", "العلاج الطبيعي"]
  },
  {
    id: 8,
    title: "كيفية التمييز بين العسل الأصلي والمغشوش",
    excerpt: "تعلم الطرق العلمية والعملية للتأكد من جودة العسل وأصالته قبل الشراء.",
    content: "هناك عدة طرق للتمييز بين العسل الأصلي والمغشوش...",
    author: "م. فاطمة العسيري",
    date: "2024-01-10",
    category: "نصائح وإرشادات",
    image: "https://readdy.ai/api/search-image?query=Authentic%20honey%20quality%20testing%2C%20pure%20honey%20vs%20fake%20honey%20comparison%2C%20laboratory%20testing%20equipment%2C%20honey%20authenticity%20verification%2C%20natural%20honey%20characteristics%2C%20golden%20honey%20texture%2C%20quality%20control%20process&width=800&height=600&seq=blog2&orientation=landscape",
    readTime: "7 دقائق",
    tags: ["جودة العسل", "نصائح", "اختبار العسل", "الأصالة"]
  },
  {
    id: 9,
    title: "تاريخ تربية النحل في حضرموت",
    excerpt: "رحلة عبر التاريخ لاستكشاف تقاليد تربية النحل العريقة في وديان حضرموت.",
    content: "تمتد تقاليد تربية النحل في حضرموت لآلاف السنين...",
    author: "أ. محمد باعلوي",
    date: "2024-01-05",
    category: "التراث والتاريخ",
    image: "https://readdy.ai/api/search-image?query=Traditional%20beekeeping%20in%20Hadramout%20valleys%2C%20ancient%20honey%20harvesting%20methods%2C%20Yemeni%20beekeepers%20in%20traditional%20clothing%2C%20historical%20beehives%2C%20mountain%20valleys%20landscape%2C%20cultural%20heritage%2C%20traditional%20craftsmanship&width=800&height=600&seq=blog3&orientation=landscape",
    readTime: "10 دقائق",
    tags: ["تاريخ", "حضرموت", "تربية النحل", "التراث"]
  },
  {
    id: 10,
    title: "وصفات طبيعية بالعسل لتقوية المناعة",
    excerpt: "مجموعة من الوصفات الطبيعية المجربة باستخدام العسل الحضرمي لتعزيز جهاز المناعة.",
    content: "يمكن استخدام العسل في العديد من الوصفات الطبيعية...",
    author: "د. سارة الكندي",
    date: "2024-01-01",
    category: "الوصفات الطبيعية",
    image: "https://readdy.ai/api/search-image?query=Natural%20honey%20recipes%20for%20immunity%2C%20healthy%20ingredients%20with%20honey%2C%20ginger%20lemon%20honey%20mixture%2C%20natural%20remedies%20preparation%2C%20kitchen%20setting%20with%20organic%20ingredients%2C%20wellness%20and%20health%20concept&width=800&height=600&seq=blog4&orientation=landscape",
    readTime: "6 دقائق",
    tags: ["وصفات", "المناعة", "العلاج الطبيعي", "الصحة"]
  },
  {
    id: 11,
    title: "أفضل أوقات تناول العسل للحصول على أقصى فائدة",
    excerpt: "دليل شامل حول التوقيت المثالي لتناول العسل وكيفية الاستفادة القصوى من خصائصه العلاجية.",
    content: "التوقيت المناسب لتناول العسل يلعب دوراً مهماً في الاستفادة من فوائده...",
    author: "د. عبدالله الحضرمي",
    date: "2023-12-28",
    category: "الصحة والعافية",
    image: "https://readdy.ai/api/search-image?query=Best%20time%20to%20consume%20honey%2C%20morning%20honey%20routine%2C%20healthy%20lifestyle%20with%20honey%2C%20natural%20energy%20boost%2C%20wellness%20timing%20concept%2C%20golden%20honey%20in%20spoon%2C%20healthy%20habits&width=800&height=600&seq=blog5&orientation=landscape",
    readTime: "4 دقائق",
    tags: ["توقيت", "فوائد العسل", "نصائح صحية", "نمط حياة"]
  },
  {
    id: 12,
    title: "العسل في الطب الشعبي اليمني",
    excerpt: "استكشاف استخدامات العسل في الطب الشعبي اليمني والحكمة المتوارثة عبر الأجيال.",
    content: "يحتل العسل مكانة خاصة في الطب الشعبي اليمني...",
    author: "الحكيم علي الحضرمي",
    date: "2023-12-25",
    category: "التراث والتاريخ",
    image: "https://readdy.ai/api/search-image?query=Traditional%20Yemeni%20folk%20medicine%20with%20honey%2C%20ancient%20healing%20practices%2C%20traditional%20medicine%20herbs%20and%20honey%2C%20cultural%20wisdom%2C%20historical%20medical%20practices%2C%20traditional%20healer%2C%20heritage%20knowledge&width=800&height=600&seq=blog6&orientation=landscape",
    readTime: "8 دقائق",
    tags: ["طب شعبي", "تراث يمني", "علاج تقليدي", "حكمة الأجداد"]
  }
];

const categories = ["جميع المقالات", "أخبار الشركة", "الصحة والعافية", "نصائح وإرشادات", "التراث والتاريخ", "الوصفات الطبيعية"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = selectedCategory === "جميع المقالات" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#16372e] via-[#1e4a3a] to-[#935624] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b37932] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <i className="ri-article-line text-4xl text-white"></i>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            مدونة حضرمي
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            اكتشف عالم العسل الحضرمي من خلال مقالاتنا المتخصصة حول الفوائد الصحية، النصائح العملية، والتراث العريق
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-[#935624] to-[#b37932] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#16372e]">الخبر المميز</h2>
                <div className="w-1 h-8 bg-gradient-to-b from-[#935624] to-[#b37932] rounded-full"></div>
              </div>
            </div>
            
            <Link to={`/blog/${featuredPost.id}`}>
              <article className="max-w-6xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group border border-gray-100">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-96 md:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 right-6">
                      <span className="bg-gradient-to-r from-[#935624] to-[#b37932] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <i className="ri-star-fill"></i>
                        {featuredPost.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  <div className="p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <i className="ri-calendar-line text-[#935624]"></i>
                        <span>{new Date(featuredPost.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <div className="flex items-center gap-2">
                        <i className="ri-time-line text-[#935624]"></i>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-[#16372e] mb-4 leading-tight group-hover:text-[#935624] transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#935624] to-[#b37932] rounded-full flex items-center justify-center">
                          <i className="ri-user-line text-white text-lg"></i>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#16372e]">{featuredPost.author}</p>
                          <p className="text-xs text-gray-500">كاتب المقال</p>
                        </div>
                      </div>
                      
                      <Button variant="primary" className="bg-gradient-to-r from-[#935624] to-[#b37932] hover:from-[#b37932] hover:to-[#935624] shadow-lg">
                        اقرأ المزيد
                        <i className="ri-arrow-left-line mr-2"></i>
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#935624]/10 text-[#935624] px-3 py-1 rounded-full text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="ابحث في المقالات والأخبار..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-5 pr-14 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#935624] focus:border-[#935624] transition-all shadow-sm"
              />
              <i className="ri-search-line absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl"></i>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer shadow-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#935624] to-[#b37932] text-white shadow-lg scale-105'
                      : 'bg-white text-[#16372e] hover:bg-[#935624] hover:text-white border-2 border-gray-200 hover:border-[#935624]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                <i className="ri-file-search-line text-5xl text-gray-400"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-600 mb-3">لا توجد مقالات</h3>
              <p className="text-lg text-gray-500">لم نجد أي مقالات تطابق بحثك. جرب كلمات مختلفة.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#935624] to-[#b37932] rounded-full"></div>
                  <h2 className="text-3xl font-bold text-[#16372e]">أحدث المقالات</h2>
                  <div className="w-1 h-8 bg-gradient-to-b from-[#935624] to-[#b37932] rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`}>
                    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full flex flex-col border border-gray-100">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-gradient-to-r from-[#935624] to-[#b37932] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <i className="ri-calendar-line text-[#935624]"></i>
                            <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                          </div>
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          <div className="flex items-center gap-1">
                            <i className="ri-time-line text-[#935624]"></i>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#16372e] mb-3 leading-tight group-hover:text-[#935624] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#935624] to-[#b37932] rounded-full flex items-center justify-center">
                              <i className="ri-user-line text-white"></i>
                            </div>
                            <span className="text-sm font-medium text-[#16372e]">{post.author}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-[#935624] font-medium group-hover:gap-3 transition-all">
                            <span className="text-sm">اقرأ المزيد</span>
                            <i className="ri-arrow-left-line"></i>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-[#16372e] via-[#1e4a3a] to-[#935624] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b37932] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <i className="ri-mail-line text-3xl text-white"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            اشترك في نشرتنا البريدية
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            احصل على أحدث المقالات والأخبار والنصائح حول العسل الحضرمي مباشرة في بريدك الإلكتروني
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-white transition-all"
              />
              <Button variant="primary" className="bg-white text-[#16372e] hover:bg-gray-100 shadow-xl whitespace-nowrap px-8">
                اشترك الآن
                <i className="ri-mail-send-line mr-2"></i>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
