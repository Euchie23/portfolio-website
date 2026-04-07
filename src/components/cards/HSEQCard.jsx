import React from 'react';
import { BentoCard } from '../BentoCard';
import { TechnicalGallery } from '../TechnicalGallery';
import { ShieldAlert, Database } from 'lucide-react';

export const HSEQCard = ({ isMobile }) => {
  return (
    <BentoCard delay={0.3} style={{ gridColumn: isMobile ? 'span 1' : 'span 2', gridRow: 'span 2' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
          <ShieldAlert color="var(--brand-mint)" size={24} />
        </div>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>HSE-Q Platform</h2>
      </div>
      <h3 className="text-gradient" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Industrial Risk Management
      </h3>
      <p className="text-muted" style={{ lineHeight: 1.6, flexGrow: 1 }}>
        Enterprise-grade safety tracking system built on a robust PostgreSQL 'Audit Trail' architecture. Immutable record keeping for critical compliance.
      </p>
      
      {isMobile ? (
        <TechnicalGallery imageSrc="/hseq.png" alt="HSE-Q Audit Trail Dashboard" title="Industrial Risk Audit" />
      ) : (
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
           <Database size={32} color="var(--text-muted)" />
           <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Audit Architecture</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PostgreSQL &rsaquo; TimescaleDB layer</div>
           </div>
        </div>
      )}
    </BentoCard>
  );
};
