import React from 'react';
import { Skeleton } from '@nextui-org/react';

interface LoadingStateProps {
  type: 'exercise' | 'profile';
}

export default function LoadingState({ type }: LoadingStateProps) {
  if (type === 'exercise') {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="w-3/4 rounded-lg">
              <div className="h-6 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="flex gap-4">
              <Skeleton className="w-20 rounded-lg">
                <div className="h-4 rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="w-24 rounded-lg">
                <div className="h-4 rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="w-16 rounded-lg">
                <div className="h-4 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Skeleton className="w-48 rounded-lg">
        <div className="h-8 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-full rounded-lg">
          <div className="h-6 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-6 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-3/4 rounded-lg">
          <div className="h-6 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </div>
  );
}