import { defineStore } from 'pinia';
import type { Packages } from '@/types/package'

export const usePackagesStore = defineStore('packages', {
  state: (): Packages => ({
    _id: '',
    package: '',
    title: '',
    price: 0,
    cover: '',
    content: [],
    detail: [],
    notice: '',
    photos: []
  }),
  actions: {
    setPackages(packages: Packages) {
      this._id = packages._id;
      this.package = packages.package;
      this.title = packages.title;
      this.price = packages.price;
      this.cover = packages.cover;
      this.content = packages.content;
      this.detail = packages.detail;
      this.notice = packages.notice;
      this.photos = packages.photos;
    }
  }
});