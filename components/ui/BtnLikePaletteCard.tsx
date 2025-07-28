"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddcollectionById from "../../lib/AddcollectionById/AddcollectionById";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
  likes: number;
};

function BtnLikePaletteCard({ id, likes }: Props) {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(likes === 1);
  const router = useRouter();

  async function handleAddLike(id: number) {
    const result = await AddcollectionById(id, "1");
    if (result?.liked !== null) {
      setLiked(result.liked);
      setLikeCount((prev) => (result.liked ? prev + 1 : prev - 1));
      router.refresh();
    }
  }

  return (
    <button
      className={`border flex items-center gap-3 px-2 py-1 border-border rounded-md ${
        liked ? "bg-[#EDEDED]" : ""
      }`}
      onClick={() => handleAddLike(id)}
    >
      <Image
        src={liked ? "/icon/heart-red.png" : "/icon/heart-removebg-preview.png"}
        alt="heart"
        width={20}
        height={20}
      />
      <span className="font-mono">{likeCount}</span>
    </button>
  );
}

export default BtnLikePaletteCard;
