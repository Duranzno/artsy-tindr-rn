import { Link } from "./link";
import { Image } from "./image";

export interface Artwork {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  title: string;
  category: string;
  medium: string;
  date: string;
  dimensions: Dimensions;
  published: boolean;
  website: string;
  signature: string;
  series: string;
  provenance: string;
  literature: string;
  exhibition_history: string;
  collecting_institution: string;
  additional_information: string;
  image_rights: string;
  blurb: string;
  unique: boolean;
  cultural_maker: null;
  iconicity: number;
  can_inquire: boolean;
  can_acquire: boolean;
  can_share: boolean;
  sale_message: null;
  sold: boolean;
  image_versions: string[];
  _links: Links;
  _embedded: Embedded;
}

export interface Embedded {
  editions: any[];
}

export interface Links {
  thumbnail: Link;
  image: Image;
  partner: Link;
  self: Link;
  permalink: Link;
  genes: Link;
  artists: Link;
  similar_artworks: Link;
  collection_users: Link;
  sale_artworks: Link;
}


export interface Dimensions {
  in: size;
  cm: size;
}

export interface size {
  text: string;
  height: number;
  width: number;
  depth: null;
  diameter: null;
}
