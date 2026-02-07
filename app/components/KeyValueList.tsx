"use client";

interface KeyValueItem {
  key: string;
  value: string;
}

interface KeyValueListProps {
  items: KeyValueItem[];
}

export default function KeyValueList({ items }: KeyValueListProps) {
  return (
    <div className="w-full border border-current">
      {items.map((item, index) => (
        <div 
          key={item.key}
          className={`flex justify-between p-3.5 font-mono border-b border-current last:border-b-0`}
        >
          <span className="w-[50%] text-[11px] font-bold">{item.key.toUpperCase()}</span>
          <span className="w-[50%] text-[11px] font-bold text-right">{item.value.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}
