import { BaseHit, Hit } from "instantsearch.js";

interface SupplierPid {
  "@interface": string;
  "#text": string;
}

interface ProductStatus {
  "@interface": string;
  "#text": string;
}

interface ProductDetails {
  description_short: string;
  description_long: string;
  manufacturer_pid: string;
  manufacturer_name: string;
  manufacturer_type_descr: string;
  delivery_time: string;
  keyword: string[];
  product_status: ProductStatus;
}

interface Feature {
  fname: string;
  fvalue: string;
  funit: string;
  forder: string;
  fvalue_interface: string;
}

interface ProductFeature {
  reference_feature_system_name: string;
  reference_feature_group_id: string;
  reference_feature_group_name: string;
  feature: Feature[];
}

interface ProductOrderDetails {
  order_unit: string;
  content_unit: string;
  no_cu_per_ou: string;
  price_quantity: string;
  quantity_min: string;
  quantity_interval: string;
}

interface ProductPrice {
  "@price_interface": string;
  price_amount: string;
  price_currency: string;
  tax: string;
  lower_bound: string;
}

interface ProductPriceDetails {
  product_price: ProductPrice;
}

interface Mime {
  mime_interface: string;
  mime_source: string;
  mime_descr: string;
  mime_alt: string;
  mime_purpose: string;
}

interface MimeInfo {
  mime: Mime[];
}

interface ProductReference {
  "@interface": string;
  prod_id_to: string;
}

interface ProductDimensions {
  weight: string;
}

interface ProductLogisticDetails {
  country_of_origin: string;
  product_dimensions: ProductDimensions;
}

export interface ProductParents {
  parent_1: string;
  parent_2: string;
  parent_3: string;
  parent_4: string;
}

interface Meta {
  slug: string;
}

export interface Product extends Hit<BaseHit> {
  "@mode": string;
  supplier_pid: SupplierPid[];
  product_details: ProductDetails;
  product_features: ProductFeature[];
  product_order_details: ProductOrderDetails;
  product_price_details: ProductPriceDetails;
  mime_info: MimeInfo;
  product_reference: ProductReference[];
  product_logistic_details: ProductLogisticDetails;
  product_parents: ProductParents;
  objectID: string;
  meta: Meta;
}
