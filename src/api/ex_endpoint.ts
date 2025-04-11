// src/api/ex_endpoint.ts

export async function fetchMockLsiReport(cd_fips: string) {
    // Simulate an async API call
    return Promise.resolve({
      CD: "Congressional District 1",
      CD_FIPS: "0101",
      STATE: "Alabama",
      STATE_FIPS: "01",
      eviction_risk: {
        LOCATION_TYPE: "State",
        RANK: 25,
        TOTAL_COUNT: 51,
        VALUE: 28.2,
      },
      financial_problems: {
        LOCATION_TYPE: "State",
        RANK: 47,
        TOTAL_COUNT: 51,
        VALUE: 44.1,
      },
      home_ownership_rate: {
        LOCATION_TYPE: "CongressionalDistrict",
        RANK: 177,
        TOTAL_COUNT: 440,
        VALUE: 69.0,
      },
      housing_underproduction: {
        LOCATION_TYPE: "State",
        RANK: 31,
        TOTAL_COUNT: 50,
        VALUE: 16744.0,
      },
      median_home_value: {
        LOCATION_TYPE: "CongressionalDistrict",
        RANK: 103,
        TOTAL_COUNT: 440,
        VALUE: 191700.0,
      },
      median_rent: {
        LOCATION_TYPE: "CongressionalDistrict",
        RANK: 112,
        TOTAL_COUNT: 440,
        VALUE: 991.0,
      },
      poverty_concentration: {
        LOCATION_TYPE: "CongressionalDistrict",
        RANK: 107,
        TOTAL_COUNT: 437,
        VALUE: 25.08,
      },
      renting_burdened: {
        LOCATION_TYPE: "CongressionalDistrict",
        RANK: 292,
        TOTAL_COUNT: 440,
        VALUE: 52.19,
      },
      social_mobility: {
        LOCATION_TYPE: "CongressionalDistrict",
        RANK: 306,
        TOTAL_COUNT: 437,
        VALUE: 9.44,
      },
    });
  }
  