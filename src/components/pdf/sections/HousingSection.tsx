import { Page, View, Text, Image, Svg, Path } from "@react-pdf/renderer";
import { tw } from "@/lib/pdf-theme";
import StatBox from "../StatBox";
import { Highlight } from "../Highlight";
import { SuperScript } from "../SuperScript";

const rentBurdenChartUrl = new URL("../../assets/rent-burden-chart.png", import.meta.url).href;
const qrCodeUrl = new URL("../../assets/qr-code.png", import.meta.url).href;

const HousingSection = () => (
  <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
    {/* Header */}
    <View style={tw("flex flex-row justify-between items-start")}>
      <Highlight width="430">Affordable Housing & Homeownership</Highlight>

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

    {/* Intro */}
    <Text style={tw("text-[14px] font-semibold text-foreground mt-3")}>
      <Text style={tw("bg-[#D3E8C8]")}>The California 2nd District </Text> is facing housing supply and affordability challenges.{" "}
      <Text style={tw("font-medium")}>
        This is contributing to unsustainable financial burdens for families and creates barriers to economic opportunity.
      </Text>
    </Text>

    {/* Highlighted Stats */}
    <Highlight isFullWidth color="#D3E8C8" top={29} height={100} contentClassName="p-4">
      <View style={tw("flex flex-row justify-between")}>
        <StatBox number="38x" label="is what a typical family owning a home has in net worth compared to a family renting5" rank="NATIONWIDE" textContainerHeight={60} labelFontSize="text-[11px]" />
        <StatBox number="55%" label="of renters are burdened by housing costs6" rank="RANK 363 OUT OF 435" textContainerHeight={60} labelFontSize="text-[11px]" />
        <StatBox number="18%" label="of state residents are facing eviction or foreclosure7" rank="RANK 12 OUT OF 50" textContainerHeight={60} labelFontSize="text-[11px]" />
        <StatBox number="13%" label="of residents live in high poverty areas8" rank="RANK 170 OUT OF 435" textContainerHeight={60} labelFontSize="text-[11px]" />
      </View>
    </Highlight>

    {/* Paragraphs */}
    <View style={tw("flex flex-row mt-5 gap-10")}>
      <View style={tw("flex-1")}>
        <Text style={tw("text-[10px] text-foreground")}>
          <Text style={tw("font-bold")}>
            The United States is 4 million homes short of meeting national demand, a shortfall that has almost doubled over the past decade
          </Text>
          <SuperScript>10</SuperScript>
          {". "}
          <Text style={tw("font-black bg-[#D3E8C8]")}>California</Text> has a shortfall of 881,354 units.
          <SuperScript>GetFootnoteIndex("US CENCUS 2024")</SuperScript>
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

    {/* Chart */}
    <View style={tw("my-6 w-full")}>
      <Image src={rentBurdenChartUrl} style={tw("w-full")} />
    </View>

    {/* Bottom Stats & QR */}
    <View style={tw("relative mt-4")}>
      <View style={[tw("absolute h-full"), { top: 30, left: 0, width: "75%", height: "100px", backgroundColor: "#D3E8C8", opacity: 0.5 }]} />
      <View style={[tw("absolute h-full"), { top: 30, right: 0, width: "25%", height: "100px", backgroundColor: "#b3d89c" }]} />

      <View style={tw("flex flex-row justify-between p-4 relative")}>
        <StatBox number="$1,796" label="median rent16" rank="RANK 380 OUT OF 435" numberFontSize="text-heading-3" labelFontSize="text-caption" rankFontSize="text-caption" />
        <StatBox number="$777.5K" label="median home value17" rank="RANK 411 OUT OF 435" numberFontSize="text-heading-3" labelFontSize="text-caption" rankFontSize="text-caption" />
        <StatBox number="63%" label="home ownership rate18" rank="RANK 287 OUT OF 435" numberFontSize="text-heading-3" labelFontSize="text-caption" rankFontSize="text-caption" />

        <View style={tw("flex-1 items-center justify-center")}>
          <Image src={qrCodeUrl} style={tw("w-24 h-24 mb-2")} />
          <Text style={tw("text-[11px] ml-8 font-bold text-foreground")}>
            Learn more about <Text style={tw("underline")}>affordable housing</Text>
          </Text>
        </View>
      </View>
    </View>
  </Page>
);

export default HousingSection;
