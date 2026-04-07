import React from 'react';
import { BentoCard } from '../BentoCard';
import { TechnicalGallery } from '../TechnicalGallery';
import { Fish, TrendingUp } from 'lucide-react';

export const SquidStockCard = ({ isMobile }) => {
  return (
    <BentoCard delay={0.2} style={{ gridColumn: isMobile ? 'span 1' : 'span 2', gridRow: 'span 2' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
          <Fish color="var(--brand-mint)" size={24} />
        </div>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>SquidStock</h2>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'var(--bg-card)', borderRadius: '99px', border: '1px solid var(--brand-mint-glow)' }}>Fisheries Analytics</span>
        <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'var(--bg-card)', borderRadius: '99px' }}>Python Analytics</span>
      </div>
      
      <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Advanced stock assessment tool integrating EDSPM models and AutoML workflows to deliver superior Biomass Estimation.
      </p>

      {isMobile ? (
        <TechnicalGallery imageSrc="/squidstock.png" alt="SquidStock Analytics Dashboard" title="EDSPM Modeling & Biomass" />
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: 'auto' }}>
          <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
             <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: 'var(--text-main)' }}>Ecological Realism</h4>
             <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Predictive models grounded in biological truths.</p>
          </div>
          <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
             <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: 'var(--text-main)' }}>Uncertainty Mngmt</h4>
             <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Rigorous quantification of predictive variance.</p>
          </div>
        </div>
      )}
    </BentoCard>
  );
};
