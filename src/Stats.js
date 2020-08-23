import React from "react";
import { useRecoilValue } from "recoil";
import { StatsState } from "./recoil/globalState";

const CurrentStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(
    StatsState
  );

  return (
    <>
      <div>
        <h3 className="h3 mb-0 font-weight-bold text-uppercase text-gray-800">
          <span class="badge badge-dark text-uppercase font-weight-bold">
            Stats :
          </span>
        </h3>
      </div>
      <div className="row p-1">
        <div className="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Total items:
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {totalNum}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tasks - completed */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Completed Tasks:
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {totalCompletedNum}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tasks - Incompleted */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Pending Tasks:
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {totalUncompletedNum}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentStats;
