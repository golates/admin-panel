interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium">
      <div
        style={{ width: `${value.toString()}%` }}
        className="flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white transition-all duration-300 ease-in-out"
      ></div>
    </div>
  );
};

export default ProgressBar;
