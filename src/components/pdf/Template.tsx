import { Document, Page, View, Text, Image, Svg, Path } from "@react-pdf/renderer";
import { tw } from "../../lib/pdf-theme";
import StatBox from "./StatBox";
import { Highlight } from "./Highlight";
import { SuperScript } from "./SuperScript";

const rentBurdenChartUrl = new URL("../../assets/rent-burden-chart.png", import.meta.url).href;

const Template = () => (
  <Document>
    <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
      <View style={tw("flex flex-row justify-between items-start mb-4")}>
        <View style={tw("relative")}>
          <Svg width="380" height="50" viewBox="0 0 380 50">
            <Path d="M0 0 H270 L300 25 L270 50 H0 Z" fill="#13202A" />
          </Svg>
          <Text
            style={[
              tw("absolute text-[40px] font-black text-background"),
              { top: 2, left: 20, letterSpacing: -1 },
            ]}
          >
            535 Insights
          </Text>
        </View>
        
        {/* Logo */}
        <View style={tw("flex flex-row items-start gap-2 top-8")}>
          <Svg width="65" height="60" viewBox="0 0 700 568">
            <Path d="M-1.04847e-05 284L140.287 523.861L287.613 486.951L148.439 30.2003L-1.04847e-05 284Z" fill="#6F9B9A"/>
            <Path d="M543.144 76.6627L498.307 8.88674e-05L436.873 9.15527e-05L492.408 89.3109L543.144 76.6627Z" fill="#6F9B9A"/>
            <Path d="M402.026 0.000173205L175.522 0.000183105L222.228 156.666L459.12 97.6094L402.026 0.000173205Z" fill="#22D6CD"/>
            <Path d="M664.41 284L590.02 411.19L318.395 479.24L232.333 190.557L561.488 108.024L664.41 284Z" fill="#B9EAE4"/>
            <Path d="M166.102 568L498.306 568L568.619 447.779L156.591 551.738L166.102 568Z" fill="#0F202B"/>
          </Svg>
          <View style={tw("flex flex-col")}>
            <Text style={tw("text-[16px] font-medium text-foreground")}>Lafayette</Text>
            <Text style={tw("text-[16px] font-medium text-foreground")}>Square</Text>
            <Text style={tw("text-[16px] font-medium text-foreground")}>Institute</Text>
          </View>
        </View>
      </View>

      <View style={tw("mb-5")}>
        <Text style={tw("text-heading-3 font-black text-foreground")}>
          California 2nd District
        </Text>
        <View style={tw("h-1 bg-secondary-500 w-full mt-2")} />
      </View>

      <View style={tw("mb-3")}>
        <Text
          style={tw("text-[18px] font-bold text-foreground leading-normal")}
        >
          Our mission is to bridge the gap between policymakers and investors to
          create economic security for workers and families.
        </Text>
      </View>

      <View style={tw("mb-3")}>
        <Text style={tw("text-[13px] text-foreground leading-snug")}>
          <Text style={tw("bg-[#e1e8e8] font-bold")}>
            We equip policymakers with data-driven insights to mobilize{" "}
          </Text>
          <Text style={tw("bg-[#e1e8e8] font-black")}>
            private capital
          </Text>
          <Text style={tw("bg-[#e1e8e8] font-bold")}>
            {" "}to generate prosperity across the country.
          </Text>
          {" "}Our{" "}
          <Text style={tw("bg-[#e1e8e8] font-bold")}>
            535 Insights
          </Text>
          {" "}series provides analytics specific to the constituencies of all 535 Members of Congress.
        </Text>
      </View>

      {/* Stats section */}
      <Highlight
        isFullWidth
        color="#d7f1ef"
        top={25}
        height={125}
        className="mb-4"
        contentClassName="relative"
      >
        <View style={tw("flex flex-row gap-x-4 px-5 pt-3")}>
          <StatBox
            number="17%"
            label="chance to become high-income with low-income parents¹"
            rank="RANK 83 OUT OF 435"
          />
          <StatBox
            number="38%"
            label="of state residents have difficulty paying for usual expenses²"
            rank="RANK 35 OUT OF 50"
          />
          <StatBox
            number="55%"
            label="of renters are burdened by housing costs³"
            rank="RANK 363 OUT OF 435"
          />
          <StatBox
            number="52%"
            label="of businesses are at risk of succession⁴"
            rank="RANK 115 OUT OF 435"
          />
        </View>

        <View style={tw("px-6 pt-4")}>
          <Text style={tw("text-small-text font-semibold mb-1")}>
            The opportunity to build wealth and economic security is the
            foundation of the American Dream.
          </Text>

          <Text style={tw("text-small-text font-semibold mb-1")}>
            This is how{" "}
            <Text
              style={[
                tw("font-extrabold px-1"),
                {
                  backgroundColor: "#ffffff",
                  paddingTop: 1.5,
                  paddingBottom: 1.5,
                },
              ]}
            >
              the California 2nd District
            </Text>{" "}
            is performing{" "}
            <Text style={tw("font-normal")}>(ranked by desirability)</Text>.
          </Text>
        </View>
      </Highlight>

      <Text style={tw("text-heading-4 font-bold text-foreground my-3")}>
        To revive the American Dream, the 2nd District needs a strategy to
        promote economic opportunity.
      </Text>

      <Highlight width="48%" color="#e1e8e8" top={6} height="75%">
        <Text style={tw("text-[15px] font-bold text-foreground my-5")}>
          HERE'S WHERE WE'RE STARTING:
        </Text>
      </Highlight>

      <View style={tw("flex flex-row gap-5")}>
        <View style={tw("flex-1 bg-[#D3E8C8] py-6 px-8")}>
          <Text style={tw("text-heading-4 font-black text-foreground mb-4")}>
            Affordable Housing
          </Text>
          <Text style={tw("text-[12px] text-foreground leading-tight")}>
            By making it easier to finance{" "}
            <Text style={tw("font-bold")}>affordable housing</Text> and the
            expansion of <Text style={tw("font-bold")}>home ownership</Text> we
            can help build strong communities where families will thrive.
          </Text>
        </View>
        <View style={tw("flex-1 bg-[#C1D9EC] py-6 px-8")}>
          <Text style={tw("text-heading-4 font-bold text-foreground mb-4")}>
            Employee Ownership
          </Text>
          <Text style={tw("text-[12px] text-foreground leading-tight")}>
            By expanding <Text style={tw("font-bold")}>employee ownership</Text>{" "}
            through{" "}
            <Text style={tw("font-bold")}>
              Employee Stock Ownership Plans (ESOPs)
            </Text>
            , we can create generational wealth for American workers while
            enhancing U.S. competitiveness.
          </Text>
        </View>
      </View>

      <View style={tw("flex flex-row items-center gap-2 my-4")}>
        <Text
          style={tw("text-[11px] font-bold text-foreground mt-3 text-left")}
        >
          Turn the page to see how the 1st District is doing on affordable housing
          and employee ownership.
        </Text>
        <Svg width="10" height="20" viewBox="0 0 10 20" style={{ marginTop: 8, marginLeft: 20 }}>
          <Path d="M0 0 L0 20 L10 10 Z" fill="#252525"/>
        </Svg>
      </View>
    </Page>

    {/* Housing Page */}
    <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
      <View style={tw("flex flex-row justify-between items-start")}>
        <Highlight width="430">
          Affordable Housing & Homeownership
        </Highlight>
        <View style={tw("flex flex-row items-center gap-2")}>
          <Svg width="30" height="26" viewBox="0 0 700 568">
            <Path d="M-1.04847e-05 284L140.287 523.861L287.613 486.951L148.439 30.2003L-1.04847e-05 284Z" fill="#6F9B9A"/>
            <Path d="M543.144 76.6627L498.307 8.88674e-05L436.873 9.15527e-05L492.408 89.3109L543.144 76.6627Z" fill="#6F9B9A"/>
            <Path d="M402.026 0.000173205L175.522 0.000183105L222.228 156.666L459.12 97.6094L402.026 0.000173205Z" fill="#22D6CD"/>
            <Path d="M664.41 284L590.02 411.19L318.395 479.24L232.333 190.557L561.488 108.024L664.41 284Z" fill="#B9EAE4"/>
            <Path d="M166.102 568L498.306 568L568.619 447.779L156.591 551.738L166.102 568Z" fill="#0F202B"/>
          </Svg>
          <View style={tw("flex flex-col")}>
            <Text style={tw("text-[10px] font-medium text-foreground")}>Lafayette</Text>
            <Text style={tw("text-[10px] font-medium text-foreground")}>Square</Text>
            <Text style={tw("text-[10px] font-medium text-foreground")}>Institute</Text>
          </View>
        </View>
      </View>

      <Text style={tw("text-[14px] font-semibold text-foreground")}>
        <Text style={tw("bg-[#D3E8C8]")}>The California 2nd District </Text> is facing housing supply and affordability challenges. 
        <Text style={tw("font-medium")}>{" "}This is contributing to unsustainable financial burdens for families and creates barriers to economic opportunity. </Text>
      </Text>

      <Highlight
        isFullWidth
        color="#D3E8C8"
        top={29}
        height={100}
        contentClassName="p-4"
      >
        <View style={tw("flex flex-row justify-between")}>
          <StatBox
            number="38x"
            label="is what a typical family owning a home has in net worth compared to a family renting5"
            rank="NATIONWIDE"
            textContainerHeight={60}
            labelFontSize="text-[11px]"
          />
          <StatBox
            number="55%"
            label="of renters are burdened by housing costs6"
            rank="RANK 363 OUT OF 435"
            textContainerHeight={60}
            labelFontSize="text-[11px]"
          />
          <StatBox
            number="18%"
            label="of state residents are facing eviction or foreclosure7"
            rank="RANK 12 OUT OF 50"
            textContainerHeight={60}
            labelFontSize="text-[11px]"
          />
          <StatBox
            number="13%"
            label="of residents live in high poverty areas8"
            rank="RANK 170 OUT OF 435"
            textContainerHeight={60}
            labelFontSize="text-[11px]"
          />
        </View>
      </Highlight>

      <View style={tw("flex flex-row mt-5 gap-10")}>
        <View style={tw("flex-1")}>
          <Text style={tw("text-[10px] text-foreground")}>
            <Text style={tw("font-bold")}>
              The United States is 4 million homes short of meeting national demand, a shortfall that has almost doubled over the past decade
            </Text>
            <SuperScript>10</SuperScript>
            {". "}
            <Text style={tw("font-black")}>
              <Text style={tw("bg-[#D3E8C8]")}>California</Text>
            </Text>
            {" "}has a shortfall of 881,354 units.
            <SuperScript>11</SuperScript>
            {" "}This undersupply contributes to rising housing costs which force working-class families to spend an unsustainable portion of their income on rent and pushes many households into neighborhoods with high poverty rates.
            <SuperScript>12</SuperScript>
            {" "}Research demonstrates that living in areas of concentrated poverty makes it harder for kids to rise up the income ladder.
            <SuperScript>13</SuperScript>
            {" "}Housing cost-burdens are also rising for middle- and higher-income families, while rising housing costs have led to the American Dream of homeownership becoming increasingly unattainable—narrowing pathways for families to build wealth.
            <SuperScript>14</SuperScript>
          </Text>
        </View>
        <View style={tw("flex-1")}>
          <Text style={tw("text-[10px] text-foreground")}>
            Of the over $200 billion that has been invested annually in housing in recent years, only a fraction supports projects affordable for working-class families.
            <SuperScript>15</SuperScript>
            {" "}Innovative models capable of significantly boosting the supply of affordable housing exist but struggle to attract capital to scale. New policies, programs and financing tools are needed that redirect private capital into projects that promote financial stability and homeownership, and help build strong, resilient communities.
          </Text>
        </View>
      </View>

      <View style={tw("my-6")}>
        <View style={tw("w-full")}>
          <Image src={rentBurdenChartUrl} style={tw("w-full")} />
        </View>
      </View>
       
      <View style={tw("relative mt-4")}>
        <View style={[tw("absolute h-full"), { 
          top: 30,
          left: 0,
          width: "75%",
          height: "100px",
          backgroundColor: "#D3E8C8",
          opacity: 0.5,
        }]} />
        <View style={[tw("absolute h-full"), { 
          top: 30,
          right: 0,
          width: "25%",
          height: "100px",
          backgroundColor: "#b3d89c",
        }]} />
        <View style={tw("flex flex-row justify-between p-4 relative")}>
          <StatBox
            number="$1,796"
            label="median rent16"
            rank="RANK 380 OUT OF 435"
            numberFontSize="text-heading-3"
            labelFontSize="text-caption"
            rankFontSize="text-caption"
          />
          <StatBox
            number="$777.5K"
            label="median home value17"
            rank="RANK 411 OUT OF 435"
            numberFontSize="text-heading-3"
            labelFontSize="text-caption"
            rankFontSize="text-caption"
          />
          <StatBox
            number="63%"
            label="home ownership rate18"
            rank="RANK 287 OUT OF 435"
            numberFontSize="text-heading-3"
            labelFontSize="text-caption"
            rankFontSize="text-caption"
          />

          <View style={tw("flex-1 items-center justify-center")}>
            <Image
              src={new URL("../../assets/qr-code.png", import.meta.url).href}
              style={tw("w-24 h-24 mb-2")}
            />
            <Text style={tw("text-[11px] ml-8 font-bold text-foreground")}>
              Learn more about{" "}
              <Text style={[tw("underline")]}>affordable housing</Text>
            </Text>
          </View>
        </View>
      </View>
    </Page>

    {/* Employee Ownership Page */}
    <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
      <View style={tw("flex flex-row justify-between items-start")}>
        <Highlight width="250" color="#C0D8EC">
          Employee Ownership
        </Highlight>
        <View style={tw("flex flex-row items-center gap-2")}>
          <Svg width="30" height="26" viewBox="0 0 700 568">
            <Path d="M-1.04847e-05 284L140.287 523.861L287.613 486.951L148.439 30.2003L-1.04847e-05 284Z" fill="#6F9B9A"/>
            <Path d="M543.144 76.6627L498.307 8.88674e-05L436.873 9.15527e-05L492.408 89.3109L543.144 76.6627Z" fill="#6F9B9A"/>
            <Path d="M402.026 0.000173205L175.522 0.000183105L222.228 156.666L459.12 97.6094L402.026 0.000173205Z" fill="#22D6CD"/>
            <Path d="M664.41 284L590.02 411.19L318.395 479.24L232.333 190.557L561.488 108.024L664.41 284Z" fill="#B9EAE4"/>
            <Path d="M166.102 568L498.306 568L568.619 447.779L156.591 551.738L166.102 568Z" fill="#0F202B"/>
          </Svg>
          <View style={tw("flex flex-col")}>
            <Text style={tw("text-[10px] font-medium text-foreground")}>Lafayette</Text>
            <Text style={tw("text-[10px] font-medium text-foreground")}>Square</Text>
            <Text style={tw("text-[10px] font-medium text-foreground")}>Institute</Text>
          </View>
        </View>
      </View>

      <Text style={tw("text-[13.5px] font-semibold text-foreground")}>
        The United States is confronting a <Text style={tw("font-bold")}>"silver tsunami"</Text> of retiring business owners that are likely to sell their businesses over the next decade.
        <Text style={tw("font-medium")}>{" "}Meanwhile, too many American workers and families are financially unprepared for retirement.</Text>
      </Text>

      <Highlight
        isFullWidth
        color="#C0D8EC"
        top={29}
        height={130}
        contentClassName="p-4"
      >
        <View style={tw("flex flex-row justify-between")}>
          <StatBox
            number="52%"
            label="of businesses have an owner aged 55 or older19"
            rank="RANK 115 OUT OF 435"
            textContainerHeight={60}
            labelFontSize="text-[11px]"
          />
          <StatBox
            number="14%"
            label="of businesses operate in critical industries and have an owner aged 55 or older20"
            rank="RANKED BY NUMBER OF CRITICAL FIRMS 62 OUT OF 435"
            textContainerHeight={60}
            labelFontSize="text-[11px]"
          />
          <StatBox
            number="54%"
            label="of all Americans aged 15 to 64 have no retirement account21"
            rank="NATIONWIDE"
            textContainerHeight={60}
            labelFontSize="text-[11px]"
          />
          <StatBox
            number="-17%"
            label="reduction of retirement savings of working-class Americans 2022 vs. 201622"
            rank="NATIONWIDE"
            textContainerHeight={60}
            labelFontSize="text-[11px]"
          />
        </View>
      </Highlight>

      <View style={tw("flex flex-row mt-5 gap-10")}>
        <View style={tw("flex-1")}>
          <Text style={tw("text-[11px] text-foreground")}>
            <Text style={tw("font-bold")}>
              Without a policy strategy to address business succession, we risk the loss of American businesses and their local jobs.
            </Text>
            {" "}Too often, the sale of a business to an out-of-state or foreign buyer results in the loss of local jobs and investment. With many businesses in critical industries—e.g., those with implications for national and economic security—facing the challenges of business succession, promoting employee ownership can be part of a broader competition framework to maintain our leadership in strategic sectors while investing in American workers.
          </Text>

          <Text style={tw("text-[11px] text-foreground mt-4")}>
            <Text style={tw("font-bold")}>What is an ESOP? </Text>
            The <Text style={[tw("italic underline")]}>Employee Stock Ownership Plan</Text> (ESOP) is both a retirement plan and corporate finance vehicle that allows retiring business owners to sell their business to employees. Employees do not pay for their shares—employee ownership is instead an incremental benefit on top of wages and benefits. ESOPs have been demonstrated to create over 2.5 times more retirement wealth for workers—in addition to superior pay and benefits—compared to traditional companies.<SuperScript>23</SuperScript> Employee-owned businesses have also been shown to innovate more frequently and exhibit greater resilience during an economic downturn.<SuperScript>24</SuperScript>
          </Text>
        </View>
        <View style={tw("flex-1")}>
          <Text style={tw("text-[11px] text-foreground mb-4")}>
            As baby boomers prepare to retire and sell their businesses, ESOPs can play an important role in maintaining domestic ownership and productive capacity across manufacturing and other strategic sectors—a win-win for U.S. economic security and for American workers across the country.
          </Text>

          <Text style={tw("text-[12px] font-bold text-foreground mb-2")}>
            Privately Held ESOP Companies in {"\n"} 2nd District
          </Text>
          <Image 
            src={new URL("../../assets/esop.png", import.meta.url).href}
            style={tw("w-full")}
          />
        </View>
      </View>

      <View style={tw("relative mt-4")}>
        <View style={[tw("absolute h-full"), { 
          top: 30,
          left: 0,
          width: "75%",
          height: "100px",
          backgroundColor: "#C0D8EC",
          opacity: 0.5,
        }]} />
        <View style={[tw("absolute h-full"), { 
          top: 30,
          right: 0,
          width: "25%",
          height: "100px",
          backgroundColor: "#8BB5D0",
        }]} />
        <View style={tw("flex flex-row justify-between p-4 relative")}>
          <StatBox
            number="23"
            label="privately held ESOP companies25"
            rank="RANK 52 OUT OF 435"
            numberFontSize="text-heading-3"
            labelFontSize="text-caption"
            rankFontSize="text-caption"
          />
          <StatBox
            number="2,707"
            label="total employee owners in local ESOP companies26"
            rank="RANK 194 OUT OF 435"
            numberFontSize="text-heading-3"
            labelFontSize="text-caption"
            rankFontSize="text-caption"
          />
          <StatBox
            number="$67.4K"
            label="average ESOP balance per employee27"
            rank="RANK 321 OUT OF 435"
            numberFontSize="text-heading-3"
            labelFontSize="text-caption"
            rankFontSize="text-caption"
          />

          <View style={tw("flex-1 items-center justify-center")}>
            <Image
              src={new URL("../../assets/qr-code.png", import.meta.url).href}
              style={tw("w-24 h-24 mb-2")}
            />
            <Text style={tw("text-[10px] ml-8 font-bold text-foreground")}>
              Learn more about{" "}
              <Text style={[tw("underline")]}>employee ownership</Text>
            </Text>
          </View>
        </View>
      </View>
    </Page>

    {/* Contact Page */}
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
              src={new URL("../../assets/qr-code.png", import.meta.url).href}
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
  </Document>
);

export default Template;
