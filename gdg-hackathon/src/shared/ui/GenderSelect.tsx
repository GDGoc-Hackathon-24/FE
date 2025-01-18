type GenderSelectProps = {
    value: string; // 현재 선택된 성별
    onChange: (gender: string) => void; // 성별 변경 핸들러
  };
  
  const GenderSelect = ({ value, onChange }: GenderSelectProps) => {
    const options = [
      { label: "남성", value: "남성" },
      { label: "여성", value: "여성" },
    ];
  
    return (
      <div className="flex space-x-6">
        {options.map((option) => (
          <GenderButton
            key={option.value}
            isSelected={value === option.value}
            label={option.label}
            onClick={() => onChange(option.value)}
          />
        ))}
      </div>
    );
  };
  
  type GenderButtonProps = {
    label: string;
    isSelected: boolean;
    onClick: () => void;
  };
  
  const GenderButton = ({ label, isSelected, onClick }: GenderButtonProps) => {
    return (
      <button
        type="button"
        className={`w-48 h-48 flex items-center justify-center border rounded-2xl text-xl font-semibold ${
          isSelected ? "bg-gray-200 border-gray-500" : "bg-white border-gray-300"
        } hover:bg-gray-100`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  export default GenderSelect;
  