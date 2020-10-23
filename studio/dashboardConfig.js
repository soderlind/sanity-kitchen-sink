export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f92bb2d9ecd2e77382f9eb7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mo6hq8vm',
                  apiId: 'd4932942-97bd-4981-86d8-77ac7ef2fdc0'
                },
                {
                  buildHookId: '5f92bb2d96b4b980099eb58b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7xauxc13',
                  apiId: '2d172051-b426-4dfe-8495-f723b849cba2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/soderlind/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7xauxc13.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
