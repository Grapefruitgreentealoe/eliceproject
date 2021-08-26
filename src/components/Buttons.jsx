import React from 'react';
import { Link } from 'react-router-dom';
import './page-layout.css';
import Button from 'react-bootstrap/Button';

export function NextButton({ state, username, presentURL, nextURL, label }) {
  return (
    <Link
      to={state && username ? nextURL : presentURL}
      style={{ color: 'white' }}
    >
      <Button
        variant={state && username ? 'outline-primary' : 'secondary'}
        disabled={state && username ? false : true}
      >
        {label}
      </Button>
    </Link>
  );
}

export function PreviousButton({ previousURL, label }) {
  return (
    <Link to={previousURL} style={{ color: 'white' }}>
      <Button variant="outline-primary">{label}</Button>
    </Link>
  );
}
