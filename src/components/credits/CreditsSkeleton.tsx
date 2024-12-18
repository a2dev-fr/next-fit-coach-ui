import React from 'react';
import { Skeleton } from '@nextui-org/react';

export default function CreditsSkeleton() {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
      <Skeleton className="w-11 h-11 rounded-lg" />
      <div className="flex-1">
        <Skeleton className="w-24 h-4 rounded-lg mb-2" />
        <Skeleton className="w-16 h-6 rounded-lg" />
      </div>
    </div>
  );
}