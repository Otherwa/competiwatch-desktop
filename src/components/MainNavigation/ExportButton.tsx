import React from 'react';

interface Props {
  activePage: string;
  onExport: () => void;
}

const ExportButton = ({ activePage, onExport }: Props) => {
  if (['matches', 'import', 'trends'].indexOf(activePage) < 0) {
    return null;
  }

  const exportSeason = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.currentTarget.blur();
    onExport();
  };

  return (
    <button
      type="button"
      className="btn-link text-small mr-3"
      onClick={exportSeason}
    >Export matches</button>
  );
};

export default ExportButton;
