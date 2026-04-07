import React from 'react';
import { BentoCard } from '../BentoCard';
import { TestTube, Activity } from 'lucide-react';

export const SquidStackCard = ({ isMobile }) => {
  return (
    <BentoCard delay={0.1} style={{ gridColumn: isMobile ? 'span 1' : 'span 2', gridRow: 'span 2' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
          <TestTube color="var(--brand-mint)" size={24} />
        </div>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>SquidStack</h2>
      </div>
      <h3 className="text-gradient" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Environmental Monitoring & Risk
      </h3>
      <p className="text-muted" style={{ lineHeight: 1.6, flexGrow: 1 }}>
        Robust validation workflows for ICP-MS and LC-MS/MS data pipelines. 
        Engineered for precision in detecting trace environmental contaminants and mitigating ecological risk.
      </p>
      
      {!isMobile && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
             <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>ICP-MS Calibration</span>
             <Activity size={16} color="var(--brand-mint)" />
          </div>
          <div style={{ height: '4px', background: 'var(--bg-card)', borderRadius: '2px', overflow: 'hidden' }}>
             <div style={{ height: '100%', width: '98%', background: 'var(--brand-mint)' }}></div>
          </div>
        </div>
      )}
    </BentoCard>
  );
};
