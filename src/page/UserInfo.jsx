import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import InputUser from '../components/InputUser';

export default function UserInfo() {
  return (
    <PageLayout title="User Setting">
      <div className="form-container">
        <h1>직업가치관검사</h1>
        <InputUser />
      </div>
    </PageLayout>
  );
}
