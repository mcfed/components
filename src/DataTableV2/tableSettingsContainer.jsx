import React, {useState, useEffect} from 'react';

const TableSettingsContainer = ({
  children,
  columns = [],
  initialSettings,
  onSettingsChange,
  namespace
}) => {
  const [density, setDensity] = useState(initialSettings.density || 'default');
  const [visibleColumns, setVisibleColumns] = useState(
    initialSettings.visibleColumns && initialSettings.visibleColumns.length > 0
      ? initialSettings.visibleColumns
      : columns.map(col => col.dataIndex)
  );
  const [sortedInfo, setSortedInfo] = useState(
    initialSettings.sortedInfo || {}
  );
  const [groupedInfo, setGroupedInfo] = useState(
    initialSettings.groupedInfo || {}
  );

  const updateSettings = newSettings => {
    setDensity(newSettings.density);
    setVisibleColumns(newSettings.visibleColumns);
    setSortedInfo(newSettings.sortedInfo);
    setGroupedInfo(newSettings.groupedInfo);
    onSettingsChange(newSettings);
    localStorage.setItem('tableSettings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    const initialSettings = {
      density: 'small',
      visibleColumns: columns.map(col => col.dataIndex),
      sortedInfo: {},
      groupedInfo: {}
    };
    updateSettings(initialSettings);
  };

  useEffect(() => {
    const savedSettings = JSON.parse(
      localStorage.getItem(`tableSettings_${namespace}`)
    );
    if (savedSettings) {
      updateSettings(savedSettings);
    }
  }, []);

  return children({
    density,
    visibleColumns,
    sortedInfo,
    groupedInfo,
    updateDensity: newDensity =>
      updateSettings({...initialSettings, density: newDensity}),
    updateVisibleColumns: newVisibleColumns =>
      updateSettings({...initialSettings, visibleColumns: newVisibleColumns}),
    resetSettings
  });
};

export default TableSettingsContainer;
