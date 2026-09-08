function groupBy(items, key) {
  const result = {}

  for (const item of items) {
    const group = item[key]

    if (!(group in result)) {
      result[group] = []
    }

    result[group].push(item)
  }

  return result
}