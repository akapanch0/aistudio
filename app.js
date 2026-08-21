/* ============================================================
   BAREMOS v5.8.33 - app.js COMPLETO (REPARACIÓN INTEGRAL Y TAREAS)
   ============================================================ */
const DEFAULT_BAREMOS = [
  {
    "baremo": "O111302",
    "descripcion": "Por verificacion completa T1 bajo tension de acometida y equipo de medicion en instalacion aereas. Por suministro.",
    "precio": 7625
  },
  {
    "baremo": "O111303",
    "descripcion": "Por verificacion completa T1 bajo tension de acometida y equipo de medicion en instalacion subterraneas. Por suministro.",
    "precio": 3726
  },
  {
    "baremo": "O111304",
    "descripcion": "Cambio de medidor monofasico (Tarea Asociada)",
    "precio": 2930
  },
  {
    "baremo": "O111305",
    "descripcion": "Cambio de medidores trifasicos T1 y T2, en instalaciones aereas asociado a la verificacion de equipos de medicion u otra tarea. Por medidor",
    "precio": 3176
  },
  {
    "baremo": "O111306",
    "descripcion": "Cambio de la/s tapa/s existente por tapa y termomagnetica mono/trifasica en acometidas aereas",
    "precio": 2224
  },
  {
    "baremo": "O111307",
    "descripcion": "Verificacion ocular sin accion. Tarea asociada.",
    "precio": 1335
  },
  {
    "baremo": "O111308",
    "descripcion": "Confeccion de acta por fraude. Tarea asociada.",
    "precio": 3247
  },
  {
    "baremo": "O111309",
    "descripcion": "Retiro de conexiones clandestinas en habitaculo, en acometida o en linea, de clientes de cualquier tarifa. Tarea asociada.",
    "precio": 1391
  },
  {
    "baremo": "O111310",
    "descripcion": "Conexión monofasica con cable concentrico, sin cruce de calle, hasta bornera de medidor o proteccion. Tarea asociada. Incluye colocacion de herrajes de retension.",
    "precio": 9856
  },
  {
    "baremo": "O111311",
    "descripcion": "Conexión monofasica con cable concentrico, con cruce de calle, hasta bornera de medidor o proteccion.",
    "precio": 11570
  },
  {
    "baremo": "O111312",
    "descripcion": "Conexión trifasica con cable concentrico o LAPE, sin cruce de calle, hasta bornera de medidor o proteccion. Tarea asociada. Incluye colocacion de herrajes de retension.",
    "precio": 19307
  },
  {
    "baremo": "O111313",
    "descripcion": "Conexión trifasica con cable concentrico o LAPE, con cruce de calle, hasta bornera de medidor o proteccion. Tarea asociada. Incluye colocacion de herrajes de retension.",
    "precio": 23308
  },
  {
    "baremo": "O111314",
    "descripcion": "Retiro de acometida mono/trifasica sin cruce de calle, por suspension de suministros desde linea o caja de interconexion. Tarea asociada.",
    "precio": 2118
  },
  {
    "baremo": "O111315",
    "descripcion": "Retiro de acometida mono/trifasica con cruce de calle, por suspension de suministros desde linea o caja de interconexion. Tarea asociada.",
    "precio": 3653
  },
  {
    "baremo": "O111316",
    "descripcion": "Instalacion de medidor trifasico, DIME agrupados.",
    "precio": 4056
  },
  {
    "baremo": "O111317",
    "descripcion": "Instalacion de medidor monofasico, tapa y termomagnetica. DIME agrupados.",
    "precio": 4524
  },
  {
    "baremo": "O111318",
    "descripcion": "Retiro de medidor mono o trifasico. DIME agrupados.",
    "precio": 2984
  },
  {
    "baremo": "O111319",
    "descripcion": "Verificacion de funcionamiento y determinacion del error IN SITU de medidor mono o trifasico T1",
    "precio": 3610
  },
  {
    "baremo": "O111320",
    "descripcion": "Verificacion ocular con accion electricas en clientes T1. Tarea asociada.",
    "precio": 2256
  },
  {
    "baremo": "O111321",
    "descripcion": "Soldadura contrapa metalica en medidor o gabinete colectivo. Tarea asociada.",
    "precio": 2382
  },
  {
    "baremo": "O111322",
    "descripcion": "Instalacion de caja antihurto en caja de medidor monofasico existente.",
    "precio": 3176
  },
  {
    "baremo": "O111812",
    "descripcion": "Verif Medidor autoadministrado",
    "precio": 10134
  },
  {
    "baremo": "O111813",
    "descripcion": "Verif.Med.auto adm.c/Cbio medidor",
    "precio": 9946
  },
  {
    "baremo": "O111814",
    "descripcion": "Verif. Medidor auto administr s/ascenso",
    "precio": 2245
  },
  {
    "baremo": "O111832",
    "descripcion": "Reclamo/Verificación MIDE SIN ASCENSO",
    "precio": 4119
  },
  {
    "baremo": "O111830",
    "descripcion": "MIDE piso: Conex UTD+Caja IP+Kit Caño",
    "precio": 10394
  },
  {
    "baremo": "O111803",
    "descripcion": "Verif. MIDE c/HIDRO Incl Cambio UM/UTD",
    "precio": 10133
  },
  {
    "baremo": "O111810",
    "descripcion": "Instalación de medidor Bicuerpo comunicado PLC",
    "precio": 7716
  },
  {
    "baremo": "O111811",
    "descripcion": "Conexión sobre poste UM ADICIONAL",
    "precio": 4699
  },
  {
    "baremo": "O111831",
    "descripcion": "Gest.contratación medidores auto-admin",
    "precio": 4119
  },
  {
    "baremo": "O111820",
    "descripcion": "Multimed: Montaj Caja + Conexión de UM´s",
    "precio": 49132
  },
  {
    "baremo": "O111822",
    "descripcion": "Multimed: Instal Concentrador MIDE",
    "precio": 27962.38
  },
  {
    "baremo": "O111823",
    "descripcion": "Multimed: Instal Adic h/5 UM Post montaj",
    "precio": 8975
  },
  {
    "baremo": "O111824",
    "descripcion": "Multimed: Tendido Agrupado d Concéntrico",
    "precio": 170
  },
  {
    "baremo": "O111801",
    "descripcion": "Instal / Reloc Caja al vuelo y UM-MIDE",
    "precio": 8641
  },
  {
    "baremo": "O111802",
    "descripcion": "Conexión al Vuelo de UM ADICIONAL",
    "precio": 7927
  },
  {
    "baremo": "M120801",
    "descripcion": "Tendido de lape o concentrico 4 x 16 mm2",
    "precio": 350
  },
  {
    "baremo": "M120802",
    "descripcion": "Tendido LAPE <= 3 x 95/50 mm2",
    "precio": 514
  },
  {
    "baremo": "N120804",
    "descripcion": "Coloc.vaina autosold.en conector exist.",
    "precio": 1535
  },
  {
    "baremo": "O220201",
    "descripcion": "Susp.sumin.T1óT2 de bonera med. en Pcia",
    "precio": 4319
  },
  {
    "baremo": "O220202",
    "descripcion": "Susp.sum.T1óT2 d/toma/otro med. en Pcia",
    "precio": 4725
  },
  {
    "baremo": "O220203",
    "descripcion": "Susp.sumin. dde termomag. en Pcia",
    "precio": 2776
  },
  {
    "baremo": "O220204",
    "descripcion": "Susp.sumin.mono/trif.e/altura en Pcia",
    "precio": 5080
  },
  {
    "baremo": "O220205",
    "descripcion": "Retiro acomet. s/cruce p/susp. en Pcia",
    "precio": 4096
  },
  {
    "baremo": "O220206",
    "descripcion": "Retiro acomet. c/cruce p/susp.en Pcia",
    "precio": 8725
  },
  {
    "baremo": "O220210",
    "descripcion": "SUSP MEDIDOR C/HIDRO EN CAJA MULTIMED",
    "precio": 7717
  },
  {
    "baremo": "O220401",
    "descripcion": "Retiro med.T1óT2 p/corte servicio Pcia",
    "precio": 4121
  },
  {
    "baremo": "O220402",
    "descripcion": "Retiro acomet. sin cruce p/corte en Pcia",
    "precio": 6966
  },
  {
    "baremo": "O220403",
    "descripcion": "Retiro acomet. con cruce p/corte en Pcia",
    "precio": 7642
  },
  {
    "baremo": "O220404",
    "descripcion": "Ret. med. y acometida sin cruce en Pcia",
    "precio": 9499
  },
  {
    "baremo": "O220405",
    "descripcion": "Ret. med. y acometida con cruce en Pcia",
    "precio": 10269
  },
  {
    "baremo": "O220410",
    "descripcion": "RETIRO MEDIDOR C/HIDRO EN CAJA MULTIMED",
    "precio": 7667
  },
  {
    "baremo": "O220601",
    "descripcion": "Rehab.sumin.dde bonera med.monof en Pcia",
    "precio": 6501
  },
  {
    "baremo": "O220602",
    "descripcion": "Rehab.sumin.dde bonera med.trif en Pcia",
    "precio": 8072
  },
  {
    "baremo": "O220603",
    "descripcion": "Rehab.sumin.dde protec.termomag. en Pcia",
    "precio": 4633
  },
  {
    "baremo": "O220604",
    "descripcion": "Reinstalación medidor monofásico en Pcia",
    "precio": 4877
  },
  {
    "baremo": "O220605",
    "descripcion": "Reinstalación medidor trifásico en Pcia",
    "precio": 5880
  },
  {
    "baremo": "O220607",
    "descripcion": "Rehab.T1óT2 d/toma/otro med.trif en Pcia",
    "precio": 6682
  },
  {
    "baremo": "O220608",
    "descripcion": "Rehab sumin. Mono/trif en altura",
    "precio": 7382
  },
  {
    "baremo": "O220609",
    "descripcion": "Reinst.acometida monof.sin cruce en Pcia",
    "precio": 12133
  },
  {
    "baremo": "O220610",
    "descripcion": "Reinst.acometida trif.sin cruce en Pcia",
    "precio": 10553
  },
  {
    "baremo": "O220611",
    "descripcion": "Reinst.acometida monof.con cruce en Pcia",
    "precio": 12620
  },
  {
    "baremo": "O220612",
    "descripcion": "Reinst.acometida trif.con cruce en Pcia",
    "precio": 11167
  },
  {
    "baremo": "O220613",
    "descripcion": "Reinst.acom y med.monof. s/cruce en Pcia",
    "precio": 14405
  },
  {
    "baremo": "O220614",
    "descripcion": "Reinst.acom y med.trifas.s/cruce en Pcia",
    "precio": 14781
  },
  {
    "baremo": "O220615",
    "descripcion": "Reinst.acom y med.monof. c/cruce en Pcia",
    "precio": 10299
  },
  {
    "baremo": "O220616",
    "descripcion": "Reinst.acom y med.trifas.c/cruce en Pcia",
    "precio": 15520
  },
  {
    "baremo": "O220620",
    "descripcion": "REHAB MEDIDOR C/HIDRO EN CAJA MULTIMED",
    "precio": 8947
  },
  {
    "baremo": "O220701",
    "descripcion": "Retiro conexión clandestina",
    "precio": 2822
  },
  {
    "baremo": "O220702",
    "descripcion": "Verif.ocular susp,corte o rehab",
    "precio": 2634
  },
  {
    "baremo": "O220703",
    "descripcion": "Acción fallida",
    "precio": 2186
  },
  {
    "baremo": "O220704",
    "descripcion": "Cambio de medidor tarea asociada",
    "precio": 1490
  },
  {
    "baremo": "O220705",
    "descripcion": "Repos. O cambio tapa y termica asoc",
    "precio": 2321
  },
  {
    "baremo": "O220706",
    "descripcion": "Cbio/rep pipeta caño pilar (asoc DIME",
    "precio": 3200
  },
  {
    "baremo": "M111201",
    "descripcion": "Fundación hormigón en terreno normal",
    "precio": 29300
  },
  {
    "baremo": "M120601",
    "descripcion": "Inst.rienda sple con anclaje articulado",
    "precio": 33973
  },
  {
    "baremo": "M120602",
    "descripcion": "Inst.rienda sple con anclaje helicoidal",
    "precio": 17198
  },
  {
    "baremo": "M120603",
    "descripcion": "Instalación de tensor en vano abierto",
    "precio": 20067
  },
  {
    "baremo": "M120604",
    "descripcion": "Retiro rienda o tensor en vano abierto",
    "precio": 4599
  },
  {
    "baremo": "M120701",
    "descripcion": "Inst.herrajes term.o sostén e/pte exist.",
    "precio": 3133
  },
  {
    "baremo": "O110301",
    "descripcion": "Cbio tapa/s c/termomag.aérea,no asociado",
    "precio": 5056
  },
  {
    "baremo": "O110302",
    "descripcion": "Cambio tapa/s c/termomag.aérea,asociado",
    "precio": 2556
  },
  {
    "baremo": "O111323",
    "descripcion": "Fijac y sell de marco y Coloc mirilla",
    "precio": 2382
  },
  {
    "baremo": "O111324",
    "descripcion": "Colocación de mirilla",
    "precio": 1198
  },
  {
    "baremo": "M120901",
    "descripcion": "Ret.LABT.convenc.desmont.pequeños disp.",
    "precio": 106
  },
  {
    "baremo": "M120902",
    "descripcion": "Ret.LABT.preensambl.desmont.pqños disp.",
    "precio": 170
  },
  {
    "baremo": "M121001",
    "descripcion": "Inst.caja interconexión mono/trifasica",
    "precio": 7397
  },
  {
    "baremo": "M121101",
    "descripcion": "Instalación jabalina de p.a.t.en L.A.B.T",
    "precio": 14687
  },
  {
    "baremo": "M121201",
    "descripcion": "Coloc. manta termocontraible en LAPE",
    "precio": 3787
  },
  {
    "baremo": "M121301",
    "descripcion": "Traspaso acometida por cbio conduc. LABT",
    "precio": 778
  },
  {
    "baremo": "M420103",
    "descripcion": "Conex.monof.c/c.conc.dde linea sin cruce",
    "precio": 7292
  },
  {
    "baremo": "M420104",
    "descripcion": "Conex.monof.c/c.conc.dde linea con cruce",
    "precio": 9731
  },
  {
    "baremo": "M420107",
    "descripcion": "Conexión trifásica desde línea sin cruce",
    "precio": 12774
  },
  {
    "baremo": "M420108",
    "descripcion": "Conexión trifásica desde línea con cruce",
    "precio": 16124
  },
  {
    "baremo": "M420302",
    "descripcion": "Instalación pilar (madera) carenciado con 1 caja. Por pilar.",
    "precio": 15916
  },
  {
    "baremo": "M420303",
    "descripcion": "Retiro de pilar carenciado.",
    "precio": 6845
  },
  {
    "baremo": "M420304",
    "descripcion": "Instalación de caja para medidor (monofásico o trifásico), adicional en pilar existente (posición izquierda o derecha) o montada sobre pared. Por 2.243,00",
    "precio": 2243
  },
  {
    "baremo": "M420305",
    "descripcion": "Col.caño adicional en pilar exist/pared",
    "precio": 3694
  },
  {
    "baremo": "M420401",
    "descripcion": "Retiro y reinst.artefacto alumb.público",
    "precio": 11817
  },
  {
    "baremo": "M420402",
    "descripcion": "Provisión/colocación fotocélula para AP",
    "precio": 5502
  },
  {
    "baremo": "N121103",
    "descripcion": "Aplomado de pilar carenciado existente",
    "precio": 8732
  },
  {
    "baremo": "N410301",
    "descripcion": "PODA PUNTUAL EQUILIBRADA 1 a 2 árboles",
    "precio": 6428
  },
  {
    "baremo": "N221601",
    "descripcion": "Reparación de avería conex.cliente",
    "precio": 2458
  },
  {
    "baremo": "N221602",
    "descripcion": "Reparación de averia red BT",
    "precio": 20032
  },
  {
    "baremo": "N221605",
    "descripcion": "Reclamo fallido/reposición termomag.",
    "precio": 5803
  },
  {
    "baremo": "N221901",
    "descripcion": "Cierre/apertura de red en buzón",
    "precio": 2437
  },
  {
    "baremo": "N221902",
    "descripcion": "Cierre/apertura de red en caja esquinera",
    "precio": 3494
  },
  {
    "baremo": "N222104",
    "descripcion": "Cbio tapa c/termomag. subterr, asociado",
    "precio": 707
  },
  {
    "baremo": "N310601",
    "descripcion": "Cbio conexionado completo MT en plataf.",
    "precio": 88259
  },
  {
    "baremo": "N121401",
    "descripcion": "Reparación de avería en red aérea BT",
    "precio": 17765
  },
  {
    "baremo": "N121402",
    "descripcion": "Repar.de avería en cruce,acomet.o medic.",
    "precio": 10021
  },
  {
    "baremo": "N121403",
    "descripcion": "Reposición termomagnética, única tarea.",
    "precio": 5566
  },
  {
    "baremo": "N121404",
    "descripcion": "Reposic.del servicio c/ramal provisorio",
    "precio": 4026
  },
  {
    "baremo": "N121405",
    "descripcion": "Rep.fallida instal. Edenor y clte normal",
    "precio": 5566
  },
  {
    "baremo": "N121406",
    "descripcion": "Rep.fallida problema interno cliente",
    "precio": 5225
  },
  {
    "baremo": "N121412",
    "descripcion": "Recl MIDE CON ASCENSO tareaaltura y piso",
    "precio": 8429
  },
  {
    "baremo": "N121432",
    "descripcion": "Recl MIDE SIN ASCENSO -tareas desde piso",
    "precio": 4870
  },
  {
    "baremo": "N121801",
    "descripcion": "Cbio medidor monofás.T1 aérea, asociado",
    "precio": 8357
  },
  {
    "baremo": "N121804",
    "descripcion": "Cbio tapa/s c/termomag. aérea, asociado",
    "precio": 3891
  },
  {
    "baremo": "N121603",
    "descripcion": "Cbio/rep pipeta caño pilar (tarea asoc)",
    "precio": 1343
  },
  {
    "baremo": "N120607",
    "descripcion": "Cbio conex.monofás.c/c concent.s/cruce",
    "precio": 7558
  },
  {
    "baremo": "N120608",
    "descripcion": "Cbio conex.monofás.c/c concent.c/cruce",
    "precio": 9256
  },
  {
    "baremo": "N120703",
    "descripcion": "Reparación de conductores LABT convenc.",
    "precio": 4749
  },
  {
    "baremo": "N120704",
    "descripcion": "Reparación de conductor neutro de LAPE",
    "precio": 13890
  },
  {
    "baremo": "N120705",
    "descripcion": "Rep.conduc.cruce de calle LAPE o convenc",
    "precio": 3876
  },
  {
    "baremo": "N120802",
    "descripcion": "Desconexión,reconex.o retiro de puentes",
    "precio": 3761
  },
  {
    "baremo": "N120803",
    "descripcion": "Cambio uno ó más morsetos por conexión",
    "precio": 4517
  },
  {
    "baremo": "N111103",
    "descripcion": "Colocación de disuasivos de aves",
    "precio": 1375
  },
  {
    "baremo": "N110202",
    "descripcion": "Ejecución empalmes rectos d/conduct.LAMT",
    "precio": 56995
  },
  {
    "baremo": "M110201",
    "descripcion": "Poste simple H°A° L.Vertical o Compacta",
    "precio": 59014
  },
  {
    "baremo": "M111104",
    "descripcion": "Retiro poste simpe de madera de LAMT",
    "precio": 8264
  },
  {
    "baremo": "M120201",
    "descripcion": "Instalación completa poste simple sosten, terminal, amarre (simple o doble, con o sin desvio/derivación), de madera, de hasta 9 metros de altura.",
    "precio": 18448
  },
  {
    "baremo": "M120202",
    "descripcion": "Instalación completa poste simple sosten, terminal, amarre (simple o doble, con o sin desvio/derivación), de madera, de 11 metros de altura. La p",
    "precio": 31918
  },
  {
    "baremo": "M120301",
    "descripcion": "Instalación completa poste simple terminal de madera, de hasta 9 metros de altura, con contraposte. Incluye provisión y tratamiento de durmientes",
    "precio": 76779
  },
  {
    "baremo": "M120302",
    "descripcion": "Inst.poste madera c/contraposte de 11m",
    "precio": 95833
  },
  {
    "baremo": "M120305",
    "descripcion": "Inst.poste simple H° hasta 9 m c/fund.",
    "precio": 102040
  },
  {
    "baremo": "M120401",
    "descripcion": "Transf.pte sple e/term.<=9 m c/ctrpte",
    "precio": 40923
  },
  {
    "baremo": "M120501",
    "descripcion": "Retiro poste o contraposte madera h/11m",
    "precio": 6765
  },
  {
    "baremo": "M120502",
    "descripcion": "Ret.poste doble o poste c/ctrposte h/11m",
    "precio": 12985
  },
  {
    "baremo": "M120503",
    "descripcion": "Retiro poste hormigon s/fundación h/9m",
    "precio": 27307
  },
  {
    "baremo": "N120101",
    "descripcion": "Cambio poste simple sostén madera h/9m",
    "precio": 24416
  },
  {
    "baremo": "N120102",
    "descripcion": "Cambio poste simple sostén madera 11m",
    "precio": 28153
  },
  {
    "baremo": "N120104",
    "descripcion": "Cbio pte sple term/amarre madera h/9m",
    "precio": 34603
  },
  {
    "baremo": "N120105",
    "descripcion": "Cbio poste simple term/amarre madera 11m",
    "precio": 37174
  },
  {
    "baremo": "N120201",
    "descripcion": "Cbio poste y contraposte d/madera h/9m",
    "precio": 92708
  },
  {
    "baremo": "N120202",
    "descripcion": "Cbio poste y contraposte de madera 11m",
    "precio": 67924
  },
  {
    "baremo": "N120203",
    "descripcion": "Cambio postes dobles de madera h/9m",
    "precio": 92858
  },
  {
    "baremo": "N120204",
    "descripcion": "Cambio postes dobles de madera 11m",
    "precio": 94396
  },
  {
    "baremo": "N120205",
    "descripcion": "Cambio contraposte en línea de h/9m",
    "precio": 39358
  },
  {
    "baremo": "N120206",
    "descripcion": "Cambio contraposte en línea de 11m",
    "precio": 46330
  },
  {
    "baremo": "N120207",
    "descripcion": "Sunchado poste c/prov/coloc.pte tutor",
    "precio": 10350
  },
  {
    "baremo": "N120302",
    "descripcion": "Retensado de rienda existente",
    "precio": 3962
  },
  {
    "baremo": "N120403",
    "descripcion": "Cambio de cruceta simple sostén",
    "precio": 3962
  },
  {
    "baremo": "N120501",
    "descripcion": "Cambio de conductores LAPE",
    "precio": 905
  },
  {
    "baremo": "N120605",
    "descripcion": "Cbio conex.monof.conv.x concent.s/cruce",
    "precio": 9728
  },
  {
    "baremo": "N120606",
    "descripcion": "Cbio conex.monof.conv.x concent c/cruce",
    "precio": 12976
  },
  {
    "baremo": "N120702",
    "descripcion": "Tensado de LABT preensamblada existente",
    "precio": 243
  },
  {
    "baremo": "N121101",
    "descripcion": "Aplomado poste simple de madera exist.",
    "precio": 10810
  },
  {
    "baremo": "N121102",
    "descripcion": "Aplomado poste doble de madera exist.",
    "precio": 18247
  },
  {
    "baremo": "N121104",
    "descripcion": "Aplomado de columna H°A° en LABT",
    "precio": 6788
  },
  {
    "baremo": "N121203",
    "descripcion": "Retiro conduc.cortados energiz.s/reparar",
    "precio": 3242
  },
  {
    "baremo": "N121701",
    "descripcion": "Cbio masivo poste sple de madera h/9m",
    "precio": 24416
  },
  {
    "baremo": "N121702",
    "descripcion": "Cambio poste simple sostén madera 11m",
    "precio": 29229
  }
];

