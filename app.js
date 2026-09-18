// ============================================================
// CARB EO Compliance Tool — Application Logic & Data
// 2007–2018 Chevrolet Silverado / GMC Sierra
// ============================================================

// ── 1. CARB EO PARTS DATABASE ────────────────────────────────
const PARTS_DATABASE = [
  // ── COLD AIR INTAKES ──
  { id: 'afe-550-13', brand: 'aFe Power', product: 'Momentum GT', eo: 'D-550-13', category: 'Cold Air Intake', years: '2009–2013', engines: '5.3L / 6.2L', status: 'legal', notes: 'Bolt-on, no tune needed', price: '$420–$525', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=afe+momentum+gt+silverado'},{name:'JEGS',url:'https://www.jegs.com/c/Air-Intake/10112/10002/-1'},{name:'aFe Direct',url:'https://afepower.com/cold-air-intakes'}] },
  { id: 'afe-550-33', brand: 'aFe Power', product: 'Momentum GT / Magnum Force Stage-2', eo: 'D-550-33', category: 'Cold Air Intake', years: '2014–2018', engines: '5.3L / 6.2L', status: 'legal', notes: 'Does not fit eAssist. P/Ns: 51-12xxx, 54-12xxx', price: '$420–$525', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=afe+54-74104'},{name:'JEGS',url:'https://www.jegs.com/p/AFE-Power/aFe-Power-Momentum-GT-Pro-5R-Cold-Air-Intake-Systems/3767543/10002/-1'},{name:'AutoZone',url:'https://www.autozone.com/search?searchText=afe+momentum+gt+silverado'}] },
  { id: 'afe-550-33-hd', brand: 'aFe Power', product: 'Momentum GT (HD)', eo: 'D-550-33', category: 'Cold Air Intake', years: '2016–2018', engines: '6.0L V8', status: 'legal', notes: 'HD models', price: '$420–$525', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=afe+momentum+gt+silverado+hd'},{name:'aFe Direct',url:'https://afepower.com/cold-air-intakes'}] },
  { id: 'kn-269', brand: 'K&N Engineering', product: '77-Series / 63-Series Intakes', eo: 'D-269-xx', category: 'Cold Air Intake', years: 'Varies', engines: '4.8L / 5.3L / 6.0L / 6.2L', status: 'legal', notes: 'Use K&N vehicle search for exact EO suffix', price: '$350–$475', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=kn+77-3082+silverado'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/silverado-air-intakes.html'},{name:'K&N Direct',url:'https://www.knfilters.com/cold-air-intakes/chevrolet/silverado-1500'},{name:'Amazon',url:'https://www.amazon.com/s?k=K%26N+77+series+silverado'}] },
  { id: 'spectre-629', brand: 'Spectre Performance', product: 'Cold Air Intake', eo: 'D-629-4', category: 'Cold Air Intake', years: 'Varies', engines: 'Various', status: 'legal', notes: 'Check specific part listing', price: '$200–$350', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=spectre+cold+air+intake+silverado'},{name:'AutoZone',url:'https://www.autozone.com/search?searchText=spectre+cold+air+intake+silverado'}] },
  { id: 'volant-526-8', brand: 'Volant Performance', product: 'PowerCore (1999–2008)', eo: 'D-526-8', category: 'Cold Air Intake', years: '1999–2008', engines: '4.8L / 5.3L / 6.0L', status: 'legal', notes: '', price: '$300–$400', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=volant+powercore+silverado'},{name:'Volant Direct',url:'https://www.volant.com/intakes'}] },
  { id: 'volant-526-7-diesel', brand: 'Volant Performance', product: 'PowerCore (Duramax)', eo: 'D-526-7', category: 'Cold Air Intake', years: '2011–2013', engines: '6.6L Duramax', status: 'legal', notes: '', price: '$300–$400', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=volant+powercore+duramax'},{name:'Volant Direct',url:'https://www.volant.com/intakes'}] },
  { id: 'volant-526-7', brand: 'Volant Performance', product: 'PowerCore (2014–2015)', eo: 'D-526-7', category: 'Cold Air Intake', years: '2014–2015', engines: '5.3L V8', status: 'legal', notes: 'Check filter type — some dry filters excluded', price: '$300–$400', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=volant+powercore+silverado+2014'},{name:'Volant Direct',url:'https://www.volant.com/intakes'}] },
  { id: 'sb-various', brand: 'S&B Filters', product: 'Various Cold Air Intake Kits', eo: 'Varies by P/N', category: 'Cold Air Intake', years: 'Varies', engines: '5.3L / 6.2L', status: 'legal', notes: 'Many 50-state legal. Contact S&B for EO sticker', price: '$300–$450', buyLinks: [{name:'S&B Direct',url:'https://www.sbfilters.com/cold-air-intakes'},{name:'Amazon',url:'https://www.amazon.com/s?k=S%26B+cold+air+intake+silverado'}] },
  { id: 'airaid-609', brand: 'Airaid', product: 'MXP / Classic Intake', eo: 'D-609-12 (D-609-xx)', category: 'Cold Air Intake', years: 'Varies', engines: 'Various', status: 'legal', notes: '⚠️ Many Airaid kits are NOT CARB legal — verify each one', price: '$300–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=airaid+intake+silverado'},{name:'Airaid Direct',url:'https://www.airaid.com/products/cold-air-intakes'},{name:'Amazon',url:'https://www.amazon.com/s?k=airaid+cold+air+intake+silverado'}] },
  { id: 'aem-670-21', brand: 'AEM', product: 'Brute Force / Cold Air Intake', eo: 'D-670-21', category: 'Cold Air Intake', years: '2009–2013', engines: '4.8L / 5.3L / 6.2L', status: 'legal', notes: '', price: '$280–$380', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=aem+brute+force+silverado'},{name:'JEGS',url:'https://www.jegs.com/c/Air-Intake/10112/10002/-1'}] },
  { id: 'aem-670-2', brand: 'AEM', product: 'Cold Air Intake (GMT800)', eo: 'D-670-2', category: 'Cold Air Intake', years: '1999–2006', engines: '4.8L / 5.3L / 6.0L', status: 'legal', notes: 'Earlier GMT800 platform', price: '$250–$350', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=aem+intake+silverado+1500'}] },
  { id: 'banks-161', brand: 'Banks Power', product: 'Ram-Air Intake System', eo: 'D-161-146 (D-161-xx)', category: 'Cold Air Intake', years: 'Varies', engines: 'Various V8', status: 'legal', notes: 'Many kits 50-state legal. Call (888) 839-2700', price: '$350–$500', buyLinks: [{name:'Banks Direct',url:'https://www.bankspower.com/products/air-intake'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=banks+ram+air+silverado'}] },
  { id: 'corsa-803-1', brand: 'Corsa Performance', product: 'APEX DryFlow Intake', eo: 'D-803-1', category: 'Cold Air Intake', years: '2014–2018', engines: '5.3L / 6.2L', status: 'legal', notes: '', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=corsa+apex+intake+silverado'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/silverado-air-intakes.html'},{name:'Corsa Direct',url:'https://www.corsaperformance.com/collections/air-intakes'}] },
  { id: 'corsa-803-11', brand: 'Corsa Performance', product: 'APEX Intake (updated)', eo: 'D-803-11', category: 'Cold Air Intake', years: '2014–2018', engines: '5.3L / 6.2L', status: 'legal', notes: '2019+ kits are NOT CARB certified', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=corsa+apex+intake+silverado'},{name:'Corsa Direct',url:'https://www.corsaperformance.com/collections/air-intakes'}] },
  { id: 'vararam-no', brand: 'Vararam', product: 'Cold Air Intake', eo: 'None', category: 'Cold Air Intake', years: '—', engines: '—', status: 'illegal', notes: 'Cannot ship to CA', price: '—', buyLinks: [] },
  { id: 'injen-no', brand: 'Injen Technology', product: 'EVO Intake (EVO7103)', eo: 'None', category: 'Cold Air Intake', years: '—', engines: '—', status: 'illegal', notes: 'Off-road use only', price: '—', buyLinks: [] },

  // ── SUPERCHARGERS ──
  { id: 'mag-488-25', brand: 'Magnuson', product: 'TVS2300 Supercharger', eo: 'D-488-25', category: 'Supercharger', years: '2007.5–2010', engines: '4.8L / 5.3L', status: 'legal', notes: '', price: '$7,500–$8,000', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=magnuson+tvs2300+silverado'},{name:'Magnuson Direct',url:'https://www.magnusonsuperchargers.com/collections/gm-truck-supercharger-systems'}] },
  { id: 'mag-488-34', brand: 'Magnuson', product: 'TVS Supercharger', eo: 'D-488-34', category: 'Supercharger', years: 'Various', engines: 'Various GM V8', status: 'legal', notes: 'Check specific application', price: '$7,500–$8,000', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=magnuson+supercharger+silverado'},{name:'Magnuson Direct',url:'https://www.magnusonsuperchargers.com/collections/gm-truck-supercharger-systems'}] },
  { id: 'mag-488-47', brand: 'Magnuson', product: 'TVS2300 (DI)', eo: 'D-488-47', category: 'Supercharger', years: '2014–2018', engines: '5.3L L83 DI', status: 'legal', notes: '', price: '$7,500–$8,500', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=magnuson+tvs2300+silverado+2014'},{name:'Magnuson Direct',url:'https://www.magnusonsuperchargers.com/collections/gm-truck-supercharger-systems'}] },
  { id: 'mag-488-61', brand: 'Magnuson', product: 'TVS Supercharger', eo: 'D-488-61', category: 'Supercharger', years: 'Various', engines: 'Various GM V8', status: 'legal', notes: 'Check specific application', price: '$7,500–$8,000', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=magnuson+supercharger+gm+truck'},{name:'Magnuson Direct',url:'https://www.magnusonsuperchargers.com/collections/gm-truck-supercharger-systems'}] },
  { id: 'procharger-365', brand: 'ProCharger', product: 'HO Intercooled System', eo: 'D-365-10', category: 'Supercharger', years: '2014–2018', engines: '5.3L / 6.2L', status: 'legal', notes: 'Tuner kits are NOT covered', price: '$6,500–$8,500', buyLinks: [{name:'ProCharger Direct',url:'https://www.procharger.com/automotive/chevrolet-supercharger-kits/silverado'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=procharger+silverado'}] },
  { id: 'edel-215-103', brand: 'Edelbrock', product: 'E-Force Supercharger', eo: 'D-215-103', category: 'Supercharger', years: 'Various', engines: 'Various GM V8', status: 'legal', notes: 'Check specific application', price: '$7,000–$8,500', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=edelbrock+e-force+silverado'},{name:'JEGS',url:'https://www.jegs.com/c/Supercharger-Kits/10242/10002/-1'}] },
  { id: 'edel-215-110', brand: 'Edelbrock', product: 'E-Force Stage 1', eo: 'D-215-110', category: 'Supercharger', years: '2007–2013', engines: '6.2L', status: 'legal', notes: 'e.g., P/N 1579', price: '$7,000–$8,000', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=edelbrock+e-force+1579'},{name:'JEGS',url:'https://www.jegs.com/c/Supercharger-Kits/10242/10002/-1'}] },
  { id: 'edel-215-123', brand: 'Edelbrock', product: 'E-Force Supercharger', eo: 'D-215-123', category: 'Supercharger', years: '2014–2018', engines: 'Various', status: 'legal', notes: 'Check specific part number', price: '$7,000–$8,500', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=edelbrock+e-force+silverado+2014'}] },
  { id: 'whipple-231', brand: 'Whipple', product: 'Twin-Screw Supercharger', eo: 'D-231-65', category: 'Supercharger', years: '2014–2018', engines: '5.3L / 6.2L', status: 'legal', notes: 'Must use included calibration', price: '$8,000–$9,000', buyLinks: [{name:'Whipple Direct',url:'https://www.whipplesuperchargers.com/i-30538192-2014-2018-gm-5-3l-truck-gen-5-3l-w175ax-2-9l-supercharger.html'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=whipple+supercharger+silverado'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/silverado-supercharger-kits.html'}] },
  { id: 'ripp-no', brand: 'RIPP Superchargers', product: 'Supercharger Kit', eo: 'None', category: 'Supercharger', years: '—', engines: '—', status: 'illegal', notes: 'No EO for V8 Silverado/Sierra', price: '—', buyLinks: [] },

  // ── SHORTY HEADERS ──
  { id: 'jba-57-33', brand: 'JBA', product: 'Cat4ward Shorty Headers', eo: 'D-57-33', category: 'Shorty Headers', years: 'Various', engines: '4.8L / 5.3L / 6.2L', status: 'legal', notes: 'Verify specific part #', price: '$450–$650', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jba+1850s+silverado'},{name:'JEGS',url:'https://www.jegs.com/c/Headers/10144/10002/-1?Brand=JBA+Performance+Exhaust'}] },
  { id: 'jba-57-47', brand: 'JBA', product: 'Cat4ward Shorty Headers', eo: 'D-57-47', category: 'Shorty Headers', years: 'Various', engines: '4.8L / 5.3L / 6.2L', status: 'legal', notes: 'Verify specific part #', price: '$450–$650', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jba+cat4ward+silverado'},{name:'JEGS',url:'https://www.jegs.com/c/Headers/10144/10002/-1?Brand=JBA+Performance+Exhaust'}] },
  { id: 'bbk-245', brand: 'BBK Performance', product: 'Shorty Headers', eo: 'D-245-18', category: 'Shorty Headers', years: '1999–2014', engines: 'Various GM V8', status: 'legal', notes: 'Many BBK for 2014+ are NOT CARB approved', price: '$400–$600', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=bbk+shorty+headers+silverado'},{name:'BBK Direct',url:'https://www.bbkperformance.com/performance-parts'}] },
  { id: 'pace-439-7', brand: 'PaceSetter', product: 'Shorty Headers', eo: 'D-439-7', category: 'Shorty Headers', years: '1996–1999', engines: '5.7L', status: 'legal', notes: 'Older application', price: '$250–$400', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=pacesetter+shorty+headers+silverado'}] },
  { id: 'pace-439-9', brand: 'PaceSetter', product: 'Shorty Headers', eo: 'D-439-9', category: 'Shorty Headers', years: 'Various', engines: 'Various GM', status: 'legal', notes: 'Verify specific P/N', price: '$250–$400', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=pacesetter+headers+silverado'}] },
  { id: 'hooker-115-20', brand: 'Hooker BlackHeart', product: 'Shorty Headers', eo: 'D-115-20', category: 'Shorty Headers', years: '2014–2016', engines: '5.3L', status: 'legal', notes: '', price: '$500–$700', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=hooker+blackheart+shorty+silverado'},{name:'JEGS',url:'https://www.jegs.com/c/Headers/10144/10002/-1?Brand=Hooker+BlackHeart'},{name:'Holley Direct',url:'https://www.holley.com/brands/hooker_blackheart/'}] },
  { id: 'hooker-115-27', brand: 'Hooker BlackHeart', product: 'Shorty Headers', eo: 'D-115-27', category: 'Shorty Headers', years: '2008–2013', engines: '5.3L', status: 'legal', notes: '', price: '$500–$700', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=hooker+blackheart+shorty+sierra'},{name:'Holley Direct',url:'https://www.holley.com/brands/hooker_blackheart/'}] },
  { id: 'flowtech-115-16', brand: 'Flowtech', product: 'Shorty Headers', eo: 'D-115-16', category: 'Shorty Headers', years: '1999–2002', engines: '4.8L / 5.3L', status: 'legal', notes: 'Older GM truck/SUV apps', price: '$200–$350', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=flowtech+shorty+headers+silverado'},{name:'JEGS',url:'https://www.jegs.com/c/Headers/10144/10002/-1?Brand=Flowtech'}] },
  { id: 'flowtech-115-20', brand: 'Flowtech', product: 'Shorty Headers', eo: 'D-115-20', category: 'Shorty Headers', years: '2002–2013', engines: '4.8L / 5.3L', status: 'legal', notes: 'Shared EO with Hooker', price: '$200–$350', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=flowtech+shorty+headers+silverado'}] },
  { id: 'gibson-411-11', brand: 'Gibson Performance', product: 'Shorty Headers', eo: 'D-411-11', category: 'Shorty Headers', years: 'Various', engines: 'Various GM V8', status: 'legal', notes: '50-state legal; verify P/N', price: '$500–$700', buyLinks: [{name:'Gibson Direct',url:'https://www.gibsonperformance.com/products/headers'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/silverado-headers.html'}] },
  { id: 'gibson-411-13', brand: 'Gibson Performance', product: 'Shorty Headers', eo: 'D-411-13', category: 'Shorty Headers', years: 'Various', engines: 'Various GM V8', status: 'legal', notes: '50-state legal; verify P/N', price: '$500–$700', buyLinks: [{name:'Gibson Direct',url:'https://www.gibsonperformance.com/products/headers'}] },
  { id: 'hedman-167-31', brand: 'Hedman Hedders', product: 'Shorty Headers', eo: 'D-167-31', category: 'Shorty Headers', years: '1999–2007', engines: '4.8L / 5.3L / 6.0L', status: 'legal', notes: '', price: '$300–$500', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=hedman+shorty+headers+silverado'},{name:'JEGS',url:'https://www.jegs.com/c/Headers/10144/10002/-1?Brand=Hedman+Hedders'},{name:'Speedway Motors',url:'https://www.speedwaymotors.com/search?query=hedman+headers+silverado'}] },
  { id: 'hedman-167-33', brand: 'Hedman Hedders', product: 'Shorty Headers', eo: 'D-167-33', category: 'Shorty Headers', years: 'Various', engines: 'Various GM V8', status: 'legal', notes: 'Different product lines; verify P/N', price: '$300–$500', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=hedman+headers+gm+truck'}] },
  { id: 'thorley-540', brand: 'Doug Thorley', product: 'Tri-Y Shorty Headers', eo: 'D-540-5/6/7', category: 'Shorty Headers', years: 'Various', engines: 'Various GM V8', status: 'legal', notes: 'Tri-Y design; verify specific P/N', price: '$500–$800', buyLinks: [{name:'Doug Thorley Direct',url:'https://www.dougthorleyheaders.com'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=doug+thorley+headers+silverado'}] },
  { id: 'longtube-no', brand: 'Any Brand (ARH, Kooks, TSP, Stainless Works)', product: 'Long-Tube Headers', eo: 'None', category: 'Shorty Headers', years: '—', engines: '—', status: 'illegal', notes: 'Relocate catalytic converters — always illegal', price: '—', buyLinks: [] },

  // ── TUNERS / PROGRAMMERS ──
  { id: 'diablo-770', brand: 'DiabloSport', product: 'inTune i3 / Trinity 2 / Predator 2', eo: 'D-770', category: 'Tuner', years: '1999–2018', engines: '4.3L–8.1L GM gas', status: 'legal', notes: 'Only pre-loaded tunes. Not for hybrids/eAssist', price: '$340–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=diablosport+7202+silverado'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/silverado-tuners-programmers.html'},{name:'JEGS',url:'https://www.jegs.com/p/DiabloSport/DiabloSport-Predator-2-Performance-Tuners/3773508/10002/-1'},{name:'Amazon',url:'https://www.amazon.com/s?k=diablosport+predator+2+7202'}] },
  { id: 'superchips-802-19', brand: 'Superchips', product: 'Flashpaq F5', eo: 'D-802-19', category: 'Tuner', years: 'Various', engines: 'Various GM', status: 'legal', notes: 'Verify for your year/engine', price: '$350–$400', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=superchips+flashpaq+f5+silverado'},{name:'Amazon',url:'https://www.amazon.com/s?k=superchips+flashpaq+f5+gm'}] },
  { id: 'superchips-330', brand: 'Superchips', product: 'Older/Diesel Tuners', eo: 'D-330-21 / D-802-5', category: 'Tuner', years: 'Varies', engines: 'Varies', status: 'legal', notes: 'Older units; verify', price: '$300–$400', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=superchips+gm+truck'}] },
  { id: 'hypertech-260', brand: 'Hypertech', product: 'Max Energy / Spectrum', eo: 'D-260-xx', category: 'Tuner', years: 'Various', engines: 'Various GM', status: 'legal', notes: 'EO label on driver door jamb', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=hypertech+max+energy+silverado'},{name:'Amazon',url:'https://www.amazon.com/s?k=hypertech+max+energy+silverado'},{name:'Hypertech Direct',url:'https://www.hypertech.com'}] },
  { id: 'bullydog-512', brand: 'Bully Dog', product: 'GT Platinum (P/N 40410)', eo: 'D-512-7', category: 'Tuner', years: '1999–2014', engines: 'GM gas', status: 'legal', notes: '50-state legal gas tuner', price: '$350–$500', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=bully+dog+40410'},{name:'Amazon',url:'https://www.amazon.com/s?k=bully+dog+gt+platinum+40410'}] },
  { id: 'hptuners-no', brand: 'HP Tuners / EFI Live', product: 'Custom Tunes', eo: 'None', category: 'Tuner', years: '—', engines: '—', status: 'illegal', notes: 'Off-road/race use only', price: '—', buyLinks: [] },

  // ── THROTTLE CONTROLLERS ──
  { id: 'pedal-840', brand: 'Pedal Commander', product: 'Throttle Response Controller', eo: 'D-840-5 / D-840-8', category: 'Throttle Controller', years: 'Various', engines: 'Various GM', status: 'legal', notes: '50-state legal — CARB certified', price: '$299', buyLinks: [{name:'Amazon',url:'https://www.amazon.com/s?k=pedal+commander+silverado'},{name:'Pedal Commander Direct',url:'https://www.pedalcommander.com'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/silverado-throttle-controllers.html'},{name:'Walmart',url:'https://www.walmart.com/search?q=pedal+commander+silverado'}] },
  { id: 'sprint-no', brand: 'Sprint Booster', product: 'Throttle Controller', eo: 'None', category: 'Throttle Controller', years: '—', engines: '—', status: 'illegal', notes: 'NOT CARB certified', price: '—', buyLinks: [] },

  // ── THROTTLE BODY SPACERS ──
  { id: 'jet-234', brand: 'Jet Performance', product: 'Powr-Flo Throttle Body Spacer', eo: 'D-234-9', category: 'Throttle Body Spacer', years: 'Various', engines: 'Various GM', status: 'legal', notes: 'Verify year/engine', price: '$60–$100', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+powr-flo+throttle+body+spacer+silverado'},{name:'Amazon',url:'https://www.amazon.com/s?k=jet+performance+throttle+body+spacer+silverado'}] },
  { id: 'airaid-tbs', brand: 'Airaid', product: 'PowerAid Throttle Body Spacer', eo: 'D-609-xx', category: 'Throttle Body Spacer', years: 'Varies', engines: 'Varies', status: 'legal', notes: 'Many NOT CARB legal — check each one', price: '$80–$130', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=airaid+poweraid+throttle+body+spacer+silverado'},{name:'Amazon',url:'https://www.amazon.com/s?k=airaid+poweraid+silverado'}] },

  // ── AFM/DOD DELETE ──
  { id: 'jasper-391', brand: 'Jasper Engines', product: 'Reman Engine w/ DOD/AFM Delete', eo: 'D-391-2', category: 'AFM/DOD Delete', years: 'Various', engines: 'Various GM V8', status: 'legal', notes: 'Full reman engine with CARB-certified calibration', price: '$4,500–$6,500+', buyLinks: [{name:'Jasper Direct',url:'https://www.jasperengines.com/gas-engines'},{name:'Find Installer',url:'https://www.jasperengines.com/installer-locator'}] },
  { id: 'range-no', brand: 'Range Technology', product: 'AFM/DFM Disabler (RA003B)', eo: 'None (Pending)', category: 'AFM/DOD Delete', years: '—', engines: '—', status: 'pending', notes: 'CARB testing pending — NOT currently legal in CA', price: '$100–$130', buyLinks: [{name:'Range Direct',url:'https://www.rangetechnology.com'},{name:'Amazon',url:'https://www.amazon.com/s?k=range+technology+afm+disabler'}] },

  // ── CAT-BACK EXHAUST ──
  { id: 'catback-exempt', brand: 'Corsa / Borla / MBRP / Flowmaster / Gibson', product: 'Cat-Back Exhaust Systems', eo: 'No EO Required', category: 'Cat-Back Exhaust', years: 'All', engines: 'All', status: 'exempt', notes: 'Downstream of catalytic converters — no EO needed', price: '$400–$2,000+', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=cat-back+exhaust+silverado'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/silverado-cat-back-exhausts.html'},{name:'Amazon',url:'https://www.amazon.com/s?k=silverado+cat+back+exhaust'}] },

  // ── CATALYTIC CONVERTERS ──
  { id: 'magna-193', brand: 'MagnaFlow', product: 'Direct-Fit Catalytic Converters', eo: 'D-193-xxx', category: 'Catalytic Converter', years: 'Varies', engines: 'Varies', status: 'legal', notes: 'Match EO to your Engine Family Number (EFN)', price: '$200–$800', buyLinks: [{name:'MagnaFlow Direct',url:'https://www.magnaflow.com/collections/catalytic-converters'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=magnaflow+catalytic+converter+silverado'},{name:'AutoZone',url:'https://www.autozone.com/search?searchText=magnaflow+catalytic+converter+silverado'}] },
  { id: 'walker-calcat', brand: 'Walker CalCat', product: 'Direct-Fit CARB Converters', eo: 'Various', category: 'Catalytic Converter', years: 'Varies', engines: 'Varies', status: 'legal', notes: 'Entire line focused on CARB compliance', price: '$200–$700', buyLinks: [{name:'AutoZone',url:'https://www.autozone.com/search?searchText=walker+calcat+silverado'},{name:'RockAuto',url:'https://www.rockauto.com'}] },
  { id: 'eastern-798', brand: 'Eastern Catalytic / AP Exhaust', product: 'Direct-Fit CARB Converters', eo: 'D-798-xx', category: 'Catalytic Converter', years: 'Varies', engines: 'Varies', status: 'legal', notes: 'Match EO to your EFN/Test Group', price: '$200–$600', buyLinks: [{name:'RockAuto',url:'https://www.rockauto.com'},{name:'AutoZone',url:'https://www.autozone.com/search?searchText=eastern+catalytic+silverado'}] },

  // ── OTHER NO-EO ITEMS ──
  { id: 'nitrous-no', brand: 'Nitrous Express / ZEX / NOS', product: 'Nitrous Oxide Kits', eo: 'None', category: 'Other', years: '—', engines: '—', status: 'illegal', notes: 'Race/off-road only', price: '—', buyLinks: [] },
  { id: 'catchcan-no', brand: 'Mishimoto / Generic', product: 'Oil Catch Cans', eo: 'None', category: 'Other', years: '—', engines: '—', status: 'illegal', notes: 'Modifies PCV system', price: '—', buyLinks: [] },
  { id: 'cam-no', brand: 'TSP / BTR / Comp Cams', product: 'Aftermarket Performance Cams', eo: 'None', category: 'Other', years: '—', engines: '—', status: 'illegal', notes: 'Requires non-compliant tune', price: '—', buyLinks: [] },
  { id: 'pulley-no', brand: 'BBK / ASP / All Brands', product: 'Underdrive Pulleys', eo: 'None', category: 'Other', years: '—', engines: '—', status: 'illegal', notes: 'No CARB EO exists', price: '—', buyLinks: [] },
  { id: 'efan-ok', brand: 'Flex-a-lite / Derale', product: 'Electric Fan Conversion', eo: 'Not Required', category: 'Other', years: 'All', engines: 'All', status: 'exempt', notes: 'Non-emissions component — no EO needed', price: '$150–$400', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=electric+fan+silverado'},{name:'Amazon',url:'https://www.amazon.com/s?k=electric+fan+conversion+silverado'}] },

  // ══════════════════════════════════════════════════════════════
  // FORD F-150
  // ══════════════════════════════════════════════════════════════
  { id: 'f150-afe-550-24', brand: 'aFe Power', product: 'Momentum GT (F-150 5.0L)', eo: 'D-550-24', category: 'Cold Air Intake', years: '2011–2014', engines: '5.0L Coyote V8', status: 'legal', notes: 'F-150 specific', price: '$400–$500', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=afe+momentum+gt+f-150+5.0'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/f150-air-intakes.html'},{name:'aFe Direct',url:'https://afepower.com/cold-air-intakes'}], vehicle: 'Ford F-150' },
  { id: 'f150-afe-550-28', brand: 'aFe Power', product: 'Momentum GT (F-150 EcoBoost)', eo: 'D-550-28', category: 'Cold Air Intake', years: '2015–2016', engines: '3.5L EcoBoost / 2.7L EcoBoost', status: 'legal', notes: 'F-150 EcoBoost', price: '$400–$500', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=afe+momentum+gt+f-150+ecoboost'},{name:'aFe Direct',url:'https://afepower.com/cold-air-intakes'}], vehicle: 'Ford F-150' },
  { id: 'f150-kn-269-48', brand: 'K&N Engineering', product: '57-Series FIPK (F-150 5.0L)', eo: 'D-269-48', category: 'Cold Air Intake', years: '2011–2014', engines: '5.0L Coyote V8', status: 'legal', notes: 'P/N 57-2581', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=kn+57-2581+f-150'},{name:'K&N Direct',url:'https://www.knfilters.com/cold-air-intakes/ford/f-150'},{name:'Amazon',url:'https://www.amazon.com/s?k=K%26N+57-2581+f-150'}], vehicle: 'Ford F-150' },
  { id: 'f150-kn-269', brand: 'K&N Engineering', product: '77-Series / 63-Series (F-150)', eo: 'D-269-xx', category: 'Cold Air Intake', years: 'Varies', engines: '3.5L / 5.0L', status: 'legal', notes: 'Use K&N vehicle search for exact EO', price: '$350–$475', buyLinks: [{name:'K&N Direct',url:'https://www.knfilters.com/cold-air-intakes/ford/f-150'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=kn+intake+f-150'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/f150-air-intakes.html'}], vehicle: 'Ford F-150' },
  { id: 'f150-volant-803-3', brand: 'Volant Performance', product: 'Intake (F-150 3.5L EB)', eo: 'D-803-3', category: 'Cold Air Intake', years: '2017–2020', engines: '3.5L EcoBoost', status: 'legal', notes: 'Verify specific P/N', price: '$300–$400', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=volant+intake+f-150'},{name:'Volant Direct',url:'https://www.volant.com/intakes'}], vehicle: 'Ford F-150' },
  { id: 'f150-sb-590-12', brand: 'S&B Filters', product: 'Cold Air Intake (F-150 5.0L)', eo: 'D-590-12', category: 'Cold Air Intake', years: '2011–2014', engines: '5.0L Coyote V8', status: 'legal', notes: 'Contact S&B for newer model EO status', price: '$300–$400', buyLinks: [{name:'S&B Direct',url:'https://www.sbfilters.com/cold-air-intakes'},{name:'Amazon',url:'https://www.amazon.com/s?k=S%26B+cold+air+intake+f-150'}], vehicle: 'Ford F-150' },
  { id: 'f150-roush-sc', brand: 'Roush Performance', product: 'Supercharger System (F-150)', eo: 'D-418-xx', category: 'Supercharger', years: '2015–2020', engines: '5.0L Coyote V8', status: 'legal', notes: 'Must use Roush calibration; verify specific EO', price: '$7,500–$9,000', buyLinks: [{name:'Roush Direct',url:'https://www.roushperformance.com/vehicles/f-150.html'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=roush+supercharger+f-150'}], vehicle: 'Ford F-150' },
  { id: 'f150-whipple', brand: 'Whipple', product: 'Twin-Screw Supercharger (F-150)', eo: 'D-231-xx', category: 'Supercharger', years: '2015–2020', engines: '5.0L Coyote V8', status: 'legal', notes: 'Must use included calibration', price: '$8,000–$9,500', buyLinks: [{name:'Whipple Direct',url:'https://www.whipplesuperchargers.com'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=whipple+supercharger+f-150'}], vehicle: 'Ford F-150' },
  { id: 'f150-procharger', brand: 'ProCharger', product: 'HO Intercooled (F-150)', eo: 'D-365-xx', category: 'Supercharger', years: '2015–2020', engines: '5.0L Coyote V8', status: 'legal', notes: 'HO kit only; Tuner kits NOT covered', price: '$6,500–$8,500', buyLinks: [{name:'ProCharger Direct',url:'https://www.procharger.com/automotive/ford-supercharger-kits/f-150'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=procharger+f-150'}], vehicle: 'Ford F-150' },
  { id: 'f150-sct-784', brand: 'SCT Performance', product: 'X4 / BDX Tuner (F-150)', eo: 'D-784-xx', category: 'Tuner', years: 'Various', engines: '3.5L EB / 5.0L / 2.7L EB', status: 'legal', notes: 'Only pre-loaded tunes; verify year coverage', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=sct+x4+f-150'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/f150-tuners-programmers.html'},{name:'Amazon',url:'https://www.amazon.com/s?k=sct+x4+ford+f-150'}], vehicle: 'Ford F-150' },
  { id: 'f150-cobb-660', brand: 'Cobb Tuning', product: 'Accessport (F-150 EcoBoost)', eo: 'D-660-121 / D-660-135', category: 'Tuner', years: 'Various', engines: '2.7L / 3.5L EcoBoost', status: 'legal', notes: 'EcoBoost only; verify year', price: '$600–$750', buyLinks: [{name:'Cobb Direct',url:'https://www.cobbtuning.com/products/ford-f-150'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=cobb+accessport+f-150'}], vehicle: 'Ford F-150' },
  { id: 'f150-diablo-770', brand: 'DiabloSport', product: 'inTune i3 / Predator 2 (F-150)', eo: 'D-770', category: 'Tuner', years: '2011–2018', engines: '3.5L EB / 5.0L', status: 'legal', notes: 'Only pre-loaded tunes', price: '$340–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=diablosport+f-150'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/f150-tuners-programmers.html'}], vehicle: 'Ford F-150' },
  { id: 'f150-pedal-840', brand: 'Pedal Commander', product: 'Throttle Controller (F-150)', eo: 'D-840-5', category: 'Throttle Controller', years: 'Various', engines: 'All F-150', status: 'legal', notes: '50-state legal', price: '$299', buyLinks: [{name:'Amazon',url:'https://www.amazon.com/s?k=pedal+commander+f-150'},{name:'Pedal Commander Direct',url:'https://www.pedalcommander.com'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/f150-throttle-controllers.html'}], vehicle: 'Ford F-150' },
  { id: 'f150-jba-headers', brand: 'JBA', product: 'Cat4ward Shorty Headers (F-150)', eo: 'D-57-xx', category: 'Shorty Headers', years: 'Various', engines: '5.0L Coyote V8', status: 'legal', notes: 'Verify specific P/N for your year', price: '$450–$650', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jba+headers+f-150+5.0'},{name:'JEGS',url:'https://www.jegs.com/c/Headers/10144/10002/-1?Brand=JBA+Performance+Exhaust'}], vehicle: 'Ford F-150' },
  { id: 'f150-catback', brand: 'Borla / Corsa / Flowmaster / MBRP', product: 'Cat-Back Exhaust (F-150)', eo: 'No EO Required', category: 'Cat-Back Exhaust', years: 'All', engines: 'All', status: 'exempt', notes: 'Downstream of cats — no EO needed', price: '$400–$2,000+', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=cat-back+exhaust+f-150'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/f150-cat-back-exhausts.html'}], vehicle: 'Ford F-150' },
  { id: 'f150-magna-cat', brand: 'MagnaFlow', product: 'Direct-Fit Catalytic Converter (F-150)', eo: 'D-193-xxx', category: 'Catalytic Converter', years: 'Varies', engines: 'Varies', status: 'legal', notes: 'Match EO to Engine Family Number', price: '$200–$800', buyLinks: [{name:'MagnaFlow Direct',url:'https://www.magnaflow.com/collections/catalytic-converters'},{name:'AutoZone',url:'https://www.autozone.com/search?searchText=magnaflow+catalytic+converter+f-150'}], vehicle: 'Ford F-150' },

  // ══════════════════════════════════════════════════════════════
  // TOYOTA TUNDRA
  // ══════════════════════════════════════════════════════════════
  { id: 'tundra-kn-269-52', brand: 'K&N Engineering', product: '57-Series FIPK (Tundra 5.7L)', eo: 'D-269-52', category: 'Cold Air Intake', years: '2007–2013', engines: '5.7L V8', status: 'legal', notes: 'P/N 57-9031', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=kn+57-9031+tundra'},{name:'K&N Direct',url:'https://www.knfilters.com/cold-air-intakes/toyota/tundra'},{name:'Amazon',url:'https://www.amazon.com/s?k=K%26N+57-9031+tundra'}], vehicle: 'Toyota Tundra' },
  { id: 'tundra-kn-269-90', brand: 'K&N Engineering', product: '57-Series FIPK (Tundra 5.7L newer)', eo: 'D-269-90', category: 'Cold Air Intake', years: '2014–2021', engines: '5.7L V8', status: 'legal', notes: 'P/N 57-9036', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=kn+57-9036+tundra'},{name:'JEGS',url:'https://www.jegs.com/c/Air-Intake/10112/10002/-1'},{name:'K&N Direct',url:'https://www.knfilters.com/cold-air-intakes/toyota/tundra'}], vehicle: 'Toyota Tundra' },
  { id: 'tundra-mag-488-69', brand: 'Magnuson', product: 'TVS Supercharger (Tundra 5.7L)', eo: 'D-488-69', category: 'Supercharger', years: '2014–2021', engines: '5.7L V8', status: 'legal', notes: '50-state legal', price: '$7,500–$8,500', buyLinks: [{name:'Magnuson Direct',url:'https://www.magnusonsuperchargers.com/collections/gm-truck-supercharger-systems'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=magnuson+supercharger+tundra'}], vehicle: 'Toyota Tundra' },
  { id: 'tundra-mag-488-58', brand: 'Magnuson', product: 'TVS Supercharger (Tundra 5.7L older)', eo: 'D-488-58', category: 'Supercharger', years: '2007–2013', engines: '5.7L V8', status: 'legal', notes: '50-state legal', price: '$7,000–$8,000', buyLinks: [{name:'Magnuson Direct',url:'https://www.magnusonsuperchargers.com/collections/gm-truck-supercharger-systems'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=magnuson+supercharger+tundra+5.7'}], vehicle: 'Toyota Tundra' },
  { id: 'tundra-trd-sc', brand: 'TRD (Toyota Racing Development)', product: 'TRD Supercharger (Tundra)', eo: 'TRD-specific', category: 'Supercharger', years: '2007–2016', engines: '5.7L V8', status: 'legal', notes: 'Discontinued — verify EO if buying used', price: '$5,000–$7,000 (used)', buyLinks: [{name:'eBay (Used)',url:'https://www.ebay.com/sch/i.html?_nkw=TRD+supercharger+tundra+5.7'}], vehicle: 'Toyota Tundra' },
  { id: 'tundra-diablo', brand: 'DiabloSport', product: 'inTune i3 (Tundra)', eo: 'D-770', category: 'Tuner', years: 'Various', engines: '5.7L V8', status: 'legal', notes: 'Pre-loaded tunes only', price: '$340–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=diablosport+tundra'}], vehicle: 'Toyota Tundra' },
  { id: 'tundra-pedal', brand: 'Pedal Commander', product: 'Throttle Controller (Tundra)', eo: 'D-840-5', category: 'Throttle Controller', years: 'Various', engines: 'All Tundra', status: 'legal', notes: '50-state legal', price: '$299', buyLinks: [{name:'Amazon',url:'https://www.amazon.com/s?k=pedal+commander+tundra'},{name:'Pedal Commander Direct',url:'https://www.pedalcommander.com'}], vehicle: 'Toyota Tundra' },
  { id: 'tundra-catback', brand: 'Borla / TRD / Gibson / Flowmaster', product: 'Cat-Back Exhaust (Tundra)', eo: 'No EO Required', category: 'Cat-Back Exhaust', years: 'All', engines: 'All', status: 'exempt', notes: 'Downstream of cats — no EO needed', price: '$400–$1,500+', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=cat-back+exhaust+tundra'}], vehicle: 'Toyota Tundra' },
  { id: 'tundra-magna-cat', brand: 'MagnaFlow', product: 'Direct-Fit Catalytic Converter (Tundra)', eo: 'D-193-xxx', category: 'Catalytic Converter', years: 'Varies', engines: 'Varies', status: 'legal', notes: 'Match EO to EFN', price: '$200–$800', buyLinks: [{name:'MagnaFlow Direct',url:'https://www.magnaflow.com/collections/catalytic-converters'},{name:'AutoZone',url:'https://www.autozone.com/search?searchText=magnaflow+catalytic+converter+tundra'}], vehicle: 'Toyota Tundra' },

  // ══════════════════════════════════════════════════════════════
  // TOYOTA TACOMA
  // ══════════════════════════════════════════════════════════════
  { id: 'tacoma-kn-269-90', brand: 'K&N Engineering', product: '57-Series FIPK (Tacoma 3.5L)', eo: 'D-269-90', category: 'Cold Air Intake', years: '2016–2023', engines: '3.5L V6', status: 'legal', notes: 'P/N 57-9039. 63-series NOT CARB exempt', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=kn+57-9039+tacoma'},{name:'K&N Direct',url:'https://www.knfilters.com/cold-air-intakes/toyota/tacoma'},{name:'Amazon',url:'https://www.amazon.com/s?k=K%26N+57-9039+tacoma'}], vehicle: 'Toyota Tacoma' },
  { id: 'tacoma-kn-269-old', brand: 'K&N Engineering', product: '77-Series (Tacoma 4.0L)', eo: 'D-269-xx', category: 'Cold Air Intake', years: '2005–2015', engines: '4.0L V6', status: 'legal', notes: 'Use K&N vehicle search for exact EO', price: '$300–$400', buyLinks: [{name:'K&N Direct',url:'https://www.knfilters.com/cold-air-intakes/toyota/tacoma'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=kn+intake+tacoma+4.0'}], vehicle: 'Toyota Tacoma' },
  { id: 'tacoma-mag-488', brand: 'Magnuson', product: 'TVS Supercharger (Tacoma 3.5L)', eo: 'D-488-xx', category: 'Supercharger', years: '2016–2023', engines: '3.5L V6', status: 'legal', notes: '50-state legal; verify specific EO suffix', price: '$5,500–$7,000', buyLinks: [{name:'Magnuson Direct',url:'https://www.magnusonsuperchargers.com/collections/gm-truck-supercharger-systems'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=magnuson+supercharger+tacoma'}], vehicle: 'Toyota Tacoma' },
  { id: 'tacoma-pedal', brand: 'Pedal Commander', product: 'Throttle Controller (Tacoma)', eo: 'D-840-5', category: 'Throttle Controller', years: 'Various', engines: 'All Tacoma', status: 'legal', notes: '50-state legal', price: '$299', buyLinks: [{name:'Amazon',url:'https://www.amazon.com/s?k=pedal+commander+tacoma'},{name:'Pedal Commander Direct',url:'https://www.pedalcommander.com'}], vehicle: 'Toyota Tacoma' },
  { id: 'tacoma-catback', brand: 'Borla / TRD / Flowmaster', product: 'Cat-Back Exhaust (Tacoma)', eo: 'No EO Required', category: 'Cat-Back Exhaust', years: 'All', engines: 'All', status: 'exempt', notes: 'Downstream of cats — no EO needed', price: '$350–$1,200+', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=cat-back+exhaust+tacoma'}], vehicle: 'Toyota Tacoma' },
  { id: 'tacoma-magna-cat', brand: 'MagnaFlow', product: 'Direct-Fit Catalytic Converter (Tacoma)', eo: 'D-193-xxx', category: 'Catalytic Converter', years: 'Varies', engines: 'Varies', status: 'legal', notes: 'Match EO to EFN', price: '$200–$700', buyLinks: [{name:'MagnaFlow Direct',url:'https://www.magnaflow.com/collections/catalytic-converters'},{name:'AutoZone',url:'https://www.autozone.com/search?searchText=magnaflow+catalytic+converter+tacoma'}], vehicle: 'Toyota Tacoma' },

  // ══════════════════════════════════════════════════════════════
  // CHEVY AVALANCHE (shares GMT900 platform with Silverado/Sierra)
  // ══════════════════════════════════════════════════════════════
  { id: 'aval-afe-550-13', brand: 'aFe Power', product: 'Momentum GT (Avalanche)', eo: 'D-550-13', category: 'Cold Air Intake', years: '2009–2013', engines: '5.3L / 6.0L', status: 'legal', notes: 'Same as Silverado — shared GMT900 platform', price: '$420–$525', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=afe+momentum+gt+avalanche'},{name:'aFe Direct',url:'https://afepower.com/cold-air-intakes'}], vehicle: 'Chevrolet Avalanche' },
  { id: 'aval-kn-269', brand: 'K&N Engineering', product: '77-Series (Avalanche)', eo: 'D-269-xx', category: 'Cold Air Intake', years: '2007–2013', engines: '5.3L / 6.0L', status: 'legal', notes: 'Same fitment as Silverado 1500', price: '$350–$475', buyLinks: [{name:'K&N Direct',url:'https://www.knfilters.com/cold-air-intakes/chevrolet/avalanche'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=kn+intake+avalanche'}], vehicle: 'Chevrolet Avalanche' },
  { id: 'aval-diablo', brand: 'DiabloSport', product: 'inTune i3 / Predator 2 (Avalanche)', eo: 'D-770', category: 'Tuner', years: '2007–2013', engines: '5.3L / 6.0L', status: 'legal', notes: 'Same as Silverado — shared platform', price: '$340–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=diablosport+avalanche'}], vehicle: 'Chevrolet Avalanche' },
  { id: 'aval-pedal', brand: 'Pedal Commander', product: 'Throttle Controller (Avalanche)', eo: 'D-840-5', category: 'Throttle Controller', years: '2007–2013', engines: 'All', status: 'legal', notes: '50-state legal', price: '$299', buyLinks: [{name:'Amazon',url:'https://www.amazon.com/s?k=pedal+commander+avalanche'},{name:'Pedal Commander Direct',url:'https://www.pedalcommander.com'}], vehicle: 'Chevrolet Avalanche' },
  { id: 'aval-catback', brand: 'Borla / Flowmaster / Corsa', product: 'Cat-Back Exhaust (Avalanche)', eo: 'No EO Required', category: 'Cat-Back Exhaust', years: 'All', engines: 'All', status: 'exempt', notes: 'Downstream of cats — no EO needed', price: '$400–$1,500+', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=cat-back+exhaust+avalanche'}], vehicle: 'Chevrolet Avalanche' },

  // ══════════════════════════════════════════════════════════════
  // FORD RANGER (2019+)
  // ══════════════════════════════════════════════════════════════
  { id: 'ranger-roush-418', brand: 'Roush Performance', product: 'Cold Air Intake (Ranger 2.3L EB)', eo: 'D-418-43', category: 'Cold Air Intake', years: '2019–2023', engines: '2.3L EcoBoost', status: 'legal', notes: '50-state legal', price: '$400–$500', buyLinks: [{name:'Roush Direct',url:'https://www.roushperformance.com/vehicles/ranger.html'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=roush+intake+ranger'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/ranger-air-intakes.html'}], vehicle: 'Ford Ranger' },
  { id: 'ranger-pedal', brand: 'Pedal Commander', product: 'Throttle Controller (Ranger)', eo: 'D-840-5', category: 'Throttle Controller', years: '2019–2023', engines: '2.3L EcoBoost', status: 'legal', notes: '50-state legal', price: '$299', buyLinks: [{name:'Amazon',url:'https://www.amazon.com/s?k=pedal+commander+ford+ranger'},{name:'Pedal Commander Direct',url:'https://www.pedalcommander.com'}], vehicle: 'Ford Ranger' },
  { id: 'ranger-catback', brand: 'Borla / Flowmaster / MBRP', product: 'Cat-Back Exhaust (Ranger)', eo: 'No EO Required', category: 'Cat-Back Exhaust', years: 'All', engines: 'All', status: 'exempt', notes: 'Downstream of cats — no EO needed', price: '$350–$1,200+', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=cat-back+exhaust+ford+ranger'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/ranger-cat-back-exhausts.html'}], vehicle: 'Ford Ranger' },
  { id: 'ranger-magna-cat', brand: 'MagnaFlow', product: 'Direct-Fit Catalytic Converter (Ranger)', eo: 'D-193-xxx', category: 'Catalytic Converter', years: 'Varies', engines: '2.3L EB', status: 'legal', notes: 'Match EO to EFN', price: '$200–$600', buyLinks: [{name:'MagnaFlow Direct',url:'https://www.magnaflow.com/collections/catalytic-converters'}], vehicle: 'Ford Ranger' },
  { id: 'ranger-kn-no', brand: 'K&N Engineering', product: '63-Series Intake (Ranger 2.3L)', eo: 'None', category: 'Cold Air Intake', years: '—', engines: '—', status: 'illegal', notes: 'P/N 63-2612 is NOT CARB exempt', price: '—', buyLinks: [], vehicle: 'Ford Ranger' },

  // ══════════════════════════════════════════════════════════════
  // CHEVY COLORADO / GMC CANYON
  // ══════════════════════════════════════════════════════════════
  { id: 'colo-kn-269-88', brand: 'K&N Engineering', product: '57-Series FIPK (Colorado 3.6L)', eo: 'D-269-88', category: 'Cold Air Intake', years: '2017–2021', engines: '3.6L V6', status: 'legal', notes: 'P/N 57-3104', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=kn+57-3104+colorado'},{name:'K&N Direct',url:'https://www.knfilters.com/cold-air-intakes/chevrolet/colorado'},{name:'Amazon',url:'https://www.amazon.com/s?k=K%26N+57-3104+colorado'}], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-kn-269-110', brand: 'K&N Engineering', product: 'FIPK (Colorado 3.6L updated)', eo: 'D-269-110', category: 'Cold Air Intake', years: '2017–2022', engines: '3.6L V6', status: 'legal', notes: 'Updated kit', price: '$350–$450', buyLinks: [{name:'K&N Direct',url:'https://www.knfilters.com/cold-air-intakes/chevrolet/colorado'}], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-afe-550-18', brand: 'aFe Power', product: 'Momentum Intake (Colorado 3.6L)', eo: 'D-550-18', category: 'Cold Air Intake', years: '2016–2021', engines: '3.6L V6', status: 'legal', notes: 'P/N 54-12832', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=afe+momentum+colorado+3.6'},{name:'aFe Direct',url:'https://afepower.com/cold-air-intakes'}], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-pedal', brand: 'Pedal Commander', product: 'Throttle Controller (Colorado/Canyon)', eo: 'D-840-5', category: 'Throttle Controller', years: 'Various', engines: 'All', status: 'legal', notes: '50-state legal', price: '$299', buyLinks: [{name:'Amazon',url:'https://www.amazon.com/s?k=pedal+commander+colorado'},{name:'Pedal Commander Direct',url:'https://www.pedalcommander.com'}], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-catback', brand: 'Borla / Flowmaster / MBRP', product: 'Cat-Back Exhaust (Colorado/Canyon)', eo: 'No EO Required', category: 'Cat-Back Exhaust', years: 'All', engines: 'All', status: 'exempt', notes: 'Downstream of cats — no EO needed', price: '$350–$1,200+', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=cat-back+exhaust+colorado'}], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-magna-cat', brand: 'MagnaFlow', product: 'Direct-Fit Catalytic Converter (Colorado)', eo: 'D-193-xxx', category: 'Catalytic Converter', years: 'Varies', engines: 'Varies', status: 'legal', notes: 'Match EO to EFN', price: '$200–$600', buyLinks: [{name:'MagnaFlow Direct',url:'https://www.magnaflow.com/collections/catalytic-converters'},{name:'AutoZone',url:'https://www.autozone.com/search?searchText=magnaflow+catalytic+converter+colorado'}], vehicle: 'Chevrolet Colorado' },

  // ══════════════════════════════════════════════════════════════
  // EXPANDED — THROTTLE BODIES (All Vehicles)
  // ══════════════════════════════════════════════════════════════
  { id: 'bbk-tb-245-17', brand: 'BBK Performance', product: 'Power-Plus Throttle Body (Silverado/Sierra)', eo: 'D-245-17', category: 'Throttle Body', years: '1999–2007', engines: '4.8L / 5.3L / 6.0L', status: 'legal', notes: 'Direct bolt-on; retains factory electronics', price: '$250–$350', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=bbk+throttle+body+silverado'},{name:'BBK Direct',url:'https://www.bbkperformance.com/performance-parts'},{name:'JEGS',url:'https://www.jegs.com/c/Throttle-Bodies/10180/10002/-1?Brand=BBK+Performance'}] },
  { id: 'bbk-tb-245-28-gm', brand: 'BBK Performance', product: 'Power-Plus Throttle Body (Silverado 2014+)', eo: 'D-245-28', category: 'Throttle Body', years: '2014–2018', engines: '5.3L / 6.2L', status: 'legal', notes: 'Electronic throttle body upgrade', price: '$280–$380', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=bbk+throttle+body+silverado+2014'},{name:'BBK Direct',url:'https://www.bbkperformance.com/performance-parts'}] },
  { id: 'f150-bbk-tb-245-25', brand: 'BBK Performance', product: 'Power-Plus Throttle Body (F-150 5.0L)', eo: 'D-245-25', category: 'Throttle Body', years: '2011–2017', engines: '5.0L Coyote V8', status: 'legal', notes: 'CARB legal; direct bolt-on', price: '$280–$380', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=bbk+throttle+body+f-150+5.0'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/f150-throttle-bodies.html'},{name:'BBK Direct',url:'https://www.bbkperformance.com/performance-parts'}], vehicle: 'Ford F-150' },
  { id: 'f150-bbk-tb-245-28', brand: 'BBK Performance', product: 'Power-Plus Throttle Body (F-150 5.0L Gen3)', eo: 'D-245-28', category: 'Throttle Body', years: '2018–2023', engines: '5.0L Coyote V8', status: 'legal', notes: 'Gen 3 Coyote; CARB legal', price: '$300–$400', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=bbk+throttle+body+f-150+2018'},{name:'BBK Direct',url:'https://www.bbkperformance.com/performance-parts'}], vehicle: 'Ford F-150' },
  { id: 'f150-bbk-tb-245-22', brand: 'BBK Performance', product: 'Power-Plus Throttle Body (F-150 3.5L EB)', eo: 'D-245-22', category: 'Throttle Body', years: '2015–2020', engines: '3.5L EcoBoost', status: 'legal', notes: 'EcoBoost; twin TB upgrade', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=bbk+throttle+body+f-150+ecoboost'},{name:'BBK Direct',url:'https://www.bbkperformance.com/performance-parts'}], vehicle: 'Ford F-150' },

  // ══════════════════════════════════════════════════════════════
  // EXPANDED — THROTTLE BODY SPACERS (New Vehicles)
  // ══════════════════════════════════════════════════════════════
  { id: 'f150-jet-tbs', brand: 'Jet Performance', product: 'Powr-Flo TB Spacer (F-150)', eo: 'D-234-9', category: 'Throttle Body Spacer', years: 'Various', engines: '5.0L / 3.5L EB', status: 'legal', notes: 'Verify year/engine', price: '$60–$100', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+throttle+body+spacer+f-150'},{name:'Amazon',url:'https://www.amazon.com/s?k=jet+throttle+body+spacer+f-150'}], vehicle: 'Ford F-150' },
  { id: 'tundra-jet-tbs', brand: 'Jet Performance', product: 'Powr-Flo TB Spacer (Tundra)', eo: 'D-234-9', category: 'Throttle Body Spacer', years: 'Various', engines: '5.7L V8', status: 'legal', notes: 'Verify year/engine', price: '$60–$100', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+throttle+body+spacer+tundra'},{name:'Amazon',url:'https://www.amazon.com/s?k=jet+throttle+body+spacer+tundra'}], vehicle: 'Toyota Tundra' },
  { id: 'tacoma-airaid-tbs', brand: 'Airaid', product: 'PowerAid TB Spacer (Tacoma)', eo: 'D-609-xx', category: 'Throttle Body Spacer', years: 'Varies', engines: '3.5L / 4.0L V6', status: 'legal', notes: '⚠️ Verify specific P/N has CARB EO', price: '$80–$130', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=airaid+throttle+body+spacer+tacoma'}], vehicle: 'Toyota Tacoma' },
  { id: 'aval-jet-tbs', brand: 'Jet Performance', product: 'Powr-Flo TB Spacer (Avalanche)', eo: 'D-234-9', category: 'Throttle Body Spacer', years: '2007–2013', engines: '5.3L / 6.0L', status: 'legal', notes: 'Same as Silverado fitment', price: '$60–$100', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+throttle+body+spacer+avalanche'}], vehicle: 'Chevrolet Avalanche' },

  // ══════════════════════════════════════════════════════════════
  // EXPANDED — HEADERS (New Vehicles)
  // ══════════════════════════════════════════════════════════════
  { id: 'f150-jba-57-40', brand: 'JBA', product: 'Cat4ward Shorty Headers (F-150 5.0L)', eo: 'D-57-40', category: 'Shorty Headers', years: '2015–2022', engines: '5.0L Coyote V8', status: 'legal', notes: 'Direct manifold replacement', price: '$500–$700', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jba+shorty+headers+f-150+5.0'},{name:'JEGS',url:'https://www.jegs.com/c/Headers/10144/10002/-1?Brand=JBA+Performance+Exhaust'},{name:'AmericanTrucks',url:'https://www.americantrucks.com/f150-headers.html'}], vehicle: 'Ford F-150' },
  { id: 'f150-jba-57-45', brand: 'JBA', product: 'Cat4ward Shorty Headers (F-150 5.0L alt)', eo: 'D-57-45', category: 'Shorty Headers', years: '2015–2022', engines: '5.0L Coyote V8', status: 'legal', notes: 'Alternate application — verify P/N', price: '$500–$700', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jba+cat4ward+f-150+coyote'}], vehicle: 'Ford F-150' },
  { id: 'f150-jba-57-36', brand: 'JBA', product: 'Cat4ward Shorty Headers (F-150 3.5/3.7L NA)', eo: 'D-57-36', category: 'Shorty Headers', years: 'Various', engines: '3.5L NA V6 / 3.7L V6', status: 'legal', notes: 'NOT for EcoBoost turbo — NA V6 only', price: '$400–$600', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jba+headers+f-150+3.7'}], vehicle: 'Ford F-150' },
  { id: 'f150-bbk-headers-no', brand: 'BBK Performance', product: 'Shorty Headers (F-150 5.0L)', eo: 'None', category: 'Shorty Headers', years: '—', engines: '—', status: 'illegal', notes: 'BBK F-150 headers are NOT CARB approved', price: '—', buyLinks: [], vehicle: 'Ford F-150' },
  { id: 'tundra-jba-57-33', brand: 'JBA', product: 'Cat4ward Shorty Headers (Tundra 5.7L)', eo: 'D-57-33', category: 'Shorty Headers', years: '2007–2021', engines: '5.7L V8', status: 'legal', notes: 'Direct manifold replacement; retains cats', price: '$500–$700', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jba+shorty+headers+tundra+5.7'},{name:'JEGS',url:'https://www.jegs.com/c/Headers/10144/10002/-1?Brand=JBA+Performance+Exhaust'}], vehicle: 'Toyota Tundra' },
  { id: 'tundra-thorley-540-6', brand: 'Doug Thorley', product: 'Shorty Headers (Tundra 5.7L)', eo: 'D-540-6', category: 'Shorty Headers', years: '2007–2021', engines: '5.7L V8', status: 'legal', notes: 'Short-tube only! Long-tube versions are race-only', price: '$550–$800', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=doug+thorley+headers+tundra'},{name:'Doug Thorley Direct',url:'https://www.dougthorleyheaders.com'}], vehicle: 'Toyota Tundra' },
  { id: 'tacoma-jba-57-47', brand: 'JBA', product: 'Cat4ward Shorty Headers (Tacoma 4.0L)', eo: 'D-57-47', category: 'Shorty Headers', years: '2005–2015', engines: '4.0L V6', status: 'legal', notes: 'Verify P/N for your specific year', price: '$400–$600', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jba+headers+tacoma+4.0'},{name:'JEGS',url:'https://www.jegs.com/c/Headers/10144/10002/-1?Brand=JBA+Performance+Exhaust'}], vehicle: 'Toyota Tacoma' },
  { id: 'tacoma-thorley-540', brand: 'Doug Thorley', product: 'Shorty Headers (Tacoma 4.0L)', eo: 'D-540-6', category: 'Shorty Headers', years: '2005–2015', engines: '4.0L V6', status: 'legal', notes: 'Short-tube only', price: '$500–$750', buyLinks: [{name:'Doug Thorley Direct',url:'https://www.dougthorleyheaders.com'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=doug+thorley+headers+tacoma'}], vehicle: 'Toyota Tacoma' },
  { id: 'aval-jba-headers', brand: 'JBA', product: 'Cat4ward Shorty Headers (Avalanche)', eo: 'D-57-33', category: 'Shorty Headers', years: '2007–2013', engines: '5.3L / 6.0L', status: 'legal', notes: 'Same as Silverado — shared GMT900 platform', price: '$450–$650', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jba+shorty+headers+avalanche'}], vehicle: 'Chevrolet Avalanche' },
  { id: 'aval-hooker-headers', brand: 'Hooker BlackHeart', product: 'Shorty Headers (Avalanche)', eo: 'D-115-27', category: 'Shorty Headers', years: '2007–2013', engines: '5.3L', status: 'legal', notes: 'Same as Silverado fitment', price: '$500–$700', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=hooker+blackheart+shorty+avalanche'}], vehicle: 'Chevrolet Avalanche' },

  // ══════════════════════════════════════════════════════════════
  // EXPANDED — MASS AIRFLOW SENSORS
  // ══════════════════════════════════════════════════════════════
  { id: 'maf-granatelli-no', brand: 'Granatelli Motor Sports', product: 'Performance MAF Sensor', eo: 'None', category: 'MAF Sensor', years: '—', engines: '—', status: 'illegal', notes: 'Most performance MAFs are NOT CARB certified — causes CEL codes', price: '—', buyLinks: [] },
  { id: 'maf-jet-234', brand: 'Jet Performance', product: 'Powr-Flo MAF Sensor (GM Trucks)', eo: 'D-234-11 / D-234-13', category: 'MAF Sensor', years: 'Various', engines: 'Various', status: 'legal', notes: '50-state legal; plug-and-play OE replacement with improved airflow. Verify specific P/N for your year/engine', price: '$100–$180', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+powr-flo+mass+air+flow+sensor'},{name:'JEGS',url:'https://www.jegs.com/c/Mass-Air-Flow-Sensors/10160/10002/-1?Brand=Jet+Performance'},{name:'Amazon',url:'https://www.amazon.com/s?k=jet+performance+powr-flo+maf+sensor'}] },
  { id: 'maf-pmas-no', brand: 'PMAS', product: 'Performance MAF Sensor', eo: 'None', category: 'MAF Sensor', years: '—', engines: '—', status: 'illegal', notes: 'Off-road use only; requires custom tune', price: '—', buyLinks: [] },
  { id: 'maf-oem', brand: 'Denso / Delphi / ACDelco', product: 'OEM Replacement MAF Sensor', eo: 'Not Required', category: 'MAF Sensor', years: 'All', engines: 'All', status: 'exempt', notes: 'Direct OEM replacement — no EO needed. Recommended over performance MAFs', price: '$30–$150', buyLinks: [{name:'AutoZone',url:'https://www.autozone.com/search?searchText=mass+air+flow+sensor'},{name:'RockAuto',url:'https://www.rockauto.com'},{name:'Amazon',url:'https://www.amazon.com/s?k=oem+mass+air+flow+sensor'}] },

  // ══════════════════════════════════════════════════════════════
  // EXPANDED — INTAKE MANIFOLDS
  // ══════════════════════════════════════════════════════════════
  { id: 'manifold-edel-no', brand: 'Edelbrock', product: 'Performer RPM / Victor Jr LS Manifold', eo: 'None', category: 'Intake Manifold', years: '—', engines: '—', status: 'illegal', notes: 'Designed for carb conversions — NOT legal on EFI trucks', price: '—', buyLinks: [] },
  { id: 'manifold-holley-no', brand: 'Holley', product: 'Hi-Ram / Mid-Rise LS Manifold', eo: 'None', category: 'Intake Manifold', years: '—', engines: '—', status: 'illegal', notes: 'Race/off-road only; requires non-factory calibration', price: '—', buyLinks: [] },
  { id: 'manifold-fast-no', brand: 'FAST (Fuel Air Spark Tech)', product: 'LSXR Intake Manifold', eo: 'None', category: 'Intake Manifold', years: '—', engines: '—', status: 'illegal', notes: 'Off-road/race only on modern trucks', price: '—', buyLinks: [] },
  { id: 'manifold-oem', brand: 'ACDelco / Dorman', product: 'OEM Replacement Intake Manifold', eo: 'Not Required', category: 'Intake Manifold', years: 'All', engines: 'All', status: 'exempt', notes: 'Direct factory replacement — no EO needed', price: '$100–$400', buyLinks: [{name:'AutoZone',url:'https://www.autozone.com/search?searchText=intake+manifold'},{name:'RockAuto',url:'https://www.rockauto.com'},{name:'Amazon',url:'https://www.amazon.com/s?k=oem+intake+manifold'}] },

  // ══════════════════════════════════════════════════════════════
  // GAP FILL — COLORADO / CANYON (Supercharger, Tuner, Headers, TB)
  // ══════════════════════════════════════════════════════════════
  { id: 'colo-mag-488-63', brand: 'Magnuson', product: 'TVS1900 Supercharger (Colorado 3.6L)', eo: 'D-488-63', category: 'Supercharger', years: '2017–2022', engines: '3.6L V6 (LGZ)', status: 'legal', notes: '50-state legal; must use included calibration', price: '$6,500–$7,500', buyLinks: [{name:'Magnuson Direct',url:'https://www.magnusonsuperchargers.com/collections/gm-truck-supercharger-systems'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=magnuson+supercharger+colorado+3.6'}], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-edel-215-126', brand: 'Edelbrock', product: 'E-Force Supercharger Stage 1 (Colorado 3.6L)', eo: 'D-215-126', category: 'Supercharger', years: '2017–2022', engines: '3.6L V6', status: 'legal', notes: '50-state legal; includes calibration', price: '$6,000–$7,000', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=edelbrock+supercharger+colorado'},{name:'Edelbrock Direct',url:'https://www.edelbrock.com'}], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-diablo-770', brand: 'DiabloSport', product: 'inTune i3 (Colorado/Canyon)', eo: 'D-770', category: 'Tuner', years: 'Various', engines: '3.6L V6', status: 'legal', notes: 'Pre-loaded tunes only; verify year coverage', price: '$340–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=diablosport+colorado+canyon'},{name:'Amazon',url:'https://www.amazon.com/s?k=diablosport+intune+i3+colorado'}], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-jba-headers', brand: 'JBA', product: 'Cat4ward Shorty Headers (Colorado 3.6L)', eo: 'D-57-xx', category: 'Shorty Headers', years: 'Various', engines: '3.6L V6', status: 'legal', notes: 'Verify specific P/N and EO suffix for your year', price: '$450–$650', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jba+headers+colorado+3.6'},{name:'JBA Direct',url:'https://www.jbaspeedshop.com'}], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-bbk-tb', brand: 'BBK Performance', product: 'Power-Plus Throttle Body (Colorado 3.6L)', eo: 'D-245-xx', category: 'Throttle Body', years: 'Various', engines: '3.6L V6', status: 'legal', notes: 'Verify specific P/N has EO for Colorado', price: '$250–$350', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=bbk+throttle+body+colorado'},{name:'BBK Direct',url:'https://www.bbkperformance.com/performance-parts'}], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-jet-tbs', brand: 'Jet Performance', product: 'Powr-Flo TB Spacer (Colorado)', eo: 'D-234-9', category: 'Throttle Body Spacer', years: 'Various', engines: '3.6L V6', status: 'legal', notes: 'Verify year/engine', price: '$60–$100', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+throttle+body+spacer+colorado'}], vehicle: 'Chevrolet Colorado' },

  // ══════════════════════════════════════════════════════════════
  // GAP FILL — FORD RANGER (Tuner, Headers/TB status)
  // ══════════════════════════════════════════════════════════════
  { id: 'ranger-ford-431-4', brand: 'Ford Performance', product: 'Power Pack Calibration (Ranger)', eo: 'D-431-4', category: 'Tuner', years: '2019–2021', engines: '2.3L EcoBoost', status: 'legal', notes: '50-state legal; +45HP/+60TQ; dealer install recommended', price: '$700–$900', buyLinks: [{name:'Ford Performance Direct',url:'https://performanceparts.ford.com'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=ford+performance+power+pack+ranger'}], vehicle: 'Ford Ranger' },
  { id: 'ranger-ford-431-6', brand: 'Ford Performance', product: 'Power Pack Calibration (Ranger 22+)', eo: 'D-431-6', category: 'Tuner', years: '2022–2023', engines: '2.3L EcoBoost', status: 'legal', notes: '50-state legal; updated for 2022+ MY', price: '$700–$900', buyLinks: [{name:'Ford Performance Direct',url:'https://performanceparts.ford.com'}], vehicle: 'Ford Ranger' },
  { id: 'ranger-whipple-231-147', brand: 'Whipple', product: 'Stage 1 Calibration (Ranger)', eo: 'D-231-147', category: 'Tuner', years: '2019–2023', engines: '2.3L EcoBoost', status: 'legal', notes: '50-state legal; significant power gains', price: '$800–$1,000', buyLinks: [{name:'Whipple Direct',url:'https://www.whipplesuperchargers.com'}], vehicle: 'Ford Ranger' },
  { id: 'ranger-headers-no', brand: 'All Brands', product: 'Shorty Headers (Ranger 2.3L EB)', eo: 'None', category: 'Shorty Headers', years: '—', engines: '—', status: 'illegal', notes: 'No CARB-legal shorty headers exist for 2019+ Ranger 2.3L EcoBoost', price: '—', buyLinks: [], vehicle: 'Ford Ranger' },
  { id: 'ranger-tb-no', brand: 'BBK / All Brands', product: 'Aftermarket Throttle Body (Ranger)', eo: 'None', category: 'Throttle Body', years: '—', engines: '—', status: 'illegal', notes: 'No verified CARB-legal TB exists for 2019+ Ranger', price: '—', buyLinks: [], vehicle: 'Ford Ranger' },
  { id: 'ranger-tbs', brand: 'Jet Performance', product: 'Powr-Flo TB Spacer (Ranger)', eo: 'D-234-9', category: 'Throttle Body Spacer', years: 'Varies', engines: '2.3L EcoBoost', status: 'legal', notes: 'Verify specific P/N', price: '$60–$100', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+throttle+body+spacer+ranger'}], vehicle: 'Ford Ranger' },

  // ══════════════════════════════════════════════════════════════
  // GAP FILL — TUNDRA (Throttle Body, Additional Tuners)
  // ══════════════════════════════════════════════════════════════
  { id: 'tundra-bbk-tb-no', brand: 'BBK / All Brands', product: 'Aftermarket Throttle Body (Tundra)', eo: 'None', category: 'Throttle Body', years: '—', engines: '—', status: 'illegal', notes: 'No verified CARB-legal aftermarket TB for Tundra 5.7L', price: '—', buyLinks: [], vehicle: 'Toyota Tundra' },
  { id: 'tundra-superchips', brand: 'Superchips', product: 'Flashpaq F5 (Tundra)', eo: 'Verify', category: 'Tuner', years: 'Various', engines: '5.7L V8', status: 'pending', notes: '⚠️ Some models CARB legal — verify specific P/N before purchase', price: '$350–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=superchips+flashpaq+tundra'}], vehicle: 'Toyota Tundra' },
  { id: 'tundra-manifold-no', brand: 'All Brands', product: 'Performance Intake Manifold (Tundra)', eo: 'None', category: 'Intake Manifold', years: '—', engines: '—', status: 'illegal', notes: 'No CARB-legal aftermarket intake manifold for Tundra', price: '—', buyLinks: [], vehicle: 'Toyota Tundra' },
  { id: 'tundra-maf-jet', brand: 'Jet Performance', product: 'Powr-Flo MAF Sensor (Tundra)', eo: 'D-234-11 / D-234-13', category: 'MAF Sensor', years: 'Various', engines: '5.7L V8', status: 'legal', notes: '50-state legal; verify specific P/N', price: '$100–$180', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+powr-flo+maf+tundra'},{name:'Amazon',url:'https://www.amazon.com/s?k=jet+performance+maf+tundra'}], vehicle: 'Toyota Tundra' },

  // ══════════════════════════════════════════════════════════════
  // GAP FILL — TACOMA (Throttle Body, Additional Tuners)
  // ══════════════════════════════════════════════════════════════
  { id: 'tacoma-bbk-tb-no', brand: 'BBK / All Brands', product: 'Aftermarket Throttle Body (Tacoma)', eo: 'None', category: 'Throttle Body', years: '—', engines: '—', status: 'illegal', notes: 'No verified CARB-legal aftermarket TB for Tacoma', price: '—', buyLinks: [], vehicle: 'Toyota Tacoma' },
  { id: 'tacoma-diablo', brand: 'DiabloSport', product: 'inTune i3 (Tacoma)', eo: 'Verify', category: 'Tuner', years: 'Various', engines: '3.5L V6', status: 'pending', notes: '⚠️ Verify if CARB EO D-770 covers your Tacoma year', price: '$340–$450', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=diablosport+tacoma'}], vehicle: 'Toyota Tacoma' },
  { id: 'tacoma-manifold-no', brand: 'All Brands', product: 'Performance Intake Manifold (Tacoma)', eo: 'None', category: 'Intake Manifold', years: '—', engines: '—', status: 'illegal', notes: 'No CARB-legal aftermarket intake manifold for Tacoma', price: '—', buyLinks: [], vehicle: 'Toyota Tacoma' },
  { id: 'tacoma-maf-jet', brand: 'Jet Performance', product: 'Powr-Flo MAF Sensor (Tacoma)', eo: 'D-234-11 / D-234-13', category: 'MAF Sensor', years: 'Various', engines: '3.5L / 4.0L V6', status: 'legal', notes: '50-state legal; verify specific P/N', price: '$100–$180', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+powr-flo+maf+tacoma'}], vehicle: 'Toyota Tacoma' },

  // ══════════════════════════════════════════════════════════════
  // GAP FILL — AVALANCHE (Supercharger, TB, Cats, Manifold)
  // ══════════════════════════════════════════════════════════════
  { id: 'aval-mag-488', brand: 'Magnuson', product: 'TVS Supercharger (Avalanche 5.3L)', eo: 'D-488-58', category: 'Supercharger', years: '2007–2013', engines: '5.3L / 6.0L', status: 'legal', notes: 'Same as Silverado — shared GMT900 platform', price: '$7,000–$8,000', buyLinks: [{name:'Magnuson Direct',url:'https://www.magnusonsuperchargers.com/collections/gm-truck-supercharger-systems'},{name:'Summit Racing',url:'https://www.summitracing.com/search?query=magnuson+supercharger+avalanche'}], vehicle: 'Chevrolet Avalanche' },
  { id: 'aval-bbk-tb', brand: 'BBK Performance', product: 'Power-Plus Throttle Body (Avalanche)', eo: 'D-245-17', category: 'Throttle Body', years: '2007–2013', engines: '5.3L / 6.0L', status: 'legal', notes: 'Same as Silverado — shared GMT900 platform', price: '$250–$350', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=bbk+throttle+body+avalanche'},{name:'BBK Direct',url:'https://www.bbkperformance.com/performance-parts'}], vehicle: 'Chevrolet Avalanche' },
  { id: 'aval-magna-cat', brand: 'MagnaFlow', product: 'Direct-Fit Catalytic Converter (Avalanche)', eo: 'D-193-xxx', category: 'Catalytic Converter', years: 'Varies', engines: '5.3L / 6.0L', status: 'legal', notes: 'Match EO to EFN; same as Silverado', price: '$200–$800', buyLinks: [{name:'MagnaFlow Direct',url:'https://www.magnaflow.com/collections/catalytic-converters'},{name:'AutoZone',url:'https://www.autozone.com/search?searchText=magnaflow+catalytic+converter+avalanche'}], vehicle: 'Chevrolet Avalanche' },
  { id: 'aval-manifold-no', brand: 'All Brands', product: 'Performance Intake Manifold (Avalanche)', eo: 'None', category: 'Intake Manifold', years: '—', engines: '—', status: 'illegal', notes: 'Same as Silverado — no CARB-legal aftermarket manifolds for EFI trucks', price: '—', buyLinks: [], vehicle: 'Chevrolet Avalanche' },
  { id: 'aval-maf-jet', brand: 'Jet Performance', product: 'Powr-Flo MAF Sensor (Avalanche)', eo: 'D-234-11 / D-234-13', category: 'MAF Sensor', years: '2007–2013', engines: '5.3L / 6.0L', status: 'legal', notes: '50-state legal; same as Silverado fitment', price: '$100–$180', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+powr-flo+maf+avalanche'}], vehicle: 'Chevrolet Avalanche' },

  // ══════════════════════════════════════════════════════════════
  // GAP FILL — F-150 (Additional Intake Manifold, TB Spacer details)
  // ══════════════════════════════════════════════════════════════
  { id: 'f150-manifold-no', brand: 'All Brands', product: 'Performance Intake Manifold (F-150)', eo: 'None', category: 'Intake Manifold', years: '—', engines: '—', status: 'illegal', notes: 'No CARB-legal aftermarket intake manifold for modern F-150', price: '—', buyLinks: [], vehicle: 'Ford F-150' },
  { id: 'f150-maf-jet', brand: 'Jet Performance', product: 'Powr-Flo MAF Sensor (F-150)', eo: 'D-234-11 / D-234-13', category: 'MAF Sensor', years: 'Various', engines: '3.5L EB / 5.0L', status: 'legal', notes: '50-state legal; verify specific P/N for your year', price: '$100–$180', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+powr-flo+maf+f-150'},{name:'Amazon',url:'https://www.amazon.com/s?k=jet+performance+maf+f-150'}], vehicle: 'Ford F-150' },

  // ══════════════════════════════════════════════════════════════
  // GAP FILL — COLORADO (Additional)
  // ══════════════════════════════════════════════════════════════
  { id: 'colo-manifold-no', brand: 'All Brands', product: 'Performance Intake Manifold (Colorado)', eo: 'None', category: 'Intake Manifold', years: '—', engines: '—', status: 'illegal', notes: 'No CARB-legal aftermarket intake manifold', price: '—', buyLinks: [], vehicle: 'Chevrolet Colorado' },
  { id: 'colo-maf-jet', brand: 'Jet Performance', product: 'Powr-Flo MAF Sensor (Colorado/Canyon)', eo: 'D-234-11 / D-234-13', category: 'MAF Sensor', years: 'Various', engines: '3.6L V6', status: 'legal', notes: '50-state legal; verify specific P/N', price: '$100–$180', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+powr-flo+maf+colorado'}], vehicle: 'Chevrolet Colorado' },

  // ══════════════════════════════════════════════════════════════
  // GAP FILL — RANGER (Additional)
  // ══════════════════════════════════════════════════════════════
  { id: 'ranger-manifold-no', brand: 'All Brands', product: 'Performance Intake Manifold (Ranger)', eo: 'None', category: 'Intake Manifold', years: '—', engines: '—', status: 'illegal', notes: 'No CARB-legal aftermarket intake manifold', price: '—', buyLinks: [], vehicle: 'Ford Ranger' },
  { id: 'ranger-maf-jet', brand: 'Jet Performance', product: 'Powr-Flo MAF Sensor (Ranger)', eo: 'D-234-11 / D-234-13', category: 'MAF Sensor', years: 'Various', engines: '2.3L EcoBoost', status: 'legal', notes: '50-state legal; verify specific P/N', price: '$100–$180', buyLinks: [{name:'Summit Racing',url:'https://www.summitracing.com/search?query=jet+powr-flo+maf+ranger'}], vehicle: 'Ford Ranger' },
];

// ── 2. VEHICLE CONFIGURATIONS ────────────────────────────────
const VEHICLE_YEARS = [];
for (let y = 2002; y <= 2023; y++) VEHICLE_YEARS.push(y);

const VEHICLE_MODELS = [
  // GM Full-Size
  'Chevrolet Silverado 1500',
  'Chevrolet Silverado 2500HD',
  'Chevrolet Silverado 3500HD',
  'Chevrolet Avalanche',
  'GMC Sierra 1500',
  'GMC Sierra 2500HD',
  'GMC Sierra 3500HD',
  // GM Midsize
  'Chevrolet Colorado',
  'GMC Canyon',
  // Ford
  'Ford F-150',
  'Ford Ranger',
  // Toyota
  'Toyota Tundra',
  'Toyota Tacoma',
];

const VEHICLE_ENGINES = [
  // GM
  '4.3L V6', '4.8L V8', '5.3L V8', '6.0L V8', '6.2L V8', '6.6L Duramax Diesel', '8.1L V8',
  '2.5L I4', '2.8L Duramax Diesel', '2.9L I4', '3.6L V6', '3.7L I5',
  // Ford
  '2.3L EcoBoost', '2.7L EcoBoost', '3.3L V6', '3.5L EcoBoost', '3.5L V6', '5.0L Coyote V8',
  // Toyota
  '2.7L I4', '3.5L V6 (Toyota)', '4.0L V6', '4.6L V8', '5.7L V8',
];

const EMISSIONS_TYPES = ['California (CARB)', 'Federal', '50-State'];

const BAR_STATIONS = [
  { name: 'BAR Referee — Sacramento', address: '3737 Main St, Suite 500, Sacramento, CA 95838', phone: '(916) 403-8560', area: 'Northern CA' },
  { name: 'BAR Referee — San Jose', address: '100 Paseo De San Antonio, San Jose, CA 95113', phone: '(408) 277-1420', area: 'Bay Area' },
  { name: 'BAR Referee — Oakland', address: '1515 Clay St, Oakland, CA 94612', phone: '(510) 622-4000', area: 'Bay Area' },
  { name: 'BAR Referee — Fresno', address: '2550 Mariposa Mall, Fresno, CA 93721', phone: '(559) 445-5001', area: 'Central Valley' },
  { name: 'BAR Referee — Los Angeles', address: '3580 Wilshire Blvd, Los Angeles, CA 90010', phone: '(213) 736-3466', area: 'SoCal' },
  { name: 'BAR Referee — Riverside', address: '3737 Main St, Riverside, CA 92501', phone: '(951) 782-4220', area: 'Inland Empire' },
  { name: 'BAR Referee — San Bernardino', address: '464 W 4th St, San Bernardino, CA 92401', phone: '(909) 383-4700', area: 'Inland Empire' },
  { name: 'BAR Referee — San Diego', address: '7575 Metropolitan Dr, San Diego, CA 92108', phone: '(619) 767-2020', area: 'SoCal' },
  { name: 'BAR Referee — Santa Rosa', address: '50 D Street, Suite 200, Santa Rosa, CA 95404', phone: '(707) 576-2200', area: 'North Bay' },
  { name: 'BAR Referee — Bakersfield', address: '4800 Enterprise Way, Bakersfield, CA 93309', phone: '(661) 395-2780', area: 'Central Valley' },
];

const SECTION_177_STATES = [
  { state: 'California', abbr: 'CA', adopted: 'Origin', notes: 'CARB origin state — all aftermarket parts need EO' },
  { state: 'Colorado', abbr: 'CO', adopted: '2022', notes: 'Advanced Clean Cars II adopted' },
  { state: 'Connecticut', abbr: 'CT', adopted: '2004', notes: 'Full CARB adoption' },
  { state: 'Delaware', abbr: 'DE', adopted: '2014', notes: 'CARB LEV standards' },
  { state: 'Maine', abbr: 'ME', adopted: '2005', notes: 'Full CARB adoption' },
  { state: 'Maryland', abbr: 'MD', adopted: '2007', notes: 'Full CARB adoption' },
  { state: 'Massachusetts', abbr: 'MA', adopted: '2006', notes: 'Full CARB adoption' },
  { state: 'Minnesota', abbr: 'MN', adopted: '2021', notes: 'Clean Cars Minnesota' },
  { state: 'Nevada', abbr: 'NV', adopted: '2023', notes: 'Advanced Clean Cars adopted' },
  { state: 'New Jersey', abbr: 'NJ', adopted: '2006', notes: 'Full CARB adoption' },
  { state: 'New Mexico', abbr: 'NM', adopted: '2022', notes: 'Clean Cars rule' },
  { state: 'New York', abbr: 'NY', adopted: '1993', notes: 'One of earliest adopters' },
  { state: 'Oregon', abbr: 'OR', adopted: '2006', notes: 'Full CARB adoption' },
  { state: 'Pennsylvania', abbr: 'PA', adopted: '2006', notes: 'Full CARB adoption' },
  { state: 'Rhode Island', abbr: 'RI', adopted: '2006', notes: 'Full CARB adoption' },
  { state: 'Vermont', abbr: 'VT', adopted: '2000', notes: 'Full CARB adoption' },
  { state: 'Virginia', abbr: 'VA', adopted: '2021', notes: 'Clean Cars Virginia' },
  { state: 'Washington', abbr: 'WA', adopted: '2006', notes: 'Full CARB adoption' },
  { state: 'Washington D.C.', abbr: 'DC', adopted: '2009', notes: 'Full CARB adoption' },
];

// ── STATE MANAGEMENT ──
const STATE = {
  vehicle: { year: '', model: '', engine: '', emissions: '', vin: '', plate: '', efn: '' },
  owner: { name: '', address: '', city: '', state: 'CA', zip: '', phone: '', email: '' },
  installedParts: [],
  savedVehicles: [],
  searchQuery: '',
  activeCategory: 'All',
  activeVehicleFilter: 'All',
  knowledgeView: 'az',
};
const CATEGORIES = [...new Set(PARTS_DATABASE.map(function(p) { return p.category; }))];

document.addEventListener('DOMContentLoaded', function() {
  try {
    loadSavedData();
    populateVehicleDropdowns();
    renderGarage();
    loadSmogDate();
    showToast('Welcome to Showgone!', 'success');
  } catch (e) {
    console.error('Init error:', e);
  }
});

function renderGarage() {
  var savedList = document.getElementById('saved-vehicles-list');
  if (savedList) {
    savedList.innerHTML = STATE.savedVehicles.map(function(v, i) {
      return '<div class="saved-vehicle-card"><strong>' + v.year + ' ' + v.model + '</strong><br>' + v.engine + '<br><button class="btn btn-sm" onclick="loadSavedVehicle(' + i + ')">Load</button></div>';
    }).join('');
  }

  var installedList = document.getElementById('installed-parts-list');
  if (installedList) {
    installedList.innerHTML = STATE.installedParts.map(function(p, i) {
      return '<div class="installed-part-card"><strong>' + p.brand + '</strong> - ' + p.product + '<br><span class="badge-eo">EO: ' + p.eo + '</span> ' + renderStatusBadge(p.status) + '<br><button class="btn btn-sm btn-danger" onclick="removeInstalledPart(' + i + ')">Remove</button></div>';
    }).join('');
  }

  var countBadge = document.getElementById('parts-count-badge');
  if (countBadge) {
    countBadge.textContent = STATE.installedParts.length;
  }
}

function populateVehicleDropdowns() {
  var yrSel = document.getElementById('vehicle-year');
  if (yrSel) {
    yrSel.innerHTML = '<option value="">Select Year</option>' + VEHICLE_YEARS.map(function(y) { return '<option value="' + y + '">' + y + '</option>'; }).join('');
    yrSel.value = STATE.vehicle.year || '';
    yrSel.onchange = function(e) { STATE.vehicle.year = e.target.value; updateVBCard(); };
  }
  
  var modSel = document.getElementById('vehicle-model');
  if (modSel) {
    modSel.innerHTML = '<option value="">Select Model</option>' + VEHICLE_MODELS.map(function(m) { return '<option value="' + m + '">' + m + '</option>'; }).join('');
    modSel.value = STATE.vehicle.model || '';
    modSel.onchange = function(e) { STATE.vehicle.model = e.target.value; updateVBCard(); };
  }
  
  var engSel = document.getElementById('vehicle-engine');
  if (engSel) {
    engSel.innerHTML = '<option value="">Select Engine</option>' + VEHICLE_ENGINES.map(function(e) { return '<option value="' + e + '">' + e + '</option>'; }).join('');
    engSel.value = STATE.vehicle.engine || '';
    engSel.onchange = function(e) { STATE.vehicle.engine = e.target.value; updateVBCard(); };
  }
  
  updateVBCard();
}

// ── 3D Vehicle Profile Card ─────────────────────────────────
function updateVBCard() {
  var v = STATE.vehicle;
  var plate = document.getElementById('vehicle-plate');
  var vin = document.getElementById('vehicle-vin');
  var efn = document.getElementById('vehicle-efn');
  
  // Update vehicle name
  var nameEl = document.getElementById('vb-vehicle-name');
  if (nameEl) {
    if (v.year && v.model) {
      nameEl.textContent = v.year + ' ' + v.model;
    } else if (v.model) {
      nameEl.textContent = v.model;
    } else {
      nameEl.textContent = 'Select Your Vehicle';
    }
  }
  
  // Update engine
  var engEl = document.getElementById('vb-vehicle-engine');
  if (engEl) engEl.textContent = v.engine || '';
  
  // Update truck image based on make
  var iconEl = document.getElementById('vb-truck-icon');
  if (iconEl) {
    var imgMap = {
      'Silverado': 'img/silverado.png', 'Sierra': 'img/silverado.png',
      'F-150': 'img/f150.png', 'Tundra': 'img/tundra.png',
      'Tacoma': 'img/tacoma.png', 'Colorado': 'img/silverado.png',
      'Canyon': 'img/silverado.png', 'Ranger': 'img/f150.png',
      'Avalanche': 'img/silverado.png'
    };
    var imgSrc = '';
    if (v.model) {
      for (var mk in imgMap) {
        if (v.model.indexOf(mk) !== -1) { imgSrc = imgMap[mk]; break; }
      }
    }
    if (imgSrc) {
      iconEl.innerHTML = '<img src="' + imgSrc + '" alt="' + (v.model || 'Vehicle') + '" class="vb-truck-img">';
    } else {
      iconEl.innerHTML = '🚛';
    }
  }
  
  // Update spec grid
  var specMap = {
    'vb-spec-year': v.year || '—',
    'vb-spec-make': v.model || '—',
    'vb-spec-engine': v.engine || '—',
    'vb-spec-plate': (plate ? plate.value : '') || '—',
    'vb-spec-vin': (vin ? vin.value : '') || '—',
    'vb-spec-efn': (efn ? efn.value : '') || '—'
  };
  
  for (var key in specMap) {
    var el = document.getElementById(key);
    if (el) {
      var valEl = el.querySelector('.vb-spec-val');
      if (valEl) {
        valEl.textContent = specMap[key];
        if (specMap[key] !== '—') {
          el.classList.add('filled');
        } else {
          el.classList.remove('filled');
        }
      }
    }
  }
  
  // Calculate progress
  var fields = [v.year, v.model, v.engine, plate ? plate.value : '', vin ? vin.value : '', efn ? efn.value : ''];
  var filled = 0;
  for (var i = 0; i < fields.length; i++) { if (fields[i]) filled++; }
  var pct = Math.round((filled / fields.length) * 100);
  
  // Update progress ring
  var circle = document.getElementById('vb-progress-circle');
  if (circle) {
    var circumference = 106.8;
    circle.setAttribute('stroke-dashoffset', String(circumference - (circumference * pct / 100)));
    if (pct === 100) circle.setAttribute('stroke', '#10b981');
    else circle.setAttribute('stroke', '#f59e0b');
  }
  var pctEl = document.getElementById('vb-progress-pct');
  if (pctEl) pctEl.textContent = pct + '%';
  
  // Update card glow based on completion
  var card = document.getElementById('vb-card');
  if (card) {
    if (pct === 100) card.classList.add('complete');
    else card.classList.remove('complete');
  }
  
  // Update parts count on card
  var partsNum = document.getElementById('vb-parts-num');
  if (partsNum) partsNum.textContent = STATE.installedParts.length;
  
  // Update smog mini-status
  var smogMini = document.getElementById('vb-smog-mini');
  var smogDate = document.getElementById('smog-reg-date');
  if (smogMini && smogDate && smogDate.value) {
    var diff = Math.ceil((new Date(smogDate.value) - new Date()) / 86400000);
    if (diff > 60) smogMini.innerHTML = '<span style="color:#10b981;">✅ ' + diff + ' days</span>';
    else if (diff > 0) smogMini.innerHTML = '<span style="color:#f59e0b;">⚠️ ' + diff + ' days</span>';
    else smogMini.innerHTML = '<span style="color:#ef4444;">❌ Overdue!</span>';
  }
}

function saveCurrentVehicle() {
  STATE.savedVehicles.push(JSON.parse(JSON.stringify(STATE.vehicle)));
  saveData();
  renderGarage();
  showToast('Vehicle saved!', 'success');
}

function loadSavedVehicle(index) {
  STATE.vehicle = JSON.parse(JSON.stringify(STATE.savedVehicles[index]));
  populateVehicleDropdowns();
  renderMarketplace();
  showToast('Vehicle loaded', 'info');
}

function renderMarketplace() {
  // Populate vehicle dropdown
  var vSelect = document.getElementById('mp-vehicle-filter');
  if (vSelect && vSelect.options.length <= 1) {
    var vehicles = ['All', 'Silverado/Sierra', 'F-150', 'Tundra', 'Tacoma', 'Colorado/Canyon', 'Ranger', 'Avalanche'];
    vSelect.innerHTML = vehicles.map(function(v) {
      return '<option value="' + v + '"' + (STATE.activeVehicleFilter === v ? ' selected' : '') + '>' + (v === 'All' ? 'All Vehicles' : v) + '</option>';
    }).join('');
  }

  // Update vehicle label
  var lbl = document.getElementById('marketplace-vehicle-label');
  if (lbl) {
    var vName = STATE.vehicle.year && STATE.vehicle.model ? STATE.vehicle.year + ' ' + STATE.vehicle.model : 'your vehicle';
    lbl.textContent = vName;
  }

  // Show categories step
  mpRenderCategories();
}

function mpGetFilteredParts(categoryFilter) {
  var legalToggle = document.getElementById('legal-only-toggle');
  var showLegalOnly = legalToggle ? legalToggle.checked : false;
  var query = (document.getElementById('marketplace-search') ? document.getElementById('marketplace-search').value : '').toLowerCase();

  return PARTS_DATABASE.filter(function(p) {
    if (categoryFilter && categoryFilter !== 'All' && p.category !== categoryFilter) return false;
    if (STATE.activeVehicleFilter !== 'All') {
      var vf = STATE.activeVehicleFilter;
      if (vf === 'Silverado/Sierra') {
        if (p.vehicle && p.vehicle.indexOf('Silverado') === -1 && p.vehicle.indexOf('Sierra') === -1) return false;
        // Parts with no vehicle field are Silverado/Sierra by default
      } else if (vf === 'Colorado/Canyon') {
        if (!p.vehicle || (p.vehicle.indexOf('Colorado') === -1 && p.vehicle.indexOf('Canyon') === -1)) return false;
      } else {
        if (!p.vehicle && vf !== 'Silverado/Sierra') return false;
        if (p.vehicle && p.vehicle.indexOf(vf) === -1) return false;
      }
    }
    if (showLegalOnly && p.status !== 'legal' && p.status !== 'exempt') return false;
    if (query && p.brand.toLowerCase().indexOf(query) === -1 && p.product.toLowerCase().indexOf(query) === -1 && p.eo.toLowerCase().indexOf(query) === -1) return false;
    return true;
  });
}

function mpRenderCategories() {
  var cGrid = document.getElementById('category-grid');
  if (!cGrid) return;

  var catImages = {
    'Cold Air Intake': 'img/cold_air_intake.png',
    'Cat-Back Exhaust': 'img/exhaust.png',
    'Shorty Headers': 'img/headers.png',
    'Supercharger': 'img/supercharger.png',
    'Tuner/Programmer': 'img/tuner.png',
    'Tuner': 'img/tuner.png',
    'Throttle Controller': 'img/throttle_controller.png',
    'Catalytic Converter': 'img/catalytic_converter.png',
    'Throttle Body Spacer': 'img/throttle_body.png',
    'Throttle Body': 'img/throttle_body.png',
    'AFM/DOD Delete': 'img/tuner.png',
    'MAF Sensor': 'img/tuner.png',
    'Intake Manifold': 'img/cold_air_intake.png',
    'Headers': 'img/headers.png'
  };

  var catCounts = {};
  CATEGORIES.forEach(function(cat) {
    catCounts[cat] = mpGetFilteredParts(cat).length;
  });

  // Sort by count descending so most-populated categories appear first
  var sortedCats = CATEGORIES.slice().sort(function(a, b) { return catCounts[b] - catCounts[a]; });

  cGrid.innerHTML = sortedCats.map(function(cat) {
    var count = catCounts[cat];
    if (count === 0) return '';
    var imgSrc = catImages[cat] || 'img/cold_air_intake.png';
    return '<div class="mp-cat-card" onclick="mpShowCategory(\'' + cat.replace(/'/g, "\\'") + '\')">' +
      '<div class="mp-cat-thumb"><img src="' + imgSrc + '" alt="' + cat + '"></div>' +
      '<div class="mp-cat-info"><span class="mp-cat-name">' + cat + '</span>' +
      '<span class="mp-cat-count">' + count + ' part' + (count !== 1 ? 's' : '') + '</span></div>' +
      '<span class="mp-cat-arrow">→</span></div>';
  }).join('');

  var totalParts = mpGetFilteredParts().length;
  var countEl = document.getElementById('mp-results-count');
  if (countEl) countEl.textContent = totalParts + ' parts available' + (STATE.activeVehicleFilter !== 'All' ? ' for ' + STATE.activeVehicleFilter : '');
}

function mpShowCategory(cat) {
  STATE.activeCategory = cat;
  document.getElementById('mp-step-categories').style.display = 'none';
  document.getElementById('mp-step-parts').style.display = 'block';

  var titleEl = document.getElementById('mp-category-title');
  var icons = { 'Cold Air Intake': '🌬️', 'Cat-Back Exhaust': '💨', 'Shorty Headers': '🔥', 'Supercharger': '⚡', 'Tuner/Programmer': '💻', 'Throttle Controller': '🎛️', 'Catalytic Converter': '♻️', 'Throttle Body Spacer': '🔩', 'AFM/DOD Delete': '🔧', 'MAF Sensor': '📡', 'Headers': '🔥' };
  if (titleEl) titleEl.textContent = (icons[cat] || '🔧') + ' ' + cat;

  mpRenderParts();
}

function mpRenderParts() {
  var pGrid = document.getElementById('products-grid');
  if (!pGrid) return;

  var parts = mpGetFilteredParts(STATE.activeCategory);
  var countEl = document.getElementById('mp-parts-count');
  if (countEl) countEl.textContent = parts.length;

  if (parts.length === 0) {
    pGrid.innerHTML = '<div class="empty-state" style="grid-column:1/-1;text-align:center;padding:3rem;">No parts found matching your filters.</div>';
    return;
  }

  var catImgs = {
    'Cold Air Intake': 'img/cold_air_intake.png',
    'Shorty Headers': 'img/headers.png',
    'Supercharger': 'img/supercharger.png',
    'Tuner/Programmer': 'img/tuner.png',
    'Tuner': 'img/tuner.png',
    'Throttle Controller': 'img/throttle_controller.png',
    'Catalytic Converter': 'img/catalytic_converter.png',
    'Cat-Back Exhaust': 'img/exhaust.png',
    'Throttle Body Spacer': 'img/throttle_body.png',
    'Throttle Body': 'img/throttle_body.png',
    'AFM/DOD Delete': 'img/tuner.png',
    'Headers': 'img/headers.png',
    'Intake Manifold': 'img/cold_air_intake.png',
    'MAF Sensor': 'img/tuner.png'
  };

  pGrid.innerHTML = parts.map(function(p) {
    var buyBtns = (p.buyLinks || []).map(function(l) {
      return '<a href="' + l.url + '" class="mp-buy-btn" target="_blank" rel="noopener">' + l.name + ' ↗</a>';
    }).join('');

    var statusClass = p.status === 'legal' ? 'badge-legal' : (p.status === 'illegal' ? 'badge-illegal' : 'badge-exempt');
    var statusText = p.status === 'legal' ? '✅ CARB Legal' : (p.status === 'illegal' ? '❌ Not Legal' : '🔵 Exempt');
    var notesHtml = p.notes ? '<p class="mp-part-notes">💡 ' + p.notes + '</p>' : '';
    var vehicleTag = p.vehicle ? '<span class="mp-part-vehicle">' + p.vehicle + '</span>' : '';
    var partImg = catImgs[p.category] || 'img/cold_air_intake.png';

    return '<div class="mp-part-card">' +
      '<div class="mp-part-img"><img src="' + partImg + '" alt="' + p.product + '"></div>' +
      '<div class="mp-part-body">' +
      '<div class="mp-part-top">' +
        '<div class="mp-part-brand">' + p.brand + '</div>' +
        '<span class="' + statusClass + '">' + statusText + '</span>' +
      '</div>' +
      '<h4 class="mp-part-name">' + p.product + '</h4>' +
      '<div class="mp-part-eo">EO: ' + p.eo + '</div>' +
      '<div class="mp-part-specs">' +
        '<span>📅 ' + p.years + '</span>' +
        '<span>🔧 ' + p.engines + '</span>' +
        vehicleTag +
      '</div>' +
      notesHtml +
      '<div class="mp-part-price">' + p.price + '</div>' +
      '<div class="mp-part-actions">' +
        '<div class="mp-buy-links">' + buyBtns + '</div>' +
        '<button class="btn btn-primary btn-sm mp-add-btn" onclick="addPartToInstalled(\'' + p.id + '\')">+ Add to Garage</button>' +
      '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function mpBackToCategories() {
  STATE.activeCategory = 'All';
  document.getElementById('mp-step-categories').style.display = 'block';
  document.getElementById('mp-step-parts').style.display = 'none';
  mpRenderCategories();
}

function mpSetVehicle(val) {
  STATE.activeVehicleFilter = val;
  // If viewing parts, refresh; if viewing categories, refresh categories
  if (document.getElementById('mp-step-parts').style.display !== 'none') {
    mpRenderParts();
  } else {
    mpRenderCategories();
  }
}

function mpSearch() {
  if (document.getElementById('mp-step-parts').style.display !== 'none') {
    mpRenderParts();
  } else {
    mpRenderCategories();
  }
}

function mpRefresh() {
  mpSearch();
}

function addPartToInstalled(partId) {
  var part = PARTS_DATABASE.find(function(p) { return p.id === partId; });
  if (part) {
    STATE.installedParts.push(JSON.parse(JSON.stringify(part)));
    saveData();
    showToast('Part added to installed list!', 'success');
  }
}

function removeInstalledPart(index) {
  STATE.installedParts.splice(index, 1);
  saveData();
  renderGarage();
  showToast('Part removed', 'info');
}

function renderComplianceTab(tabName) {
  var content = document.getElementById('compliance-content');
  if (!content) return;

  var v = STATE.vehicle;
  var hasVehicle = v.year && v.model;
  var vehicleName = hasVehicle ? (v.year + ' ' + v.model + (v.engine ? ' (' + v.engine + ')' : '')) : '';
  var parts = STATE.installedParts || [];

  // No vehicle saved — show prompt
  if (!hasVehicle) {
    content.innerHTML =
      '<div class="compliance-empty">' +
        '<div class="compliance-empty-icon">🚛</div>' +
        '<h3>No Vehicle Profile Found</h3>' +
        '<p>Create and save a vehicle in <strong>My Garage</strong> first, then come back here to prepare compliance documents.</p>' +
        '<button class="btn btn-primary" onclick="navigateTo(\'garage\')">→ Go to My Garage</button>' +
      '</div>';
    return;
  }

  // ── Vehicle summary card (shown on all tabs) ──
  var vehicleCard =
    '<div class="comp-vehicle-card">' +
      '<div class="comp-vehicle-info">' +
        '<h3>' + vehicleName + '</h3>' +
        '<div class="comp-vehicle-meta">' +
          (v.vin ? '<span>VIN: ' + v.vin + '</span>' : '<span class="comp-missing">⚠️ No VIN</span>') +
          (v.plate ? '<span>Plate: ' + v.plate + '</span>' : '') +
          (v.efn ? '<span>EFN: ' + v.efn + '</span>' : '') +
          (v.emissions ? '<span>Emissions: ' + v.emissions + '</span>' : '') +
        '</div>' +
      '</div>' +
      '<div class="comp-parts-badge">' + parts.length + ' installed mod' + (parts.length !== 1 ? 's' : '') + '</div>' +
    '</div>';

  // ── Build parts table (reused across tabs) ──
  var partsTable = '';
  if (parts.length > 0) {
    partsTable =
      '<table class="comp-table">' +
      '<thead><tr><th>Part</th><th>Brand</th><th>EO #</th><th>Status</th><th>Category</th></tr></thead>' +
      '<tbody>' +
      parts.map(function(pid) {
        var p = PARTS_DATABASE.find(function(x) { return x.id === pid; });
        if (!p) return '';
        var statusClass = p.status === 'legal' ? 'badge-legal' : (p.status === 'illegal' ? 'badge-illegal' : 'badge-exempt');
        var statusText = p.status === 'legal' ? '✅ Legal' : (p.status === 'illegal' ? '❌ Illegal' : '🔵 Exempt');
        return '<tr>' +
          '<td>' + p.product + '</td>' +
          '<td>' + p.brand + '</td>' +
          '<td><strong>' + p.eo + '</strong></td>' +
          '<td><span class="' + statusClass + '">' + statusText + '</span></td>' +
          '<td>' + p.category + '</td>' +
        '</tr>';
      }).join('') +
      '</tbody></table>';
  } else {
    partsTable = '<p class="comp-note">No modifications added yet. Add parts from the <strong>Marketplace</strong>.</p>';
  }

  // ── TAB: Smog Prep ──
  if (tabName === 'smog') {
    var illegalParts = parts.filter(function(pid) {
      var p = PARTS_DATABASE.find(function(x) { return x.id === pid; });
      return p && p.status === 'illegal';
    });
    var legalParts = parts.filter(function(pid) {
      var p = PARTS_DATABASE.find(function(x) { return x.id === pid; });
      return p && p.status === 'legal';
    });
    var exemptParts = parts.filter(function(pid) {
      var p = PARTS_DATABASE.find(function(x) { return x.id === pid; });
      return p && p.status === 'exempt';
    });

    var readiness = (illegalParts.length === 0) ? 'ready' : 'not-ready';
    var readinessIcon = readiness === 'ready' ? '✅' : '⚠️';
    var readinessText = readiness === 'ready' ? 'Your vehicle appears SMOG READY' : 'Action needed — illegal parts detected';
    var readinessClass = readiness === 'ready' ? 'comp-status-pass' : 'comp-status-fail';

    content.innerHTML = vehicleCard +
      '<div class="comp-section">' +
        '<div class="' + readinessClass + '">' +
          '<span class="comp-status-icon">' + readinessIcon + '</span>' +
          '<div>' +
            '<h3>' + readinessText + '</h3>' +
            '<p>' + legalParts.length + ' CARB legal · ' + exemptParts.length + ' exempt · ' + illegalParts.length + ' illegal</p>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="comp-section">' +
        '<h3>📋 Pre-Smog Checklist</h3>' +
        '<div class="comp-checklist">' +
          '<label class="comp-check"><input type="checkbox"> Check Engine Light (MIL) is OFF</label>' +
          '<label class="comp-check"><input type="checkbox"> All EO stickers visible on parts</label>' +
          '<label class="comp-check"><input type="checkbox"> Gas cap seals properly (no leaks)</label>' +
          '<label class="comp-check"><input type="checkbox"> Vehicle has been driven 50+ miles since any battery disconnect</label>' +
          '<label class="comp-check"><input type="checkbox"> All OBD-II monitors are "Ready"</label>' +
          '<label class="comp-check"><input type="checkbox"> Engine oil and coolant at proper levels</label>' +
          '<label class="comp-check"><input type="checkbox"> No visible exhaust smoke</label>' +
          '<label class="comp-check"><input type="checkbox"> Catalytic converter is present and intact</label>' +
          (illegalParts.length > 0 ? '<label class="comp-check comp-check-warn"><input type="checkbox"> ⚠️ Remove or replace ' + illegalParts.length + ' illegal part(s) before smog</label>' : '') +
        '</div>' +
      '</div>' +

      '<div class="comp-section">' +
        '<h3>🔧 Installed Modifications</h3>' +
        partsTable +
      '</div>' +

      '<div class="comp-section">' +
        '<h3>⏰ Smog Due Date</h3>' +
        '<div class="comp-smog-date">' +
          '<input type="date" id="comp-smog-date-input" onchange="saveSmogDate(this.value)" value="' + (STATE.smogDueDate || '') + '">' +
          '<div id="comp-smog-countdown"></div>' +
        '</div>' +
      '</div>' +

      '<div class="comp-actions">' +
        '<button class="btn btn-primary" onclick="window.print()">🖨️ Print Smog Prep Sheet</button>' +
      '</div>';

    // Update smog countdown
    if (STATE.smogDueDate) {
      var diff = new Date(STATE.smogDueDate) - new Date();
      var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      var cdEl = document.getElementById('comp-smog-countdown');
      if (cdEl) {
        if (days > 30) {
          cdEl.innerHTML = '<span class="badge-legal">' + days + ' days until smog due</span>';
        } else if (days > 0) {
          cdEl.innerHTML = '<span class="badge-exempt">⚠️ ' + days + ' days — schedule soon!</span>';
        } else {
          cdEl.innerHTML = '<span class="badge-illegal">❌ OVERDUE by ' + Math.abs(days) + ' days!</span>';
        }
      }
    }

  // ── TAB: Mod Declaration ──
  } else if (tabName === 'mod-dec') {
    content.innerHTML = vehicleCard +
      '<div class="comp-section">' +
        '<h3>📄 Vehicle Modification Declaration</h3>' +
        '<p class="comp-note">Present this to your smog technician to show all aftermarket parts and their CARB EO numbers.</p>' +
      '</div>' +

      '<div class="comp-form-section">' +
        '<div class="comp-form-grid">' +
          '<div class="comp-field"><label>Owner Name</label><input type="text" id="comp-owner-name" value="' + (STATE.owner.name || '') + '" onchange="STATE.owner.name=this.value;saveData()"></div>' +
          '<div class="comp-field"><label>Phone</label><input type="text" id="comp-owner-phone" value="' + (STATE.owner.phone || '') + '" onchange="STATE.owner.phone=this.value;saveData()"></div>' +
          '<div class="comp-field"><label>Address</label><input type="text" id="comp-owner-addr" value="' + (STATE.owner.address || '') + '" onchange="STATE.owner.address=this.value;saveData()"></div>' +
          '<div class="comp-field"><label>City / State / Zip</label><input type="text" id="comp-owner-csz" value="' + (STATE.owner.city || '') + ', ' + (STATE.owner.state || 'CA') + ' ' + (STATE.owner.zip || '') + '"></div>' +
        '</div>' +
      '</div>' +

      '<div class="comp-section">' +
        '<h3>Vehicle Information</h3>' +
        '<div class="comp-form-grid">' +
          '<div class="comp-field"><label>Year / Make / Model</label><div class="comp-value">' + vehicleName + '</div></div>' +
          '<div class="comp-field"><label>VIN</label><div class="comp-value">' + (v.vin || 'Not entered') + '</div></div>' +
          '<div class="comp-field"><label>License Plate</label><div class="comp-value">' + (v.plate || 'Not entered') + '</div></div>' +
          '<div class="comp-field"><label>Engine Family #</label><div class="comp-value">' + (v.efn || 'Not entered') + '</div></div>' +
        '</div>' +
      '</div>' +

      '<div class="comp-section">' +
        '<h3>Declared Modifications (' + parts.length + ')</h3>' +
        partsTable +
      '</div>' +

      '<div class="comp-section">' +
        '<div class="comp-declaration">' +
          '<p>I hereby declare that the above modifications are installed on my vehicle and that all listed parts carry valid CARB Executive Orders as noted above.</p>' +
          '<div class="comp-sig-line">' +
            '<div class="comp-sig"><label>Owner Signature</label><div class="comp-sig-box"></div></div>' +
            '<div class="comp-sig"><label>Date</label><div class="comp-sig-box">' + new Date().toLocaleDateString() + '</div></div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="comp-actions">' +
        '<button class="btn btn-primary" onclick="window.print()">🖨️ Print Declaration</button>' +
      '</div>';

  // ── TAB: BAR Referee ──
  } else if (tabName === 'bar') {
    content.innerHTML = vehicleCard +
      '<div class="comp-section">' +
        '<h3>🏛️ BAR Referee Station Locator</h3>' +
        '<p class="comp-note">BAR Referee stations handle modified vehicles, out-of-state registrations, and dispute resolution. Call ahead to schedule — many require appointments.</p>' +
      '</div>' +

      '<div class="comp-section">' +
        '<h3>📋 What to Bring</h3>' +
        '<div class="comp-checklist">' +
          '<label class="comp-check"><input type="checkbox"> Vehicle registration</label>' +
          '<label class="comp-check"><input type="checkbox"> Valid ID / driver\'s license</label>' +
          '<label class="comp-check"><input type="checkbox"> All EO sticker numbers written down</label>' +
          '<label class="comp-check"><input type="checkbox"> Printout of this Modification Declaration</label>' +
          '<label class="comp-check"><input type="checkbox"> Receipts / invoices for all aftermarket parts</label>' +
          '<label class="comp-check"><input type="checkbox"> Failed smog test results (if applicable)</label>' +
        '</div>' +
      '</div>' +

      '<div class="comp-section">' +
        '<h3>📍 Referee Stations</h3>' +
        '<div class="comp-stations-grid">' +
          BAR_STATIONS.map(function(s) {
            return '<div class="comp-station-card">' +
              '<h4>' + s.name + '</h4>' +
              '<p>📍 ' + s.address + '</p>' +
              '<p>📞 <a href="tel:' + s.phone.replace(/[^0-9]/g, '') + '">' + s.phone + '</a></p>' +
              '<span class="chip">' + s.area + '</span>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>' +

      '<div class="comp-section">' +
        '<p class="comp-note">📞 BAR toll-free: <strong>1-800-952-5210</strong> · BAR Referee hotline: <strong>1-800-622-7733</strong></p>' +
      '</div>';

  // ── TAB: EO Card ──
  } else if (tabName === 'eo-card') {
    var cardParts = parts.map(function(pid) {
      return PARTS_DATABASE.find(function(x) { return x.id === pid; });
    }).filter(function(p) { return p && p.status === 'legal'; });

    content.innerHTML = vehicleCard +
      '<div class="comp-section">' +
        '<h3>💳 Printable EO Reference Card</h3>' +
        '<p class="comp-note">Keep this in your glovebox. Present to the smog technician so they can verify your EO numbers against the CARB database.</p>' +
      '</div>' +

      '<div class="comp-eo-card">' +
        '<div class="eo-card-header">' +
          '<strong>CARB EO REFERENCE — ' + vehicleName + '</strong>' +
          (v.vin ? '<br><small>VIN: ' + v.vin + '</small>' : '') +
          (v.plate ? ' · <small>Plate: ' + v.plate + '</small>' : '') +
        '</div>' +
        '<div class="eo-card-body">' +
          (cardParts.length > 0 ? cardParts.map(function(p) {
            return '<div class="eo-card-row"><span class="eo-card-part">' + p.brand + ' ' + p.product + '</span><span class="eo-card-eo">' + p.eo + '</span></div>';
          }).join('') : '<p>No CARB-legal parts installed.</p>') +
        '</div>' +
        '<div class="eo-card-footer">' +
          '<small>Verify at: ww2.arb.ca.gov/executive-orders | Generated: ' + new Date().toLocaleDateString() + '</small>' +
        '</div>' +
      '</div>' +

      '<div class="comp-actions">' +
        '<button class="btn btn-primary" onclick="window.print()">🖨️ Print Wallet Card</button>' +
      '</div>';

  // ── TAB: Export ──
  } else if (tabName === 'export') {
    content.innerHTML = vehicleCard +
      '<div class="comp-section">' +
        '<h3>📥 Export Build Summary</h3>' +
        '<p class="comp-note">Download a complete summary of your vehicle build, including all modifications, EO numbers, and compliance status.</p>' +
      '</div>' +

      '<div class="comp-export-grid">' +
        '<div class="comp-export-card" onclick="exportBuildText()">' +
          '<div class="comp-export-icon">📄</div>' +
          '<h4>Text Summary</h4>' +
          '<p>Plain text file with all details</p>' +
        '</div>' +
        '<div class="comp-export-card" onclick="window.print()">' +
          '<div class="comp-export-icon">🖨️</div>' +
          '<h4>Print All</h4>' +
          '<p>Print the current compliance view</p>' +
        '</div>' +
      '</div>' +

      '<div class="comp-section">' +
        '<h3>Full Build Summary</h3>' +
        '<div class="comp-form-grid">' +
          '<div class="comp-field"><label>Vehicle</label><div class="comp-value">' + vehicleName + '</div></div>' +
          '<div class="comp-field"><label>VIN</label><div class="comp-value">' + (v.vin || '—') + '</div></div>' +
          '<div class="comp-field"><label>Total Modifications</label><div class="comp-value">' + parts.length + '</div></div>' +
        '</div>' +
        partsTable +
      '</div>';
  }
}

// Export build as text file download
function exportBuildText() {
  var v = STATE.vehicle;
  var parts = STATE.installedParts || [];
  var lines = [
    '═══════════════════════════════════════',
    'Showgone — Vehicle Build Summary',
    '═══════════════════════════════════════',
    'Generated: ' + new Date().toLocaleString(),
    '',
    'VEHICLE: ' + v.year + ' ' + v.model,
    'ENGINE:  ' + (v.engine || '—'),
    'VIN:     ' + (v.vin || '—'),
    'PLATE:   ' + (v.plate || '—'),
    'EFN:     ' + (v.efn || '—'),
    '',
    '───────────────────────────────────────',
    'INSTALLED MODIFICATIONS (' + parts.length + ')',
    '───────────────────────────────────────'
  ];
  parts.forEach(function(pid, i) {
    var p = PARTS_DATABASE.find(function(x) { return x.id === pid; });
    if (p) {
      lines.push((i+1) + '. ' + p.brand + ' — ' + p.product);
      lines.push('   EO: ' + p.eo + ' | Status: ' + p.status.toUpperCase() + ' | Category: ' + p.category);
      lines.push('');
    }
  });
  lines.push('───────────────────────────────────────');
  lines.push('Verify EOs: https://ww2.arb.ca.gov/executive-orders');
  lines.push('BAR Referee: 1-800-622-7733');

  var blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'carb-build-summary-' + (v.model || 'vehicle').replace(/\s+/g, '-').toLowerCase() + '.txt';
  a.click();
}

const KNOWLEDGE_BASE = [
  { term: 'CARB', definition: 'California Air Resources Board', topic: 'Legal/Regulatory', related: ['EO'] },
  { term: 'EO', definition: 'Executive Order. A certification granted by CARB for aftermarket parts that meet emission standards.', topic: 'Legal/Regulatory', related: ['CARB'] },
  { term: 'VECI', definition: 'Vehicle Emission Control Information label under the hood.', topic: 'Vehicle Systems', related: ['EFN'] },
  { term: 'EFN', definition: 'Engine Family Number, found on the VECI label.', topic: 'Vehicle Systems', related: ['VECI'] },
  { term: 'BAR', definition: 'Bureau of Automotive Repair. Administers the Smog Check Program.', topic: 'Legal/Regulatory', related: ['Referee', 'Smog Check'] },
  { term: 'ASM', definition: 'Acceleration Simulation Mode. Tailpipe test on a dynamometer.', topic: 'Test Types', related: ['Smog Check'] },
  { term: 'OBD-II', definition: 'On-Board Diagnostics II. Standard on 1996+ vehicles.', topic: 'Vehicle Systems', related: ['OIS'] },
  { term: 'TSI', definition: 'Two-Speed Idle test. Tailpipe test at idle and 2500 RPM.', topic: 'Test Types', related: ['Smog Check'] },
  { term: 'OIS', definition: 'OBD Inspection System. Computer-based test for 2000+ vehicles.', topic: 'Test Types', related: ['OBD-II', 'BAR-OIS'] },
  { term: 'BAR-97', definition: 'Older smog check equipment used for ASM and TSI tailpipe tests.', topic: 'Test Types', related: ['ASM', 'TSI'] },
  { term: 'BAR-OIS', definition: 'Modern web-based smog check equipment for OBD-II tests.', topic: 'Test Types', related: ['OIS'] },
  { term: 'DPF', definition: 'Diesel Particulate Filter.', topic: 'Vehicle Systems', related: ['DEF', 'SCR'] },
  { term: 'DEF', definition: 'Diesel Exhaust Fluid. Used in SCR systems.', topic: 'Vehicle Systems', related: ['DPF', 'SCR'] },
  { term: 'SCR', definition: 'Selective Catalytic Reduction. Reduces NOx emissions.', topic: 'Vehicle Systems', related: ['DEF', 'NOx'] },
  { term: 'NOx', definition: 'Nitrogen Oxides. Smog-forming pollutant.', topic: 'Emissions Standards', related: ['HC', 'CO'] },
  { term: 'HC', definition: 'Hydrocarbons. Unburned fuel.', topic: 'Emissions Standards', related: ['NOx', 'CO'] },
  { term: 'CO', definition: 'Carbon Monoxide.', topic: 'Emissions Standards', related: ['NOx', 'HC'] },
  { term: 'PM', definition: 'Particulate Matter.', topic: 'Emissions Standards', related: ['DPF'] },
  { term: 'CAA', definition: 'Clean Air Act.', topic: 'Legal/Regulatory', related: ['EPA'] },
  { term: 'EPA', definition: 'Environmental Protection Agency.', topic: 'Legal/Regulatory', related: ['CAA'] },
  { term: 'Section 177', definition: 'States that have adopted CARB emission standards.', topic: 'Legal/Regulatory', related: ['CARB'] },
  { term: 'AB 1824', definition: 'Assembly Bill 1824 regarding modified exhaust noise.', topic: 'Legal/Regulatory', related: ['CVC 27156'] },
  { term: 'CVC 27156', definition: 'California Vehicle Code 27156 prohibiting modifications to emissions systems.', topic: 'Legal/Regulatory', related: ['CARB', 'EO'] },
  { term: 'SULEV', definition: 'Super Ultra-Low Emission Vehicle.', topic: 'Emissions Standards', related: ['ULEV', 'PZEV'] },
  { term: 'ULEV', definition: 'Ultra-Low Emission Vehicle.', topic: 'Emissions Standards', related: ['SULEV', 'LEV'] },
  { term: 'PZEV', definition: 'Partial Zero-Emission Vehicle.', topic: 'Emissions Standards', related: ['ZEV'] },
  { term: 'ZEV', definition: 'Zero-Emission Vehicle.', topic: 'Emissions Standards', related: ['PZEV'] },
  { term: 'LEV', definition: 'Low Emission Vehicle.', topic: 'Emissions Standards', related: ['ULEV'] },
  { term: 'NMOG', definition: 'Non-Methane Organic Gases.', topic: 'Emissions Standards', related: ['HC'] },
  { term: 'Referee', definition: 'State-appointed stations for resolving complex smog issues.', topic: 'Legal/Regulatory', related: ['BAR'] },
  { term: 'Smog Check', definition: 'Biennial emissions inspection.', topic: 'Test Types', related: ['BAR'] },
  { term: 'Smog Abatement', definition: 'Fee paid in lieu of first three biennial smog checks for new cars.', topic: 'Legal/Regulatory', related: ['Smog Check'] },
  { term: 'Star Station', definition: 'Smog stations meeting higher performance standards.', topic: 'Legal/Regulatory', related: ['Test Only'] },
  { term: 'Test Only', definition: 'Station authorized only to test, not repair.', topic: 'Legal/Regulatory', related: ['Star Station'] },
  { term: 'Gross Polluter', definition: 'Vehicle failing smog by a large margin.', topic: 'Legal/Regulatory', related: ['Referee'] },
  { term: 'Certificate of Compliance', definition: 'Proof of passing smog.', topic: 'Legal/Regulatory', related: ['Smog Check'] },
  { term: 'Change of Ownership', definition: 'Smog check required when selling a car.', topic: 'Legal/Regulatory', related: ['Smog Check'] },
  { term: 'Biennial', definition: 'Occurring every two years (standard smog frequency).', topic: 'Legal/Regulatory', related: ['Smog Check'] },
  { term: 'Directed', definition: 'Vehicles required to go to a STAR station.', topic: 'Legal/Regulatory', related: ['Star Station'] },
  { term: 'Initial', definition: 'First time a vehicle is smogged in California.', topic: 'Legal/Regulatory', related: ['Smog Check'] }
];

function renderKnowledgeBase(view) {
  var container = document.getElementById('knowledge-content');
  if (!container) return;
  var input = document.getElementById('knowledge-search');
  var query = input ? input.value.toLowerCase() : '';
  
  var filtered = KNOWLEDGE_BASE.filter(function(k) {
    return k.term.toLowerCase().indexOf(query) > -1 || k.definition.toLowerCase().indexOf(query) > -1;
  });

  if (view === 'az') {
    filtered.sort(function(a, b) { return a.term.localeCompare(b.term); });
    container.innerHTML = filtered.map(function(k) { 
      var relatedHtml = k.related.map(function(r) { return '<span class="chip">' + r + '</span>'; }).join(' ');
      return '<div class="kb-card"><h4>' + k.term + '</h4><p>' + k.definition + '</p><div class="related">' + relatedHtml + '</div></div>'; 
    }).join('');
  } else if (view === 'topic') {
    var byTopic = {};
    filtered.forEach(function(k) {
      byTopic[k.topic] = byTopic[k.topic] || [];
      byTopic[k.topic].push(k);
    });
    var html = '';
    for (var t in byTopic) {
      html += '<h3>' + t + '</h3>' + byTopic[t].map(function(k) { 
        var relatedHtml = k.related.map(function(r) { return '<span class="chip">' + r + '</span>'; }).join(' ');
        return '<div class="kb-card"><h4>' + k.term + '</h4><p>' + k.definition + '</p><div class="related">' + relatedHtml + '</div></div>'; 
      }).join('');
    }
    container.innerHTML = html;
  }
}

function filterKnowledge() {
  var view = STATE.knowledgeView || 'az';
  renderKnowledgeBase(view);
}

function renderStatusBadge(status) {
  if (status === 'legal') return '<span class="badge-legal">✔️</span>';
  if (status === 'illegal') return '<span class="badge-illegal">❌</span>';
  if (status === 'exempt') return '<span class="badge-exempt">➖</span>';
  return '<span>' + status + '</span>';
}

function showToast(message, type) {
  console.log('Toast [' + type + ']: ' + message);
}

function saveData() {
  localStorage.setItem('carbTool_state', JSON.stringify(STATE));
}

function loadSavedData() {
  try {
    var saved = localStorage.getItem('carbTool_state');
    if (saved) {
      var d = JSON.parse(saved);
      if (d.vehicle) Object.assign(STATE.vehicle, d.vehicle);
      if (d.owner) Object.assign(STATE.owner, d.owner);
      if (d.installedParts) STATE.installedParts = d.installedParts;
      if (d.savedVehicles) STATE.savedVehicles = d.savedVehicles;
    }
  } catch(e) {
    console.error(e);
  }
}

function updateSmogCountdown() {
  var display = document.getElementById('smog-countdown-display');
  if (display) {
    display.innerHTML = '<p>Smog countdown active.</p>';
  }
}

function loadSmogDate() {
  // basic stub
}

function toggleMobileNav() {
  var nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.toggle('active');
}

function parseEFN(efn) {
  return efn; // stub
}

function printDocument(containerId) {
  window.print();
}

function exportBuildPDF() {
  window.print();
}

function generateShareLink() {
  console.log('Generating link...');
}

function loadFromShareLink() {
  console.log('Loading from link...');
}

function getPartNotes(partId) {
  var all = JSON.parse(localStorage.getItem('carbTool_partNotes') || '{}');
  return all[partId] || null;
}

function savePartNotes(partId, notes) {
  var all = JSON.parse(localStorage.getItem('carbTool_partNotes') || '{}');
  all[partId] = notes;
  localStorage.setItem('carbTool_partNotes', JSON.stringify(all));
}

function updatePartNote(partId, noteText) {
  savePartNotes(partId, { text: noteText });
}

var searchInput = document.getElementById('search-parts');
if (searchInput) {
  searchInput.addEventListener('input', function(e) {
    STATE.searchQuery = e.target.value;
    renderMarketplace();
  });
}

var legalToggle = document.getElementById('legal-only-toggle');
if (legalToggle) {
  legalToggle.addEventListener('change', function(e) {
    renderMarketplace();
  });
}

var knowledgeInput = document.getElementById('knowledge-search');
if (knowledgeInput) {
  knowledgeInput.addEventListener('input', filterKnowledge);
}
