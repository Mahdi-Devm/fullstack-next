export type Color = {
  id: number;
  hex: string;
  order: number;
  paletteId: number;
};
export type Palette = {
  id: number;
  title: string;
  slug: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  colors: Color[];
  categories: {
    category: CategorySummary;
    paletteId: number;
    categoryId: number;
  }[];
};
export type CategorySummary = {
  id: number;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  palettes: {
    paletteId: number;
    categoryId: number;
    palette: Palette;
  }[];
  palettesDirect?: Palette[];
};
