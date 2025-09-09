import React, { useState } from 'react';

interface FilterSectionProps {
  className?: string;
}

const FilterSection = ({ className = "" }: FilterSectionProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const filterSections = [
    { id: 'ideal-for', title: 'IDEAL FOR', value: 'All' },
    { id: 'occasion', title: 'OCCASION', value: 'All' },
    { id: 'work', title: 'WORK', value: 'All' },
    { id: 'fabric', title: 'FABRIC', value: 'All' },
    { id: 'segment', title: 'SEGMENT', value: 'All' },
    { id: 'suitable-for', title: 'SUITABLE FOR', value: 'All' },
    { id: 'raw-materials', title: 'RAW MATERIALS', value: 'All' },
    { id: 'pattern', title: 'PATTERN', value: 'All' }
  ];

  return (
    <div className={`flex flex-col gap-10 w-full ${className}`}>
      {/* Customizable Checkbox */}
      <div className="flex flex-row items-center gap-2">
        <div className="w-[22px] h-[22px] bg-background-primary border-0 border-secondary-border"></div>
        <span className="text-lg font-bold leading-relaxed uppercase text-text-secondary ml-2">
          Customizable
        </span>
      </div>

      {/* Filter Sections */}
      <div className="flex flex-col gap-12 mb-6">
        {filterSections.map((section) => (
          <div key={section.id} className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center w-full">
              <h3 className="text-lg font-bold leading-relaxed uppercase text-text-secondary">
                {section.title}
              </h3>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-4 h-4"
                aria-label={`Toggle ${section.title} filter`}
              >
                <img src="/images/img_arrow_left.svg" className="w-4 h-4" alt="toggle" />
              </button>
            </div>
            <span className="text-lg font-normal leading-relaxed text-text-secondary">
              {section.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;