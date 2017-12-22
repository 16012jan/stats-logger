import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import propTypes from 'prop-types';

import Select from '../Elements/Select'
import TimeInput from '../Elements/TimeInput'
import { methodStrikeDefenceOptions, positionStrikeDefenceOptions } from '../../config'

class StrikeDefence extends Component {

  render() {
    const { row, setValue, storeValue,isFocus } = this.props;
    return (
      <div>
        <Grid celled className="strike-fields">
          <Grid.Row columns={16}>
              <Grid.Column mobile={5} tablet={3} computer={2}>
                <Select item={ methodStrikeDefenceOptions } focus={isFocus} value={row.method} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column mobile={5} tablet={3} computer={2}>
                <Select item={ positionStrikeDefenceOptions } value={row.position} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column width={1} className="one-short" textAlign="center">
                <TimeInput row={row} name={'time'} setValue = {storeValue} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    )
  }
}
StrikeDefence.propTypes = {
  setValue: propTypes.func.isRequired,
  storeValue: propTypes.func.isRequired,
  isFocus: propTypes.bool,
  row: propTypes.object.isRequired,
}

export default StrikeDefence
