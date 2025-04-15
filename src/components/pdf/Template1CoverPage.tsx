import { Page, View, Text, Svg, Path } from "@react-pdf/renderer";
import { tw } from "../../lib/pdf-theme";
import StatBox from "./StatBox";
import { Highlight } from "./Highlight";

const Template1CoverPage = () => (
  <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
    {/* Header */}
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

    {/* Title & Mission */}
    <View style={tw("mb-5")}>
      <Text style={tw("text-heading-3 font-black text-foreground")}>
        California 2nd District
      </Text>
      <View style={tw("h-1 bg-secondary-500 w-full mt-2")} />
    </View>

    <View style={tw("mb-3")}>
      <Text style={tw("text-[18px] font-bold text-foreground leading-normal")}>
        Our mission is to bridge the gap between policymakers and investors to
        create economic security for workers and families.
      </Text>
    </View>

    <View style={tw("mb-3")}>
      <Text style={tw("text-[13px] text-foreground leading-snug")}>
        <Text style={tw("bg-[#e1e8e8] font-bold")}>
          We equip policymakers with data-driven insights to mobilize{" "}
        </Text>
        <Text style={tw("bg-[#e1e8e8] font-black")}>private capital</Text>
        <Text style={tw("bg-[#e1e8e8] font-bold")}>
          {" "}to generate prosperity across the country.
        </Text>
        {" "}Our{" "}
        <Text style={tw("bg-[#e1e8e8] font-bold")}>535 Insights</Text>
        {" "}series provides analytics specific to the constituencies of all 535 Members of Congress.
      </Text>
    </View>

    {/* Stats */}
    <Highlight
      isFullWidth
      color="#d7f1ef"
      top={25}
      height={125}
      className="mb-4"
      contentClassName="relative"
    >
      <View style={tw("flex flex-row gap-x-4 px-5 pt-3")}>
        <StatBox number="17%" label="chance to become high-income with low-income parents¹" rank="RANK 83 OUT OF 435" />
        <StatBox number="38%" label="of state residents have difficulty paying for usual expenses²" rank="RANK 35 OUT OF 50" />
        <StatBox number="55%" label="of renters are burdened by housing costs³" rank="RANK 363 OUT OF 435" />
        <StatBox number="52%" label="of businesses are at risk of succession⁴" rank="RANK 115 OUT OF 435" />
      </View>
      <View style={tw("px-6 pt-4")}>
        <Text style={tw("text-small-text font-semibold mb-1")}>
          The opportunity to build wealth and economic security is the
          foundation of the American Dream.
        </Text>
        <Text style={tw("text-small-text font-semibold mb-1")}>
          This is how{" "}
          <Text style={tw("font-extrabold px-1 bg-white")}>
            the California 2nd District
          </Text>{" "}
          is performing{" "}
          <Text style={tw("font-normal")}>(ranked by desirability)</Text>.
        </Text>
      </View>
    </Highlight>

    {/* CTA */}
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
          expansion of <Text style={tw("font-bold")}>home ownership</Text>, we
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
          </Text>, we can create generational wealth for American workers while
          enhancing U.S. competitiveness.
        </Text>
      </View>
    </View>

    {/* Page turn arrow */}
    <View style={tw("flex flex-row items-center gap-2 my-4")}>
      <Text style={tw("text-[11px] font-bold text-foreground mt-3 text-left")}>
        Turn the page to see how the 1st District is doing on affordable housing
        and employee ownership.
      </Text>
      <Svg width="10" height="20" viewBox="0 0 10 20" style={{ marginTop: 8, marginLeft: 20 }}>
        <Path d="M0 0 L0 20 L10 10 Z" fill="#252525" />
      </Svg>
    </View>
  </Page>
);

export default Template1CoverPage;
