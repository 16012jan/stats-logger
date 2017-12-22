import React, { Component } from 'react';
import {  Form, Input, Grid } from 'semantic-ui-react'

class TimingsInputGroup extends Component {
  render() {
    const activeIndex = this.props.activeIndex
    return (
      <div>
        <Form className="form-round_timings">
          <h6 className="group-header">Time in Position</h6>
          <Grid>
            <Grid.Row columns={16}>
                <Grid.Column width={1} verticalAlign="middle">
                  <label className="small">Distance</label>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid/>
                </Grid.Column>
                <Grid.Column width={1} verticalAlign="middle" textAlign="center">
                  <span className="small">of</span>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid placeholder="Round Time"/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={16}>
                <Grid.Column width={1} verticalAlign="middle">
                  <label className="small">Clinch</label>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid/>
                </Grid.Column>
                <Grid.Column width={1} verticalAlign="middle" textAlign="center">
                  <span className="small">of</span>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid placeholder="Round Time"/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={16}>
                <Grid.Column width={1} verticalAlign="middle">
                  <label className="small">Ground</label>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid/>
                </Grid.Column>
                <Grid.Column width={1} verticalAlign="middle" textAlign="center">
                  <span className="small">of</span>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid placeholder="Round Time"/>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
        <Form className="form-round_timings">
          <h6 className="group-header">Positional Control</h6>
          <Grid>
            <Grid.Row columns={16}>
                <Grid.Column width={1} verticalAlign="middle">
                  <label className="small">Clinch Control</label>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid/>
                </Grid.Column>
                <Grid.Column width={1} verticalAlign="middle" textAlign="center">
                  <span className="small">of</span>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid placeholder="Clinch Time"/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={16}>
                <Grid.Column width={1} verticalAlign="middle">
                  <label className="small">Ground Control</label>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid/>
                </Grid.Column>
                <Grid.Column width={1} verticalAlign="middle" textAlign="center">
                  <span className="small">of</span>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid placeholder="Ground Time"/>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
        <Form className="form-round_timings">
          <h6 className="group-header">Time in Stance</h6>
          <Grid>
            <Grid.Row columns={16}>
                <Grid.Column width={1} verticalAlign="middle">
                  <label className="small">Orthodox</label>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid/>
                </Grid.Column>
                <Grid.Column width={1} verticalAlign="middle" textAlign="center">
                  <span className="small">of</span>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid placeholder="Distance Time"/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={16}>
                <Grid.Column width={1} verticalAlign="middle">
                  <label className="small">Southpaw</label>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid/>
                </Grid.Column>
                <Grid.Column width={1} verticalAlign="middle" textAlign="center">
                  <span className="small">of</span>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid placeholder="Distance Time"/>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    )
  }
}

export default TimingsInputGroup
