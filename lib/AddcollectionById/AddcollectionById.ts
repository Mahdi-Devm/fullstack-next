type LikeResult = {
  liked: boolean | null;
  message: string;
};
export default async function AddcollectionById(
  paletteId: number,
  userKey: string = "1"
): Promise<LikeResult> {
  try {
    const res = await fetch("/api/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paletteId, userKey }),
    });

    const data: LikeResult = await res.json();
    return data;
  } catch (error) {
    return {
      liked: null,
      message: (error as Error).message,
    };
  }
}
