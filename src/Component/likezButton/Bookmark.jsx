import React, { useEffect, useState } from 'react';
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5';
import { api } from '../../api/api';

function BookmarkButton({ postId }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [ready, setReady] = useState(false);

  // Fetch initial bookmark status
  useEffect(() => {
    requestIdleCallback(async () => {
      try {
        const res = await fetch(`${api}/api/Bookmarks/userBookmarks`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const data = await res.json();
        setBookmarked(data.bookmarked);
        setReady(true);
      } catch (error) {
        console.error('❌ Failed to fetch bookmark status:', error);
      }
    });
  }, [postId]);

  // Toggle bookmark (optimistic update)
  const toggleBookmark = async () => {
    const updated = !bookmarked;
    setBookmarked(updated);

    try {
      const res = await fetch(`${api}/api/Bookmarks/addBookmark`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId }),
      });

      const result = await res.json();
      console.log('✅ Synced bookmark:', result);
    } catch (err) {
      console.error('❌ Failed to sync bookmark:', err);
      setBookmarked(!updated);
    }
  };

  return bookmarked ? (
    <IoBookmark
      className="w-6 h-6 text-blue-600 cursor-pointer"
      onClick={ready ? toggleBookmark : undefined}
      title="Bookmarked"
    />
  ) : (
    <IoBookmarkOutline
      className="w-6 h-6 cursor-pointer"
      onClick={ready ? toggleBookmark : undefined}
      title="Bookmark"
    />
  );
}

export default BookmarkButton;