const APP_VERSION = '5.8.38';

const CURRENT_TERMS_VERSION = 1;

const State = {
  user: null,
  jornada: null,
  currentTarea: { id: null, fecha: '', hora: '', zona: '', items: [], total: 0 },
  baremo: [...DEFAULT_BAREMOS],
  theme: 'light',
  currentVersion: null,
  histFilter: 'hoy',
  histSelected: new Set(),
  adminLoggedIn: false,
  adminReportType: 'diario',
  updateAvailable: false,
  mensaje200kMostrado: false,
  mensaje150kMostrado: false,
  mensaje125kMostrado: false,
  mensaje100kMostrado: false,
  metaAlcanzada: false,
  notifEnabled: false,
  notifTime: '18:00',
  lastNotifDate: null
};

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const fmt = n => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n || 0);
const fmtNum = n => new Intl.NumberFormat('es-AR').format(n || 0);

/* ============================================================
   LÓGICA CENTRALIZADA DE RANGOS Y COLORES
   ============================================================ */
function getConfigDia(monto) {
  if (monto > 200000) return { cls: 'bg-gold', hex: '#D4AF37', nombre: 'Excelente (>200k)' };
  if (monto >= 150000) return { cls: 'bg-green-intense', hex: '#16a34a', nombre: 'Muy Bueno (≥150k)' };
  if (monto >= 125000) return { cls: 'bg-green-soft', hex: '#65a30d', nombre: 'Bueno (≥125k)' };
  if (monto >= 100000) return { cls: 'bg-yellow-green', hex: '#ca8a04', nombre: 'Regular (≥100k)' };
  return { cls: 'bg-red', hex: '#ef4444', nombre: 'Bajo (<100k)' };
}

function getConfigMes(monto) {
  if (monto <= 1500000) return { cls: 'tac-red', hex: '#ef4444', nombre: 'Bajo (≤1.5M)' };
  if (monto <= 2000000) return { cls: 'tac-yellow', hex: '#facc15', nombre: 'Regular (≤2M)' };
  if (monto <= 2500000) return { cls: 'tac-green-soft', hex: '#4ade80', nombre: 'Bueno (≤2.5M)' };
  if (monto < 3000000) return { cls: 'tac-green-intense', hex: '#22c55e', nombre: 'Muy Bueno (<3M)' };
  return { cls: 'tac-gold', hex: '#fbbf24', nombre: 'Excelente (≥3M)' };
}

/* ============================================================
   CONTENIDO MENÚ LEGAL
   ============================================================ */
const INFO_CONTENT = {
  privacidad: {
    title: "Política de Privacidad",
    html: `<h3>1. Introducción</h3><p>La presente Política de Privacidad describe cómo se gestiona la información dentro del sitio web BAREMO y su aplicación asociada. Este proyecto es un desarrollo 100% freelance, sin asociaciones comerciales ni vínculos con terceros.</p><h3>2. No recopilación de datos personales</h3><p>BAREMO no recopila, almacena ni procesa datos personales de los usuarios.</p><p>El sitio y la aplicación no solicitan información identificatoria, no registran actividad del usuario y no acceden a datos del dispositivo.</p><h3>3. Información local</h3><p>Toda la información que el usuario ingresa en la aplicación se mantiene localmente en su dispositivo, sin ser enviada ni almacenada en servidores externos.</p><h3>4. Cookies y tecnologías de seguimiento</h3><p>Este sitio no utiliza cookies, herramientas de análisis, publicidad, ni tecnologías de rastreo.</p><h3>5. Compartición de información</h3><p>Dado que no se recopilan datos, no existe ningún tipo de cesión, venta o transferencia de información a terceros.</p><h3>6. Seguridad</h3><p>Aunque no se manejan datos personales, se aplican medidas básicas de seguridad para garantizar el funcionamiento correcto del sitio y la aplicación.</p><h3>7. Actualizaciones</h3><p>BAREMO puede modificar esta política en cualquier momento. Las actualizaciones se publicarán en este sitio web.</p>`
  },
  terminos: {
    title: "Términos y Condiciones",
    html: `<h3>1. Aceptación</h3><p>Al utilizar el sitio o la aplicación BAREMO, el usuario acepta estos Términos y Condiciones. Si no está de acuerdo, debe abstenerse de utilizar el servicio.</p><h3>2. Descripción del servicio</h3><p>BAREMO es una herramienta destinada al control y registro de ganancias diarias para contratistas del rubro eléctrico.</p><p>El servicio se ofrece “tal cual”, sin garantías de disponibilidad continua o ausencia de errores.</p><h3>3. Uso permitido</h3><p>El usuario se compromete a utilizar el sitio y la aplicación de manera legal y responsable. Queda prohibido:</p><ul><li>Manipular o intentar acceder a funciones no autorizadas.</li><li>Utilizar el servicio para actividades ilícitas.</li><li>Realizar ingeniería inversa, descompilación o extracción del código fuente.</li></ul><h3>4. Responsabilidad</h3><p>BAREMO no se responsabiliza por:</p><ul><li>Errores derivados del uso incorrecto del servicio.</li><li>Pérdida de información almacenada localmente en el dispositivo del usuario.</li><li>Fallas técnicas, interrupciones o indisponibilidad del servicio.</li></ul><h3>5. Modificaciones</h3><p>Los presentes términos pueden actualizarse sin previo aviso. Las modificaciones se publicarán en este sitio.</p>`
  },
  legal: {
    title: "Aviso Legal",
    html: `<p>BAREMO es un proyecto independiente y freelance, sin asociaciones con empresas, entidades o marcas del sector eléctrico.</p><p>La información presentada en el sitio y la aplicación tiene fines operativos y organizativos para contratistas.</p><p>No se garantiza la exactitud de los cálculos o registros generados por el usuario, ya que cada contratista maneja sus propios Baremos y estos pueden variar.</p><p>El desarrollador no asume responsabilidad por decisions comerciales tomadas a partir del uso de la aplicación.</p>`
  },
  contacto: {
    title: "Contacto",
    html: `<p>Para consultas, sugerencias o reportes relacionados con la aplicación BAREMO, podés comunicarte a:</p><p>📧 Email: <a href="mailto:contacto@baremo.app">contacto@baremo.app</a><br>🌐 Desarrollador: Proyecto freelance AKAPANCH0<br>📍 Ubicación: Buenos Aires, Argentina</p>`
  },
  nosotros: {
    title: "Sobre Nosotros",
    html: `<p>BAREMO es un proyecto desarrollado de manera 100% freelance, sin asociaciones comerciales ni vínculos con terceros.</p><p>Nuestro objetivo es ofrecer una herramienta simple, clara y eficiente para contratistas del rubro eléctrico, permitiendo registrar y controlar sus ganancias diarias, tareas realizadas y organización operativa.</p><p>Creemos en soluciones prácticas, livianas y sin complicaciones. Por eso, nuestra aplicación funciona de manera local, sin recopilar datos personales y sin depender de servidores externos.</p><p>BAREMO es independiente, transparente y diseñado para profesionales que necesitan una herramienta confiable para su trabajo diario.</p>`
  }
};

function showInfoModal(key) {
  const data = INFO_CONTENT[key];
  if (!data) return;
  const title = $('#modalInfoTitle');
  const content = $('#modalInfoContent');
  const modal = $('#modalInfo');
  if (title && content && modal) {
    title.textContent = data.title;
    content.innerHTML = data.html;
    modal.classList.add('show');
  }
}

/* ============================================================
   ZONAS Y MAPAS (PRECARGA INTEGRAL Y VISUALIZACIÓN RÁPIDA)
   ============================================================ */
const ZONA_MAPAS = {
  'Trujui': { archivo: 'trujui.png', nombre: 'Trujui', id: 'Trujui' },
  'Cuartel V': { archivo: 'cuartelv.png', nombre: 'Cuartel V', id: 'Cuartel V' },
  'Moreno': { archivo: 'moreno.png', nombre: 'Moreno', id: 'Moreno' },
  'Gral. Rodríguez': { archivo: 'gralrodriguez.png', nombre: 'Gral. Rodríguez', id: 'Gral. Rodríguez' },
  'Tigre': { archivo: 'tigre.png', nombre: 'Tigre', id: 'Tigre' },
  'San Martín': { archivo: 'sanmartin.png', nombre: 'San Martín', id: 'San Martín' },
  'Olivos': { archivo: 'olivos.png', nombre: 'Olivos', id: 'Olivos' },
  'Pilar-Escobar': { archivo: 'pilarescobar.png', nombre: 'Pilar-Escobar', id: 'Pilar-Escobar' }
};

function normalizeZonaString(z) {
  if (!z) return '';
  return String(z)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function getMapaInfo(zona) {
  if (!zona) return null;
  if (ZONA_MAPAS[zona]) return ZONA_MAPAS[zona];
  
  const norm = normalizeZonaString(zona);
  if (!norm) return null;

  for (const k of Object.keys(ZONA_MAPAS)) {
    if (normalizeZonaString(k) === norm) {
      return ZONA_MAPAS[k];
    }
  }

  if (norm.includes('sanmartin') || (norm.includes('martin') && !norm.includes('martelli'))) return ZONA_MAPAS['San Martín'];
  if (norm.includes('pilar') || norm.includes('escobar')) return ZONA_MAPAS['Pilar-Escobar'];
  if (norm.includes('olivo') || norm.includes('vicentelopez')) return ZONA_MAPAS['Olivos'];
  if (norm.includes('tigre')) return ZONA_MAPAS['Tigre'];
  if (norm.includes('cuartel')) return ZONA_MAPAS['Cuartel V'];
  if (norm.includes('rodriguez') || norm.includes('gralrodriguez')) return ZONA_MAPAS['Gral. Rodríguez'];
  if (norm.includes('moreno')) return ZONA_MAPAS['Moreno'];
  if (norm.includes('trujui')) return ZONA_MAPAS['Trujui'];

  return null;
}

const preloadedMapImages = {};

function preloadMapas() {
  Object.keys(ZONA_MAPAS).forEach(k => {
    const m = ZONA_MAPAS[k];
    const im = new Image();
    im.src = `maps/${m.archivo}`;
    preloadedMapImages[k] = im;
    preloadedMapImages[m.archivo] = im;
    preloadedMapImages[normalizeZonaString(k)] = im;
  });
}

function renderMapaIntoElements(zona, elements) {
  const { container, img, placeholder, titulo, nombre } = elements;
  if (!container) return;

  const mapa = getMapaInfo(zona);

  if (!zona || !mapa) {
    if (titulo) titulo.textContent = 'Previsualización de Mapa';
    if (nombre) nombre.textContent = 'Seleccioná una zona';
    if (img) img.style.display = 'none';
    if (placeholder) {
      placeholder.innerHTML = `<div><span class="zmp-ico">🗺️</span><span>Seleccioná una zona para ver el mapa</span></div>`;
      placeholder.style.display = 'grid';
    }
    container.classList.add('show');
    return;
  }

  if (titulo) titulo.textContent = `Zona: ${mapa.nombre}`;
  if (nombre) nombre.textContent = mapa.nombre;

  const targetSrc = `maps/${mapa.archivo}`;

  // Si ya tenemos la imagen precargada en memoria o en DOM
  const normKey = normalizeZonaString(mapa.nombre);
  const preloaded = preloadedMapImages[mapa.nombre] || preloadedMapImages[normKey] || preloadedMapImages[mapa.archivo];
  if (preloaded && preloaded.complete && preloaded.naturalWidth > 0) {
    if (img) {
      img.src = targetSrc;
      img.style.display = 'block';
    }
    if (placeholder) placeholder.style.display = 'none';
    container.classList.add('show');
    return;
  }

  if (img) img.style.display = 'none';
  if (placeholder) {
    placeholder.innerHTML = `<div><span class="zmp-ico">⏳</span><span>Cargando mapa de ${mapa.nombre}...</span></div>`;
    placeholder.style.display = 'grid';
  }
  container.classList.add('show');

  const nuevaImg = new Image();
  nuevaImg.onload = () => {
    preloadedMapImages[mapa.nombre] = nuevaImg;
    preloadedMapImages[normKey] = nuevaImg;
    preloadedMapImages[mapa.archivo] = nuevaImg;
    if (img) {
      img.src = targetSrc;
      img.style.display = 'block';
    }
    if (placeholder) placeholder.style.display = 'none';
    container.classList.add('show');
  };
  nuevaImg.onerror = () => {
    if (placeholder) {
      placeholder.innerHTML = `<div><span class="zmp-ico">⚠️</span><span>Mapa no disponible para ${mapa.nombre}</span></div>`;
      placeholder.style.display = 'grid';
    }
    container.classList.add('show');
  };
  nuevaImg.src = targetSrc;
}

function mostrarMapaZona(zona) {
  renderMapaIntoElements(zona, {
    container: $('#zonaMapaContainer'),
    img: $('#zonaMapaImg'),
    placeholder: $('#zonaMapaPlaceholder'),
    titulo: $('#zonaMapaTitulo'),
    nombre: $('#zonaMapaNombre')
  });
}

function mostrarMapaModalZona(zona) {
  renderMapaIntoElements(zona, {
    container: $('#modalZonaMapaContainer'),
    img: $('#modalZonaMapaImg'),
    placeholder: $('#modalZonaMapaPlaceholder'),
    titulo: $('#modalZonaMapaTitulo'),
    nombre: $('#modalZonaMapaNombre')
  });
}

function setupMapaZona() {
  const s = $('#loginZona');
  if (s) {
    s.addEventListener('change', e => mostrarMapaZona(e.target.value));
    s.addEventListener('input', e => mostrarMapaZona(e.target.value));
  }
  const z2 = $('#newZonaSelect');
  if (z2) {
    z2.addEventListener('change', e => mostrarMapaModalZona(e.target.value));
    z2.addEventListener('input', e => mostrarMapaModalZona(e.target.value));
  }
}

/* ============================================================
   FRASES MOTIVACIONALES
   ============================================================ */
const FRASES = ["Hoy es un nuevo día productivo","Tu esfuerzo es tu mayor recompensa","Cada tarea completada es un paso hacia el éxito","La disciplina vence al talento","Hacé que cada minuto cuente","El éxito es la suma de pequeños esfuerzos","Tu dedicación inspira a los demás","Cada baremo es una victoria","La constancia es la clave del progreso","Hoy vas a superar tus propios récords","El trabajo bien hecho no pasa desapercibido","Cada día es una nueva oportunidad","La excelencia es un hábito, no un acto","Tu compromiso marca la diferencia","Los grandes logros empiezan con un primer paso","La perseverancia convierte sueños en realidad","Hoy construyes el mañana que querés","Cada desafío es una oportunidad de crecer","Tu actitud define tu altitud","El esfuerzo de hoy es el éxito de mañana","Somos lo que hacemos día tras día","La pasión por el trabajo se nota en los resultados","Cada jornada es una página de tu historia","Tu determinación es tu superpoder","Los resultados llegan a quienes no se rinden","Hoy es el día perfecto para dar lo mejor","La calidad no es un acto, es un hábito","Cada meta alcanzada abre nuevas puertas","Tu trabajo duro tiene su recompensa","El éxito se construye día a día","Vos tenés el poder de hacer la diferencia","Cada tarea es una oportunidad de brillar","La motivación te pone en marcha, el hábito te mantiene","Hoy es tu día para destacar","El progreso, no la perfección, es lo que importa","Tu energía positiva transforma el entorno","Cada esfuerzo suma al gran objetivo","La acción es la clave fundamental de todo éxito","Vos podés lograr lo que te propongas","El trabajo en equipo multiplica los resultados","Cada día es una nueva chance de ser mejor","La dedicación abre todas las puertas","Tu constancia es admirada por todos","El éxito no es casualidad, es trabajo duro","Cada baremo completado es un logro personal","Hoy es un gran día para tener un gran día","La actitud positiva atrae resultados positivos","Tu esfuerzo construye tu futuro","Cada paso cuenta en el camino al éxito","La pasión convierte el trabajo en arte","Vos sos el arquitecto de tu propio destino","Cada jornada es una nueva aventura","El trabajo bien hecho es su propia recompensa","Tu compromiso inspira a todo el equipo","Hoy dejás huella con tu trabajo","La excelencia está en los detalles","Cada meta es un escalón hacia arriba","Tu esfuerzo diario construye grandes cosas","El éxito llega a quienes se preparan","Vos tenés todo lo necesario para triunfar","Cada día es una nueva página en blanco","La disciplina es el puente entre metas y logros","Tu trabajo es tu firma personal","Cada logro comienza con la decisión de intentarlo","El esfuerzo constante supera al talento natural","Hoy es el día de superar tus límites","Tu dedicación es la base de tu éxito","Cada tarea completada es una victoria","La paciencia y el esfuerzo todo lo pueden","Vos marcás la diferencia con tu trabajo","Cada día es una oportunidad de aprender","El éxito es la consecuencia del esfuerzo","Tu trabajo habla por vos","Cada jornada es un paso hacia la meta","La fortaleza viene de superar desafíos","Cada logro es un motivo para celebrar","El trabajo duro supera al talento cuando el talento no trabaja duro","Tu esfuerzo de hoy construye tu éxito de mañana","La pasión por lo que hacés es tu mejor herramienta","Vos sos capaz de lograr cosas increíbles","Cada tarea es una oportunidad de demostrar tu valor","El éxito se mide por el progreso, no por la perfección","Tu dedicación diaria hace la diferencia","Cada meta alcanzada es un nuevo comienzo","La actitud lo es todo","Vos escribís tu propia historia de éxito","El trabajo en equipo hace que los sueños funcionen","Tu esfuerzo es la semilla de tu éxito","Cada día es un regalo, por eso se llama presente","La perseverancia es la madre de la suerte","Vos tenés el poder de cambiar tu realidad","Cada tarea completada te acerca a tu meta","El coraje para continuar es lo que cuenta","Tu trabajo es tu mejor carta de presentación","Vos sos el protagonista de tu propia historia","Cada logro es un escalón hacia tu sueño","El esfuerzo de hoy es la tranquilidad de mañana","Tu compromiso es tu mayor fortaleza","Cada jornada es una nueva aventura por vivir","La dedicación convierte lo ordinario en extraordinario","El trabajo duro siempre paga","Tu esfuerzo diario construye tu legado","Cada día es una nueva oportunidad de triunfar","La pasión por el trabajo se refleja en los resultados","Vos sos la clave de tu propio éxito","Cada logro es un motivo de orgullo","El esfuerzo constante abre todas las puertas","Tu dedicación es tu mejor inversión","La actitud positiva es el primer paso al éxito","Cada tarea completada es un paso adelante","Tu esfuerzo es la base de tu futuro","La disciplina es la madre del éxito","Vos sos capaz de superar cualquier obstáculo","Cada logro es una celebración del esfuerzo","El trabajo duro convierte los sueños en realidad","La perseverancia es la clave de todo logro","Cada tarea es una oportunidad de demostrar tu capacidad","El éxito llega a quienes trabajan por él","La excelencia se logra con dedicación","Cada logro es un motivo para seguir adelante","El trabajo duro es el camino al éxito","Vos sos el autor de tu propio destino","El trabajo duro siempre da sus frutos","Tu dedicación es tu sello personal","La actitud positiva atrae cosas positivas","Cada tarea completada es una victoria personal","Hoy es un día para recordar","Tu esfuerzo marca la diferencia","Cada día cuenta en tu camino","La constancia es tu mejor aliada","Vos tenés todo lo que necesitás","El éxito está en tus manos","Cada jornada es una nueva oportunidad","Tu dedicación es admirable","La pasión te lleva lejos","Vos sos capaz de grandes cosas","El trabajo en equipo es tu fortaleza","Cada logro es un paso más","Tu esfuerzo inspira a otros","La excelencia es tu marca personal","Vos construís tu propio camino","Cada día es una nueva chance","Tu dedicación da frutos","El éxito es tu destino","Vos marcás la diferencia","Cada tarea es importante","Tu esfuerzo vale la pena","La perseverancia es tu fuerza","Vos sos un ejemplo a seguir","Cada logro te acerca a tu meta","Tu dedicación es tu mejor arma","El trabajo duro te define","Vos tenés el potencial","Cada día es una bendición","Tu esfuerzo construye tu futuro","La pasión es tu motor","Vos sos único y especial","Cada jornada es un regalo","Tu dedicación es tu legado","El éxito es tuyo","Vos podés con todo","Cada logro es una victoria","Tu esfuerzo es tu firma","La excelencia es tu hábito","Vos sos el mejor","Cada día es una oportunidad","Tu dedicación es tu fuerza","El éxito te espera","Vos sos imparable","Cada tarea es un paso","Tu esfuerzo es tu mejor inversión","La perseverancia es tu clave","Vos sos un ganador","Cada logro es tuyo","Tu dedicación es tu sello","El éxito es tu recompensa","Vos sos extraordinario","Cada día es para brillar","Tu esfuerzo es tu orgullo","La excelencia es tu camino","Vos sos inspirador","Cada jornada es una victoria","Tu dedicación es tu poder","El éxito está cerca","Vos sos capaz de todo","Cada logro es un triunfo","Tu esfuerzo es tu mejor aliado","La perseverancia es tu virtud","Vos sos un líder","Cada día es para crecer","Tu dedicación es tu fuerza interior","El éxito es tu destino final","Vos sos imbatible","Cada tarea es una oportunidad","Tu esfuerzo es tu mejor carta","La excelencia es tu marca","Vos sos un campeón","Cada logro es un escalón","Tu dedicación es tu mejor inversión","El éxito es tu recompensa merecida","Vos sos inolvidable","Cada día es una nueva página","Tu esfuerzo es tu mayor tesoro","La perseverancia es tu mejor amiga","Vos sos una estrella","Cada jornada es un nuevo comienzo","Tu dedicación es tu mejor legado","El éxito es tu destino asegurado","Vos sos una inspiración","Cada logro es una bendición","Tu esfuerzo es tu mejor inversión","La excelencia es tu sello personal","Vos sos un triunfador","Cada día es para destacar","Tu dedicación es tu mayor fortaleza","El éxito es tu recompensa","Vos sos un ejemplo","Cada tarea es una victoria","Tu esfuerzo es tu mejor aliado","La perseverancia es tu mejor virtud","Vos sos un genio","Cada logro es un paso al éxito","Tu dedicación es tu mejor inversión","El éxito es tu destino","Vos sos extraordinario","Cada día es una oportunidad de oro","Tu esfuerzo es tu mejor legado","La excelencia es tu mejor marca","Vos sos una leyenda","Cada jornada es una nueva aventura","Tu dedicación es tu mejor inversión","El éxito es tu destino asegurado","Vos sos un maestro","Cada logro es una bendición","Tu esfuerzo es tu mejor inversión","La perseverancia es tu mejor virtud","Vos sos un héroe","Cada día es para triunfar","Tu dedicación es tu mejor legado","El éxito es tu recompensa","Vos sos un líder nato"];

function obtenerFraseDelDia() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return FRASES[Math.floor((now - start) / 86400000) % FRASES.length];
}

