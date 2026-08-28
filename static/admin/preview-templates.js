var RecipePreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']);
    var tags = entry.getIn(['data', 'tags']);
    var tagList = tags && tags.toJS ? tags.toJS() : [];

    return h(
      'div',
      {className: 'recipe-preview'},
      h('h1', {className: 'recipe-preview__title'}, title),
      tagList.length
        ? h(
            'div',
            {className: 'recipe-preview__tags'},
            tagList.map(function (tag) {
              return h('span', {className: 'recipe-preview__tag', key: tag}, tag);
            }),
          )
        : null,
      h('article', {className: 'markdown'}, this.props.widgetFor('body')),
    );
  },
});

CMS.registerPreviewStyle('preview.css');
CMS.registerPreviewTemplate('recettes', RecipePreview);
