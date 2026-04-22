export const locales = ['en', 'ar'] as const;

export type Locale = (typeof locales)[number];
export type Direction = 'ltr' | 'rtl';

export type ServiceKey =
  | 'kitchens'
  | 'extensions'
  | 'loftConversions'
  | 'bathrooms'
  | 'restorations'
  | 'externalWorks';

export type WorkKey = 'modernKitchen' | 'gardenPath' | 'bathroomRenovation';

export type TestimonialKey =
  | 'emily'
  | 'james'
  | 'sophie'
  | 'daniel'
  | 'oliver'
  | 'charlotte';

export type ContactField = 'name' | 'email' | 'phone' | 'message';

export type NavItem = {
  href: string;
  label: string;
};

export type TranslationDictionary = {
  metadata: {
    title: string;
    description: string;
  };
  skipToContent: string;
  aria: {
    main: string;
    navigation: string;
    languageSwitcher: string;
  };
  switcher: {
    label: string;
    locales: Record<Locale, string>;
  };
  navigation: NavItem[];
  hero: {
    badge: string;
    heading: string;
    description: string;
    cta: string;
    review: string;
  };
  about: {
    badge: string;
    heading: string;
    description: string;
    stats: Array<{
      value: number;
      suffix: string;
      label: string;
      description: string;
    }>;
  };
  services: {
    badge: string;
    heading: string;
    description: string;
    selectedService: string;
    items: Record<
      ServiceKey,
      {
        title: string;
        description: string;
      }
    >;
  };
  work: {
    badge: string;
    heading: string;
    description: string;
    items: Record<
      WorkKey,
      {
        title: string;
        description: string;
        tags: [string, string];
        quote: string;
        author: string;
      }
    >;
  };
  testimonials: {
    badge: string;
    heading: string;
    description: string;
    items: Record<
      TestimonialKey,
      {
        quote: string;
        author: string;
      }
    >;
  };
  faq: {
    badge: string;
    heading: string;
    description: string;
    cta: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    badge: string;
    heading: string;
    description: string;
    info: {
      office: string;
      email: string;
      telephone: string;
      followUs: string;
      address: string;
    };
    form: {
      labels: Record<ContactField, string>;
      placeholders: Record<ContactField, string>;
      submit: string;
      success: string;
      validation: {
        nameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
      };
    };
    mail: {
      subjectPrefix: string;
      fieldLabels: {
        name: string;
        email: string;
        phone: string;
        message: string;
        phoneNotProvided: string;
      };
    };
  };
  footer: {
    quickLinks: string;
    links: NavItem[];
    rightsReserved: string;
    creditLabel: string;
    creditBy: string;
  };
};
