"use client";
import React, { useEffect, useState } from "react";

// Use localStorage to simulate a persistent visitor count (for demo purposes)
const VISITOR_KEY = "beer_visitor_count";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get the current count from localStorage
    let current = parseInt(localStorage.getItem(VISITOR_KEY) || "0", 10);
    current += 1;
    localStorage.setItem(VISITOR_KEY, current);
    setCount(current);
  }, []);

  return (
    <div className="text-center text-sm text-gray-700 mt-2">
      <strong>{count}</strong> people have visited this website.
    </div>
  );
};

export default VisitorCounter;