import React from 'react';
import { makePage } from '@keystatic/core/ui';
import keystaticConfig from '../../keystatic.config';

// Create the Keystatic page component
// This handles the admin UI and routing automatically
const KeystaticPage = makePage(keystaticConfig);

const KeystaticAdmin: React.FC = () => {
  return <KeystaticPage />;
};

export default KeystaticAdmin;
