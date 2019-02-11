import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // many input states
      term1Start: "",
      term2Start: "",
      term3Start: "",
      tenancyStart: "",
      term1End: "",
      term2End: "",
      term3End: "",
      tenancyEnd: "",
      instalment1Date: "",
      instalment1Amount: "",
      instalment2Date: "",
      instalment2Amount: "",
      instalment3Date: "",
      instalment3Amount: "",
      inheritanceDate: "",
      inheritanceAmount: "",
      weeklyIncome: "",
      monthlyIncome: "",
      weeklyOutgoing: "",
      monthlyOutgoing: "",
      christmasBudget: "",
      easterBudget: "",
      summerBudget: "",
      // one result
      result: ""
    }
  }

  Calculate = () => {
    let result = Object.values(this.state).reduce((a, b) => a + b);
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
          <h2>Term Dates</h2>
          <div className="row">
            <div className="column">
              <div><h4>Term 1</h4></div>
              <div>
                <p>Start:</p>&nbsp;
                <input
                  name="term1Start"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  value={this.state.term1Start}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>End:</p>&nbsp;
                <input
                  name="term1End"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  value={this.state.term1End}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="column">
              <div><h4>Term 2</h4></div>
              <div>
                <p>Start:</p>&nbsp;
                <input
                  name="term2Start"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  value={this.state.term2Start}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>End:</p>&nbsp;
                <input
                  name="term2End"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  value={this.state.term2End}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="column">
              <div><h4>Term 3</h4></div>
              <div>
                <p>Start:</p>&nbsp;
                <input
                  name="term3Start"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  value={this.state.term3Start}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>End:</p>&nbsp;
                <input
                  name="term3End"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  value={this.state.term3End}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Income">
          <h2>Income</h2>
          <p><strong>Loan instalments:</strong></p>

          <div className="row">
            <div className="column">
              <div><h4>Instalment 1</h4></div>
              <div>
                <p>Date:</p>&nbsp;
                <input
                  name="instalment1Date"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  value={this.state.instalment1Date}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>Amount:</p>&nbsp;
                <input
                  name="instalment1Amount"
                  type="number"
                  placeholder="enter value"
                  value={this.state.instalment1Amount}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="column">
              <div><h4>Instalment 2</h4></div>
              <div>
                <p>Date:</p>&nbsp;
                <input
                  name="instalment2Date"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  value={this.state.instalment2Date}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>Amount:</p>&nbsp;
                <input
                  name="instalment2Amount"
                  type="number"
                  placeholder="enter value"
                  value={this.state.instalment2Amount}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="column">
              <div><h4>Instalment 3</h4></div>
              <div>
                <p>Date:</p>&nbsp;
                <input
                  name="instalment3Date"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  value={this.state.instalment3Date}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>Amount:</p>&nbsp;
                <input
                  name="instalment3Amount"
                  type="number"
                  placeholder="enter value"
                  value={this.state.instalment3Amount}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="column">
              <div><h4>Other</h4></div>
              <div>
                <p>Date:</p>&nbsp;
                <input
                  name="insheritanceDate"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  value={this.state.inheritanceDate}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>Amount:</p>&nbsp;
                <input
                  name="inheritanceAmount"
                  type="number"
                  placeholder="enter value"
                  value={this.state.inheritanceAmount}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <p><strong>Regular income: (Got a job? Family allowance?)</strong></p>

          <div className="row">
            <div className="column">
              <div>
                <p>Weekly:</p>&nbsp;
                <input
                  name="weeklyIncome"
                  type="number"
                  placeholder="enter value"
                  value={this.state.weeklyIncome}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>Monthly:</p>&nbsp;
                <input
                  name="monthylIncome"
                  type="number"
                  placeholder="enter value"
                  value={this.state.monthlyIncome}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Outgoing">
          <h2>Outgoing</h2>
          <p><strong>Regular outgoing: (Estimate bills + travel costs to be a super budgeteer. Don't forget rent!)</strong></p>

          <div className="row">
            <div className="column">
              <div><p>Amount:</p></div>
              <div>
                <p>Weekly:</p>&nbsp;
                <input
                  name="weeklyOutgoing"
                  type="number"
                  placeholder="enter value"
                  value={this.state.weeklyOutgoing}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>Monthly:</p>&nbsp;
                <input
                  name="monthlyOutgoing"
                  type="number"
                  placeholder="enter value"
                  value={this.state.monthlyOutgoing}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <p><strong>Holiday budgets:</strong></p>

          <div className="row">
            <div className="column">
              <div><p>Amount:</p></div>
              <div>
                <p>Christmas:</p>&nbsp;
                <input
                  name="christmasBudget"
                  type="number"
                  placeholder="enter value"
                  value={this.state.christmasBudget}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>Easter:</p>&nbsp;
                <input
                  name="easterBudget"
                  type="number"
                  placeholder="enter value"
                  value={this.state.easterBudget}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>Summer:</p>&nbsp;
                <input
                  name="summerBudget"
                  type="number"
                  placeholder="enter value"
                  value={this.state.summerBudget}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Result">
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
