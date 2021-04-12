// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Svg, {
    Path,
} from 'react-native-svg';

export default class AppIcon extends PureComponent {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,

        // color: PropTypes.string.isRequired,
    };

    render() {
        return (
            <Svg
                xmlns='http://www.w3.org/2000/svg'
                width={this.props.height}
                height={this.props.width}
                viewBox='0 0 500 500'
                aria-label='WAU Logo'
            >
                <Path
                    d='M217.5 5.5c-46 6.5-87.7 24.6-124 53.8-10.3 8.4-30.4 29-38.2 39.2-25.2 33.4-41.2 69.6-48.4 110-2.1 11.6-2.4 16-2.4 41.5s.3 29.9 2.4 41.5c7.2 40.4 23.2 76.6 48.4 110 7.7 10.2 27.8 30.8 38.2 39.2 33 26.7 72.8 44.8 115 52.4 11.6 2.1 16 2.4 41.5 2.4s29.9-.3 41.5-2.4c42.2-7.6 82-25.7 115-52.4 10.4-8.4 30.5-29 38.2-39.2 25.2-33.4 41.2-69.6 48.4-110 2.1-11.6 2.4-16 2.4-41.5s-.3-29.9-2.4-41.5c-7.6-42.2-25.7-82-52.4-115-8.4-10.4-29-30.5-39.2-38.2C368.3 30.2 331.8 14.1 292 7c-16.1-2.9-58.5-3.7-74.5-1.5zM111.6 159.8c1.7 3.1 21 39.1 42.9 80l39.8 74.2 9.3-17.2c5.1-9.5 10.1-18.8 11.1-20.7l2-3.4 12 21.2 12.1 21.1-13 23.3c-14.9 26.6-19.2 32.7-25.6 36.9-4 2.5-5.4 2.9-9.9 2.5-6.2-.4-10.5-3.4-16.3-11-2.1-2.9-26.9-47.3-55-98.7-28.2-51.4-53.6-97.8-56.6-103.1-3-5.4-5.4-10-5.4-10.3 0-.3 11.1-.6 24.8-.6h24.7l3.1 5.8zm110.4.4c4.4 8.4 82.2 153.2 82.4 153.5.1.2 19.8-35.7 43.6-79.7l43.5-80h24.7c13.7 0 24.8.2 24.8.5s-4.4 8.3-9.8 17.7c-5.4 9.5-31.6 56.1-58.3 103.6-26.6 47.5-50 88.4-51.9 90.9-5.7 7.5-10.2 10.6-16.2 11-4.6.4-5.9 0-10-2.5-2.5-1.7-6.4-5.4-8.6-8.4-2.2-2.9-16-27.4-30.7-54.3-54.3-99.3-83.7-153.1-85.1-155.2-.8-1.2-1.4-2.5-1.4-2.8 0-.3 11.2-.5 24.9-.5h24.8l3.3 6.2z'
                    fill='#165d74'
                />
            </Svg>
        );
    }
}
