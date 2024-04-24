"use client"; // 标记为客户端组件

import React, { useEffect } from "react";

export default function GoogleAdsClientComponent() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5517951218257829";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null; // 不渲染任何DOM元素
}