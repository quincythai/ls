import { Page, View, Text, Svg, Path, Image } from "@react-pdf/renderer";
import { tw } from "../../lib/pdf-theme";

const qrCodeUrl = new URL("../../assets/qr-code.png", import.meta.url).href;

const ReferencePage = () => (
  <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
    {/* Section background */}
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

      {/* Contact info and QR */}
      <View style={tw("flex flex-row justify-between p-4 relative")}>
        <View style={tw("flex-1")}>
          <Text style={tw("text-[30px] font-black text-foreground mb-5")}>
            Let's talk.
          </Text>
          <View style={tw("flex flex-row items-center gap-3")}>
            <Svg width="20" height="20" viewBox="0 0 24 24">
              <Path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#252525" />
            </Svg>
            <Text style={tw("text-[14px] text-semibold text-foreground")}>
              Connect with us at{" "}
              <Text style={tw("underline")}>535@lafayettesquareinstitute.org</Text>
            </Text>
          </View>
        </View>

        <View style={tw("items-start justify-center")}>
          <Image src={qrCodeUrl} style={tw("w-24 h-24 mb-2")} />
          <Text style={tw("text-[10px] text-right font-bold text-foreground")}>
            Want to learn more?
          </Text>
          <Text style={tw("text-[10px] text-right font-bold text-foreground underline")}>
            Visit our website!
          </Text>
        </View>
      </View>

      {/* Reference columns */}
      <View style={tw("flex flex-row gap-8 mt-8")}>
        {/* Left column */}
        <View style={tw("flex-1")}>
          <View style={tw("flex flex-col gap-1")}>
            <Text style={tw("text-[10px] text-foreground")}>
              1. Chetty, R. et al. <Text style={tw("italic underline")}>Opportunity Insights</Text>, Harvard University, 2018, <Text style={tw("italic underline")}>The Opportunity Atlas...</Text>
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              2. U.S. Census Bureau, 2024, <Text style={tw("italic underline")}>Household Pulse Survey...</Text>
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              3. Potomac X Lafayette Square; U.S. Census Bureau, 2022, ACS...
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              4. LSI based on Project Equity, 2023, <Text style={tw("italic underline")}>Silver Tsunami</Text>...
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              5. Federal Reserve Board, 2023, <Text style={tw("italic underline")}>2022 Survey of Consumer Finances...</Text>
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>6. See (3).</Text>
            <Text style={tw("text-[10px] text-foreground")}>
              7. U.S. Census Bureau, 2024, <Text style={tw("italic underline")}>Household Pulse Survey...</Text>
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              8. LSI with Potomac X Lafayette Square; U.S. Census Bureau, 2022...
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              9. LSI; HUD, 2024, <Text style={tw("italic underline")}>Comprehensive Housing Affordability...</Text>
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              10. Up for Growth, 2023, <Text style={tw("italic underline")}>Housing Underproduction...</Text>
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              11. Up for Growth, 2023, <Text style={tw("italic underline")}>2021 Housing Underproduction...</Text>
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              12. Benzow, A. and Fikri, K. EIG, 2020, <Text style={tw("italic underline")}>The Expanded Geography...</Text>
            </Text>
          </View>
        </View>

        {/* Right column */}
        <View style={tw("flex-1")}>
          <View style={tw("flex flex-col gap-1")}>
            <Text style={tw("text-[10px] text-foreground")}>
              13. Chetty, R. et al. <Text style={tw("italic underline")}>Social Capital and Economic Mobility</Text>.
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              14. Anderson, D. Redfin, 2024, <Text style={tw("italic underline")}>Nearly 40% of Renters...</Text>
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              15. CBRE, 2022, <Text style={tw("italic underline")}>U.S. Real Estate Market Outlook</Text>.
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>16. See (3).</Text>
            <Text style={tw("text-[10px] text-foreground")}>
              17. Ibid.
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              18. Potomac X Lafayette Square; U.S. Census Bureau, 2022...
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>19. See (4).</Text>
            <Text style={tw("text-[10px] text-foreground")}>
              20. LSI; U.S. Dept of Commerce, 2024...
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              21. U.S. Census Bureau, 2021, <Text style={tw("italic underline")}>SIPP</Text>.
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              22. Fed Reserve Board, 2023, <Text style={tw("italic underline")}>2022 SCF</Text>.
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>
              23. NCEO, 2018; Kruse, 2016; Rutgers, 2020...
            </Text>
            <Text style={tw("text-[10px] text-foreground")}>24. Ibid.</Text>
            <Text style={tw("text-[10px] text-foreground")}>
              25–27. NCEO, 2024, <Text style={tw("italic underline")}>ESOP Database</Text>.
            </Text>
          </View>
        </View>
      </View>

      {/* Footer logo */}
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
