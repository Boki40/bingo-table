import { ChangeEvent } from "react";

export default function Select({
  title,
  label,
  options,
  value,
  onChange,
}: {
  title: string;
  label: string;
  options: {
    label: string;
    value: string | number | readonly string[] | undefined;
  }[];
  value: string | number | readonly string[] | undefined;
  onChange?: (
    e: ChangeEvent<HTMLSelectElement>,
    value: string | number | readonly string[] | undefined
  ) => void;
}) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        title={title}
        className="select select-primary w-full max-w-xs"
        onChange={(e) => onChange?.(e, e.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option value={option.value} key={String(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
