import { Image } from "./image";
import { Link } from "./link";

export interface Artist {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  sortable_name: string;
  gender: string;
  biography: string;
  birthday: string;
  deathday: string;
  hometown: string;
  location: string;
  nationality: string;
  image_versions: string[];
  _links: ArtistLinks;
}

export interface ArtistLinks {
  thumbnail: Link;
  image: Image;
  self: Link;
  permalink: Link;
  artworks: Link;
  published_artworks: Link;
  similar_artists: Link;
  similar_contemporary_artists: Link;
  genes: Link;
}

