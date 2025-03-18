interface FormulaBarProps {
  value: string;
  onChange: (value: string) => void;
  selectedCell: string;
}

const FormulaBar: React.FC<FormulaBarProps> = ({ value, onChange, selectedCell }) => {
  return (
    <div
      className="sheet-formula-bar animate-float-in bg-white dark:bg-gray-900"
      style={{ animationDelay: '50ms' }}
    >
      <div className="flex h-8 w-auto items-center justify-center rounded bg-sheet-header px-2 text-sm font-medium dark:bg-gray-800">
        {selectedCell}
      </div>
      <div className="relative flex-1">
        <input
          type="text"
          className="h-8 w-full rounded border border-sheet-gridline px-3 py-1 text-sm outline-none transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter cell value or formula (e.g. =A1+B1)"
        />
      </div>
    </div>
  );
};

export default FormulaBar;
