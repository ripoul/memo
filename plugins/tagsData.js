// Plugin that reads doc tags directly from Markdown frontmatter at load time
// and exposes them via setGlobalData for use with usePluginData.
const fs = require('fs');
const path = require('path');

function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip diacritics (é→e, à→a …)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractTags(content) {
  const fm = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!fm) return [];
  const line = fm[1].match(/^tags:\s*\[([^\]]*)\]/m);
  if (!line) return [];
  return line[1]
    .split(',')
    .map(t => t.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
}

function walkDocs(dir, tagsMap) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDocs(full, tagsMap);
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      for (const label of extractTags(fs.readFileSync(full, 'utf8'))) {
        const existing = tagsMap.get(label);
        if (existing) {
          existing.count++;
        } else {
          tagsMap.set(label, {label, permalink: `/tags/${slugify(label)}`, count: 1});
        }
      }
    }
  }
}

module.exports = function tagsDataPlugin(context) {
  return {
    name: 'tags-data-plugin',
    async loadContent() {
      const tagsMap = new Map();
      walkDocs(path.join(context.siteDir, 'docs'), tagsMap);
      return Array.from(tagsMap.values()).sort((a, b) =>
        a.label.localeCompare(b.label),
      );
    },
    async contentLoaded({content, actions}) {
      actions.setGlobalData({tags: content});
    },
  };
};
