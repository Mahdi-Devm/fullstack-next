type Color = {
  hex: string;
};

type Category = {
  id: number;
  slug?: string;
  title?: string;
  name?: string;
};

type CategoryWrapper = {
  category: Category;
};

type PaletteWithRelations = {
  id: number;
  title: string;
  slug: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  colors: Color[];
  categories: CategoryWrapper[];
  likesList: unknown[];
};

type GetPalettesResult = {
  palettes: PaletteWithRelations[] | null;
  message: string;
};

export default async function GetAllPalettesByUserKey(
  userKey: string = "1"
): Promise<GetPalettesResult> {
  try {
    const res = await fetch(
      `/api/like?userKey=${encodeURIComponent(userKey)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.ok) {
      return {
        palettes: null,
        message: `Error: ${res.status} ${res.statusText}`,
      };
    }

    const data = await res.json();
    return {
      palettes: data.palettes,
      message: "Success",
    };
  } catch (error) {
    return {
      palettes: null,
      message: (error as Error).message,
    };
  }
}
