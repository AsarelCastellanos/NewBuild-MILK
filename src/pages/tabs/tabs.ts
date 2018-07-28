import { Component } from '@angular/core';

import { ForumsPage } from '../forums/forums';
import { EventsPage } from '../events/events';
import { CentersPage } from '../centers/centers';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ForumsPage;
  tab2Root = EventsPage;
  tab3Root = CentersPage;

  constructor() {

  }
}
