import React, { Component } from 'react';
import { Grid, Checkbox } from 'semantic-ui-react';
import propTypes from 'prop-types';

import Select from '../Elements/Select'
import TimeInput from '../Elements/TimeInput'
import { takedownAttemptOptions, submissionSecuredOptions, techniqueOptions } from '../../config'

class Grapple extends Component {

  render() {
    const { row, setValue, storeValue, isFocus }  = this.props;
    return (
      <div>
        <Grid celled className="strike-fields">
          <Grid.Row columns={16}>
              <Grid.Column mobile={5} tablet={2} computer={2}>
                <Select item={takedownAttemptOptions} value={row.takedown_attempt} focus={isFocus} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column mobile={5} tablet={2} computer={1} textAlign="center" className="two-short">
                <Checkbox fitted label='Success' checked={row.success} name="success" onMouseDown = { (e, data) => setValue( e, data ) } />
              </Grid.Column>
              <Grid.Column mobile={5} tablet={2} computer={1} textAlign="center" className="two-short">
                <Checkbox fitted label='Slam' checked={row.slam} name="slam" onMouseDown = { (e, data) => setValue( e, data ) } />
              </Grid.Column>
              <Grid.Column mobile={4} tablet={3} computer={2} textAlign="center" className="wide-text">
                <Checkbox fitted label='Pass/Advance' checked={row.pass} name="pass" onMouseDown = { (e, data) => setValue( e, data ) } />
              </Grid.Column>
              <Grid.Column mobile={4} tablet={3} computer={2} textAlign="center" className="wide-text">
                <Checkbox fitted label='Reversal/Sweep' checked={row.reversal_or_sweep} name="reversal_or_sweep" onMouseDown = { (e, data) => setValue( e, data ) } />
              </Grid.Column>
              <Grid.Column mobile={5} tablet={3} computer={2}>
                <Select item={submissionSecuredOptions} value={row.submission_secured} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column mobile={5} tablet={3} computer={2}>
                <Select item={techniqueOptions} value={row.technique} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column mobile={4} tablet={2} computer={1} textAlign="center">
                <Checkbox fitted label='Finish' checked={row.finish} name="finish" onMouseDown = { (e, data) => setValue( e, data ) } />
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
Grapple.propTypes = {
  setValue: propTypes.func.isRequired,
  storeValue: propTypes.func.isRequired,
  isFocus: propTypes.bool,
  row: propTypes.object.isRequired,
}

export default Grapple