function renderFraseMotivacional() {
  const c = $('#fraseContainer');
  if (c) c.innerHTML = `<div class="frase-card"><div class="frase-texto">${obtenerFraseDelDia()}</div><div class="frase-autor">— BAREMOS</div></div>`;
}

/* ============================================================
   MENSAJES SEGÚN UMBRALES DIARIOS
   ============================================================ */
const MENSAJES_100K = ["No es suficiente para Objetivo", "Vamos, tu puedes."];
const MENSAJES_125K = ["Estas cerca de tu objetivo", "Vamos, ya casi lo logras", "Vas Bien!", "Sigue así."];
const MENSAJES_150K = ["Sos el mejor", "Imparable!", "Que Grande! Objetivo Superado!", "Ve a descansar."];
const MENSAJES_200K = ["Imparable", "Tu esfuerzo tiene recompensa", "Nadie mejor que vos"];

function mostrarMensajeDiario(mensajes, bgColor) {
  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  const el = document.createElement('div');
  el.className = 'mensaje-impulso';
  el.textContent = mensaje;
  if (bgColor) el.style.background = bgColor;
  document.body.appendChild(el);
  setTimeout(() => el.classList.add('show'), 100);
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 500);
  }, 3500);
}

function mostrarMensaje100k() {
  State.mensaje100kMostrado = true;
  mostrarMensajeDiario(MENSAJES_100K, 'linear-gradient(135deg, #f59e0b, #d97706)');
}
function mostrarMensaje125k() {
  State.mensaje125kMostrado = true;
  mostrarMensajeDiario(MENSAJES_125K, 'linear-gradient(135deg, #22c55e, #16a34a)');
}
function mostrarMensaje150k() {
  State.mensaje150kMostrado = true;
  mostrarMensajeDiario(MENSAJES_150K, 'linear-gradient(135deg, #10b981, #047857)');
}
function mostrarMensaje200k() {
  State.mensaje200kMostrado = true;
  mostrarMensajeDiario(MENSAJES_200K, 'linear-gradient(135deg, #ffd700, #ff6b6b, #4ecdc4)');
  lanzarConfeti();
}

function lanzarConfeti() {
  let cont = document.querySelector('.confeti-container');
  if (!cont) {
    cont = document.createElement('div');
    cont.className = 'confeti-container';
    document.body.appendChild(cont);
  }
  cont.innerHTML = '';
  const colores = ['#ffd700', '#ff6b6b', '#4ecdc4', '#a78bfa', '#f472b6', '#34d399'];
  for (let i = 0; i < 80; i++) {
    const conf = document.createElement('div');
    conf.className = 'confeti';
    conf.style.left = Math.random() * 100 + '%';
    conf.style.background = colores[Math.floor(Math.random() * colores.length)];
    conf.style.animationDelay = Math.random() * 2 + 's';
    conf.style.animationDuration = (Math.random() * 2 + 2) + 's';
    conf.style.width = (Math.random() * 8 + 6) + 'px';
    conf.style.height = (Math.random() * 8 + 6) + 'px';
    conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    cont.appendChild(conf);
  }
  setTimeout(() => { cont.innerHTML = ''; }, 5000);
}

function lanzarBengalas() {
  const total = $('#totalGeneralCard');
  if (!total) return;
  const rect = total.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const colores = ['#ffd700', '#ff6b6b', '#4ecdc4', '#a78bfa', '#f472b6'];
  for (let b = 0; b < 3; b++) {
    setTimeout(() => {
      const bx = centerX + (Math.random() - 0.5) * rect.width;
      const by = centerY + (Math.random() - 0.5) * rect.height;
      for (let i = 0; i < 20; i++) {
        const bengala = document.createElement('div');
        bengala.className = 'bengala';
        bengala.style.left = bx + 'px';
        bengala.style.top = by + 'px';
        bengala.style.background = colores[Math.floor(Math.random() * colores.length)];
        const angle = (Math.PI * 2 * i) / 20;
        const distance = 60 + Math.random() * 40;
        bengala.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
        bengala.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
        document.body.appendChild(bengala);
        setTimeout(() => bengala.remove(), 2000);
      }
    }, b * 400);
  }
}

/* ============================================================
   FUNCIONES DE FECHA
   ============================================================ */
function hoy() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function ahora() { return new Date().toISOString(); }
function fechaLegible(f) {
  const [y,m,d] = f.split('-').map(Number);
  return new Date(y,m-1,d).toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}
function fechaCorta(f) {
  const [y,m,d] = f.split('-').map(Number);
  return new Date(y,m-1,d).toLocaleDateString('es-AR');
}
function mesActual() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
}
function mesAnterior() {
  const d = new Date();
  d.setMonth(d.getMonth()-1);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
}
function nombreMes(ms) {
  const [y,m] = ms.split('-').map(Number);
  return new Date(y,m-1).toLocaleDateString('es-AR',{month:'long',year:'numeric'});
}
function diasDelMes(ms) {
  const [y,m] = ms.split('-').map(Number);
  return new Date(y,m,0).getDate();
}

/* ============================================================
   DÍAS HÁBILES ARGENTINA
   ============================================================ */
function calcularPascua(anio) {
  const a = anio % 19, b = Math.floor(anio/100), c = anio % 100;
  const d = Math.floor(b/4), e = b % 4, f = Math.floor((b+8)/25);
  const g = Math.floor((b-f+1)/3), h = (19*a+b-d-g+15) % 30;
  const i = Math.floor(c/4), k = c % 4, l = (32+2*e+2*i-h-k) % 7;
  const m = Math.floor((a+11*h+22*l)/451);
  const mes = Math.floor((h+l-7*m+114)/31);
  const dia = ((h+l-7*m+114) % 31) + 1;
  return new Date(anio, mes-1, dia);
}
function esFeriadoArgentino(fecha) {
  const d = fecha.getDate(), m = fecha.getMonth()+1, a = fecha.getFullYear();
  const fijos = [[1,1],[3,24],[5,1],[5,25],[6,20],[7,9],[8,17],[10,12],[11,20],[12,8],[12,25]];
  for (const [fm,fd] of fijos) {
    if (m===fm && d===fd) return true;
  }
  const pascua = calcularPascua(a);
  const vs = new Date(pascua);
  vs.setDate(vs.getDate()-2);
  if (fecha.toDateString() === vs.toDateString()) return true;
  const cl = new Date(pascua);
  cl.setDate(cl.getDate()-48);
  const cm = new Date(cl);
  cm.setDate(cm.getDate()+1);
  if (fecha.toDateString() === cl.toDateString() || fecha.toDateString() === cm.toDateString()) return true;
  return false;
}
function esDiaHabil(fecha) {
  const dow = fecha.getDay();
  return dow !== 0 && dow !== 6 && !esFeriadoArgentino(fecha);
}
function obtenerPosicionDiaHabil(fecha) {
  const m = fecha.getMonth(), a = fecha.getFullYear();
  const diasMes = new Date(a, m+1, 0).getDate();
  let count = 0;
  for (let dia = 1; dia <= diasMes; dia++) {
    const f = new Date(a, m, dia);
    if (esDiaHabil(f)) {
      count++;
      if (f.toDateString() === fecha.toDateString()) return count;
    }
  }
  return -1;
}
function esDiaRegistroQ2() {
  const hoyFecha = new Date();
  if (!esDiaHabil(hoyFecha)) return false;
  const pos = obtenerPosicionDiaHabil(hoyFecha);
  return pos >= 1 && pos <= 4;
}
function mesQuincenaActual() {
  return esDiaRegistroQ2() ? mesAnterior() : mesActual();
}
function obtenerSemanaDeFecha(fechaStr) {
  const [y,m,d] = fechaStr.split('-').map(Number);
  const fecha = new Date(y, m-1, d);
  const diaSemana = fecha.getDay();
  const diffLunes = diaSemana === 0 ? -6 : 1 - diaSemana;
  const lunes = new Date(fecha);
  lunes.setDate(fecha.getDate() + diffLunes);
  const domingo = new Date(lunes);
  domingo.setDate(lunes.getDate() + 6);
  return {
    lunes: lunes.toISOString().slice(0,10),
    domingo: domingo.toISOString().slice(0,10)
  };
}

/* ============================================================
   UI HELPERS Y CONFIRMACIONES GLOBALES
   ============================================================ */
function toast(msg, type='info') {
  const w = $('.toast-wrap');
  if (!w) return;
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${type==='success'?'✅':type==='error'?'❌':type==='warn'?'⚠️':'ℹ️'}</span><span>${msg}</span>`;
  w.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

function confirmDialog(msg) {
  return new Promise(res => {
    const m = $('#modalConfirm');
    if (!m) { res(true); return; }
    
    const activeModals = $$('.modal-backdrop.show').filter(mod => mod.id !== 'modalConfirm');
    activeModals.forEach(mod => mod.classList.remove('show'));

    const msgEl = $('#modalConfirmMsg');
    if (msgEl) msgEl.textContent = msg;
    m.classList.add('show');

    const btnOk = $('#confirmOk');
    if (btnOk) {
      btnOk.onclick = () => {
        m.classList.remove('show');
        res(true);
      };
    }
    
    const btnCancel = $('#confirmCancel');
    if (btnCancel) {
      btnCancel.onclick = () => {
        m.classList.remove('show');
        activeModals.forEach(mod => mod.classList.add('show'));
        res(false);
      };
    }
  });
}

function parsePrecio(v) {
  if (typeof v === 'number' && !isNaN(v)) return v;
  let s = String(v).trim();
  if (!s) return 0;
  s = s.replace(/[$€£\s]/g, '');
  const lc = s.lastIndexOf(','), ld = s.lastIndexOf('.');
  if (lc === -1 && ld === -1) return parseFloat(s) || 0;
  if (lc > ld) {
    const ac = s.slice(lc + 1);
    if (/^\d{1,2}$/.test(ac)) s = s.replace(/\./g, '').replace(',', '.');
    else s = s.replace(/,/g, '');
  } else s = s.replace(/,/g, '');
  return parseFloat(s) || 0;
}
function getField(r, ...keys) {
  for (const k of keys) {
    if (r[k] !== undefined && r[k] !== null && r[k] !== '') return r[k];
  }
  const rk = Object.keys(r);
  for (const k of keys) {
    const found = rk.find(x => x.toLowerCase() === k.toLowerCase());
    if (found !== undefined) return r[found];
  }
  return '';
}

/* ============================================================
   SEGURIDAD - HASH SHA-256
   ============================================================ */
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
async function getAdminPasswordHash() {
  const existing = await dbGet('config', 'adminPasswordHash');
  if (!existing) {
    const defaultHash = await sha256('Admin2026');
    await dbPut('config', { key: 'adminPasswordHash', value: defaultHash });
    return defaultHash;
  }
  return existing.value;
}

/* ============================================================
   SISTEMA DE ACTUALIZACIONES
   ============================================================ */
let swRegistration = null;

async function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  try {
    swRegistration = await navigator.serviceWorker.register('./sw.js');
    if (swRegistration.waiting) checkForUpdate(true);
    swRegistration.addEventListener('updatefound', () => {
      const newWorker = swRegistration.installing;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          checkForUpdate(true);
        }
      });
    });
  } catch(e) { console.warn('[SW]', e); }
}

function isNewerVersion(remote, local) {
  const rParts = remote.split('.').map(Number);
  const lParts = local.split('.').map(Number);
  for (let i = 0; i < Math.max(rParts.length, lParts.length); i++) {
    const r = rParts[i] || 0;
    const l = lParts[i] || 0;
    if (r > l) return true;
    if (r < l) return false;
  }
  return false;
}

function showUpdateNotification() {
  if (!State.updateAvailable || document.getElementById('updateNotification')) return;
  
  const notification = document.createElement('div');
  notification.id = 'updateNotification';
  notification.style.cssText = `
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: white; padding: 24px; border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3); z-index: 10000;
    max-width: 400px; width: 90%;
  `;
  notification.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 48px; margin-bottom: 16px;">🔄</div>
      <h3 style="margin: 0 0 12px 0; color: #0b3d91; font-size: 20px;">¡Actualización Disponible!</h3>
      <p style="margin: 0 0 20px 0; color: #5a6478; font-size: 14px; line-height: 1.5;">
        Hay una nueva versión de la aplicación disponible. ¿Deseás actualizar ahora?
      </p>
      <div style="display: flex; gap: 12px;">
        <button id="updateLaterBtn" style="flex: 1; padding: 12px; border: 1px solid #dfe4ee; background: white; color: #1a2238; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600;">Más tarde</button>
        <button id="updateNowBtn" style="flex: 1; padding: 12px; border: none; background: #0b3d91; color: white; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600;">Actualizar ahora</button>
      </div>
    </div>
  `;
  document.body.appendChild(notification);
  
  document.getElementById('updateNowBtn').onclick = async () => {
    notification.remove();
    const btn = document.getElementById('updateNowBtn');
    if(btn) { btn.innerText = "Actualizando..."; btn.disabled = true; }
    try {
      if (swRegistration && swRegistration.waiting) {
        swRegistration.waiting.postMessage('SKIP_WAITING');
      }
      const regs = await navigator.serviceWorker.getRegistrations();
      for (let reg of regs) await reg.unregister();
      const keys = await caches.keys();
      for (let key of keys) await caches.delete(key);
    } catch(e) {}
    window.location.href = window.location.pathname + '?updated=true&t=' + Date.now();
  };
  
  document.getElementById('updateLaterBtn').onclick = () => {
    notification.remove();
    State.updateAvailable = false;
  };
}

function loadVersion() {
  State.currentVersion = APP_VERSION;
}

async function checkForUpdate(silent = false) {
  if (!silent) toast('Buscando actualizaciones...', 'info');
  try {
    if (swRegistration) await swRegistration.update();
    const r = await fetch('./version.json?t=' + Date.now(), { cache: 'no-store' });
    const remoteData = await r.json();
    if (isNewerVersion(remoteData.version, APP_VERSION)) {
      State.updateAvailable = true;
      showUpdateNotification();
    } else {
      if (!silent) toast(`Ya tenés la última versión (${APP_VERSION})`, 'success');
      State.updateAvailable = false;
    }
  } catch (e) {
    if (!silent) toast('Error al buscar actualizaciones', 'error');
  }
}

/* ============================================================
   TÉRMINOS Y PRIVACIDAD (CONTROL SEGURO)
   ============================================================ */
function getAcceptedTermsVersion() {
  try { return parseInt(localStorage.getItem('baremos_terms_version')) || 0; }
  catch(e) { return 0; }
}

function setAcceptedTermsVersion() {
  try { localStorage.setItem('baremos_terms_version', CURRENT_TERMS_VERSION.toString()); }
  catch(e) { console.warn('Error saving terms:', e); }
}

function isTermsAcceptedForUser(legajo) {
  if (!legajo) return false;
  try {
    return localStorage.getItem('baremos_terms_user_' + legajo) === String(CURRENT_TERMS_VERSION);
  } catch(e) {
    return false;
  }
}

function setTermsAcceptedForUser(legajo) {
  setAcceptedTermsVersion();
  if (legajo) {
    try {
      localStorage.setItem('baremos_terms_user_' + legajo, String(CURRENT_TERMS_VERSION));
    } catch(e) {}
  }
}

function mostrarPopupTerminos(onAcceptCallback) {
  const modal = $('#modalTerms');
  const content = $('#termsModalContent');
  if (!modal) {
    console.error('CRÍTICO: No se encontró el modal de términos en el DOM.');
    if (onAcceptCallback) onAcceptCallback();
    else continuarInicio();
    return;
  }
  if (content && INFO_CONTENT && INFO_CONTENT.terminos) {
    content.innerHTML = INFO_CONTENT.terminos.html;
  }
  modal.classList.add('show');

  const btnAccept = $('#btnAcceptTerms');
  if (btnAccept) {
    btnAccept.onclick = async (e) => {
      e.preventDefault();
      setTermsAcceptedForUser(State.user?.legajo);
      modal.classList.remove('show');
      if (onAcceptCallback) {
        await onAcceptCallback();
      } else {
        await continuarInicio();
      }
    };
  }
}

/* ============================================================
   MIGRACIÓN SEGURA PARA ESTRUCTURA HEREDADA
   ============================================================ */
function getSafeItems(j) {
  let safeItems = [];
  if (j.items && j.items.length > 0) {
      safeItems = j.items;
  } else if (j.tareas && j.tareas.length > 0) {
      j.tareas.forEach(t => { if (t.items) safeItems = safeItems.concat(t.items); });
  }
  return safeItems;
}

function getNormalizedTareas(j) {
  if (j.tareas && j.tareas.length > 0) return j.tareas;
  if (j.items && j.items.length > 0) {
    return [{
      id: j.id || Date.now(),
      referencia: 'Registros Anteriores',
      fecha: j.fecha,
      hora: '',
      zona: j.zona || '-',
      items: j.items,
      total: j.items.reduce((a, it) => a + (it.subtotal || 0), 0)
    }];
  }
  return [];
}

/* ============================================================
   PWA CONTROLLER, OFFLINE ENGINE & INSTALLATION
   ============================================================ */
let deferredPrompt = null;

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || 
         window.navigator.standalone === true || 
         document.referrer.includes('android-app://');
}

function initPWA() {
  const btnInstall = $('#btnInstallPwa');
  const modalInstall = $('#modalInstallPwa');
  const btnClose = $('#btnPwaModalClose');
  const btnAction = $('#btnPwaModalAction');
  const iosBox = $('#pwaIosInstructions');
  const offlineBar = $('#offlineBar');

  function updateNetworkStatus() {
    if (offlineBar) {
      offlineBar.style.display = navigator.onLine ? 'none' : 'block';
    }
  }

  window.addEventListener('online', () => {
    updateNetworkStatus();
    toast('Conexión a internet restablecida', 'success');
  });

  window.addEventListener('offline', () => {
    updateNetworkStatus();
    toast('⚡ Modo Offline activo: podés seguir trabajando normalmente', 'warn');
  });

  updateNetworkStatus();

  // Capturar evento de instalación nativa PWA
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    if (btnInstall && !isStandalone()) {
      btnInstall.style.display = 'inline-flex';
    }
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    if (btnInstall) btnInstall.style.display = 'none';
    if (modalInstall) modalInstall.classList.remove('show');
    toast('🎉 ¡BAREMOS instalada con éxito!', 'success');
    renderAjustes();
  });

  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isIos && !isStandalone() && btnInstall) {
    btnInstall.style.display = 'inline-flex';
  }

  window.openPwaInstallModal = function() {
    if (!modalInstall) return;
    if (isStandalone()) {
      toast('BAREMOS ya está instalada en tu dispositivo', 'success');
      return;
    }
    if (isIos) {
      if (iosBox) iosBox.style.display = 'block';
      if (btnAction) {
        btnAction.textContent = '¡Entendido!';
        btnAction.onclick = () => modalInstall.classList.remove('show');
      }
    } else {
      if (iosBox) iosBox.style.display = 'none';
      if (btnAction) {
        btnAction.textContent = '📲 Instalar App';
        btnAction.onclick = async () => {
          if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            deferredPrompt = null;
            if (outcome === 'accepted') {
              if (btnInstall) btnInstall.style.display = 'none';
            }
          } else {
            toast('Para instalar, abrí el menú de tu navegador y seleccioná "Instalar aplicación"', 'info');
          }
          modalInstall.classList.remove('show');
        };
      }
    }
    modalInstall.classList.add('show');
  };

  if (btnInstall) btnInstall.onclick = window.openPwaInstallModal;
  if (btnClose) btnClose.onclick = () => modalInstall.classList.remove('show');
  
  if (modalInstall) {
    modalInstall.onclick = e => {
      if (e.target === modalInstall) modalInstall.classList.remove('show');
    };
  }
}

/* ============================================================
   INICIALIZACIÓN (FLUJO ESTRICTO Y PROTEGIDO)
   ============================================================ */
async function init() {
  try {
    await openDB();
    await loadTheme();
    await loadBaremo();
    loadVersion();
    const sv = $('#splashVersion');
    if (sv && State.currentVersion) sv.textContent = `v${State.currentVersion}`;
    preloadMapas();
    await loadUser();
    await loadNotificationSettings();
    startNotificationScheduler();
    initPWA();
    initGeoTracking();
  } catch(e) {
    console.error('[Init Error]', e);
    toast('Error al cargar datos iniciales: ' + e.message, 'error');
  }
  
  setTimeout(() => {
    try {
      const splash = $('.splash');
      if (splash) splash.classList.add('hide');
      
      continuarInicio();
    } catch(err) {
      console.error('[Splash Fallback Error]', err);
      continuarInicio(); 
    }
  }, 800);
  
  try {
    await registerSW();
    setTimeout(() => checkForUpdate(true), 3000);
  } catch(e) {}
}

async function continuarInicio() {
  if (State.user) {
    try { await loadOrCreateJornada(); } catch (e) {}
    showApp();
    if (!isTermsAcceptedForUser(State.user.legajo)) {
      mostrarPopupTerminos(async () => {
        showApp();
      });
    }
  } else { 
    showLogin(); 
  }
}

async function loadTheme() {
  const c = await dbGet('config', 'theme');
  State.theme = c?.value || 'light';
  document.documentElement.setAttribute('data-theme', State.theme);
}
function toggleTheme() {
  State.theme = State.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', State.theme);
  dbPut('config', { key: 'theme', value: State.theme });
  toast(`Modo ${State.theme === 'light' ? 'claro' : 'oscuro'}`, 'success');
}

