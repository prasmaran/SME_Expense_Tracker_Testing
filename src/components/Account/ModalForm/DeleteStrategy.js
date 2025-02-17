import React from 'react';
import { Button, Radio, Dropdown, Form, Progress } from 'semantic-ui-react';
import {
  defaultDeleteStrategy,
  getDeleteStartegyOptions,
  DeleteStrategyT
} from 'entities/Account';
import {
  PushToTalkButton,
  PushToTalkButtonContainer
} from '@speechly/react-ui';
import Speechly from './Speechly';

class DeleteStrategy extends React.Component {
  state = {
    strategy: defaultDeleteStrategy
  };
  

  onStrategyChange = (e, { value }) => {
    this.setState({ ...this.state, strategy: value });
  };

  onAccountChange = (e, { value }) => {
    this.setState({ ...this.state, moveTo: value });
  };

  onProceed = () => {
    this.props.removeAccount({
      id: this.props.form.id,
      strategy: 1,
      moveTo: this.getMoveTo()
    });
  };

  getMoveTo = () =>
    this.state.moveTo ||
    (this.props.accountOptions.length && this.props.accountOptions[0].key);

  render() {
    const hasMultipleAccounts = this.props.accountOptions.length > 0;
    return (
      <React.Fragment>
        {/* <Speechly
          parentCallback2={this.onProceed}
        /> */}
        <h3>You are about to delete transactions with account "{this.props.form.name}"</h3>
        <p style={{ marginTop: '1em' }}>
         Are you sure you want to proceed?
        </p>
        <Form>
          {/* {getDeleteStartegyOptions(hasMultipleAccounts).map(strategy => (
            <Form.Field key={strategy.key}>
              <Radio
                name="deleteStrategy"
                label={strategy.text}
                value={strategy.value}
                checked={this.state.strategy === strategy.value}
                onChange={this.onStrategyChange}
                disabled={this.props.modal.isDeleteRunning}
              />
            </Form.Field>
          ))}
          {hasMultipleAccounts && this.state.strategy === DeleteStrategyT.Move && (
            <Form.Field>
              <Dropdown
                selection
                value={this.getMoveTo()}
                options={this.props.accountOptions}
                onChange={this.onAccountChange}
                disabled={this.props.modal.isDeleteRunning}
              />
            </Form.Field>
          )} */}
          <Form.Field>
            {this.props.modal.isDeleteRunning ? (
              <Progress
                value={this.props.modal.itemsProcessed}
                total={this.props.modal.itemsToProcess}
              />
            ) : (
              <Button
                negative
                labelPosition="right"
                icon="arrow right"
                content="Proceed"
                onClick={this.onProceed}
              />
            )}
          </Form.Field>
        </Form>
        {/* <PushToTalkButtonContainer>
            <PushToTalkButton />
        </PushToTalkButtonContainer> */}
      </React.Fragment>
    );
  }
}

export default DeleteStrategy;
