import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // بيانات المنتجات
  const products = {
    'sidr-royal': {
      id: 'sidr-royal',
      name: 'عسل السدر الملكي',
      subtitle: 'أجود وأغلى أنواع العسل في العالم',
      description: 'عسل السدر الملكي هو تحفة طبيعية نادرة، يُستخرج من رحيق أزهار شجر السدر البري في وديان حضرموت الخلابة. يتميز بنكهته الفريدة التي لا تُضاهى، وقيمته الغذائية العالية، وخصائصه العلاجية المثبتة علمياً. هذا العسل الاستثنائي يُنتج مرة واحدة في السنة خلال موسم قصير، مما يجعله من أندر وأثمن أنواع العسل على مستوى العالم.',
      badge: 'الأفخر',
      color: 'from-amber-600 to-yellow-700',
      images: [
        'https://readdy.ai/api/search-image?query=Premium%20royal%20Sidr%20honey%20in%20elegant%20glass%20jar%20with%20golden%20amber%20color%2C%20luxury%20honey%20product%20photography%2C%20clean%20white%20background%2C%20high%20quality%20natural%20honey%2C%20traditional%20Yemeni%20honey%2C%20artisanal%20packaging%2C%20professional%20product%20shot%2C%20detailed%20texture&width=800&height=800&seq=sidr1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Royal%20Sidr%20honey%20jar%20from%20different%20angle%20showing%20honey%20texture%20and%20consistency%2C%20premium%20glass%20container%2C%20golden%20honey%20color%2C%20luxury%20product%20photography%2C%20clean%20background%2C%20natural%20lighting%2C%20professional%20shot&width=800&height=800&seq=sidr2&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Sidr%20honey%20being%20poured%20from%20jar%20showing%20golden%20flow%20and%20viscosity%2C%20honey%20texture%20detail%2C%20premium%20quality%20honey%2C%20natural%20organic%20product%2C%20clean%20background%2C%20professional%20food%20photography&width=800&height=800&seq=sidr3&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Sidr%20honey%20with%20honeycomb%20and%20Sidr%20tree%20flowers%2C%20natural%20honey%20production%20scene%2C%20traditional%20beekeeping%2C%20Hadramout%20valley%20honey%2C%20organic%20natural%20honey%2C%20authentic%20setting&width=800&height=800&seq=sidr4&orientation=squarish'
      ],
      features: [
        { icon: 'ri-star-line', title: 'نكهة فريدة', desc: 'طعم مميز لا يُضاهى يجمع بين الحلاوة الطبيعية والنكهة الغنية' },
        { icon: 'ri-heart-pulse-line', title: 'قيمة غذائية عالية', desc: 'غني بالفيتامينات والمعادن والأحماض الأمينية الأساسية' },
        { icon: 'ri-shield-check-line', title: 'خصائص علاجية', desc: 'مضاد طبيعي للبكتيريا ومقوي لجهاز المناعة' },
        { icon: 'ri-plant-line', title: 'من أشجار السدر البرية', desc: 'يُنتج من رحيق أزهار السدر النقية في وديان حضرموت' },
        { icon: 'ri-leaf-line', title: 'طبيعي 100%', desc: 'خالي تماماً من المواد الحافظة والإضافات الصناعية' },
        { icon: 'ri-award-line', title: 'معتمد عالمياً', desc: 'حاصل على شهادات الجودة من منظمات عالمية' }
      ],
      nutritionalInfo: [
        { label: 'السعرات الحرارية', value: '304 كالوري/100g', icon: 'ri-fire-line' },
        { label: 'الكربوهيدرات', value: '82.4g', icon: 'ri-pie-chart-line' },
        { label: 'السكريات الطبيعية', value: '82.1g', icon: 'ri-drop-line' },
        { label: 'البروتين', value: '0.3g', icon: 'ri-pulse-line' },
        { label: 'الدهون', value: '0g', icon: 'ri-contrast-drop-line' },
        { label: 'الألياف', value: '0.2g', icon: 'ri-seedling-line' }
      ],
      benefits: [
        'تقوية جهاز المناعة الطبيعي ومقاومة الأمراض',
        'مضاد طبيعي قوي للبكتيريا والفيروسات',
        'تحسين الهضم وصحة الجهاز الهضمي بشكل ملحوظ',
        'مصدر طبيعي للطاقة والحيوية طوال اليوم',
        'مفيد لصحة القلب والأوعية الدموية',
        'يساعد في علاج التهابات الحلق والجهاز التنفسي',
        'يعزز صحة البشرة ويساعد في التئام الجروح',
        'يحسن جودة النوم ويقلل من التوتر'
      ],
      usage: [
        { step: 'تناول ملعقة كبيرة على الريق صباحاً للحصول على أقصى فائدة', icon: 'ri-sun-line' },
        { step: 'يُضاف إلى المشروبات الدافئة (وليس الساخنة) للحفاظ على خصائصه', icon: 'ri-cup-line' },
        { step: 'يُستخدم كبديل طبيعي وصحي للسكر في جميع الوصفات', icon: 'ri-restaurant-line' },
        { step: 'يُطبق خارجياً لعلاج الجروح الطفيفة والحروق', icon: 'ri-hand-heart-line' },
        { step: 'يُخلط مع الحليب الدافئ قبل النوم لنوم هادئ', icon: 'ri-moon-line' }
      ],
      origin: {
        title: 'من قلب وديان حضرموت',
        description: 'يُنتج عسل السدر الملكي في وديان حضرموت الخلابة، حيث تنمو أشجار السدر البرية في بيئة طبيعية نقية بعيداً عن التلوث. يتم جمع العسل بطرق تقليدية متوارثة عبر الأجيال، مع الحفاظ على جميع خصائصه الطبيعية.',
        image: 'https://readdy.ai/api/search-image?query=Beautiful%20Hadramout%20valley%20landscape%20with%20Sidr%20trees%2C%20traditional%20beekeeping%20in%20Yemen%20mountains%2C%20natural%20honey%20production%20environment%2C%20scenic%20mountain%20valleys%20with%20wildflowers%2C%20authentic%20Middle%20Eastern%20honey%20farms%2C%20pristine%20natural%20environment&width=1200&height=600&seq=origin1&orientation=landscape'
      }
    },
    'sumra': {
      id: 'sumra',
      name: 'عسل السُمرة',
      subtitle: 'بلونه الداكن وطعمه المميز',
      description: 'عسل السُمرة هو كنز طبيعي يتميز بلونه الداكن الغني وطعمه القوي المميز. يُستخرج من رحيق أزهار أشجار السمر (الأكاسيا) التي تنمو في وديان حضرموت. يحتل المرتبة الثانية بعد عسل السدر من حيث الجودة والقيمة الغذائية، ويتميز بخصائصه العلاجية الفريدة وغناه بالمعادن والعناصر الغذائية الأساسية.',
      badge: 'مميز',
      color: 'from-amber-800 to-amber-900',
      images: [
        'https://readdy.ai/api/search-image?query=Dark%20Sumra%20honey%20in%20glass%20jar%20with%20rich%20dark%20amber%20color%2C%20natural%20honey%20product%2C%20traditional%20Yemeni%20honey%2C%20clean%20background%2C%20premium%20quality%2C%20professional%20food%20photography%2C%20detailed%20texture&width=800&height=800&seq=sumra1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Sumra%20honey%20jar%20from%20side%20angle%20showing%20dark%20color%20and%20consistency%2C%20premium%20glass%20container%2C%20natural%20honey%2C%20luxury%20product%20photography%2C%20clean%20background&width=800&height=800&seq=sumra2&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Dark%20Sumra%20honey%20being%20poured%20showing%20thick%20viscosity%2C%20honey%20texture%20detail%2C%20natural%20organic%20product%2C%20clean%20background%2C%20professional%20shot&width=800&height=800&seq=sumra3&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Sumra%20honey%20with%20Acacia%20tree%20flowers%2C%20natural%20honey%20production%2C%20traditional%20beekeeping%2C%20Hadramout%20honey%2C%20organic%20natural%20setting&width=800&height=800&seq=sumra4&orientation=squarish'
      ],
      features: [
        { icon: 'ri-contrast-2-line', title: 'لون داكن مميز', desc: 'لون كهرماني داكن يعكس غناه بالمعادن والعناصر الغذائية' },
        { icon: 'ri-restaurant-2-line', title: 'طعم غني وقوي', desc: 'نكهة قوية ومميزة تجمع بين الحلاوة والمرارة الخفيفة' },
        { icon: 'ri-flask-line', title: 'غني بالمعادن', desc: 'يحتوي على نسبة عالية من الحديد والكالسيوم والبوتاسيوم' },
        { icon: 'ri-plant-line', title: 'من أزهار السمر', desc: 'يُنتج من رحيق أزهار أشجار السمر (الأكاسيا) النقية' },
        { icon: 'ri-heart-line', title: 'فوائد صحية متعددة', desc: 'مفيد للدم والعظام والجهاز الهضمي' },
        { icon: 'ri-shield-star-line', title: 'جودة مضمونة', desc: 'يخضع لفحوصات دقيقة لضمان النقاء والجودة' }
      ],
      nutritionalInfo: [
        { label: 'السعرات الحرارية', value: '310 كالوري/100g', icon: 'ri-fire-line' },
        { label: 'الكربوهيدرات', value: '84.2g', icon: 'ri-pie-chart-line' },
        { label: 'السكريات الطبيعية', value: '83.8g', icon: 'ri-drop-line' },
        { label: 'البروتين', value: '0.4g', icon: 'ri-pulse-line' },
        { label: 'الحديد', value: '2.1mg', icon: 'ri-heart-pulse-line' },
        { label: 'الكالسيوم', value: '6mg', icon: 'ri-bone-line' }
      ],
      benefits: [
        'يعزز مستويات الهيموجلوبين ويحارب فقر الدم',
        'يقوي العظام والأسنان بفضل محتواه من الكالسيوم',
        'يحسن وظائف الجهاز الهضمي ويعالج الإمساك',
        'مضاد قوي للأكسدة يحمي الخلايا من التلف',
        'يساعد في تنظيم ضغط الدم',
        'يعزز صحة الكبد ويساعد في تنقية الجسم من السموم',
        'مفيد للجهاز التنفسي ويخفف من أعراض الربو',
        'يحسن الذاكرة والتركيز'
      ],
      usage: [
        { step: 'تناول ملعقة كبيرة يومياً لتعزيز مستويات الحديد', icon: 'ri-heart-pulse-line' },
        { step: 'يُضاف إلى الحليب الدافئ لتقوية العظام', icon: 'ri-cup-line' },
        { step: 'يُستخدم في تحلية المشروبات الساخنة', icon: 'ri-goblet-line' },
        { step: 'يُخلط مع الليمون للمساعدة في إنقاص الوزن', icon: 'ri-leaf-line' },
        { step: 'يُتناول قبل التمارين الرياضية لزيادة الطاقة', icon: 'ri-run-line' }
      ],
      origin: {
        title: 'من أشجار السمر الحضرمية',
        description: 'يُنتج عسل السُمرة من رحيق أزهار أشجار السمر (الأكاسيا) التي تنتشر في وديان حضرموت. هذه الأشجار المعمرة تزهر في مواسم محددة، وتنتج رحيقاً غنياً يتحول إلى عسل داكن اللون بنكهة مميزة.',
        image: 'https://readdy.ai/api/search-image?query=Acacia%20Sumra%20trees%20in%20Hadramout%20valley%2C%20traditional%20honey%20production%20from%20Acacia%20flowers%2C%20natural%20beekeeping%20environment%20in%20Yemen%2C%20scenic%20valley%20with%20Acacia%20trees%2C%20authentic%20Middle%20Eastern%20landscape&width=1200&height=600&seq=origin2&orientation=landscape'
      }
    },
    'meadow': {
      id: 'meadow',
      name: 'عسل المراعي',
      subtitle: 'من أزهار متنوعة في كل موسم',
      description: 'عسل المراعي هو عسل طبيعي متعدد الأزهار، يُنتج من رحيق مجموعة متنوعة من الأزهار البرية التي تنمو في مراعي حضرموت الخصبة. يتميز بطعمه المتغير حسب الموسم والأزهار المتاحة، مما يجعل كل دفعة فريدة من نوعها. هذا العسل غني بالفيتامينات والمعادن المتنوعة بفضل تنوع مصادره الزهرية.',
      badge: 'موسمي',
      color: 'from-yellow-500 to-amber-600',
      images: [
        'https://readdy.ai/api/search-image?query=Multi-floral%20meadow%20honey%20in%20jar%20with%20light%20golden%20color%2C%20natural%20wildflower%20honey%2C%20seasonal%20honey%20variety%2C%20organic%20honey%20product%2C%20clean%20background%2C%20professional%20photography&width=800&height=800&seq=meadow1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Meadow%20honey%20jar%20from%20different%20angle%20showing%20light%20color%2C%20premium%20glass%20container%2C%20natural%20honey%2C%20clean%20product%20photography&width=800&height=800&seq=meadow2&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Light%20golden%20meadow%20honey%20being%20poured%2C%20honey%20flow%20and%20texture%2C%20natural%20organic%20product%2C%20clean%20background&width=800&height=800&seq=meadow3&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Meadow%20honey%20with%20diverse%20wildflowers%2C%20natural%20honey%20production%2C%20traditional%20beekeeping%2C%20colorful%20flowers%2C%20organic%20natural%20setting&width=800&height=800&seq=meadow4&orientation=squarish'
      ],
      features: [
        { icon: 'ri-flower-line', title: 'من أزهار متنوعة', desc: 'يُنتج من رحيق عشرات الأنواع من الأزهار البرية' },
        { icon: 'ri-calendar-line', title: 'طعم متغير حسب الموسم', desc: 'كل موسم يحمل نكهة فريدة حسب الأزهار المتاحة' },
        { icon: 'ri-medicine-bottle-line', title: 'غني بالفيتامينات', desc: 'يحتوي على مجموعة واسعة من الفيتامينات والمعادن' },
        { icon: 'ri-leaf-line', title: 'طبيعي 100%', desc: 'خالي من أي إضافات أو مواد حافظة' },
        { icon: 'ri-price-tag-3-line', title: 'قيمة ممتازة', desc: 'جودة عالية بسعر مناسب للاستخدام اليومي' },
        { icon: 'ri-recycle-line', title: 'إنتاج مستدام', desc: 'يُنتج بطرق صديقة للبيئة تحافظ على التنوع الحيوي' }
      ],
      nutritionalInfo: [
        { label: 'السعرات الحرارية', value: '298 كالوري/100g', icon: 'ri-fire-line' },
        { label: 'الكربوهيدرات', value: '81.5g', icon: 'ri-pie-chart-line' },
        { label: 'السكريات الطبيعية', value: '81.2g', icon: 'ri-drop-line' },
        { label: 'البروتين', value: '0.3g', icon: 'ri-pulse-line' },
        { label: 'فيتامين C', value: '0.5mg', icon: 'ri-capsule-line' },
        { label: 'مضادات الأكسدة', value: 'عالية', icon: 'ri-shield-check-line' }
      ],
      benefits: [
        'يعزز المناعة بفضل تنوع مصادره الزهرية',
        'مضاد طبيعي للحساسية الموسمية',
        'يحسن صحة الجهاز الهضمي بشكل عام',
        'مصدر ممتاز للطاقة السريعة والمستدامة',
        'يساعد في تخفيف أعراض البرد والإنفلونزا',
        'يحسن صحة البشرة ويمنحها نضارة طبيعية',
        'يساعد في تنظيم مستويات السكر في الدم',
        'مفيد للأطفال والكبار على حد سواء'
      ],
      usage: [
        { step: 'يُستخدم يومياً كبديل صحي للسكر في جميع الوصفات', icon: 'ri-restaurant-line' },
        { step: 'يُضاف إلى الشاي والقهوة للحصول على نكهة طبيعية', icon: 'ri-cup-line' },
        { step: 'يُدهن على الخبز والفطائر كوجبة إفطار صحية', icon: 'ri-cake-3-line' },
        { step: 'يُخلط مع الزبادي والفواكه لوجبة خفيفة مغذية', icon: 'ri-bowl-line' },
        { step: 'يُستخدم في تحضير الحلويات الطبيعية', icon: 'ri-cake-line' }
      ],
      origin: {
        title: 'من مراعي حضرموت الخصبة',
        description: 'يُنتج عسل المراعي في المراعي الطبيعية الواسعة في حضرموت، حيث تزهر عشرات الأنواع من النباتات البرية في مواسم مختلفة. النحل يجمع الرحيق من هذا التنوع الزهري الغني، مما ينتج عسلاً متعدد الفوائد.',
        image: 'https://readdy.ai/api/search-image?query=Beautiful%20meadow%20landscape%20in%20Hadramout%20with%20diverse%20wildflowers%2C%20natural%20honey%20production%20environment%2C%20colorful%20flower%20fields%2C%20traditional%20beekeeping%2C%20scenic%20valley%20with%20blooming%20flowers%2C%20pristine%20natural%20environment&width=1200&height=600&seq=origin3&orientation=landscape'
      }
    },
    'square': {
      id: 'square',
      name: 'العسل المربعي',
      subtitle: 'نوع نادر من مواسم استثنائية',
      description: 'العسل المربعي هو أندر أنواع العسل الحضرمي، يُنتج في مواسم استثنائية قصيرة جداً عندما تتفتح أزهار أشجار السدر في ظروف مناخية مثالية. يتميز بجودته الفائقة ونقائه العالي، ويُعتبر من أثمن أنواع العسل في العالم. الكمية المنتجة منه محدودة جداً، مما يجعله خياراً حصرياً لعشاق العسل الفاخر.',
      badge: 'نادر',
      color: 'from-orange-600 to-red-700',
      images: [
        'https://readdy.ai/api/search-image?query=Rare%20seasonal%20Sidr%20honey%20in%20premium%20jar%20with%20exceptional%20golden%20color%2C%20limited%20edition%20honey%20product%2C%20luxury%20natural%20honey%2C%20exclusive%20artisanal%20honey%2C%20clean%20background%2C%20professional%20photography&width=800&height=800&seq=square1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Rare%20square%20honey%20jar%20from%20side%20showing%20unique%20color%2C%20premium%20glass%20container%2C%20luxury%20honey%20product%2C%20clean%20product%20photography&width=800&height=800&seq=square2&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Rare%20honey%20being%20poured%20showing%20exceptional%20viscosity%2C%20premium%20honey%20texture%2C%20luxury%20natural%20product%2C%20clean%20background&width=800&height=800&seq=square3&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Rare%20honey%20with%20exceptional%20Sidr%20flowers%2C%20exclusive%20honey%20production%2C%20limited%20season%20beekeeping%2C%20premium%20natural%20setting&width=800&height=800&seq=square4&orientation=squarish'
      ],
      features: [
        { icon: 'ri-vip-diamond-line', title: 'نوع نادر ومحدود', desc: 'يُنتج بكميات محدودة جداً في مواسم استثنائية فقط' },
        { icon: 'ri-calendar-event-line', title: 'إنتاج موسمي استثنائي', desc: 'يعتمد على ظروف مناخية مثالية نادرة الحدوث' },
        { icon: 'ri-star-smile-line', title: 'جودة فائقة', desc: 'أعلى معايير الجودة والنقاء في كل قطرة' },
        { icon: 'ri-shopping-bag-line', title: 'كمية محدودة', desc: 'متوفر بكميات قليلة جداً سنوياً' },
        { icon: 'ri-gift-line', title: 'هدية مثالية', desc: 'خيار فاخر للإهداء في المناسبات الخاصة' },
        { icon: 'ri-medal-line', title: 'حصري وفريد', desc: 'تجربة استثنائية لعشاق العسل الفاخر' }
      ],
      nutritionalInfo: [
        { label: 'السعرات الحرارية', value: '308 كالوري/100g', icon: 'ri-fire-line' },
        { label: 'الكربوهيدرات', value: '83.5g', icon: 'ri-pie-chart-line' },
        { label: 'السكريات الطبيعية', value: '83.2g', icon: 'ri-drop-line' },
        { label: 'البروتين', value: '0.4g', icon: 'ri-pulse-line' },
        { label: 'الإنزيمات الطبيعية', value: 'عالية جداً', icon: 'ri-flask-line' },
        { label: 'مضادات الأكسدة', value: 'استثنائية', icon: 'ri-shield-star-line' }
      ],
      benefits: [
        'خصائص علاجية استثنائية مثبتة علمياً',
        'يعزز المناعة بشكل قوي وفعال',
        'مضاد قوي جداً للبكتيريا والفيروسات',
        'يحسن الصحة العامة والحيوية بشكل ملحوظ',
        'مفيد جداً للجهاز الهضمي والتنفسي',
        'يساعد في تسريع الشفاء من الأمراض',
        'يحسن الذاكرة والتركيز بشكل كبير',
        'مضاد طبيعي للشيخوخة وتجديد الخلايا'
      ],
      usage: [
        { step: 'تناول ملعقة صغيرة على الريق للحصول على أقصى فائدة', icon: 'ri-sun-line' },
        { step: 'يُستخدم في المناسبات الخاصة والضيافة الفاخرة', icon: 'ri-gift-line' },
        { step: 'يُضاف بكميات قليلة للمشروبات الفاخرة', icon: 'ri-goblet-line' },
        { step: 'يُستخدم في الوصفات العلاجية التقليدية', icon: 'ri-medicine-bottle-line' },
        { step: 'يُحفظ في مكان بارد وجاف للحفاظ على جودته', icon: 'ri-archive-line' }
      ],
      origin: {
        title: 'من مواسم استثنائية نادرة',
        description: 'يُنتج العسل المربعي في ظروف مناخية استثنائية نادرة الحدوث، عندما تتفتح أزهار السدر في وقت محدد جداً من السنة. هذه الظروف الفريدة تحدث مرة كل عدة سنوات، مما يجعل هذا العسل نادراً وثميناً للغاية.',
        image: 'https://readdy.ai/api/search-image?query=Exceptional%20rare%20Sidr%20trees%20blooming%20in%20perfect%20conditions%2C%20unique%20honey%20production%20season%2C%20pristine%20Hadramout%20valley%2C%20exclusive%20natural%20environment%2C%20limited%20season%20flowers%2C%20authentic%20rare%20landscape&width=1200&height=600&seq=origin4&orientation=landscape'
      }
    },
    'summer': {
      id: 'summer',
      name: 'العسل الصيفي',
      subtitle: 'من حضرموت الحارة في فصل الصيف',
      description: 'العسل الصيفي هو عسل طبيعي يُنتج خلال فصل الصيف الحار في حضرموت، حيث تزهر أنواع خاصة من النباتات التي تتحمل الحرارة العالية. يتميز بلونه الذهبي الفاتح وطعمه الخفيف المنعش، ويحمل بصمة أرض حضرموت الحارة في كل قطرة. هذا العسل متوفر على مدار السنة ويُعتبر خياراً ممتازاً للاستخدام اليومي.',
      badge: 'صيفي',
      color: 'from-yellow-400 to-orange-500',
      images: [
        'https://readdy.ai/api/search-image?query=Summer%20honey%20in%20jar%20with%20light%20golden%20color%2C%20seasonal%20summer%20honey%20from%20Hadramout%2C%20natural%20organic%20honey%2C%20affordable%20quality%20honey%2C%20clean%20background%2C%20professional%20photography&width=800&height=800&seq=summer1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Summer%20honey%20jar%20from%20side%20showing%20light%20color%2C%20premium%20glass%20container%2C%20natural%20honey%2C%20clean%20product%20photography&width=800&height=800&seq=summer2&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Light%20summer%20honey%20being%20poured%2C%20honey%20flow%20and%20texture%2C%20natural%20organic%20product%2C%20clean%20background&width=800&height=800&seq=summer3&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Summer%20honey%20with%20summer%20flowers%2C%20natural%20honey%20production%2C%20traditional%20beekeeping%20in%20hot%20climate%2C%20seasonal%20flowers%2C%20organic%20setting&width=800&height=800&seq=summer4&orientation=squarish'
      ],
      features: [
        { icon: 'ri-sun-line', title: 'إنتاج صيفي', desc: 'يُنتج خلال فصل الصيف من أزهار تتحمل الحرارة' },
        { icon: 'ri-time-line', title: 'متوفر على مدار السنة', desc: 'يمكن الحصول عليه في أي وقت من السنة' },
        { icon: 'ri-checkbox-circle-line', title: 'جودة موثوقة', desc: 'يخضع لمعايير جودة صارمة' },
        { icon: 'ri-map-pin-line', title: 'من حضرموت الأصيل', desc: 'يحمل نكهة وخصائص أرض حضرموت الفريدة' },
        { icon: 'ri-hand-coin-line', title: 'قيمة ممتازة', desc: 'جودة عالية بسعر مناسب للجميع' },
        { icon: 'ri-user-smile-line', title: 'مناسب للعائلة', desc: 'خيار مثالي للاستخدام اليومي لجميع أفراد العائلة' }
      ],
      nutritionalInfo: [
        { label: 'السعرات الحرارية', value: '295 كالوري/100g', icon: 'ri-fire-line' },
        { label: 'الكربوهيدرات', value: '80.8g', icon: 'ri-pie-chart-line' },
        { label: 'السكريات الطبيعية', value: '80.5g', icon: 'ri-drop-line' },
        { label: 'البروتين', value: '0.3g', icon: 'ri-pulse-line' },
        { label: 'الفيتامينات', value: 'متنوعة', icon: 'ri-capsule-line' },
        { label: 'المعادن', value: 'متوازنة', icon: 'ri-flask-line' }
      ],
      benefits: [
        'مصدر طبيعي للطاقة في الأيام الحارة',
        'يساعد في ترطيب الجسم وتعويض السوائل',
        'يعزز المناعة خلال فصل الصيف',
        'منعش وخفيف على المعدة',
        'مفيد للأطفال والرياضيين',
        'يساعد في الحفاظ على النشاط والحيوية',
        'يحسن الهضم ويخفف من مشاكل المعدة',
        'مناسب للاستخدام اليومي المنتظم'
      ],
      usage: [
        { step: 'يُضاف إلى العصائر الطبيعية للحصول على مشروب منعش', icon: 'ri-goblet-line' },
        { step: 'يُستخدم في تحضير المثلجات والحلويات الصيفية', icon: 'ri-cake-line' },
        { step: 'يُخلط مع الماء البارد كمشروب طاقة طبيعي', icon: 'ri-cup-line' },
        { step: 'يُدهن على الخبز كوجبة إفطار خفيفة', icon: 'ri-cake-3-line' },
        { step: 'يُستخدم في تتبيل السلطات والأطباق الصيفية', icon: 'ri-bowl-line' }
      ],
      origin: {
        title: 'من صيف حضرموت الحار',
        description: 'يُنتج العسل الصيفي خلال أشهر الصيف الحارة في حضرموت، حيث تزهر نباتات خاصة تتكيف مع الحرارة العالية. النحل يجمع الرحيق من هذه الأزهار الصيفية، منتجاً عسلاً خفيفاً ومنعشاً يحمل طابع الصيف الحضرمي.',
        image: 'https://readdy.ai/api/search-image?query=Summer%20landscape%20in%20Hadramout%20with%20summer%20flowers%2C%20hot%20climate%20honey%20production%2C%20traditional%20beekeeping%20in%20summer%2C%20seasonal%20flowers%20blooming%20in%20heat%2C%20natural%20summer%20environment&width=1200&height=600&seq=origin5&orientation=landscape'
      }
    }
  };

  const product = products[id as keyof typeof products] || products['sidr-royal'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-6">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-3 text-sm">
            <a href="/" className="text-[#935624] hover:underline flex items-center">
              <i className="ri-home-4-line ml-1"></i>
              الرئيسية
            </a>
            <i className="ri-arrow-left-s-line text-gray-400"></i>
            <a href="/products" className="text-[#935624] hover:underline">المنتجات</a>
            <i className="ri-arrow-left-s-line text-gray-400"></i>
            <span className="text-gray-700 font-semibold">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Product Images Gallery */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative group">
                <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div className={`absolute top-6 right-6 bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-full text-base font-bold shadow-xl`}>
                    <i className="ri-award-line ml-2"></i>
                    {product.badge}
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-br-full"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-black/20 to-transparent rounded-tl-full"></div>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-xl overflow-hidden border-3 transition-all duration-300 transform hover:scale-105 ${
                      selectedImage === index 
                        ? `border-[#935624] shadow-lg` 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {selectedImage === index && (
                      <div className="absolute inset-0 bg-[#935624]/20"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Title Section */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#16372e] mb-3 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-[#935624] font-semibold mb-6">
                  {product.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-[#935624]/20">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-r ${product.color} rounded-full ml-4`}>
                    <i className="ri-customer-service-2-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#16372e]">هل تريد طلب هذا المنتج؟</h3>
                    <p className="text-gray-600">تواصل معنا للحصول على أفضل الأسعار</p>
                  </div>
                </div>
                <a 
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center bg-gradient-to-r ${product.color} text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <i className="ri-message-3-line ml-2 text-xl"></i>
                  تواصل معنا الآن
                </a>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border-2 border-gray-100 rounded-xl p-4 text-center hover:border-[#935624]/30 transition-all">
                  <i className="ri-shield-check-line text-3xl text-[#935624] mb-2"></i>
                  <p className="text-sm font-semibold text-gray-700">جودة مضمونة</p>
                </div>
                <div className="bg-white border-2 border-gray-100 rounded-xl p-4 text-center hover:border-[#935624]/30 transition-all">
                  <i className="ri-leaf-line text-3xl text-green-600 mb-2"></i>
                  <p className="text-sm font-semibold text-gray-700">طبيعي 100%</p>
                </div>
                <div className="bg-white border-2 border-gray-100 rounded-xl p-4 text-center hover:border-[#935624]/30 transition-all">
                  <i className="ri-map-pin-line text-3xl text-[#935624] mb-2"></i>
                  <p className="text-sm font-semibold text-gray-700">من حضرموت</p>
                </div>
                <div className="bg-white border-2 border-gray-100 rounded-xl p-4 text-center hover:border-[#935624]/30 transition-all">
                  <i className="ri-award-line text-3xl text-amber-600 mb-2"></i>
                  <p className="text-sm font-semibold text-gray-700">معتمد عالمياً</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16372e] mb-4">المميزات الرئيسية</h2>
            <div className="w-24 h-1 bg-[#935624] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${product.color} rounded-2xl mb-4 shadow-lg`}>
                  <i className={`${feature.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#16372e] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-2 space-x-2">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'description'
                    ? `bg-gradient-to-r ${product.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-file-text-line ml-2"></i>
                نظرة عامة
              </button>
              <button
                onClick={() => setActiveTab('nutrition')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'nutrition'
                    ? `bg-gradient-to-r ${product.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-heart-pulse-line ml-2"></i>
                القيمة الغذائية
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'benefits'
                    ? `bg-gradient-to-r ${product.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-shield-check-line ml-2"></i>
                الفوائد الصحية
              </button>
              <button
                onClick={() => setActiveTab('usage')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'usage'
                    ? `bg-gradient-to-r ${product.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-information-line ml-2"></i>
                طريقة الاستخدام
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12 shadow-xl animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-[#16372e] mb-6 flex items-center">
                      <i className={`ri-map-pin-line text-[#935624] ml-3 text-4xl`}></i>
                      {product.origin.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-8">
                      {product.origin.description}
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${product.color} rounded-full mb-2 mx-auto`}>
                          <i className="ri-leaf-line text-white text-2xl"></i>
                        </div>
                        <p className="text-sm font-semibold text-gray-700">طبيعي</p>
                      </div>
                      <div className="text-center">
                        <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${product.color} rounded-full mb-2 mx-auto`}>
                          <i className="ri-shield-check-line text-white text-2xl"></i>
                        </div>
                        <p className="text-sm font-semibold text-gray-700">مضمون</p>
                      </div>
                      <div className="text-center">
                        <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${product.color} rounded-full mb-2 mx-auto`}>
                          <i className="ri-award-line text-white text-2xl"></i>
                        </div>
                        <p className="text-sm font-semibold text-gray-700">معتمد</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={product.origin.image}
                      alt={product.origin.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Nutrition Tab */}
            {activeTab === 'nutrition' && (
              <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-100 animate-fadeIn">
                <h3 className="text-3xl font-bold text-[#16372e] mb-8 text-center flex items-center justify-center">
                  <i className="ri-heart-pulse-line text-[#935624] ml-3 text-4xl"></i>
                  القيمة الغذائية لكل 100 جرام
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.nutritionalInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${product.color} rounded-full mb-4 mx-auto shadow-lg`}>
                        <i className={`${info.icon} text-white text-2xl`}></i>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{info.label}</p>
                      <p className="text-2xl font-bold text-[#16372e]">{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 shadow-xl animate-fadeIn">
                <h3 className="text-3xl font-bold text-[#16372e] mb-8 text-center flex items-center justify-center">
                  <i className="ri-shield-check-line text-green-600 ml-3 text-4xl"></i>
                  الفوائد الصحية المثبتة علمياً
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg">
                          <i className="ri-check-line text-white text-xl font-bold"></i>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Usage Tab */}
            {activeTab === 'usage' && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 shadow-xl animate-fadeIn">
                <h3 className="text-3xl font-bold text-[#16372e] mb-8 text-center flex items-center justify-center">
                  <i className="ri-information-line text-blue-600 ml-3 text-4xl"></i>
                  طريقة الاستخدام الموصى بها
                </h3>
                <div className="space-y-6">
                  {product.usage.map((use, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300 transform hover:translate-x-2"
                    >
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-r ${product.color} rounded-full shadow-lg`}>
                          <i className={`${use.icon} text-white text-2xl`}></i>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className={`bg-gradient-to-r ${product.color} text-white px-3 py-1 rounded-full text-sm font-bold ml-3`}>
                            {index + 1}
                          </span>
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">{use.step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${product.color}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-24 h-24 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full mb-8 mx-auto">
              <i className="ri-customer-service-2-line text-6xl"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز لتجربة {product.name}؟
            </h2>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95">
              تواصل معنا الآن للحصول على هذا المنتج الفريد واستمتع بأجود أنواع العسل الحضرمي
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact"
                className="inline-flex items-center bg-white text-[#16372e] px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <i className="ri-message-3-line ml-3 text-2xl"></i>
                تواصل معنا الآن
              </a>
              <a 
                href="/products"
                className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/30 transition-all duration-300"
              >
                <i className="ri-arrow-right-line ml-3 text-2xl"></i>
                تصفح المزيد من المنتجات
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
