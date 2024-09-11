export default function SectionHeading({ text }: { text: string }) {
  return (
    <div className='mb-10 flex items-center justify-center gap-7'>
      <div className='mb-1 h-[1px] w-[30%] bg-muted'></div>
      <h2 className='text-center font-mono text-xl font-semibold leading-none text-primary'>
        {text}
      </h2>
      <div className='mb-1 h-[1px] w-[30%] bg-muted'></div>
    </div>
  )
}
