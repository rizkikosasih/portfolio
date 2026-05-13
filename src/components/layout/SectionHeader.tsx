const SectionHeader = ({
  title,
  subtitle,
  className
}: {
  title: string
  subtitle: string,
  className?: string
}) => {
  return (
    <div className={`mb-12 flex flex-col gap-2 ${className}`}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
        {title}
      </h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  )
}

export default SectionHeader