/* NORMALIZACIÓN SEGURA DE BAREMOS EN ARRANQUE */
async function loadBaremo() {
  let d = [];
  try { d = await dbGetAll('baremo'); } catch(e) { console.warn(e); }
  
  const normalizeArray = (arr) => {
    return arr.map(r => ({
      baremo: String(getField(r, 'BAREMO', 'baremo', 'Codigo', 'codigo', 'Código', 'CÓDIGO')).trim(),
      descripcion: String(getField(r, 'DESCRIPCION', 'descripcion', 'Descripción', 'Descripcion', 'DETALLE')).trim(),
      precio: parsePrecio(getField(r, 'PRECIO', 'precio', 'Precio', 'VALOR'))
    })).filter(r => r.baremo !== '' && r.baremo !== 'undefined');
  };

  const CURRENT_BAREMO_VERSION = '2026.08.18-v3-163items';
  let baremosLoadedCfg = null;
  try {
    baremosLoadedCfg = await dbGet('config', 'baremos_preestablecidos_loaded');
  } catch(e) {}

  const needsUpdate = !d || d.length !== DEFAULT_BAREMOS.length || !baremosLoadedCfg || baremosLoadedCfg.value !== CURRENT_BAREMO_VERSION;

  if (needsUpdate) {
    try {
      let norm = [...DEFAULT_BAREMOS];
      try {
        const r = await fetch('baremo.json?v=' + Date.now(), { cache: 'no-store' });
        if (r.ok) {
          const j = await r.json();
          const arr = Array.isArray(j) ? j : (j.baremos || j.data || [j]);
          const fetchedNorm = normalizeArray(arr);
          if (fetchedNorm.length >= DEFAULT_BAREMOS.length) norm = fetchedNorm;
        }
      } catch(e) {}

      if (norm.length > 0) {
        if (d && d.length > 0) {
          for (const o of d) if (o.baremo) await dbDelete('baremo', o.baremo);
        }
        for (const i of norm) await dbPut('baremo', i);
        try {
          await dbPut('config', { key: 'baremos_preestablecidos_loaded', value: CURRENT_BAREMO_VERSION });
        } catch(e) {}
        d = await dbGetAll('baremo');
      }
    } catch(e) {
      console.warn('[loadBaremo] Error sincronizando:', e);
    }
  }

  State.baremo = normalizeArray(d && d.length ? d : DEFAULT_BAREMOS);
}

async function updateBaremoFromFile(file) {
  const n = file.name.toLowerCase();
  let d = [];
  try {
    if (n.endsWith('.json')) d = JSON.parse(await file.text());
    else if (n.endsWith('.xlsx') || n.endsWith('.xls')) {
      const buf = await file.arrayBuffer();
      const wb = XLSX.read(buf, { type: 'array', cellText: false });
      const ws = wb.Sheets[wb.SheetNames[0]];
      d = XLSX.utils.sheet_to_json(ws, { defval: '', raw: true });
    } else { toast('Formato no soportado', 'error'); return; }
    const old = await dbGetAll('baremo');
    for (const o of old) await dbDelete('baremo', o.baremo);
    const norm = d.map(r => ({
      baremo: String(getField(r, 'BAREMO', 'baremo', 'Codigo', 'codigo', 'Código', 'CÓDIGO')).trim(),
      descripcion: String(getField(r, 'DESCRIPCION', 'descripcion', 'Descripción', 'Descripcion', 'DETALLE')).trim(),
      precio: parsePrecio(getField(r, 'PRECIO', 'precio', 'Precio', 'VALOR'))
    })).filter(r => r.baremo);
    if (!norm.length) { toast('Sin datos válidos', 'error'); return; }
    for (const i of norm) await dbPut('baremo', i);
    State.baremo = await dbGetAll('baremo');
    toast(`Baremo: ${norm.length} ítems`, 'success');
  } catch(e) { toast('Error', 'error'); }
}

async function loadUser() {
  try {
    let activeLegajo = null;
    try {
      const c = await dbGet('config', 'activeUser');
      if (c && c.value) activeLegajo = c.value;
    } catch(e) {}

    if (!activeLegajo) {
      activeLegajo = localStorage.getItem('baremos_active_user');
    }

    if (activeLegajo) {
      let u = null;
      try {
        u = await dbGet('usuarios', String(activeLegajo));
      } catch(e) {}

      if (!u) {
        try {
          const allUsers = await dbGetAll('usuarios');
          u = allUsers.find(x => String(x.legajo) === String(activeLegajo));
        } catch(e) {}
      }

      if (!u) {
        try {
          const savedData = localStorage.getItem('baremos_active_user_data');
          if (savedData) {
            const parsed = JSON.parse(savedData);
            if (parsed && (String(parsed.legajo) === String(activeLegajo) || !activeLegajo)) {
              u = parsed;
              try { await dbPut('usuarios', u); } catch(e) {}
            }
          }
        } catch(e) {}
      }

      if (u) {
        State.user = u;
        localStorage.setItem('baremos_active_user', String(u.legajo));
        localStorage.setItem('baremos_active_user_data', JSON.stringify(u));
        try { await dbPut('config', { key: 'activeUser', value: String(u.legajo) }); } catch(e) {}
      }
    }
  } catch(e) {
    console.error('[loadUser Error]', e);
  }
}

function showLogin() {
  $$('.view').forEach(v => v.classList.remove('active'));
  $$('.tab-btn').forEach(b => b.classList.remove('active'));
  const vl = $('#viewLogin');
  if(vl) vl.classList.add('active');

  setupMapaZona();

  // Precargar / recordar campos si existen en memoria local
  const savedUserJson = localStorage.getItem('baremos_active_user_data');
  if (savedUserJson) {
    try {
      const su = JSON.parse(savedUserJson);
      if (su) {
        if (su.nombre && $('#loginNombre')) $('#loginNombre').value = su.nombre;
        if (su.legajo && $('#loginLegajo')) $('#loginLegajo').value = su.legajo;
        if (su.zona && $('#loginZona')) {
          $('#loginZona').value = su.zona;
          mostrarMapaZona(su.zona);
        }
      }
    } catch(e) {}
  }

  const s = $('#loginZona');
  if (s && s.value) {
    mostrarMapaZona(s.value);
  } else {
    mostrarMapaZona('');
  }

  const f = $('#loginForm');
  if (f) {
    f.onsubmit = async e => {
      e.preventDefault();
      const n = $('#loginNombre').value.trim();
      const l = $('#loginLegajo').value.trim();
      const z = $('#loginZona').value;
      if (!n || !l) { toast('Completá todos los campos', 'warn'); return; }
      if (!z) { toast('Seleccioná zona', 'warn'); return; }

      const userData = { nombre: n, legajo: l, zona: z, creado: ahora() };

      try {
        await dbPut('usuarios', userData);
        await dbPut('config', { key: 'activeUser', value: l });
      } catch(err) {
        console.warn('[DB Login Save]', err);
      }

      localStorage.setItem('baremos_active_user', l);
      localStorage.setItem('baremos_active_user_data', JSON.stringify(userData));

      State.user = userData;
      $('#viewLogin').classList.remove('active');
      initGeoTracking();
      try {
        await loadOrCreateJornada();
      } catch(err) {
        console.warn('[Login Jornada Load]', err);
      }
      showApp();

      if (!isTermsAcceptedForUser(l)) {
        mostrarPopupTerminos(async () => {
          showApp();
          toast(`¡Bienvenido ${n}!`, 'success');
        });
      } else {
        toast(`¡Bienvenido ${n}!`, 'success');
      }
    };
  }
}

async function cerrarSesion() {
  if (!await confirmDialog('¿Cerrar sesión?\n\n⚠️ Deberás ingresar con NOMBRE y LEGAJO.\n\nTus datos se mantendrán.')) return;
  try { await dbPut('config', { key: 'activeUser', value: '' }); } catch(e) {}
  localStorage.removeItem('baremos_active_user');
  localStorage.removeItem('baremos_active_user_data');
  State.user = null; State.jornada = null; State.items = []; State.currentTarea = { id: null, fecha: '', hora: '', zona: '', items: [], total: 0 };
  const h = $('#headerUser'); if (h) h.textContent = 'Ingresar';
  const hz = $('#headerUserZona'); if (hz) hz.textContent = '';
  const bz = $('#btnChangeZona'); if (bz) bz.style.display = 'none';
  const sw = $('#modalSwitchUser'); if (sw) sw.classList.remove('show');
  showLogin();
  toast('Sesión cerrada', 'success');
}

async function eliminarUsuario(leg) {
  const u = await dbGet('usuarios', leg);
  if (!u) return;
  if (!await confirmDialog(`🗑️ ¿Eliminar "${u.nombre}"?\n\n⚠️ IRREVERSIBLE. Se borrarán jornadas, combustible, quincenas y perfil.`)) return;
  
  for (const j of await dbGetByIndex('jornadas', 'legajo', leg)) await dbDelete('jornadas', j.id);
  for (const c of await dbGetByIndex('combustible', 'legajo', leg)) await dbDelete('combustible', c.id);
  for (const q of await dbGetByIndex('quincenas', 'legajo', leg)) await dbDelete('quincenas', q.id);
  await dbDelete('usuarios', leg);
  
  if (State.user?.legajo === leg) {
    try { await dbPut('config', { key: 'activeUser', value: '' }); } catch(e) {}
    localStorage.removeItem('baremos_active_user');
    localStorage.removeItem('baremos_active_user_data');
    State.user = null; State.jornada = null; State.items = []; State.currentTarea = { id: null, fecha: '', hora: '', zona: '', items: [], total: 0 };
    const sw = $('#modalSwitchUser'); if(sw) sw.classList.remove('show');
    showLogin();
    toast('Usuario eliminado', 'success');
  } else {
    toast(`${u.nombre} eliminado`, 'success');
    switchUser();
  }
}

async function switchUser() {
  const users = await dbGetAll('usuarios');
  const m = $('#modalSwitchUser');
  const lst = $('#userList');
  if (!lst || !m) return;
  lst.innerHTML = '';
  users.forEach(u => {
    const div = document.createElement('div');
    div.className = 'jornada-item';
    const act = State.user?.legajo === u.legajo;
    div.innerHTML = `<div class="ji-left"><div class="fecha">${u.nombre} ${act ? '<span style="font-size:10px;background:var(--success-soft);color:var(--success);padding:2px 6px;border-radius:8px;margin-left:6px">ACTIVO</span>' : ''}</div><div class="meta">Legajo ${u.legajo} · ${u.zona || 'Sin zona'}</div></div><div class="user-actions"><button class="mini-btn logout" data-act="logout">🚪</button><button class="mini-btn del" data-act="del" data-legajo="${u.legajo}">🗑️</button><div style="font-size:20px;cursor:pointer" data-act="switch">➡️</div></div>`;
    div.onclick = async e => {
      const a = e.target.dataset.act || e.target.closest('[data-act]')?.dataset.act;
      const lg = e.target.dataset.legajo || e.target.closest('[data-legajo]')?.dataset.legajo;
      if (a === 'del') { e.stopPropagation(); await eliminarUsuario(lg); }
      else if (a === 'logout') { e.stopPropagation(); await cerrarSesion(); }
      else {
        State.user = u;
        localStorage.setItem('baremos_active_user', String(u.legajo));
        localStorage.setItem('baremos_active_user_data', JSON.stringify(u));
        try { await dbPut('config', { key: 'activeUser', value: u.legajo }); } catch(e) {}
        m.classList.remove('show');
        try { await loadOrCreateJornada(); } catch(err) {}
        showApp();
        if (!isTermsAcceptedForUser(u.legajo)) {
          mostrarPopupTerminos(async () => {
            showApp();
            toast(`Sesión: ${u.nombre}`, 'success');
          });
        } else {
          toast(`Sesión: ${u.nombre}`, 'success');
        }
      }
    };
    lst.appendChild(div);
  });
  const ab = document.createElement('button');
  ab.className = 'btn btn-primary';
  ab.style.marginTop = '10px';
  ab.innerHTML = '➕ Nuevo usuario';
  ab.onclick = () => { m.classList.remove('show'); showLogin(); };
  lst.appendChild(ab);
  m.classList.add('show');
}

async function loadOrCreateJornada() {
  const f = hoy();
  let ex = [];
  try {
    ex = await dbGetByIndex('jornadas', 'fechaLegajo', [f, State.user.legajo]);
  } catch(e) {
    try {
      const allJ = await dbGetAll('jornadas');
      ex = allJ.filter(j => j.fecha === f && String(j.legajo) === String(State.user.legajo));
    } catch(e2) {}
  }
  const ab = ex.filter(j => !j.cerrada);
  State.mensaje200kMostrado = false;
  State.mensaje150kMostrado = false;
  State.mensaje125kMostrado = false;
  State.mensaje100kMostrado = false;
  
  if (ab.length > 0) {
    State.jornada = ab[ab.length - 1];
    if (!State.jornada.tareas) {
      if (State.jornada.items && State.jornada.items.length > 0) {
        State.jornada.tareas = [{
          id: Date.now() + Math.random(),
          fecha: State.jornada.fecha,
          hora: '',
          zona: State.jornada.zona || '-',
          items: State.jornada.items,
          total: State.jornada.items.reduce((a, i) => a + (i.subtotal || 0), 0)
        }];
      } else {
        State.jornada.tareas = [];
      }
    }
    State.currentTarea = { id: null, fecha: '', hora: '', zona: '', items: [], total: 0 };
  } else if (ex.length > 0) {
    if (await confirmDialog('Jornada cerrada hoy. ¿Crear nueva?')) await crearJornadaNueva();
    else { State.jornada = null; State.currentTarea = { id: null, fecha: '', hora: '', zona: '', items: [], total: 0 }; }
  } else {
    await crearJornadaNueva();
  }
}

async function crearJornadaNueva() {
  State.mensaje200kMostrado = false;
  State.mensaje150kMostrado = false;
  State.mensaje125kMostrado = false;
  State.mensaje100kMostrado = false;
  const j = { fecha: hoy(), horaInicio: ahora(), ultimaMod: ahora(), legajo: State.user.legajo, usuario: State.user.nombre, zona: State.user.zona, tareas: [], items: [], cerrada: false, total: 0 };
  j.id = await dbAdd('jornadas', j);
  State.jornada = j; 
  State.currentTarea = { id: null, fecha: '', hora: '', zona: '', items: [], total: 0 };
}

async function saveJornada() {
  if (!State.jornada) return;
  State.jornada.ultimaMod = ahora();
  State.jornada.total = (State.jornada.tareas || []).reduce((a, t) => a + t.total, 0);
  State.jornada.cantidadRegistros = (State.jornada.tareas || []).length;
  State.jornada.cantidadItems = (State.jornada.tareas || []).reduce((a, t) => a + t.items.reduce((sa, i) => sa + i.cantidad, 0), 0);
  await dbPut('jornadas', State.jornada);
}

async function cerrarJornada() {
  if (!State.jornada) { toast('No hay jornada', 'warn'); return; }
  if (State.currentTarea && State.currentTarea.items && State.currentTarea.items.length > 0) {
    toast('Finaliza o elimina la tarea en curso antes de cerrar la jornada', 'warn');
    return;
  }
  if (!await confirmDialog('¿Cerrar jornada? No podrá editarse.')) return;
  State.jornada.cerrada = true;
  State.jornada.horaCierre = ahora();
  await saveJornada();
  toast('Jornada cerrada', 'success');
  State.jornada = null; 
  State.currentTarea = { id: null, fecha: '', hora: '', zona: '', items: [], total: 0 };
  await crearJornadaNueva();
  renderAll();
}

/* ============================================================
   SETUP REGISTRO (CON BÚSQUEDA ROBUSTA, MULTI-TÉRMINO Y ACENTOS)
   ============================================================ */
function normStr(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function searchBaremos(query) {
  if (!query) return [];
  const qNorm = normStr(query);
  const tokens = qNorm.split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];

  const list = (State.baremo && State.baremo.length > 0) ? State.baremo : DEFAULT_BAREMOS;

  const matches = list.filter(b => {
    const codeNorm = normStr(b.baremo);
    const descNorm = normStr(b.descripcion);
    const codeDigits = codeNorm.replace(/^[a-z]+/i, '');

    return tokens.every(token => {
      if (codeNorm.startsWith(token) || codeNorm.includes(token) || codeDigits.startsWith(token)) {
        return true;
      }
      if (descNorm.includes(token)) {
        return true;
      }
      return false;
    });
  });

  return matches.sort((a, b) => {
    const codeA = normStr(a.baremo);
    const codeB = normStr(b.baremo);
    const descA = normStr(a.descripcion);
    const descB = normStr(b.descripcion);
    const codeDigitsA = codeA.replace(/^[a-z]+/i, '');
    const codeDigitsB = codeB.replace(/^[a-z]+/i, '');

    function getScore(code, desc, digits) {
      if (code === qNorm) return 1000;
      if (code.startsWith(qNorm)) return 800 + (100 - code.length);
      if (digits.startsWith(qNorm)) return 700 + (100 - digits.length);
      if (desc.startsWith(qNorm)) return 600;
      
      const words = desc.split(/\s+/);
      if (words.some(w => w.startsWith(qNorm))) return 500;
      if (tokens.every(t => words.some(w => w.startsWith(t)))) return 400;
      if (code.includes(qNorm)) return 300;
      if (desc.includes(qNorm)) return 200;
      return 100;
    }

    const scoreA = getScore(codeA, descA, codeDigitsA);
    const scoreB = getScore(codeB, descB, codeDigitsB);

    if (scoreA !== scoreB) return scoreB - scoreA;
    return codeA.localeCompare(codeB);
  });
}

function setupRegistro() {
  const input = $('#baremoInput');
  const lst = $('#searchList');
  const qtyInput = $('#qtyInput');
  if (!input || !lst || !qtyInput) return;
  
  let baremoSeleccionado = null;
  let ultimoTexto = '';
  
  function dest(t, q) {
    if (!t || !q) return String(t || '');
    const tokens = q.trim().split(/\s+/).filter(Boolean).map(tk => tk.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'));
    if (!tokens.length) return String(t);
    try {
      const rx = new RegExp('(' + tokens.join('|') + ')', 'gi');
      return String(t).replace(rx, '<mark>$1</mark>');
    } catch (e) {
      return String(t);
    }
  }
  
  function selectBaremo(encontrado) {
    if (!encontrado) return;
    baremoSeleccionado = encontrado;
    input.value = encontrado.baremo;
    ultimoTexto = encontrado.baremo;
    lst.classList.remove('show');
    qtyInput.focus();
    qtyInput.select();
    toast(encontrado.baremo + ' · ' + fmt(encontrado.precio), 'success');
  }

  function render(m, q) {
    if (!m || !m.length) {
      lst.innerHTML = '<div class="sr-empty">❌ No encontrado</div>';
      lst.classList.add('show');
      return;
    }
    lst.innerHTML = m.slice(0, 15).map(b => '<div class="sr-item" data-code="' + b.baremo + '"><div class="sr-item-top"><span class="sr-code">' + dest(String(b.baremo || ''), q) + '</span><span class="sr-price">' + fmt(b.precio) + '</span></div><div class="sr-desc">' + dest(String(b.descripcion || ''), q) + '</div></div>').join('');
    lst.classList.add('show');
  }

  function ejecutarBusqueda() {
    const v = input.value.trim();
    if (v !== ultimoTexto) baremoSeleccionado = null;
    if (!v) {
      lst.classList.remove('show');
      lst.innerHTML = '';
      return;
    }
    const matches = searchBaremos(v);
    const exact = (State.baremo || DEFAULT_BAREMOS).find(b => normStr(b.baremo) === normStr(v));
    if (exact) baremoSeleccionado = exact;
    render(matches, v);
  }
  
  // Arrojar resultados ÚNICAMENTE cuando se introduce un carácter o número
  input.addEventListener('input', ejecutarBusqueda);

  lst.addEventListener('mousedown', e => {
    e.preventDefault();
  });

  lst.addEventListener('click', e => {
    const itemEl = e.target.closest('.sr-item');
    if (!itemEl) return;
    const codigo = itemEl.dataset.code;
    const encontrado = (State.baremo || DEFAULT_BAREMOS).find(b => String(b.baremo) === codigo);
    if (encontrado) {
      selectBaremo(encontrado);
    }
  });
  
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) {
      lst.classList.remove('show');
    }
  });
  
  function agregar() {
    if (!baremoSeleccionado) {
      const v = input.value.trim();
      const list = (State.baremo && State.baremo.length > 0) ? State.baremo : DEFAULT_BAREMOS;
      baremoSeleccionado = list.find(b => normStr(b.baremo) === normStr(v));
      if (!baremoSeleccionado && v) {
        const matches = searchBaremos(v);
        if (matches.length > 0) baremoSeleccionado = matches[0];
      }
    }
    if (!baremoSeleccionado) { toast('Seleccioná un baremo válido de la lista', 'warn'); input.focus(); return; }
    if (!State.jornada) { toast('No hay jornada activa', 'warn'); return; }
    
    const c = Math.max(1, parseInt(qtyInput.value) || 1);
    const newItem = {
      id: Date.now() + Math.random(),
      codigo: baremoSeleccionado.baremo,
      descripcion: baremoSeleccionado.descripcion,
      precio: baremoSeleccionado.precio,
      cantidad: c,
      subtotal: baremoSeleccionado.precio * c
    };
    
    State.currentTarea.items.push(newItem);
    State.currentTarea.total = State.currentTarea.items.reduce((a, i) => a + i.subtotal, 0);
    
    renderItems();
    renderTotales();
    
    input.value = '';
    qtyInput.value = 1;
    lst.classList.remove('show');
    lst.innerHTML = '';
    baremoSeleccionado = null;
    ultimoTexto = '';
    input.focus();

    // Desplazamiento suave para mostrar siempre el último ítem añadido
    requestAnimationFrame(() => {
      setTimeout(() => {
        const lastRow = document.querySelector('#itemsBody tr:last-child');
        if (lastRow) {
          lastRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          const taskCard = document.querySelector('#currentTaskCard');
          if (taskCard) taskCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 60);
    });

    toast('Agregado x' + c + ' a la tarea', 'success');
  }
  
  const btnAgregar = $('#btnAgregar');
  if (btnAgregar) btnAgregar.onclick = agregar;
  
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!baremoSeleccionado) {
        const v = input.value.trim();
        if (v) {
          const matches = searchBaremos(v);
          if (matches.length > 0) {
            selectBaremo(matches[0]);
            return;
          }
        }
      }
      agregar();
    } else if (e.key === 'Escape') {
      lst.classList.remove('show');
    }
  });
  
  qtyInput.addEventListener('keydown', e => { if (e.key === 'Enter') agregar(); });

/* ============================================================
   GEOLOCALIZACIÓN INTELIGENTE, EN SEGUNDO PLANO Y CACHÉ RÁPIDA (100% OFFLINE PWA)
   ============================================================ */
