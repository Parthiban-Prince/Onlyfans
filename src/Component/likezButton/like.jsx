import React, { useEffect, useState } from 'react';

function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(false);

  // 🔁 Fast render: pre-set liked = false & count = 0
  // Fetch real data in background AFTER component renders
  useEffect(() => {
    requestIdleCallback(async () => {
      try {
        const [statusRes, countRes] = await Promise.all([
          fetch(`https://onlyfans.up.railway.app/api/create/${postId}/isLiked`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
          fetch(`https://onlyfans.up.railway.app/api/create/${postId}/count`),
        ]);

        const statusData = await statusRes.json();
        const countData = await countRes.json();

        setLiked(statusData.liked);
        setCount(countData.likeCount);
        setReady(true);
      } catch (err) {
        console.error("❌ Failed to fetch like data:", err);
      }
    });
  }, [postId]);

  // 🧠 Optimistic update on click
  const toggleLike = async () => {
    const updated = !liked;
    setLiked(updated);
    setCount((prev) => prev + (updated ? 1 : -1));

    try {
      const res = await fetch(`https://onlyfans.up.railway.app/api/create/${postId}/toggle`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json',
        },
      });
      const result = await res.json();
      console.log("✅ Synced like:", result);
    } catch (err) {
      console.error("❌ Failed to sync like:", err);
      setLiked(!updated);
      setCount((prev) => prev - (updated ? 1 : -1));
    }
  };

  return (
    <div className="flex items-center gap-1">
      <img
        src={
          liked
            ? "https://img.icons8.com/color/48/like--v3.png"
            : "https://img.icons8.com/ios/50/000000/like--v1.png"
        }
        alt="Like"
        className={`w-6 h-6 cursor-pointer transition hover:scale-110 ${ready ? '' : 'opacity-50 pointer-events-none'}`}
        onClick={ready ? toggleLike : undefined}
      />
      <span className="text-sm text-gray-600">{count} likes</span>
    </div>
  );
}

export default LikeButton;
