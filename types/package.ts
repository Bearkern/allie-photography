export interface PhotoPackageBase {
  _id: string;
  path: string;
  package: string;
  title: string;
  price: number;
  cover: string;
  content: string[];
}

export interface PhotoPackage extends PhotoPackageBase {
  detail: string[];
  notice: string;
  photos: string[];
}

export interface PhotoPackageMap {
  [key: string]: PhotoPackage
}