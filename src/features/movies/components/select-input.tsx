import styled from '@emotion/styled';

interface SelectInputProps {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const SelectWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SelectInput = ({
  value,
  label,
  options,
  onChange,
}: SelectInputProps) => {
  return (
    <SelectWrapper>
      <label htmlFor='select'>{label}</label>
      <select
        name='select'
        id='select'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
};
