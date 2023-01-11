import React from "react";
import DataTable from "../../loan/datatable";

class MEmployee extends React.Component {

  render() {

    return (
        <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h6 className="text-white text-capitalize ps-3">Employee table</h6>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-4">
              <DataTable url={'http://localhost:4000/getLoanForecast'}/>
            </div>
          </div>
        </div>
    );
  }
}

export default MEmployee;
