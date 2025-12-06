import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
  fullContent: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "شركة حضرمي تدشّن موسم إنتاج العسل لعام 2025م",
    content: "أعلنت شركة حضْرَمي عن تدشين موسم إنتاج العسل لعام 2025م، في خطوة تعكس استمرار التزامها بجودة الإنتاج وتكريس مكانة العسل الحضرمي على المستويين المحلي والعالمي.",
    author: "فريق حضرمي الإعلامي",
    date: "2025-11-20",
    category: "أخبار الشركة",
    image: "https://readdy.ai/api/search-image?query=Yemeni%20beekeepers%20harvesting%20royal%20Sidr%20honey%20in%20Hadramout%20valleys%2C%20traditional%20honey%20production%20season%20launch%2C%20beehives%20in%20mountain%20valleys%2C%20authentic%20honey%20collection%20process%2C%20natural%20beekeeping%20in%20Yemen%2C%20golden%20honey%20harvest%2C%20traditional%20craftsmanship%2C%20pristine%20nature%20background&width=1200&height=600&seq=newspost1&orientation=landscape",
    readTime: "4 دقائق",
    tags: ["أخبار", "موسم الإنتاج", "2025", "حضرموت"],
    fullContent: `
      <h2>حضرموت – 20 نوفمبر 2025م</h2>
      <p>أعلنت شركة حضْرَمي عن تدشين موسم إنتاج العسل لعام 2025م، في خطوة تعكس استمرار التزامها بجودة الإنتاج وتكريس مكانة العسل الحضرمي على المستويين المحلي والعالمي.</p>
      
      <h2>انطلاقة الموسم في وديان حضرموت</h2>
      <p>انطلقت أعمال التدشين في عدد من وديان حضرموت الغنية بطبيعتها ومراعيها النادرة، حيث شملت المرحلة الأولى المناحل التابعة للشركة في كل من:</p>
      <ul>
        <li><strong>وادي عمد:</strong> أحد أشهر وديان حضرموت المعروفة بأشجار السدر الكثيفة</li>
        <li><strong>وادي دوعن:</strong> يتميز بتنوعه النباتي الفريد وبيئته المثالية لتربية النحل</li>
        <li><strong>وادي العين:</strong> موطن لأجود أنواع أشجار السدر في المنطقة</li>
        <li><strong>وادي يبعث:</strong> يشتهر بإنتاج عسل السدر ذي الجودة الاستثنائية</li>
      </ul>
      
      <h2>مواقع إنتاج استثنائية</h2>
      <p>تُعد هذه المناطق من أبرز مواقع إنتاج عسل السدر في حضرموت واليمن، نظرًا لما تتميز به من تنوع نباتي وبيئة مثالية لتربية النحل وأشجار السدر ذات الجودة العالية، ما ينعكس على جودة العسل وخصائصه الفريدة.</p>
      
      <h3>مميزات هذه المناطق:</h3>
      <ul>
        <li>تنوع نباتي غني يوفر غذاءً متكاملاً للنحل</li>
        <li>مناخ مثالي لنمو أشجار السدر وإنتاج الرحيق</li>
        <li>بيئة نقية خالية من الملوثات</li>
        <li>تقاليد عريقة في تربية النحل وإنتاج العسل</li>
        <li>إشراف مباشر من خبراء النحالة المحليين</li>
      </ul>
      
      <h2>خطة تطويرية شاملة</h2>
      <p>تؤكد شركة حضرمي أن موسم 2025 يأتي ضمن خطة تطويرية شاملة تهدف إلى:</p>
      
      <h3>1. تعزيز الإنتاج المستدام</h3>
      <p>نعمل على تطبيق أفضل الممارسات العالمية في تربية النحل وإنتاج العسل، مع الحفاظ على التقاليد الحضرمية الأصيلة. نستخدم تقنيات حديثة تضمن جودة المنتج دون الإضرار بالبيئة.</p>
      
      <h3>2. تمكين النحالين المحليين</h3>
      <p>نوفر برامج تدريبية متخصصة للنحالين المحليين، ونزودهم بالمعدات الحديثة والدعم الفني اللازم لتحسين إنتاجهم وضمان استدامة مصادر دخلهم.</p>
      
      <h3>3. ضمان التميز والجودة</h3>
      <p>نطبق معايير صارمة لمراقبة الجودة في جميع مراحل الإنتاج، من جمع العسل حتى التعبئة والتوزيع، لضمان وصول منتج نقي وأصيل إلى عملائنا.</p>
      
      <h2>التزامنا بالجودة</h2>
      <p>يمثل موسم 2025 استمراراً لإرث حضرمي العريق في إنتاج أجود أنواع العسل. نحن ملتزمون بتقديم عسل السدر الملكي بأعلى معايير الجودة، محافظين على خصائصه الطبيعية وفوائده الصحية الفريدة.</p>
      
      <h2>رؤيتنا المستقبلية</h2>
      <p>نتطلع إلى توسيع نطاق عملياتنا لتشمل المزيد من المناطق في حضرموت، مع الحفاظ على التزامنا بالجودة والاستدامة. هدفنا هو أن يصل العسل الحضرمي إلى كل بيت في العالم، حاملاً معه إرث حضرموت العريق وجودته الاستثنائية.</p>
    `
  },
  {
    id: 2,
    title: "فوائد عسل السدر الملكي للصحة العامة",
    content: "اكتشف الفوائد المذهلة لعسل السدر الملكي الحضرمي وكيف يمكن أن يحسن من صحتك العامة ومناعتك الطبيعية.",
    author: "د. أحمد الحضرمي",
    date: "2024-01-15",
    category: "الصحة والعافية",
    image: "https://readdy.ai/api/search-image?query=Premium%20royal%20Sidr%20honey%20in%20elegant%20glass%20jar%20with%20golden%20honey%20dripping%2C%20traditional%20Yemeni%20mountains%20background%2C%20natural%20lighting%2C%20health%20and%20wellness%20concept%2C%20organic%20honey%20benefits%2C%20traditional%20medicine%2C%20golden%20amber%20color%2C%20pure%20natural%20honey&width=1200&height=600&seq=blogpost1&orientation=landscape",
    readTime: "5 دقائق",
    tags: ["عسل السدر", "الصحة", "المناعة", "العلاج الطبيعي"],
    fullContent: `
      <h2>مقدمة عن عسل السدر الملكي</h2>
      <p>يُعتبر عسل السدر الملكي من أجود وأغلى أنواع العسل في العالم، وهو منتج طبيعي فريد ينتج من رحيق أزهار شجر السدر في وديان حضرموت. يتميز هذا العسل بلونه الذهبي الفاتح وطعمه المميز ورائحته العطرة التي تجعله مطلوباً عالمياً.</p>
      
      <h2>الفوائد الصحية لعسل السدر الملكي</h2>
      <h3>1. تقوية جهاز المناعة</h3>
      <p>يحتوي عسل السدر على مضادات الأكسدة الطبيعية والفيتامينات التي تساعد في تقوية جهاز المناعة ومحاربة الأمراض. تناول ملعقة واحدة يومياً على الريق يمكن أن يحسن من مقاومة الجسم للعدوى.</p>
      
      <h3>2. علاج مشاكل الجهاز الهضمي</h3>
      <p>يساعد عسل السدر في علاج قرحة المعدة والتهابات الجهاز الهضمي. خصائصه المضادة للبكتيريا تجعله علاجاً طبيعياً فعالاً لمشاكل الهضم.</p>
      
      <h3>3. تحسين صحة القلب</h3>
      <p>الاستهلاك المنتظم لعسل السدر يمكن أن يساعد في تنظيم ضغط الدم وتحسين صحة القلب والأوعية الدموية.</p>
      
      <h2>طرق الاستخدام الصحيحة</h2>
      <ul>
        <li>تناول ملعقة كبيرة على الريق صباحاً</li>
        <li>إضافته إلى المشروبات الدافئة (ليس الساخنة)</li>
        <li>استخدامه كبديل طبيعي للسكر</li>
        <li>تطبيقه موضعياً لعلاج الجروح الطفيفة</li>
      </ul>
      
      <h2>نصائح مهمة</h2>
      <p>للحصول على أقصى فائدة من عسل السدر الملكي، يُنصح بشرائه من مصادر موثوقة مثل حضرمي، وتجنب تعريضه للحرارة العالية التي قد تفقده خصائصه العلاجية.</p>
    `
  },
  {
    id: 3,
    title: "كيفية التمييز بين العسل الأصلي والمغشوش",
    content: "تعلم الطرق العلمية والعملية للتأكد من جودة العسل وأصالته قبل الشراء.",
    author: "م. فاطمة العسيري",
    date: "2024-01-10",
    category: "نصائح وإرشادات",
    image: "https://readdy.ai/api/search-image?query=Authentic%20honey%20quality%20testing%2C%20pure%20honey%20vs%20fake%20honey%20comparison%2C%20laboratory%20testing%20equipment%2C%20honey%20authenticity%20verification%2C%20natural%20honey%20characteristics%2C%20golden%20honey%20texture%2C%20quality%20control%20process&width=1200&height=600&seq=blogpost2&orientation=landscape",
    readTime: "7 دقائق",
    tags: ["جودة العسل", "نصائح", "اختبار العسل", "الأصالة"],
    fullContent: `
      <h2>أهمية التمييز بين العسل الأصلي والمغشوش</h2>
      <p>مع انتشار العسل المغشوش في الأسواق، أصبح من الضروري معرفة كيفية التمييز بين العسل الأصلي والمقلد للحصول على الفوائد الصحية الكاملة.</p>
      
      <h2>الاختبارات البصرية</h2>
      <h3>1. اللون والشفافية</h3>
      <p>العسل الأصلي يتميز بلون طبيعي يتراوح من الذهبي الفاتح إلى البني الداكن حسب نوع الزهور. العسل المغشوش غالباً ما يكون شديد الشفافية أو له لون صناعي.</p>
      
      <h3>2. القوام والكثافة</h3>
      <p>العسل الطبيعي له قوام كثيف ولزج، ينساب ببطء عند سكبه. العسل المغشوش يكون أقل كثافة وينساب بسرعة.</p>
      
      <h2>الاختبارات العملية</h2>
      <h3>1. اختبار الماء</h3>
      <p>ضع ملعقة من العسل في كوب ماء. العسل الأصلي سيستقر في القاع ولن يذوب بسرعة، بينما المغشوش سيذوب فوراً.</p>
      
      <h3>2. اختبار الخبز</h3>
      <p>ادهن قطعة خبز بالعسل. العسل الأصلي سيجعل الخبز مقرمشًا، بينما المغشوش سيجعله رطباً.</p>
      
      <h3>3. اختبار الإبهام</h3>
      <p>ضع قطرة عسل على إبهامك. إذا انتشرت بسرعة فهو مغشوش، وإذا بقيت متماسكة فهو أصلي.</p>
      
      <h2>العلامات التجارية الموثوقة</h2>
      <p>اختر دائماً العسل من علامات تجارية موثوقة مثل حضرمي التي تضمن جودة المنتج وأصالته من خلال شهادات الجودة والاختبارات المعملية.</p>
    `
  }
];

