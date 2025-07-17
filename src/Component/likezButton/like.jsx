import React, { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

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
          fetch(`${api}/api/create/${postId}/isLiked`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
          fetch(`${api}/api/create/${postId}/count`),
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
      const res = await fetch(`${api}/api/create/${postId}/toggle`, {
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
      
        {
          liked
            ? <IoHeartSharp className='w-6 h-6 text-red-600'      onClick={ready ? toggleLike : undefined} />
            : <IoHeartOutline className='w-6 h-6'      onClick={ready ? toggleLike : undefined} />
        }
      <span className="text-sm text-gray-600">{count} likes</span>
    </div>
  );
}

export default LikeButton;