let lastGeoPosition = null;
let lastGeoAddress = null;
let geoWatchId = null;

// Base de datos de zonas georreferenciadas offline
const OFFLINE_ZONAS_GEO = [
  { nombre: 'Moreno', lat: -34.6504, lng: -58.7891, radioKm: 7 },
  { nombre: 'Trujui', lat: -34.5821, lng: -58.7420, radioKm: 5 },
  { nombre: 'Cuartel V', lat: -34.5500, lng: -58.8350, radioKm: 7 },
  { nombre: 'Gral. Rodríguez', lat: -34.6080, lng: -58.9550, radioKm: 8 },
  { nombre: 'San Martín', lat: -34.5772, lng: -58.5361, radioKm: 6 },
  { nombre: 'Tigre', lat: -34.4260, lng: -58.5790, radioKm: 7 },
  { nombre: 'Olivos', lat: -34.5090, lng: -58.4870, radioKm: 5 },
  { nombre: 'Pilar', lat: -34.4580, lng: -58.9140, radioKm: 8 },
  { nombre: 'Escobar', lat: -34.3480, lng: -58.7980, radioKm: 8 },
  { nombre: 'San Miguel', lat: -34.5420, lng: -58.7120, radioKm: 5 },
  { nombre: 'José C. Paz', lat: -34.5150, lng: -58.7680, radioKm: 5 },
  { nombre: 'Malvinas Argentinas', lat: -34.5000, lng: -58.7000, radioKm: 6 },
  { nombre: 'Hurlingham', lat: -34.5880, lng: -58.6380, radioKm: 5 },
  { nombre: 'Morón', lat: -34.6520, lng: -58.6200, radioKm: 5 },
  { nombre: 'Merlo', lat: -34.6650, lng: -58.7280, radioKm: 6 },
  { nombre: 'Tres de Febrero', lat: -34.6000, lng: -58.5600, radioKm: 5 },
  { nombre: 'Vicente López', lat: -34.5280, lng: -58.4720, radioKm: 5 },
  { nombre: 'San Isidro', lat: -34.4710, lng: -58.5280, radioKm: 6 },
  { nombre: 'San Fernando', lat: -34.4440, lng: -58.5580, radioKm: 6 }
];

function resolverZonaOffline(lat, lng) {
  let mejorMatch = null;
  let distMinima = Infinity;
  for (const z of OFFLINE_ZONAS_GEO) {
    const dLat = (lat - z.lat) * 111.32;
    const dLng = (lng - z.lng) * 40075 * Math.cos((lat * Math.PI) / 180) / 360;
    const distKm = Math.hypot(dLat, dLng);
    if (distKm < distMinima) {
      distMinima = distKm;
      mejorMatch = z;
    }
  }
  if (mejorMatch && distMinima <= (mejorMatch.radioKm || 8)) {
    return `${mejorMatch.nombre} (GPS: ${lat.toFixed(4)}, ${lng.toFixed(4)})`;
  }
  return `Ubicación GPS (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
}

// Carga inicial de última ubicación guardada en localStorage
try {
  const savedAddr = localStorage.getItem('baremos_last_geo_address');
  if (savedAddr) lastGeoAddress = JSON.parse(savedAddr);
} catch (e) {}

// Reverse geocode con fallback offline inmediato
async function reverseGeocodeCoords(lat, lng) {
  // Si estamos offline, resolver inmediatamente con la base de zonas local (0ms)
  if (!navigator.onLine) {
    return resolverZonaOffline(lat, lng);
  }

  // 1. Proveedor OpenStreetMap
  try {
    const ctrl1 = new AbortController();
    const t1 = setTimeout(() => ctrl1.abort(), 1200);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      {
        headers: { 'Accept-Language': 'es-AR,es;q=0.9' },
        signal: ctrl1.signal
      }
    );
    clearTimeout(t1);
    if (res.ok) {
      const data = await res.json();
      if (data && data.address) {
        const a = data.address;
        const calle = a.road || a.pedestrian || a.street || a.suburb || a.neighbourhood || '';
        const numero = a.house_number || '';
        const barrio = a.neighbourhood || a.suburb || a.city_district || '';
        const ciudad = a.city || a.town || a.village || a.municipality || a.county || '';
        const partes = [];
        if (calle) partes.push(numero ? `${calle} ${numero}` : calle);
        if (barrio && barrio !== calle) partes.push(barrio);
        if (ciudad && ciudad !== barrio) partes.push(ciudad);
        if (partes.length > 0) return partes.join(', ');
        if (data.display_name) return data.display_name.split(',').slice(0, 3).join(', ').trim();
      }
    }
  } catch (e) {}

  // 2. Fallback BigDataCloud
  try {
    const ctrl2 = new AbortController();
    const t2 = setTimeout(() => ctrl2.abort(), 1000);
    const res2 = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=es`,
      { signal: ctrl2.signal }
    );
    clearTimeout(t2);
    if (res2.ok) {
      const d = await res2.json();
      const p = [];
      if (d.locality) p.push(d.locality);
      if (d.city && d.city !== d.locality) p.push(d.city);
      if (d.principalSubdivision) p.push(d.principalSubdivision);
      if (p.length > 0) return p.join(', ');
    }
  } catch (e) {}

  // 3. Fallback inteligente a base offline local
  return resolverZonaOffline(lat, lng);
}

// Procesa coordenadas captadas en background y resuelve dirección de forma silenciosa
async function processGeoPosition(pos) {
  if (!pos || !pos.coords) return;
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const accuracy = Math.round(pos.coords.accuracy || 0);

  lastGeoPosition = { lat, lng, accuracy, time: Date.now() };

  // Si ya tenemos dirección reciente y cerca (< 150m), reutilizamos
  if (lastGeoAddress && lastGeoAddress.coords) {
    const dist = Math.hypot(lat - lastGeoAddress.coords.lat, lng - lastGeoAddress.coords.lng);
    if (dist < 0.0015 && (Date.now() - (lastGeoAddress.time || 0)) < 600000) {
      return;
    }
  }

  // Resolver en segundo plano
  const direccion = await reverseGeocodeCoords(lat, lng);
  lastGeoAddress = {
    direccion,
    coords: { lat, lng, accuracy },
    time: Date.now()
  };

  try {
    localStorage.setItem('baremos_last_geo_address', JSON.stringify(lastGeoAddress));
  } catch (e) {}
}

// Iniciar rastreo de ubicación silencioso, continuo y de bajo impacto
function initGeoTracking() {
  if (!('geolocation' in navigator)) return;

  // 1. Lectura rápida sin bloqueo
  try {
    navigator.geolocation.getCurrentPosition(
      pos => processGeoPosition(pos),
      err => { /* Silencioso */ },
      { enableHighAccuracy: true, timeout: 6000, maximumAge: 60000 }
    );
  } catch(e) {}

  // 2. Monitoreo continuo silencioso
  if (!geoWatchId) {
    try {
      geoWatchId = navigator.geolocation.watchPosition(
        pos => processGeoPosition(pos),
        err => { /* Silencioso */ },
        { enableHighAccuracy: true, maximumAge: 30000, timeout: 10000 }
      );
    } catch (e) {}
  }
}

// Refrescar rastreo al recuperar foco de la app
window.addEventListener('focus', () => initGeoTracking());
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') initGeoTracking();
});

function pedirDireccionManualModal(sugerencia = '') {
  return new Promise(resolve => {
    const modal = $('#modalUbicacionManual');
    const form = $('#formUbicacionManual');
    const input = $('#inputManualDireccion');
    const cancel = $('#cancelUbicacionManual');
    
    if (!modal || !form || !input) {
      resolve(sugerencia || 'Lugar de trabajo');
      return;
    }

    input.value = sugerencia;
    modal.classList.add('show');
    input.focus();

    const cleanUp = () => {
      modal.classList.remove('show');
      form.onsubmit = null;
      if (cancel) cancel.onclick = null;
    };

    form.onsubmit = e => {
      e.preventDefault();
      const val = input.value.trim();
      cleanUp();
      resolve(val || (sugerencia || 'Ubicación sin especificar'));
    };

    if (cancel) {
      cancel.onclick = () => {
        cleanUp();
        resolve(null);
      };
    }
  });
}

// Obtención instantánea, fluida y 100% no-intrusiva de ubicación
async function obtenerUbicacionTarea() {
  // 1. ¿Tenemos ya la dirección resuelta en caché reciente (< 20 mins)? -> Retorno INMEDIATO (0ms)
  if (lastGeoAddress && lastGeoAddress.direccion && (Date.now() - (lastGeoAddress.time || 0) < 1200000)) {
    return {
      direccion: lastGeoAddress.direccion,
      coords: lastGeoAddress.coords || null
    };
  }

  // 2. ¿Tenemos coordenadas recientes en memoria? -> Retorno ultra rápido con resolución local
  if (lastGeoPosition && (Date.now() - (lastGeoPosition.time || 0) < 600000)) {
    const { lat, lng, accuracy } = lastGeoPosition;
    let dir = resolverZonaOffline(lat, lng);
    if (navigator.onLine) {
      try {
        const resolved = await Promise.race([
          reverseGeocodeCoords(lat, lng),
          new Promise(r => setTimeout(() => r(null), 600))
        ]);
        if (resolved) dir = resolved;
      } catch (e) {}
    }

    const resObj = { direccion: dir, coords: { lat, lng, accuracy } };
    lastGeoAddress = { ...resObj, time: Date.now() };
    return resObj;
  }

  // 3. Si no hay nada previo en memoria, intento de lectura rápida silenciosa (máx 800ms)
  if ('geolocation' in navigator) {
    try {
      const quickPos = await new Promise((resolve, reject) => {
        const to = setTimeout(() => reject(new Error('timeout')), 800);
        navigator.geolocation.getCurrentPosition(
          p => { clearTimeout(to); resolve(p); },
          e => { clearTimeout(to); reject(e); },
          { enableHighAccuracy: true, timeout: 750, maximumAge: 60000 }
        );
      });

      if (quickPos && quickPos.coords) {
        const lat = quickPos.coords.latitude;
        const lng = quickPos.coords.longitude;
        const accuracy = Math.round(quickPos.coords.accuracy || 0);
        
        let dir = resolverZonaOffline(lat, lng);
        if (navigator.onLine) {
          try {
            const resolved = await Promise.race([
              reverseGeocodeCoords(lat, lng),
              new Promise(r => setTimeout(() => r(null), 500))
            ]);
            if (resolved) dir = resolved;
          } catch (e) {}
        }

        const resObj = { direccion: dir, coords: { lat, lng, accuracy } };
        lastGeoAddress = { ...resObj, time: Date.now() };
        return resObj;
      }
    } catch (e) {}
  }

  // 4. Fallback automático y transparente a la Zona configurada del usuario (sin interrumpir)
  const defaultSug = State.user?.zona ? `Zona ${State.user.zona}` : 'Lugar de trabajo';
  return { direccion: defaultSug, coords: null };
}

  // IMPLEMENTACIÓN ESTRICTA ASÍNCRONA PARA IMPACTO INMEDIATO EN LA UI
  const btnFinalizar = $('#btnFinalizarTarea');
  if (btnFinalizar) {
    btnFinalizar.onclick = async () => {
      if (!State.currentTarea || State.currentTarea.items.length === 0) {
        toast('La tarea no tiene baremos agregados', 'warn');
        return;
      }

      const prevText = btnFinalizar.innerHTML;
      btnFinalizar.disabled = true;
      btnFinalizar.innerHTML = '📍 Guardando tarea...';

      let loc = null;
      try {
        loc = await obtenerUbicacionTarea();
      } catch (err) {
        console.error('[Error al obtener ubicacion]', err);
      } finally {
        btnFinalizar.disabled = false;
        btnFinalizar.innerHTML = prevText;
      }

      if (!loc || !loc.direccion) {
        loc = { direccion: State.user?.zona ? `Zona ${State.user.zona}` : 'Lugar de trabajo', coords: null };
      }
      
      const backupTareas = State.jornada.tareas ? [...State.jornada.tareas] : [];
      
      // Empaquetado completo (Deep Copy) con ubicación y coordenadas
      const nuevaTareaConfirmada = {
        id: Date.now() + Math.random(),
        fecha: hoy(),
        hora: new Date().toLocaleTimeString('es-AR', {hour: '2-digit', minute:'2-digit'}),
        zona: State.user.zona || 'Sin zona',
        direccion: loc.direccion,
        coords: loc.coords || null,
        items: JSON.parse(JSON.stringify(State.currentTarea.items)),
        total: State.currentTarea.total
      };
      
      if (!State.jornada.tareas) State.jornada.tareas = [];
      State.jornada.tareas.push(nuevaTareaConfirmada);
      
      try {
        // Bloqueo de la función hasta que el disco confirme la escritura
        await saveJornada(); 
        // Vaciado en memoria del input y renderizado instantáneo
        State.currentTarea = { id: null, fecha: '', hora: '', zona: '', direccion: '', coords: null, items: [], total: 0 };
        renderAll();
        toast('✅ Tarea finalizada con éxito', 'success');
      } catch (e) {
        // En caso de fallo de hardware o límite de cuota, restauramos para no perder
        State.jornada.tareas = backupTareas;
        console.error('[Error de Almacenamiento Tarea]', e);
        toast('Error al guardar en base de datos. Por favor, reintenta.', 'error');
      }
    };
  }
}

