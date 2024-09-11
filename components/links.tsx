import { cn } from '@/lib/utils'

type Side = 'left' | 'right'

export default function Links({
  children,
  side
}: {
  children: React.ReactNode
  side: Side
}) {
  return (
    <div
      className={cn(
        'animate-appear fixed bottom-0 hidden flex-col items-center gap-6 md:flex',
        side === 'left' && 'left-5 lg:left-12 xl:left-28',
        side === 'right' && 'right-5 lg:right-12 xl:right-28'
      )}
    >
      {children}
      <div className='h-[100px] w-[1px] bg-muted-foreground'></div>
    </div>
  )
}
