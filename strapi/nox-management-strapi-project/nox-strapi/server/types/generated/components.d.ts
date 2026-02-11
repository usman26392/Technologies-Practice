import type { Schema, Struct } from '@strapi/strapi';

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsBussinessSectors extends Struct.ComponentSchema {
  collectionName: 'components_sections_bussiness_sectors';
  info: {
    description: '';
    displayName: 'Bussiness__Sectors';
    icon: 'bold';
  };
  attributes: {
    Bussiness__slides: Schema.Attribute.Component<
      'unique.bussiness-slides',
      true
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SectionsHomeBrands extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_brands';
  info: {
    displayName: 'Home__Brands';
  };
  attributes: {
    Brand__Logo: Schema.Attribute.Component<'unique.brand-logo', true> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SectionsHomeHistory extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_histories';
  info: {
    displayName: 'Home__History';
  };
  attributes: {
    History__Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Items: Schema.Attribute.Component<'unique.history', true>;
  };
}

export interface UniqueBrandCategories extends Struct.ComponentSchema {
  collectionName: 'components_unique_brand_categories';
  info: {
    displayName: 'Brand__Categories';
    icon: 'bold';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface UniqueBrandLogo extends Struct.ComponentSchema {
  collectionName: 'components_unique_brand_logos';
  info: {
    description: '';
    displayName: 'Brand__logo';
  };
  attributes: {
    Brand__logo__color: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Brand__Logo__white: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
  };
}

export interface UniqueBrandsCount extends Struct.ComponentSchema {
  collectionName: 'components_unique_brands_counts';
  info: {
    displayName: 'Brands__count';
    icon: 'bold';
  };
  attributes: {
    Count: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface UniqueBussinessSlides extends Struct.ComponentSchema {
  collectionName: 'components_unique_bussiness_slides';
  info: {
    description: '';
    displayName: 'Bussiness__slides';
    icon: 'bell';
  };
  attributes: {
    Brand__Categories: Schema.Attribute.Component<
      'unique.brand-categories',
      false
    >;
    Brands__Count: Schema.Attribute.Component<'unique.brands-count', true>;
    Desktop__Figure: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    Mobile__Figure: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface UniqueCta extends Struct.ComponentSchema {
  collectionName: 'components_unique_ctas';
  info: {
    displayName: 'CTA';
    icon: 'brush';
  };
  attributes: {
    tag_line: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UniqueEmails extends Struct.ComponentSchema {
  collectionName: 'components_unique_emails';
  info: {
    displayName: 'Emails';
  };
  attributes: {
    Email_One: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Email_Two: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface UniqueFooterCta extends Struct.ComponentSchema {
  collectionName: 'components_unique_footer_ctas';
  info: {
    description: '';
    displayName: 'Footer_Cta';
  };
  attributes: {
    Copy_Right_Text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Footer_Links_Urls: Schema.Attribute.Component<
      'unique.footer-links-urls',
      true
    >;
  };
}

export interface UniqueFooterLinksUrls extends Struct.ComponentSchema {
  collectionName: 'components_unique_footer_links_urls';
  info: {
    displayName: 'Footer_Links_Urls';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface UniqueFooterNavigation extends Struct.ComponentSchema {
  collectionName: 'components_unique_footer_navigations';
  info: {
    description: '';
    displayName: 'Footer_Navigation';
  };
  attributes: {
    Important_Links: Schema.Attribute.Component<
      'unique.important-links',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface UniqueGetInTouch extends Struct.ComponentSchema {
  collectionName: 'components_unique_get_in_touches';
  info: {
    description: '';
    displayName: 'Get_In_Touch';
  };
  attributes: {
    Address_Url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Emails: Schema.Attribute.Component<'unique.emails', true> &
      Schema.Attribute.Required;
    Get_in_Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    LinkedIn_Url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Number_Url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface UniqueHeaderNavigation extends Struct.ComponentSchema {
  collectionName: 'components_unique_header_navigations';
  info: {
    displayName: 'Header_Navigation';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UniqueHistory extends Struct.ComponentSchema {
  collectionName: 'components_unique_histories';
  info: {
    description: '';
    displayName: 'History__items';
    icon: 'dashboard';
  };
  attributes: {
    Count: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Event: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface UniqueImportantLinks extends Struct.ComponentSchema {
  collectionName: 'components_unique_important_links';
  info: {
    displayName: 'important_links';
  };
  attributes: {
    link_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    link_url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.button': CommonButton;
      'sections.bussiness-sectors': SectionsBussinessSectors;
      'sections.home-brands': SectionsHomeBrands;
      'sections.home-history': SectionsHomeHistory;
      'unique.brand-categories': UniqueBrandCategories;
      'unique.brand-logo': UniqueBrandLogo;
      'unique.brands-count': UniqueBrandsCount;
      'unique.bussiness-slides': UniqueBussinessSlides;
      'unique.cta': UniqueCta;
      'unique.emails': UniqueEmails;
      'unique.footer-cta': UniqueFooterCta;
      'unique.footer-links-urls': UniqueFooterLinksUrls;
      'unique.footer-navigation': UniqueFooterNavigation;
      'unique.get-in-touch': UniqueGetInTouch;
      'unique.header-navigation': UniqueHeaderNavigation;
      'unique.history': UniqueHistory;
      'unique.important-links': UniqueImportantLinks;
    }
  }
}
