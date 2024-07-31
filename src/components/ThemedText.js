import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemedText = ({ type, children }) => {
  const { theme } = useTheme();

  let style;
  if (type === 'headline') {
    style = {
      fontSize: theme.headline.fontSize,
      fontWeight: theme.headline.fontWeight,
    };
  } else if (type === 'title') {
    style = {
      fontSize: theme.title.fontSize,
      fontWeight: theme.title.fontWeight,
    };
  } else if (type === 'description') {
    style = {
      fontSize: theme.description.fontSize,
      fontWeight: theme.description.fontWeight,
    };
  }

  return <div style={style}>{children}</div>;
};

export default ThemedText;
