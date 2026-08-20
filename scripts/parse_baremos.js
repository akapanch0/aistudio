import fs from 'fs';

const raw = `O111302;Por verificacion completa T1 bajo tension de acometida y equipo de medicion en instalacion aereas. Por suministro.;7.625,00
O111303;Por verificacion completa T1 bajo tension de acometida y equipo de medicion en instalacion subterraneas. Por suministro.;3.726,00
O111304;Cambio de medidor monofasico (Tarea Asociada);2.930,00
O111305;Cambio de medidores trifasicos T1 y T2, en instalaciones aereas asociado a la verificacion de equipos de medicion u otra tarea. Por medidor;3.176,00
O111306;Cambio de la/s tapa/s existente por tapa y termomagnetica mono/trifasica en acometidas aereas;2.224,00
O111307;Verificacion ocular sin accion. Tarea asociada.;1.335,00
O111308;Confeccion de acta por fraude. Tarea asociada.;3.247,00
O111309;Retiro de conexiones clandestinas en habitaculo, en acometida o en linea, de clientes de cualquier tarifa. Tarea asociada.;1.391,00
O111310;Conexión monofasica con cable concentrico, sin cruce de calle, hasta bornera de medidor o proteccion. Tarea asociada. Incluye colocacion de herrajes de retension.;9.856,00
O111311;Conexión monofasica con cable concentrico, con cruce de calle, hasta bornera de medidor o proteccion.;11.570,00
O111312;Conexión trifasica con cable concentrico o LAPE, sin cruce de calle, hasta bornera de medidor o proteccion. Tarea asociada. Incluye colocacion de herrajes de retension.;19.307,00
O111313;Conexión trifasica con cable concentrico o LAPE, con cruce de calle, hasta bornera de medidor o proteccion. Tarea asociada. Incluye colocacion de herrajes de retension.;23.308,00
O111314;Retiro de acometida mono/trifasica sin cruce de calle, por suspension de suministros desde linea o caja de interconexion. Tarea asociada.;2.118,00
O111315;Retiro de acometida mono/trifasica con cruce de calle, por suspension de suministros desde linea o caja de interconexion. Tarea asociada.;3.653,00
O111316;Instalacion de medidor trifasico, DIME agrupados.;4.056,00
O111317;Instalacion de medidor monofasico, tapa y termomagnetica. DIME agrupados.;4.524,00
O111318;Retiro de medidor mono o trifasico. DIME agrupados.;2.984,00
O111319;Verificacion de funcionamiento y determinacion del error IN SITU de medidor mono o trifasico T1;3.610,00
O111320;Verificacion ocular con accion electricas en clientes T1. Tarea asociada.;2.256,00
O111321;Soldadura contrapa metalica en medidor o gabinete colectivo. Tarea asociada.;2.382,00
O111322;Instalacion de caja antihurto en caja de medidor monofasico existente.;3.176,00
O111812;Verif Medidor autoadministrado;10.134,00
O111813;Verif.Med.auto adm.c/Cbio medidor;9.946,00
O111814;Verif. Medidor auto administr s/ascenso;2.245,00
O111832;Reclamo/Verificación MIDE SIN ASCENSO;4.119,00
O111830;MIDE piso: Conex UTD+Caja IP+Kit Caño;10.394,00
O111803;Verif. MIDE c/HIDRO Incl Cambio UM/UTD;10.133,00
O111810;Instalación de medidor Bicuerpo comunicado PLC;7.716,00
O111811;Conexión sobre poste UM ADICIONAL;4.699,00
O111830;MIDE piso: Conex UTD+Caja IP+Kit Caño;10.394,00
O111831;Gest.contratación medidores auto-admin;4.119,00
O111820;Multimed: Montaj Caja + Conexión de UM´s;49.132,00
O111822;Multimed: Instal Concentrador MIDE;27.962,38
O111823;Multimed: Instal Adic h/5 UM Post montaj;8.975,00
O111824;Multimed: Tendido Agrupado d Concéntrico;170,00
O111801;Instal / Reloc Caja al vuelo y UM-MIDE;8.641,00
O111802;Conexión al Vuelo de UM ADICIONAL;7.927,00
O111830;MIDE piso: Conex UTD+Caja IP+Kit Caño;10.394,00
O111831;Gest.contratación medidores auto-admin;4.119,00
M120801;Tendido de lape o concentrico 4 x 16 mm2;350,00
M120802;Tendido LAPE <= 3 x 95/50 mm2;514,00
N120804;Coloc.vaina autosold.en conector exist.;1.535,00
O220201;Susp.sumin.T1óT2 de bonera med. en Pcia;4.319,00
O220202;Susp.sum.T1óT2 d/toma/otro med. en Pcia;4.725,00
O220203;Susp.sumin. dde termomag. en Pcia;2.776,00
O220204;Susp.sumin.mono/trif.e/altura en Pcia;5.080,00
O220205;Retiro acomet. s/cruce p/susp. en Pcia;4.096,00
O220206;Retiro acomet. c/cruce p/susp.en Pcia;8.725,00
O220210;SUSP MEDIDOR C/HIDRO EN CAJA MULTIMED;7.717,00
O220401;Retiro med.T1óT2 p/corte servicio Pcia;4.121,00
O220402;Retiro acomet. sin cruce p/corte en Pcia;6.966,00
O220403;Retiro acomet. con cruce p/corte en Pcia;7.642,00
O220404;Ret. med. y acometida sin cruce en Pcia;9.499,00
O220405;Ret. med. y acometida con cruce en Pcia;10.269,00
O220410;RETIRO MEDIDOR C/HIDRO EN CAJA MULTIMED;7.667,00
O220601;Rehab.sumin.dde bonera med.monof en Pcia;6.501,00
O220602;Rehab.sumin.dde bonera med.trif en Pcia;8.072,00
O220603;Rehab.sumin.dde protec.termomag. en Pcia;4.633,00
O220604;Reinstalación medidor monofásico en Pcia;4.877,00
O220605;Reinstalación medidor trifásico en Pcia;5.880,00
O220607;Rehab.T1óT2 d/toma/otro med.trif en Pcia;6.682,00
O220608;Rehab sumin. Mono/trif en altura;7.382,00
O220609;Reinst.acometida monof.sin cruce en Pcia;12.133,00
O220610;Reinst.acometida trif.sin cruce en Pcia;10.553,00
O220611;Reinst.acometida monof.con cruce en Pcia;12.620,00
O220612;Reinst.acometida trif.con cruce en Pcia;11.167,00
O220613;Reinst.acom y med.monof. s/cruce en Pcia;14.405,00
O220614;Reinst.acom y med.trifas.s/cruce en Pcia;14.781,00
O220615;Reinst.acom y med.monof. c/cruce en Pcia;10.299,00
O220616;Reinst.acom y med.trifas.c/cruce en Pcia;15.520,00
O220620;REHAB MEDIDOR C/HIDRO EN CAJA MULTIMED;8.947,00
O220701;Retiro conexión clandestina;2.822,00
O220702;Verif.ocular susp,corte o rehab;2.634,00
O220703;Acción fallida;2.186,00
O220704;Cambio de medidor tarea asociada;1.490,00
O220705;Repos. O cambio tapa y termica asoc;2.321,00
O220706;Cbio/rep pipeta caño pilar (asoc DIME;3.200,00
M111201;Fundación hormigón en terreno normal;29.300,00
M120601;Inst.rienda sple con anclaje articulado;33.973,00
M120602;Inst.rienda sple con anclaje helicoidal;17.198,00
M120603;Instalación de tensor en vano abierto;20.067,00
M120604;Retiro rienda o tensor en vano abierto;4.599,00
M120701;Inst.herrajes term.o sostén e/pte exist.;3.133,00
O110301;Cbio tapa/s c/termomag.aérea,no asociado;5.056,00
O110302;Cambio tapa/s c/termomag.aérea,asociado;2.556,00
O111323;Fijac y sell de marco y Coloc mirilla;2.382,00
O111324;Colocación de mirilla;1.198,00
M120901;Ret.LABT.convenc.desmont.pequeños disp.;106,00
M120902;Ret.LABT.preensambl.desmont.pqños disp.;170,00
M121001;Inst.caja interconexión mono/trifasica;7.397,00
M121101;Instalación jabalina de p.a.t.en L.A.B.T;14.687,00
M121201;Coloc. manta termocontraible en LAPE;3.787,00
M121301;Traspaso acometida por cbio conduc. LABT;778,00
M420103;Conex.monof.c/c.conc.dde linea sin cruce;7.292,00
M420104;Conex.monof.c/c.conc.dde linea con cruce;9.731,00
M420107;Conexión trifásica desde línea sin cruce;12.774,00
M420108;Conexión trifásica desde línea con cruce;16.124,00
M420302;Instalación pilar (madera) carenciado con 1 caja. Por pilar.;15.916,00
M420303;Retiro de pilar carenciado.;6.845,00
M420304;Instalación de caja para medidor (monofásico o trifásico), adicional en pilar existente (posición izquierda o derecha) o montada sobre pared. Por 2.243,00;2.243,00
M420305;Col.caño adicional en pilar exist/pared;3.694,00
M420401;Retiro y reinst.artefacto alumb.público;11.817,00
M420402;Provisión/colocación fotocélula para AP;5.502,00
N121103;Aplomado de pilar carenciado existente;8.732,00
N410301;PODA PUNTUAL EQUILIBRADA 1 a 2 árboles;6.428,00
N221601;Reparación de avería conex.cliente;2.458,00
N221602;Reparación de averia red BT;20.032,00
N221605;Reclamo fallido/reposición termomag.;5.803,00
N221901;Cierre/apertura de red en buzón;2.437,00
N221902;Cierre/apertura de red en caja esquinera;3.494,00
N222104;Cbio tapa c/termomag. subterr, asociado;707,00
N310601;Cbio conexionado completo MT en plataf.;88.259,00
N121401;Reparación de avería en red aérea BT;17.765,00
N121402;Repar.de avería en cruce,acomet.o medic.;10.021,00
N121403;Reposición termomagnética, única tarea.;5.566,00
N121404;Reposic.del servicio c/ramal provisorio;4.026,00
N121405;Rep.fallida instal. Edenor y clte normal;5.566,00
N121406;Rep.fallida problema interno cliente;5.225,00
N121412;Recl MIDE CON ASCENSO tareaaltura y piso;8.429,00
N121432;Recl MIDE SIN ASCENSO -tareas desde piso;4.870,00
N121801;Cbio medidor monofás.T1 aérea, asociado;8.357,00
N121804;Cbio tapa/s c/termomag. aérea, asociado;3.891,00
N121603;Cbio/rep pipeta caño pilar (tarea asoc);1.343,00
N120607;Cbio conex.monofás.c/c concent.s/cruce;7.558,00
N120608;Cbio conex.monofás.c/c concent.c/cruce;9.256,00
N120703;Reparación de conductores LABT convenc.;4.749,00
N120704;Reparación de conductor neutro de LAPE;13.890,00
N120705;Rep.conduc.cruce de calle LAPE o convenc;3.876,00
N120802;Desconexión,reconex.o retiro de puentes;3.761,00
N120803;Cambio uno ó más morsetos por conexión;4.517,00
N111103;Colocación de disuasivos de aves;1.375,00
N110202;Ejecución empalmes rectos d/conduct.LAMT;56.995,00
M110201;Poste simple H°A° L.Vertical o Compacta;59.014,00
M111104;Retiro poste simpe de madera de LAMT;8.264,00
M120201;Instalación completa poste simple sosten, terminal, amarre (simple o doble, con o sin desvio/derivación), de madera, de hasta 9 metros de altura.;18.448,00
M120202;Instalación completa poste simple sosten, terminal, amarre (simple o doble, con o sin desvio/derivación), de madera, de 11 metros de altura. La p;31.918,00
M120301;Instalación completa poste simple terminal de madera, de hasta 9 metros de altura, con contraposte. Incluye provisión y tratamiento de durmientes;76.779,00
M120302;Inst.poste madera c/contraposte de 11m;95.833,00
M120305;Inst.poste simple H° hasta 9 m c/fund.;102.040,00
M120401;Transf.pte sple e/term.<=9 m c/ctrpte;40.923,00
M120501;Retiro poste o contraposte madera h/11m;6.765,00
M120502;Ret.poste doble o poste c/ctrposte h/11m;12.985,00
M120503;Retiro poste hormigon s/fundación h/9m;27.307,00
N120101;Cambio poste simple sostén madera h/9m;24.416,00
N120102;Cambio poste simple sostén madera 11m;28.153,00
N120104;Cbio pte sple term/amarre madera h/9m;34.603,00
N120105;Cbio poste simple term/amarre madera 11m;37.174,00
N120201;Cbio poste y contraposte d/madera h/9m;92.708,00
N120202;Cbio poste y contraposte de madera 11m;67.924,00
N120203;Cambio postes dobles de madera h/9m;92.858,00
N120204;Cambio postes dobles de madera 11m;94.396,00
N120205;Cambio contraposte en línea de h/9m;39.358,00
N120206;Cambio contraposte en línea de 11m;46.330,00
N120207;Sunchado poste c/prov/coloc.pte tutor;10.350,00
N120302;Retensado de rienda existente;3.962,00
N120403;Cambio de cruceta simple sostén;3.962,00
N120501;Cambio de conductores LAPE;905,00
N120605;Cbio conex.monof.conv.x concent.s/cruce;9.728,00
N120606;Cbio conex.monof.conv.x concent c/cruce;12.976,00
N120702;Tensado de LABT preensamblada existente;243,00
N121101;Aplomado poste simple de madera exist.;10.810,00
N121102;Aplomado poste doble de madera exist.;18.247,00
N121104;Aplomado de columna H°A° en LABT;6.788,00
N121203;Retiro conduc.cortados energiz.s/reparar;3.242,00
N121701;Cbio masivo poste sple de madera h/9m;24.416,00
N121702;Cambio poste simple sostén madera 11m;29.229,00`;

function parsePrecio(val) {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  let s = String(val).trim().replace(/\$/g, '').replace(/\s+/g, '');
  if (s.includes(',') && s.includes('.')) {
    s = s.replace(/\./g, '').replace(',', '.');
  } else if (s.includes(',')) {
    s = s.replace(',', '.');
  }
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

const map = new Map();
const lines = raw.split('\n').filter(l => l.trim().length > 0);

for (const line of lines) {
  const parts = line.split(';');
  if (parts.length >= 3) {
    const code = parts[0].trim();
    const desc = parts[1].trim();
    const precio = parsePrecio(parts[2].trim());
    if (code && !code.toLowerCase().startsWith('baremo')) {
      // In case of duplicates, latest or non-empty overrides
      map.set(code, { baremo: code, descripcion: desc, precio: precio });
    }
  }
}

const result = Array.from(map.values());
fs.writeFileSync('baremo.json', JSON.stringify(result, null, 2));
console.log('Processed', result.length, 'unique baremos.');
console.log('Sample:', result.slice(0, 5));
