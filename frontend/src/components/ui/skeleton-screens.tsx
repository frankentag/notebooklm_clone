'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Base skeleton with shimmer animation
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-[var(--bg-tertiary)]",
        className
      )}
      {...props}
    />
  )
}

// Notebook page skeleton - shows immediately while data loads
export function NotebookPageSkeleton() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex">
      {/* Left panel - Sources */}
      <div className="w-80 border-r border-[rgba(255,255,255,0.06)] p-4 space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-6 w-32" />
        </div>
        <Skeleton className="h-10 w-full" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-secondary)]">
              <Skeleton className="h-4 w-4 rounded" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center panel - Chat */}
      <div className="flex-1 flex flex-col p-4">
        <div className="flex-1 space-y-4 mb-4">
          {[1, 2].map((i) => (
            <div key={i} className={cn(
              "max-w-[80%] p-4 rounded-2xl",
              i % 2 === 0 ? "ml-auto bg-[var(--accent-primary)]/20" : "bg-[var(--bg-secondary)]"
            )}>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
        <Skeleton className="h-14 w-full rounded-2xl" />
      </div>

      {/* Right panel - Studio */}
      <div className="w-80 border-l border-[rgba(255,255,255,0.06)] p-4 space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-4 rounded-xl bg-[var(--bg-secondary)]">
            <div className="flex items-center gap-3 mb-3">
              <Skeleton className="h-10 w-10 rounded-xl" />
              <div className="flex-1">
                <Skeleton className="h-5 w-24 mb-1" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

// Dashboard skeleton for notebook cards
export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] p-8">
      <div className="max-w-6xl mx-auto">
        <Skeleton className="h-10 w-48 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[rgba(255,255,255,0.06)]">
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// History page skeleton - content only (no wrapper for embedding)
export function HistoryPageSkeleton() {
  return (
    <motion.div
      key="skeleton"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-5 rounded-2xl glass-card">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-xl" />
            <div className="flex-1">
              <Skeleton className="h-5 w-48 mb-2" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
      ))}
    </motion.div>
  )
}

// Chat panel skeleton
export function ChatPanelSkeleton() {
  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-1 space-y-4 mb-4 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div key={i} className={cn(
            "max-w-[80%] p-4 rounded-2xl",
            i % 2 === 0 ? "ml-auto bg-[var(--accent-primary)]/10" : "bg-[var(--bg-secondary)]"
          )}>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
      <Skeleton className="h-14 w-full rounded-2xl" />
    </div>
  )
}

// Sources panel skeleton
export function SourcesPanelSkeleton() {
  return (
    <div className="p-4 space-y-4">
      <Skeleton className="h-10 w-full rounded-lg" />
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-secondary)]">
            <Skeleton className="h-4 w-4 rounded" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Studio panel skeleton
export function StudioPanelSkeleton() {
  return (
    <div className="p-4 space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 rounded-xl bg-[var(--bg-secondary)]">
          <div className="flex items-center gap-3 mb-3">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <div className="flex-1">
              <Skeleton className="h-5 w-24 mb-1" />
              <Skeleton className="h-3 w-32" />
            </div>
            <Skeleton className="h-6 w-6" />
          </div>
        </div>
      ))}
    </div>
  )
}

export { Skeleton }
