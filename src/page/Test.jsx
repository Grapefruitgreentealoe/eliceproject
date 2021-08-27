import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import '../components/page-layout.css';
import Questions from '../Questions';

export default function Test() {

  return (
    <PageLayout title="검사진행">
      <Questions />
    </PageLayout>
  );
}
