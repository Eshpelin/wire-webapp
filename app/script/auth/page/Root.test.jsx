/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import React from 'react';
import {mockStore, mockWithStore} from '../util/TestUtil';
import Root from './Root';

describe('Root', () => {
  it('renders the Wire logo', () => {
    const state = {
      languageState: {
        language: 'en',
      },
    };

    const store = mockStore(state, {mixpanel: {track: () => 1}});
    const component = mockWithStore(<Root />, store);

    const tree = component.html();
    console.log('T', tree);
  });
});
