import React, { Component } from 'react';
import { Grid, Checkbox } from 'semantic-ui-react';
import propTypes from 'prop-types';

import TimeInput from '../Elements/TimeInput'

class GrappleDefence extends Component {

  render() {
    const { row, setValue, storeValue, isFocus } = this.props;
    return (
      <div>
        <Grid celled className="strike-fields">
          <Grid.Row columns={16}>
              <Grid.Column mobile={7} tablet={6} computer={3}>
                <Checkbox fitted label='Reestablish Guard' checked={row.guard} name="guard" autoFocus={isFocus} onMouseDown = { (e, data) => setValue( e, data ) }/>
              </Grid.Column>
              <Grid.Column mobile={7} tablet={6} computer={3} textAlign="center">
                <Checkbox fitted label='Reestablish Stand Up' checked={row.stand_up} name="stand_up" onMouseDown = { (e, data) => setValue( e, data ) }/>
              </Grid.Column>
              <Grid.Column width={1}>
                <TimeInput row={row} name={'time'} setValue = {storeValue} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    )
  }
}
GrappleDefence.propTypes = {
  setValue: propTypes.func.isRequired,
  storeValue: propTypes.func.isRequired,
  isFocus: propTypes.bool,
  row: propTypes.object.isRequired,
}

export default GrappleDefence
