// ============================================
// Premier Thoroughbreds — Language System
// EN / JA toggle
// ============================================

const TRANSLATIONS = {
  en: {
    // Nav
    nav_horses: "Our Horses",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cta: "Inquire Now",

    // Hero
    hero_eyebrow: "American Thoroughbreds · Est. in Excellence",
    hero_title: "Where Champions<br><em>Begin Their Legacy</em>",
    hero_sub: "Exceptional race horses and proven breeding stock sourced from the finest farms in Kentucky, Florida, and California. Available to buyers worldwide.",
    hero_btn1: "View Available Horses",
    hero_btn2: "Speak With Us",

    // Stats
    stat1_num: "50+", stat1_label: "Horses Sold",
    stat2_num: "12+", stat2_label: "Countries Served",
    stat3_num: "100%", stat3_label: "Verified Bloodlines",
    stat4_num: "24/7", stat4_label: "Buyer Support",

    // Horses section
    horses_eyebrow: "Currently Available",
    horses_title: "Our Thoroughbreds",
    horses_sub: "Each horse is individually evaluated, vetted, and represented with full transparency on bloodlines, race record, and health history.",
    filter_all: "All Horses",
    filter_stallion: "Stallions",
    filter_filly: "Fillies",
    filter_gelding: "Geldings",
    filter_colt: "Colts",

    // Horse card
    card_view: "View Horse →",
    card_available: "Available",
    card_sold: "Sold",

    // About
    about_eyebrow: "Why Us",
    about_title: "Trusted by Buyers<br><em>Around the World</em>",
    about_body: "We specialize in connecting international buyers with the finest American thoroughbreds. Every horse we represent has been personally evaluated for soundness, temperament, and potential.",
    about_li1: "Full veterinary records and pre-purchase exam support",
    about_li2: "Verified bloodlines with Jockey Club registration",
    about_li3: "Export assistance and international shipping coordination",
    about_li4: "Video walkthroughs and live video calls available",
    about_li5: "Post-sale support and follow-up",
    about_btn: "Get In Touch",
    about_badge_num: "15+",
    about_badge_label: "Years of Experience",

    // Testimonials
    test_eyebrow: "From Our Buyers",
    test_title: "Stories of Success",
    test1_quote: "\"The entire process was seamless. From the first inquiry to the horse arriving at our stable in Japan, everything was handled professionally. Our filly won her debut three months later.\"",
    test1_name: "Kenji Tanaka",
    test1_org: "Racing Stables, Tokyo",
    test2_quote: "\"We've purchased three horses through Premier Thoroughbreds. The bloodline documentation, vet history, and export coordination were all handled for us. Exceptional service.\"",
    test2_name: "Ahmed Al-Sayed",
    test2_org: "Equestrian Club, Dubai",
    test3_quote: "\"The horse arrived in perfect condition and exceeded all expectations. Premier Thoroughbreds made the entire international purchase effortless.\"",
    test3_name: "Marco Castellano",
    test3_org: "Scuderia Equestre, Italy",

    // Contact
    contact_eyebrow: "Get In Touch",
    contact_title: "Interested in a Horse?",
    contact_body: "Fill out the form and we'll be in touch within 24 hours. For urgent inquiries, WhatsApp us directly.",
    contact_location: "Lexington, Kentucky, USA",

    // Form
    form_name: "Your Name *",
    form_name_ph: "Full name",
    form_email: "Email Address *",
    form_email_ph: "your@email.com",
    form_country: "Country",
    form_country_ph: "Your country",
    form_horse: "Horse of Interest",
    form_horse_default: "— Select a horse (optional) —",
    form_budget: "Budget Range",
    form_budget_default: "— Select range —",
    form_budget_1: "Under $50,000",
    form_budget_2: "$50,000 – $100,000",
    form_budget_3: "$100,000 – $250,000",
    form_budget_4: "$250,000+",
    form_budget_5: "Open / Flexible",
    form_message: "Message",
    form_message_ph: "Tell us what you're looking for, any specific requirements, or questions you have...",
    form_video: "I'd like to schedule a video call / live walkthrough",
    form_submit: "Send Inquiry",
    form_sending: "Sending...",
    form_note: "We respond within 24 hours. Your information is never shared.",
    form_success: "Thank you! We've received your inquiry and will be in touch shortly.",

    // Footer
    footer_copy: "© 2025 Premier Thoroughbreds USA. All horses subject to prior sale.",

    // Horse detail
    detail_back: "← Back to all horses",
    detail_inquire: "Inquire About This Horse",
    detail_foaled: "Foaled",
    detail_gender: "Gender",
    detail_color: "Color",
    detail_sire: "Sire",
    detail_dam: "Dam",
    detail_dam_sire: "Dam's Sire",
    detail_location: "Location",
    detail_status: "Status",
    detail_available: "Available now",
    detail_sold: "Sold",
    detail_videos: "Videos",
    detail_eyebrow: "Make an Inquiry",
    detail_interested: "Interested in",
    detail_body: "Fill in your details and we'll reach out within 24 hours with full documentation, additional media, and to arrange a video call if needed.",
  },

  ja: {
    // Nav
    nav_horses: "馬の一覧",
    nav_about: "私たちについて",
    nav_contact: "お問い合わせ",
    nav_cta: "今すぐ問い合わせる",

    // Hero
    hero_eyebrow: "アメリカン・サラブレッド · 卓越の歴史",
    hero_title: "チャンピオンが<br><em>レガシーを刻む場所</em>",
    hero_sub: "ケンタッキー、フロリダ、カリフォルニアの一流牧場から厳選されたサラブレッド。世界中のバイヤーへご提供いたします。",
    hero_btn1: "馬の一覧を見る",
    hero_btn2: "お問い合わせ",

    // Stats
    stat1_num: "50頭+", stat1_label: "販売実績",
    stat2_num: "12ヶ国+", stat2_label: "取引実績国",
    stat3_num: "100%", stat3_label: "血統証明済み",
    stat4_num: "24/7", stat4_label: "バイヤーサポート",

    // Horses section
    horses_eyebrow: "現在販売中",
    horses_title: "サラブレッド一覧",
    horses_sub: "すべての馬を個別に評価・検査し、血統・競走成績・健康状態を完全な透明性でご提供します。",
    filter_all: "すべて",
    filter_stallion: "牡馬",
    filter_filly: "牝馬",
    filter_gelding: "騸馬",
    filter_colt: "当歳・2歳牡",

    // Horse card
    card_view: "詳細を見る →",
    card_available: "販売中",
    card_sold: "売約済",

    // About
    about_eyebrow: "選ばれる理由",
    about_title: "世界中のバイヤーに<br><em>信頼されています</em>",
    about_body: "私たちは国際的なバイヤーとアメリカ最高峰のサラブレッドをつなぐことを専門としています。すべての馬は健康状態、気性、潜在能力を個別に評価しています。",
    about_li1: "獣医診断書・購買前検査のサポート",
    about_li2: "ジョッキークラブ登録による血統証明",
    about_li3: "輸出手続き・国際輸送のコーディネート",
    about_li4: "ビデオウォークスルー・ビデオ通話対応",
    about_li5: "購入後のアフターサポート",
    about_btn: "お問い合わせ",
    about_badge_num: "15年+",
    about_badge_label: "業界経験",

    // Testimonials
    test_eyebrow: "ご購入者の声",
    test_title: "成功事例",
    test1_quote: "「最初の問い合わせから日本の厩舎に馬が到着するまで、すべてがスムーズでした。購入した牝馬はデビュー戦で勝利しました。」",
    test1_name: "田中 賢治",
    test1_org: "競馬厩舎、東京",
    test2_quote: "「プレミア・サラブレッズを通じて3頭購入しました。血統書類、獣医歴、輸出手続きすべてをサポートしていただきました。」",
    test2_name: "アハメド・アル＝サイード",
    test2_org: "乗馬クラブ、ドバイ",
    test3_quote: "「馬は完璧な状態で到着し、すべての期待を上回りました。国際購入がこれほどスムーズだとは思いませんでした。」",
    test3_name: "マルコ・カステラーノ",
    test3_org: "スクデリア・エクエストレ、イタリア",

    // Contact
    contact_eyebrow: "お問い合わせ",
    contact_title: "ご興味のある方へ",
    contact_body: "フォームにご記入いただければ、24時間以内にご連絡いたします。お急ぎの場合はWhatsAppでも対応しております。",
    contact_location: "レキシントン、ケンタッキー州、米国",

    // Form
    form_name: "お名前 *",
    form_name_ph: "フルネーム",
    form_email: "メールアドレス *",
    form_email_ph: "your@email.com",
    form_country: "国・地域",
    form_country_ph: "お住まいの国",
    form_horse: "ご興味の馬",
    form_horse_default: "— 馬を選択（任意）—",
    form_budget: "ご予算",
    form_budget_default: "— 選択してください —",
    form_budget_1: "5万ドル未満",
    form_budget_2: "5万〜10万ドル",
    form_budget_3: "10万〜25万ドル",
    form_budget_4: "25万ドル以上",
    form_budget_5: "未定・応相談",
    form_message: "メッセージ",
    form_message_ph: "ご要望やご質問などをご記入ください...",
    form_video: "ビデオ通話・ライブウォークスルーを希望する",
    form_submit: "送信する",
    form_sending: "送信中...",
    form_note: "24時間以内にご返信いたします。個人情報は第三者に提供しません。",
    form_success: "お問い合わせありがとうございます。近日中にご連絡いたします。",

    // Footer
    footer_copy: "© 2025 プレミア・サラブレッズ USA. 馬は売約済みとなる場合があります。",

    // Horse detail
    detail_back: "← 馬一覧に戻る",
    detail_inquire: "この馬について問い合わせる",
    detail_foaled: "生年月日",
    detail_gender: "性別",
    detail_color: "毛色",
    detail_sire: "父",
    detail_dam: "母",
    detail_dam_sire: "母の父",
    detail_location: "所在地",
    detail_status: "ステータス",
    detail_available: "販売中",
    detail_sold: "売約済",
    detail_videos: "動画",
    detail_eyebrow: "お問い合わせ",
    detail_interested: "に関するお問い合わせ",
    detail_body: "フォームにご記入いただければ、24時間以内に書類・追加メディアをお送りし、ビデオ通話の手配もいたします。",
  }
};

