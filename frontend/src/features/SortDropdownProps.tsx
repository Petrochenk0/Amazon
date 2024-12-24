import React, { FC } from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface SortDropdownProps {
  SortChange: (value: string) => void;
}

const SortDropdownProps: FC<SortDropdownProps> = ({ SortChange }) => {
  return (
    <Select defaultValue="Популярные" style={{ width: 200 }} onChange={SortChange}>
      <Option value="popular">Популярные</Option>
      <Option value="newest">Новинки</Option>
      <Option value="cheapest">Дешевле</Option>
      <Option value="expensive">Дороже</Option>
      <Option value="discounted">С большими скидками</Option>
      <Option value="highRated">С высоким рейтингом</Option>
    </Select>
  );
};

export default SortDropdownProps;
