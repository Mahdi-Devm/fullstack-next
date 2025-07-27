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
  createdAt: string;
  updatedAt: string;
  colors: Color[];
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  palettes: {
    paletteId: number;
    categoryId: number;
    palette: Palette;
  }[];
};
