type IProps = {
  labelTitle: string;
  name: string;
  value: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioInput = ({
  labelTitle,
  name,
  value,
  isChecked,
  onChange,
}: IProps) => {
  return (
    <label>
      {labelTitle}
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
    </label>
  );
};
