import { TimelineEvent } from '../types';

interface TimelineCanvasProps {
  events: TimelineEvent[];
  accentColor: string;
  onDelete: (eventId: string) => void;
}

const minimumWidth = 900;
const laneHeight = 120;

export function TimelineCanvas({ events, accentColor, onDelete }: TimelineCanvasProps): JSX.Element {
  const sortedEvents = [...events].sort((left, right) => left.year - right.year);

  if (!sortedEvents.length) {
    return (
      <section className="panel timeline-panel">
        <h2>Visual timeline</h2>
        <p>Add your first event to render the timeline.</p>
      </section>
    );
  }

  const firstYear = sortedEvents[0].year;
  const lastYear = sortedEvents[sortedEvents.length - 1].year;
  const totalYears = Math.max(10, lastYear - firstYear);
  const width = Math.max(minimumWidth, sortedEvents.length * 250);

  const xForYear = (year: number): number => {
    const ratio = (year - firstYear) / totalYears;
    return 70 + ratio * (width - 140);
  };

  return (
    <section className="panel timeline-panel">
      <h2>Visual timeline</h2>
      <div className="timeline-scroll">
        <svg width={width} height={laneHeight + 80} role="img" aria-label="timeline">
          <line x1={60} x2={width - 60} y1={laneHeight / 2} y2={laneHeight / 2} stroke={accentColor} strokeWidth={4} />

          {sortedEvents.map((event, index) => {
            const x = xForYear(event.year);
            const y = laneHeight / 2;
            const labelY = index % 2 === 0 ? y - 24 : y + 38;

            return (
              <g key={event.id}>
                <circle cx={x} cy={y} r={8 + event.impact} fill={accentColor} opacity={0.85} />
                <text x={x} y={labelY} textAnchor="middle" className="timeline-year">
                  {event.year}
                </text>
                <foreignObject x={x - 110} y={labelY + 8} width={220} height={90}>
                  <article className="event-card">
                    <header>
                      <strong>{event.title}</strong>
                    </header>
                    <small>{event.category}</small>
                    <button type="button" onClick={() => onDelete(event.id)}>
                      Remove
                    </button>
                  </article>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
