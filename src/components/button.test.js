import React from 'react';
import Button from './button';
import renderer from 'react-test-renderer';

it('Validate button default structure', () => {
    const component = renderer.create(<Button label='Hello' />);
    const instance = component.toJSON();

    expect(instance.type).toEqual('button');
    expect(instance.props.type).toEqual('submit');
});
