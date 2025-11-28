import React from "react";
import "./../css/Header.css";

export default function Header({ title }: { title?: string }) {
  return (
    <div className="site-header" role="banner">
      <div className="site-header-inner">
        <h1 className="site-title">{title ?? "AOT Club"}</h1>
      </div>
    </div>
  );
}
