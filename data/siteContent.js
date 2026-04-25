export const defaultLanguage = 'de';

export const supportedLanguages = [
  { code: 'de', shortLabel: 'DE', label: 'Deutsch' },
  { code: 'tr', shortLabel: 'TR', label: 'Turkce' },
  { code: 'en', shortLabel: 'EN', label: 'English' },
];

export const siteConfig = {
  name: 'Kocer Bau',
  legalName: 'Kocer Bau Deutschland',
  siteUrl: 'https://www.kocerbau.com',
  logoPath: '/img/logo.png',
  phone: '+49 172 7040172',
  emergencyPhone: '+49 172 7040172',
  email: 'info@kocerbau.com',
  serviceArea: 'Berlin, Brandenburg und ausgewahlte Wohnprojekte deutschlandweit',
  address: {
    streetAddress: 'Vor-Ort-Termine nach Vereinbarung',
    addressLocality: 'Berlin',
    addressRegion: 'Berlin',
    postalCode: '12055',
    addressCountry: 'DE',
  },
};

export const serviceCategoryOrder = [
  'all',
  'kitchens',
  'bathrooms',
  'painting',
  'flooring',
  'interiorFinishing',
  'fullRemodeling',
];

const translations = {
  de: {
    seo: {
      defaultTitle: 'Kocer Bau Deutschland',
      defaultDescription:
        'Mehrsprachiges Home Remodeling in Deutschland mit Schwerpunkten auf Kuche, Bad, Malerarbeiten, Bodenverlegung, Innenausbau und Komplettsanierung.',
      homeTitle: 'Home Remodeling fur Deutschland',
      servicesTitle: 'Leistungen',
      aboutTitle: 'Unternehmen',
      contactTitle: 'Kontakt',
      referencesTitle: 'Referenzen',
    },
    nav: {
      services: 'Leistungen',
      references: 'Referenzen',
      about: 'Unternehmen',
      contact: 'Kontakt',
      emergency: 'Beratung anrufen',
    },
    common: {
      learnMore: 'Mehr erfahren',
      requestQuote: 'Angebot anfragen',
      getInTouch: 'Kontakt aufnehmen',
      emergencyLine: 'Beratung & Termine',
      openMenu: 'Menu offnen',
      closeMenu: 'Menu schliessen',
      scrollTop: 'Nach oben',
      categories: 'Kategorien',
      coverage: 'Einsatzgebiet',
      languages: 'Sprachen',
      serviceHours: 'Beratungszeiten',
      serviceHoursValue: 'Mo-Sa fur Beratung, Planung und Vor-Ort-Termine',
    },
    footer: {
      blurb:
        'Kocer Bau modernisiert Wohnungen, Hauser und Anlageobjekte mit klarer Planung, sauberer Ausfuhrung und koordinierter Bauabfolge.',
      navigation: 'Navigation',
      services: 'Leistungen',
      contact: 'Kontakt',
      rights: 'Alle Rechte vorbehalten.',
      note: 'Mehrsprachige Betreuung auf Deutsch, Turkisch und Englisch.',
    },
    home: {
      badge: 'Kostenlose Erstberatung fur Renovierungsprojekte',
      title: 'Home Remodeling fur Kuche, Bad, Farbe und Boden in Deutschland.',
      intro:
        'Kocer Bau begleitet Wohnungs- und Haussanierungen von der ersten Besichtigung bis zur sauberen Ubergabe auf Deutsch, Turkisch und Englisch.',
      serviceEyebrow: 'Leistungen',
      reasonsEyebrow: 'Warum Kocer',
      processEyebrow: 'Ablauf',
      coverageEyebrow: 'Deutschland',
      primaryCta: 'Leistungen ansehen',
      secondaryCta: 'Kostenlose Anfrage senden',
      stats: [
        { value: '3', label: 'Sprachen fur Beratung und Baukoordination' },
        { value: '6', label: 'Kernleistungen von Kuche bis Komplettumbau' },
        { value: 'Mo-Sa', label: 'Planbare Besichtigungen und Projektstarts' },
      ],
      serviceSectionTitle: 'Leistungen fur Kuche, Bad, Malerarbeiten, Boden und Innenausbau',
      serviceSectionText:
        'Wir koordinieren Vorbereitung, Materialabstimmung, Ausfuhrung und finale Details fur Wohnungen, Hauser und Investitionsobjekte.',
      reasonsTitle: 'Warum Kunden mit Kocer renovieren',
      reasons: [
        {
          title: 'Klare Bauplanung',
          text: 'Raume, Gewerke, Materialwunsche und Terminfenster werden strukturiert abgestimmt.',
        },
        {
          title: 'Saubere Ausfuhrung',
          text: 'Wir arbeiten geordnet vor Ort und achten auf saubere Abschlusse bei Farbe, Boden und Einbauten.',
        },
        {
          title: 'Mehrsprachige Kommunikation',
          text: 'Eigentumer, Familien und Projektbeteiligte konnen den Ablauf auf Deutsch, Turkisch und Englisch verfolgen.',
        },
      ],
      processTitle: 'So arbeiten wir',
      process: [
        {
          step: '01',
          title: 'Besichtigung',
          text: 'Wir schauen uns Raume, Bestand, Stilwunsche und notwendige Leistungen vor Ort an.',
        },
        {
          step: '02',
          title: 'Angebot & Planung',
          text: 'Sie erhalten einen klaren Leistungsumfang mit Materialrichtung, Ablauf und Kosteneinschatzung.',
        },
        {
          step: '03',
          title: 'Ausfuhrung',
          text: 'Unser Team setzt die vereinbarten Arbeiten sauber und koordiniert um.',
        },
        {
          step: '04',
          title: 'Abnahme',
          text: 'Zum Schluss gehen wir alle Details gemeinsam durch und ubergeben das fertige Ergebnis.',
        },
      ],
      coverageTitle: 'Einsatzgebiet in Deutschland',
      coverageText:
        'Unser Schwerpunkt liegt auf Berlin und Brandenburg. Fur ausgesuchte Wohn- und Innenausbauprojekte begleiten wir auch weitere Standorte in Deutschland.',
      coverageCards: [
        {
          title: 'Wohnungen & Hauser',
          text: 'Modernisierung von Kuche, Bad, Wanden, Boden und kompletten Wohnbereichen.',
        },
        {
          title: 'Vermieter & Investoren',
          text: 'Zuverlassige Auffrischungen und komplette Renovierungen fur Neuvermietung oder Verkauf.',
        },
        {
          title: 'Kleine Gewerbeflachen',
          text: 'Innenausbau, Anstrich und Bodenarbeiten fur Ateliers, Studios und Buros.',
        },
      ],
      finalCtaTitle: 'Starten Sie Ihr Umbauprojekt mit einem klaren Plan',
      finalCtaText:
        'Senden Sie uns Fotos, Raumanzahl und Zieltermin. Wir melden uns mit einer strukturierten Einschatzung und den nachsten Schritten.',
    },
    servicesPage: {
      title: 'Alle Leistungen',
      intro:
        'Wahlen Sie eine Kategorie oder sehen Sie sich das gesamte Leistungsangebot an. Jede Leistung ist auf hochwertige Innenraum- und Wohnrenovierung in Deutschland ausgerichtet.',
      breadcrumbHome: 'Startseite',
      breadcrumbCurrent: 'Leistungen',
      sidebarTitle: 'Leistungskategorien',
      empty: 'Fur diese Kategorie sind aktuell keine Leistungen hinterlegt.',
      cardHighlights: 'Typische Inhalte',
      cardCta: 'Leistung anfragen',
    },
    about: {
      title: 'Unternehmen',
      lead:
        'Kocer Bau ist auf Home Remodeling und Innenausbau fur Wohnungen, Hauser und kleinere Gewerbeflachen spezialisiert. Unser Fokus liegt auf sauberer Umsetzung, klaren Absprachen und einem stimmigen Endergebnis.',
      paragraphs: [
        'Wir betreuen Kuechenmodernisierungen, Badsanierungen, Malerarbeiten, Bodenprojekte und komplette Wohnungsauffrischungen. Dabei koordinieren wir die einzelnen Arbeitsschritte so, dass Kunden den Ablauf nachvollziehen und entspannt entscheiden konnen.',
        'Als mehrsprachiges Team begleiten wir Projekte auf Deutsch, Turkisch und Englisch. Das hilft Familien, Eigentumern und internationalen Auftraggebern, wenn mehrere Beteiligte in die Renovierung eingebunden sind.',
      ],
      valuesTitle: 'Was uns wichtig ist',
      values: [
        {
          title: 'Zuverlassigkeit',
          text: 'Wir erscheinen vorbereitet, halten Termine im Blick und kommunizieren fruhzeitig, wenn Entscheidungen anstehen.',
        },
        {
          title: 'Detailqualitat',
          text: 'Saubere Kanten, passende Oberflachen und ordentlich ausgefuhrte Abschlusse machen am Ende den Unterschied.',
        },
        {
          title: 'Transparente Kommunikation',
          text: 'Wir erklaren, was gemacht wird, welche Materialien sinnvoll sind und wie der nachste Projektschritt aussieht.',
        },
      ],
    },
    references: {
      title: 'Referenzen',
      intro:
        'Typische Ruckmeldungen aus Projekten, bei denen Ablauf, Qualitat und Verlasslichkeit besonders wichtig waren.',
      items: [
        {
          quote:
            'Unsere Kuche wurde komplett neu gedacht und sauber umgesetzt. Besonders stark war die klare Kommunikation zu Material, Zeitplan und letzten Details.',
          author: 'Eigentumerfamilie, Berlin Prenzlauer Berg',
        },
        {
          quote:
            'Bad, Flur und Boden wurden in einem Durchgang modernisiert. Das Team war strukturiert, freundlich und die Wohnung wurde ordentlich hinterlassen.',
          author: 'Wohnungseigentumer, Potsdam',
        },
        {
          quote:
            'Farbkonzept, Boden und Trockenbau passten am Ende perfekt zusammen. Genau diese koordinierte Innenraumrenovierung hatten wir gesucht.',
          author: 'Investor, Brandenburg Wohnprojekt',
        },
      ],
    },
    contact: {
      title: 'Kontakt',
      intro:
        'Senden Sie uns Eckdaten zu Raumen, gewunschten Arbeiten und Ihrem Zeitplan. Wir antworten auf Deutsch, Turkisch oder Englisch.',
      cards: [
        { title: 'Telefon', value: siteConfig.phone },
        { title: 'Beratung', value: siteConfig.emergencyPhone },
        { title: 'E-Mail', value: siteConfig.email },
        { title: 'Einsatzgebiet', value: siteConfig.serviceArea },
      ],
      formTitle: 'Projekt beschreiben',
      labels: {
        name: 'Name',
        email: 'E-Mail',
        phone: 'Telefon',
        service: 'Gewunschte Leistung',
        message: 'Nachricht',
      },
      placeholders: {
        name: 'Name oder Firma',
        email: 'name@firma.de',
        phone: '+49 ...',
        service: 'z. B. Kuechenrenovierung',
        message:
          'Welche Raume sollen renoviert werden, was ist Ihr Stilwunsch und wann mochten Sie starten?',
      },
      submit: 'Anfrage senden',
      success: 'Ihre Anfrage wurde erfolgreich gesendet.',
      failure: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
      noteTitle: 'Hinweis',
      note:
        'Telefon, E-Mail und Domain wurden fur dieses Refactoring als Platzhalter gesetzt und konnen auf Ihre echten Firmendaten geandert werden.',
    },
    serviceDetail: {
      back: 'Zuruck zu allen Leistungen',
      highlights: 'Typische Projektinhalte',
      relatedTitle: 'Weitere Leistungen',
      ctaTitle: 'Leistung fur Ihr Projekt anfragen',
      ctaText:
        'Nennen Sie uns Raumtyp, Umfang und Zieltermin. Wir melden uns mit einer passenden Einschatzung und dem moglichen Ablauf.',
      ctaButton: 'Kontaktformular offnen',
    },
  },
  tr: {
    seo: {
      defaultTitle: 'Kocer Bau Almanya',
      defaultDescription:
        'Almanya genelinde mutfak, banyo, boya, zemin, ic mekan ince isler ve komple tadilat alanlarinda hizmet veren cok dilli home remodeling sirketi.',
      homeTitle: 'Almanya Icin Home Remodeling',
      servicesTitle: 'Hizmetler',
      aboutTitle: 'Sirket',
      contactTitle: 'Iletisim',
      referencesTitle: 'Referanslar',
    },
    nav: {
      services: 'Hizmetler',
      references: 'Referanslar',
      about: 'Sirket',
      contact: 'Iletisim',
      emergency: 'Danismanlik icin ara',
    },
    common: {
      learnMore: 'Detaylari gor',
      requestQuote: 'Teklif iste',
      getInTouch: 'Iletisime gec',
      emergencyLine: 'Danismanlik ve randevu',
      openMenu: 'Menuyu ac',
      closeMenu: 'Menuyu kapat',
      scrollTop: 'Yukari cik',
      categories: 'Kategoriler',
      coverage: 'Hizmet alani',
      languages: 'Diller',
      serviceHours: 'Danismanlik saatleri',
      serviceHoursValue: 'Pzt-Cmt planlama, kesif ve proje gorusmeleri',
    },
    footer: {
      blurb:
        'Kocer Bau daire, ev ve yatirim mulklerini net planlama, temiz uygulama ve uyumlu ekip koordinasyonuyla yeniler.',
      navigation: 'Navigasyon',
      services: 'Hizmetler',
      contact: 'Iletisim',
      rights: 'Tum haklari saklidir.',
      note: 'Almanca, Turkce ve Ingilizce destek veriyoruz.',
    },
    home: {
      badge: 'Tadilat projeleri icin ucretsiz ilk gorusme',
      title: 'Almanya genelinde mutfak, banyo, boya ve zemin odakli home remodeling hizmetleri.',
      intro:
        'Kocer Bau, daire ve ev yenilemelerini ilk kesiften temiz teslimata kadar Almanca, Turkce ve Ingilizce olarak yonetir.',
      serviceEyebrow: 'Hizmetler',
      reasonsEyebrow: 'Neden Kocer',
      processEyebrow: 'Surec',
      coverageEyebrow: 'Almanya',
      primaryCta: 'Hizmetleri incele',
      secondaryCta: 'Ucretsiz talep gonder',
      stats: [
        { value: '3', label: 'danismanlik ve proje koordinasyon dili' },
        { value: '6', label: 'mutfaktan komple tadilata uzanan ana hizmet' },
        { value: 'Pzt-Cmt', label: 'kesif ve proje planlama gunleri' },
      ],
      serviceSectionTitle: 'Mutfak, banyo, boya, zemin ve ic mekan yenileme hizmetleri',
      serviceSectionText:
        'Hazirlik, malzeme secimi, uygulama ve son detaylari daireler, evler ve yatirim projeleri icin tek akista koordine ediyoruz.',
      reasonsTitle: 'Musteriler neden Kocer ile yeniliyor',
      reasons: [
        {
          title: 'Net proje plani',
          text: 'Alanlar, is kalemleri, malzeme tercihleri ve tarih araliklari acik sekilde belirlenir.',
        },
        {
          title: 'Temiz uygulama',
          text: 'Boyadan zemine kadar duzenli, ozenli ve mekanin son gorunumune yakisan bir uygulama sunariz.',
        },
        {
          title: 'Cok dilli iletisim',
          text: 'Ev sahipleri ve aileler sureci Almanca, Turkce ve Ingilizce takip edebilir.',
        },
      ],
      processTitle: 'Nasil calisiyoruz',
      process: [
        {
          step: '01',
          title: 'Kesif',
          text: 'Mekani, mevcut durumu, stil beklentisini ve gerekli is kalemlerini yerinde inceleriz.',
        },
        {
          step: '02',
          title: 'Teklif ve planlama',
          text: 'Is kapsami, malzeme yonu, akıs ve maliyet cercevesi netlestirilir.',
        },
        {
          step: '03',
          title: 'Uygulama',
          text: 'Ekibimiz anlasilan isleri temiz ve koordineli sekilde hayata gecirir.',
        },
        {
          step: '04',
          title: 'Teslim',
          text: 'Son kontroller yapilir ve tamamlanan alanlar birlikte gozden gecirilir.',
        },
      ],
      coverageTitle: 'Almanya hizmet alani',
      coverageText:
        'Ana calisma alanimiz Berlin ve Brandenburg. Secili konut ve ic mekan projeleri icin Almanya genelinde de koordinasyon sagliyoruz.',
      coverageCards: [
        {
          title: 'Daireler ve evler',
          text: 'Mutfak, banyo, duvar, zemin ve tam yasam alani yenilemeleri.',
        },
        {
          title: 'Ev sahipleri ve yatirimcilar',
          text: 'Kiraya verme veya satis oncesi guvenilir yenileme ve deger artisi odakli isler.',
        },
        {
          title: 'Kucuk ticari alanlar',
          text: 'Studiolar, ofisler ve butik mekanlar icin ic mekan uygulamalari.',
        },
      ],
      finalCtaTitle: 'Tadilat projenizi net bir planla baslatin',
      finalCtaText:
        'Bize fotograflari, oda sayisini ve hedef tarihinizi gonderin. Size duzenli bir ilk degerlendirme ile donelim.',
    },
    servicesPage: {
      title: 'Tum hizmetler',
      intro:
        'Bir kategori secin veya tum hizmetleri gorun. Her hizmet Almanya odakli konut yenileme ve ic mekan tadilatina gore hazirlandi.',
      breadcrumbHome: 'Ana sayfa',
      breadcrumbCurrent: 'Hizmetler',
      sidebarTitle: 'Hizmet kategorileri',
      empty: 'Bu kategori icin henuz bir hizmet bulunmuyor.',
      cardHighlights: 'Tipik kapsam',
      cardCta: 'Hizmet talep et',
    },
    about: {
      title: 'Sirket',
      lead:
        'Kocer Bau; daire, ev ve kucuk ticari alanlar icin home remodeling ve ic mekan yenileme hizmetlerinde uzmanlasmistir. Temiz uygulama, net anlasma ve dengeli son gorunum bizim icin temel onceliktir.',
      paragraphs: [
        'Mutfak yenilemeleri, banyo donusumleri, boya isleri, zemin uygulamalari ve komple ic mekan duzenlemeleri yurutuyoruz. Her adimi musterinin ne oldugunu anlayacagi sekilde planliyoruz.',
        'Cok dilli ekibimiz sayesinde aileler, ev sahipleri ve uluslararasi musteriler projeyi Almanca, Turkce ve Ingilizce olarak rahatca takip edebilir.',
      ],
      valuesTitle: 'Bizim icin onemli olanlar',
      values: [
        {
          title: 'Guvenilirlik',
          text: 'Hazir gelir, tarihleri takip eder ve karar gerektiren noktalari zamaninda paylasiriz.',
        },
        {
          title: 'Detay kalitesi',
          text: 'Temiz kenarlar, dogru yuzey secimi ve duzenli bitisler son gorunumun kalitesini belirler.',
        },
        {
          title: 'Acik iletisim',
          text: 'Ne yapildigini, hangi malzemelerin uygun oldugunu ve sonraki adimi net sekilde aciklariz.',
        },
      ],
    },
    references: {
      title: 'Referanslar',
      intro:
        'Takvim, kalite ve guvenilirligin belirleyici oldugu tipik proje geri bildirimleri.',
      items: [
        {
          quote:
            'Mutfagimiz bastan sona yenilendi ve her adim net anlatildi. Malzeme seciminden son detaylara kadar ekip cok duzenliydi.',
          author: 'Aile evi, Berlin',
        },
        {
          quote:
            'Banyo, koridor ve zemin ayni proje icinde modernize edildi. Is bitiminde mekan tertemizdi ve sonuc tam istedigimiz gibiydi.',
          author: 'Daire sahibi, Potsdam',
        },
        {
          quote:
            'Boya, zemin ve ic mekan bitisleri birbiriyle uyumlu oldu. Koordineli tadilat tam olarak aradigimiz seydi.',
          author: 'Yatirimci, Brandenburg konut projesi',
        },
      ],
    },
    contact: {
      title: 'Iletisim',
      intro:
        'Alanlar, istediginiz is kapsamı ve hedef tarihinizle ilgili bilgileri bize iletin. Size Almanca, Turkce veya Ingilizce donelim.',
      cards: [
        { title: 'Telefon', value: siteConfig.phone },
        { title: 'Danismanlik', value: siteConfig.emergencyPhone },
        { title: 'E-posta', value: siteConfig.email },
        { title: 'Hizmet alani', value: siteConfig.serviceArea },
      ],
      formTitle: 'Projeyi anlatin',
      labels: {
        name: 'Ad',
        email: 'E-posta',
        phone: 'Telefon',
        service: 'Talep edilen hizmet',
        message: 'Mesaj',
      },
      placeholders: {
        name: 'Ad veya firma',
        email: 'ad@firma.de',
        phone: '+49 ...',
        service: 'ornegin mutfak yenileme',
        message:
          'Hangi alanlar yenilenecek, nasil bir stil istiyorsunuz ve ne zaman baslamak istiyorsunuz?',
      },
      submit: 'Talebi gonder',
      success: 'Talebiniz basariyla gonderildi.',
      failure: 'Talep gonderilemedi. Lutfen tekrar deneyin.',
      noteTitle: 'Not',
      note:
        'Telefon, e-posta ve alan adi bu refactor icin yer tutucu olarak ayarlandi; kendi firma bilgilerinizle degistirilebilir.',
    },
    serviceDetail: {
      back: 'Tum hizmetlere don',
      highlights: 'Tipik proje kapsami',
      relatedTitle: 'Diger hizmetler',
      ctaTitle: 'Bu hizmet icin talep gonderin',
      ctaText:
        'Alan tipi, is kapsamı ve istediginiz tarih bilgisini paylasin. Uygun yol haritasiyla size donelim.',
      ctaButton: 'Iletisim formunu ac',
    },
  },
  en: {
    seo: {
      defaultTitle: 'Kocer Bau Germany',
      defaultDescription:
        'Multilingual home remodeling in Germany covering kitchens, bathrooms, painting, flooring, interior finishing and full renovations.',
      homeTitle: 'Home Remodeling for Germany',
      servicesTitle: 'Services',
      aboutTitle: 'Company',
      contactTitle: 'Contact',
      referencesTitle: 'References',
    },
    nav: {
      services: 'Services',
      references: 'References',
      about: 'Company',
      contact: 'Contact',
      emergency: 'Call for consultation',
    },
    common: {
      learnMore: 'Learn more',
      requestQuote: 'Request a quote',
      getInTouch: 'Get in touch',
      emergencyLine: 'Consultation and scheduling',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      scrollTop: 'Scroll to top',
      categories: 'Categories',
      coverage: 'Coverage',
      languages: 'Languages',
      serviceHours: 'Consultation hours',
      serviceHoursValue: 'Mon-Sat for planning, visits and project discussions',
    },
    footer: {
      blurb:
        'Kocer Bau refreshes apartments, houses and investment properties with clear planning, clean execution and coordinated trades.',
      navigation: 'Navigation',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
      note: 'Service available in German, Turkish and English.',
    },
    home: {
      badge: 'Free first consultation for remodeling projects',
      title: 'Home remodeling for kitchens, bathrooms, paint and flooring in Germany.',
      intro:
        'Kocer Bau manages apartment and house renovations from the first site visit to the final clean handover in German, Turkish and English.',
      serviceEyebrow: 'Services',
      reasonsEyebrow: 'Why Kocer',
      processEyebrow: 'Process',
      coverageEyebrow: 'Germany',
      primaryCta: 'Explore services',
      secondaryCta: 'Send a free enquiry',
      stats: [
        { value: '3', label: 'languages for consultation and project coordination' },
        { value: '6', label: 'core services from kitchens to full remodeling' },
        { value: 'Mon-Sat', label: 'planned site visits and project starts' },
      ],
      serviceSectionTitle: 'Services for kitchens, bathrooms, painting, flooring and interior finishing',
      serviceSectionText:
        'We coordinate preparation, materials, execution and final detailing for apartments, houses and investment properties.',
      reasonsTitle: 'Why clients remodel with Kocer',
      reasons: [
        {
          title: 'Clear project planning',
          text: 'Rooms, scope, material choices and timing windows are aligned in a practical way.',
        },
        {
          title: 'Clean execution',
          text: 'We care about the finish, from neat paint lines to flooring transitions and fitted details.',
        },
        {
          title: 'Multilingual communication',
          text: 'Owners, families and project stakeholders can follow the work in German, Turkish and English.',
        },
      ],
      processTitle: 'How we work',
      process: [
        {
          step: '01',
          title: 'Site visit',
          text: 'We review the rooms, existing condition, style goals and required work on site.',
        },
        {
          step: '02',
          title: 'Proposal and planning',
          text: 'You receive a clear scope, material direction, timing and guidance on budget.',
        },
        {
          step: '03',
          title: 'Execution',
          text: 'Our team carries out the agreed work with a coordinated and tidy process.',
        },
        {
          step: '04',
          title: 'Final handover',
          text: 'We walk through the finished spaces together and close out the remaining details.',
        },
      ],
      coverageTitle: 'Coverage across Germany',
      coverageText:
        'Our core focus is Berlin and Brandenburg. For selected residential and interior remodeling projects, we also coordinate work in other parts of Germany.',
      coverageCards: [
        {
          title: 'Apartments and houses',
          text: 'Modernization of kitchens, bathrooms, walls, floors and complete living areas.',
        },
        {
          title: 'Landlords and investors',
          text: 'Reliable refreshes and full renovations for reletting, resale or property upgrades.',
        },
        {
          title: 'Small commercial interiors',
          text: 'Interior upgrades, paint and flooring for studios, offices and boutique spaces.',
        },
      ],
      finalCtaTitle: 'Start your remodeling project with a clear plan',
      finalCtaText:
        'Send us photos, room count and your target date. We will reply with a structured first assessment and next steps.',
    },
    servicesPage: {
      title: 'All services',
      intro:
        'Choose a category or browse the full offer. Every service is built around high-quality interior and residential remodeling in Germany.',
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Services',
      sidebarTitle: 'Service categories',
      empty: 'There are currently no services in this category.',
      cardHighlights: 'Typical scope',
      cardCta: 'Request service',
    },
    about: {
      title: 'Company',
      lead:
        'Kocer Bau specializes in home remodeling and interior renovation for apartments, houses and smaller commercial spaces. We focus on clean execution, clear decisions and a finished result that feels cohesive.',
      paragraphs: [
        'We handle kitchen upgrades, bathroom remodels, painting, flooring and full interior refresh projects. Every stage is planned so the client understands what is happening and what comes next.',
        'Because our support is multilingual, families, owners and international clients can stay aligned in German, Turkish and English throughout the renovation.',
      ],
      valuesTitle: 'What matters to us',
      values: [
        {
          title: 'Reliability',
          text: 'We show up prepared, keep timing visible and communicate early when decisions are needed.',
        },
        {
          title: 'Detail quality',
          text: 'Clean edges, balanced surfaces and tidy finishing details are what make the final rooms feel complete.',
        },
        {
          title: 'Transparent communication',
          text: 'We explain what is being done, which materials make sense and what the next project step looks like.',
        },
      ],
    },
    references: {
      title: 'References',
      intro:
        'Typical feedback from projects where timing, finish quality and reliability mattered most.',
      items: [
        {
          quote:
            'Our kitchen was reworked from start to finish and every step was explained clearly. The team was especially strong on materials, schedule and final detailing.',
          author: 'Homeowner family, Berlin',
        },
        {
          quote:
            'The bathroom, hallway and flooring were modernized as one project. The crew stayed organized and left the apartment in very good shape.',
          author: 'Apartment owner, Potsdam',
        },
        {
          quote:
            'Paint, flooring and interior finishing all matched beautifully in the end. That coordinated remodeling approach was exactly what we needed.',
          author: 'Investor, Brandenburg residential project',
        },
      ],
    },
    contact: {
      title: 'Contact',
      intro:
        'Send us the key details about your rooms, desired work and timing. We will reply in German, Turkish or English.',
      cards: [
        { title: 'Phone', value: siteConfig.phone },
        { title: 'Consultation', value: siteConfig.emergencyPhone },
        { title: 'Email', value: siteConfig.email },
        { title: 'Coverage', value: siteConfig.serviceArea },
      ],
      formTitle: 'Describe the project',
      labels: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        service: 'Requested service',
        message: 'Message',
      },
      placeholders: {
        name: 'Name or company',
        email: 'name@company.com',
        phone: '+49 ...',
        service: 'for example kitchen remodeling',
        message:
          'Which rooms should be remodeled, what style are you aiming for and when would you like to start?',
      },
      submit: 'Send enquiry',
      success: 'Your enquiry was sent successfully.',
      failure: 'The enquiry could not be sent. Please try again.',
      noteTitle: 'Note',
      note:
        'The phone number, email and domain were set as placeholders for this refactor and can be replaced with your live company details.',
    },
    serviceDetail: {
      back: 'Back to all services',
      highlights: 'Typical project scope',
      relatedTitle: 'More services',
      ctaTitle: 'Request this service for your project',
      ctaText:
        'Share the room type, work scope and target date. We will reply with a practical first assessment and next steps.',
      ctaButton: 'Open contact form',
    },
  },
};

