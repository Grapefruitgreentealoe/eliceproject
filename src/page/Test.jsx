import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { PreviousButton, NextButton } from '../components/Buttons';
import '../components/page-layout.css';
import Questions from '../Questions';

export default function Test() {
  const [state, setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
    console.log(e.target.value);
  };
  return (
    <PageLayout title="검사진행">
      <Questions />
    </PageLayout>
  );
}
