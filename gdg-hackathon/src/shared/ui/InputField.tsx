type InputProps = {
  label: string; // 필드의 라벨
  placeholder: string; // 입력 필드의 플레이스홀더
  type?: string; // 입력 타입 (예: text, password 등)
  value: string; // 입력 값 (부모 컴포넌트에서 전달)
  onChange: (value: string) => void; // 값 변경 핸들러
};

const InputField = ({ label, placeholder, type = "text", value, onChange }: InputProps) => (
  <div>
    <label className="block text-sm font-bold text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value} // 부모로부터 전달받은 값
      onChange={(e) => onChange(e.target.value)} // 부모로 값 전달
      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
    />
  </div>
);

export default InputField;
