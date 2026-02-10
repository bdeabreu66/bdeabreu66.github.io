function leerdatos(){
remedio[0]=new farmaco("AMIKACINA","ANTIBIOTICOS","AMINOGLUCOSIDO","Menores de 2 años (inicial): 10 mg/Kg/dia c/8h o c/12h EV IM@Menores de 2 años (mantenimiento): 7.5 mg/Kg/dia c/8h o c/12h EV IM@>2 años : 15 mg/Kg/dia c/8h o c/12h EV IM","15 mg/Kg/dia","Amikacina ampolla 40 mg@Amikacina, Amicip, Behkacin ampolla 100mg/2cc a diluir@Amikacina, Amicip, Behkacin ampolla 500mg/2cc diluido ","","","","","");
       remedio[0].indic="";
       remedio[0].advers="Neurológicos: neuritis periférica, hipoacusia, acusia, laberintitis, tinnitus; Renal: nefrotoxicidad";
       remedio[0].cindic="";
       remedio[0].interac=""; 
remedio[0].diluible="Solución 0.9%@Solución Dextroxa 5%";
remedio[0].tinf="1 hora";

remedio[1]=new farmaco("CEFIXIMA","ANTIBIOTICOS","CEFALOSPORINA DE 3RA GENERACION","D.A.: 400 mg C/24h VO por 7 meses@D.A.: 200 mg C/12h VO@D.P.(> 6 meses): 8 mg/Kg/dia C/12h o c/24h VO@D.P.(> 6 meses con I.T.U. primer dia): 16 mg/Kg/dia C/12h VO por 1 día","","Cefixima, Longacef suspension 100mg/5cc","","","","","");
remedio[2]=new farmaco("CEFACLOR","ANTIBIOTICOS","CEFALOSPORINA DE 2DA GENERACION","D.P.: 20-40 mg/Kg/dia c/8h o c/12h VO@D.A.: 1 g c/8h VO","","Cefaclor, Ceclor Suspension 250mg/5cc@Cefaclor, Ceclor Suspension 375mg/5cc@Cefaclor, Ceclor tabletas 750 mg","","","","","");

remedio[3]=new farmaco("CEFADROXILO","ANTIBIOTICOS","CEFALOSPORINA DE 1RA GENERACION","D.P.: 25-50 mg/Kg/dia C/12h VO@D.A: 1 g C/12h VO","30 mg/Kg","Bidroxyl, Cedroxim, Cefadroxil GC, Cefadroxilo, Cefonax, Cidroxilo, Drocef, Kefloxin, Sanodril, capsulas 500 mg@Cefadroxilo,Cedroxim,BidroXyl tabletas 1 g@Cefadroxilo,Cedroxim,Bidrosyl suspension 250mg/5cc@Cefadroxilo,Cedroxim,Bidroxyl suspension 500mg/5cc","","","","","");
       remedio[3].indic="";
       remedio[3].advers="";
       remedio[3].cindic="";
       remedio[3].interac=""; 

remedio[4]=new farmaco("ACIDO VALPROICO","ANTICONVULSIONANTES/ ANTIEPILEPTICOS","GABAERGICO","D.P mantenimiento 30-60 mg/kg/dia c/24h VO@D.A.: 15-60 mg/kg/dia c/24h VO","30 mg/Kg","Acido valproico tabletas 260 mg@Acido valproico tabletas 500 mg","","","","","");
remedio[5]=new farmaco("AMLODIPINA","ANTIHIPERTENSIVOS","CACIO ANTAGONISTA","DA: 2.5-10 mg/dia c/24h VO","","Amlodipina, Amlip comprimidos 5 mg@Amlodipina, Amlip comprimidos 10 mg@Amlodipina, Amlibon tabletas 5 mg@Amlodipina, Amlibon tabletas 10 mg","","","","","");
remedio[6]=new farmaco("PROPANOLOL","ANTIHIPERTENSIVOS@ANTIARRITMICOS@ANTIMIGRAÑA","BETABLOQUEADOR","D.A 40-600 mg/dia c/12h VO","30 mg/Kg","Propanolol tabletas 40 mg","","","","","");
remedio[7]=new farmaco("ANFOTERICINA B","ANTIMICOTICOS@ANTIBIOTICOS","","D.A 0.1-1 mg/Kg/dia c/24h EV","","Anfotericina B, Fungisone ampollas 50 mg","","","","","");
remedio[8]=new farmaco("LORATADINA","ANTIALERGICOS","ANTAGONISTA H1","D.P. 0.2 mg/kg/dia c/24h VO@D.A. 10 mg/dia c/12h o c/24h VO","","Loratadina, Clarityne, Loraval suspension 5mg/5cc@Loratadina, Biorolat, Loriden, Roletra en tabletas 10 mg","","","","","");
       remedio[8].indic="Tratamiento b&aacute;sico de la rinitis al&eacute;rgica estacional, rinitis al&eacute;rgicas perennes, conjuntivitis al&eacute;rgica, prurito y urticaria de origen al&eacute;rgico, dermatosis al&eacute;rgicas, picaduras de insectos.";
       remedio[8].desc="Antial&eacute;rgico y antihistam&iacute;nico.";
       remedio[8].cindic="Insuficiencia renal, ni&ntilde;os menores de 6 a&ntilde;os, embarazo y lactancia.";
       remedio[8].farcin="t1/2: 4 h no se.";
remedio[9]=new farmaco("LORAZEPAM","ANTICONVULSIONANTES/ ANTIEPILEPTICOS","GABAERGICO","D.A.: 0.5-3 mg/dia c/12h VO","10 mg/Kg","Lorazepam tabletas 0.5 mg","","","","","");
remedio[10]=new farmaco("LEVOFLOXACINA","ANTIBIOTICOS","QUILONONA","D.P (5-12 ) 10 mg/kg/dosis c/24h VO EV@D.A. 250-500 mg c/24h o C/24 VO EV","500 mg/24h","Levofloxacina, Levaquin, Ifos tabletas 500 mg","","","","","");
remedio[11]=new farmaco("DOMPERIDONA","ANTIEMETICOS","ANTAGONISTA DOPAMINICO","D.A. 30 mg/dia c/8h VO","10 mg/Kg","Domperidona,Gamir,Motilium tabletas 10 mg@Domperidona,Gamir, Motilium suspension 1mg/1cc","","","","","");
remedio[12]=new farmaco("KETOPROFENO","ANTIINFLAMATORIOS (AINES)","INHIBIDOR COX","D.A. 25-50 mg c/6h VO@ D.P. 0.5-1 mg/kg/dosis c/6h VO","10 mg/Kg","Ketoprofeno, Profenid tabletas 80 mg@Ketoprofeno, Profenid tabletas 100 mg@Ketoprofeno, Profenid tabletas 150 mg@Ketoprofeno, Profenid tabletas 200 mg@Ketoprofeno, Profenid suspension 7.5mg/1cc@Ketoprofeno, Profenid suspension 8mg/1cc","","","","","");
remedio[13]=new farmaco("CEFTRIAXONA","ANTIBIOTICOS","CEFALOSPORINA DE 3RA GENERACION","D.P. 75-80 mg/kg/dia c/8h EV@D.P.(meningea) 100 mg/kg/dia c/8h EV","","Ceftriaxona, Ceftrialin ampolla 1 g","","","","","");

remedio[14]=new farmaco("MEROPENEM","ANTIBIOTICOS","CARBAPENEMICO","D.P. < 12 años  10-20  mg/kg/dosis c/8h EV@D.P.(Dosis meníngea) 40 mg/kg/dosis c/8h EV@D.A.  500-1000  mg/dosis c/8h o c/12h EV@D.A. Meningitis adultos 6000 mg/día c/8h","Merodex, Meronem, Meropenem, Meroprem, Mezonex, Zylpen  ampolla 1 g@Merodex, Meronem, Meropenem, Meroprem, Mezonex, Zylpen ampolla 500 mg","","","","","");
       remedio[14].indic="Tratamiento de infecciones producidas por bacterias aerobias gram negativas y gram positivas, anaerobias. Meningitis, neumonia, septicemia, infecciones intraabdominales, genitourinarias, de la piel y tejidos blandos, Infecciones nosocomiales;• Excelente actividad contra estreptococos, MSSA, H. influenzae, Proteus, E. coli, Klebsiella, Serratia, Enterobacter, B. fragilis, Buena actividad contra Pseudomonas y Acinetobacter ";
       remedio[14].advers="";
       remedio[14].cindic="";
       remedio[14].interac=""; 


remedio[15]=new farmaco("IBUPROFENO","ANTIINFLAMATORIOS (AINES)","INHIBIDOR COX","D.P >6 meses: 5-10 mg/kg/dosis c/6h VO@ Artritis juvenil: 30-50 mg/kg/dia c/6h VO@DA: 400 mg c/4h VO","","Ibuprofeno tabletas 600 mg@Brugesic suspension 100mg/5cc@Brugesic Forte suspension 200mg/5cc","","","","","");
remedio[16]=new farmaco("TIOCOLCHICOSIDO","RELAJANTES MUSCULARES","INHIBIDOR GABA","D.A.: 4-8 mg c/12h IM VO EV","","Tiocolchicocido,Biocolchid, Coltrax, Colval, Eusilen, Tiochax, Tractil tabletas 4 mg@Tiocolchicosido, Coltrax, Colval, Eusilen, Lampral ampollas 4 mg","","","","","");
   remedio[16].cindic="Par&aacute;lisis flaccida, hipoton&iacute;a muscular";
   remedio[16].indic="Relajante de la musculatura estriada. En todo tipo de contractura muscular: lumbago, ci&aacute;tica, calambres, tort&iacute;colis, manipulaciones y tracciones vertebrales, reducci&oacute;n de fracturas, dismenorrea esencial, hiperton^iacute;a uterina en la parturienta, paraplej&iacute;as espasm&oacute;dicas.";
  
remedio[17]=new farmaco("ALBENDAZOL","ANTIPARASITARIOS","INHIBIDOR MICROTUBULOS","DA: 400 mg STAT VO@DA:Strongiloidiasis, himenolepiasis y teniasis 400 mg/dia c/24h por 3 dias VO","","Albendazol, Albendazole, Albicar, Bevindazol,Sostril tabletas 200 mg@Albendazol tabletas 400 mg@Albendazol, Albendazole,Albezol, Albicar, Bevindazol suspension 400mg/10ml@Albendazol suspension 400mg/20ml@Sostril suspension 200mg/5ml","","","","","");
   remedio[17].indic=" Parasitosis, Ascarosis, Tricurosis, Enterobiosis, Uncinariosis, Hidatidosis qu&iacute;stica, Estrongiloidosis, Neurocisticercosis por Taenia Solium.";
   remedio[17].desc=" Antiparasitato: Antihelm&iacute;ntico derivado del Benzimidazol Vida media: 4 a 15 horas.";
   remedio[17].cindic="No administrar durante el embarazo ni la lactancia y en ni&ntilde;os menores de 2 a&ntilde;os";

remedio[18]=new farmaco("MEBENDAZOL","ANTIPARASITARIOS","INHIBIDOR MICROTUBULOS","DA: Ouxiurasis 100 mg STAT VO Repetir a los 15 dias@DA:Ascaris tricocefalo, necator, ancylostoma e infestaciones mixtas 100 mg c/12h VO por 3 dias@DA: Strongiloidiasis, himenolepiasis y teniasis 200 mg c/12h VO por 3 dias","","Mebendazol, Bendamen, Eprofil, Vermalon tabletas 100 mg@Mebendazol, Bendamen, Eprofil, Vermalon suspension 100mg/5ml","","","","","");
   remedio[18].indic=" Parasitosis, Ascarosis, Tricurosis, Enterobiosis, Uncinariosis, Hidatidosis qu&iacute;stica, Estrongiloidosis, Neurocisticercosis por Taenia Solium.";
   remedio[18].desc=" Antiparasitario: Antihelm&iacute;ntico derivado del Benzimidazol Vida media: 4 a 15 horas.";
   remedio[18].cindic="No administrar durante el embarazo ni la lactancia y en ni&ntilde;os menores de 2 a&ntilde;os";




remedio[19]=new farmaco("PAMOATO DE PIRANTEL","ANTIPARASITARIOS","BLOQUEADOR NEUROMUSCULAR","Ascariasis y Oxuriasis 10 mg/Kg STAT VO@Necator y anquilostomiasis 10 mg/Kg/dia c/24h VO x 3 dias","","Pamoato de Pirantel, Combantrin, Tenecha tabletas 125 mg @Pamoato de Pirantel, Combantrin, Tenecha suspension 250mg/5ml","","","","","");
remedio[20]=new farmaco("ATENOLOL","ANTIHIPERTENSIVOS","BETABLOQUEADOR","DA (HA): 50-100 mg c/24h VO","30 mg/Kg","Atenolol tabletas 50 mg","","","","","");
remedio[21]=new farmaco("CAPTOPRIL","ANTIHIPERTENSIVOS","IECA","DA (inicial): 6.25 mg c/8h VO@DA: 50-100 mg c/8h VO","30 mg/Kg","Captropil tableta 12.5 mg@Captropil tableta 25 mg@Captropil tableta 50 mg@Captropil tableta 100 mg","","","","","");
remedio[22]=new farmaco("CIPROFLOXACINA","ANTIBIOTICOS","FLUOROQUILONONA","D.P. 20-30 mg/kg/dia  c/12h VO EV","10 mg/Kg","Ciprofloxacina, Ciproflox suspension 250mg/5cc@Ciprofloxacina, Ciproflox comprimidos de 500 mg","","","","","");
remedio[23]=new farmaco("METFORMINA","ANTIDIABETICOS","MEJORA RESISTENCIA A LA INSULINA","DA: 500-3000 mg/dia C/8h VO@DP: 500-2000 mg/dia C/12h VO","10 mg/Kg","Amarilys tabletas 500 mg@Amarilys tabletas 1000 mg","","","","","");
remedio[24]=new farmaco("CEFALEXINA","ANTIBIOTICOS","CEFALOSPORINA DE 1RA GENERACION","D.P.: 25-50 mg/Kg/dia C/6h VO@D.A.: 200 mg C/12h VO","8 mg/Kg","Cefalexina, Keforal, Bidocef, Stricef suspension 250mg/5cc","","","","","");
remedio[25]=new farmaco("CEFTIBUTEN","ANTIBIOTICOS","CEFALOSPORINA DE 3RA GENERACION","D.A.: 200 mg C/12h VO@D.A.: 400 mg C/24h VO@D.P.: 9-10 mg/Kg/dia C/24h VO","8 mg/Kg","Ceftibuten, Cedax suspension 180mg/5cc@Ceftibuten, Cedax capsulas 400 mg","","","","","");
    remedio[25].indic="Infecciones cl&iacute;nicas por los siguientes organismos Gram negativos: Haemophilus influenzae, Haemophilus parainfluenzae, Moraxella catarralis, Escherichia coli, Especies de Klebsiela."; 
    remedio[25].desc="Cefalosporina de 3era generaci&oacute;n";
remedio[26]=new farmaco("CETIRIZINA","ANTIALERGICOS","ANTAGONISTA H1","D.P.(2 a 6 años) 0.3 mg/kg/dia c/24h VO@D.P. 1 gotas/kg/dia c/24h VO@ D.P: 2 a 6 años 5 mg/dia c/24h VO@D.A: 5-10 mg/dia c/12h o c/24h VO","10 mg/Kg","Cetirizina, Cetral suspension 1mg/cc@Celay, Cetirivax suspension 10mg/1cc@Cetirizina gotas 10mg/1cc@Cetirizina, Celay, Cetirex, Cetrine tabletas 10 mg","","","","","");
       remedio[26].indic="Tratamiento b&aacute;sico de la rinitis al&eacute;rgica estacional, rinitis al&eacute;rgicas perennes, conjuntivitis al&eacute;rgica, prurito y urticaria de origen al&eacute;rgico, dermatosis al&eacute;rgicas, picaduras de insectos.";
       remedio[26].desc="Antial&eacute;rgico y antihistam&iacute;nico.";
       remedio[26].cindic="Insuficiencia renal, ni&ntilde;os menores de 2 a&ntilde;os, embarazo y lactancia.";

remedio[27]=new farmaco("CLORANFENICOL","ANTIBIOTICOS","","D.P.: 50-100 mg/kg/dia c/6h VO EV @ 10 gotas/dia c/12h VOF","8 mg/Kg","Cloranfericol suspension 150mg/5cc@Cloranfenicol ampollas 1 g@ Cloranfenicol tabletas 250 mg@Cloranfenicol gotas oftalmicas","","","","","");
       remedio[27].indic="Infecciones causadas por Salmonella tiphi. Infecciones men&iacute;ngeas. Ricketsia, tifus, paratifus A y B, brucelosis, enteritis por coli";
       remedio[27].indic+=" y por enterococos, neumon&iacute;a bacteriana y at&iacute;pica";
       remedio[27].desc="Antibi&oacute;tico bacteriost&aacute;tico";
       remedio[27].cindic="No consumir junto al kaolin";


remedio[28]=new farmaco("AZITROMICINA","ANTIBIOTICOS","MACROLIDO","D.P.: 10 mg/kg/dia c/24h VO EV por 3 dias@ >45Kg: 500 mg/dia c/24h VO EV por 3 dias@ C. trachomatis o N. gonorrhoeae: 1 g/dosis STAT VO","8 mg/Kg","Azitromicina, Amizin,amovin, arzomidol, Azitromin, Azigram, Azitrom, Binozyt, Saver, Zitromax, Zival suspension 200mg/5cc@Azitromicina, Amizin, amovin, Arzomidol, atromizin, azibax, Azigram, Azitrodex, Azitrom, Saver, Zitromax G, Zival tabletas 500 mg@Zitromax polvo liofilizado/ infusión EV 500mg/2ml a diluir @Azimakrol comprimido 1 g", "","","","","");
       remedio[28].indic="Infecciones causadas por g&eacute;rmenes susceptibles: Vias respiratorias altas: faringitis, amigdalitis causada por estreptococos, otitis,otiitis media en ninos, sinusitis";
       remedio[28].desc="Antibi&oacute;tico macrolido";
       remedio[28].cindic="Insuficiencia hep&aacute;tica. No administrar con antiacidos ni alimentos";
       remedio[28].diluible="Solución 0.9%@Solución Dextroxa 5%";
       remedio[28].tinf="1 hora";
       remedio[28].vinf="1 mg/kg/min";

remedio[29]=new farmaco("ACETAMINOFEN","ANTIINFLAMATORIOS (AINES)","INHIBIDOR COX","D.P 10 mg/kg/dosis c/6h VO","10 mg/Kg","Analper, Tachipirin suspension 120mg/5cc@Alivet suspension 125mg/5cc@Tachipirin Forte suspension 160mg/5cc@Apiret suspension 180mg/5cc@","","","","","");
remedio[30]=new farmaco("METRONIDAZOL","ANTIPARASITARIOS@ANTIBIOTICOS","","30-40 MG/KG/DIA C/8H VO EV","","Metronidazol, Meltren, Metrovax suspension 250mg/5cc","","","","","");
remedio[31]=new farmaco("AMPICILINA SULBACTAN","ANTIBIOTICOS","BETALACTAMICO","50-100 mg/kg/dia c/12h VO@150 mg/kg/dia c/6h EV@Dosis meningea: 200 mg/kg/dia c/6h VO","15 mg/Kg/dia","Sulamp, Unasyn suspension 250mg/5cc@Sulamp, Unasyn capsulas 375 mg","","","","","");

remedio[32]=new farmaco("IMIPENEM-CILASTATINA","ANTIBIOTICOS","CARBAPENEMS","D.P.: 15mg-25/kg/dosis  c/6-8h@DA: 250-500 mg/dosis c/6h o c/8h EV IM ","","Bacqure, Imipenem, Menepim, Zienam ampolla 500 mg-500 mg","","","","","");
       remedio[32].indic="Infecciones polimicrobianas por gérmenes aerobios, anaerobios, gram positivos y gram negativos sensibles y tratamiento empirico, infecciones intraabdominales, ginecológicas, vías respiratorias inferiores, genitourinarias, de huesos y articulaciones, piel y tejidos blandos, endocarditis, septicemia, NO está indicado en la meningitis, profilaxis: prevenir infecciones postoperatorias cuando hay ó puede haber contaminación  durante el procedimiento quirúrgico ó cuando una infección postoperatoria podría ser especialmente grave. Excelente actividad contra estreptococos, MSSA, H. influenzae, Proteus, E. coli, Klebsiella, Serratia, Enterobacter, B. fragilis, buena actividad contra Pseudomonas, Acinetobacter, Enterococcus faecalis";
       remedio[32].advers="";
       remedio[32].cindic="";
       remedio[32].interac=""; 

remedio[33]=new farmaco("CLINDAMICINA","ANTIBIOTICOS","LINCOSAMIDA","D.P.: 30-40 mg/kg/dia c/6h o c/8h VO EV","8 mg/Kg","Clindamicina, Dalacin ampolla 1 g@Clindamicina, Dalacin capsulas 300 mg","","","","","");
remedio[34]=new farmaco("CEFUROXIMA","ANTIBIOTICOS","CEFALOSPORINA DE 2DA GENERACION","D.P.: 10-15 mg/kg/dia C/12h VO","8 mg/Kg","Cefuroxima, Zinnat suspension 125mg/5cc@Cefuroxima, Zinnat suspension 250mg/5cc@Cefuroxima, Zinnat tabletas 250 mg@Cefuroxima, Zinnat tabletas 500 mg","","","","","");
remedio[35]=new farmaco("ACICLOVIR","ANTIVIRALES","","D.P.: 30 mg/kg/dia C/8h VO@D.P.: 1500 mg/m2/dosis C/24h EV","8 mg/Kg","Aciclovir, Aciclor suspension 200mg/5cc@Aciclovir, Aciclor ampollas 1 g","","","","","");
remedio[36]=new farmaco("FLUCONAZOL","ANTIMICOTICOS","","D.P.: 10 mg/kg/dia C/24h VO EV","","fluconazol, Diflucan suspension 50mg/1cc@Fluconazol, Diflucan,Flucbio, Flunal, Fluval, Fugin, Funisol, Micoflux Capsulas de 150 mg@Flucbio capsulas 200 mg@fluconazol, Diflucan infusion 50 mg@Albesin, Zolstan tabletas 150 mg","","","","","");
remedio[37]=new farmaco("METOCLOPRAMIDA","ANTIEMETICOS","ANTAGONISTA DOPAMINICO","D.A. 30 mg/dia c/8h VO@D.P. 0.25 mg/kg/dia c/8h VO","10 mg/Kg","Metoclopramida, Primperan suspension 1mg/1cc","","","","","");
remedio[38]=new farmaco("VANCOMICINA","ANTIBIOTICOS","GLUCOPEPTIDO","D.P.: 40 mg/kg/dia C/6h EV@D.P.(meningea): 60 mg/kg/dia C/6h EV","8 mg/Kg","Vancomicina ampollas 1 g","","","","","");
remedio[39]=new farmaco("OXACILINA","ANTIBIOTICOS","BETALACTAMICO","D.P.: 100-150 mg/kg/dia C/6h  VO EV@D.P.(infeccion grave): 200 mg/kg/dia C/6h VO EV","8 mg/Kg","Oxacilina ampollas 1 g@Oxacilina capsulas 500 mg","","","","","");
remedio[40]=new farmaco("DICLOXACILINA","ANTIBIOTICOS","BETALACTAMICO","D.P.: 25-50 mg/kg/dia C/6h o c/8h VO","8 mg/Kg","Dicloxacilina, Diclocid suspension 250mg/5cc","","","","","");
//remedio[41]=new farmaco("ERITROMICINA","ANTIBIOTICOS","MACROLIDO","D.P.: 30-50 mg/kg/dia C/6h VO EV@DA:250-1000 mg c/6h VO","8 mg/Kg","Eritromicina, Ilosone suspension 125mg/5cc@Eritromicina, Ilosone, suspension 250mg/5cc@Eritromicina, Ilosone tabletas 500 mg","","","","","");
//       remedio[41].indic="Infecciones causadas por g&eacute;rmenes susceptibles: Vias respiratorias altas: faringitis, amigdalitis causada por estreptococos, otitis,otiitis media en ninos, sinusitis";
//       remedio[41].desc="Antibi&oacute;tico macrolido";
//       remedio[41].cindic="Insuficiencia hep&aacute;tica. No administrar con antiacidos ni alimentos";


remedio[41]=new farmaco("ERITROMICINA","ANTIBIOTICOS","MACROLIDO","D.P.: 30-50 mg/kg/dia c/6h VO  x 7 dias@DA: 250-500 mg/dia c/6h VO  x 7 dias","","Eritromicina, Ilosone suspension 250mg/5cc@Eritromicina, Ilosone suspension 125mg/5cc@Eritromicina, Ilosone tabletas 500 mg", "","","","","");
       remedio[41].indic="Infecciones causadas por germenes sensibles: Gram positivos: Staphylococcus aureus, Streptococcus del grupo A, Enterococcus, Pneumonococcus, Gram-negativos: Neissseria, Haemophylus influenzae, Brucella, Rickettsia, Treponema, Mycoplasma pneumoniae, Chlamidia tracomatis, Legionella pneumopila Infecciones del tracto respiratorio superior: faringitis,amigdalitis, sinusitis, faringoamigdalitis. Tracto respiratorio inferior: Nuemonia, traqueitis, alveolitis, enfermedad del legionario. Infecciones de partes blandas: por gérmenes gram-positivos sensibles, acné vulgaris, tratamiento alterno de la sífilis primaria y tardia en alérgicos a la penicilina, eritrasma, inflamación pélvica por gram positivos, enfermedad genitourinaria por Chlamydi tracomatis, tratamiento coadyuvante en amebiasis intestinal y Helicobacter pylori";
       remedio[41].desc="Antibi&oacute;tico macrolido";
       remedio[41].advers="gastrointestinal: epigastralgia moderada a intensa, cardiovascular: prolonga el segmento QT con arrtimias ventriculares, hepático: hepatitis colestásica por tratameinto a largo plazo, efectos tóxicos e irritantes: fiebre, eosinofilia y erupciones en piel, tinnitus y lateraciones auditivas";
       remedio[41].cindic="Disfunción hepática ó historia previa, valorar el riesgo/beneficio en pacientes con pérdida de la audición ó afecciones hepáticas";
       remedio[41].interac="aumenta la concentración sérica de la Carbamazepina y los efectos de la digoxina, esteroides,alcaloides ergóticos, triazolam, ciclosporina, valproato,teofilina y warfarina, no ingerir con las comidas a xcepción del estolato";



remedio[42]=new farmaco("CEFOTAXIMA","ANTIBIOTICOS","CEFALOSPORINA DE 3RA GENERACION","D.P. 100-150 mg/kg/dia c/6h EV@D.P.(meningea) 200 mg/kg/dia c/6h EV","","Cefotaxima, Claorofan, Cefacolin, Tizoxim, Terasep ampolla 1 g","","","","","");
remedio[43]=new farmaco("GLIMEPIRIDA","ANTIDIABETICOS","AUMENTA PRODUCCION DE INSULINA","DA: 1-8 mg/dia C/24h VO","10 mg/Kg","Glimepirida tabletas 1 mg@Glimepirida tabletas 2 mg","","","","","");
remedio[44]=new farmaco("PENICILINA G SODICA","ANTIBIOTICOS","BETALACTAMICO","DA (Infeccion leve): 1-2 MUI/dia C/8h EV@DA (Infeccion grave): 6-24 MUI/dia C/4h EV@D.P 150000-300000 UI/kg/dia c/4h EV","8 mg/Kg","Penicilina G sodica ampolla 1 MUI","","","","","");
remedio[45]=new farmaco("DICLOFENACO","ANTIINFLAMATORIOS (AINES)","INHIBIDOR COX","DA: 100-200 mg/dia c/12h VO@DP: 0.5-2 mg/kg/dosis c/8h VO@ DP: 1 gotas/kg/dosis c/8h VO","","Diclofenac, Cataflam tabletas 75 mg@Diclofenac, Cataflam tabletas 100 mg@Diclofenac, Cataflam tabletas 125 mg@Diclofenac, Cataflam suspension 1.8mg/1cc@Diclofenac, Cataflam gotas","","","","","");
remedio[46]=new farmaco("MELOXICAM","ANTIINFLAMATORIOS (AINES)","INHIBIDOR COX","DA: 7.5-15 mg c/24h VO EV","","Meloxicam tabletas 7.5 mg@Meloxicam tabletas 15 mg@Meloxicam suspension 7.5mg/5ml","","","","","");
remedio[47]=new farmaco("OMEPRAZOL","ANTIACIDOS GASTRICOS","INHIBIDOR BOMBA DE PROTONES","DA (ERGE) Inicio: 20-40 mg c/24h VO@DA (ERGE) Mantenimiento: 20 mg c/12h VO@DP (5-10 Kg) 5 mg c/24h VO@DP (10-20 Kg) 10 mg c/24h VO@DP (>20 Kg) 20 mg c/24h VO","","Omevax tabletas 10 mg@Omeprazol, Omevaxl, Omez, Omezul tabletas 20 mg@Omevax tabletas 40 mg@Omeprazol, Omebloc Ampollas 40 mg","","","","","");
       remedio[47].indic="Tratamiento de &uacute;lceras duodenales y g&aacute;stricas, esofagitis por reflujo, sindrome de Zollinger=Ellison y todas las patolog&iacute;as dependientes de hipersecreci&oacute;n g&aacute;strica.";
       remedio[47].desc="Antial&eacute;cido inhibidor de la bomba de protones de las c&eacute;lulas parietales del estomago";
       remedio[47].cindic="Embarazo y lactancia";

remedio[48]=new farmaco("CANDESARTAN","ANTIHIPERTENSIVOS","ARA II","DA: 8-16 mg c/24h VO","30 mg/Kg","Candesartan, Blopress comprimidos 8 mg@Candesartan, Blopress comprimidos 16 mg","","","","","");
remedio[49]=new farmaco("CAPECITABINA","CITOSTATICOS","","DA: 2500 MG/M2 C/12h VO","30 mg/Kg","Capecitabina  tabletas 500 mg","","","","","");
remedio[50]=new farmaco("CLORFERINAMINA","ANTIALERGICOS","ANTAGONISTA H1","DP: 0.25-0.5 mg/kg/dia C/6h o C/8h VO@DA: 4 mg C/6h o C/8h VO","30 mg/Kg","Clorferinamina, Clorotrimetron  tabletas 4 mg@Clorferinamina, Clorotrimetron  tabletas 8 mg@Clorferinamina, Clorotrimetron  suspension 2.5mg/1cc@Clorferinamina, Clorotrimetron  ampolla 10 mg","","","","","");
       remedio[50].indic="Tratamiento b&aacute;sico de la rinitis al&eacute;rgica estacional, rinitis al&eacute;rgicas perennes, conjuntivitis al&eacute;rgica, prurito y urticaria de origen al&eacute;rgico, dermatosis al&eacute;rgicas, picaduras de insectos.";
       remedio[50].desc="Antial&eacute;rgico y antihistam&iacute;nico.";
       remedio[50].cindic="Insuficiencia renal, ni&ntilde;os menores de 6 a&ntilde;os, embarazo y lactancia.";

remedio[51]=new farmaco("METILPREDNISOLONA","AGENTES ESTEROIDEOS","","DP: 0.5-1.7 mg/kg/dia C/6h o C/8h o C/12h VO EV IM","30 mg/Kg","Metilprednisolona, Solumedrol tabletas 40 mg","","","","","");
remedio[52]=new farmaco("BICALUTAMIDA","HORMONALES","","DA: 50 mg/dia c/24h VO","30 mg/Kg","Bicalutamida tabletas 50 mg","","","","","");
remedio[53]=new farmaco("CLARITROMICINA","ANTIBIOTICOS","MACROLIDO","DA: 250-500 mg c/12h VO EV@DP: 7.5 mg/Kg c/12h VO EV","15 mg/kg c/12h VO EV","Claritromicina, BinoclaR,klabax, tabletas 250 mg@Claritromicina, Binoclar, Claranta, Claritic, Claritron, Clarivax, Klabax, Klaricid tabletas 500 mg@Claritromicina, Klaricid suspension 125mg/5ml @Clarittromicina, Claritic, Clarivax, Klaricid suspension 250mg/5cc@Claritron, Klaricid vial iny de 500 mg@Klaricid U.D tabletas liberación modificada 500 mg","","","","","");
       remedio[53].indic="Infecciones causadas por g&eacute;rmenes susceptibles: Neomonia por micoplasma pneumoniae, faringitis bacteriana por staphylococcus epidermidis, N gonorrohoeae, infecciones de piel y tejidos blandos. Endocarditis bacteriana. Helicobacter pylori";
       remedio[53].desc="Antibi&oacute;tico macrolido";
       remedio[53].cindic="Insuficiencia renal y-o hep&aacute;tica. Se recomienda no administrar durante el embarazo ni durante la lactancia.";
remedio[54]=new farmaco("LANSOPRAZOL","ANTIACIDOS GASTRICOS","INHIBIDOR BOMBA DE PROTONES","DA (ERGE) Inicio: 20-40 mg c/24h VO@DA (ERGE) Mantenimiento: 20 mg c/12h VO@DP (5-10 Kg) 5 mg c/24h VO@DP (10-20 Kg) 10 mg c/24h VO@DP (>20 Kg) 20 mg c/24h VO","","Lansoprazol tabletas 20 mg","","","","","");
       remedio[54].indic="Tratamiento de &uacute;lceras duodenales y g&aacute;stricas, esofagitis por reflujo, sindrome de Zollinger=Ellison y todas las patolog&iacute;as dependientes de hipersecreci&oacute;n g&aacute;strica.";
       remedio[54].desc="Antial&eacute;cido inhibidor de la bomba de protones de las c&eacute;lulas parietales del estomago";
       remedio[54].cindic="Embarazo y lactancia";
remedio[55]=new farmaco("RANITINIDA","ANTIACIDOS GASTRICOS","ANTIHISTAMINICOS","DA:  150-300 mg c/12h VO","","Ranitidina, Gastac, Enteral, Vizerul tabletas 150 mg@Ranitidina, Gastac, Enteral, Vizerul tabletas 300 mg","","","","","");
       remedio[55].indic="Tratamiento de &uacute;lceras duodenales y g&aacute;stricas, esofagitis por reflujo, sindrome de Zollinger=Ellison y todas las patolog&iacute;as dependientes de hipersecreci&oacute;n g&aacute;strica.";
       remedio[55].desc="Anti&aacute;cido inhibidor de receptores histam&iacutenicos H<sub>2<sub>.";
       remedio[55].cindic="Embarazo y lactancia";
remedio[56]=new farmaco("CIMETIDINA","ANTIACIDOS GASTRICOS","ANTIHISTAMINICOS","DA:  200 mg/dosis c/6h VO@DA:  200 mg/dosis c/4h o c/6h IM EV","","Cimeditina, Cimetix, tabletas 200 mg@Cimetidina solucion inyectable 200mg/2ml","","","","","");
       remedio[56].indic="Tratamiento de &uacute;lceras duodenales y g&aacute;stricas, esofagitis por reflujo, sindrome de Zollinger=Ellison y todas las patolog&iacute;as dependientes de hipersecreci&oacute;n g&aacute;strica.";
       remedio[56].desc="Anti&aacute;cido inhibidor de receptores histam&iacutenicos H<sub>2<sub>.";
       remedio[56].cindic="Embarazo y lactancia";
remedio[57]=new farmaco("FAMOTINIDA","ANTIACIDOS GASTRICOS","ANTIHISTAMINICOS","DA:  20 mg/dosis c/12h VO","A","famotinida, Famogel tabletas 20 mg@Famotinida, Famogel tabletas 40 mg","","","","","");
       remedio[57].indic="Tratamiento de &uacute;lceras duodenales y g&aacute;stricas, esofagitis por reflujo, sindrome de Zollinger=Ellison y todas las patolog&iacute;as dependientes de hipersecreci&oacute;n g&aacute;strica.";
       remedio[57].desc="Anti&aacute;cido inhibidor de receptores histam&iacutenicos H<sub>2<sub>.";
       remedio[57].cindic="Embarazo y lactancia";
remedio[58]=new farmaco("AMOXICILINA","ANTIBIOTICOS","BETALACTAMICOS","DP:  50 mg/kg/dia c/12h VO","","Amoxicilina, Amoxal suspension 250mg/5ml@Amoxicilina, Amoxiduo suspension 750mg/5ml","","","","","");
       remedio[58].indic="";
       remedio[58].desc="Aminopenicilina";
       remedio[58].cindic="Embarazo y lactancia";
remedio[59]=new farmaco("AMOXICILINA + CLAVULANICO","ANTIBIOTICOS","BETALACTAMICOS","DP:  50 mg/kg/dia c/12h VO","","Amoxicilina, Fulgram, Augmentin suspension 250mg/5ml@Amoxicilina, Amoxiduo suspension 750mg/5ml","","","","","");
       remedio[59].indic="Tratamiento de &uacute;lceras duodenales y g&aacute;stricas, esofagitis por reflujo, sindrome de Zollinger=Ellison y todas las patolog&iacute;as dependientes de hipersecreci&oacute;n g&aacute;strica.";
       remedio[59].desc="";
       remedio[59].cindic="Embarazo y lactancia";
remedio[60]=new farmaco("LEVOTIROXINA","TIROIDEOS","","DA:  50-100 mcg/dia c/24h VO","","Levotiroxina, Euthirox tabletas 50 mcg@Levotiroxina, Euthirox tabletas 100 mcg@Levotiroxina, Euthirox tabletas 125 mcg@Levotiroxina, Euthirox tabletas 150 mcg@Levotiroxina, Euthirox tabletas 175 mcg@Levotiroxina, Euthirox tabletas 200 mcg","","","","","");
//remedio[61]=new farmaco("ROXITROMICINA","MACROLIDOS","DA:  150 mg/dosis c/12h VO x 5 dias@DA:  300 mg/dosis c/24h VO por 5 dias","","Roxitromicina, Roxitrol, Rulid tabletas 150 mg@Roxitromicina, Roxitrol, Rulid tabletas 300 mg","","","","","");
remedio[61]=new farmaco("CLOROPROMAZINA","ANTIPSICOTICOS","","D. max 1 g/dia IM EV","","Clorpromazina inyectable de 25mg/2ml","","","","","");
       remedio[61].indic="Antipsicotico, antiemetico. Esquizofrenia, fase maniaca de la enfermedad maniacodepresiva ";

//remedio[63]=new farmaco("DOXICICLINA","ANTIBIOTICOS","","DA: Inicio  100 mg/dosis c/12h  VO@DA:Mantenimiento  100 mg/dosis c/24h VO@DP: Inicio 4 mg/kg/dia c/12h@DP: Mantenimiento 2 mg/kg/dia c/12h","","Doxiciclina, Doxiclival,Tremesal, Vibramicina tabletas 100 mg@Tremesal tabletas 200 mg","","","","","");

remedio[63]=new farmaco("DOXICICLINA","ANTIBIOTICOS","Tetraciclina","DA: 200 mg/dia VO c/12h@DA: 200 mg/dia VO c/24h","","Doxiciclina capsulas 100 mg@Doxiciclina comprimidos 100 mg@ Doxiciclina tabletas 100 mg@ Tremesal tabletas dispersables 100 mg@ Tremesal tabletas dispersables 200 mg@Vibramicina C tabletas 100 mg","","","");
       remedio[63].indic="Indicada en infecciones causadas por gérmenes patógenos sensibles\
 a la doxiciclina,Acné vulgaris; Fiebre manchada de las Montañas Rocallosas, fiebre tifoidea y el grupo de tifus;Fiebre Q, enfermedades por Ricketsia y enfermedades por garrapatas causadas por Rickettsiae, Infecciones respiratorias causadas por Mycoplasma pneumoniae; Psitacosis causada por Clamydia psittaci; Linfogranuloma venéreo, causado por Chlamydia trachomatis; Infecciones uretrales no complicadas, endocervicales o rectales en adultos causados por Chlamydia trachomatis; Tracoma debido a Chlamydia trachomatis aunque el agente infeccioso no siempre se elimina, según lo determinado por inmunofluorescencia; Conjuntivitis por inclusión debida a Chlamydia trachomatis puede ser tratada con doxiciclina oral sola o con una combinación de agentes tópicos; Epidídimo-orquitis aguda causada por Chlamydia trachomatis o Neisseria gonorrhoeae; Fiebre recurrente transmitida por piojos causadas por Borrelia recurrentis;Fiebre recurrente transmitida por garrapatas causadas por Borrelia duttonii; Uretritis no gonocócica (UNG) causada por Ureaplasma urealyticum (T-Mycoplasma),Chancroide causado por Haemophilus ducreyi; Brucelosis causada por especies de Brucella (en conjunto con estreptomicina); Plaga causada por Yersinia pestis; Turalemia causada por Francisella tularensis; Cólera producida por Vibrio cholerae; Bartonelosis causada por Bartonella bacilliformis; Campylobacter fetus; Granuloma inguinal por Calymmatobacterium granulomatis; infecciones causadas por los siguientes microorganismos gran-negativos, cuando el ensayo bacteriológico indique susceptibilidad: Especies de Shigella; Infecciones respiratorias causadas por Haemophilus influenzae; Infecciones respiratorias y urinarias causadas por especies de Klebsiella; Escherichia coli; Enterobacter aerogenes. Infecciones causadas por los siguientes microorganismos gram-positivos, cuando el ensayo bacteriológico indica una adecuada sensibilidad al fármaco: Especies Streptococcus: Se han encontrado un cierto porcentaje de cepas de Streptococcus pyogenes y Streptococcus faecalis que son resistentes a la tetraciclina. Las tetraciclinas no deben ser utilizadas para las infecciones estreptocócicas, a menos que el organismo haya demostrado ser sensible. Para infecciones respiratorias altas debido al grupo de estreptococos A beta-hemolíticos, la penicilina es el fármaco de elección habitual, incluyendo la profilaxis de fiebre reumática. Esto incluye: Infecciones del tracto resptorio alto por Streptococcus pneumoniae;Trastornos respiratorios, infecciones de piel y tejidos blandos causadas por Staphylococcus aureus. Las tetraciclinas no son el fármaco de elección en el tratamiento de las infecciones por estafilococos. En los casos en que la penicilina está contraindicada, doxiciclina es una modalidad alternativa para el tratamiento de: Gonorrea no complicada causada por Neisseria gonorrhoeae; Actinomicosis debida a especies de Actinomyces; Infecciones causadas por especies de Clostridium;Sífilis causada por Treponema pallidum y frambesia por Treponema pertenue; Listeriosis debida a Listeria monocytogenes; Ántrax debido a Bacillus anthracis; Infección de Vincent (gingivitis ulcerativa necrotizante aguda) debida a Leptotrichia buccalis (antiguamente, fusiform);Tratamiento adyuvante En amebiasis intestinal aguda doxiciclina puede ser útil junto con amebicidas; En aCné severo por acne vulgaris, doxiciclina puede ser útil como terapia adyuvante. Tratamiento y la profilaxis de las siguientes infecciones:Malaria por Plasmodium falciparum (en zonas con Plasmodium falciparum resistente a cloroquina) y Leptospirosis causada por especies Leptospira.";

remedio[64]=new farmaco("ERTAPENEM","ANTIBIOTICOS","CARBAPENEMS","DA: 1 g/dia c/24h  EV IM x 3-14 dias","","Ertapenem, Invanz ampolla 1 g","","","","","");
       remedio[64].indic="Infecciones moderadas y severas en adultos por cepas de gérmenes susceptibles, terapia empirica inicial en infecciones intraabdominales complicadas, infecciones de piel complicadas, incluyendo las infecciones de pié diabético, neumonias de la comunidad, infecciones del tracto urinario complicadas, infecciones pélvicas agudas incluyendo  endometriosis postparto, aborto séptico e infecciones gincológicas postquirúrgicas, teniendo actividad frente a los siguientes microorganismos: MSSA, H. influenzae, Proteus, E. coli, Klebsiella, Serratia, Enterobacter, B. fragilis Carece de actividad contra Pseudomonas y  Enterococcus";
       remedio[64].advers="";
       remedio[64].cindic="";
       remedio[64].interac=""; 

remedio[65]=new farmaco("SECNIDAZOL","ANTIPARASITARIOS","","30-40 MG/KG STAT VO","","Secnidazol suspension 250mg/5cc","","","","","");
remedio[66]=new farmaco("PENICILINA G BENZATINICA","ANTIBIOTICOS","BETALACTAMICO","DA (Infeccion leve): 1-2 MUI/dia C/8h VO@DA (Infeccion grave): 6-24 MUI/dia C/4h VO@D.P. 20000-50000 UI/kG/dia STAT IM","8 mg/Kg","Penicilina G benzatinica, Bencetazil ampolla 1 MUI","","","","","");
remedio[67]=new farmaco("PAMOATO DE PIRANTEL y OXANTEL","ANTIPARASITARIOS","BLOQUEADOR NEUROMUSCULAR","D.P. 10-20 mg/kg STAT VO@D.A 750-1000 mg STAT VO","","Dualid, Qantrel tabletas 100 mg @Dualid tabletas 250 mg@Dualid suspension 250mg/5ml@Qantrel suspension 50mg/1ml","","","","","");
remedio[68]=new farmaco("DIAZEPAM","ANTICONVULSIONANTES/ ANTIEPILEPTICOS","","D.P. 0.3-0.5 mg/kg STAT VO hasta 3 dosis","","Diazepam suspension 10mg/2cc","","","","","");
remedio[69]=new farmaco("FENOBARBITAL","ANTICONVULSIONANTES/ ANTIEPILEPTICOS","","D.P. 15-20 mg/kg STAT VO@D.P.(Mantenimiento) 3-5 mg/kg/dia c/12h VO","","Fenobarbital suspension 100mg/2cc@Fenobarbital suspension 200mg/4cc","","","","","");
remedio[70]=new farmaco("FENITOINA","ANTICONVULSIONANTES/ ANTIEPILEPTICOS","","D.P. 15-20 mg/kg STAT VO@D.P.(Mantenimiento) 5-7 mg/kg/dia c/8h o c/12h VO","","Fenitoina, Epamin suspension 100mg/2cc","","","","","");
remedio[71]=new farmaco("FUROSEMIDA","DIURETICOS","","D.P. 1-3 mg/kg/dosis STAT VO EV @D.A. 20-80 mg/dosis STAT VO EV","","Furosemida, Lasix, Nacua tabletas 20 mg@Furosemida, Biosemida, Inclens, Lasix, Lifurox, Salca, Terysol tabletas 40 mg@Furosemida, Lasix, Nacua ampollas 20 mg","","","","","");
remedio[72]=new farmaco("ESPIRONOLACTONA","DIURETICOS","","D.A. 50-200 mg/dia C/8H o C/12H VO EV@D.A.(Hipertension) 12.5-25 mg/dia C/24H VO@D.A.(Insuficiencia Cardiaca) 25-50 mg/dia C/24H VO@D.A.(Hirsutismo) 100-200 mg/dia C/24H VO","","Espironolactona, Adactazida, Aldactone tabletas 25 mg@Espironolactona grageas 25 mg@Espironolactona, Aldactone tabletas 100 mg","","","","","");
remedio[73]=new farmaco("PIPERAZINA","ANTIPARASITARIOS","","Ascardiasis: Lactantes: 100 mg/kg STAT VO@Ascardiasis: 1 a 2: 1 g/kg STAT VO @Ascardiasis: 3 a 5: 2 g/kg STAT VO@Ascardiasis: Adultos 3 g/kg STAT VO@Oxiuriasis: Lactantes: 100 mg/kg C/12H VO@Oxiuriasis: 1 a 2: 500 mg/kg C/12H VO @Oxiuriasis: 3 a 5: 1 g/kg C/12H VO@Oxiuriasis: Adultos 1 g/kg C/8H VO por 4 dias","","Piperazil, Perazin, Piperdin suspension 10g/100cc","","","","","");
remedio[74]=new farmaco("CLORHIDRATO DE AMBROXOL","EXPECTORANTES","","2 A 4: 45 mg/dia C/12H VO@4 A 6: 60 mg/dia C/12H VO@6 A 12: 90 mg/dia C/8H VO@DA: 90 mg/dia C/8H VO","","Ambroxol, Ambrox suspension 15mg/5cc@Ambroxol, Ambrox suspension 30mg/5cc@Ambromuco suspension 30mg/2cc","","","","","");

remedio[75]=new farmaco("CLORHIDRATO DE BROMEXINA","EXPECTORANTES","","2 A 4: 4 mg C/6H VO@4 A 8: 4 mg C/8H VO@8 A 12: 8 mg C/8H VO@DA: 8 mg C/8H VO","","Bromexina,Bedena, Bexilon, Bisolvon suspension 4mg/5cc@Bromexina, Bedena,Bisolvon suspension 8mg/5cc@Bisolvon tabletas 8 mg@Bisolvon ampollas  4mg/2ml","","","","","");
remedio[76]=new farmaco("PIROXICAM","ANTIINFLAMATORIOS (AINES)","INHIBIDOR COX","DA: 10-20 mg c/24h VO ","","Piroxicam tabletas 10 mg adic: despues de las comidas@Piroxicam tabletas 20 mg adic: antes de las comidas","","","","","");
          remedio[76].farcin="Vida media: 57 Horas";
remedio[76].indadic="después de la comida";
remedio[77]=new farmaco("ENALAPRIL","ANTIHIPERTENSIVOS","IECA","DA: 10-20 mg c/24h VO EV","30 mg/Kg","Enalapril tableta 2.5 mg@Enalapril tableta 5 mg@Enalapril tableta 10 mg@Enalapril tableta 100 mg@Enalapril ampolla 1.25mg/1ml","","","","","");
remedio[78]=new farmaco("ZAFIRLUKAST","ANTIASMATICOS","ANTI LEUCOTRIENOS","DA: 20 mg c/12h VO","","Zafirculast, Accolate comprimidos 20 mg","","","","","");
remedio[79]=new farmaco("MONTELUKAST","ANTIASMATICOS","ANTI LEUCOTRIENOS","DA: 10 mg c/24h VO","","Montelukast, Airon, Lukastab,Monukast tabletas 10 mg@Montelukast, Lukastab, Monukast tabletas masticables 5 mg","","","","","");
remedio[80]=new farmaco("SALBUTAMOL","ANTIASMATICOS","AGONISTA BETA2","DA: 200-400 mcg/dosis c/6h VN@DP: 50-100 mcg/dosis c/6h VN","","Salbutamol solucion para inhalar 5mg/5ml@Salbutamol aerosol 100 mcg","","","","","");
remedio[81]=new farmaco("BUDENOSIDA","ANTIASMATICOS","GLUCOCORTICOIDE","DA: 200-400 mcg/dosis c/12h VN","","Budesonida, Budecort,Pulmicort aerosol 50 mcg@Budesonida, Budecort,Pulmicort aerosol 0.20 mg@Budecor suspension para inhalar 1mg/1ml","","","","","");
remedio[82]=new farmaco("LOSARTAN","ANTIHIPERTENSIVOS","ARA II","DA: 50-100 mg/dia c/24h VO","","Losartan comprimidos 50 mg@Losartan comprimidos 100 mg","","","","","");
remedio[83]=new farmaco("CLOTRIMAZOL","ANTIMICOTICOS","","Dgin: 100 mg/dia c/24h VV@D topica: 1 aplicacion/dia c/24h VD","","Clotrimazol Ovulos 100 mg@Clotrimazol Crema 10mg/100mg","","","","","");
remedio[84]=new farmaco("VALSARTAN","ANTIHIPERTENSIVOS","ARA II","DA: 80-160 mg/dia c/24h VO","","Valsartan capsulas 80 mg@Valsartan capsulas 160 mg","","","","","");
remedio[85]=new farmaco("MANITOL","DIURETICOS","","DA: 0 g VO","","Manitol solucion 18%","","","","","");
remedio[86]=new farmaco("HIDROCLOROTIAZIDA","DIURETICOS","","DA:(Diuretico) 20-100 mg/dia c/12h o c/24h VO@DA:(Antihipertensivo) 12.5-50 mg/dia c/24h VO","","Di-eudrin tabletas 12.5 mg@Di-eudrin tabletas 25 mg@Di-eudrin tabletas 50 mg","","","","","");

remedio[87]=new farmaco("BUMETANIDA","DIURETICOS","","Dosis Adulto:(Diuretico) 1 mg/dosis c/6h o c/8h VO @ Dosis Adulto:(Diuretico) 0.5-1 mg/dosis c/6h o c/8h EV","","Biulan tabletas 1 mg@Bumelex comprimidos 1 mg@Bumelex solucion inyectable 0.5 mg","","","","","");

remedio[88]=new farmaco("IRINOTECAN","CITOSTATICOS","","D.A. 100-350 mg/m2 c/semana EV","","Irinotecan solucion inyectable para infusion 100mg/5ml","","","","","");



remedio[89]=new farmaco("ROXITROMICINA","ANTIBIOTICOS","MACROLIDO","DA: 150-300 mg/dia c/12h o c/24h VO  por 5-7 dias @Insufiencia hepática severa: 150 mg/dia c/24h VO","","Roxitromicina, Rulid comprimidos 150 mg@Roxitromicina, Rulid comprimidos 300 mg", "","","","","");
       remedio[89].indic='Infecciones causadas por germenes sensibles broncopulmonares, de la esfera de ORL, cutáneos y genitales. Gérmenes usualmente sensibles: Streptococcus del grupo A, Streptococcus mitis, sanguis, viridans; Streptococcus agalactie; Streptococcus pneumoniae; Meningococo; Gonococo; Bordetella pertusis; Corinebacterium diptheriae; Listeria monocitogenes; Clostridium; Mycoplasma Pneumoniae; Pateurella multocida;  Chlamydia tracomatis y psittaci; Ureaplasma urealyticum; Legionella pneumophila; Campilobacter'; 

       remedio[89].ram="Gastrointestinal: Nauseas, vómitos,  epigastralgia, diarrea;  Cutáneas: manifestaciones alérgicas; Bioquímicas: elevación transitoria de las transaminasas hepáticas y fosfatasa alcalina; Rara: hepatitis colestásica aguda"; 
       remedio[89].cindic="Alergia los macrólidos; asociación con derivados ergóticos y carbamazepina; Emabarazo ó cuando se sospeche; suspender la lactancia durante el tratamiento hasta 6 días después de finalizado"; 
       remedio[89].interac="No existe interacción con la warfarina, estrógenos, progestágenos, ciclosporina, ausencia clinicamente significatica con la teofilina; evitar los ergóticos";

//remedio[62]=new farmaco("ESPIRAMICINA","ANTIBIOTICOS","MACROLIDOS","DA:  6-9 MUI/dia c/8h o c/12h  VO@DP:  1.5 MUI/kg/dia c/8h o c/12h  VO","","Espiramicina, Provamicina tabletas 1.5 MUI","","","","","");
remedio[62]=new farmaco("ESPIRAMICINA","ANTIBIOTICOS","Macrólido","DA: 6-9 MUI/dia C/8h o C/12h VO@Profilaxis de meningitis meningocócica: 3 MUI c/12h VO","","Espiramicina, provamicina comprimidos recubiertos 1.5 MUI","","","","");
       remedio[62].indic="Infecciones por gémenes gram-positivos sensibles (Estafilococos, estreptococos, enterococos, neumococo) y especialmente infecciones respiratorias; toxoplasmoxis ocular e infección aguda en el embarazo temprano"; 
       remedio[62].ram="Gastrointestinales: nauseas, vómitos, diarrea y casos raros de colitis pseudomembranosa; Reacciones de hipersensibilidad: Rash, urticaria y prurito; Casos muy raros: angioedema, schok anafiláctico, casos aislados de vasculitis incluyendo púrpura de Henoch-Schoilein; SNC y periférico: parestesia temporal; Hematológicos: hemólisis aguda; Hepático: casos raros de anormalidad de la función";
       remedio[62].cindic="Pacientes con deficiencia de glucosa-6-fosfato deshidrogenasa, no se recomienda su uso en esta población"; 
       remedio[62].interac="Inhibición de la absorcion de carbidopa, por tanto disminución de los valores plasmáticos de levodopa";

remedio[90]=new farmaco("QUINAPRIL","ANTIHIPERTENSIVOS","","D.A. Hipertension 20-40 mg/dia c/12h VO@D.A. Insuficiencia cardíaca 20 mg/dia c/12h C/24h VO","","Quinapril, Quinalar, Solpres en comprimidos de 10 mg@Quinapril, Quinalar, Quinateric, Solpres en comprimidos de 20 mg@Quinalar, Solpres en comprimidos de 40 mg","","","","","");

remedio[91]=new farmaco("TETRACICLINA","ANTIBIOTICOS","Tetraciclina","DA: 600 mg/dia c/12h VO@Acné 300 mg/dia  c/24h VO x 15 días y luego interdiario","","Tetraciclina, Tetralysal capsulas 300 mg","","","","");
       remedio[91].indic="Acné por alta efectividad contra el Propionibacterium acnes; infecciones por Treponema pallidum en caso de alergia a betalactamicos; enfermedad de Lyme; gonococo; Pasteurella; Leptospira; Mycoplasma pneumoniae; U. urealyticum; H. influenzae; Rickettsia"; 

       remedio[91].ram="Gastrointestinales: nauseas, vómitos, pirosis, diarrea, enterocolitis, glositis; Reacciones de hipersensibilidad: Rash, urticaria y prurito ó edema de Quincke y reacciones de fotosensibilidad; Hematológicos: anemia hemolítica, trombocitopenia, neutropenia, eosinofilia; algunos casos: hipernatremia extrarenal";
       remedio[91].cindic="No administrar durante el embarazo ni la lactancia ";
       remedio[91].interac="No usar con retinoides orales por riesgo de hipertensión endocraneana; no se modifica con los alimentos ni la ingesta de leche";
        remedio[91].indadic="@por 15 días y luego interdiario";

remedio[92]=new farmaco("OXITETRACICLINA","ANTIBIOTICOS","Tetraciclina","DA: 1-2 g/dia VO c/6h","", "Oxitetraciclina, Terramicina capsulas 250 mg","","","","");
       remedio[92].indic="Infecciones respiratorias, genitourinarias, piel y tejidos blandos, huesos; Bacterias gram positivas: Estafilococos (furunculosis, impétigo, osteomielitis, septicemia, endocarditis, peritonitis), Estreptococos (celulitis, angina estreptocócica, amigdalitis, escarlatina, erisipela, endocarditis);neumococos (neumonia lobal, emepiema, meningitis, peritonitis), Difteria, Clostridium (tétanos y gangrena gaseosa), Bacilus anthracis; Bacterias gram negativas: Blenorragia, Meningitis (meningococo), E. coli (pielonefritis, cistitis, peritonitis), Aerobacter aerogenes (cistitis, peritonitis), Klebsiella (neumonía, pielonefritis), Salmonella (fiebre tifoidea), shigella (disenteria bacilar), Brucella (fiebre ondulante) en combinación con estreptomicina, Pasteurella (peste y tularemia), Haemophylus (tos ferina, meningitis y chancroide), granuloma venéreo, cólera; Espiroquetas: Treponema perteneue (frambesia y pian), Treponema carateum (pinta), Borrelia (infección de Vincent, fiebre recurrente), leptospirosis; Rickettsias\
       ;Disenteria amebiana, Disenteria balantidiana; Vaginitis por tricomonas; Actinomicosis; Enterobiosis";
       remedio[92].ram="Orofaringea: coloración marrón y decoloración del esmalte dental; Gastrointestinal: xerostomía, nauseas, vómitos, epigastralgia, flatulencia, diarrea, colitis pseudomembranosa; Renales: proteínuria, aminoaciduria, poliurea, nefritis intersticial; Hepáticas: aumento de transaminasas, icteria, hígado graso; Dermatológicas: Rash, urticaria, dermatitis exfoliativa, fototoxicidad; Hematológicas: púrpura trombocitopénica, leucopenia, eosinofilia, anemia hemolítica";
       remedio[92].cindic="Niños menores de 8 años, embarazo, lactancia, insuficiencia renal y hepática, personas con hipersensibilidad al fármaco";
       remedio[92].interac="Antagonizan los efectos de los betalactamicos, eritromicina, oxacilina, los anticonculsivantes reducen la semivida a la mitad (fenitoína, carbamazepina, barbitúricos), magnesio y sus sales y bicarbonato de sodio reducen la absorción, la oxitetraciclina reduce el efecto de anticonceptivos orales, potencian el efecto de los  anticoagulantes orales";




remedio[93]=new farmaco("HALOPERIDOL","ANTIPSICOTICOS","","D.A. 0.5-100 mg/dia c/24h VO EV","","Haloperidol solucion inyectable de 5mg/1ml, Haldol en tabletas de 2 mg@Haldol en tabletas de 5 mg@Haldol en tabletas de 10 mg","","","","","");
remedio[94]=new farmaco("DOPAMINA","VASOPRESORES","","Dosis inicial: 1 mcg/Kg/min EV","","Dopamina solucion inyectable 50mg/1ml a diluir@Dopamina solucion inyectable 50mg/1ml","","","","","");
remedio[94].diluible="Solución 0.9%@Solución Dextroxa 5%";

       remedio[94].indic="";
       remedio[94].ram="";
       remedio[94].cindic="";
       remedio[94].interac=""; 

remedio[95]=new farmaco("ACECLOFENAC","ANTIINFLAMATORIOS (AINES)","INHIBIDOR COX","D.A 100 mg/dosis c/12h VO","10 mg/Kg","Aceclofenac tabletas 100 mg","","","","","");
       remedio[95].indic="";
       remedio[95].ram="";
       remedio[95].cindic="";
       remedio[95].interac=""; 



remedio[96]=new farmaco("ACETATO DE LEUPROLIDA","CITOSTATICOS","","D.A 3.75-7.5 MG C/4semanas","Acetato de Leuprolida polvo liofilizado 3.75 mg@Acetato de Leuprolida polvo liofilizado 7.5 mg","","","","","");

       remedio[96].indic="";
       remedio[96].ram="";
       remedio[96].cindic="";
       remedio[96].interac=""; 


remedio[97]=new farmaco("ACIDO ACETILSALICILICO","ANTIINFLAMATORIOS (AINES)","INHIBIDOR COX","D.P. 10 mg/Kg/dosis c/4h o c/6h VO@D.A como antiagregante 100 mg/dia c/24h VO@D.A 500-1000 mg/dosis c/4h o c/6h VO","","Acido acetilsalicilico, Aspirina bayer, Aspicor, Bioaspir tabletas 100 mg@Acido acetilsalicilico, Aspirina bayer 500 mg","","","","","");
remedio[98]=new farmaco("ACIDO ALENDRONICO","METABOLISMO OSEO Y CALCIO","","D.A. 70 mg/dosis c/semana VO","","Acido alendronico tabletas 35 mg@Acido alendronico tabletas 70 mg","","","","","");
remedio[99]=new farmaco("LOVASTATINA","METABOLISMO LIPIDICO","","D.A. 20 mg/dia c/24h VO","","Lovastatina comprimidos 20 mg","","","","","");
remedio[100]=new farmaco("ATORVASTATINA","METABOLISMO LIPIDICO","","D.A. 10-80 mg/dia c/24h VO","","Atorvastatina en tabletas de 10 mg@Atorvastatina, Atovarol en tabletas de 20 mg","","","","","");
remedio[101]=new farmaco("CLOPIDOGREL","ANTITROMBOTICOS","","D.A. 75 mg/dia c/24h VO","","Clopidogrel en comprimidos de 75 mg","","","","","");
remedio[102]=new farmaco("RAMIPRIL","ANTIHIPERTENSIVOS","","D.A. 1.25-10 mg/dia c/24h C/12h VO","","Ramipril en tabletas de 2.5 mg@Ramipril en tabletas de 5 mg","","","","","");
remedio[103]=new farmaco("FLUNARIZINA","ANTIMIGRAÑA","","D.A. 10 mg/dia c/24h VO","","Flunarizina, Fludil en comprimidoss de 10 mg","","","","","");
remedio[104]=new farmaco("DIGOXINA","INSUFICIENCIA CARDIACA","","D.A. 0.25 mg/dia c/24h VO EV","","Digoxina en comprimidoss de 0.25 mg@Trivel en solucion inyectable de 0.5mg/2ml","","","","","");
remedio[105]=new farmaco("DIPIRONA","ANALGESICOS","","D.A. 0.5-1 g/dosis c/24h VO EV","","Dipirona en comprimidoss de 500 mg@Dipirona en solucion inyectable de 500mg/ml","","","","","");
remedio[106]=new farmaco("SERTRALINA","ANTIDEPRESIVOS","","D.A. 50-200 mg/dia c/24h VO","","Sertralina en comprimidoss de 50 mg","","","","","");
remedio[107]=new farmaco("GABAPENTINA","ANTICONVULSIONANTES/ ANTIEPILEPTICOS","","D.A. Tratamiento de dolor neuropatico 300 mg/dia c/24h VO","","Gabapentina, Neurontin en capsulas de 300 mg","","","","","");
remedio[108]=new farmaco("ALOPURINOL","ANTIGOTOSOS","","D.A. 100-800 mg/dia c/8h c/12h C/24h VO","","Alopurinol, Aluron en tabletas de 100 mg@Alopurinol, Zyloric en tabletas de 300 mg","","","","","");
remedio[109]=new farmaco("ALPRAZOLAM","ANTIPSICOTICOS","","D.A. Inicial 0.25-0.5 mg c/8h c/12h VO@D.A. Mantenimiento 1-10 mg/dia  c/8h c/12h VO","","Alprazolam, Alpram en tabletas de 0.5 mg@Alprazolam, Alpram en tabletas de 1 mg@Alprazolam, Alpram en tabletas de 2 mg@Alprazolam, Ansilan en comprimidos de 0.5 mg ","","","","","");
remedio[110]=new farmaco("FINASTERIDE","GENITO URINARIO","","D.A. 5 mg/dia c/24h VO","","Finasteride, Finast, Nasterol, Proscar en tabletas de 5 mg","","","","","");
       remedio[110].indic="Hiperplasia prostática benigna";
       remedio[110].ram="";
       remedio[110].cindic="";
       remedio[110].interac=""; 

remedio[111]=new farmaco("FLUOXETINA","ANTIPSICOTICOS","","D.A. 20-60 mg/dia c/24h VO","","Fluoxetina, Fluxet, Fluzac en capsulas de 20 mg","","","","","");
       remedio[111].indic="Depresión mayor, Bulimia nerviosa, Trastornos obsesivos compulsivos";
       remedio[111].ram="";
       remedio[111].cindic="";
       remedio[111].interac=""; 

remedio[112]=new farmaco("ONDANSETRON","ANTIEMETICOS","","D.A. 8-32 mg/dia c/24h VO","","Ondansetron en comprimidos de 4 mg@Ondansetron en comprimidos de 8 mg","","","","","");
       remedio[112].indic="Tratamiento de las nauseas y emesis producida por terapia citotoxica y la radioterapia";
       remedio[112].ram="";
       remedio[112].cindic="";
       remedio[112].interac=""; 
remedio[113]=new farmaco("PANTOPRAZOL","ANTIACIDOS GASTRICOS","INHIBIDOR BOMBA DE PROTONES","DA: 20-40 mg/dia c/24h VO EV","","Pantoprazol, Pantop 20, Zovanta en tabletas de 20 mg@Pantoprazol,Pantop 40, Zovanta en tabletas de 40 mg@Pantop 40 en polvo liofilizado inyectable de 40 mg","","","","","");
       remedio[113].indic="Tratamiento de &uacute;lceras duodenales y g&aacute;stricas, esofagitis por reflujo, sindrome de Zollinger=Ellison y todas las patolog&iacute;as dependientes de hipersecreci&oacute;n g&aacute;strica.";
       remedio[113].desc="Antial&eacute;cido inhibidor de la bomba de protones de las c&eacute;lulas parietales del estomago";
       remedio[113].cindic="Embarazo y lactancia";
remedio[114]=new farmaco("PRAVASTATINA","METABOLISMO LIPIDICO","","D.A. 10-20 mg/dia c/24h VO@ Dosis max 40 mg/dia c/24h VO","","Pravastatina en comprimidos de 10 mg@Pravastatina en comprimidos de 20 mg@Pravastatina sodica, Pravacol en tabletas de 10 mg@Pravacol en tabletas de 20 mg@Pravacol en tabletas de 40 mg","","","","","");
remedio[115]=new farmaco("SIBUTRAMINA","ENFERMEDADES NUTRICIONALES","","D.A. 10 mg/dia c/24h VO@D.A. 15 mg/dia c/24h","","Sibutramina, Milical, Repentil, Siluval en capsulas de 10 mg@Sibutramina, Repentil, Siluval en capsulas de 15 mg","","","","","");
       remedio[115].indic="Tratamiento de la obesidad";
remedio[116]=new farmaco("SILDEFANIL","GENITO URINARIO","","D.A. 25-100 mg/dia c/24h VO","","Sildefanil en tabletas de 50 mg@Sibutramina, Repentil, Siluval en capsulas de 15 mg","","","","","");
       remedio[116].indic="Tratamiento de la disfunción erectil";
remedio[117]=new farmaco("TEICOPLANINA","ANTIBIOTICOS","betalactamicos","D.A. 400 mg/dosis c/12h o c/24h EV","","Teicoplanina, Ticocin polvo liofilizado para solucion inyectable de 200 mg@Teicoplanina, Targocid, Ticocin polvo liofilizado para solucion inyectable de 400 mg","","","","","");
       remedio[117].indic="Tratamiento de las infecciones severas tales como sepsis, endocarditis, producidas por gérmenes Gram positivos sensibles a la teicoplanina";
remedio[118]=new farmaco("AZTREONAM","ANTIBIOTICOS","monolactamicos","D.A. 1-2 g/dosis c/8h o c/12h EV IM","","Aztreonam, Azactam solucion inyectable de 1 g","","","","","");
       remedio[118].indic="Tratamiento de las infecciones causadas por germenes Gram negativos sensibles";
remedio[119]=new farmaco("TINIDAZOL","ANTIPARASITARIOS","","D.A. Unica 2 g/dosis  STAT VO","","Tinidazol en tabletas recubiertas de 500 mg","","","","","");
       remedio[119].indic="Trihomoniasi, amibiasis intestinal, vaginitis inespecifica, giardiasis, profilaxiz continuas a procedimientos quirurgicos asociados a tracto gastrointestinal, colonico y ginecologico";
remedio[120]=new farmaco("CELECOXIB","ANTIINFLAMATORIOS (AINES)","","D.A. 100-200 mg/dosis c/12h VO","","Celecoxib en capsulas de 200 mg","","","","","");
       remedio[120].indic="Antiinflamatorio en el tratamiento de la osteoartrosis y artritis reumatoidea. Analgesico en exodoncia";
remedio[121]=new farmaco("CEFRADINA","ANTIBIOTICOS","Cefalosporina","D.A. 1-4 g/dia c/6h VO@D.P. 25-50 mg/kg/dia c/6h","","Cefradina, Veracef en capsulas de 500 mg","","","","","");
       remedio[121].indic="Activo contra Estreptococo beta-hemolitico, Estreptococo D, S. aureus, Esquerichia coli, Estreptococo pnumonie, Proteus Mirabilis";
remedio[122]=new farmaco("CARBAMAZEPINA","ANTICONVULSIONANTES/ ANTIEPILEPTICOS","","D.P. 10-20 mg/kg/dia c/12h o c/24h VO@D.A. 600-1000 mg/dia c/12h o c/24h","","Carmabazepina en comprimidos de 200 mg","","","","","");
       remedio[122].indic="Tratamiento unico o asociado de las convulsiones tonico clonicas generalizadas primarias y de las convulsiones parciales simples o complejas con o sin generalizacion secundaria. Tratamiento de la neuralgia del trigemino y de la neuralgia del glosofaringeo. Tratamiento de la mania aguda resitente al tratamientocon litio como monoterapia o terapia adyuvante";
remedio[123]=new farmaco("CARBONATO DE LITIO","ANTIPSICOTICOS","","D.P. 300 mg/dia c/24h VO","","Carbonato de litio en capsulas de 300 mg","","","","","");
       remedio[123].indic="Tratamiento del trastorno o depresion bipolar fase maniaca";
remedio[124]=new farmaco("CARVEDILOL","ANTIHIPERTENSIVOS","","D.A. 3.125-12.5 mg/dosis c/12h VO@ D. max 25 mg/dosis c/12h VO","","Carvedilol, Carbatil, Carvedil, Coventrol en tabletas de 6.25 mg@Carvedilol, Carbatil, Carvedil, Coventrol en tabletas de 12.5 mg@Carvedilol, Carbatil, Carvedil, Coventrol en tabletas de 25 mg","","","","","");
       remedio[124].indic="Tratamiento de la hipertension, angina de pecho, insuficiencia cardiaca cronica sintomatica";
remedio[125]=new farmaco("CEFALOTINA","ANTIBIOTICOS","Cefalosporina","D.P. 80-160 mg/kg/dia c/12h IM","","Cefalotina solucion inyectable 1 g","","","","","");
       remedio[125].indic="Infecciones del aparato respiratorio";
remedio[126]=new farmaco("CEFAZOLINA","ANTIBIOTICOS","Cefalosporina","D.P. 25-50 mg/kg/dia c/8h O c/12h IM EV@D.P. Max 100 mg/kg/dia c/8h O c/12h IM EV@D.A. 0.5-1 g/dia c/8h O c/12h IM EV@D.A. max 4 g/dia c/8h O c/12h IM EV ","","Cefazolina, Cefacidal, Cefarizon, Kefzidim, Ranzol solucion inyectable 1 g","","","","","");
       remedio[126].indic="Infecciones del aparato respiratorio";
remedio[127]=new farmaco("CEFEPIME","ANTIBIOTICOS","Cefalosporina de 4ta Generacion","D.P.Niños 50 mg/kg/dosis c/8h IM EV@D.P.Neonatos Lact. menores 10-20 mg/kg/dosis c/8h IM EV@D.A. 0.5-2 g/dosis c/12h IM EV","","Cefepime, Aspime, Forpar, Maxipime solucion inyectable 1 g","","","","","");
       remedio[127].indic="Infecciones del aparato respiratorio";
remedio[128]=new farmaco("CEFOXITINA","ANTIBIOTICOS","Cefalosporina","D.P.Niños 20-40 mg/kg/dosis c/6h O c/8h IM EV@D.A. 1-2 g/dosis c/4h o c/6h IM EV","","Cefoxitina solucion inyectable 1 g","","","","","");
       remedio[128].indic="Infecciones del aparato respiratorio";
remedio[129]=new farmaco("CEFTAZIDIMA","ANTIBIOTICOS","Cefalosporina","D.A. 1-2 g/dia c/8h IM EV","","Ceftazidima en solucion inyectable de 1 g","","","","","");
       remedio[129].indic="Infecciones del aparato respiratorio";
remedio[130]=new farmaco("CIPROTERONA","HORMONALES","","Pubertad precoz: 50-100 mg/m2/dia c/24h VO@Cancer de prostata: 200-300 mg/dia c/24h VO","","Ciproterona en comprimidos de 50 mg","","","","","");
       remedio[130].indic="Pubertad precoz, cancer prostatico y manifestaciones androgenizantes en la mujer";
remedio[131]=new farmaco("CINNARIZINA","ANTIVERTIGINOSOS","","Trastornos circulatorios cerebrales: 25-75 mg/dia c/8h VO@Trastornos de equilibrio: 75 mg/dia c/24h VO por 3 meses","","Cinnarizina, Cinarin, Cinaren en comprimidos de 25 mg@Cinnarizina, Cinarin, Cinaren, Sinver en cápsulas de 75 mg@Cinaren en cápsulas de 150 mg","","","","","");
       remedio[131].indic="Sindrome vertiginoso de diversas etiologias. Profilaxis y tratamiento de la insuficiencia cerebral";
remedio[132]=new farmaco("CLENBUTEROL","ANTIASMATICOS","","Niños: 1.2 mcg/kg/dia c/12h VO@Adultos: 20 mcg/kg/dia c/12h VO","","Clenbuterol solucion pediatrica 5mcg/5ml@Clenbuterol solucion adultos 10mcg/5ml@Clenbuterol jarabe infantil 5mcg/5ml@Clenbuterol jarabe adulto de 10mcg/5ml","","","","","");
       remedio[132].indic="Broncodilatador selectivo";
remedio[133]=new farmaco("CLONIDINA","ANTIHIPERTENSIVOS","","DA: 0.075-0.3 mg c/12h VO@D. max 1.2 mg/dia VO@DA: 0.150 mg c/8h c/12h c/24h IM EV SC@D. max 0.750 mg/dia IM EV SC","","Clonidina, Catapresan en comprimidos de 0.150 mg@Clonidina, Catapresan, Lowpres inyectable de 0.150mg/ml@Clenbuterol jarabe infantil 5mcg/5ml@Clenbuterol jarabe adulto de 10mcg/5ml","","","","","");
       remedio[133].indic="Hipertensión arterial";
remedio[134]=new farmaco("NIMESULIDE","ANTIINFLAMATORIOS (AINES)","","DA: 100-200 mg c/12h VO","","Nimesulide, Nise en tabletas de 100 mg@Nimesulide, Nimelid, Nimecox en comprimidos de 100 mg@Nimesulide, Nimesuvar en cápsulas de 100 mg","","","","","");
       remedio[134].indic="Analgesico, Antiinflamatorio, Antipiretico";
remedio[135]=new farmaco("NIFEDIPINA","ANTIHIPERTENSIVOS","","Hipertension: 20-90 mg/dia c/12h VO@Angina de pecho: 20-90 mg/dia c/8h VO","","Nifedipina en capsulas de 10 mg@Nifedipina en tabletas de 10 mg@Nimfedipina en comprimidos de 10 mg","","","","","");
       remedio[135].indic="Antihipertensivo";
remedio[136]=new farmaco("TRIFLUOPERAZINA","ANTIPSICOTICOS","","DA 2.5-5 mg/dia VO","","Trifluoperazina, Leptazine en tabletas de 5 mg@Trifluoperazina, Leptazine en tabletas de 10 mg","","","","","");
       remedio[136].indic="Trastornos emocionales que se manifiestan por ansiedad, tensón y agitación psicomotora ya sean de origen funcional u orgánico, nauseas y vomitos de distintas etiologías";
remedio[137]=new farmaco("OXITOCINA","HORMONALES","","DA 0.3-1 ml/dosis IM@ 0.06-0.18 ml/dosis diluido ","","Oxitocina solucion inyectale de de 0.5 ml@Oxitocina, Syntocinon solucion inyectale de de 1 ml","","","","","");
       remedio[137].indic="Inducción del parto, inercia uterina, hemorragias postparto";
remedio[138]=new farmaco("SIMVASTATINA","METABOLISMO LIPIDICO","","D.A. 10-80 mg/dia c/24h VO","","Simvastatina, Tinasin, Tavor, Vasotenal en comprimidos de 10 mg@Simvastatina, Tinasin, Tavor, Vasotenal en comprimidos de 20 mg  @Simvastatina, Tinasin, Tavor, Vasotenal en comprimidos de 40 mg@Simvastatina, Tinasin, Tavor, Vasotenal en comprimidos de 80 mg","","","","","");
       remedio[138].indic="Disminución de los niveles elevados del colesterol total y las LDC-C";
remedio[139]=new farmaco("ACEBROFILINA","EXPECTORANTES","","D.A. 100 mg c/12h VO@D.P 3.3 mg/kg/dia c/12h VO","","Acebrofilina, Brixilon, Bronilis en capsulas de 100 mg@Acebrofilina, Brixilon, Bronilis en jarabe de 50mg/5ml","","","","","");
       remedio[139].indic="Mucolitico, expectorante e incrementador de surfactante con actividad broncodilatadora";
remedio[140]=new farmaco("EBASTINA","ANTIALERGICOS","","D.A. 10 mg/dia c/24h VO@D.P 5 mg/dia c/24h VO","","Ebastina, Ebastel en tabletas de 10 mg@Ebastina, Ebastel en solucion oral de 1mg/1ml","","","","","");
       remedio[140].indic="Tratamiento sintomático de la rinitis alérgica (estacional o perenne) asociada o no a la conjuntivitis alérgica. Urticaria crónica idiopatica";
remedio[141]=new farmaco("DESLORATADINA","ANTIALERGICOS","","D.A. 5 mg/dia c/24h VO@D.P 6 meses - 1 año 1 mg/dia c/24h VO@D.P 6 2 - 5 años 1.25 mg/dia c/24h VO@D.P 6 - 11 años 2.5 mg/dia c/24h VO","","Desloratadina, Aerius, Desalex, Esparflin, en tabletas de 5 mg@Desloratadina, Mailen en comprimidos recubiertos de 5 mg@Desloratadina, Desalex en jarabe de 2mg/5ml@Desloratadina, Aerius, Esarflin, Mailen en jarabe de 2.5mg/5ml","","","","","");
       remedio[141].indic="Tratamiento sintomático de la rinitis alérgica (estacional o perenne) asociada o no a la conjuntivitis alérgica. Urticaria crónica idiopatica";
remedio[142]=new farmaco("FEXOFENADINA","ANTIALERGICOS","","D.A. 60-180 mg/dia c/24h VO","","Fexofenadina, Alervax, Allegra, Rinolast en tabletas de 120 mg@Fexofenadina, Alervax, Allegra, Rinolast en tabletas de 180 mg","","","","","");
       remedio[142].indic="Antihistaminico. Tratamiento sintomático de la rinitis alérgica (estacional o perenne) asociada o no a la conjuntivitis alérgica. Urticaria crónica idiopatica";
remedio[143]=new farmaco("LINEZOLID","ANTIBIOTICOS","","D.A. 400-600 mg/dosis c/12h por 10-14 días VO@D.P. 10 mg/kg/dosis c/12h EV VO","","Linezolid, Zyvox en tabletas de 600 mg@Linezolid, Zyvox en solucion para infusion 2mg/ml","","","","","");
       remedio[143].indic="Infecciones producidas por gérmenes sensibles al Linezolid";
       remedio[143].interac="Pseudoefedrina, fenilpropanolamina, tiramina, warfarina, fenitoina"; 
       remedio[143].tinf="1 hora"; 

}
