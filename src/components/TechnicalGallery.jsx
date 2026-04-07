import React from 'react';
import { Camera } from 'lucide-react';

export const TechnicalGallery = ({ imageSrc, alt, title }) => {
  return (
    <div style={{
      marginTop: '1.5rem',
      padding: '1rem',
      background: 'var(--bg-color)',
      borderRadius: '12px',
      border: '1px solid var(--glass-border)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Camera size={16} color="var(--brand-mint)" />
        <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: 600 }}>Technical Gallery: {title}</span>
      </div>
      <img 
        src={imageSrc} 
        alt={alt} 
        style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid var(--glass-border)' }} 
      />
    </div>
  );
};
