import React from 'react';
import { Skeleton } from '@nextui-org/react';

export default function CreditsSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
      <Skeleton className="w-12 h-12 rounded-xl" />
      <div className="flex-1">
        <Skeleton className="w-20 h-7 rounded-lg mb-2" />
        <Skeleton className="w-32 h-4 rounded-lg" />
      </div>
    </div>
  );
}