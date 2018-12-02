export default function formatDate(UTCDate) {
  const dateInstance = new Date(UTCDate)

  const date = dateInstance.getDate()
  const month = dateInstance.toLocaleString(Date.locale, {
    month: 'long',
  })
  const year = dateInstance.getFullYear()

  return `${month} ${date}, ${year}`
}
