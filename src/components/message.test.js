import React from 'react';
import Message from './message';
import renderer from 'react-test-renderer';

it('Validate message structure', () => {
    const component = renderer.create(<Message type='done'>Hello</Message>);
    const instance = component.toJSON();

    expect(instance.props.className).toEqual('message message-done');
    expect(instance.type).toEqual('p');
});
