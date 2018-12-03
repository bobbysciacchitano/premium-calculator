import React, { Component } from 'react';

import Form from './components/form';
import Input from './components/input';
import Button from './components/button';

class Query extends Component {

  state = {
    form: {
      gender: 'M',
    }
  }

  updateForm(name, value) {

    const { form } = this.state;

    this.setState({
      form: Object.assign({}, form, { [name]: value }),
    });
  }

  render() {

    const { form } = this.state;
    const { onSubmit } = this.props;

    return (
      <Form onSubmit={() => onSubmit(form)}>

        <dl>

          <dt>Your Name</dt>
          <dd>
            <Input name='name'
              value={form.name}
              onChange={(n, v) => this.updateForm(n, v)}
            />
          </dd>

          <dt>Date of Birth</dt>
          <dd>
            <Input name='birthday'
              type='date'
              value={form.birthday}
              onChange={(n, v) => this.updateForm(n, v)}
            />
            </dd>

          <dt>Gender</dt>
          <dd>
            <Input name='gender'
              type='radio'
              value='M'
              checked={form.gender === 'M'}
              onChange={(n, v) => this.updateForm(n, v)}
            /> Male
          </dd>

          <dd>
            <Input name='gender'
              type='radio'
              value='F'
              checked={form.gender === 'F'}
              onChange={(n, v) => this.updateForm(n, v)}
            /> Female
          </dd>

        </dl>

        <p><Button>Calculate</Button></p>

      </Form>
    );

  }

}

export default Query;