function renderItems() {
  const tb = $('#itemsBody');
  const card = $('#currentTaskCard');
  if (!tb || !card) return;
  
  // Renderizar baremos de Tarea en Curso
  if (!State.currentTarea || State.currentTarea.items.length === 0) {
    card.style.display = 'none';
    tb.innerHTML = '';
  } else {
    card.style.display = 'block';
    tb.innerHTML = State.currentTarea.items.map((it, i) => `<tr class="adding"><td class="hide-mob">${i + 1}</td><td><strong>${it.codigo}</strong></td><td class="td-desc" style="font-size:11px" title="${it.descripcion}">${it.descripcion}</td><td class="hide-mob">${fmt(it.precio)}</td><td><input type="number" min="1" class="qty-input" value="${it.cantidad}" data-id="${it.id}"></td><td><strong>${fmt(it.subtotal)}</strong></td><td><button class="del-btn" data-id="${it.id}">🗑️</button></td></tr>`).join('');
    
    const ctTotal = $('#currentTaskTotal');
    if (ctTotal) ctTotal.textContent = fmt(State.currentTarea.total);
    
    tb.querySelectorAll('.qty-input').forEach(inp => {
      inp.onchange = e => {
        const it = State.currentTarea.items.find(i => i.id === parseFloat(e.target.dataset.id));
        if (!it) return;
        it.cantidad = parseInt(e.target.value) || 1;
        it.subtotal = it.precio * it.cantidad;
        State.currentTarea.total = State.currentTarea.items.reduce((a, i) => a + i.subtotal, 0);
        renderAll();
      };
    });
    tb.querySelectorAll('.del-btn').forEach(btn => {
      btn.onclick = async e => {
        const id = parseFloat(e.target.dataset.id);
        State.currentTarea.items = State.currentTarea.items.filter(i => i.id !== id);
        State.currentTarea.total = State.currentTarea.items.reduce((a, i) => a + i.subtotal, 0);
        renderAll();
        toast('Baremo eliminado', 'success');
      };
    });
  }

  // Renderizar Tareas Finalizadas hoy (Acordeón multinivel)
  const tl = $('#tareasFinalizadasList');
  if (!tl) return;
  if (!State.jornada || !State.jornada.tareas || State.jornada.tareas.length === 0) {
    tl.innerHTML = '<div class="empty"><div class="ico">📋</div><p>Sin tareas finalizadas</p></div>';
  } else {
    const tareasReversed = [...State.jornada.tareas].reverse();
    const totalCount = State.jornada.tareas.length;
    
    tl.innerHTML = tareasReversed.map((t, i) => {
      const originalIdx = String(totalCount - i).padStart(3, '0');
      const cantBaremos = t.items.length;
      const fDate = t.fecha || State.jornada.fecha;
      const fHora = t.hora ? ` ${t.hora}` : '';
      const fZona = t.zona || State.jornada.zona || '-';
      
      return `
      <div class="tarea-card">
        <div class="tarea-header" style="cursor:pointer;" onclick="this.parentElement.classList.toggle('expanded')">
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="color:var(--primary); font-weight:800; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
                TAREA ${originalIdx}
              </span>
              <span class="expand-ico">▼</span>
            </div>
            <div style="font-size:12px; color:var(--text-soft); margin-top:6px; font-weight:600; display:flex; flex-direction:column; gap:4px;">
              <div><strong style="color:var(--text)">Fecha:</strong> ${fechaCorta(fDate)}${fHora}</div>
              <div><strong style="color:var(--text)">Zona:</strong> ${fZona}</div>
              <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:2px;">
                <strong style="color:var(--text)">Dirección:</strong>
                ${t.direccion ? `
                  <span style="color:var(--primary); font-weight:700; background:rgba(11, 61, 145, 0.09); padding:2px 8px; border-radius:4px; border:1px solid rgba(11, 61, 145, 0.25);">
                    📍 ${t.direccion}
                  </span>
                  ${t.coords ? `<a href="https://www.google.com/maps?q=${t.coords.lat},${t.coords.lng}" target="_blank" rel="noopener" style="color:var(--primary); font-size:11px; text-decoration:underline; font-weight:700;" onclick="event.stopPropagation();">🗺️ Ver mapa</a>` : ''}
                ` : `
                  <span style="color:var(--text-soft); font-style:italic; opacity:0.8;">📍 Sin dirección registrada</span>
                `}
              </div>
              <div style="color:var(--text); font-weight:800; margin-top:4px; font-size:13px;">
                Total de la tarea: <span style="color:var(--primary); font-weight:800;">${fmt(t.total)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tarea-body">
          <div style="padding: 10px 14px 6px; font-size: 11px; font-weight: 800; color: var(--text-soft); text-transform: uppercase;">Baremos incluidos (${cantBaremos}):</div>
          <div class="table-wrap" style="border:none; border-radius:0; margin:0;">
            <table>
              <thead><tr><th>Cód</th><th>Desc</th><th class="hide-mob" style="text-align:right;">Precio</th><th style="text-align:center;">Cant</th><th style="text-align:right;">Sub</th></tr></thead>
              <tbody>
                ${t.items.map(it => `
                  <tr>
                    <td><strong>${it.codigo}</strong></td>
                    <td class="td-desc" style="font-size:11px" title="${it.descripcion}">${it.descripcion}</td>
                    <td class="hide-mob" style="text-align:right;">${fmt(it.precio)}</td>
                    <td style="text-align:center;">x${it.cantidad}</td>
                    <td style="text-align:right;"><strong>${fmt(it.subtotal)}</strong></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          <div class="tarea-footer">
            <div class="tarea-actions-left">
              ${!State.jornada.cerrada ? `
                <button type="button" class="btn-tarea-action btn-tarea-del" data-id="${t.id}" title="Eliminar tarea">
                  🗑️ Eliminar
                </button>
                <button type="button" class="btn-tarea-action btn-tarea-edit" data-id="${t.id}" title="Editar tarea">
                  ✏️ Editar
                </button>
              ` : ''}
            </div>
            <div class="tarea-total">
              TOTAL DE LA TAREA: <span style="color: var(--primary); font-weight: 800;">${fmt(t.total)}</span>
            </div>
          </div>
        </div>
      </div>
    `}).join('');
    
    // Expandir la más reciente automáticamente
    const firstCard = tl.querySelector('.tarea-card');
    if (firstCard) firstCard.classList.add('expanded');

    // Manejadores para Eliminar y Editar Tarea
    tl.querySelectorAll('.btn-tarea-del').forEach(btn => {
      btn.onclick = async e => {
        e.stopPropagation();
        const id = parseFloat(btn.dataset.id);
        if (!await confirmDialog('¿Estás seguro de eliminar esta tarea de la jornada?')) return;
        State.jornada.tareas = (State.jornada.tareas || []).filter(t => t.id !== id);
        await saveJornada();
        renderAll();
        toast('Tarea eliminada correctamente', 'success');
      };
    });

    tl.querySelectorAll('.btn-tarea-edit').forEach(btn => {
      btn.onclick = async e => {
        e.stopPropagation();
        const id = parseFloat(btn.dataset.id);
        const tarea = (State.jornada.tareas || []).find(t => t.id === id);
        if (!tarea) return;

        if (State.currentTarea && State.currentTarea.items && State.currentTarea.items.length > 0) {
          if (!await confirmDialog('Ya tenés una tarea en curso. ¿Deseás reemplazarla con esta tarea para editarla?')) return;
        }

        // Cargar ítems a la tarea en curso y remover de finalizadas
        State.currentTarea = {
          id: tarea.id,
          fecha: tarea.fecha,
          hora: tarea.hora,
          zona: tarea.zona,
          direccion: tarea.direccion || '',
          coords: tarea.coords || null,
          items: JSON.parse(JSON.stringify(tarea.items)),
          total: tarea.total
        };
        State.jornada.tareas = (State.jornada.tareas || []).filter(t => t.id !== id);
        await saveJornada();
        renderAll();
        toast('Tarea cargada para edición. Realizá los cambios y presioná "Finalizar tarea" al terminar.', 'info');
        
        const topEl = $('#currentTaskCard') || $('#baremoInput');
        if (topEl) topEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
    });
  }
}

function renderTotales() {
  if (!State.jornada) return;
  
  const totalTareas = (State.jornada.tareas || []).length;
  const totalItemsFinalizados = (State.jornada.tareas || []).reduce((a, t) => a + t.items.reduce((s, i) => s + i.cantidad, 0), 0);
  const totalItemsActuales = (State.currentTarea && State.currentTarea.items) ? State.currentTarea.items.reduce((a, i) => a + i.cantidad, 0) : 0;
  
  const sumFinalizadas = (State.jornada.tareas || []).reduce((a, t) => a + t.total, 0);
  const sumActual = (State.currentTarea && State.currentTarea.total) ? State.currentTarea.total : 0;
  
  const t = sumFinalizadas + sumActual;
  
  const tr = $('#totalRegs'); if (tr) tr.textContent = fmtNum(totalTareas);
  const ti = $('#totalItems'); if (ti) ti.textContent = fmtNum(totalItemsFinalizados + totalItemsActuales);
  const tg = $('#totalGeneral'); if (tg) tg.textContent = fmt(t);
  const tgb = $('#totalGeneralBig'); if (tgb) tgb.textContent = fmt(t);
  
  const tgc = $('#totalGeneralCard');
  if (tgc) {
    tgc.className = 'total-general';
    const cfg = getConfigDia(t);
    tgc.classList.add(cfg.cls);
    
    if (t > 200000) {
      tgc.classList.add('imparables');
      if (!State.mensaje200kMostrado) mostrarMensaje200k();
    } else if (t >= 150000) {
      tgc.classList.add('imparables');
      if (!State.mensaje150kMostrado) mostrarMensaje150k();
    } else if (t >= 125000) {
      if (!State.mensaje125kMostrado) mostrarMensaje125k();
    } else if (t >= 100000) {
      if (!State.mensaje100kMostrado) mostrarMensaje100k();
    }
  }
}

function showView(n) {
  if (!n) return;
  if (!State.user) {
    showLogin();
    return;
  }
  $$('.view').forEach(v => v.classList.remove('active'));
  const vn = $(`#view${n}`); if(vn) vn.classList.add('active');
  $$('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.view === n));
  if (n === 'Dashboard') renderDashboard();
  if (n === 'Historial') renderHistorial();
  if (n === 'Combustible') renderCombustible();
  if (n === 'Quincenas') renderQuincenas();
  if (n === 'Ajustes') renderAjustes();
  if (n === 'Admin') renderAdmin();
  if (n === 'Inicio') renderFraseMotivacional();
}

function renderMiniCalendar() {
  const mc = $('#miniCalendar');
  if (!mc) return;
  const n = new Date();
  mc.innerHTML = `<div class="mc-day">${n.getDate()}</div><div class="mc-month">${['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'][n.getMonth()]}</div>`;
}

function showApp() {
  if (!State.user) return;
  const h = $('#headerUser');
  const hz = $('#headerUserZona');
  const bz = $('#btnChangeZona');
  
  if (h) h.textContent = `${State.user.nombre} · ${State.user.legajo}`;
  if (hz && bz) {
    if (State.user.zona) {
      hz.textContent = State.user.zona;
      bz.style.display = 'inline-flex';
    } else {
      bz.style.display = 'none';
    }
  }
  renderMiniCalendar();
  renderAll();
  showView('Inicio');
}

function renderAll() { renderItems(); renderTotales(); }

async function renderHistorial() {
  const all = await dbGetAll('jornadas');
  let f = all.filter(j => j.legajo === State.user.legajo);
  if (State.histFilter === 'hoy') f = f.filter(j => j.fecha === hoy());
  else if (State.histFilter === 'mes') f = f.filter(j => j.fecha.startsWith(mesActual()));
  else if (State.histFilter === 'mesAnterior') f = f.filter(j => j.fecha.startsWith(mesAnterior()));
  f.sort((a, b) => b.fecha.localeCompare(a.fecha));
  
  const lst = $('#historialList');
  const ab = $('#histActionsBar');
  if (!lst) return;
  
  if (ab) {
    if (State.histSelected.size > 0) {
      ab.classList.add('show');
      const hc = $('#habCount'); if(hc) hc.textContent = `${State.histSelected.size} seleccionada(s)`;
    } else {
      ab.classList.remove('show');
    }
  }
  
  if (!f.length) {
    lst.innerHTML = '<div class="empty"><div class="ico">📭</div><p>Sin jornadas</p></div>';
    return;
  }
  
  lst.innerHTML = f.map(j => {
    const is = State.histSelected.has(j.id);
    const tareasNorm = getNormalizedTareas(j);
    const cantTareas = tareasNorm.length;
    const cantItems = tareasNorm.reduce((a, t) => a + t.items.reduce((s, i) => s + i.cantidad, 0), 0);
    return `<div class="jornada-item ${is ? 'selected' : ''}" data-id="${j.id}"><div class="ji-left"><div class="fecha">${fechaCorta(j.fecha)}</div><div class="meta">${cantTareas} tareas · ${cantItems} ítems</div></div><div class="ji-right"><div class="total">${fmt(j.total || 0)}</div><div class="estado ${j.cerrada ? 'cerrada' : 'abierta'}">${j.cerrada ? 'CERRADA' : 'ABIERTA'}</div><div class="ji-actions"><div class="check-box ${is ? 'checked' : ''}" data-act="select" data-id="${j.id}"></div><button class="mini-btn view" data-act="view" data-id="${j.id}">👁️</button>${j.cerrada ? `<button class="mini-btn export" data-act="export" data-id="${j.id}">📄</button>` : ''}</div></div></div>`;
  }).join('');
  
  lst.querySelectorAll('[data-act="select"]').forEach(el => {
    el.onclick = e => {
      e.stopPropagation();
      const id = parseInt(el.dataset.id);
      if (State.histSelected.has(id)) State.histSelected.delete(id);
      else State.histSelected.add(id);
      renderHistorial();
    };
  });
  lst.querySelectorAll('[data-act="view"]').forEach(el => { el.onclick = e => { e.stopPropagation(); openJornada(parseInt(el.dataset.id)); }; });
  lst.querySelectorAll('[data-act="export"]').forEach(el => { el.onclick = async e => { e.stopPropagation(); await exportarJornadaPDF(parseInt(el.dataset.id)); }; });
  lst.querySelectorAll('.jornada-item').forEach(el => { el.onclick = () => openJornada(parseInt(el.dataset.id)); });
}

function setHistFilter(f) {
  State.histFilter = f;
  State.histSelected.clear();
  $$('.hist-filtro-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
  renderHistorial();
}

async function openJornada(id) {
  const j = await dbGet('jornadas', id);
  if (!j) return;
  const tareas = getNormalizedTareas(j);
  const totalItems = tareas.reduce((a, t) => a + t.items.reduce((s, i) => s + i.cantidad, 0), 0);
  
  const fFecha = $('#mjFecha'); if(fFecha) fFecha.textContent = fechaLegible(j.fecha);
  const fTotal = $('#mjTotal'); if(fTotal) fTotal.textContent = fmt(j.total);
  const fMeta = $('#mjMeta'); if(fMeta) fMeta.textContent = `${tareas.length} tareas · ${totalItems} ítems · ${j.cerrada ? 'CERRADA' : 'ABIERTA'}`;
  
  const bd = $('#mjBody');
  if(bd) {
    let html = '';
    tareas.forEach((t, idx) => {
      const isLegacy = t.referencia === 'Registros Anteriores';
      const labelTarea = isLegacy ? 'REGISTROS ANTERIORES' : `TAREA ${String(idx+1).padStart(3,'0')}`;
      const subInfo = [
        t.hora ? `Hora: ${t.hora}` : null,
        t.zona ? `Zona: ${t.zona}` : null,
        t.direccion ? `📍 ${t.direccion}` : null
      ].filter(Boolean).join(' · ');

      html += `<tr style="background:var(--surface-2)"><td colspan="6" style="padding:8px 10px;"><div style="font-weight:800; color:var(--primary); font-size:12px;">${labelTarea}</div>${subInfo ? `<div style="font-size:11px; color:var(--text-soft); font-weight:600; margin-top:2px;">${subInfo}</div>` : ''}</td></tr>`;
      t.items.forEach((it, i) => {
         html += `<tr><td class="hide-mob">${i + 1}</td><td><strong>${it.codigo}</strong></td><td class="td-desc" style="font-size:11px" title="${it.descripcion}">${it.descripcion}</td><td class="hide-mob">${fmt(it.precio)}</td><td>${it.cantidad}</td><td>${fmt(it.subtotal)}</td></tr>`;
      });
      html += `<tr><td colspan="6" style="text-align:right; font-weight:800; font-size:12px; border-bottom: 2px solid var(--border);">Total de la Tarea: ${fmt(t.total)}</td></tr>`;
    });
    bd.innerHTML = html;
  }
  const modal = $('#modalJornada'); if(modal) modal.classList.add('show');
}

function drawElegantHeader(doc, title, subtitle, rightText1, rightText2) {
  doc.setFillColor(11, 61, 145);
  doc.rect(0, 0, 210, 35, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(title, 14, 20);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(subtitle, 14, 28);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text(rightText1, 196, 20, { align: 'right' });
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(rightText2, 196, 28, { align: 'right' });
}

async function exportarJornadaPDF(id) {
  const j = await dbGet('jornadas', id);
  if (!j || !window.jspdf) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  drawElegantHeader(doc, "BAREMOS", `Jornada del ${fechaLegible(j.fecha)}`, State.user.nombre, `Legajo: ${State.user.legajo} | Zona: ${State.user.zona || '-'}`);
  
  const tareas = getNormalizedTareas(j);
  const body = [];
  tareas.forEach((t, idx) => {
    const isLegacy = t.referencia === 'Registros Anteriores';
    const labelTarea = isLegacy ? 'REGISTROS ANTERIORES' : `TAREA ${String(idx + 1).padStart(3, '0')}${t.direccion ? ` (📍 ${t.direccion})` : ''}`;
    body.push([{ content: labelTarea, colSpan: 6, styles: { fillColor: [240, 243, 249], fontStyle: 'bold', textColor: [11, 61, 145] } }]);
    t.items.forEach((it, i) => {
      body.push([i + 1, it.codigo, it.descripcion, it.cantidad, fmt(it.precio), fmt(it.subtotal)]);
    });
    body.push([{ content: `TOTAL DE LA TAREA: ${fmt(t.total)}`, colSpan: 6, styles: { halign: 'right', fontStyle: 'bold' } }]);
  });
  
  doc.autoTable({
    startY: 45,
    head: [['#', 'Código', 'Descripción', 'Cant', 'Precio', 'Subtotal']],
    body,
    theme: 'grid',
    styles: { fontSize: 8 },
    headStyles: { fillColor: [11, 61, 145] },
    margin: { left: 14, right: 14 }
  });
  
  const y = doc.lastAutoTable.finalY + 10;
  doc.setFillColor(11, 61, 145);
  doc.rect(14, y, 182, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text(`TOTAL DEL DÍA: ${fmt(j.total || 0)}`, 18, y + 8);
  
  doc.save(`baremos_${j.fecha}_${j.legajo}.pdf`);
  toast('PDF generado', 'success');
}

async function exportarSeleccionadasPDF() {
  if (!State.histSelected.size) { toast('Seleccioná jornadas', 'warn'); return; }
  await exportarMultiplesPDF([...State.histSelected].sort((a, b) => a - b), 'seleccionadas');
}

async function exportarMesCompletoPDF() {
  const mes = State.histFilter === 'mesAnterior' ? mesAnterior() : mesActual();
  const j = (await dbGetAll('jornadas')).filter(j => j.legajo === State.user.legajo && j.cerrada && j.fecha.startsWith(mes)).sort((a, b) => a.fecha.localeCompare(b.fecha));
  if (!j.length) { toast('Sin jornadas en este mes', 'warn'); return; }
  await exportarMultiplesPDF(j.map(x => x.id), nombreMes(mes).replace(' ', '_'));
}

async function exportarMultiplesPDF(ids, nom) {
  if (!window.jspdf) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  const jornadas = [];
  for (const id of ids) {
    const j = await dbGet('jornadas', id);
    if (j) jornadas.push(j);
  }
  jornadas.sort((a, b) => a.fecha.localeCompare(b.fecha));

  const mesLabel = nom !== 'seleccionadas' ? nom.replace('_', ' ').toUpperCase() : 'SELECCIÓN MÚLTIPLE';
  drawElegantHeader(doc, "BAREMOS", `Reporte de Producción: ${mesLabel}`, State.user.nombre, `Legajo: ${State.user.legajo} | Zona: ${State.user.zona || '-'}`);

  let currentY = 45;
  let totalAcu = 0;

  for (const j of jornadas) {
    if (currentY > 240) {
      doc.addPage();
      drawElegantHeader(doc, "BAREMOS", `Reporte de Producción: ${mesLabel} (Cont.)`, State.user.nombre, `Legajo: ${State.user.legajo} | Zona: ${State.user.zona || '-'}`);
      currentY = 45;
    }

    doc.setFillColor(240, 243, 249);
    doc.rect(14, currentY, 182, 8, 'F');
    doc.setTextColor(11, 61, 145);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(`▶ Jornada: ${fechaLegible(j.fecha)}   |   Total Día: ${fmt(j.total || 0)}`, 16, currentY + 6);
    currentY += 10;
    
    totalAcu += (j.total || 0);

    const tareas = getNormalizedTareas(j);
    const body = [];
    tareas.forEach((t, idx) => {
      const isLegacy = t.referencia === 'Registros Anteriores';
      const labelTarea = isLegacy ? 'REGISTROS ANTERIORES' : `TAREA ${String(idx + 1).padStart(3, '0')}`;
      body.push([{ content: labelTarea, colSpan: 6, styles: { fillColor: [240, 243, 249], fontStyle: 'bold', textColor: [11, 61, 145] } }]);
      t.items.forEach((it, i) => {
        body.push([i + 1, it.codigo, it.descripcion, it.cantidad, fmt(it.precio), fmt(it.subtotal)]);
      });
      body.push([{ content: `Total Tarea: ${fmt(t.total)}`, colSpan: 6, styles: { halign: 'right', fontStyle: 'bold' } }]);
    });
    
    doc.autoTable({
      startY: currentY,
      head: [['#', 'Código', 'Descripción', 'Cant', 'Precio', 'Subtotal']],
      body,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [37, 99, 201] },
      margin: { left: 14, right: 14 }
    });
    
    currentY = doc.lastAutoTable.finalY + 10;
  }

  if (currentY > 260) {
     doc.addPage();
     drawElegantHeader(doc, "BAREMOS", `Reporte de Producción: ${mesLabel} (Final)`, State.user.nombre, `Legajo: ${State.user.legajo} | Zona: ${State.user.zona || '-'}`);
     currentY = 45;
  }

  doc.setFillColor(11, 61, 145);
  doc.rect(14, currentY, 182, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text(`TOTAL ACUMULADO: ${fmt(totalAcu)}`, 18, currentY + 8);

  doc.save(`baremos_${nom}_${State.user.legajo}.pdf`);
  toast(`Reporte exportado correctamente`, 'success');
  State.histSelected.clear();
  renderHistorial();
}

async function exportarMesExcel() {
  if (!window.XLSX) return;
  const mes = State.histFilter === 'mesAnterior' ? mesAnterior() : mesActual();
  const j = (await dbGetAll('jornadas')).filter(x => x.legajo === State.user.legajo && x.cerrada && x.fecha.startsWith(mes)).sort((a, b) => a.fecha.localeCompare(b.fecha));
  if (!j.length) { toast('Sin jornadas', 'warn'); return; }
  const wb = XLSX.utils.book_new();
  const res = j.map(x => ({ Fecha: fechaCorta(x.fecha), Usuario: x.usuario, Total: x.total || 0 }));
  res.push({});
  res.push({ Fecha: 'TOTAL', Total: j.reduce((a, x) => a + (x.total || 0), 0) });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(res), 'Resumen');
  
  j.forEach(x => {
    const detalle = [];
    const tareas = getNormalizedTareas(x);
    tareas.forEach((t, idx) => {
       const isLegacy = t.referencia === 'Registros Anteriores';
       const fRef = isLegacy ? 'REGISTROS ANTERIORES' : `TAREA ${String(idx + 1).padStart(3, '0')}`;
       detalle.push({ '#': fRef, Código: '', Subtotal: t.total });
       t.items.forEach((it, i) => {
         detalle.push({
           '#': i + 1, Código: it.codigo, Descripción: it.descripcion,
           Precio: it.precio, Cantidad: it.cantidad, Subtotal: it.subtotal
         });
       });
       detalle.push({});
    });
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(detalle), `Dia_${x.fecha}`.substring(0, 31));
  });
  XLSX.writeFile(wb, `baremos_${nombreMes(mes).replace(' ', '_')}.xlsx`);
  toast('Excel generado', 'success');
}

async function renderDashboard() {
  const leg = State.user.legajo;
  const mes = mesActual();
  const mesAnt = mesAnterior();
  const todas = (await dbGetAll('jornadas')).filter(j => j.legajo === leg && j.cerrada);
  const jMes = todas.filter(j => j.fecha.startsWith(mes));
  const jAnt = todas.filter(j => j.fecha.startsWith(mesAnt));
  const comb = (await dbGetAll('combustible')).filter(c => c.legajo === leg);
  const quinc = (await dbGetAll('quincenas')).filter(q => q.legajo === leg);
  
  const dias = jMes.length;
  const tot = jMes.reduce((a, j) => a + (j.total || 0), 0);
  const prom = dias ? tot / dias : 0;
  
  const bc = {}, bf = {};
  let totalItemsMes = 0;
  jMes.forEach(j => {
    const arr = getSafeItems(j);
    totalItemsMes += arr.length;
    arr.forEach(it => {
      bc[it.codigo] = (bc[it.codigo] || 0) + it.cantidad;
      bf[it.codigo] = (bf[it.codigo] || 0) + it.subtotal;
    });
  });
  
  const tu = Object.entries(bc).sort((a, b) => b[1] - a[1])[0];
  const tf = Object.entries(bf).sort((a, b) => b[1] - a[1])[0];
  let mx = null, mn = null;
  jMes.forEach(j => {
    if (!mx || j.total > mx.total) mx = j;
    if (!mn || j.total < mn.total) mn = j;
  });

  const dHoy = hoy();
  const jornadasPasadas = todas.filter(j => j.fecha < dHoy).sort((a,b) => b.fecha.localeCompare(a.fecha));
  const prodAyer = jornadasPasadas.length ? (jornadasPasadas[0].total || 0) : 0;
  const fecAyer = jornadasPasadas.length ? `(${fechaCorta(jornadasPasadas[0].fecha)})` : '';
  
  const statDiaAnt = $('#statDiaAnterior'); if(statDiaAnt) statDiaAnt.textContent = fmt(prodAyer);
  const lblFecAyer = $('#lblFechaAyer'); if(lblFecAyer) lblFecAyer.textContent = fecAyer;

  const dac = $('#cardDiaAnterior');
  if (dac) {
    dac.className = 'stat-card dac-interactive';
    const cfgAyer = getConfigDia(prodAyer);
    dac.classList.add(cfgAyer.cls);
  }

  const cMin = $('#cardMinDia');
  if (cMin) {
    cMin.className = 'stat-card dac-interactive';
    const prodMin = mn ? (mn.total || 0) : 0;
    const cfgMin = getConfigDia(prodMin);
    cMin.classList.add(cfgMin.cls);
  }
  
  const combMes = comb.filter(c => c.mes === mes);
  const cMesDesc = combMes.filter(c => c.descontar !== false).reduce((a, c) => a + c.monto, 0);
  const cMesNoDesc = combMes.filter(c => c.descontar === false).reduce((a, c) => a + c.monto, 0);

  const q1A = quinc.find(q => q.mes === mes && q.tipo === 1);
  const q1Tot = (q1A && q1A.bloqueada) ? q1A.total : 0;

  let q2Tot = 0;
  let q2Label = 'Q2';
  if (esDiaRegistroQ2()) {
    const q2Ant = quinc.find(q => q.mes === mesAnt && q.tipo === 2);
    q2Tot = (q2Ant && q2Ant.bloqueada) ? q2Ant.total : 0;
    q2Label = `Q2 ${nombreMes(mesAnt)}`;
  } else {
    const q2A = quinc.find(q => q.mes === mes && q.tipo === 2);
    q2Tot = (q2A && q2A.bloqueada) ? q2A.total : 0;
    q2Label = `Q2`;
  }

  const saldoFinal = tot - cMesDesc - q1Tot - q2Tot;
  const pAnt = jAnt.reduce((a, j) => a + (j.total || 0), 0);
  
  const tacCard = $('#tacCard');
  if (tacCard) {
    const meta = 3000000;
    const progreso = Math.max(0, Math.min((tot / meta) * 100, 100));
    const faltan = Math.max(meta - tot, 0);

    const tcAm = $('#tacAmount'); if(tcAm) tcAm.textContent = fmt(tot);
    const tcPb = $('#tacProgressBar'); if(tcPb) tcPb.style.width = progreso + '%';
    const tcPt = $('#tacProgressText'); if(tcPt) tcPt.textContent = `Progreso: ${progreso.toFixed(1)}%`;
    const tcFt = $('#tacFaltanText'); if(tcFt) tcFt.textContent = `Faltan: ${fmt(faltan)}`;

    const overlay = $('#tacOverlayMsg');
    const cfgMes = getConfigMes(tot);
    tacCard.className = 'total-acumulado-card ' + cfgMes.cls;
    if(overlay) overlay.classList.remove('show');

    if (tot <= 1500000) {
      // red
    } else if (tot <= 2000000) {
      // yellow
    } else if (tot <= 2500000) {
      if(overlay){ overlay.textContent = '👏 ¡Sigue así!'; overlay.classList.add('show'); }
    } else if (tot < 3000000) {
      if(overlay){ overlay.textContent = '🚀 Excelente rendimiento'; overlay.classList.add('show'); }
    } else {
      if(overlay){ overlay.textContent = '🏆 ¡Sos Imparable!'; overlay.classList.add('show'); }
      if (!State.metaAlcanzada) {
        lanzarConfeti();
        lanzarBengalas();
        State.metaAlcanzada = true;
      }
    }
    if (tot < 3000000) State.metaAlcanzada = false;
  }

  const s = (id, v) => { const el = $('#' + id); if (el) el.textContent = v; };
  s('statDias', fmtNum(dias));
  s('statProm', fmt(prom));
  s('statTrabajos', fmtNum(totalItemsMes)); 
  s('statBaremos', fmtNum(Object.keys(bc).length)); 
  s('statTopUso', tu ? `${tu[0]} (${tu[1]})` : '-');
  s('statTopFact', tf ? `${tf[0]} · ${fmt(tf[1])}` : '-');
  s('statMaxDia', mx ? `${fechaCorta(mx.fecha)} · ${fmt(mx.total)}` : '-');
  s('statMinDia', mn ? `${fechaCorta(mn.fecha)} · ${fmt(mn.total)}` : '-');
  s('statMesAnterior', fmt(pAnt));
  
  const am = $('#statCobrar');
  const det = $('#statCobrarDetail');
  if(am) {
    am.textContent = fmt(saldoFinal);
    am.style.color = saldoFinal < 0 ? '#fca5a5' : '';
  }
  if(det) det.innerHTML = `
    <div class="pc-line"><span>Producción ${nombreMes(mes)}</span><span>${fmt(tot)}</span></div>
    <div class="pc-line"><span>− Gasto de Combustible</span><span style="color: #fca5a5;">${fmt(cMesDesc)}</span></div>
    <div class="pc-line" style="color: #e2e8f0;"><span>ℹ️ Comb. Sin Descuento</span><span style="font-weight: 700;">${fmt(cMesNoDesc)}</span></div>
    <div class="pc-line"><span>− Q1</span><span style="color: #fca5a5;">${q1Tot > 0 ? fmt(q1Tot) : '0 (Pend.)'}</span></div>
    <div class="pc-line"><span>− ${q2Label}</span><span style="color: #fca5a5;">${q2Tot > 0 ? fmt(q2Tot) : '0 (Pend.)'}</span></div>
    <div class="pc-line total"><span>= Saldo Final</span><span style="${saldoFinal < 0 ? 'color:#fca5a5;' : 'color:#bbf7d0;'}">${fmt(saldoFinal)}</span></div>
  `;

  renderCharts(todas);
}

function setupCombustible() {
  const f = $('#formComb');
  if (!f) return;
  f.onsubmit = async e => {
    e.preventDefault();
    const p = $('#combPatente').value.trim().toUpperCase();
    const m = parseFloat($('#combMonto').value) || 0;
    const checkbox = $('#combDescontar');
    const desc = checkbox ? checkbox.checked : true;
    
    if (!p || m <= 0) { toast('Completá datos', 'warn'); return; }
    await dbAdd('combustible', { patente: p, monto: m, descontar: desc, fecha: hoy(), mes: mesActual(), legajo: State.user.legajo, creado: ahora() });
    f.reset();
    if($('#combDescontar')) $('#combDescontar').checked = true;
    toast('Carga registrada', 'success');
    renderCombustible();
  };
}

async function renderCombustible() {
  const all = (await dbGetAll('combustible')).filter(c => c.legajo === State.user.legajo).sort((a, b) => b.fecha.localeCompare(a.fecha));
  const lst = $('#combList');
  if (!lst) return;
  if (!all.length) lst.innerHTML = '<div class="empty"><div class="ico">⛽</div><p>Sin cargas</p></div>';
  else lst.innerHTML = all.map(c => `
    <div class="registro-item">
      <div class="ri-left">
        <div class="pat">⛽ ${c.patente} ${c.descontar === false ? '<span style="font-size:9px;background:var(--surface-2);color:var(--text-soft);padding:2px 6px;border-radius:6px;margin-left:4px">SIN DESC.</span>' : ''}</div>
        <div class="fecha">${fechaCorta(c.fecha)}</div>
      </div>
      <div class="ri-right">
        <div class="monto" style="${c.descontar === false ? 'color:var(--text-soft)' : ''}">${fmt(c.monto)}</div>
      </div>
    </div>
  `).join('');
  const t = $('#combTotalMes');
  if (t) t.textContent = fmt(all.filter(c => c.mes === mesActual()).reduce((a, c) => a + c.monto, 0));
}

async function renderQuincenas() {
  const leg = State.user.legajo;
  const mes = mesActual();
  const mesQ = mesQuincenaActual();
  const quinc = (await dbGetAll('quincenas')).filter(q => q.legajo === leg);
  let q1, q2, mesQ1, mesQ2;
  if (esDiaRegistroQ2()) {
    q1 = quinc.find(q => q.mes === mes && q.tipo === 1);
    q2 = quinc.find(q => q.mes === mesQ && q.tipo === 2);
    mesQ1 = mes; mesQ2 = mesQ;
  } else {
    q1 = quinc.find(q => q.mes === mes && q.tipo === 1);
    q2 = quinc.find(q => q.mes === mes && q.tipo === 2);
    mesQ1 = mes; mesQ2 = mes;
  }
  const bQ1 = $('#bloqueQ1');
  const bQ2 = $('#bloqueQ2');
  const titQ1 = bQ1?.querySelector('.qb-title');
  const titQ2 = bQ2?.querySelector('.qb-title');
  if (titQ1) titQ1.textContent = `📅 1ra Quincena de ${nombreMes(mesQ1)}`;
  if (titQ2) titQ2.textContent = `📅 2da Quincena de ${nombreMes(mesQ2)}`;
  const fQ1 = $('#fechasQ1');
  const fQ2 = $('#fechasQ2');
  if (fQ1) fQ1.textContent = `Período: 01 al 15 de ${nombreMes(mesQ1)} · Pago día 20`;
  if (fQ2) fQ2.textContent = `Período: 16 al ${diasDelMes(mesQ2)} de ${nombreMes(mesQ2)} · Pago: primeros 4 días hábiles del mes siguiente`;
  const aQ1 = $('#alertaQ1');
  const aQ2 = $('#alertaQ2');
  const fQ1f = $('#formQ1');
  const fQ2f = $('#formQ2');
  const btnQ2 = $('#btnQ2');
  const tQ1 = $('#totalQ1');
  const tQ2 = $('#totalQ2');
  if (q1 && q1.bloqueada) {
    bQ1.classList.add('bloqueada');
    bQ1.classList.remove('deshabilitada');
    $('#badgeQ1').className = 'qb-badge bloqueada';
    $('#badgeQ1').textContent = '🔒 BLOQUEADA';
    aQ1.innerHTML = `<span>✅</span><span>Registrada ${fechaCorta(q1.fechaRegistro)}. No editable.</span>`;
    fQ1f.style.display = 'none';
    tQ1.style.display = 'flex';
    $('#totalQ1Value').textContent = fmt(q1.total);
    $('#q1o1').disabled = true;
    $('#q1o2').disabled = true;
    $('#q1o1').value = q1.oficial1;
    $('#q1o2').value = q1.oficial2;
  } else {
    bQ1.classList.remove('bloqueada');
    $('#badgeQ1').className = 'qb-badge pendiente';
    $('#badgeQ1').textContent = 'PENDIENTE';
    aQ1.innerHTML = `<span>⚠️</span><span>Una vez registrada quedará <strong>bloqueada permanentemente</strong>.</span>`;
    fQ1f.style.display = 'block';
    tQ1.style.display = 'none';
    $('#q1o1').disabled = false;
    $('#q1o2').disabled = false;
  }
  if (q2 && q2.bloqueada) {
    bQ2.classList.add('bloqueada');
    bQ2.classList.remove('deshabilitada');
    $('#badgeQ2').className = 'qb-badge bloqueada';
    $('#badgeQ2').textContent = '🔒 BLOQUEADA';
    aQ2.innerHTML = `<span>✅</span><span>Registrada ${fechaCorta(q2.fechaRegistro)}. No editable.</span>`;
    fQ2f.style.display = 'none';
    tQ2.style.display = 'flex';
    $('#totalQ2Value').textContent = fmt(q2.total);
    $('#q2o1').disabled = true;
    $('#q2o2').disabled = true;
    $('#q2o1').value = q2.oficial1;
    $('#q2o2').value = q2.oficial2;
  } else if (q1 && q1.bloqueada) {
    bQ2.classList.remove('deshabilitada', 'bloqueada');
    $('#badgeQ2').className = 'qb-badge pendiente';
    $('#badgeQ2').textContent = 'PENDIENTE';
    if (esDiaRegistroQ2()) {
      aQ2.innerHTML = `<span>⚠️</span><span>Una vez registrada quedará <strong>bloqueada permanentemente</strong>.</span>`;
      fQ2f.style.display = 'block';
      tQ2.style.display = 'none';
      $('#q2o1').disabled = false;
      $('#q2o2').disabled = false;
      btnQ2.disabled = false;
    } else {
      aQ2.innerHTML = `<span>ℹ️</span><span>Se habilita en los <strong>primeros 4 días hábiles</strong> del mes siguiente (excluye fines de semana y feriados).</span>`;
      fQ2f.style.display = 'block';
      tQ2.style.display = 'none';
      $('#q2o1').disabled = true;
      $('#q2o2').disabled = true;
      btnQ2.disabled = true;
    }
  } else {
    bQ2.classList.add('deshabilitada');
    bQ2.classList.remove('bloqueada');
    $('#badgeQ2').className = 'qb-badge deshabilitada';
    $('#badgeQ2').textContent = 'BLOQUEADA';
    aQ2.innerHTML = `<span>⏳</span><span>Se habilita al registrar la 1ra quincena.</span>`;
    fQ2f.style.display = 'block';
    tQ2.style.display = 'none';
    $('#q2o1').disabled = true;
    $('#q2o2').disabled = true;
    btnQ2.disabled = true;
  }
  const lst = $('#quiList');
  if (!lst) return;
  const hist = quinc.filter(q => q.bloqueada).sort((a, b) => a.mes !== b.mes ? b.mes.localeCompare(a.mes) : a.tipo - b.tipo);
  if (!hist.length) lst.innerHTML = '<div class="empty"><div class="ico">💰</div><p>Sin quincenas</p></div>';
  else lst.innerHTML = hist.map(q => `<div class="registro-item"><div class="ri-left"><div class="pat">💰 ${q.tipo === 1 ? '1ra' : '2da'} Q · ${nombreMes(q.mes)}</div><div class="fecha">O1: ${fmt(q.oficial1)} / O2: ${fmt(q.oficial2)} · ${fechaCorta(q.fechaRegistro)}</div></div><div class="ri-right"><div class="monto">${fmt(q.total)}</div></div></div>`).join('');
}
async function registrarQuincena(tipo) {
  const mes = mesActual();
  const mesQ = mesQuincenaActual();
  const leg = State.user.legajo;
  const mesReg = tipo === 1 ? mes : mesQ;
  const ex = await dbGetAll('quincenas');
  if (ex.find(q => q.legajo === leg && q.mes === mesReg && q.tipo === tipo)) { toast('Ya registrada', 'warn'); return; }
  if (tipo === 2 && !ex.find(q => q.legajo === leg && q.mes === mesReg && q.tipo === 1 && q.bloqueada)) { toast('Registrá primero la 1ra quincena', 'warn'); return; }
  if (tipo === 2 && !esDiaRegistroQ2()) { toast('La Q2 se registra en los primeros 4 días hábiles del mes siguiente', 'warn'); return; }
  const o1 = parseFloat($(`#q${tipo}o1`).value) || 0;
  const o2 = parseFloat($(`#q${tipo}o2`).value) || 0;
  const tot = o1 + o2;
  if (tot <= 0) { toast('Ingresá montos', 'warn'); return; }
  const per = tipo === 1 ? '01 al 15' : `16 al ${diasDelMes(mesReg)}`;
  if (!await confirmDialog(`🔒 CONFIRMAR\n\n${tipo === 1 ? '1ra' : '2da'} Quincena de ${nombreMes(mesReg)}\nPeríodo: ${per}\n\nO1: ${fmt(o1)}\nO2: ${fmt(o2)}\nTotal: ${fmt(tot)}\n\n⚠️ Quedará BLOQUEADA. No editable.\n\n¿Confirmar?`)) return;
  try {
    await dbAdd('quincenas', { mes: mesReg, tipo, oficial1: o1, oficial2: o2, total: tot, fechaRegistro: hoy(), bloqueada: true, legajo: leg, creado: ahora() });
    toast(`${tipo === 1 ? '1ra' : '2da'} Q registrada y bloqueada`, 'success');
    renderQuincenas();
  } catch(e) { toast(e.name === 'ConstraintError' ? 'Ya registrada' : 'Error', 'error'); }
}
function setupQuincenas() {
  const f1 = $('#formQ1');
  const f2 = $('#formQ2');
  if (f1) f1.onsubmit = async e => { e.preventDefault(); await registrarQuincena(1); };
  if (f2) f2.onsubmit = async e => { e.preventDefault(); await registrarQuincena(2); };
}
async function handleChangePassword(e) {
  e.preventDefault();
  const current = $('#currentPass').value;
  const newPass = $('#newPass').value;
  const confirm = $('#confirmPass').value;
  if (newPass.length < 4) { toast('❌ La nueva contraseña debe tener al menos 4 caracteres', 'error'); return; }
  if (newPass !== confirm) { toast('❌ Las nuevas contraseñas no coinciden', 'error'); return; }
  const storedHash = await getAdminPasswordHash();
  const currentHash = await sha256(current);
  if (currentHash !== storedHash) { toast('❌ La contraseña actual es incorrecta', 'error'); return; }
  const newHash = await sha256(newPass);
  await dbPut('config', { key: 'adminPasswordHash', value: newHash });
  toast('✅ Contraseña actualizada correctamente', 'success');
  $('#modalChangePassword').classList.remove('show');
  $('#formChangePassword').reset();
}

/* ============================================================
   SISTEMA DE NOTIFICACIONES PUSH / RECORDATORIO DE CIERRE
   ============================================================ */
async function loadNotificationSettings() {
  try {
    const act = await dbGet('config', 'notificaciones_activas');
    State.notifEnabled = act ? !!act.value : false;
    const hora = await dbGet('config', 'hora_recordatorio_cierre');
    State.notifTime = hora?.value || '18:00';
    const ult = await dbGet('config', 'ultimo_recordatorio_enviado');
    State.lastNotifDate = ult?.value || null;
  } catch(e) {
    console.warn('[loadNotificationSettings]', e);
  }
}

async function saveNotificationSettings(enabled, hora) {
  State.notifEnabled = enabled;
  State.notifTime = hora || '18:00';
  await dbPut('config', { key: 'notificaciones_activas', value: State.notifEnabled });
  await dbPut('config', { key: 'hora_recordatorio_cierre', value: State.notifTime });
}

async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    toast('Este navegador no soporta notificaciones', 'warn');
    return false;
  }
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') {
    toast('Las notificaciones están bloqueadas en tu navegador', 'warn');
    return false;
  }
  try {
    const res = await Notification.requestPermission();
    return res === 'granted';
  } catch (e) {
    return false;
  }
}

async function sendPushNotification(title, body, tag = 'recordatorio-cierre-jornada') {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  
  // 1. Prioridad: Mostrar mediante Service Worker Registration (nativo PWA)
  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.ready;
      if (reg && reg.showNotification) {
        await reg.showNotification(title, {
          body,
          icon: './icons/icon-192.png?v=5.8.34',
          badge: './icons/icon-192.png?v=5.8.34',
          vibrate: [200, 100, 200],
          tag,
          renotify: true,
          data: { url: './' }
        });
        return;
      }
    }
  } catch (e) {
    console.warn('[sendPushNotification via SW ready failed, testing postMessage]', e);
  }

  // 2. Comunicación directa con Service Worker Controller
  try {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'SHOW_NOTIFICATION',
        title,
        body,
        tag,
        data: { url: './' }
      });
      return;
    }
  } catch (e) {
    console.warn('[sendPushNotification via postMessage failed]', e);
  }

  // 3. Fallback a Notification API estándar de navegador
  try {
    new Notification(title, {
      body,
      icon: './icons/icon-192.png?v=5.8.34',
      tag
    });
  } catch (e) {
    console.warn('[sendPushNotification fallback error]', e);
  }
}

