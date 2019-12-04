import React, { useState } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

function handleChange(e) {}

export default function AvatarInput() {
  return (
    <Container>
      <label htmlFor="avatar">
        <img src="" alt="" />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
