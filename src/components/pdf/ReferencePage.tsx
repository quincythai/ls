import { Page, View, Text, Svg, Path, Image } from "@react-pdf/renderer";
import { tw } from "../../lib/pdf-theme";

const qrCodeUrl = new URL("../../assets/qr-code.png", import.meta.url).href;

const ReferencePage = () => (
    <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
      <View style={tw("relative flex-1")}>
        <View style={[tw("absolute"), {
          top: 30,
          left: 0,
          width: "75%",
          height: 100,
          backgroundColor: "#C7F0ED",
        }]} />
        <View style={[tw("absolute"), {
          top: 30,
          right: 0,
          width: "25%",
          height: 100,
          backgroundColor: "#63D5CD",
        }]} />
        <View style={tw("flex flex-row justify-between p-4 relative")}>
          <View style={tw("flex-1")}>
            <Text style={tw("text-[30px] font-black text-foreground mb-5")}>
              Let's talk.
            </Text>
            <View style={tw("flex flex-row items-center gap-3")}>
              <Svg width="20" height="20" viewBox="0 0 24 24">
                <Path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#252525"/>
              </Svg>
              <Text style={tw("text-[14px] text-semibold text-foreground")}>
                Connect with us at{" "}
                <Text style={[tw("underline")]}>535@lafayettesquareinstitute.org</Text>
              </Text>
            </View>
          </View>

          <View style={tw("items-start justify-center")}>
            <Image
              src={qrCodeUrl}
              style={tw("w-24 h-24 mb-2")}
            />
            <Text style={tw("text-[10px] text-right font-bold text-foreground")}>
              Want to learn more?
            </Text>
            <Text style={[tw("text-[10px] text-right font-bold text-foreground underline")]}>Visit our website!</Text>
          </View>
        </View>

        <View style={tw("flex flex-row gap-8 mt-8")}>
          <View style={tw("flex-1")}>
            <View style={tw("flex flex-col gap-1")}>
              <Text style={tw("text-[10px] text-foreground")}>
                1. Chetty, R. et al. <Text style={[tw("italic underline")]}>Opportunity Insights</Text>, Harvard University, 2018, <Text style={[tw("italic underline")]}>The Opportunity Atlas: Mapping the Childhood Roots of Social Mobility: All Outcomes by Census Tract, Race, Gender and Parental Income Percentile</Text>: Averaged chance of children born 1978-1983 in the 1st and 25th income percentile to reach the 80th or higher income percentile as adults 2014-2015.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                2. U.S. Census Bureau, 2024, <Text style={[tw("italic underline")]}>Household Pulse Survey, Phase 4.2, Cycle 09</Text>: Percentage of adults in households where it has been somewhat or very difficult to pay for usual household expenses in the last 7 days.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                3. Potomac X Lafayette Square; U.S. Census Bureau, 2022, American Community Survey (ACS), 5-Year Estimates: <Text style={[tw("italic underline")]}>Household Income by Gross Rent as a Percentage of Household Income in the Past 12 Months</Text>: 30% or more.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                4. LSI based on Project Equity, 2023, <Text style={[tw("italic underline")]}>Silver Tsunami</Text>; U.S. Census Bureau, 2021, Annual Business Survey: <Text style={[tw("italic underline")]}>Characteristics of Business Owners (Employer Businesses)</Text> and U.S. Census Bureau, 2021, <Text style={[tw("italic underline")]}>Statistics of U.S. Businesses Annual Data Tables by Establishment Industry: State by congressional district, NAICS sectors</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                5. Federal Reserve Board, 2023, <Text style={[tw("italic underline")]}>2022 Survey of Consumer Finances: Median Net Worth by Family Characteristics</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                6. See (3).
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                7. U.S. Census Bureau, 2024, <Text style={[tw("italic underline")]}>Household Pulse Survey, Phase 4.2, Cycle 09</Text>: Percentage of adults in households not current on rent or mortgage where eviction or foreclosure in the next two months is either very likely or somewhat likely.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                8. LSI with Potomac X Lafayette Square; U.S. Census Bureau, 2022, ACS, 5-Year Estimates: <Text style={[tw("italic underline")]}>Age and Sex and Poverty Status</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                9. LSI with Potomac X Lafayette Square; U.S. Department of Housing & Urban Development, 2024, <Text style={[tw("italic underline")]}>Comprehensive Housing Affordability Strategy 2021 5-Year Estimates</Text>. Income Groups: Low = {"<"}50% of area median income (AMI), Moderate = 50-80% AMI, Middle = 80-120% AMI, Upper = {">"}120% of AMI. National Averages for comparison: Burdened (76%, 45%, 16%, 3%), Severely Burdened (50%, 7%, 1%, 0%).
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                10. Up for Growth, 2023, <Text style={[tw("italic underline")]}>2023 Housing Underproduction in the United States</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                11. Up for Growth, 2023, <Text style={[tw("italic underline")]}>2021 Housing Underproduction by State</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                12. Benzow, A. and Fikri, K. Economic Innovation Group, 2020, <Text style={[tw("italic underline")]}>The Expanded Geography of High-Poverty Neighborhoods</Text>.
              </Text>
            </View>
          </View>
          <View style={tw("flex-1")}>
            <View style={tw("flex flex-col gap-1")}>
              <Text style={tw("text-[10px] text-foreground")}>
                13. Chetty, R. et al. <Text style={[tw("italic underline")]}>Opportunity Insights</Text>, Harvard University, 2022, <Text style={[tw("italic underline")]}>Social Capital and Economic Mobility</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                14. Anderson, D. Redfin, 2024, <Text style={[tw("italic underline")]}>Nearly 40% of Renters Think They'll Never Own a Home, Up From 27% Last Year</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                15. CBRE, 2022, <Text style={[tw("italic underline")]}>U.S. Real Estate Market Outlook 2022: Multifamily</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                16. Potomac X Lafayette Square; U.S. Census Bureau, 2022, ACS, 5-Year Estimates: <Text style={[tw("italic underline")]}>Selected Housing Characteristics</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                17. Ibid.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                18. Potomac X Lafayette Square; U.S. Census Bureau, 2022, ACS, 5-Year Estimates: <Text style={[tw("italic underline")]}>Household and Families</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                19. See (4).
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                20. See (4) for owner ages per industry. LSI; identifying critical industries using the U.S. Department of Commerce, 2024, <Text style={[tw("italic underline")]}>Critical Sectors and Key Goods for Potential Cooperation under the IPEF Supply Chain Agreement</Text> and the Department of Defense, 2024, <Text style={[tw("italic underline")]}>National Critical and Emerging Technologies</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                21. U.S. Census Bureau, 2021, <Text style={[tw("italic underline")]}>Survey of Income and Program Participation</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                22. Federal Reserve Board, 2023, <Text style={[tw("italic underline" )]}>2022 Survey of Consumer Finances</Text>: Mean retirement savings among those with an individual retirement account or a defined contribution plan, 0-49.9 percentile of usual income, 2016-22 surveys.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                23. National Center for Employee Ownership, 2018, <Text style={[tw("italic underline")]}>Research on Employee Ownership, Corporate Performance, and Employee Compensation</Text>; Kruse, D. IZA World of Labor, 2016, <Text style={[tw("italic underline")]}>Does Employee Ownership Improve Performance?</Text> And Employee Ownership Foundation, Rutgers School of Management and Labor Relations, 2020, <Text style={[tw("italic underline")]}>Employee-Owned Firms in the COVID-19 Pandemic: How Majority-Owned ESOP & Other Companies Have Responded to the COVID-19 Health and Economic Crises</Text>.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                24. Ibid.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                25. LSI; National Center of Employee Ownership, 2024, <Text style={[tw("italic underline")]}>ESOP Database 2022</Text>. Note: Some public companies feature low percentages of ESOP ownership. We present privately held company data only given our focus on business succession risk.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                26. Ibid. For privately held ESOP companies.
              </Text>
              <Text style={tw("text-[10px] text-foreground")}>
                27. Ibid. For privately held ESOP companies.
              </Text>
            </View>
          </View>
        </View>

        {/* Centered logo and text at bottom */}
        <View style={tw("absolute bottom-5 left-0 right-0 flex flex-row items-center justify-center gap-2 mb-4")}>
          <Svg width="65" height="60" viewBox="0 0 700 568">
            <Path d="M-1.04847e-05 284L140.287 523.861L287.613 486.951L148.439 30.2003L-1.04847e-05 284Z" fill="#6F9B9A"/>
            <Path d="M543.144 76.6627L498.307 8.88674e-05L436.873 9.15527e-05L492.408 89.3109L543.144 76.6627Z" fill="#6F9B9A"/>
            <Path d="M402.026 0.000173205L175.522 0.000183105L222.228 156.666L459.12 97.6094L402.026 0.000173205Z" fill="#22D6CD"/>
            <Path d="M664.41 284L590.02 411.19L318.395 479.24L232.333 190.557L561.488 108.024L664.41 284Z" fill="#B9EAE4"/>
            <Path d="M166.102 568L498.306 568L568.619 447.779L156.591 551.738L166.102 568Z" fill="#0F202B"/>
          </Svg>
          <View style={tw("flex flex-col")}>
            <Text style={tw("text-[14px] font-medium text-foreground")}>Lafayette</Text>
            <Text style={tw("text-[14px] font-medium text-foreground")}>Square</Text>
            <Text style={tw("text-[14px] font-medium text-foreground")}>Institute</Text>
          </View>
        </View>
      </View>
    </Page>
);

export default ReferencePage;
