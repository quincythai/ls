export type Metric = {
    LOCATION_TYPE: string;
    RANK: number;
    TOTAL_COUNT: number;
    VALUE: number;
  };
  
  export type LsiReport = {
    CD: string;
    CD_FIPS: string;
    STATE: string;
    STATE_FIPS: string;
    eviction_risk: Metric;
    financial_problems: Metric;
    home_ownership_rate: Metric;
    housing_underproduction: Metric;
    median_home_value: Metric;
    median_rent: Metric;
    poverty_concentration: Metric;
    renting_burdened: Metric;
    social_mobility: Metric;
  };
  