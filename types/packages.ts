export interface photoPackage {
  _id: string;
  path: string;
  package: string;
  title: string;
  price: number;
  cover: string;
  content: string[];
  detail: string[];
  notice: string;
  photos: string[];
}

export interface AllPhotoPackage {
  _id: string;
  path: string;
  package: string;
  title: string;
  price: number;
  cover: string;
  content: string[];
}