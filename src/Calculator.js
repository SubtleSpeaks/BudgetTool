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
    let startDate = ""
    // check for earliest term date to set as startDate
    if (this.state.term1Start !== "") { startDate = this.state.term1Start; return(startDate) }
    if (this.state.term2Start !== "") { startDate = this.state.term2Start; return(startDate) }
    if (this.state.term3Start !== "") { startDate = this.state.term3Start; return(startDate) }
    return(startDate)
  }

  GetEndDate = () => {
    let endDate = ""
    // check for last term date to set as endDate
    if (this.state.term3End !== "") { endDate = this.state.term3End; return(endDate) }
    if (this.state.term2End !== "") { endDate = this.state.term2End; return(endDate) }
    if (this.state.term1End !== "") { endDate = this.state.term1End; return(endDate) }
    return(endDate)
  }

  CheckIncome = (weekStart, weekEnd) => {

    var income = 0

    // convert date to YYYY-MM-DD
    let weekStartStr = weekStart.toISOString().slice(0,10);
    let weekEndStr = weekEnd.toISOString().slice(0,10);

    // add monthly income if first week of month
    if (this.state.monthlyIncome) {
      if (weekEnd.toISOString().slice(8,10) <="07") income += Number(this.state.monthlyIncome)
    }

    // check if instalment income occurs in week if income date & value are not null
    if (this.state.instalment1Date && this.state.instalment1Amount) {
      // check if occurs in week
      if (this.state.instalment1Date >= weekStartStr && this.state.instalment1Date < weekEndStr) {
        income += Number(this.state.instalment1Amount)
      }
    }

    if (this.state.instalment2Date && this.state.instalment2Amount) {
      if (this.state.instalment2Date >= weekStartStr && this.state.instalment2Date < weekEndStr) {
        income += Number(this.state.instalment2Amount)
      }
    }

    if (this.state.instalment3Date && this.state.instalment3Amount) {
      if (this.state.instalment3Date >= weekStartStr && this.state.instalment3Date < weekEndStr) {
        income += Number(this.state.instalment3Amount)
      }
    }

    if (this.state.inheritanceDate && this.state.inheritanceAmount) {
      if (this.state.inheritanceDate >= weekStartStr && this.state.inheritanceDate < weekEndStr) {
        income += Number(this.state.inheritanceAmount)
      }
    }

    console.log("income detected in week: " + income)
    return(income);

  }

  CheckOutgoing = (weekStart, weekEnd) => {

    var outgoing = 0

    // convert date to YYYY-MM-DD
    let weekStartStr = weekStart.toISOString().slice(0,10);
    let weekEndStr = weekEnd.toISOString().slice(0,10);

    // add monthly income if first week of month
    if (this.state.monthlyOutgoing) {
      if (weekEnd.toISOString().slice(8,10) <="07") outgoing += Number(this.state.monthlyOutgoing)
    }

    // check if holiday budgets are given and decuct budget if end of term occurs in week
    // CHRISTMAS
    if (this.state.term1End && this.state.christmasBudget) {
      if (this.state.term1End >= weekStartStr && this.state.term1End < weekEndStr) {
        outgoing += Number(this.state.christmasBudget)
      }
    }

    // EASTER
    if (this.state.term2End && this.state.easterBudget) {
      if (this.state.term2End >= weekStartStr && this.state.term2End < weekEndStr) {
        outgoing += Number(this.state.easterBudget)
      }
    }

    // SUMMER
    if (this.state.term3End && this.state.summerBudget) {
      if (this.state.term3End >= weekStartStr && this.state.term3End < weekEndStr) {
        outgoing += Number(this.state.summerBudget)
      }
    }

    console.log("outgoings detected in week: " + outgoing)
    return(outgoing)

  }

  Calculate = () => {

    // define week figure array to store weekly money calcs
    let weekIncome = []
    let weekOutgoing = []
    let weekResult = []
    let weekResults = []

    // get start and end dates
    let startDate = this.GetStartDate()
    let endDate = this.GetEndDate()

    // define weekDay, weekStart and weekEnd as Date variables and assign initial values
    let weekStart = new Date(startDate)
    let weekEnd = new Date()
    weekEnd.setDate(weekStart.getDate() + 7)

    // adding week buffer to endDate to allow for full final week if term ends on different day to start
    endDate = new Date(endDate)
    endDate.setDate(endDate.getDate() + 7)

    // external loop from startDate to endDate
    while (weekEnd < endDate) {

      // refresh week income and outcome arrays
      weekIncome = []
      weekOutgoing = []
      weekResult = []

      // use CheckIncome fcn to check if instalment on monthly income occured in week
      weekIncome.push(this.CheckIncome(weekStart, weekEnd))

      // use CheckIncome fcn to check in instalment on monthly income occured in week
      weekOutgoing.push(this.CheckOutgoing(weekStart, weekEnd))

      // add weeklyIncome and deduct weeklyOutgoing
      weekIncome.push(Number(this.state.weeklyIncome))
      weekOutgoing.push(Number(this.state.weeklyOutgoing))

      // store week final figure as data array
      weekResult = weekIncome.reduce((a, b) => a + b, 0) - weekOutgoing.reduce((a, b) => a + b, 0)
      weekResults.push(weekResult)

      // update weekStart and weekEnd variables for next week
      weekStart.setDate(weekStart.getDate() + 7)
      weekEnd.setDate(weekStart.getDate() + 7)

    }

    let result = weekResults.reduce((a, b) => a + b, 0)

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
                  name="monthlyIncome"
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

          <p><strong>Holiday budgets: (These are deducted at the end of each term)</strong></p>

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
