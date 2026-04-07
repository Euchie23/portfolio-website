import React from 'react';
import { BentoCard } from '../BentoCard';
import { TechnicalGallery } from '../TechnicalGallery';
import { Map, MapPin } from 'lucide-react';

export const GeoTentaclesCard = ({ isMobile }) => {
  return (
    <BentoCard delay={0.4} style={{ gridColumn: isMobile ? 'span 1' : 'span 2', gridRow: 'span 2' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
          <Map color="var(--brand-mint)" size={24} />
        </div>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>GeoTentacles</h2>
      </div>
      <h3 className="text-gradient" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Spatial Intelligence
      </h3>
      <p className="text-muted" style={{ lineHeight: 1.6, flexGrow: 1 }}>
        Advanced geographic data visualization. Leveraging PostGIS for backend spatial queries and QGIS integration for comprehensive hotspot analysis.
      </p>

      {isMobile ? (
        <TechnicalGallery imageSrc="/geotentacles.png" alt="GeoTentacles Spatial Intelligence Map" title="QGIS Hotspot Analysis" />
      ) : (
        <div style={{ marginTop: '2rem', height: '120px', background: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--glass-border)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at center, var(--brand-mint) 0%, transparent 60%)' }}></div>
           <MapPin size={32} color="var(--brand-mint)" style={{ filter: 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.8))' }} />
        </div>
      )}
    </BentoCard>
  );
};
