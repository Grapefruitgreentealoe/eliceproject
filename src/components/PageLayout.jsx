import React from 'react';
import './page-layout.css';

export default function PageLayout({ title, children }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      <main className="content">{children}</main>
    </div>
  );
}
