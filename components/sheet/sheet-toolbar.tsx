import { ModeToggle } from '../theme-toggle';

const SheetToolbar: React.FC = () => {
  return (
    <div className="sheet-toolbar animate-float-in justify-between bg-white dark:bg-gray-900">
      <div className="mr-4">
        <h1 className="text-lg font-medium">Spreadsheet</h1>
      </div>
      <div className="flex items-center space-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default SheetToolbar;
