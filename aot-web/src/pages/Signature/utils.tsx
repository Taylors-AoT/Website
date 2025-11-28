export type EventItem = {
  id: string;
  title: string;
  date?: string;
  description?: string;
};

const demoEvents: EventItem[] = [
  { id: "1", title: "Annual Gala 2025", date: "2025-10-12", description: "A big fundraising & awards night." },
  { id: "2", title: "Community Meetup", date: "2025-08-01", description: "Local partners & volunteers meet." },
];

export function EventList() {
  return (
    <section>
      <h2>Signature Events</h2>
      <div className="events-grid">
        {demoEvents.map((e) => (
          <article key={e.id} className="event-card">
            <h3>{e.title}</h3>
            {e.date && <time>{e.date}</time>}
            <p>{e.description}</p>
            <button>Learn more</button>
          </article>
        ))}
      </div>
    </section>
  );
}