const relatedPosts = [
  {
    id: 4,
    title: "تاريخ تربية النحل في حضرموت",
    image: "https://readdy.ai/api/search-image?query=Traditional%20beekeeping%20in%20Hadramout%20valleys%2C%20ancient%20honey%20harvesting%20methods%2C%20Yemeni%20beekeepers%20in%20traditional%20clothing%2C%20historical%20beehives%2C%20mountain%20valleys%20landscape&width=400&height=300&seq=related1&orientation=landscape",
    category: "التراث والتاريخ"
  },
  {
    id: 5,
    title: "وصفات طبيعية بالعسل لتقوية المناعة",
    image: "https://readdy.ai/api/search-image?query=Natural%20honey%20recipes%20for%20immunity%2C%20healthy%20ingredients%20with%20honey%2C%20ginger%20lemon%20honey%20mixture%2C%20natural%20remedies%20preparation%2C%20kitchen%20setting%20with%20organic%20ingredients&width=400&height=300&seq=related2&orientation=landscape",
    category: "الوصفات الطبيعية"
  },
  {
    id: 6,
    title: "أفضل أوقات تناول العسل للحصول على أقصى فائدة",
    image: "https://readdy.ai/api/search-image?query=Best%20time%20to%20consume%20honey%2C%20morning%20honey%20routine%2C%20healthy%20lifestyle%20with%20honey%2C%20natural%20energy%20boost%2C%20wellness%20timing%20concept%2C%20golden%20honey%20in%20spoon&width=400&height=300&seq=related3&orientation=landscape",
    category: "الصحة والعافية"
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  
  const post = blogPosts.find(p => p.id === parseInt(id || '1'));
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
            <i className="ri-file-damage-line text-5xl text-gray-400"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-600 mb-4">المقال غير موجود</h1>
          <p className="text-lg text-gray-500 mb-8">عذراً، لم نتمكن من العثور على المقال المطلوب</p>
          <Link to="/blog">
            <Button variant="primary" className="bg-gradient-to-r from-[#935624] to-[#b37932]">
              <i className="ri-arrow-right-line ml-2"></i>
              العودة إلى المدونة
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 space-x-reverse text-sm">
            <Link to="/" className="text-[#935624] hover:text-[#b37932] transition-colors flex items-center gap-2 font-medium">
              <i className="ri-home-4-line text-lg"></i>
              <span>الرئيسية</span>
            </Link>
            <i className="ri-arrow-left-s-line text-gray-300"></i>
            <Link to="/blog" className="text-[#935624] hover:text-[#b37932] transition-colors font-medium">المدونة</Link>
            <i className="ri-arrow-left-s-line text-gray-300"></i>
            <span className="text-gray-500 line-clamp-1 max-w-md">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-20 bg-gradient-to-br from-white via-[#935624]/5 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#935624] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#16372e] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#935624] to-[#b37932] text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl hover:shadow-2xl transition-all">
                <i className="ri-bookmark-line"></i>
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#16372e] text-center mb-12 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center flex-wrap gap-8 mb-12">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#935624] to-[#b37932] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-user-line text-white text-2xl"></i>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#16372e] text-lg">{post.author}</p>
                  <p className="text-sm text-gray-500">كاتب المقال</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
                <i className="ri-calendar-line text-2xl text-[#935624]"></i>
                <div className="text-right">
                  <p className="font-bold text-[#16372e]">{new Date(post.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="text-sm text-gray-500">تاريخ النشر</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
                <i className="ri-time-line text-2xl text-[#935624]"></i>
                <div className="text-right">
                  <p className="font-bold text-[#16372e]">{post.readTime}</p>
                  <p className="text-sm text-gray-500">وقت القراءة</p>
                </div>
              </div>
            </div>
            
            {/* Social Actions */}
            <div className="flex items-center justify-center flex-wrap gap-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all cursor-pointer shadow-lg hover:shadow-xl ${
                  isLiked 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white scale-105' 
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-500 border-2 border-gray-200 hover:border-red-300'
                }`}
              >
                <i className={`text-2xl ${isLiked ? 'ri-heart-fill animate-pulse' : 'ri-heart-line'}`}></i>
                <span className="font-bold text-lg">أعجبني</span>
              </button>
              
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all cursor-pointer shadow-lg hover:shadow-xl ${
                  isBookmarked 
                    ? 'bg-gradient-to-r from-[#935624] to-[#b37932] text-white scale-105' 
                    : 'bg-white text-gray-700 hover:bg-[#935624]/10 hover:text-[#935624] border-2 border-gray-200 hover:border-[#935624]'
                }`}
              >
                <i className={`text-2xl ${isBookmarked ? 'ri-bookmark-fill' : 'ri-bookmark-line'}`}></i>
                <span className="font-bold text-lg">حفظ</span>
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setShareDropdown(!shareDropdown)}
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-pointer shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-blue-300"
                >
                  <i className="ri-share-line text-2xl"></i>
                  <span className="font-bold text-lg">مشاركة</span>
                </button>
                
                {shareDropdown && (
                  <div className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-2xl p-3 z-50 border border-gray-200 min-w-[220px]">
                    <button className="flex items-center gap-4 w-full px-5 py-3 hover:bg-blue-50 rounded-xl transition-colors text-right group">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                        <i className="ri-facebook-fill text-blue-600 group-hover:text-white text-xl transition-colors"></i>
                      </div>
                      <span className="text-gray-700 font-medium">فيسبوك</span>
                    </button>
                    <button className="flex items-center gap-4 w-full px-5 py-3 hover:bg-blue-50 rounded-xl transition-colors text-right group">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg group-hover:bg-blue-400 transition-colors">
                        <i className="ri-twitter-line text-blue-400 group-hover:text-white text-xl transition-colors"></i>
                      </div>
                      <span className="text-gray-700 font-medium">تويتر</span>
                    </button>
                    <button className="flex items-center gap-4 w-full px-5 py-3 hover:bg-green-50 rounded-xl transition-colors text-right group">
                      <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg group-hover:bg-green-600 transition-colors">
                        <i className="ri-whatsapp-line text-green-600 group-hover:text-white text-xl transition-colors"></i>
                      </div>
                      <span className="text-gray-700 font-medium">واتساب</span>
                    </button>
                    <button 
                      onClick={handleCopyLink}
                      className="flex items-center gap-4 w-full px-5 py-3 hover:bg-gray-100 rounded-xl transition-colors text-right group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-gray-600 transition-colors">
                        <i className={`text-xl transition-colors ${copiedLink ? 'ri-check-line text-green-600' : 'ri-link text-gray-600 group-hover:text-white'}`}></i>
                      </div>
                      <span className="text-gray-700 font-medium">{copiedLink ? 'تم النسخ!' : 'نسخ الرابط'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
                <p className="text-[#16372e] font-bold flex items-center gap-2">
                  <i className="ri-image-line text-[#935624]"></i>
                  صورة المقال الرئيسية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto mb-16">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-amber-100/50 backdrop-blur-sm relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-50 to-transparent rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-50 to-transparent rounded-full blur-3xl opacity-50"></div>
          
          <div className="prose prose-xl max-w-none relative z-10">
            {/* Drop Cap Introduction */}
            <div className="mb-8">
              <p className="text-2xl leading-relaxed text-gray-800 first-letter:text-7xl first-letter:font-bold first-letter:text-amber-600 first-letter:float-right first-letter:ml-3 first-letter:mt-2">
                أعلنت شركة حضْرَمي عن تدشين موسم إنتاج العسل لعام 2025م، في خطوة تعكس استمرار التزامها بجودة الإنتاج وتكريس مكانة العسل الحضرمي على المستويين المحلي والعالمي.
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-xl leading-relaxed text-gray-700">
              <p>
                وانطلقت أعمال التدشين في عدد من وديان حضرموت الغنية بطبيعتها ومراعيها النادرة، حيث شملت المرحلة الأولى المناحل التابعة للشركة في كل من وادي عمد، وادي دوعن، وادي العين، ووادي يبعث.
              </p>

              <p>
                وتُعد هذه المناطق من أبرز مواقع إنتاج عسل السدر في حضرموت واليمن، نظرًا لما تتميز به من تنوع نباتي وبيئة مثالية لتربية النحل وأشجار السدر ذات الجودة العالية، ما ينعكس على جودة العسل وخصائصه الفريدة.
              </p>

              <p>
                وتؤكد شركة حضرمي أن موسم 2025 يأتي ضمن خطة تطويرية شاملة تهدف إلى تعزيز الإنتاج المستدام، وتمكين النحالين المحليين، وضمان استمرارية التميز الذي عُرفت به منتجاتها.
              </p>

              <p>
                وتشمل الخطة التطويرية توسيع نطاق المناحل في مناطق جديدة، وتطبيق أحدث التقنيات في تربية النحل، وتوفير الدعم الفني والتدريبي للنحالين المحليين، بما يضمن الحفاظ على الجودة العالية التي تميز منتجات الشركة.
              </p>

              <p>
                كما تولي الشركة اهتمامًا خاصًا بالحفاظ على البيئة الطبيعية وحماية أشجار السدر، من خلال برامج التشجير والتوعية البيئية، إيمانًا منها بأهمية الاستدامة في ضمان استمرار هذا الإرث الطبيعي الثمين للأجيال القادمة.
              </p>

              <p>
                ويأتي هذا التدشين في وقت تشهد فيه منتجات شركة حضرمي إقبالًا متزايدًا على المستويين المحلي والدولي، حيث تصدر الشركة عسلها إلى العديد من الدول، مما يعزز مكانة العسل الحضرمي كواحد من أجود أنواع العسل في العالم.
              </p>

              <p className="text-2xl font-semibold text-amber-700 pt-6 border-t-2 border-amber-200 mt-8">
                وتتطلع شركة حضرمي إلى تحقيق موسم استثنائي يعزز من ريادتها في صناعة العسل، ويساهم في دعم الاقتصاد المحلي وتمكين المجتمعات الريفية في حضرموت.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#935624] via-[#b37932] to-[#935624]"></div>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-[#935624] to-[#b37932] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                  <i className="ri-user-line text-white text-6xl"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-black text-[#16372e]">{post.author}</h3>
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    خبير في مجال العسل والمنتجات الطبيعية، يتمتع بخبرة واسعة في دراسة فوائد العسل الحضرمي وتطبيقاته العلاجية. 
                    يسعى لنشر الوعي حول أهمية المنتجات الطبيعية في الحياة الصحية.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#935624]/10 to-[#b37932]/10 hover:from-[#935624] hover:to-[#b37932] text-[#935624] hover:text-white rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-110">
                      <i className="ri-twitter-line text-xl"></i>
                    </a>
                    <a href="#" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#935624]/10 to-[#b37932]/10 hover:from-[#935624] hover:to-[#b37932] text-[#935624] hover:text-white rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-110">
                      <i className="ri-linkedin-line text-xl"></i>
                    </a>
                    <a href="#" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#935624]/10 to-[#b37932]/10 hover:from-[#935624] hover:to-[#b37932] text-[#935624] hover:text-white rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-110">
                      <i className="ri-mail-line text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-2 h-12 bg-gradient-to-b from-[#935624] to-[#b37932] rounded-full"></div>
                <h2 className="text-4xl md:text-5xl font-black text-[#16372e]">مقالات ذات صلة</h2>
                <div className="w-2 h-12 bg-gradient-to-b from-[#935624] to-[#b37932] rounded-full"></div>
              </div>
              <p className="text-gray-600 text-lg">اكتشف المزيد من المحتوى المفيد</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#935624]/30 h-full">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-6 right-6">
                        <span className="bg-gradient-to-r from-[#935624] to-[#b37932] text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-[#16372e] group-hover:text-[#935624] transition-colors leading-tight line-clamp-2 mb-6 min-h-[3.5rem]">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-3 text-[#935624] font-bold group-hover:gap-4 transition-all">
                        <span className="text-base">اقرأ المزيد</span>
                        <i className="ri-arrow-left-line text-xl group-hover:translate-x-[-4px] transition-transform"></i>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-[#16372e] via-[#1e4a3a] to-[#935624] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b37932] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 shadow-2xl">
            <i className="ri-mail-line text-4xl text-white"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            لا تفوت أحدث مقالاتنا
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            اشترك في نشرتنا البريدية واحصل على أحدث المقالات والنصائح حول العسل الحضرمي مباشرة في بريدك
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-8 py-5 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white text-lg placeholder-white/60 focus:ring-4 focus:ring-white/30 focus:border-white transition-all"
              />
              <Button variant="primary" className="bg-white text-[#16372e] hover:bg-gray-100 shadow-2xl whitespace-nowrap px-10 py-5 text-lg font-bold rounded-2xl">
                اشترك الآن
                <i className="ri-mail-send-line mr-3 text-xl"></i>
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-6">
              <i className="ri-shield-check-line ml-1"></i>
              نحترم خصوصيتك ولن نشارك بريدك مع أي طرف ثالث
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}