import { defineStore } from 'pinia';
import type { PhotoPackage } from '@/types/package'

export const usePackageStore = defineStore('package', () => {
  const photoPackage = ref<PhotoPackage>({
    _id: '',
    path: '',
    package: '',
    title: '',
    price: 0,
    cover: '',
    content: [],
    detail: [],
    notice: '',
    photos: []
  });

  const setPhotoPackage = (pkg: PhotoPackage) => {
    photoPackage.value = pkg;
  };

  return {
    photoPackage,
    setPhotoPackage
  };
});