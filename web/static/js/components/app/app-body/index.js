import riot from 'riot'
import {mountTag} from 'utils'

import './app-body.styl'

riot.tag('app-body', '', '', 'class="container"', function (opts) {
  riot.route('', () => {
    mountTag(this.root, 'projects-list')
  })
  riot.route('/projects/new', (name) => {
    mountTag(this.root, 'projects-new')
  })
})
