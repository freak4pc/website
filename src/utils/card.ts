import { API_URL } from './constants'

const cardUrl = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return `${API_URL}/card.svg?title=${encodeURI(title)}&subtitle=${encodeURI(
    subtitle
  )}`
}

const defaultCard = cardUrl({
  title: 'xcbuddy',
  subtitle: 'Xcode projects at scale',
})

export { defaultCard }
export default cardUrl
