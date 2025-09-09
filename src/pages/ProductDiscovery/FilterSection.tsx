import React, { useState } from 'react';


interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

interface FilterSectionProps {
  onFilterChange?: (filters: any) => void;
}

const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  const [customizable, setCustomizable] = useState(false);
  const [idealForOptions, setIdealForOptions] = useState<FilterOption[]>([
    { id: 'men', label: 'Men', checked: false },
    { id: 'women', label: 'Women', checked: false },
    { id: 'baby-kids', label: 'Baby & Kids', checked: false }
  ]);

  const [expandedSections, setExpandedSections] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleIdealForChange = (optionId: string) => {
    setIdealForOptions(prev => 
      prev.map(option => 
        option.id === optionId 
          ? { ...option, checked: !option.checked }
          : option
      )
    );
  };

  const filterSections = [
    { key: 'idealFor', title: 'IDEAL FOR', defaultValue: 'All' },
    { key: 'occasion', title: 'OCCASION', defaultValue: 'All' },
    { key: 'work', title: 'WORK', defaultValue: 'All' },
    { key: 'fabric', title: 'FABRIC', defaultValue: 'All' },
    { key: 'segment', title: 'SEGMENT', defaultValue: 'All' },
    { key: 'suitableFor', title: 'SUITABLE FOR', defaultValue: 'All' },
    { key: 'rawMaterials', title: 'RAW MATERIALS', defaultValue: 'All' },
    { key: 'pattern', title: 'PATTERN', defaultValue: 'All' }
  ];

  return (
    <div className="w-full lg:w-1/4 bg-background-primary">
      <div className="flex flex-col gap-6 lg:gap-11">
        {/* Customizable Option */}
        <div className="flex flex-row items-center gap-2">
          <div 
            className="w-5 h-5 border border-border-dark bg-background-primary cursor-pointer"
            onClick={() => setCustomizable(!customizable)}
          >
            {customizable && (
              <div className="w-full h-full bg-text-secondary"></div>
            )}
          </div>
          <span className="text-lg font-bold leading-relaxed text-text-secondary uppercase ml-2">
            Customizable
          </span>
        </div>

        {/* Ideal For Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-lg font-bold leading-relaxed text-text-secondary uppercase">
                IDEAL FOR
              </h3>
              <button onClick={() => toggleSection('idealFor')}>
                <img 
                  src="/images/img_arrow_left_blue_gray_900_16x16.svg" 
                  className="w-4 h-4" 
                  alt="toggle" 
                />
              </button>
            </div>
            <span className="text-lg font-normal leading-relaxed text-text-secondary">
              All
            </span>
          </div>

          {/* Ideal For Options */}
          <div className="flex flex-col gap-5">
            <button className="text-base font-normal leading-normal text-text-light underline text-left">
              Unselect all
            </button>
            
            {idealForOptions.map((option) => (
              <div key={option.id} className="flex flex-row items-center gap-2">
                <div 
                  className="w-4 h-4 border border-border-dark bg-background-primary cursor-pointer"
                  onClick={() => handleIdealForChange(option.id)}
                >
                  {option.checked && (
                    <div className="w-full h-full bg-text-secondary"></div>
                  )}
                </div>
                <span className="text-base font-normal leading-normal text-text-secondary ml-2">
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Filter Sections */}
        {filterSections.map((section) => (
          <div key={section.key} className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-lg font-bold leading-relaxed text-text-secondary uppercase">
                {section.title}
              </h3>
              <button onClick={() => toggleSection(section.key as keyof typeof expandedSections)}>
                <img 
                  src="/images/img_arrow_left.svg" 
                  className="w-4 h-4" 
                  alt="toggle" 
                />
              </button>
            </div>
            <span className="text-lg font-normal leading-relaxed text-text-secondary">
              {section.defaultValue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;