const categoryLabels = {
  de: {
    all: 'Alle Leistungen',
    kitchens: 'Kuechenrenovierung',
    bathrooms: 'Badsanierung',
    painting: 'Malerarbeiten',
    flooring: 'Bodenverlegung',
    interiorFinishing: 'Innenausbau',
    fullRemodeling: 'Komplettsanierung',
  },
  tr: {
    all: 'Tum Hizmetler',
    kitchens: 'Mutfak Yenileme',
    bathrooms: 'Banyo Yenileme',
    painting: 'Boya Isleri',
    flooring: 'Zemin Doseme',
    interiorFinishing: 'Ic Mekan Ince Isler',
    fullRemodeling: 'Komple Tadilat',
  },
  en: {
    all: 'All Services',
    kitchens: 'Kitchen Remodeling',
    bathrooms: 'Bathroom Remodeling',
    painting: 'Painting',
    flooring: 'Flooring',
    interiorFinishing: 'Interior Finishing',
    fullRemodeling: 'Full Remodeling',
  },
};

const services = [
  {
    slug: 'kitchen-remodeling',
    category: 'kitchens',
    accent: '#c26a2b',
    translations: {
      de: {
        title: 'Kuechenrenovierung',
        summary:
          'Modernisierung von Fronten, Wandflachen, Boden, Licht und funktionalen Details fur alltagstaugliche und moderne Kuechen.',
        highlights: ['Vorbereitung und Umbauplanung', 'Oberflachen, Farbe und Boden abstimmen', 'Saubere Details bis zur finalen Ubergabe'],
      },
      tr: {
        title: 'Mutfak Yenileme',
        summary:
          'Kapaklar, duvarlar, zemin, aydinlatma ve kullanimi kolay detaylarla mutfaklari daha modern hale getiriyoruz.',
        highlights: ['Hazirlik ve proje plani', 'Renk, yuzey ve zemin uyumu', 'Temiz ve duzgun son teslim'],
      },
      en: {
        title: 'Kitchen Remodeling',
        summary:
          'Upgrades for fronts, walls, floors, lighting and practical details to create cleaner, more functional kitchens.',
        highlights: ['Preparation and remodeling plan', 'Aligned surfaces, color and flooring', 'Clean detailing through final handover'],
      },
    },
  },
  {
    slug: 'bathroom-remodeling',
    category: 'bathrooms',
    accent: '#0f766e',
    translations: {
      de: {
        title: 'Badsanierung',
        summary:
          'Erneuerung von Oberflachen, Einbauten, Farbwelt und Raumwirkung fur moderne und gepflegte Bader.',
        highlights: ['Bestehenden Raum neu strukturieren', 'Materialien und Oberflachen passend kombinieren', 'Modernes, ruhiges Gesamtbild'],
      },
      tr: {
        title: 'Banyo Yenileme',
        summary:
          'Yuzeyler, sabit elemanlar, renk dili ve mekan etkisi yenilenerek daha modern banyolar ortaya cikiyor.',
        highlights: ['Mekani yeniden duzenleme', 'Malzeme ve yuzey uyumu', 'Sakin ve modern son gorunum'],
      },
      en: {
        title: 'Bathroom Remodeling',
        summary:
          'Renewed surfaces, built-in elements, color direction and room feel for cleaner, more modern bathrooms.',
        highlights: ['Rework the room layout direction', 'Combine materials and finishes carefully', 'Create a modern, calm end result'],
      },
    },
  },
  {
    slug: 'interior-painting',
    category: 'painting',
    accent: '#8b5cf6',
    translations: {
      de: {
        title: 'Malerarbeiten innen',
        summary:
          'Neuer Anstrich, saubere Kanten und abgestimmte Farbkonzepte fur einzelne Raume oder komplette Wohnungen.',
        highlights: ['Untergrund vorbereiten', 'Farbkonzepte fur Wohnraume', 'Saubere Linien und Abschlusse'],
      },
      tr: {
        title: 'Ic mekan boya isleri',
        summary:
          'Tek odadan tum daireye kadar temiz boya uygulamasi, net cizgiler ve mekana uygun renk secimleri.',
        highlights: ['Yuzey hazirligi', 'Yasama alanina uygun renk secimi', 'Temiz kenarlar ve bitisler'],
      },
      en: {
        title: 'Interior Painting',
        summary:
          'Fresh paint, clean lines and balanced color concepts for single rooms or full apartment refreshes.',
        highlights: ['Surface preparation first', 'Color direction for living spaces', 'Clean edges and final details'],
      },
    },
  },
  {
    slug: 'flooring-installation',
    category: 'flooring',
    accent: '#155e75',
    translations: {
      de: {
        title: 'Bodenverlegung',
        summary:
          'Neue Bodenbelage fur Wohn- und Schlafbereiche mit ruhigem Gesamtbild, sauberen Ubergangen und passender Materialwirkung.',
        highlights: ['Bodenrichtung und Raumwirkung planen', 'Saubere Ubergange und Sockelbereiche', 'Geeignet fur Auffrischung oder Komplettumbau'],
      },
      tr: {
        title: 'Zemin doseme',
        summary:
          'Yasama ve yatak alanlari icin duzgun gecisli, temiz bitisli ve mekana uygun yeni zemin uygulamalari.',
        highlights: ['Zemin yonu ve mekan etkisi planlama', 'Temiz gecisler ve supurgelik detaylari', 'Yenileme veya komple tadilat icin uygun'],
      },
      en: {
        title: 'Flooring Installation',
        summary:
          'New floor finishes for living and sleeping areas with smooth transitions, clean edges and a cohesive room feel.',
        highlights: ['Plan room flow and board direction', 'Tidy transitions and skirting details', 'Works for refreshes or full remodels'],
      },
    },
  },
  {
    slug: 'drywall-and-finishing',
    category: 'interiorFinishing',
    accent: '#ca8a04',
    translations: {
      de: {
        title: 'Innenausbau und Feinspachtel',
        summary:
          'Trockenbau, Wandbegradigung und Finish-Arbeiten fur stimmige Innenraume mit sauberen Flachen und klaren Linien.',
        highlights: ['Wande und Decken vorbereiten', 'Saubere Flachen fur Farbe und Licht', 'Ideal fur Grundriss- und Raumaufwertung'],
      },
      tr: {
        title: 'Ic mekan ince isler ve alci finisaj',
        summary:
          'Alcipan, duvar duzeltme ve bitis isleriyle daha temiz, dengeli ve modern ic mekanlar olusturuyoruz.',
        highlights: ['Duvar ve tavan hazirligi', 'Boyaya hazir temiz yuzeyler', 'Mekan kalitesini artiran ince isler'],
      },
      en: {
        title: 'Drywall and Interior Finishing',
        summary:
          'Drywall, wall correction and finishing work for more refined interiors with cleaner surfaces and stronger lines.',
        highlights: ['Prepare walls and ceilings properly', 'Create paint-ready clean surfaces', 'Great for layout and interior upgrades'],
      },
    },
  },
  {
    slug: 'full-home-renovation',
    category: 'fullRemodeling',
    accent: '#b91c1c',
    translations: {
      de: {
        title: 'Komplettsanierung',
        summary:
          'Koordinierte Renovierung mehrerer Raume oder ganzer Wohnungen mit einem klaren Ablauf von der Vorbereitung bis zur Ubergabe.',
        highlights: ['Mehrere Gewerke in einem Projekt steuern', 'Einheitliche Gestaltung uber alle Raume', 'Fur Eigennutzung, Vermietung oder Verkauf'],
      },
      tr: {
        title: 'Komple tadilat',
        summary:
          'Birden fazla alanin ya da tum dairenin, hazirliktan teslime kadar tek plan altinda koordine edilmis yenilenmesi.',
        highlights: ['Birden fazla is kalemini tek projede yonetme', 'Tum alanlarda butunlu bir gorunum', 'Oturum, kiralama veya satis oncesi uygun'],
      },
      en: {
        title: 'Full Home Renovation',
        summary:
          'Coordinated renovation of multiple rooms or entire apartments with one clear process from preparation to handover.',
        highlights: ['Coordinate multiple trades in one plan', 'Keep the design language consistent', 'Suitable for living, letting or resale'],
      },
    },
  },
];

export function getTranslations(language = defaultLanguage) {
  return translations[language] || translations[defaultLanguage];
}

export function getLocalizedCategories(language = defaultLanguage) {
  const labels = categoryLabels[language] || categoryLabels[defaultLanguage];
  return serviceCategoryOrder.map((key) => ({
    key,
    label: labels[key],
  }));
}

export function getLocalizedServices(language = defaultLanguage) {
  const labels = categoryLabels[language] || categoryLabels[defaultLanguage];

  return services.map((service) => {
    const localized = service.translations[language] || service.translations[defaultLanguage];

    return {
      ...service,
      ...localized,
      categoryLabel: labels[service.category],
    };
  });
}

export function getLocalizedServiceBySlug(slug, language = defaultLanguage) {
  return getLocalizedServices(language).find((service) => service.slug === slug) || null;
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}
