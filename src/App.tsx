import { useMemo, useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DynamicScene } from './components/DynamicScene';
import { EventForm } from './components/EventForm';
import { TimelineCanvas } from './components/TimelineCanvas';
import { initialEvents, visualEnvironments } from './data';
import { TimelineEvent } from './types';

type TimelineAction =
  | { type: 'add'; payload: Omit<TimelineEvent, 'id'> }
  | { type: 'delete'; payload: { id: string } };

function timelineReducer(state: TimelineEvent[], action: TimelineAction): TimelineEvent[] {
  switch (action.type) {
    case 'add': {
      return [...state, { ...action.payload, id: uuid() }];
    }
    case 'delete': {
      return state.filter((event) => event.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
}

export default function App(): JSX.Element {
  const [timeline, dispatch] = useReducer(timelineReducer, initialEvents);
  const [environmentId, setEnvironmentId] = useState(visualEnvironments[0].id);

  const selectedEnvironment = useMemo(
    () => visualEnvironments.find((environment) => environment.id === environmentId) ?? visualEnvironments[0],
    [environmentId]
  );

  return (
    <div className={`app-shell ${selectedEnvironment.backgroundClass}`}>
      <main className="layout">
        <header className="panel hero">
          <h1>Church History Studio</h1>
          <p>
            Build your own timeline of the church&apos;s history and switch between dynamic visual scenes to narrate
            every period.
          </p>
        </header>

        <DynamicScene
          environments={visualEnvironments}
          selectedEnvironmentId={environmentId}
          onSelectEnvironment={setEnvironmentId}
        />

        <EventForm onCreate={(event) => dispatch({ type: 'add', payload: event })} />

        <TimelineCanvas
          events={timeline}
          accentColor={selectedEnvironment.accentColor}
          onDelete={(id) => dispatch({ type: 'delete', payload: { id } })}
        />
      </main>
    </div>
  );
}
