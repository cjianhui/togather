import moment from 'moment'

export const getFormattedDateTime = (rawDateTime) => {
  const date = moment(rawDateTime)
    .utcOffset('+0800')
    .format('ddd, MMM DD YYYY HH:MM')
  return date
}
