export const defaultLanguage = 'de';

export const supportedLanguages = [
  { code: 'de', shortLabel: 'DE', label: 'Deutsch' },
  { code: 'tr', shortLabel: 'TR', label: 'Turkce' },
  { code: 'en', shortLabel: 'EN', label: 'English' },
];

export const siteConfig = {
  name: 'Kocer Rohrtechnik',
  legalName: 'Kocer Rohrtechnik Deutschland',
  siteUrl: 'https://www.kocer-rohrtechnik.de',
  phone: '+49 (0)30 5557 1200',
  emergencyPhone: '+49 (0)30 5557 1212',
  email: 'info@kocer-rohrtechnik.de',
  serviceArea: 'Berlin, Brandenburg und ausgewahlte Projekte deutschlandweit',
  address: {
    streetAddress: 'Vor-Ort-Service nach Terminvereinbarung',
    addressLocality: 'Berlin',
    addressRegion: 'Berlin',
    postalCode: '12055',
    addressCountry: 'DE',
  },
};

export const serviceCategoryOrder = [
  'all',
  'pumping',
  'inspections',
  'repairs',
  'greaseTrapCleaning',
  'hydrojettingRootRemoval',
];

const translations = {
  de: {
    seo: {
      defaultTitle: 'Kocer Rohrtechnik Deutschland',
      defaultDescription:
        'Mehrsprachiger Rohr-, Kanal- und Pumpservice in Deutschland mit Schwerpunkten auf Absaugung, Inspektionen, Reparaturen, Fettabscheider-Reinigung und Hochdruckspulung.',
      homeTitle: 'Rohr- und Umweltservice fur Deutschland',
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
      emergency: '24/7 Notdienst',
    },
    common: {
      learnMore: 'Mehr erfahren',
      requestQuote: 'Angebot anfragen',
      getInTouch: 'Kontakt aufnehmen',
      emergencyLine: 'Notdienst-Hotline',
      categories: 'Kategorien',
      coverage: 'Einsatzgebiet',
      languages: 'Sprachen',
      serviceHours: 'Bereitschaft',
      serviceHoursValue: '24/7 fur Storungen und planbare Einsatze',
    },
    footer: {
      blurb:
        'Kocer Rohrtechnik betreut Immobilien, Gastronomie, Industrie und Kommunalprojekte mit schneller Einsatzplanung und klarer Dokumentation.',
      navigation: 'Navigation',
      services: 'Leistungen',
      contact: 'Kontakt',
      rights: 'Alle Rechte vorbehalten.',
      note: 'Mehrsprachiger Service auf Deutsch, Turkisch und Englisch.',
    },
    home: {
      badge: '24/7 Notdienst fur dringende Einsatze',
      title: 'Rohr-, Kanal- und Pumpservice fur Gewerbe, Wohnanlagen und Industrie in Deutschland.',
      intro:
        'Kocer Rohrtechnik verbindet schnelle Einsatze, saubere Ausfuhrung und mehrsprachige Betreuung auf Deutsch, Turkisch und Englisch.',
      primaryCta: 'Leistungen ansehen',
      secondaryCta: 'Kostenlose Anfrage senden',
      stats: [
        { value: '3', label: 'Sprachen fur Kundenservice' },
        { value: '< 24h', label: 'Reaktionszeit fur planbare Einsatze' },
        { value: '24/7', label: 'Notdienst bei akuten Storungen' },
      ],
      serviceSectionTitle: 'Leistungen fur jede Entwasserungsaufgabe',
      serviceSectionText:
        'Von der regelmassigen Absaugung bis zur akuten Verstopfung arbeiten wir mit planbaren Wartungen und belastbaren Einsatzberichten.',
      reasonsTitle: 'Warum Unternehmen mit Kocer arbeiten',
      reasons: [
        {
          title: 'Klare Einsatzplanung',
          text: 'Termine, Zugange, Sicherheitsvorgaben und Leistungsumfang werden vorab abgestimmt.',
        },
        {
          title: 'Dokumentierte Ergebnisse',
          text: 'Inspektionen, Reinigungen und Reparaturen werden nachvollziehbar fur Eigentumer und Betreiber festgehalten.',
        },
        {
          title: 'Mehrsprachige Kommunikation',
          text: 'Vor-Ort-Teams und Ansprechpartner begleiten Projekte auf Deutsch, Turkisch und Englisch.',
        },
      ],
      processTitle: 'So arbeiten wir',
      process: [
        { step: '01', title: 'Lage aufnehmen', text: 'Wir prufen Objekt, Dringlichkeit und Zugangssituation.' },
        { step: '02', title: 'Einsatz planen', text: 'Wir stellen das passende Team samt Fahrzeugen und Technik zusammen.' },
        { step: '03', title: 'Problem beheben', text: 'Wir reinigen, inspizieren oder reparieren zielgerichtet vor Ort.' },
        { step: '04', title: 'Bericht ubergeben', text: 'Sie erhalten eine klare Dokumentation mit Empfehlungen fur die Nachsorge.' },
      ],
      coverageTitle: 'Einsatzgebiet in Deutschland',
      coverageText:
        'Schwerpunktregionen sind Berlin, Brandenburg und angrenzende Gewerbestandorte. Fur Grosskunden koordinieren wir Einsatze auch standortubergreifend.',
      coverageCards: [
        {
          title: 'Wohnanlagen',
          text: 'Planbare Wartung fur Sammelgruben, Leitungen, Hebeanlagen und Notfalleinsatze.',
        },
        {
          title: 'Gastronomie und Handel',
          text: 'Fettabscheider-Reinigung, Kanalpflege und dokumentierte Serviceintervalle.',
        },
        {
          title: 'Industrie und Projekte',
          text: 'Leistungsstarke Pumptechnik, Hochdruckspulung und koordinierte Reparatureinsatze.',
        },
      ],
      finalCtaTitle: 'Schnelle Hilfe fur Abwasser-, Pump- und Rohrsysteme',
      finalCtaText:
        'Teilen Sie uns Standort, Dringlichkeit und Objektart mit. Wir melden uns mit einem klaren Vorschlag fur den Einsatz.',
    },
    servicesPage: {
      title: 'Alle Leistungen',
      intro:
        'Wahlen Sie eine Kategorie oder sehen Sie sich alle Services an. Jede Leistung ist auf Gewerbe, Immobilien und technische Anlagen in Deutschland ausgerichtet.',
      breadcrumbHome: 'Startseite',
      breadcrumbCurrent: 'Leistungen',
      sidebarTitle: 'Servicekategorien',
      empty: 'Fur diese Kategorie sind aktuell keine Leistungen hinterlegt.',
      cardHighlights: 'Leistungsumfang',
      cardCta: 'Service anfragen',
    },
    about: {
      title: 'Unternehmen',
      lead:
        'Kocer Rohrtechnik ist auf technische Services rund um Abwasser, Rohrsysteme und Pumptechnik spezialisiert. Unser Fokus liegt auf schnellen Entscheidungen vor Ort und sauberer Kommunikation mit Betreibern, Hausverwaltungen und Projektteams.',
      paragraphs: [
        'Wir arbeiten fur Wohnanlagen, gastronomische Betriebe, Produktionsstandorte und gemischt genutzte Immobilien. Dabei setzen wir auf belastbare Einsatzplanung, moderne Technik und nachvollziehbare Ergebnisse statt auf kurzfristige Notlosungen.',
        'Als Unternehmen mit mehrsprachigem Kundenservice konnen wir Teams auf Deutsch, Turkisch und Englisch begleiten. Das erleichtert Abstimmungen auf Baustellen, in technischen Liegenschaften und in internationalen Betreiberstrukturen.',
      ],
      valuesTitle: 'Was uns wichtig ist',
      values: [
        {
          title: 'Verantwortung im Einsatz',
          text: 'Wir kommen vorbereitet, arbeiten sauber und halten Sicherheits- und Zugangsregeln ein.',
        },
        {
          title: 'Technische Klarheit',
          text: 'Vor Ort entscheiden wir pragmatisch, dokumentieren aber immer so, dass Betreiber weiterarbeiten konnen.',
        },
        {
          title: 'Langfristige Betreuung',
          text: 'Viele Kunden nutzen uns nicht nur im Notfall, sondern auch fur wiederkehrende Wartungs- und Reinigungsintervalle.',
        },
      ],
    },
    references: {
      title: 'Referenzen',
      intro:
        'Typische Ruckmeldungen aus Objekten, bei denen Reaktionszeit, Dokumentation und saubere Ausfuhrung entscheidend waren.',
      items: [
        {
          quote:
            'Die Abstimmung auf Deutsch und Turkisch hat unserem Team sehr geholfen. Die Rohrverstopfung wurde in derselben Nacht behoben und sauber dokumentiert.',
          author: 'Objektleitung, Wohnanlage Berlin',
        },
        {
          quote:
            'Fettabscheider-Reinigung, Spulung und Wartungsplan kamen aus einer Hand. Genau diese Struktur brauchten wir fur unseren Gastronomiebetrieb.',
          author: 'Betriebsleitung, Gastronomiegruppe Potsdam',
        },
        {
          quote:
            'Bei der Kamerainspektion wurden die Schadstellen sofort markiert und die Reparatur im Anschluss ohne lange Stillstandszeit ausgefuhrt.',
          author: 'Technischer Leiter, Gewerbestandort Brandenburg',
        },
      ],
    },
    contact: {
      title: 'Kontakt',
      intro:
        'Senden Sie uns Eckdaten zum Standort, zur Storung oder zum geplanten Service. Wir antworten auf Deutsch, Turkisch oder Englisch.',
      cards: [
        { title: 'Telefon', value: siteConfig.phone },
        { title: 'Notdienst', value: siteConfig.emergencyPhone },
        { title: 'E-Mail', value: siteConfig.email },
        { title: 'Einsatzgebiet', value: siteConfig.serviceArea },
      ],
      formTitle: 'Projekt oder Storung beschreiben',
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
        service: 'z. B. Fettabscheider-Reinigung',
        message: 'Was ist passiert, wo befindet sich das Objekt und wie dringend ist der Einsatz?',
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
      highlights: 'Typische Einsatzschwerpunkte',
      ctaTitle: 'Leistung fur Ihr Objekt anfragen',
      ctaText:
        'Nennen Sie uns Standort, Objektart und Dringlichkeit. Wir melden uns mit einem passenden Einsatzvorschlag.',
      ctaButton: 'Kontaktformular offnen',
    },
  },
  tr: {
    seo: {
      defaultTitle: 'Kocer Rohrtechnik Almanya',
      defaultDescription:
        'Almanya genelinde pompalama, inceleme, onarim, yag tutucu temizligi ve yuksek basincli kanal acma hizmetleri sunan cok dilli boru ve atiksu servisi.',
      homeTitle: 'Almanya Icin Boru ve Cevre Hizmetleri',
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
      emergency: '7/24 Acil Hat',
    },
    common: {
      learnMore: 'Detaylari gor',
      requestQuote: 'Teklif iste',
      getInTouch: 'Iletisime gec',
      emergencyLine: 'Acil servis hatti',
      categories: 'Kategoriler',
      coverage: 'Hizmet alani',
      languages: 'Diller',
      serviceHours: 'Calisma duzeni',
      serviceHoursValue: 'Ariza ve planli servisler icin 7/24',
    },
    footer: {
      blurb:
        'Kocer Rohrtechnik; gayrimenkul, gastronomi, sanayi ve belediye projeleri icin hizli planlama ve net raporlama sunar.',
      navigation: 'Navigasyon',
      services: 'Hizmetler',
      contact: 'Iletisim',
      rights: 'Tum haklari saklidir.',
      note: 'Almanca, Turkce ve Ingilizce hizmet veriyoruz.',
    },
    home: {
      badge: 'Acil durumlar icin 7/24 servis',
      title: 'Almanya genelinde ticari yapilar, konut siteleri ve sanayi icin boru, kanal ve pompa hizmetleri.',
      intro:
        'Kocer Rohrtechnik hizli mudahale, temiz uygulama ve Almanca, Turkce, Ingilizce musteri destegini bir araya getirir.',
      primaryCta: 'Hizmetleri incele',
      secondaryCta: 'Ucretsiz talep gonder',
      stats: [
        { value: '3', label: 'musteri hizmet dili' },
        { value: '< 24s', label: 'planli islerde geri donus suresi' },
        { value: '7/24', label: 'acil ariza destegi' },
      ],
      serviceSectionTitle: 'Her atiksu gorevi icin hizmet',
      serviceSectionText:
        'Duzenli pompalamadan acil tikanikliklara kadar bakim, temizlik ve onarimlari raporlanabilir bir sistemle yonetiyoruz.',
      reasonsTitle: 'Firmalar neden Kocer ile calisiyor',
      reasons: [
        {
          title: 'Net operasyon plani',
          text: 'Randevu, erisim, guvenlik ve kapsam ekip gelmeden once netlestirilir.',
        },
        {
          title: 'Belgelenmis sonuc',
          text: 'Inceleme, temizlik ve onarim sonuclari yonetici ve isletmecilere acik sekilde iletilir.',
        },
        {
          title: 'Cok dilli iletisim',
          text: 'Saha ekipleri ve operasyon yoneticileri Almanca, Turkce ve Ingilizce destek verir.',
        },
      ],
      processTitle: 'Nasil calisiyoruz',
      process: [
        { step: '01', title: 'Durumu analiz ederiz', text: 'Mulk, aciliyet ve erisim kosullari incelenir.' },
        { step: '02', title: 'Ekibi planlariz', text: 'Araca ve teknik ekipmana gore en uygun saha ekibi atanir.' },
        { step: '03', title: 'Sorunu gideririz', text: 'Yerinde temizlik, goruntuleme veya onarim uygulanir.' },
        { step: '04', title: 'Rapor teslim ederiz', text: 'Yapilan is ve sonraki adimlar acik bir raporla sunulur.' },
      ],
      coverageTitle: 'Almanya hizmet alani',
      coverageText:
        'Ana bolgelerimiz Berlin, Brandenburg ve yakin ticari bolgelerdir. Buyuk musteriler icin farkli lokasyonlari da koordine ediyoruz.',
      coverageCards: [
        {
          title: 'Konut siteleri',
          text: 'Toplama cukurlari, hatlar, pompa sistemleri ve acil durumlar icin planli bakim.',
        },
        {
          title: 'Restoran ve perakende',
          text: 'Yag tutucu temizligi, kanal bakimi ve raporlanabilir servis periyotlari.',
        },
        {
          title: 'Sanayi ve projeler',
          text: 'Guclu pompa ekipmani, yuksek basincli temizlik ve koordineli onarim hizmetleri.',
        },
      ],
      finalCtaTitle: 'Atiksu, pompa ve boru sistemleri icin hizli destek',
      finalCtaText:
        'Konum, aciliyet ve tesis tipini paylasin. Size uygun operasyon onerisiyle hizla donelim.',
    },
    servicesPage: {
      title: 'Tum hizmetler',
      intro:
        'Bir kategori secin veya tum hizmetleri gorun. Her hizmet Almanya genelindeki ticari yapilar, teknik tesisler ve gayrimenkuller icin planlandi.',
      breadcrumbHome: 'Ana sayfa',
      breadcrumbCurrent: 'Hizmetler',
      sidebarTitle: 'Hizmet kategorileri',
      empty: 'Bu kategori icin henuz bir hizmet bulunmuyor.',
      cardHighlights: 'Kapsam',
      cardCta: 'Hizmet talep et',
    },
    about: {
      title: 'Sirket',
      lead:
        'Kocer Rohrtechnik, atiksu sistemleri, boru altyapisi ve pompa teknolojisi etrafindaki teknik hizmetlere odaklanir. Hedefimiz sahada hizli karar almak ve yoneticilerle acik iletisim kurmaktir.',
      paragraphs: [
        'Konut siteleri, restoranlar, uretim tesisleri ve karma kullanimli gayrimenkuller icin calisiyoruz. Gecici cozumler yerine iyi planlanmis, teknik olarak guvenilir ve olculebilir isler sunuyoruz.',
        'Cok dilli musteri destegimiz sayesinde sahadaki ekipler, teknik yoneticiler ve uluslararasi operatorler Almanca, Turkce ve Ingilizce olarak ayni sureci takip edebilir.',
      ],
      valuesTitle: 'Bizim icin onemli olanlar',
      values: [
        {
          title: 'Sahada sorumluluk',
          text: 'Hazir gelir, temiz calisir ve guvenlik ile erisim kurallarina uyariz.',
        },
        {
          title: 'Teknik netlik',
          text: 'Kararlari pratik aliriz ama isletmecilerin kullanabilecegi sekilde her seyi raporlariz.',
        },
        {
          title: 'Uzun vadeli destek',
          text: 'Bir cok musteri bizi sadece acil durumda degil, periyodik bakim ve temizliklerde de tercih eder.',
        },
      ],
    },
    references: {
      title: 'Referanslar',
      intro:
        'Hizli reaksiyon, net raporlama ve temiz uygulamanin kritik oldugu tipik geri bildirimler.',
      items: [
        {
          quote:
            'Almanca ve Turkce koordinasyon bizim ekibimiz icin buyuk kolaylik sagladi. Boru tikanikligi ayni gece cozuldu ve net sekilde raporlandi.',
          author: 'Site yonetimi, Berlin konut projesi',
        },
        {
          quote:
            'Yag tutucu temizligi, kanal yikama ve bakim plani tek elde toplandi. Isletmemiz icin tam olarak aradigimiz yapi buydu.',
          author: 'Operasyon yoneticisi, Potsdam restoran grubu',
        },
        {
          quote:
            'Kamera incelemesinde hasar noktalar hemen tespit edildi ve onarim uzun durus yasanmadan tamamlandi.',
          author: 'Teknik mudur, Brandenburg ticari tesis',
        },
      ],
    },
    contact: {
      title: 'Iletisim',
      intro:
        'Lokasyon, ariza veya planli hizmet detaylarini bize iletin. Size Almanca, Turkce veya Ingilizce donelim.',
      cards: [
        { title: 'Telefon', value: siteConfig.phone },
        { title: 'Acil servis', value: siteConfig.emergencyPhone },
        { title: 'E-posta', value: siteConfig.email },
        { title: 'Hizmet alani', value: siteConfig.serviceArea },
      ],
      formTitle: 'Proje veya arizayi anlatin',
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
        service: 'ornegin yag tutucu temizligi',
        message: 'Ne oldu, tesis nerede ve ne kadar acil?',
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
      highlights: 'Tipik uygulama alanlari',
      ctaTitle: 'Bu hizmet icin talep gonderin',
      ctaText:
        'Konum, tesis tipi ve aciliyet bilgisini paylasin. Size uygun saha planiyla hizla donelim.',
      ctaButton: 'Iletisim formunu ac',
    },
  },
  en: {
    seo: {
      defaultTitle: 'Kocer Rohrtechnik Germany',
      defaultDescription:
        'Multilingual wastewater, pipe and pumping services in Germany covering pumping, inspections, repairs, grease trap cleaning and hydrojetting.',
      homeTitle: 'Pipe and Environmental Services for Germany',
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
      emergency: '24/7 Emergency',
    },
    common: {
      learnMore: 'Learn more',
      requestQuote: 'Request a quote',
      getInTouch: 'Get in touch',
      emergencyLine: 'Emergency hotline',
      categories: 'Categories',
      coverage: 'Coverage',
      languages: 'Languages',
      serviceHours: 'Availability',
      serviceHoursValue: '24/7 for incidents and scheduled service',
    },
    footer: {
      blurb:
        'Kocer Rohrtechnik supports property, hospitality, industrial and municipal clients with fast deployment planning and clear reporting.',
      navigation: 'Navigation',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
      note: 'Service available in German, Turkish and English.',
    },
    home: {
      badge: '24/7 emergency support for urgent incidents',
      title: 'Pipe, drainage and pumping services for commercial sites, residential portfolios and industry in Germany.',
      intro:
        'Kocer Rohrtechnik combines rapid deployment, clean execution and multilingual customer support in German, Turkish and English.',
      primaryCta: 'Explore services',
      secondaryCta: 'Send a free enquiry',
      stats: [
        { value: '3', label: 'service languages' },
        { value: '< 24h', label: 'response time for scheduled work' },
        { value: '24/7', label: 'emergency incident cover' },
      ],
      serviceSectionTitle: 'Services for every drainage task',
      serviceSectionText:
        'From recurring pumping to urgent blockages, we deliver maintenance, cleaning and repair work with documented outcomes.',
      reasonsTitle: 'Why clients work with Kocer',
      reasons: [
        {
          title: 'Clear deployment planning',
          text: 'Access, safety requirements, scheduling and scope are aligned before arrival.',
        },
        {
          title: 'Documented results',
          text: 'Inspections, cleaning and repairs are recorded clearly for owners, operators and technical teams.',
        },
        {
          title: 'Multilingual communication',
          text: 'Field teams and coordinators support projects in German, Turkish and English.',
        },
      ],
      processTitle: 'How we work',
      process: [
        { step: '01', title: 'Assess the situation', text: 'We review the site, urgency and access requirements.' },
        { step: '02', title: 'Plan the deployment', text: 'We assign the right crew, vehicles and equipment.' },
        { step: '03', title: 'Resolve the issue', text: 'We clean, inspect or repair with a site-specific approach.' },
        { step: '04', title: 'Deliver the report', text: 'You receive clear documentation and next-step recommendations.' },
      ],
      coverageTitle: 'Coverage across Germany',
      coverageText:
        'Our core service area is Berlin, Brandenburg and nearby commercial zones. For larger clients, we also coordinate multi-site work across Germany.',
      coverageCards: [
        {
          title: 'Residential portfolios',
          text: 'Scheduled maintenance for holding tanks, lines, lifting stations and emergency incidents.',
        },
        {
          title: 'Hospitality and retail',
          text: 'Grease trap cleaning, drainage maintenance and documented service intervals.',
        },
        {
          title: 'Industrial and project work',
          text: 'High-capacity pumping, hydrojetting and coordinated repair deployments.',
        },
      ],
      finalCtaTitle: 'Fast support for wastewater, pumping and pipe systems',
      finalCtaText:
        'Share your location, urgency and site type. We will come back with a clear deployment proposal.',
    },
    servicesPage: {
      title: 'All services',
      intro:
        'Choose a category or browse everything. Every service is shaped for commercial sites, technical facilities and property operations in Germany.',
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Services',
      sidebarTitle: 'Service categories',
      empty: 'There are currently no services in this category.',
      cardHighlights: 'Scope',
      cardCta: 'Request service',
    },
    about: {
      title: 'Company',
      lead:
        'Kocer Rohrtechnik focuses on technical services around wastewater systems, drainage infrastructure and pumping technology. We care about fast site decisions and clear communication with operators, property managers and project teams.',
      paragraphs: [
        'We support residential portfolios, hospitality venues, production sites and mixed-use properties. Our goal is not a temporary fix but a well-planned, technically reliable service outcome.',
        'Because our customer support is multilingual, project teams can work with us in German, Turkish and English across active sites, technical facilities and international operating structures.',
      ],
      valuesTitle: 'What matters to us',
      values: [
        {
          title: 'Responsibility on site',
          text: 'We arrive prepared, work cleanly and follow access and safety rules.',
        },
        {
          title: 'Technical clarity',
          text: 'We make pragmatic decisions in the field while documenting the work in a useful way.',
        },
        {
          title: 'Long-term support',
          text: 'Many clients rely on us not only in emergencies but for recurring maintenance and cleaning cycles.',
        },
      ],
    },
    references: {
      title: 'References',
      intro:
        'Typical feedback from sites where response time, reporting and clean execution were essential.',
      items: [
        {
          quote:
            'Coordination in German and Turkish made the whole process easier for our staff. The blockage was cleared the same night and properly documented.',
          author: 'Property management, Berlin residential site',
        },
        {
          quote:
            'Grease trap cleaning, flushing and our maintenance plan were handled by one team. That structure was exactly what our operation needed.',
          author: 'Operations lead, Potsdam hospitality group',
        },
        {
          quote:
            'The camera inspection identified the damage points immediately and the repair was completed without a long shutdown.',
          author: 'Technical manager, Brandenburg commercial facility',
        },
      ],
    },
    contact: {
      title: 'Contact',
      intro:
        'Send us the core details about your site, incident or planned service. We will reply in German, Turkish or English.',
      cards: [
        { title: 'Phone', value: siteConfig.phone },
        { title: 'Emergency', value: siteConfig.emergencyPhone },
        { title: 'Email', value: siteConfig.email },
        { title: 'Coverage', value: siteConfig.serviceArea },
      ],
      formTitle: 'Describe the project or incident',
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
        service: 'for example grease trap cleaning',
        message: 'What happened, where is the site and how urgent is the request?',
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
      highlights: 'Typical service focus',
      ctaTitle: 'Request this service for your site',
      ctaText:
        'Share your location, asset type and urgency. We will reply with a suitable deployment plan.',
      ctaButton: 'Open contact form',
    },
  },
};

