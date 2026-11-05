export function TechList({ items, label }: { items: readonly string[]; label?: string }) {
  return (
    <ul aria-label={label} className='flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-muted'>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
