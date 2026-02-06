export const formatAmount = (value) => {
  if (value === null || value === undefined) return '0'
  const num = Number(value)
  if (isNaN(num)) return '0'
  return `Rp ${num.toLocaleString('id-ID')}`
}

export const formatDateTime = (datetime) => {
  const date = new Date(datetime)

  if (isNaN(date.getTime()) || datetime == null) {
    return '-'
  }

  const day = date.getUTCDate().toString().padStart(2, '0')
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const year = date.getUTCFullYear().toString()

  const hoursWIB = (date.getUTCHours() + 7) % 24
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')
  const hoursFormatted = hoursWIB.toString().padStart(2, '0')

  return `${day}/${month}/${year}, ${hoursFormatted}:${minutes} WIB`
}
