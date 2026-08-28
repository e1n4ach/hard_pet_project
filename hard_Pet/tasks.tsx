function useToggle<T>(values: T[], initialIndex = 0) {
  const [index, setIndex] = React.useState(initialIndex);
  
  const toggle = () => {
    setIndex((prev) => (prev + 1) % values.length);
  };
  
  return [values[index], toggle] as const;
}








type FormValues = {
  email: string;
  password: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

function useForm(initialValues: FormValues) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!values.email.includes('@')) {
      newErrors.email = 'Некорректный email';
    }

    if (values.password.length < 6) {
      newErrors.password = 'Пароль должен быть не короче 6 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, setValues, errors, validate };
}









type Item = { id: number; name: string };

function SearchableList({ items }: { items: Item[] }) {
  const [query, setQuery] = React.useState('');
  const [debouncedQuery, setDebouncedQuery] = React.useState('');

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timerId);
  }, [query]);

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}