import { VisualEnvironment } from '../types';

interface DynamicSceneProps {
  environments: VisualEnvironment[];
  selectedEnvironmentId: string;
  onSelectEnvironment: (environmentId: string) => void;
}

export function DynamicScene({
  environments,
  selectedEnvironmentId,
  onSelectEnvironment
}: DynamicSceneProps): JSX.Element {
  return (
    <section className="panel">
      <h2>Dynamic graphical environment</h2>
      <p>Select a visual context to present your historical narrative.</p>
      <div className="environment-grid">
        {environments.map((environment) => {
          const isSelected = environment.id === selectedEnvironmentId;
          return (
            <button
              key={environment.id}
              type="button"
              className={`environment-button ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectEnvironment(environment.id)}
              style={{ borderColor: environment.accentColor }}
            >
              <span>{environment.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