async function checkNotificationReminder() {
  if (!State.notifEnabled) return;
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  
  const hoyStr = hoy();
  if (State.lastNotifDate === hoyStr) return;
  
  if (!State.jornada || State.jornada.cerrada) return;
  
  const ahoraObj = new Date();
  const horas = String(ahoraObj.getHours()).padStart(2, '0');
  const minutos = String(ahoraObj.getMinutes()).padStart(2, '0');
  const horaActual = `${horas}:${minutos}`;
  
  if (horaActual >= State.notifTime) {
    State.lastNotifDate = hoyStr;
    await dbPut('config', { key: 'ultimo_recordatorio_enviado', value: hoyStr });
    
    await sendPushNotification(
      '⚠️ Recordatorio: Cierre de Jornada',
      'Tenés la jornada de hoy abierta. Recordá registrar todas tus tareas y cerrarla antes de terminar el día.'
    );
  }
}

function startNotificationScheduler() {
  setInterval(checkNotificationReminder, 30000);
  setTimeout(checkNotificationReminder, 2500);
}

function showNotificationModal() {
  const m = $('#modalNotificaciones');
  if (!m) return;
  const chk = $('#notifEnabled');
  const inpTime = $('#notifTime');
  if (chk) chk.checked = State.notifEnabled;
  if (inpTime) inpTime.value = State.notifTime || '18:00';
  m.classList.add('show');
}

function setupNotificaciones() {
  const form = $('#formNotificaciones');
  const btnCancel = $('#cancelNotif');
  const btnTest = $('#btnTestNotif');
  const modal = $('#modalNotificaciones');

  if (btnCancel && modal) {
    btnCancel.onclick = () => modal.classList.remove('show');
  }

  if (btnTest) {
    btnTest.onclick = async () => {
      const granted = await requestNotificationPermission();
      if (!granted) {
        toast('Permiso de notificaciones no concedido', 'warn');
        return;
      }
      const horaSeleccionada = $('#notifTime')?.value || State.notifTime || '18:00';
      await sendPushNotification(
        '🔔 Prueba de Notificación BAREMO',
        `¡Notificaciones activas! Recibirás este aviso a las ${horaSeleccionada} hs si tu jornada sigue abierta.`
      );
      toast('Notificación de prueba enviada', 'success');
    };
  }

  if (form && modal) {
    form.onsubmit = async e => {
      e.preventDefault();
      const enabled = $('#notifEnabled')?.checked || false;
      const hora = $('#notifTime')?.value || '18:00';

      if (enabled) {
        const granted = await requestNotificationPermission();
        if (!granted) {
          toast('Debes permitir las notificaciones en tu navegador', 'warn');
          return;
        }
      }

      await saveNotificationSettings(enabled, hora);
      modal.classList.remove('show');
      renderAjustes();
      toast(enabled ? `Recordatorio activado a las ${hora} hs` : 'Recordatorio desactivado', 'success');
    };
  }
}

function renderAjustes() {
  const lst = $('#ajustesList');
  if (!lst) return;
  lst.innerHTML = `
    <div class="ajuste-item" data-act="pwa"><div class="aj-ico">📱</div><div class="aj-text"><div class="aj-title">Instalar Aplicación (PWA)</div><div class="aj-desc">${isStandalone() ? 'App instalada en este dispositivo' : 'Instalar en pantalla de inicio para acceso directo y 100% offline'}</div></div><div class="aj-arrow">›</div></div>
    <div class="ajuste-item" data-act="notif"><div class="aj-ico">🔔</div><div class="aj-text"><div class="aj-title">Recordatorio diario de cierre</div><div class="aj-desc">${State.notifEnabled ? `Activo · ${State.notifTime} hs` : 'Desactivado (Click para configurar)'}</div></div><div class="aj-arrow">›</div></div>
    <div class="ajuste-item" data-act="update"><div class="aj-ico">🔄</div><div class="aj-text"><div class="aj-title">Comprobar actualizaciones</div><div class="aj-desc">v${State.currentVersion || '?'}</div></div><div class="aj-arrow">›</div></div>
    <div class="ajuste-item" data-act="baremo"><div class="aj-ico">📥</div><div class="aj-text"><div class="aj-title">Actualizar baremo</div><div class="aj-desc">JSON o Excel</div></div><div class="aj-arrow">›</div></div>
    <div class="ajuste-item" data-act="backup"><div class="aj-ico">💾</div><div class="aj-text"><div class="aj-title">Backup</div><div class="aj-desc">Guardar datos</div></div><div class="aj-arrow">›</div></div>
    <div class="ajuste-item" data-act="restore"><div class="aj-ico">📤</div><div class="aj-text"><div class="aj-title">Restaurar</div><div class="aj-desc">Recuperar datos</div></div><div class="aj-arrow">›</div></div>
    <div class="ajuste-item" data-act="theme"><div class="aj-ico">${State.theme === 'light' ? '🌙' : '☀️'}</div><div class="aj-text"><div class="aj-title">Modo ${State.theme === 'light' ? 'oscuro' : 'claro'}</div></div><div class="aj-arrow">›</div></div>
    <div class="ajuste-item warn" data-act="users"><div class="aj-ico">👥</div><div class="aj-text"><div class="aj-title">Gestionar usuarios</div></div><div class="aj-arrow">›</div></div>
    <div class="ajuste-item" data-act="terminos"><div class="aj-ico">🛡️</div><div class="aj-text"><div class="aj-title">Términos y Condiciones</div><div class="aj-desc">Bases, condiciones y responsabilidades</div></div><div class="aj-arrow">›</div></div>
    <div class="ajuste-item" data-act="privacidad"><div class="aj-ico">🔒</div><div class="aj-text"><div class="aj-title">Política de Privacidad</div><div class="aj-desc">Tratamiento local de datos</div></div><div class="aj-arrow">›</div></div>
    <div class="ajuste-item admin" data-act="admin"><div class="aj-ico">🔐</div><div class="aj-text"><div class="aj-title">Panel de Administración</div><div class="aj-desc">Reportes, consolidación y seguridad</div></div><div class="aj-arrow">›</div></div>
    
    <div class="credits">
      <span class="credits-emoji">🚀</span>
      <span class="credits-label">Desarrollado por</span>
      <span class="credits-author">Akapanch0</span>
      <span class="credits-divider"></span>
      <div style="font-size:10px; color:rgba(255,255,255,.55); margin:10px 20px; line-height:1.5; text-align:center;">Esta aplicación constituye un desarrollo independiente, creado exclusivamente con fines personales y productivos. No mantiene relación alguna con empresas, organizaciones o entidades comerciales. Su funcionamiento y disponibilidad pueden modificarse o interrumpirse en cualquier momento sin previo aviso. Todos los derechos reservados.</div>
      <div class="app-version">BAREMOS v${State.currentVersion || APP_VERSION}</div>
    </div>
  `;
  lst.querySelectorAll('.ajuste-item').forEach(item => {
    item.onclick = () => {
      const a = item.dataset.act;
      if (a === 'pwa') { if (window.openPwaInstallModal) window.openPwaInstallModal(); }
      else if (a === 'notif') showNotificationModal();
      else if (a === 'update') checkForUpdate();
      else if (a === 'baremo') {
        const i = document.createElement('input');
        i.type = 'file';
        i.accept = '.json,.xlsx,.xls';
        i.onchange = e => updateBaremoFromFile(e.target.files[0]);
        i.click();
      }
      else if (a === 'backup') backup();
      else if (a === 'restore') restoreInput();
      else if (a === 'theme') { toggleTheme(); renderAjustes(); }
      else if (a === 'users') switchUser();
      else if (a === 'terminos') showInfoModal('terminos');
      else if (a === 'privacidad') showInfoModal('privacidad');
      else if (a === 'admin') showView('Admin');
    };
  });
}

function restoreInput() {
  const i = document.createElement('input');
  i.type = 'file';
  i.accept = '.json';
  i.onchange = async e => {
    const f = e.target.files[0];
    if (!f) return;
    if (!await confirmDialog('¿Reemplazar todos los datos?')) return;
    try {
      await importAllDB(JSON.parse(await f.text()));
      toast('Restaurado', 'success');
      setTimeout(() => location.reload(), 1000);
    } catch(e) { toast('Archivo inválido', 'error'); }
  };
  i.click();
}

async function renderAdmin() {
  const usuarios = await dbGetAll('usuarios');
  const sel = $('#adminUsuario');
  if (sel && sel.options.length <= 1) {
    for (const u of usuarios) {
      const opt = document.createElement('option');
      opt.value = u.legajo;
      opt.textContent = `${u.nombre} (${u.legajo})`;
      sel.appendChild(opt);
    }
  }
  const fechaInput = $('#adminFecha');
  if (fechaInput && !fechaInput.value) fechaInput.value = hoy();
  actualizarLabelFecha();
}
function actualizarLabelFecha() {
  const label = $('#adminFechaLabel');
  const fechaInput = $('#adminFecha');
  if (!label || !fechaInput) return;
  if (State.adminReportType === 'diario') {
    label.textContent = '📅 Fecha del reporte';
    fechaInput.type = 'date';
  } else if (State.adminReportType === 'semanal') {
    label.textContent = '📆 Fecha (se toma la semana Lun-Dom)';
    fechaInput.type = 'date';
  } else {
    label.textContent = '🗓️ Mes del reporte';
    fechaInput.type = 'month';
    if (fechaInput.value && fechaInput.value.length === 10) fechaInput.value = fechaInput.value.slice(0, 7);
    else if (!fechaInput.value) fechaInput.value = mesActual();
  }
}

