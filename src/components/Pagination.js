import React from 'react';
import { Pagination as MUIPagination } from '@mui/material';

const Pagination = ({ count, page, onChange }) => {
  return <MUIPagination count={count} page={page} onChange={onChange} />;
};

export default Pagination;