// Horse translations (Japanese)
const HORSE_TRANSLATIONS = {
  "headline-hunter": {
    ja: {
      gender: "牡馬（当歳）",
      color: "栗毛",
      foaled: "2025年3月21日",
      location: "ケンタッキー州、米国",
      price: "価格はお問い合わせください",
      record: "当歳 — 未出走",
      description: "2025年3月21日生まれ、ケンタッキー産の栗毛牡馬。父アメリカン・ファラオ、母ヘッドライン・ハンター（母父タピザール）。アメリカ競馬史上最高の三冠馬の血を引く当歳馬を手にする貴重な機会です。アメリカン・ファラオは現代競馬で最も影響力のある種牡馬の一頭であり、産駒は北米だけで9500万ドル以上を獲得し、日本・カナダ・米国でチャンピオンを輩出しています。母ヘッドライン・ハンターはブラックタイプ勝ち馬で、グルフストリームパークのカプティバアイランドSを含む総獲得賞金142,060ドル。母父タピザールはタピット産駒として世界最高峰で活躍した馬たちを輩出しています。スピード・クラス・国際的な血統の深さを兼ね備えた一頭です。",
      highlights: [
        "父アメリカン・ファラオ（三冠馬）",
        "母はブラックタイプ勝ち馬（獲得賞金142,060ドル）",
        "母父タピザール（タピット系）",
        "国際的に深い牝系",
        "ケンタッキー産",
        "競走・繁殖いずれにも最適"
      ]
    }
  }
};

// ---- Language engine ----
let currentLang = localStorage.getItem('lang') || 'en';

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

function applyLanguage() {
  document.documentElement.lang = currentLang === 'ja' ? 'ja' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });

  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n-label'));
  });

  // Update toggle button
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = currentLang === 'en' ? '日本語' : 'English';

  // Re-render horse grid if on index
  if (typeof renderHorses === 'function') renderHorses(currentFilter || 'all');
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ja' : 'en';
  localStorage.setItem('lang', currentLang);
  applyLanguage();
}

function getHorseText(horse, field) {
  if (currentLang === 'ja' && HORSE_TRANSLATIONS[horse.id] && HORSE_TRANSLATIONS[horse.id].ja[field]) {
    return HORSE_TRANSLATIONS[horse.id].ja[field];
  }
  return horse[field];
}
