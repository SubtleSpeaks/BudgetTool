import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // many input states
      term1StartInput: "",
      term2StartInput: "",
      term3StartInput: "",
      tenancyStartInput: "",
      term1EndInput: "",
      term2EndInput: "",
      term3EndInput: "",
      tenancyEndInput: "",
      result: ""
    }
  }

  Calculate = () => {
    let result = this.state.term1StartInput + this.state.term1EndInput;
    return(result)
  }

  GetResult = () => {
    this.setState({  result: this.Calculate() })
  }

  handleChange = async({ target }) => {
    await this.setState({
      [target.name]: target.value
    });
    this.GetResult();
  }

  render() {
    return(
      <div className="Calculator">

        <div className="TermAndTenancyDates">
          <h2>Term & Tenancy Dates</h2>
          <table style={{style: "width:100%"}}>
            <tr>
              <td>
              </td>
              <td>
                <p>Term 1</p>
              </td>
              <td>
                <p>Term 2</p>
              </td>
              <td>
                <p>Term 3</p>
              </td>
              <td>
                <p>Tenancy</p>
                <p>(leave blank if NA)</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Start:</p>
              </td>
              <td>
                <input
                  name="term1StartInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.term1StartInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="term2StartInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.term2StartInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="term3StartInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.term3StartInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="tenancyStartInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.tenancyStartInput}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>End:</p>
              </td>
              <td>
                <input
                  name="term1EndInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.term1EndInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="term2EndInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.term2EndInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="term3EndInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.term3EndInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="tenancyEndInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.tenancyEndInput}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </table>
        </div>

        <div className="Income">
          <h2>Income</h2>
          <h3>Singular income:</h3>
          <table style={{style: "width:100%"}}>
            <tr>
              <td>
              </td>
              <td>
                <p>Instalment 1</p>
              </td>
              <td>
                <p>Instalment 2</p>
              </td>
              <td>
                <p>Instalment 3</p>
              </td>
              <td>
                <p>Other</p>
                <p>(inheritance etc)</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Date:</p>
              </td>
              <td>
                <input
                  name="instalment1DateInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.instalment1DateInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="instalment2DateInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.instalment2DateInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="instalment3DateInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.instalment3DateInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="inheritanceDateInput"
                  type="date"
                  placeholder="enter value"
                  value={this.state.inheritanceDateInput}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>Amount:</p>
              </td>
              <td>
                <input
                  name="instalment1AmountInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.instalment1AmountInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="instalment2AmountInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.instalment2AmountInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="instalment3AmountInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.instalment3AmountInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="inheritanceAmountInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.inheritanceAmountInput}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </table>
          <h3>Regular income:</h3>
          <table style={{style: "width:100%"}}>
            <tr>
              <td>
              </td>
              <td>
                <p>Weekly</p>
              </td>
              <td>
                <p>Monthly</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Amount:</p>
              </td>
              <td>
                <input
                  name="weeklyIncomeInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.weeklyIncomeInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="monthlyIncomeInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.monthlyIncomeInput}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </table>
        </div>

        <div className="Outgoing">
          <h2>Outgoing</h2>
          <h3>Regular outgoing:</h3>
          <table style={{style: "width:100%"}}>
            <tr>
              <td>
              </td>
              <td>
                <p>Weekly</p>
              </td>
              <td>
                <p>Monthly</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Amount:</p>
              </td>
              <td>
                <input
                  name="weeklyOutgoingInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.weeklyOutgoingInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="monthlyOutgoingInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.monthlyOutgoingInput}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </table>
          <h3>Holiday budgets:</h3>
          <table style={{style: "width:100%"}}>
            <tr>
              <td>
              </td>
              <td>
                <p>Christmas</p>
              </td>
              <td>
                <p>Easter</p>
              </td>
              <td>
                <p>Summer</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Amount</p>
              </td>
              <td>
                <input
                  name="christmasBudgetInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.weeklyOutgoingInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="easterBudgetInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.monthlyOutgoingInput}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  name="summerBudgetInput"
                  type="number"
                  placeholder="enter value"
                  value={this.state.monthlyOutgoingInput}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </table>
        </div>

        <div className="result">
          <h3>
            Your weekly spending budget:
          </h3>
          {this.state.result}
        </div>

      </div>
    )
  }

}

export default Calculator
