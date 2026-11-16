import { selectReadings, useReadingListStore } from '../stores/useReadingListStore'

export default function ReadingSchedule() {
  const readings = useReadingListStore(selectReadings)
  const sortedReadings = [...readings].sort((first, second) => first.date.localeCompare(second.date))

  return (
    <section>
      <h2>Planning de lecture</h2>
      {sortedReadings.length === 0 && <p>Aucune lecture planifiée.</p>}
      <ul>
        {sortedReadings.map((reading) => (
          <li key={reading.id}>
            {reading.title} · <time dateTime={reading.date}>{reading.date}</time>
          </li>
        ))}
      </ul>
    </section>
  )
}
