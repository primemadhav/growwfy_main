/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import SeoGuide from './SeoGuide';

interface SeoPageProps {
  onContactClick?: () => void;
}

export default function SeoPage({ onContactClick }: SeoPageProps) {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      {/* Renders the full interactive SEO services page, checklists, and calculators */}
      <SeoGuide />
    </div>
  );
}
