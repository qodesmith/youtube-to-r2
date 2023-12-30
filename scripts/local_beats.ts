import dl from '@qodestack/dl-yt-playlist'

const {BEATS_PLAYLIST_ID, API_KEY} = process.env
if (!BEATS_PLAYLIST_ID) throw new Error('Missing BEATS_PLAYLIST_ID')
if (!API_KEY) throw new Error('Missing API_KEY')

dl({
  playlistId: BEATS_PLAYLIST_ID,
  apiKey: API_KEY,
  audioOnly: true,
  getFullData: true,
  maxLengthInSeconds: 60 * 11,
})

function dateDiff(
  date1: Date,
  date2: Date
): {years: number; months: number; days: number} {
  let diff = Math.abs(date2.getTime() - date1.getTime())
  const timeDiff = {years: 0, months: 0, days: 0}

  timeDiff.years = Math.floor(diff / (1000 * 3600 * 24 * 365))
  diff -= timeDiff.years * (1000 * 3600 * 24 * 365)
  timeDiff.months = Math.floor(diff / (1000 * 3600 * 24 * 30))
  diff -= timeDiff.months * (1000 * 3600 * 24 * 30)
  timeDiff.days = Math.floor(diff / (1000 * 3600 * 24))

  return timeDiff
}
