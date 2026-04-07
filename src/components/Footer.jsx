import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="glass-panel" style={{ 
      margin: '2rem', 
      padding: '1.5rem', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '0.75rem',
      color: 'var(--text-muted)',
      fontSize: '0.875rem'
    }}>
      <ShieldCheck size={18} color="var(--brand-mint)" />
      <span>All data displayed is simulated for confidentiality. Compliant with GDPR and institutional data governance.</span>
    </footer>
  );
};
