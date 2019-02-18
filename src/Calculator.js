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

  GetStartDate = () => {
    let startDate = "";
    // check for earliest term date to set as startDate
    if (this.state.term1Start !== "") { startDate = this.state.term1Start; return(startDate); }
    if (this.state.term2Start !== "") { startDate = this.state.term2Start; return(startDate); }
    if (this.state.term3Start !== "") { startDate = this.state.term3Start; return(startDate); }
    return(startDate);
  }

  GetEndDate = () => {
    let endDate = "";
    // check for last term date to set as endDate
    if (this.state.term3End !== "") { endDate = this.state.term3End; return(endDate); }
    if (this.state.term2End !== "") { endDate = this.state.term2End; return(endDate); }
    if (this.state.term1End !== "") { endDate = this.state.term1End; return(endDate); }
    return(endDate);
  }

  CheckIncome = (weekDay) => {
    // check instalments are on different days
    if ((this.state.instalment1Date && (this.state.instalment1Date === this.state.instalment2Date)) || (this.state.instalment1Date && (this.state.instalment1Date === this.state.instalment3Date)) || (this.state.instalment2Date && (this.state.instalment2Date === this.state.instalment3Date))) {
      alert("You cannot have multiple instalments on the same day!")
      return;
    }

    // define variables
    let incomeDate = new Date();
    let otherIncomeDate = new Date();
    let income = 0;

    // get Date variables of instalment dates and add instalment amount to income if date matches weekDay
    if (this.state.instalment1Date !== "") {
      incomeDate = this.state.instalment1Date;
      incomeDate = new Date(incomeDate)

      // check if incomeDate matches weekDay (which is a full date not a day)
      if (incomeDate === weekDay) {
        income += this.state.instalment1Amount;
      }
    }

    if (this.state.instalment2Date !== "") {
      incomeDate = this.state.instalment2Date;
      incomeDate = new Date(incomeDate)

      // check if incomeDate matches weekDay (which is a full date not a day)
      if (incomeDate === weekDay) {
        income += this.state.instalment2Amount;
      }
    }

    if (this.state.instalment3Date !== "") {
      incomeDate = this.state.instalment3Date;
      incomeDate = new Date(incomeDate)

      // check if incomeDate matches weekDay (which is a full date not a day)
      if (incomeDate === weekDay) {
        income += this.state.instalment3Amount;
      }
    }

    if (this.state.inheritanceDate !== "") {
      otherIncomeDate = this.state.inheritanceDate;
      otherIncomeDate = new Date(otherIncomeDate)

      // check if incomeDate matches weekDay (which is a full date not a day)
      if (otherIncomeDate === weekDay) {
        income += this.state.inheritanceAmount;
      }
    }

    return(income);

  }

  CheckOutgoing = (weekDay) => {
    // need to write this
  }

  Calculate = () => {

    // define week figure array to store weekly money calcs
    let weekIncome = [];
    let weekOutgoing = [];
    let weekResult = [];
    let weekResults = [];

    // get start and end dates
    let startDate = this.GetStartDate();
    let endDate = this.GetEndDate();

    // define weekDay, weekStart and weekEnd as Date variables and assign initial values
    let weekStart = new Date(startDate);
    let weekDay = weekStart;
    let weekEnd = new Date();
    weekEnd.setDate(weekStart.getDate() + 7);

    // adding week buffer to endDate to allow for full final week if term ends on different day to start
    endDate = new Date(endDate);
    endDate.setDate(endDate.getDate() + 7);

    console.log("Week Start: " + weekStart)
    console.log("Week Day: " + weekDay)
    console.log("Week End: " + weekEnd)
    console.log("End Date: " + endDate)

    // external loop from startDate to endDate
    while (weekEnd <= endDate) {

      console.log("in external week loop");

      // refresh week income and outcome arrays
      weekIncome = [];
      weekOutgoing = [];
      weekResult = [];

      // // internal week loop, check for income and outgoing
      // while (weekDay.getDate() !== weekEnd.getDate()) {
      //
      //   console.log("in internal week loop");
      //
      //   weekIncome.push(this.CheckIncome(weekDay));
      //   weekOutgoing.push(this.CheckOutgoing(weekDay));
      //
      //   // add monthlyIncome and deduct monthlyOutgoing
      //   if (weekDay.getDate() === "1" || "01") {
      //     weekIncome.push(this.state.monthlyIncome);
      //     weekOutgoing.push(this.state.monthlyOutgoing);
      //   }
      //
      //   // incriment weekDay
      //   weekDay.setDate(weekDay.getDate() + 1);
      //
      //   console.log("Week Day: " + weekDay)
      //   console.log("Week End: " + weekEnd)
      //   break;
      // }

      // add weeklyIncome and deduct weeklyOutgoing
      weekIncome.push(this.state.weeklyIncome);
      weekOutgoing.push(this.state.weeklyOutgoing);

      // store week final figure as data array
      weekResult = weekIncome.reduce((a, b) => a + b, 0) - weekOutgoing.reduce((a, b) => a + b, 0);
      weekResults.push(weekResult);

      // update weekStart and weekEnd variables for next week
      weekStart.setDate(weekStart.getDate() + 7);
      weekEnd.setDate(weekStart.getDate() + 7);
    }

    let result = weekResults.reduce((a, b) => a + b, 0);

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
