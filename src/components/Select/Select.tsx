import "./Select.css";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  id: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
};

export const Select = ({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
}: SelectProps) => {
  return (
    <div className="select">
      <label className="select__label" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select__field"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