const categoryLabels = {
  de: {
    all: 'Alle Leistungen',
    pumping: 'Absaugung',
    inspections: 'Inspektionen',
    repairs: 'Reparaturen',
    greaseTrapCleaning: 'Fettabscheider-Reinigung',
    hydrojettingRootRemoval: 'Hochdruckspulung & Wurzelfrasen',
  },
  tr: {
    all: 'Tum Hizmetler',
    pumping: 'Pompalama',
    inspections: 'Inceleme',
    repairs: 'Onarim',
    greaseTrapCleaning: 'Yag Tutucu Temizligi',
    hydrojettingRootRemoval: 'Yuksek Basincli Acma & Kok Temizleme',
  },
  en: {
    all: 'All Services',
    pumping: 'Pumping',
    inspections: 'Inspections',
    repairs: 'Repairs',
    greaseTrapCleaning: 'Grease Trap Cleaning',
    hydrojettingRootRemoval: 'Hydrojetting & Root Removal',
  },
};

const services = [
  {
    slug: 'emergency-pumping',
    category: 'pumping',
    accent: '#0f766e',
    translations: {
      de: {
        title: 'Notfall-Absaugung und Tankentleerung',
        summary:
          'Schnelle Einsatze fur Sammelgruben, Hebeanlagen, Abwassertanks und uberlaufende Systeme in Wohn- und Gewerbeobjekten.',
        highlights: ['Schnelle Anfahrt', 'Saubere Entsorgung', 'Geeignet fur Wohn- und Gewerbeobjekte'],
      },
      tr: {
        title: 'Acil Pompalama ve Tank Bosaltma',
        summary:
          'Toplama cukurlari, pompa istasyonlari ve tasan atiksu sistemleri icin hizli saha mudahalesi.',
        highlights: ['Hizli sevk', 'Temiz bosaltim', 'Konut ve ticari alanlar icin uygun'],
      },
      en: {
        title: 'Emergency Pumping and Tank Emptying',
        summary:
          'Rapid deployment for holding pits, lifting stations, wastewater tanks and overflowing systems across residential and commercial assets.',
        highlights: ['Fast dispatch', 'Clean disposal workflow', 'Suitable for residential and commercial sites'],
      },
    },
  },
  {
    slug: 'scheduled-pumping',
    category: 'pumping',
    accent: '#155e75',
    translations: {
      de: {
        title: 'Planbare Pump- und Wartungseinsatze',
        summary:
          'Wiederkehrende Absaugung und technische Betreuung fur Betreiber, Hausverwaltungen und Industrieobjekte.',
        highlights: ['Wartungsintervalle', 'Objektbezogene Einsatzplanung', 'Dokumentation fur Betreiber'],
      },
      tr: {
        title: 'Planli Pompalama ve Bakim Servisi',
        summary:
          'Yoneticiler, tesisler ve sanayi alanlari icin periyodik pompalama ve teknik saha destegi.',
        highlights: ['Periyodik servis planlari', 'Tesise uygun planlama', 'Raporlanabilir saha cikti'],
      },
      en: {
        title: 'Scheduled Pumping and Maintenance',
        summary:
          'Recurring pumping and technical support for operators, property managers and industrial facilities.',
        highlights: ['Service intervals', 'Site-specific planning', 'Operator-ready reporting'],
      },
    },
  },
  {
    slug: 'camera-inspections',
    category: 'inspections',
    accent: '#ca8a04',
    translations: {
      de: {
        title: 'Kamera- und Systeminspektionen',
        summary:
          'Visuelle Leitungsprufungen zur Schadstellenerkennung, Zustandsbewertung und Vorbereitung von Reparaturen.',
        highlights: ['Schadstellen lokalisieren', 'Berichte fur Eigentumer', 'Vorbereitung weiterer Massnahmen'],
      },
      tr: {
        title: 'Kamera ve Sistem Incelemeleri',
        summary:
          'Hasar tespiti, durum analizi ve onarim hazirligi icin goruntulu hat kontrolu.',
        highlights: ['Hasar noktasi tespiti', 'Yonetici icin rapor', 'Sonraki adimlara teknik temel'],
      },
      en: {
        title: 'Camera and System Inspections',
        summary:
          'Visual line inspections for damage detection, condition assessment and repair planning.',
        highlights: ['Locate damage points', 'Owner-ready reporting', 'Supports next repair steps'],
      },
    },
  },
  {
    slug: 'pipe-and-drain-repairs',
    category: 'repairs',
    accent: '#b91c1c',
    translations: {
      de: {
        title: 'Rohr- und Ablaufreparaturen',
        summary:
          'Gezielte Reparaturen nach Inspektion oder Storungsbild, um Betrieb und Nutzung schnell wiederherzustellen.',
        highlights: ['Fehlerbild analysieren', 'Passende Reparaturmethode', 'Minimierung von Ausfallzeiten'],
      },
      tr: {
        title: 'Boru ve Drenaj Onarimlari',
        summary:
          'Inceleme veya ariza bulgusuna gore hedefli onarimlarla tesisin tekrar hizli calismasi saglanir.',
        highlights: ['Ariza analizi', 'Uygun onarim yontemi', 'Durus suresini azaltma'],
      },
      en: {
        title: 'Pipe and Drain Repairs',
        summary:
          'Targeted repairs based on inspection findings or incident symptoms to restore operation quickly.',
        highlights: ['Failure analysis', 'Fit-for-purpose repair method', 'Reduced downtime'],
      },
    },
  },
  {
    slug: 'grease-trap-cleaning',
    category: 'greaseTrapCleaning',
    accent: '#7c3aed',
    translations: {
      de: {
        title: 'Fettabscheider-Reinigung',
        summary:
          'Regelmassige und akute Reinigung fur Gastronomie, Gemeinschaftsverpflegung und lebensmittelnahe Betriebe.',
        highlights: ['Entleerung und Reinigung', 'Geruchs- und Betriebsrisiken reduzieren', 'Service fur Gastronomie'],
      },
      tr: {
        title: 'Yag Tutucu Temizligi',
        summary:
          'Restoranlar, mutfaklar ve gida ile ilgili isletmeler icin periyodik veya acil temizlik hizmeti.',
        highlights: ['Bosaltma ve temizlik', 'Koku ve isletme riskini azaltma', 'Restoran odakli servis'],
      },
      en: {
        title: 'Grease Trap Cleaning',
        summary:
          'Scheduled and urgent cleaning for hospitality, catering and food-adjacent operations.',
        highlights: ['Emptying and cleaning', 'Reduce odor and operational risk', 'Built for hospitality sites'],
      },
    },
  },
  {
    slug: 'hydrojetting-root-removal',
    category: 'hydrojettingRootRemoval',
    accent: '#1d4ed8',
    translations: {
      de: {
        title: 'Hochdruckspulung und Wurzelfrasen',
        summary:
          'Leistungsstarke Reinigung fur hartnackige Ablagerungen, Verwurzelungen und tief sitzende Verstopfungen.',
        highlights: ['Hochdrucktechnik', 'Wurzeleinwuchs entfernen', 'Fur schwer zugangliche Probleme'],
      },
      tr: {
        title: 'Yuksek Basincli Temizlik ve Kok Acma',
        summary:
          'Guclu ekipmanlarla koklenme, birikme ve derin tikaniklik sorunlarini gideririz.',
        highlights: ['Yuksek basincli ekipman', 'Kok temizleme', 'Zor tikanikliklar icin uygun'],
      },
      en: {
        title: 'Hydrojetting and Root Removal',
        summary:
          'High-power cleaning for stubborn buildup, root ingress and deep drainage blockages.',
        highlights: ['High-pressure equipment', 'Root intrusion removal', 'Built for severe blockages'],
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
