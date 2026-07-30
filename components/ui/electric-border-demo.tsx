import ElectricBorder from '@/components/ui/electric-border'

export default function ElectricBorderDemo() {
  return (
    <ElectricBorder
      color="#7df9ff"
      speed={1}
      chaos={0.5}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <div className="p-4 bg-white dark:bg-zinc-950">
        <p style={{ margin: '6px 0 0', opacity: 0.8 }} className="text-zinc-800 dark:text-zinc-200">
          A glowing, animated border wrapper.
        </p>
      </div>
    </ElectricBorder>
  )
}
