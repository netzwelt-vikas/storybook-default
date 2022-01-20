import React from 'react';

export interface BrunoProps {
  yourName: string;
}

export function Bruno({ yourName }: BrunoProps) {
  return <div>Hello {yourName}</div>;
}
