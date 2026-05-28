import React from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';

type Tag = {
  label: string;
  permalink: string;
  count: number;
};

export default function TagList(): React.JSX.Element {
  const {tags} = usePluginData('tags-data-plugin') as {tags: Tag[]};

  if (!tags || tags.length === 0) {
    return <p>Aucun tag trouvé.</p>;
  }

  return (
    <ul>
      {tags.map(tag => (
        <li key={tag.label}>
          <Link to={tag.permalink}>{tag.label}</Link>{' '}
          <small>({tag.count} recette{tag.count > 1 ? 's' : ''})</small>
        </li>
      ))}
    </ul>
  );
}
