const generateStyles = (config: Record<string, string | string[]> = {}) => {
  const styles: Record<string, { slotContainer: string[] }> = {}

  Object.keys(config).forEach((key) => {
    styles[key] = {
      slotContainer: Array.isArray(config[key]) ? config[key] : [config[key]]
    }
  })

  return styles
}

export default generateStyles
