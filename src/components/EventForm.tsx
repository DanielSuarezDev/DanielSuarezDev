import { FormEvent, useState } from 'react';
import { categories } from '../data';
import { ChurchCategory, TimelineEvent } from '../types';

interface EventFormProps {
  onCreate: (event: Omit<TimelineEvent, 'id'>) => void;
}

const currentYear = new Date().getFullYear();

export function EventForm({ onCreate }: EventFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(currentYear);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<ChurchCategory>('Foundational Era');
  const [impact, setImpact] = useState<1 | 2 | 3 | 4 | 5>(3);

  const submitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onCreate({
      title: title.trim(),
      year,
      description: description.trim(),
      category,
      impact
    });

    setTitle('');
    setYear(currentYear);
    setDescription('');
    setCategory('Foundational Era');
    setImpact(3);
  };

  return (
    <form className="panel" onSubmit={submitForm}>
      <h2>Create timeline milestone</h2>

      <label htmlFor="title">Title</label>
      <input id="title" value={title} onChange={(event) => setTitle(event.target.value)} required />

      <label htmlFor="year">Year</label>
      <input
        id="year"
        type="number"
        value={year}
        onChange={(event) => setYear(Number(event.target.value))}
        required
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value as ChurchCategory)}
      >
        {categories.map((categoryOption) => (
          <option key={categoryOption} value={categoryOption}>
            {categoryOption}
          </option>
        ))}
      </select>

      <label htmlFor="impact">Historical impact (1-5)</label>
      <input
        id="impact"
        type="range"
        min={1}
        max={5}
        step={1}
        value={impact}
        onChange={(event) => setImpact(Number(event.target.value) as 1 | 2 | 3 | 4 | 5)}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows={4}
        required
      />

      <button type="submit">Add to timeline</button>
    </form>
  );
}
