import React from 'react';
import { GameCard } from '../../components/Inject/GameCard';
import { ChangelogCard } from '../../components/Inject/ChangelogCard';

export function InjectPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8">
        <div className="grid grid-cols-2 gap-6">
          <GameCard
            title="Red Dead Redemption 2"
            image="https://images.unsplash.com/photo-1612404730960-5c71577fca11?w=96"
            version="4.3"
            status="Online"
            onDownload={() => console.log('Download clicked')}
          />
          {/* Add more GameCards as needed */}
        </div>
      </div>
      <div className="col-span-4">
        <ChangelogCard />
      </div>
    </div>
  );
}