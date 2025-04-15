import { Page, View, Text, Image, Svg, Path } from "@react-pdf/renderer";
import { tw } from "@/lib/pdf-theme";
import StatBox from "../StatBox";
import { Highlight } from "../Highlight";
import { SuperScript } from "../SuperScript";

const qrCodeUrl = new URL("../../assets/qr-code.png", import.meta.url).href;
const esopImageUrl = new URL("../../assets/esop.png", import.meta.url).href;

const EmployeeOwnershipSection = () => (
  <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
    {/* Header */}
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

    {/* Intro */}
    <Text style={tw("text-[13.5px] font-semibold text-foreground mt-3")}>
      The United States is confronting a <Text style={tw("font-bold")}>"silver tsunami"</Text> of retiring business owners that are likely to sell their businesses over the next decade.
      <Text style={tw("font-medium")}> Meanwhile, too many American workers and families are financially unprepared for retirement.</Text>
    </Text>

    {/* Highlighted Stats */}
    <Highlight isFullWidth color="#C0D8EC" top={29} height={130} contentClassName="p-4">
      <View style={tw("flex flex-row justify-between")}>
        <StatBox number="52%" label="of businesses have an owner aged 55 or older19" rank="RANK 115 OUT OF 435" textContainerHeight={60} labelFontSize="text-[11px]" />
        <StatBox number="14%" label="of businesses operate in critical industries and have an owner aged 55 or older20" rank="RANKED BY NUMBER OF CRITICAL FIRMS 62 OUT OF 435" textContainerHeight={60} labelFontSize="text-[11px]" />
        <StatBox number="54%" label="of all Americans aged 15 to 64 have no retirement account21" rank="NATIONWIDE" textContainerHeight={60} labelFontSize="text-[11px]" />
        <StatBox number="-17%" label="reduction of retirement savings of working-class Americans 2022 vs. 201622" rank="NATIONWIDE" textContainerHeight={60} labelFontSize="text-[11px]" />
      </View>
    </Highlight>

    {/* Paragraphs */}
    <View style={tw("flex flex-row mt-5 gap-10")}>
      <View style={tw("flex-1")}>
        <Text style={tw("text-[11px] text-foreground")}>
          <Text style={tw("font-bold")}>
            Without a policy strategy to address business succession, we risk the loss of American businesses and their local jobs.
          </Text>{" "}
          Too often, the sale of a business to an out-of-state or foreign buyer results in the loss of local jobs and investment. With many businesses in critical industries—e.g., those with implications for national and economic security—facing the challenges of business succession, promoting employee ownership can be part of a broader competition framework to maintain our leadership in strategic sectors while investing in American workers.
        </Text>

        <Text style={tw("text-[11px] text-foreground mt-4")}>
          <Text style={tw("font-bold")}>What is an ESOP? </Text>
          The <Text style={tw("italic underline")}>Employee Stock Ownership Plan</Text> (ESOP) is both a retirement plan and corporate finance vehicle that allows retiring business owners to sell their business to employees. Employees do not pay for their shares—employee ownership is instead an incremental benefit on top of wages and benefits. ESOPs have been demonstrated to create over 2.5 times more retirement wealth for workers—in addition to superior pay and benefits—compared to traditional companies.
          <SuperScript>23</SuperScript> Employee-owned businesses have also been shown to innovate more frequently and exhibit greater resilience during an economic downturn.
          <SuperScript>24</SuperScript>
        </Text>
      </View>

      <View style={tw("flex-1")}>
        <Text style={tw("text-[11px] text-foreground mb-4")}>
          As baby boomers prepare to retire and sell their businesses, ESOPs can play an important role in maintaining domestic ownership and productive capacity across manufacturing and other strategic sectors—a win-win for U.S. economic security and for American workers across the country.
        </Text>

        <Text style={tw("text-[12px] font-bold text-foreground mb-2")}>
          Privately Held ESOP Companies in {"\n"} 2nd District
        </Text>
        <Image src={esopImageUrl} style={tw("w-full")} />
      </View>
    </View>

    {/* Bottom Stats & QR */}
    <View style={tw("relative mt-4")}>
      <View style={[tw("absolute h-full"), {
        top: 30, left: 0, width: "75%", height: "100px", backgroundColor: "#C0D8EC", opacity: 0.5,
      }]} />
      <View style={[tw("absolute h-full"), {
        top: 30, right: 0, width: "25%", height: "100px", backgroundColor: "#8BB5D0",
      }]} />

      <View style={tw("flex flex-row justify-between p-4 relative")}>
        <StatBox number="23" label="privately held ESOP companies25" rank="RANK 52 OUT OF 435" numberFontSize="text-heading-3" labelFontSize="text-caption" rankFontSize="text-caption" />
        <StatBox number="2,707" label="total employee owners in local ESOP companies26" rank="RANK 194 OUT OF 435" numberFontSize="text-heading-3" labelFontSize="text-caption" rankFontSize="text-caption" />
        <StatBox number="$67.4K" label="average ESOP balance per employee27" rank="RANK 321 OUT OF 435" numberFontSize="text-heading-3" labelFontSize="text-caption" rankFontSize="text-caption" />

        <View style={tw("flex-1 items-center justify-center")}>
          <Image src={qrCodeUrl} style={tw("w-24 h-24 mb-2")} />
          <Text style={tw("text-[10px] ml-8 font-bold text-foreground")}>
            Learn more about <Text style={tw("underline")}>employee ownership</Text>
          </Text>
        </View>
      </View>
    </View>
  </Page>
);

export default EmployeeOwnershipSection;
