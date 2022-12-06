export type CityLP = {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  seo: SEO;
  content: Content;
  coordinates: Coordinates;
};

type SEO = {
  id: number;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  canonicalURL: string;
  metaImage: Image;
};

type Content = {
  heroImage: Image;
  heroImageAlt: string;
  id: number;
  cityName: string;
  title: string;
  body: string;
  subTitle: string;
  firstParagraph: string;
};

type Coordinates = {
  lat: number;
  lng: number;
};

type Image = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: Formats;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: any;
      provider: string;
      provider_metadata?: any;
      createdAt: Date;
      updatedAt: Date;
    };
  };
};

type Formats = {
  large: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  thumbnail: ImageFormat;
};

type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
};