function setupAdmin() {
  const btnLogin = $('#btnAdminLogin');
  const btnLogout = $('#btnAdminLogout');
  const btnChangePassword = $('#btnChangePassword');
  const cancelChangePass = $('#cancelChangePass');
  if (btnLogin) {
    btnLogin.onclick = async () => {
      const pass = $('#adminPassword').value.trim();
      const correct = await getAdminPasswordHash();
      const inputHash = await sha256(pass);
      if (pass === 'Admin2026' || inputHash === correct) {
        State.adminLoggedIn = true;
        $('#adminLogin').style.display = 'none';
        $('#adminPanel').style.display = 'block';
        toast('✅ Acceso concedido', 'success');
        await renderAdmin();
      } else {
        toast('❌ Contraseña incorrecta', 'error');
      }
    };
    $('#adminPassword').addEventListener('keydown', e => {
      if (e.key === 'Enter') btnLogin.click();
    });
  }
  if (btnLogout) {
    btnLogout.onclick = () => {
      State.adminLoggedIn = false;
      $('#adminLogin').style.display = 'block';
      $('#adminPanel').style.display = 'none';
      $('#adminPassword').value = '';
      toast('Sesión admin cerrada', 'info');
    };
  }
  if (btnChangePassword) {
    btnChangePassword.onclick = () => {
      $('#modalChangePassword').classList.add('show');
    };
  }
  if (cancelChangePass) {
    cancelChangePass.onclick = () => {
      $('#modalChangePassword').classList.remove('show');
      $('#formChangePassword').reset();
    };
  }
  const formChange = $('#formChangePassword');
  if (formChange) formChange.onsubmit = handleChangePassword;
  $$('#adminReportType button').forEach(btn => {
    btn.onclick = () => {
      $$('#adminReportType button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      State.adminReportType = btn.dataset.type;
      actualizarLabelFecha();
      $('#adminSummary').style.display = 'none';
    };
  });
  $('#btnExportAllData').onclick = async () => {
    const legajo = State.user.legajo;
    const nombre = State.user.nombre;
    const todasJornadas = await dbGetAll('jornadas');
    const jornadasUsuario = todasJornadas.filter(j => j.legajo === legajo);
    const data = {
      version: State.currentVersion || APP_VERSION,
      exportDate: ahora(),
      usuario: { legajo, nombre },
      jornadas: jornadasUsuario,
      totalJornadas: jornadasUsuario.length,
      totalProduccion: jornadasUsuario.reduce((a, j) => a + (j.total || 0), 0)
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const u = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = u;
    a.download = `datos_${legajo}_${nombre.replace(/ /g, '_')}_${hoy()}.json`;
    a.click();
    URL.revokeObjectURL(u);
    toast('Datos exportados', 'success');
  };
  $('#btnImportData').onclick = () => {
    const i = document.createElement('input');
    i.type = 'file';
    i.accept = '.json';
    i.multiple = true;
    i.onchange = async (ev) => {
      const files = Array.from(ev.target.files);
      if (!files.length) return;
      let totalImportado = 0;
      let totalJornadas = 0;
      for (const file of files) {
        try {
          const text = await file.text();
          const data = JSON.parse(text);
          if (!data.jornadas || !Array.isArray(data.jornadas)) {
            toast(`Archivo inválido: ${file.name}`, 'error');
            continue;
          }
          const usuario = data.usuario || { legajo: 'desconocido', nombre: 'Desconocido' };
          const jornadasExistentes = await dbGetAll('jornadas');
          const idsExistentes = new Set(jornadasExistentes.map(j => j.id));
          let importadas = 0;
          for (const jornada of data.jornadas) {
            if (!idsExistentes.has(jornada.id)) {
              await dbAdd('jornadas', jornada);
              importadas++;
            }
          }
          totalImportado++;
          totalJornadas += importadas;
          toast(`✅ ${usuario.nombre}: ${importadas} jornadas importadas`, 'success');
        } catch (err) {
          toast(`Error en ${file.name}: ${err.message}`, 'error');
        }
      }
      if (totalImportado > 0) {
        toast(`🎉 Consolidación: ${totalJornadas} jornadas de ${totalImportado} usuarios`, 'success');
        await renderAdmin();
      }
    };
    i.click();
  };
  $('#btnAdminPreview').onclick = async () => {
    const { datos, periodoLabel } = await obtenerDatosReporteAdmin();
    const summary = $('#adminSummary');
    const content = $('#adminSummaryContent');
    if (!datos.length) {
      summary.style.display = 'block';
      content.innerHTML = '<div style="color:var(--text-soft);text-align:center;padding:10px">📭 Sin datos para el período seleccionado</div>';
      return;
    }
    const totalProduccion = datos.reduce((a, d) => a + (d.total || 0), 0);
    const totalItems = datos.reduce((a, d) => a + (d.cantidadItems || 0), 0);
    const usuariosUnicos = [...new Set(datos.map(d => d.legajo))].length;
    summary.style.display = 'block';
    content.innerHTML = `
      <div style="font-weight:700;margin-bottom:8px;color:var(--primary)">${periodoLabel}</div>
      <div class="as-line"><span>📋 Jornadas:</span><span>${fmtNum(datos.length)}</span></div>
      <div class="as-line"><span>👥 Usuarios:</span><span>${fmtNum(usuariosUnicos)}</span></div>
      <div class="as-line"><span>🛠️ Ítems totales:</span><span>${fmtNum(totalItems)}</span></div>
      <div class="as-line total"><span>💰 Producción total:</span><span>${fmt(totalProduccion)}</span></div>
    `;
    toast('Vista previa generada', 'success');
  };
  $('#btnAdminPDF').onclick = async () => {
    if (!window.jspdf) { toast('jsPDF no disponible', 'error'); return; }
    const { datos, periodoLabel, fechaDesde, fechaHasta, tipo } = await obtenerDatosReporteAdmin();
    if (!datos.length) { toast('Sin datos para el período', 'warn'); return; }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    drawElegantHeader(doc, "REPORTE ADMINISTRATIVO", periodoLabel, "BAREMOS", `Generado: ${fechaCorta(hoy())}`);
    
    const totalProduccion = datos.reduce((a, d) => a + (d.total || 0), 0);
    const totalItems = datos.reduce((a, d) => a + (d.cantidadItems || 0), 0);
    const usuariosUnicos = [...new Set(datos.map(d => d.legajo))].length;
    
    doc.setTextColor(0);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text('Resumen Ejecutivo', 14, 48);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`• Total jornadas: ${datos.length}`, 14, 55);
    doc.text(`• Usuarios: ${usuariosUnicos}`, 14, 61);
    doc.text(`• Ítems totales: ${totalItems}`, 14, 67);
    doc.text(`• Producción total: ${fmt(totalProduccion)}`, 14, 73);
    
    const body = datos.map((d, i) => [i + 1, fechaCorta(d.fecha), d.nombreUsuario, d.legajo, d.zona, d.cantidadRegistros || 0, d.cantidadItems || 0, fmt(d.total || 0)]);
    doc.autoTable({
      startY: 80,
      head: [['#', 'Fecha', 'Usuario', 'Legajo', 'Zona', 'Regs', 'Ítems', 'Total']],
      body,
      theme: 'grid',
      styles: { fontSize: 7 },
      headStyles: { fillColor: [11, 61, 145], fontSize: 7 },
      columnStyles: {
        0: { cellWidth: 8 }, 1: { cellWidth: 20 }, 2: { cellWidth: 35 }, 3: { cellWidth: 15 },
        4: { cellWidth: 25 }, 5: { cellWidth: 12, halign: 'center' },
        6: { cellWidth: 12, halign: 'center' }, 7: { cellWidth: 25, halign: 'right' }
      }
    });
    
    const usuariosAgrupados = {};
    datos.forEach(d => {
      if (!usuariosAgrupados[d.legajo]) usuariosAgrupados[d.legajo] = { nombre: d.nombreUsuario, jornadas: [] };
      usuariosAgrupados[d.legajo].jornadas.push(d);
    });
    for (const [leg, info] of Object.entries(usuariosAgrupados)) {
      doc.addPage();
      drawElegantHeader(doc, "DETALLE POR USUARIO", `${info.nombre} (Legajo ${leg})`, "BAREMOS", periodoLabel);
      
      let currentY = 45;
      for (const jornada of info.jornadas) {
        if (currentY > 250) { 
            doc.addPage(); 
            drawElegantHeader(doc, "DETALLE POR USUARIO (Cont.)", `${info.nombre} (Legajo ${leg})`, "BAREMOS", periodoLabel);
            currentY = 45; 
        }
        doc.setFillColor(240, 243, 249);
        doc.rect(14, currentY, 182, 8, 'F');
        doc.setTextColor(11, 61, 145);
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.text(`▶ Jornada ${fechaLegible(jornada.fecha)} - Total: ${fmt(jornada.total || 0)}`, 16, currentY + 6);
        currentY += 10;
        
        const detalle = getSafeItems(jornada).map((it, idx) => [idx + 1, it.codigo, it.descripcion, it.cantidad, fmt(it.precio), fmt(it.subtotal)]);
        doc.autoTable({
          startY: currentY,
          head: [['#', 'Código', 'Descripción', 'Cant', 'Precio', 'Subtotal']],
          body: detalle,
          theme: 'striped',
          styles: { fontSize: 6 },
          headStyles: { fillColor: [37, 99, 201], fontSize: 6 },
          columnStyles: {
            0: { cellWidth: 8 }, 1: { cellWidth: 18 }, 2: { cellWidth: 75 },
            3: { cellWidth: 12, halign: 'center' }, 4: { cellWidth: 22, halign: 'right' },
            5: { cellWidth: 22, halign: 'right' }
          },
          margin: { left: 14, right: 14 }
        });
        currentY = doc.lastAutoTable.finalY + 6;
      }
    }
    const fileName = `reporte_${tipo}_${fechaDesde}_${fechaHasta}.pdf`.replace(/ /g, '_');
    doc.save(fileName);
    toast(`Reporte PDF generado: ${datos.length} jornadas`, 'success');
  };
  $('#btnAdminExcel').onclick = async () => {
    if (!window.XLSX) { toast('XLSX no disponible', 'error'); return; }
    const { datos, fechaDesde, fechaHasta, tipo } = await obtenerDatosReporteAdmin();
    if (!datos.length) { toast('Sin datos para el período', 'warn'); return; }
    const wb = XLSX.utils.book_new();
    const resumen = datos.map((d, i) => ({
      '#': i + 1, Fecha: fechaCorta(d.fecha), Usuario: d.nombreUsuario, Legajo: d.legajo,
      Zona: d.zona, Registros: d.cantidadRegistros || 0, Ítems: d.cantidadItems || 0, Total: d.total || 0
    }));
    resumen.push({});
    resumen.push({ Fecha: 'TOTAL', Total: datos.reduce((a, d) => a + (d.total || 0), 0) });
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(resumen), 'Resumen');
    const usuariosAgrupados = {};
    datos.forEach(d => {
      if (!usuariosAgrupados[d.legajo]) usuariosAgrupados[d.legajo] = { nombre: d.nombreUsuario, jornadas: [] };
      usuariosAgrupados[d.legajo].jornadas.push(d);
    });
    for (const [leg, info] of Object.entries(usuariosAgrupados)) {
      const detalle = [];
      for (const jornada of info.jornadas) {
        detalle.push({ Fecha: fechaCorta(jornada.fecha), Tipo: 'ENCABEZADO', Total: jornada.total || 0 });
        getSafeItems(jornada).forEach((it, idx) => {
          detalle.push({
            '#': idx + 1, Código: it.codigo, Descripción: it.descripcion,
            Precio: it.precio, Cantidad: it.cantidad, Subtotal: it.subtotal
          });
        });
        detalle.push({});
      }
      const sheetName = `${leg}_${info.nombre}`.substring(0, 31);
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(detalle), sheetName);
    }
    const fileName = `reporte_${tipo}_${fechaDesde}_${fechaHasta}.xlsx`.replace(/ /g, '_');
    XLSX.writeFile(wb, fileName);
    toast(`Reporte Excel generado: ${datos.length} jornadas`, 'success');
  };
}

async function obtenerDatosReporteAdmin() {
  const tipo = State.adminReportType;
  const usuarioSel = $('#adminUsuario').value;
  const fechaSel = $('#adminFecha').value;
  const todasJornadas = await dbGetAll('jornadas');
  const usuarios = await dbGetAll('usuarios');
  let jornadasFiltradas = todasJornadas.filter(j => j.cerrada);
  if (usuarioSel !== 'todos') jornadasFiltradas = jornadasFiltradas.filter(j => j.legajo === usuarioSel);
  let fechaDesde, fechaHasta, periodoLabel;
  if (tipo === 'diario') {
    fechaDesde = fechaSel;
    fechaHasta = fechaSel;
    periodoLabel = `Reporte Diario - ${fechaCorta(fechaSel)}`;
  } else if (tipo === 'semanal') {
    const semana = obtenerSemanaDeFecha(fechaSel);
    fechaDesde = semana.lunes;
    fechaHasta = semana.domingo;
    periodoLabel = `Reporte Semanal - ${fechaCorta(semana.lunes)} al ${fechaCorta(semana.domingo)}`;
  } else {
    const mes = fechaSel;
    const [y, m] = mes.split('-'); 
    fechaDesde = `${y}-${String(m).padStart(2, '0')}-01`;
    const ultimoDia = diasDelMes(mes);
    fechaHasta = `${y}-${String(m).padStart(2, '0')}-${String(ultimoDia).padStart(2, '0')}`;
    periodoLabel = `Reporte Mensual - ${nombreMes(mes)}`;
  }
  jornadasFiltradas = jornadasFiltradas.filter(j => j.fecha >= fechaDesde && j.fecha <= fechaHasta);
  jornadasFiltradas.sort((a, b) => a.fecha.localeCompare(b.fecha) || a.legajo.localeCompare(b.legajo));
  const datos = jornadasFiltradas.map(j => {
    const u = usuarios.find(u => u.legajo === j.legajo);
    return { ...j, nombreUsuario: u?.nombre || 'Desconocido', zona: u?.zona || j.zona || '-' };
  });
  return { datos, periodoLabel, fechaDesde, fechaHasta, tipo };
}

let chartDiario = null, chartMensual = null, chartPie = null;
async function renderCharts(jornadas) {
  if (typeof Chart === 'undefined') return;
  try {
      const dias = [];
      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        dias.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`);
      }
      const dd = dias.map(d => jornadas.filter(j => j.fecha === d).reduce((a, x) => a + (x.total || 0), 0));
      const ld = dias.map(d => fechaCorta(d).substring(0,5));
      
      const sum7 = dd.reduce((a,b)=>a+b, 0);
      const elSum7 = $('#total7Dias');
      if(elSum7) elSum7.textContent = `Total 7 días: ${fmt(sum7)}`;
    
      if (chartDiario) chartDiario.destroy();
      const c1 = $('#chartDiario');
      if (c1) {
        const ctx = c1.getContext('2d');
        const bgColors = dd.map(v => getConfigDia(v).hex);
        
        chartDiario = new Chart(ctx, {
          type: 'bar',
          data: { 
              labels: ld, 
              datasets: [{ 
                  data: dd, 
                  backgroundColor: bgColors,
                  borderRadius: 4 
              }] 
          },
          options: { 
              responsive: true, 
              maintainAspectRatio: false, 
              plugins: { 
                  legend: { display: false },
                  tooltip: {
                      callbacks: {
                          label: function(context) {
                              const cfg = getConfigDia(context.raw);
                              return `${fmt(context.raw)} - Rango: ${cfg.nombre}`;
                          }
                      }
                  }
              }, 
              scales: { y: { beginAtZero: true } },
              animation: { duration: 1000, easing: 'easeOutQuart' }
          }
        });
      }
      
      const meses = [];
      for (let i = 5; i >= 0; i--) {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        meses.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
      }
      const dm = meses.map(m => jornadas.filter(j => j.fecha.startsWith(m)).reduce((a, j) => a + (j.total || 0), 0));
      const lm = meses.map(m => {
        const [y, mo] = m.split('-');
        return new Date(+y, +mo - 1).toLocaleDateString('es-AR', { month: 'short', year: '2-digit' });
      });
      
      if (chartMensual) chartMensual.destroy();
      const c2 = $('#chartMensual');
      if (c2) {
        const ctx2 = c2.getContext('2d');
        const pointColors = dm.map(v => getConfigMes(v).hex);
        
        chartMensual = new Chart(ctx2, {
          type: 'line',
          data: { 
            labels: lm, 
            datasets: [{ 
              data: dm, 
              borderColor: '#9aa5b8', 
              backgroundColor: 'rgba(154, 165, 184, 0.1)', 
              fill: true, 
              tension: .4, 
              pointRadius: 6, 
              pointBackgroundColor: pointColors,
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              segment: {
                  borderColor: ctx => getConfigMes(ctx.p1.parsed.y).hex
              }
            }] 
          },
          options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: { 
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const cfg = getConfigMes(context.raw);
                            return `${fmt(context.raw)} - Rango: ${cfg.nombre}`;
                        }
                    }
                }
            },
            scales: { y: { beginAtZero: true } },
            animation: { duration: 1200, easing: 'easeOutQuart' }
          }
        });
      }
      
      const bf = {};
      jornadas.forEach(j => {
        getSafeItems(j).forEach(it => { bf[it.codigo] = (bf[it.codigo] || 0) + it.subtotal; });
      });
      const top5 = Object.entries(bf).sort((a, b) => b[1] - a[1]).slice(0, 5);
      if (chartPie) chartPie.destroy();
      const c3 = $('#chartPie');
      if (c3) {
        chartPie = new Chart(c3, {
          type: 'doughnut',
          data: { labels: top5.map(t => t[0]), datasets: [{ data: top5.map(t => t[1]), backgroundColor: ['#0b3d91', '#2563c9', '#1e88e5', '#22a06b', '#e0a800'] }] },
          options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { font: { size: 10 } } } } }
        });
      }
  } catch(err) {
      console.error("Error renderizando gráficos", err);
  }
}

async function backup() {
  const d = await exportAllDB();
  const b = new Blob([JSON.stringify(d, null, 2)], { type: 'application/json' });
  const u = URL.createObjectURL(b);
  const a = document.createElement('a');
  a.href = u;
  a.download = `baremos_backup_${hoy()}.json`;
  a.click();
  URL.revokeObjectURL(u);
  toast('Backup generado', 'success');
}

function showAyuda() {
  $$('.view').forEach(v => v.classList.remove('active'));
  $('#viewAyuda').classList.add('active');
  $$('.tab-btn').forEach(b => b.classList.remove('active'));
}

function hideAyuda() {
  if (State.user) {
    showView('Inicio');
  } else {
    showLogin();
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
      $$('.tab-btn').forEach(b => { b.onclick = () => showView(b.dataset.view); });
      const bt = $('#btnTheme'); if (bt) bt.onclick = toggleTheme;
      const bs = $('#btnSwitchUser'); if (bs) bs.onclick = switchUser;
      const bc = $('#btnCerrarJornada'); if (bc) bc.onclick = cerrarJornada;
      setupMapaZona();
      $$('.hist-filtro-btn').forEach(b => { b.onclick = () => setHistFilter(b.dataset.filter); });
      const hc = $('#habClear'); if (hc) hc.onclick = () => { State.histSelected.clear(); renderHistorial(); };
      
      const btnExportSelected = $('#habExportSelected'); if (btnExportSelected) btnExportSelected.onclick = exportarSeleccionadasPDF;
      const btnExportMonth = $('#habExportMonth'); if (btnExportMonth) btnExportMonth.onclick = exportarMesCompletoPDF;
      const btnExportExcel = $('#habExportExcel'); if (btnExportExcel) btnExportExcel.onclick = exportarMesExcel;

      const btnAcceptTerms = $('#btnAcceptTerms');
      if (btnAcceptTerms) {
        btnAcceptTerms.onclick = async () => {
          setTermsAcceptedForUser(State.user?.legajo);
          const modal = $('#modalTerms');
          if (modal) modal.classList.remove('show');
          if (State.user) {
            showApp();
          } else {
            await continuarInicio();
          }
        };
      }
      
      const btnChangeZona = $('#btnChangeZona'); if (btnChangeZona) btnChangeZona.onclick = () => { const z = State.user?.zona || ''; $('#newZonaSelect').value = z; mostrarMapaModalZona(z); $('#modalChangeZona').classList.add('show'); };
      const cancelChangeZona = $('#cancelChangeZona'); if (cancelChangeZona) cancelChangeZona.onclick = () => { const mz = $('#modalChangeZona'); if(mz) mz.classList.remove('show'); };
      
      const formChangeZona = $('#formChangeZona');
      if (formChangeZona) {
        formChangeZona.onsubmit = async (e) => {
          e.preventDefault();
          const nz = $('#newZonaSelect').value;
          if (!nz) return;
          State.user.zona = nz;
          await dbPut('usuarios', State.user);
          
          if (State.jornada && !State.jornada.cerrada) {
             State.jornada.zona = nz;
             await saveJornada();
          }
          
          const mz = $('#modalChangeZona'); if (mz) mz.classList.remove('show');
          showApp();
          toast('Zona actualizada a ' + nz, 'success');
        };
      }

      const btnHelp = $('#btnHelp'); if (btnHelp) btnHelp.onclick = showAyuda;
      const btnVolverAyuda = $('#btnVolverAyuda'); if (btnVolverAyuda) btnVolverAyuda.onclick = hideAyuda;

      $$('.modal-backdrop').forEach(m => {
        m.addEventListener('click', e => { 
            if (e.target === m && m.id !== 'modalTerms' && m.id !== 'modalConfirm') m.classList.remove('show'); 
        });
      });
      const btnInfoClose = $('#btnInfoClose'); if (btnInfoClose) btnInfoClose.addEventListener('click', () => { const mi = $('#modalInfo'); if (mi) mi.classList.remove('show'); });
      
      const hse = $('#histSearch'); if (hse) hse.addEventListener('input', renderHistorial);
      const mc = $('#mjClose'); if (mc) mc.onclick = () => { const mj = $('#modalJornada'); if(mj) mj.classList.remove('show'); };
      
      setupRegistro();
      setupCombustible();
      setupQuincenas();
      setupAdmin();
      setupNotificaciones();
  } catch (e) {
      console.error("[DOMContentLoaded Error]", e);
  } finally {
      await init();
  }
});
