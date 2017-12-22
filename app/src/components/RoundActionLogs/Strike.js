import React, { Component } from 'react';
import { Grid, Checkbox } from 'semantic-ui-react';
import propTypes from 'prop-types';

import Select from '../Elements/Select'
import TimeInput from '../Elements/TimeInput'
import { stanceOptions, sourceOptions, methodStrikeOptions,
  targetOptions, positionStrikeOptions, strategyOptions,
  competencyOptions, illegalOptions } from '../../config'

class Strike extends Component {

  render() {
    const { row, setValue, storeValue, isFocus } = this.props;
    const num = row.num || "";
     return (
      <div>
        <Grid celled className="strike-fields">
          <Grid.Row columns={16}>
              <Grid.Column width={1} className="one-short">
                <input type="number" className="fluid number-input" autoFocus={isFocus} value={num} name="num" onChange={setValue} />
              </Grid.Column>
              <Grid.Column mobile={6} tablet={3} computer={2} className="two-short">
                <Select item={stanceOptions} value={row.stance} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column mobile={6} tablet={3} computer={2} className="two-short">
                <Select item={sourceOptions} value={row.source} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column width={2} className="two-short">
                <Select item={methodStrikeOptions} value={row.method} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column width={2} className="two-short">
                <Select item={targetOptions} value={row.target} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column width={2} className="two-short">
                <Select item={positionStrikeOptions} value={row.position} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column width={2} className="two-short">
                <Select item={strategyOptions} value={row.strategy} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column width={1} textAlign="center" className="defaultWidth">
                <Checkbox fitted label='Attempt' checked={row.attempt} name="attempt" onMouseDown = { (e, data) => setValue( e, data ) } />
              </Grid.Column>
              <Grid.Column width={2} className="two-short">
                <Select item={competencyOptions} value={row.competency} setValue = {setValue} />
              </Grid.Column>
              <Grid.Column width={1} textAlign="center" className="defaultWidth">
                <Checkbox fitted label='Optimal' checked={row.optimal} name="optimal" onMouseDown = { (e, data) => setValue( e, data ) } />
              </Grid.Column>
              <Grid.Column width={1} textAlign="center" className="defaultWidth">
                <Checkbox fitted label='Critical' checked={row.critical} name="critical" onMouseDown = { (e, data) => setValue( e, data ) } />
              </Grid.Column>
              <Grid.Column width={1} className="knock-width" textAlign="center">
                <Checkbox fitted label='Knock Down' checked={row.knock_down} name="knock_down" onMouseDown = { (e, data) => setValue( e, data ) } />
              </Grid.Column>
              <Grid.Column width={2} className="two-short">
                <Select item={illegalOptions} value={row.illegal} name="illegal" setValue = {setValue} />
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
Strike.propTypes = {
  setValue: propTypes.func.isRequired,
  storeValue: propTypes.func.isRequired,
  isFocus: propTypes.bool,
  row: propTypes.object.isRequired,
}

export default Strike
