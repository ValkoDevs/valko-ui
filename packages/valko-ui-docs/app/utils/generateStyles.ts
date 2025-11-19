const generateStyles = (config: Record<string, string | string[]>) => {
  const styles: Record<string, { slotContainer: string[] }> = {}

  Object.keys(config).forEach((key) => {
    styles[key] = {
      slotContainer: [config[key]!].flat()
    }
  })

  return styles
}

export default generateStyles
