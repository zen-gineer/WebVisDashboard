var showData = function (dataType){
    deleteTable()
    addTableData(dataType)
    //d3.select('#table')
};

var deleteTable = function(){
    d3.selectAll('thead').remove()
    d3.selectAll('tbody').remove()
}

var addTableData = function(dataType){
    var table = d3.select('.table')
    //.attr("style", "width: 33.33333333%")
    //.attr("style", "float: right")
    //.append('table');
    
    //.attr('class','col-xs-4');
    thead = table.append("thead"),
    columns = ['city names','geo', dataType]
    tbody = table.append("tbody")
    .attr('class', '.table-striped');

    thead.append("tr")
    .selectAll("th")
    .data(columns)
    .enter()
    .append("th")
    .text(function(column) { return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll("tr")
    .data(data)
    .enter()
    .append("tr");

    // create a cell in each row for each column
    var cells = rows.selectAll("td")
    .data(function(row) {
        return columns.map(function(column) {
            return {column: column, value: row[column]};
        });
    })
    .enter()
    .append("td")
    .attr("style", "font-family: Courier")
    .html(function(d) { return d.value; });
}
var data = [
    {
      "FIELD1": 0,
      "city names": "punta arenas",
      "cloudiness": 40,
      "geo": "[-70.37215069110121, -99.21239370784828]",
      "humidity": 100,
      "pressure": 997,
      "temp": 37.129999999999995,
      "windiness": 8
    },
    {
      "FIELD1": 1,
      "city names": "khatanga",
      "cloudiness": 64,
      "geo": "[74.90233209187335, 104.00984267501087]",
      "humidity": 100,
      "pressure": 1011,
      "temp": 33.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 2,
      "city names": "mizdah",
      "cloudiness": 92,
      "geo": "[30.72842411027986, 13.390053532225295]",
      "humidity": 41,
      "pressure": 969,
      "temp": 71.32999999999998,
      "windiness": 2
    },
    {
      "FIELD1": 3,
      "city names": "east london",
      "cloudiness": 24,
      "geo": "[-83.66547306132904, 56.28561594389757]",
      "humidity": 100,
      "pressure": 1023,
      "temp": 67.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 4,
      "city names": "yuxia",
      "cloudiness": 0,
      "geo": "[33.630854514249734, 108.64471602799591]",
      "humidity": 45,
      "pressure": 1025,
      "temp": 65.93,
      "windiness": 1
    },
    {
      "FIELD1": 5,
      "city names": "cherskiy",
      "cloudiness": 56,
      "geo": "[73.81297952053174, 158.5338024369039]",
      "humidity": 68,
      "pressure": 999,
      "temp": 42.52999999999997,
      "windiness": 1
    },
    {
      "FIELD1": 6,
      "city names": "nanortalik",
      "cloudiness": 44,
      "geo": "[58.71147022500463, -40.64629994733255]",
      "humidity": 98,
      "pressure": 1022,
      "temp": 33.52999999999997,
      "windiness": 0
    },
    {
      "FIELD1": 7,
      "city names": "aden",
      "cloudiness": 0,
      "geo": "[12.846715613729174, 46.626451066398886]",
      "humidity": 100,
      "pressure": 1024,
      "temp": 80.32999999999998,
      "windiness": 6
    },
    {
      "FIELD1": 8,
      "city names": "ushuaia",
      "cloudiness": 40,
      "geo": "[-72.83883168798236, -80.18163797573563]",
      "humidity": 80,
      "pressure": 992,
      "temp": 35.329999999999984,
      "windiness": 7
    },
    {
      "FIELD1": 9,
      "city names": "clyde river",
      "cloudiness": 90,
      "geo": "[70.79542495673749, -65.84627264820601]",
      "humidity": 92,
      "pressure": 1008,
      "temp": 24.529999999999973,
      "windiness": 5
    },
    {
      "FIELD1": 10,
      "city names": "baruun-urt",
      "cloudiness": 0,
      "geo": "[45.478221110964995, 114.05251408113674]",
      "humidity": 42,
      "pressure": 912,
      "temp": 56.93000000000001,
      "windiness": 3
    },
    {
      "FIELD1": 11,
      "city names": "hilo",
      "cloudiness": 90,
      "geo": "[11.446371848717348, -147.43017032425004]",
      "humidity": 62,
      "pressure": 1014,
      "temp": 74.93,
      "windiness": 2
    },
    {
      "FIELD1": 12,
      "city names": "busselton",
      "cloudiness": 12,
      "geo": "[-37.11567833572379, 115.04038961877234]",
      "humidity": 93,
      "pressure": 1034,
      "temp": 62.329999999999984,
      "windiness": 7
    },
    {
      "FIELD1": 13,
      "city names": "marystown",
      "cloudiness": 0,
      "geo": "[44.59309800845338, -54.53011048282322]",
      "humidity": 100,
      "pressure": 1030,
      "temp": 44.329999999999984,
      "windiness": 6
    },
    {
      "FIELD1": 14,
      "city names": "vaini",
      "cloudiness": 75,
      "geo": "[-69.69389610696896, -175.01334970742735]",
      "humidity": 57,
      "pressure": 1018,
      "temp": 76.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 15,
      "city names": "geraldton",
      "cloudiness": 0,
      "geo": "[-34.45045239162231, 89.29657874807964]",
      "humidity": 53,
      "pressure": 1017,
      "temp": 71.32999999999998,
      "windiness": 3
    },
    {
      "FIELD1": 16,
      "city names": "bluff",
      "cloudiness": 0,
      "geo": "[-85.13016004888915, 154.54716789579402]",
      "humidity": 100,
      "pressure": 1032,
      "temp": 47.93000000000001,
      "windiness": 6
    },
    {
      "FIELD1": 17,
      "city names": "luderitz",
      "cloudiness": 0,
      "geo": "[-26.837327369996544, 11.101733985530615]",
      "humidity": 75,
      "pressure": 1015,
      "temp": 56.93000000000001,
      "windiness": 9
    },
    {
      "FIELD1": 18,
      "city names": "rikitea",
      "cloudiness": 88,
      "geo": "[-30.08847949786029, -129.8501058620404]",
      "humidity": 100,
      "pressure": 1032,
      "temp": 69.53000000000003,
      "windiness": 5
    },
    {
      "FIELD1": 19,
      "city names": "hermanus",
      "cloudiness": 92,
      "geo": "[-81.1235972584418, -2.279531627783143]",
      "humidity": 96,
      "pressure": 996,
      "temp": 53.329999999999984,
      "windiness": 2
    },
    {
      "FIELD1": 20,
      "city names": "tasiilaq",
      "cloudiness": 0,
      "geo": "[84.62512309958097, -38.769788528178736]",
      "humidity": 100,
      "pressure": 1008,
      "temp": 31.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 21,
      "city names": "christchurch",
      "cloudiness": 68,
      "geo": "[-51.41984126438538, 179.06250015299457]",
      "humidity": 67,
      "pressure": 1016,
      "temp": 58.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 22,
      "city names": "kaihua",
      "cloudiness": 8,
      "geo": "[23.74137206757429, 104.47222922061462]",
      "humidity": 57,
      "pressure": 986,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 23,
      "city names": "alyangula",
      "cloudiness": 0,
      "geo": "[-17.08711408695376, 137.66634880431286]",
      "humidity": 82,
      "pressure": 1027,
      "temp": 82.12999999999994,
      "windiness": 8
    },
    {
      "FIELD1": 24,
      "city names": "ritchie",
      "cloudiness": 24,
      "geo": "[-29.680103640235686, 24.257169616254572]",
      "humidity": 32,
      "pressure": 1020,
      "temp": 65.93,
      "windiness": 4
    },
    {
      "FIELD1": 25,
      "city names": "te anau",
      "cloudiness": 92,
      "geo": "[-40.689559325856706, 161.93879697753215]",
      "humidity": 100,
      "pressure": 967,
      "temp": 42.52999999999997,
      "windiness": 1
    },
    {
      "FIELD1": 26,
      "city names": "provideniya",
      "cloudiness": 90,
      "geo": "[45.63258406291371, -175.03694707867163]",
      "humidity": 87,
      "pressure": 1000,
      "temp": 51.52999999999997,
      "windiness": 3
    },
    {
      "FIELD1": 27,
      "city names": "sydney",
      "cloudiness": 0,
      "geo": "[-33.47116845724754, 151.54682174998288]",
      "humidity": 37,
      "pressure": 1025,
      "temp": 73.12999999999994,
      "windiness": 7
    },
    {
      "FIELD1": 28,
      "city names": "atuona",
      "cloudiness": 0,
      "geo": "[-0.8647823700789132, -142.90947744812564]",
      "humidity": 100,
      "pressure": 1026,
      "temp": 78.53000000000003,
      "windiness": 5
    },
    {
      "FIELD1": 29,
      "city names": "port lincoln",
      "cloudiness": 36,
      "geo": "[-40.808608599224954, 134.3688776792821]",
      "humidity": 83,
      "pressure": 1025,
      "temp": 65.93,
      "windiness": 1
    },
    {
      "FIELD1": 30,
      "city names": "bredasdorp",
      "cloudiness": 36,
      "geo": "[-79.17425037394226, 22.476822606375293]",
      "humidity": 82,
      "pressure": 1020,
      "temp": 55.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 31,
      "city names": "acapulco",
      "cloudiness": 75,
      "geo": "[13.793405215438497, -101.11735976504197]",
      "humidity": 78,
      "pressure": 1010,
      "temp": 80.32999999999998,
      "windiness": 1
    },
    {
      "FIELD1": 32,
      "city names": "avarua",
      "cloudiness": 40,
      "geo": "[-28.364083369139898, -159.56465513452125]",
      "humidity": 53,
      "pressure": 1019,
      "temp": 73.12999999999994,
      "windiness": 4
    },
    {
      "FIELD1": 33,
      "city names": "port elizabeth",
      "cloudiness": 40,
      "geo": "[-50.112153599700456, 29.612370532085976]",
      "humidity": 87,
      "pressure": 1014,
      "temp": 60.53000000000003,
      "windiness": 8
    },
    {
      "FIELD1": 34,
      "city names": "port alfred",
      "cloudiness": 64,
      "geo": "[-53.09251617294944, 32.93568052985853]",
      "humidity": 100,
      "pressure": 1020,
      "temp": 62.329999999999984,
      "windiness": 5
    },
    {
      "FIELD1": 35,
      "city names": "nyrob",
      "cloudiness": 92,
      "geo": "[61.61290820939803, 56.47387600694728]",
      "humidity": 95,
      "pressure": 1002,
      "temp": 42.52999999999997,
      "windiness": 4
    },
    {
      "FIELD1": 36,
      "city names": "san cristobal",
      "cloudiness": 80,
      "geo": "[0.9068514667689129, -88.02091604830139]",
      "humidity": 99,
      "pressure": 860,
      "temp": 60.53000000000003,
      "windiness": 0
    },
    {
      "FIELD1": 37,
      "city names": "bitkine",
      "cloudiness": 32,
      "geo": "[12.389874586576326, 17.97478681235043]",
      "humidity": 80,
      "pressure": 974,
      "temp": 73.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 38,
      "city names": "torbay",
      "cloudiness": 40,
      "geo": "[45.06743500206312, -47.27842886124702]",
      "humidity": 100,
      "pressure": 1021,
      "temp": 46.129999999999995,
      "windiness": 5
    },
    {
      "FIELD1": 39,
      "city names": "tuktoyaktuk",
      "cloudiness": 75,
      "geo": "[84.38948562929272, -121.04030168860018]",
      "humidity": 86,
      "pressure": 1028,
      "temp": 28.129999999999995,
      "windiness": 3
    },
    {
      "FIELD1": 40,
      "city names": "bam",
      "cloudiness": 0,
      "geo": "[28.926299150949845, 58.324650493432955]",
      "humidity": 26,
      "pressure": 890,
      "temp": 53.329999999999984,
      "windiness": 2
    },
    {
      "FIELD1": 41,
      "city names": "hobart",
      "cloudiness": 40,
      "geo": "[-70.58327668538269, 143.596636105732]",
      "humidity": 55,
      "pressure": 1023,
      "temp": 62.329999999999984,
      "windiness": 4
    },
    {
      "FIELD1": 42,
      "city names": "puerto ayora",
      "cloudiness": 8,
      "geo": "[-22.272687274977713, -105.20512130514018]",
      "humidity": 100,
      "pressure": 1017,
      "temp": 69.53000000000003,
      "windiness": 5
    },
    {
      "FIELD1": 43,
      "city names": "georgetown",
      "cloudiness": 75,
      "geo": "[-7.83868513426215, -15.660384805879204]",
      "humidity": 78,
      "pressure": 1015,
      "temp": 74.93,
      "windiness": 6
    },
    {
      "FIELD1": 44,
      "city names": "leningradskiy",
      "cloudiness": 80,
      "geo": "[68.29586920600823, 176.65187899088767]",
      "humidity": 89,
      "pressure": 1008,
      "temp": 40.72999999999996,
      "windiness": 6
    },
    {
      "FIELD1": 45,
      "city names": "mar del plata",
      "cloudiness": 80,
      "geo": "[-56.53328009502499, -44.59517485317363]",
      "humidity": 52,
      "pressure": 997,
      "temp": 44.329999999999984,
      "windiness": 6
    },
    {
      "FIELD1": 46,
      "city names": "barrow",
      "cloudiness": 1,
      "geo": "[75.87793581115037, -152.25687149092568]",
      "humidity": 76,
      "pressure": 1019,
      "temp": 74.93,
      "windiness": 2
    },
    {
      "FIELD1": 47,
      "city names": "oussouye",
      "cloudiness": 0,
      "geo": "[11.246010703046679, -19.812936206236202]",
      "humidity": 100,
      "pressure": 1023,
      "temp": 80.32999999999998,
      "windiness": 3
    },
    {
      "FIELD1": 48,
      "city names": "arraial do cabo",
      "cloudiness": 92,
      "geo": "[-38.958959444711724, -29.63636278035878]",
      "humidity": 95,
      "pressure": 1027,
      "temp": 73.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 49,
      "city names": "souillac",
      "cloudiness": 75,
      "geo": "[-52.39040820354552, 73.0732491462397]",
      "humidity": 78,
      "pressure": 1020,
      "temp": 71.32999999999998,
      "windiness": 5
    },
    {
      "FIELD1": 50,
      "city names": "inhambane",
      "cloudiness": 0,
      "geo": "[-25.66190789841623, 37.41941672428953]",
      "humidity": 100,
      "pressure": 1027,
      "temp": 65.93,
      "windiness": 3
    },
    {
      "FIELD1": 51,
      "city names": "angoche",
      "cloudiness": 8,
      "geo": "[-18.971973479364706, 40.21035458491937]",
      "humidity": 100,
      "pressure": 1030,
      "temp": 74.93,
      "windiness": 2
    },
    {
      "FIELD1": 52,
      "city names": "severo-kurilsk",
      "cloudiness": 48,
      "geo": "[43.492449004787744, 160.48879282691757]",
      "humidity": 96,
      "pressure": 994,
      "temp": 46.129999999999995,
      "windiness": 7
    },
    {
      "FIELD1": 53,
      "city names": "nadym",
      "cloudiness": 0,
      "geo": "[65.39575431273863, 71.72195933919991]",
      "humidity": 85,
      "pressure": 1016,
      "temp": 24.529999999999973,
      "windiness": 1
    },
    {
      "FIELD1": 54,
      "city names": "kaeo",
      "cloudiness": 88,
      "geo": "[-27.875047291030633, 175.51045408115255]",
      "humidity": 84,
      "pressure": 1023,
      "temp": 58.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 55,
      "city names": "kati",
      "cloudiness": 20,
      "geo": "[13.146654088208862, -8.16359655616526]",
      "humidity": 94,
      "pressure": 1013,
      "temp": 73.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 56,
      "city names": "chokurdakh",
      "cloudiness": 76,
      "geo": "[77.72170075042183, 143.05450502327386]",
      "humidity": 95,
      "pressure": 1002,
      "temp": 35.329999999999984,
      "windiness": 6
    },
    {
      "FIELD1": 57,
      "city names": "yellowknife",
      "cloudiness": 40,
      "geo": "[71.6661523528364, -113.53550282980058]",
      "humidity": 63,
      "pressure": 1019,
      "temp": 29.930000000000007,
      "windiness": 4
    },
    {
      "FIELD1": 58,
      "city names": "katsuura",
      "cloudiness": 75,
      "geo": "[27.191111692950642, 148.45594724299912]",
      "humidity": 64,
      "pressure": 1016,
      "temp": 67.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 59,
      "city names": "salalah",
      "cloudiness": 0,
      "geo": "[12.682745688985023, 57.90965708751699]",
      "humidity": 78,
      "pressure": 1012,
      "temp": 71.32999999999998,
      "windiness": 2
    },
    {
      "FIELD1": 60,
      "city names": "kapaa",
      "cloudiness": 40,
      "geo": "[38.62144073192232, -162.18349581999843]",
      "humidity": 79,
      "pressure": 1014,
      "temp": 82.12999999999994,
      "windiness": 4
    },
    {
      "FIELD1": 61,
      "city names": "ponta do sol",
      "cloudiness": 75,
      "geo": "[34.90745552154061, -19.15125024470572]",
      "humidity": 73,
      "pressure": 1020,
      "temp": 71.32999999999998,
      "windiness": 6
    },
    {
      "FIELD1": 62,
      "city names": "kavaratti",
      "cloudiness": 48,
      "geo": "[8.092491832262652, 66.37858321880734]",
      "humidity": 100,
      "pressure": 1022,
      "temp": 80.32999999999998,
      "windiness": 0
    },
    {
      "FIELD1": 63,
      "city names": "barcelos",
      "cloudiness": 0,
      "geo": "[-1.2678486879928244, -61.36082913072897]",
      "humidity": 73,
      "pressure": 1016,
      "temp": 82.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 64,
      "city names": "namatanai",
      "cloudiness": 20,
      "geo": "[4.363010771350602, 157.12484753326783]",
      "humidity": 90,
      "pressure": 1015,
      "temp": 85.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 65,
      "city names": "cape town",
      "cloudiness": 40,
      "geo": "[-59.70578081645832, 2.1886672240189284]",
      "humidity": 82,
      "pressure": 1022,
      "temp": 55.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 66,
      "city names": "mahebourg",
      "cloudiness": 75,
      "geo": "[-54.969115972053245, 79.2033238292122]",
      "humidity": 78,
      "pressure": 1020,
      "temp": 71.32999999999998,
      "windiness": 5
    },
    {
      "FIELD1": 67,
      "city names": "wasilla",
      "cloudiness": 1,
      "geo": "[63.423413604944926, -151.25029773387774]",
      "humidity": 74,
      "pressure": 1017,
      "temp": 49.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 68,
      "city names": "rocha",
      "cloudiness": 0,
      "geo": "[-35.19904104128857, -53.28130854109857]",
      "humidity": 85,
      "pressure": 1015,
      "temp": 38.93000000000001,
      "windiness": 1
    },
    {
      "FIELD1": 69,
      "city names": "waiouru",
      "cloudiness": 32,
      "geo": "[-39.35600252808264, 175.4766778390749]",
      "humidity": 73,
      "pressure": 944,
      "temp": 49.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 70,
      "city names": "ribeira grande",
      "cloudiness": 56,
      "geo": "[35.823031772145185, -37.621022913540685]",
      "humidity": 95,
      "pressure": 1030,
      "temp": 73.12999999999994,
      "windiness": 8
    },
    {
      "FIELD1": 71,
      "city names": "butaritari",
      "cloudiness": 76,
      "geo": "[9.587598246475721, 165.7122028121251]",
      "humidity": 100,
      "pressure": 1021,
      "temp": 83.93,
      "windiness": 1
    },
    {
      "FIELD1": 72,
      "city names": "yeniseysk",
      "cloudiness": 76,
      "geo": "[59.04075482156429, 92.19692767971537]",
      "humidity": 70,
      "pressure": 1003,
      "temp": 42.52999999999997,
      "windiness": 4
    },
    {
      "FIELD1": 73,
      "city names": "ambilobe",
      "cloudiness": 0,
      "geo": "[-11.940413634493538, 49.978397523803125]",
      "humidity": 75,
      "pressure": 1006,
      "temp": 67.72999999999996,
      "windiness": 4
    },
    {
      "FIELD1": 74,
      "city names": "aviles",
      "cloudiness": 20,
      "geo": "[45.17933606138712, -6.292060349629111]",
      "humidity": 81,
      "pressure": 1028,
      "temp": 53.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 75,
      "city names": "santa fe",
      "cloudiness": 88,
      "geo": "[8.97240972517723, -81.20327439833181]",
      "humidity": 100,
      "pressure": 1015,
      "temp": 73.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 76,
      "city names": "ancud",
      "cloudiness": 68,
      "geo": "[-42.41100015420381, -94.8716447543588]",
      "humidity": 94,
      "pressure": 1025,
      "temp": 42.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 77,
      "city names": "dasoguz",
      "cloudiness": 0,
      "geo": "[39.84233056701132, 59.311964855862385]",
      "humidity": 67,
      "pressure": 1018,
      "temp": 60.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 78,
      "city names": "albany",
      "cloudiness": 48,
      "geo": "[-66.4974004848351, 119.03426401685402]",
      "humidity": 78,
      "pressure": 1024,
      "temp": 58.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 79,
      "city names": "kapit",
      "cloudiness": 32,
      "geo": "[0.8700298852961481, 114.68238493108089]",
      "humidity": 82,
      "pressure": 1000,
      "temp": 82.12999999999994,
      "windiness": 0
    },
    {
      "FIELD1": 80,
      "city names": "oistins",
      "cloudiness": 40,
      "geo": "[12.762757770218613, -58.762848056505376]",
      "humidity": 78,
      "pressure": 1013,
      "temp": 80.32999999999998,
      "windiness": 5
    },
    {
      "FIELD1": 81,
      "city names": "kissidougou",
      "cloudiness": 88,
      "geo": "[9.299896930431714, -10.277664316691784]",
      "humidity": 99,
      "pressure": 962,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 82,
      "city names": "ulladulla",
      "cloudiness": 0,
      "geo": "[-39.860303857539506, 156.02465843504217]",
      "humidity": 49,
      "pressure": 1025,
      "temp": 71.32999999999998,
      "windiness": 3
    },
    {
      "FIELD1": 83,
      "city names": "padang",
      "cloudiness": 92,
      "geo": "[-9.771944125802762, 87.32183423724297]",
      "humidity": 100,
      "pressure": 1019,
      "temp": 78.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 84,
      "city names": "chuy",
      "cloudiness": 0,
      "geo": "[-64.05708541267828, -24.379021718339374]",
      "humidity": 92,
      "pressure": 1030,
      "temp": 49.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 85,
      "city names": "ugoofaaru",
      "cloudiness": 88,
      "geo": "[5.887056621309441, 66.25302782006847]",
      "humidity": 100,
      "pressure": 1023,
      "temp": 80.32999999999998,
      "windiness": 9
    },
    {
      "FIELD1": 86,
      "city names": "batemans bay",
      "cloudiness": 88,
      "geo": "[-39.70589808192939, 154.07260529416152]",
      "humidity": 66,
      "pressure": 1014,
      "temp": 65.93,
      "windiness": 1
    },
    {
      "FIELD1": 87,
      "city names": "jamestown",
      "cloudiness": 92,
      "geo": "[-10.448640307083991, -1.1444678320978312]",
      "humidity": 100,
      "pressure": 1029,
      "temp": 65.93,
      "windiness": 8
    },
    {
      "FIELD1": 88,
      "city names": "nyurba",
      "cloudiness": 0,
      "geo": "[67.3426449977809, 118.19433105108658]",
      "humidity": 72,
      "pressure": 997,
      "temp": 42.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 89,
      "city names": "longyearbyen",
      "cloudiness": 75,
      "geo": "[80.50707314813104, 24.2324696763676]",
      "humidity": 68,
      "pressure": 1005,
      "temp": 29.930000000000007,
      "windiness": 3
    },
    {
      "FIELD1": 90,
      "city names": "borgarnes",
      "cloudiness": 90,
      "geo": "[64.54415925509164, -21.32241003787854]",
      "humidity": 75,
      "pressure": 1005,
      "temp": 40.72999999999996,
      "windiness": 15
    },
    {
      "FIELD1": 91,
      "city names": "qaanaaq",
      "cloudiness": 0,
      "geo": "[89.54363441741481, -70.06657305002018]",
      "humidity": 100,
      "pressure": 994,
      "temp": 15.529999999999973,
      "windiness": 6
    },
    {
      "FIELD1": 92,
      "city names": "fallon",
      "cloudiness": 1,
      "geo": "[38.78618925371569, -118.72119633771827]",
      "humidity": 71,
      "pressure": 1014,
      "temp": 51.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 93,
      "city names": "hithadhoo",
      "cloudiness": 88,
      "geo": "[-4.421148640526312, 77.21656117082506]",
      "humidity": 100,
      "pressure": 1024,
      "temp": 76.72999999999996,
      "windiness": 7
    },
    {
      "FIELD1": 94,
      "city names": "eureka",
      "cloudiness": 90,
      "geo": "[40.64385819116774, -140.16275373004527]",
      "humidity": 96,
      "pressure": 1009,
      "temp": 58.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 95,
      "city names": "basoko",
      "cloudiness": 68,
      "geo": "[1.1081060493720543, 23.895407936980348]",
      "humidity": 99,
      "pressure": 974,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 96,
      "city names": "carnarvon",
      "cloudiness": 0,
      "geo": "[-26.775842023097013, 113.84019216127234]",
      "humidity": 79,
      "pressure": 1027,
      "temp": 71.32999999999998,
      "windiness": 4
    },
    {
      "FIELD1": 97,
      "city names": "lalgudi",
      "cloudiness": 20,
      "geo": "[10.835717399525763, 78.82949142460626]",
      "humidity": 83,
      "pressure": 1010,
      "temp": 82.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 98,
      "city names": "pitelino",
      "cloudiness": 24,
      "geo": "[54.66690583559037, 41.63064261686216]",
      "humidity": 83,
      "pressure": 1018,
      "temp": 33.52999999999997,
      "windiness": 4
    },
    {
      "FIELD1": 99,
      "city names": "flin flon",
      "cloudiness": 8,
      "geo": "[58.152851230415735, -100.94465074375684]",
      "humidity": 100,
      "pressure": 992,
      "temp": 29.930000000000007,
      "windiness": 1
    },
    {
      "FIELD1": 100,
      "city names": "sabang",
      "cloudiness": 12,
      "geo": "[5.895153540506726, 91.66607018281104]",
      "humidity": 100,
      "pressure": 1016,
      "temp": 83.93,
      "windiness": 2
    },
    {
      "FIELD1": 101,
      "city names": "strezhevoy",
      "cloudiness": 0,
      "geo": "[62.369966921544886, 78.50511142499482]",
      "humidity": 97,
      "pressure": 1011,
      "temp": 33.52999999999997,
      "windiness": 3
    },
    {
      "FIELD1": 102,
      "city names": "havre",
      "cloudiness": 90,
      "geo": "[48.98582931054773, -110.34386332819307]",
      "humidity": 66,
      "pressure": 1011,
      "temp": 53.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 103,
      "city names": "atar",
      "cloudiness": 64,
      "geo": "[21.855331313706287, -14.803221683766111]",
      "humidity": 59,
      "pressure": 995,
      "temp": 74.93,
      "windiness": 1
    },
    {
      "FIELD1": 104,
      "city names": "russellville",
      "cloudiness": 1,
      "geo": "[35.32167302435404, -93.01759593775165]",
      "humidity": 96,
      "pressure": 1020,
      "temp": 71.32999999999998,
      "windiness": 0
    },
    {
      "FIELD1": 105,
      "city names": "constitucion",
      "cloudiness": 75,
      "geo": "[25.68830927958946, -113.26024683039107]",
      "humidity": 60,
      "pressure": 1024,
      "temp": 67.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 106,
      "city names": "inirida",
      "cloudiness": 8,
      "geo": "[3.924570151282893, -68.53434593192868]",
      "humidity": 88,
      "pressure": 1004,
      "temp": 76.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 107,
      "city names": "marsa matruh",
      "cloudiness": 20,
      "geo": "[28.907914336281976, 28.000754582670822]",
      "humidity": 73,
      "pressure": 1017,
      "temp": 73.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 108,
      "city names": "sillamae",
      "cloudiness": 92,
      "geo": "[59.189794388250505, 27.77009982259267]",
      "humidity": 100,
      "pressure": 1013,
      "temp": 47.93000000000001,
      "windiness": 3
    },
    {
      "FIELD1": 109,
      "city names": "new norfolk",
      "cloudiness": 40,
      "geo": "[-76.37620867300734, 129.87269902044693]",
      "humidity": 55,
      "pressure": 1023,
      "temp": 62.329999999999984,
      "windiness": 4
    },
    {
      "FIELD1": 110,
      "city names": "tiksi",
      "cloudiness": 64,
      "geo": "[79.48054594348375, 122.57549268501054]",
      "humidity": 100,
      "pressure": 995,
      "temp": 28.129999999999995,
      "windiness": 3
    },
    {
      "FIELD1": 111,
      "city names": "campoverde",
      "cloudiness": 75,
      "geo": "[-8.185237074169422, -75.1009281952811]",
      "humidity": 78,
      "pressure": 1010,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 112,
      "city names": "lavrentiya",
      "cloudiness": 92,
      "geo": "[78.23272564375947, -169.4513808012405]",
      "humidity": 93,
      "pressure": 1013,
      "temp": 44.329999999999984,
      "windiness": 7
    },
    {
      "FIELD1": 113,
      "city names": "klaksvik",
      "cloudiness": 76,
      "geo": "[65.55146253322002, -5.367545385928651]",
      "humidity": 93,
      "pressure": 997,
      "temp": 44.329999999999984,
      "windiness": 8
    },
    {
      "FIELD1": 114,
      "city names": "hammerfest",
      "cloudiness": 75,
      "geo": "[76.72929878033236, 22.014432083752354]",
      "humidity": 74,
      "pressure": 1004,
      "temp": 35.329999999999984,
      "windiness": 5
    },
    {
      "FIELD1": 115,
      "city names": "husavik",
      "cloudiness": 75,
      "geo": "[73.65473770082531, -14.365550588551486]",
      "humidity": 100,
      "pressure": 999,
      "temp": 31.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 116,
      "city names": "ilulissat",
      "cloudiness": 75,
      "geo": "[75.32670534908092, -49.66658461434716]",
      "humidity": 80,
      "pressure": 1018,
      "temp": 29.930000000000007,
      "windiness": 4
    },
    {
      "FIELD1": 117,
      "city names": "tongliao",
      "cloudiness": 0,
      "geo": "[43.43643373563623, 121.7037314982461]",
      "humidity": 63,
      "pressure": 1007,
      "temp": 62.329999999999984,
      "windiness": 4
    },
    {
      "FIELD1": 118,
      "city names": "tuyen quang",
      "cloudiness": 8,
      "geo": "[22.30311228756844, 105.12658622546996]",
      "humidity": 74,
      "pressure": 1008,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 119,
      "city names": "half moon bay",
      "cloudiness": 90,
      "geo": "[35.73849690089119, -126.73789860778268]",
      "humidity": 82,
      "pressure": 1009,
      "temp": 65.93,
      "windiness": 1
    },
    {
      "FIELD1": 120,
      "city names": "jalu",
      "cloudiness": 0,
      "geo": "[24.338969379798158, 20.392382543365954]",
      "humidity": 46,
      "pressure": 1019,
      "temp": 67.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 121,
      "city names": "vanavara",
      "cloudiness": 68,
      "geo": "[59.64959345407422, 103.7343394308424]",
      "humidity": 65,
      "pressure": 973,
      "temp": 44.329999999999984,
      "windiness": 2
    },
    {
      "FIELD1": 122,
      "city names": "artyshta",
      "cloudiness": 92,
      "geo": "[53.84480252181106, 86.35428969826557]",
      "humidity": 90,
      "pressure": 984,
      "temp": 44.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 123,
      "city names": "isangel",
      "cloudiness": 100,
      "geo": "[-22.713116342833487, 177.85860877852122]",
      "humidity": 100,
      "pressure": 1022,
      "temp": 71.32999999999998,
      "windiness": 4
    },
    {
      "FIELD1": 124,
      "city names": "sola",
      "cloudiness": 80,
      "geo": "[-13.2864357069152, 169.64316295616476]",
      "humidity": 100,
      "pressure": 1017,
      "temp": 78.53000000000003,
      "windiness": 4
    },
    {
      "FIELD1": 125,
      "city names": "faanui",
      "cloudiness": 64,
      "geo": "[-4.927955850070973, -159.89291849261897]",
      "humidity": 100,
      "pressure": 1027,
      "temp": 76.72999999999996,
      "windiness": 6
    },
    {
      "FIELD1": 126,
      "city names": "maningrida",
      "cloudiness": 0,
      "geo": "[-13.361989907136248, 134.16567085415682]",
      "humidity": 65,
      "pressure": 1026,
      "temp": 83.93,
      "windiness": 7
    },
    {
      "FIELD1": 127,
      "city names": "portland",
      "cloudiness": 0,
      "geo": "[-38.68203639772821, 140.96877632294104]",
      "humidity": 56,
      "pressure": 944,
      "temp": 65.93,
      "windiness": 1
    },
    {
      "FIELD1": 128,
      "city names": "fortuna",
      "cloudiness": 90,
      "geo": "[31.972584245742382, -139.34917367439598]",
      "humidity": 100,
      "pressure": 1010,
      "temp": 58.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 129,
      "city names": "kiknur",
      "cloudiness": 36,
      "geo": "[57.248918492777335, 47.48421805413233]",
      "humidity": 91,
      "pressure": 1016,
      "temp": 37.129999999999995,
      "windiness": 3
    },
    {
      "FIELD1": 130,
      "city names": "sao filipe",
      "cloudiness": 64,
      "geo": "[12.32888349201292, -27.889539115365636]",
      "humidity": 100,
      "pressure": 1014,
      "temp": 76.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 131,
      "city names": "kodiak",
      "cloudiness": 90,
      "geo": "[55.638868824521694, -151.36125083013525]",
      "humidity": 92,
      "pressure": 1019,
      "temp": 58.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 132,
      "city names": "bakel",
      "cloudiness": 24,
      "geo": "[14.122853074670473, -12.393234458347763]",
      "humidity": 79,
      "pressure": 1016,
      "temp": 76.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 133,
      "city names": "dingle",
      "cloudiness": 92,
      "geo": "[51.66824682686553, -20.66790055493348]",
      "humidity": 97,
      "pressure": 1033,
      "temp": 55.12999999999994,
      "windiness": 8
    },
    {
      "FIELD1": 134,
      "city names": "nelson bay",
      "cloudiness": 0,
      "geo": "[-37.269893742255434, 160.07717922658094]",
      "humidity": 53,
      "pressure": 1025,
      "temp": 71.32999999999998,
      "windiness": 5
    },
    {
      "FIELD1": 135,
      "city names": "banda aceh",
      "cloudiness": 76,
      "geo": "[2.5321107249833403, 89.9575596116822]",
      "humidity": 94,
      "pressure": 999,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 136,
      "city names": "road town",
      "cloudiness": 1,
      "geo": "[19.236180015299624, -64.76500568629803]",
      "humidity": 81,
      "pressure": 1014,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 137,
      "city names": "cadiz",
      "cloudiness": 0,
      "geo": "[35.7496476153393, -7.374504336645742]",
      "humidity": 100,
      "pressure": 1016,
      "temp": 67.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 138,
      "city names": "mazagao",
      "cloudiness": 40,
      "geo": "[0.20474055119011325, -51.48650568329367]",
      "humidity": 74,
      "pressure": 1012,
      "temp": 83.93,
      "windiness": 6
    },
    {
      "FIELD1": 139,
      "city names": "los llanos de aridane",
      "cloudiness": 12,
      "geo": "[29.922654008887463, -19.98709171162153]",
      "humidity": 78,
      "pressure": 1017,
      "temp": 71.32999999999998,
      "windiness": 3
    },
    {
      "FIELD1": 140,
      "city names": "sikar",
      "cloudiness": 8,
      "geo": "[27.504941442407485, 75.1339416066358]",
      "humidity": 56,
      "pressure": 978,
      "temp": 82.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 141,
      "city names": "sitka",
      "cloudiness": 0,
      "geo": "[51.9860318066095, -135.99572521964862]",
      "humidity": 51,
      "pressure": 956,
      "temp": 74.93,
      "windiness": 6
    },
    {
      "FIELD1": 142,
      "city names": "lao cai",
      "cloudiness": 80,
      "geo": "[22.508525478235498, 103.52101309667069]",
      "humidity": 74,
      "pressure": 907,
      "temp": 67.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 143,
      "city names": "la ronge",
      "cloudiness": 75,
      "geo": "[62.553023940077026, -106.1227317852796]",
      "humidity": 74,
      "pressure": 1017,
      "temp": 28.129999999999995,
      "windiness": 1
    },
    {
      "FIELD1": 144,
      "city names": "umm kaddadah",
      "cloudiness": 0,
      "geo": "[14.408608921620967, 28.22339867817027]",
      "humidity": 55,
      "pressure": 941,
      "temp": 73.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 145,
      "city names": "phangnga",
      "cloudiness": 40,
      "geo": "[8.924322583727275, 98.39073298653699]",
      "humidity": 74,
      "pressure": 1014,
      "temp": 83.93,
      "windiness": 4
    },
    {
      "FIELD1": 146,
      "city names": "lalibela",
      "cloudiness": 8,
      "geo": "[12.025125521876518, 39.00635604525144]",
      "humidity": 85,
      "pressure": 770,
      "temp": 37.129999999999995,
      "windiness": 0
    },
    {
      "FIELD1": 147,
      "city names": "pacific grove",
      "cloudiness": 1,
      "geo": "[30.71272265358361, -128.7001658448042]",
      "humidity": 56,
      "pressure": 1009,
      "temp": 62.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 148,
      "city names": "pombas",
      "cloudiness": 88,
      "geo": "[19.791134398232103, -23.446684692835106]",
      "humidity": 100,
      "pressure": 1024,
      "temp": 76.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 149,
      "city names": "cidreira",
      "cloudiness": 92,
      "geo": "[-48.34014377512792, -29.320942792939803]",
      "humidity": 100,
      "pressure": 1018,
      "temp": 62.329999999999984,
      "windiness": 6
    },
    {
      "FIELD1": 150,
      "city names": "amuntai",
      "cloudiness": 12,
      "geo": "[-1.4602064979494571, 115.4271147001088]",
      "humidity": 72,
      "pressure": 1018,
      "temp": 85.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 151,
      "city names": "bethel",
      "cloudiness": 90,
      "geo": "[43.27343367424112, -173.30836371002354]",
      "humidity": 82,
      "pressure": 1002,
      "temp": 49.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 152,
      "city names": "lebu",
      "cloudiness": 92,
      "geo": "[-37.65467651768661, -86.53306137812153]",
      "humidity": 100,
      "pressure": 1034,
      "temp": 49.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 153,
      "city names": "salinopolis",
      "cloudiness": 92,
      "geo": "[0.9906057207289649, -45.945613529480454]",
      "humidity": 96,
      "pressure": 1025,
      "temp": 80.32999999999998,
      "windiness": 7
    },
    {
      "FIELD1": 154,
      "city names": "sibolga",
      "cloudiness": 44,
      "geo": "[0.09955584356458758, 96.18807695279202]",
      "humidity": 91,
      "pressure": 944,
      "temp": 74.93,
      "windiness": 0
    },
    {
      "FIELD1": 155,
      "city names": "caetite",
      "cloudiness": 0,
      "geo": "[-14.078760168151945, -42.43316655093682]",
      "humidity": 58,
      "pressure": 933,
      "temp": 69.53000000000003,
      "windiness": 5
    },
    {
      "FIELD1": 156,
      "city names": "mana",
      "cloudiness": 8,
      "geo": "[7.13829555347273, -53.9215984785088]",
      "humidity": 79,
      "pressure": 1019,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 157,
      "city names": "kalmunai",
      "cloudiness": 88,
      "geo": "[7.113903715750155, 82.05556198973522]",
      "humidity": 97,
      "pressure": 1007,
      "temp": 76.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 158,
      "city names": "tahoua",
      "cloudiness": 0,
      "geo": "[15.299921408846274, 5.101094543566376]",
      "humidity": 90,
      "pressure": 973,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 159,
      "city names": "upernavik",
      "cloudiness": 92,
      "geo": "[74.97871831236739, -59.44277515048269]",
      "humidity": 97,
      "pressure": 1021,
      "temp": 35.329999999999984,
      "windiness": 14
    },
    {
      "FIELD1": 160,
      "city names": "karangampel",
      "cloudiness": 8,
      "geo": "[-6.3116091477803735, 108.59580699310254]",
      "humidity": 95,
      "pressure": 1018,
      "temp": 83.93,
      "windiness": 2
    },
    {
      "FIELD1": 161,
      "city names": "iqaluit",
      "cloudiness": 90,
      "geo": "[60.27237313281, -76.69259211451404]",
      "humidity": 74,
      "pressure": 1014,
      "temp": 28.129999999999995,
      "windiness": 1
    },
    {
      "FIELD1": 162,
      "city names": "pevek",
      "cloudiness": 92,
      "geo": "[67.68843280230942, 169.81856047445774]",
      "humidity": 95,
      "pressure": 1002,
      "temp": 42.52999999999997,
      "windiness": 0
    },
    {
      "FIELD1": 163,
      "city names": "calatayud",
      "cloudiness": 0,
      "geo": "[40.78829746115068, -1.9492839436927056]",
      "humidity": 70,
      "pressure": 1020,
      "temp": 55.12999999999994,
      "windiness": 4
    },
    {
      "FIELD1": 164,
      "city names": "grindavik",
      "cloudiness": 75,
      "geo": "[60.41193871688404, -25.61520803143827]",
      "humidity": 75,
      "pressure": 1006,
      "temp": 40.72999999999996,
      "windiness": 14
    },
    {
      "FIELD1": 165,
      "city names": "castro",
      "cloudiness": 88,
      "geo": "[-46.61605728582326, -99.4264592138988]",
      "humidity": 98,
      "pressure": 1017,
      "temp": 42.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 166,
      "city names": "hasaki",
      "cloudiness": 20,
      "geo": "[26.036204334500084, 154.96012019316265]",
      "humidity": 41,
      "pressure": 1012,
      "temp": 76.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 167,
      "city names": "coquimbo",
      "cloudiness": 0,
      "geo": "[-29.33279758111383, -82.21242474452377]",
      "humidity": 81,
      "pressure": 1016,
      "temp": 51.52999999999997,
      "windiness": 3
    },
    {
      "FIELD1": 168,
      "city names": "guerrero negro",
      "cloudiness": 92,
      "geo": "[26.226855572759106, -114.49308354177217]",
      "humidity": 96,
      "pressure": 1011,
      "temp": 71.32999999999998,
      "windiness": 8
    },
    {
      "FIELD1": 169,
      "city names": "sao bento do sul",
      "cloudiness": 40,
      "geo": "[-26.44637945242807, -49.32106935293277]",
      "humidity": 83,
      "pressure": 1012,
      "temp": 74.93,
      "windiness": 1
    },
    {
      "FIELD1": 170,
      "city names": "maragogi",
      "cloudiness": 76,
      "geo": "[-16.514744416275292, -25.54338748647902]",
      "humidity": 84,
      "pressure": 1020,
      "temp": 73.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 171,
      "city names": "honiara",
      "cloudiness": 20,
      "geo": "[-14.62305365299514, 157.95083218727706]",
      "humidity": 70,
      "pressure": 1009,
      "temp": 87.53000000000003,
      "windiness": 2
    },
    {
      "FIELD1": 172,
      "city names": "sorland",
      "cloudiness": 92,
      "geo": "[68.87795642222446, 8.282426222580654]",
      "humidity": 100,
      "pressure": 1010,
      "temp": 46.129999999999995,
      "windiness": 1
    },
    {
      "FIELD1": 173,
      "city names": "bathsheba",
      "cloudiness": 40,
      "geo": "[14.270034816352464, -55.08133726778024]",
      "humidity": 78,
      "pressure": 1013,
      "temp": 80.32999999999998,
      "windiness": 5
    },
    {
      "FIELD1": 174,
      "city names": "la sarre",
      "cloudiness": 88,
      "geo": "[49.442223589366336, -79.14127056082395]",
      "humidity": 91,
      "pressure": 1004,
      "temp": 37.129999999999995,
      "windiness": 3
    },
    {
      "FIELD1": 175,
      "city names": "anadyr",
      "cloudiness": 90,
      "geo": "[65.3791842142862, 175.7354904206298]",
      "humidity": 100,
      "pressure": 993,
      "temp": 44.329999999999984,
      "windiness": 5
    },
    {
      "FIELD1": 176,
      "city names": "buala",
      "cloudiness": 32,
      "geo": "[-1.9059713779229241, 161.4037279566901]",
      "humidity": 85,
      "pressure": 1012,
      "temp": 83.93,
      "windiness": 1
    },
    {
      "FIELD1": 177,
      "city names": "sisimiut",
      "cloudiness": 92,
      "geo": "[68.07607681867265, -58.99676264473396]",
      "humidity": 99,
      "pressure": 995,
      "temp": 29.930000000000007,
      "windiness": 3
    },
    {
      "FIELD1": 178,
      "city names": "shache",
      "cloudiness": 0,
      "geo": "[37.838726037560875, 75.9102173124374]",
      "humidity": 45,
      "pressure": 894,
      "temp": 53.329999999999984,
      "windiness": 2
    },
    {
      "FIELD1": 179,
      "city names": "ndjole",
      "cloudiness": 92,
      "geo": "[-0.025144768540712903, 10.515777953892552]",
      "humidity": 100,
      "pressure": 998,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 180,
      "city names": "roald",
      "cloudiness": 92,
      "geo": "[67.88414717326037, 3.0517943681794293]",
      "humidity": 87,
      "pressure": 1000,
      "temp": 38.93000000000001,
      "windiness": 3
    },
    {
      "FIELD1": 181,
      "city names": "talnakh",
      "cloudiness": 12,
      "geo": "[69.77484850827278, 93.86213833368168]",
      "humidity": 100,
      "pressure": 990,
      "temp": 31.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 182,
      "city names": "palmer",
      "cloudiness": 1,
      "geo": "[57.587610891163735, -145.36080786464976]",
      "humidity": 74,
      "pressure": 1016,
      "temp": 49.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 183,
      "city names": "esperance",
      "cloudiness": 36,
      "geo": "[-28.397766870186636, 124.34289179460234]",
      "humidity": 91,
      "pressure": 1022,
      "temp": 58.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 184,
      "city names": "petropavlovsk-kamchatskiy",
      "cloudiness": 0,
      "geo": "[51.21027212239227, 161.8619306193218]",
      "humidity": 37,
      "pressure": 981,
      "temp": 55.12999999999994,
      "windiness": 8
    },
    {
      "FIELD1": 185,
      "city names": "mount gambier",
      "cloudiness": 64,
      "geo": "[-55.5436699783735, 129.62783908412615]",
      "humidity": 53,
      "pressure": 1021,
      "temp": 73.12999999999994,
      "windiness": 4
    },
    {
      "FIELD1": 186,
      "city names": "nikolskoye",
      "cloudiness": 0,
      "geo": "[48.60735182860432, 174.8480311956207]",
      "humidity": 81,
      "pressure": 1005,
      "temp": 44.329999999999984,
      "windiness": 5
    },
    {
      "FIELD1": 187,
      "city names": "jiazi",
      "cloudiness": 0,
      "geo": "[20.16052854491771, 117.30753652677771]",
      "humidity": 66,
      "pressure": 1015,
      "temp": 83.93,
      "windiness": 6
    },
    {
      "FIELD1": 188,
      "city names": "zeya",
      "cloudiness": 64,
      "geo": "[55.147443321334805, 127.01001148937644]",
      "humidity": 50,
      "pressure": 951,
      "temp": 47.93000000000001,
      "windiness": 3
    },
    {
      "FIELD1": 189,
      "city names": "bartica",
      "cloudiness": 0,
      "geo": "[6.117993327201518, -59.54988684570934]",
      "humidity": 88,
      "pressure": 1011,
      "temp": 78.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 190,
      "city names": "parati",
      "cloudiness": 0,
      "geo": "[-24.549944836549088, -44.020874898464854]",
      "humidity": 88,
      "pressure": 1013,
      "temp": 73.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 191,
      "city names": "saskylakh",
      "cloudiness": 92,
      "geo": "[89.5699897322742, 121.27530074504153]",
      "humidity": 99,
      "pressure": 1002,
      "temp": 29.930000000000007,
      "windiness": 2
    },
    {
      "FIELD1": 192,
      "city names": "chattanooga",
      "cloudiness": 40,
      "geo": "[35.090956271738136, -85.72230990155496]",
      "humidity": 84,
      "pressure": 1024,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 193,
      "city names": "opuwo",
      "cloudiness": 8,
      "geo": "[-17.92332082483439, 11.440775058129475]",
      "humidity": 30,
      "pressure": 885,
      "temp": 67.72999999999996,
      "windiness": 4
    },
    {
      "FIELD1": 194,
      "city names": "ahuimanu",
      "cloudiness": 1,
      "geo": "[22.477146772016596, -157.56041303283573]",
      "humidity": 79,
      "pressure": 1013,
      "temp": 82.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 195,
      "city names": "athabasca",
      "cloudiness": 76,
      "geo": "[56.2438620423581, -111.98485909072961]",
      "humidity": 62,
      "pressure": 954,
      "temp": 29.930000000000007,
      "windiness": 2
    },
    {
      "FIELD1": 196,
      "city names": "zyryanka",
      "cloudiness": 88,
      "geo": "[67.43538068879579, 149.38732837852405]",
      "humidity": 80,
      "pressure": 993,
      "temp": 33.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 197,
      "city names": "puerto escondido",
      "cloudiness": 20,
      "geo": "[12.319722300751664, -98.6990717597417]",
      "humidity": 100,
      "pressure": 1024,
      "temp": 85.72999999999996,
      "windiness": 4
    },
    {
      "FIELD1": 198,
      "city names": "carutapera",
      "cloudiness": 76,
      "geo": "[7.098582077607105, -42.36744811972858]",
      "humidity": 82,
      "pressure": 1025,
      "temp": 78.53000000000003,
      "windiness": 5
    },
    {
      "FIELD1": 199,
      "city names": "hamilton",
      "cloudiness": 75,
      "geo": "[32.22804481816485, -68.90597446410885]",
      "humidity": 78,
      "pressure": 1016,
      "temp": 76.72999999999996,
      "windiness": 8
    },
    {
      "FIELD1": 200,
      "city names": "saint-pierre",
      "cloudiness": 0,
      "geo": "[43.45004295647732, -54.32973487003615]",
      "humidity": 100,
      "pressure": 1038,
      "temp": 49.72999999999996,
      "windiness": 8
    },
    {
      "FIELD1": 201,
      "city names": "ponnani",
      "cloudiness": 75,
      "geo": "[10.51795644776486, 75.22812442008546]",
      "humidity": 83,
      "pressure": 1010,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 202,
      "city names": "victoria",
      "cloudiness": 40,
      "geo": "[-3.2703475987382546, 62.998184644263006]",
      "humidity": 74,
      "pressure": 1012,
      "temp": 78.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 203,
      "city names": "akonolinga",
      "cloudiness": 92,
      "geo": "[3.6119286060724676, 12.278134805144106]",
      "humidity": 92,
      "pressure": 959,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 204,
      "city names": "macia",
      "cloudiness": 0,
      "geo": "[-24.937518260309332, 32.68358510738858]",
      "humidity": 64,
      "pressure": 1026,
      "temp": 62.329999999999984,
      "windiness": 3
    },
    {
      "FIELD1": 205,
      "city names": "hami",
      "cloudiness": 0,
      "geo": "[38.349559964689234, 91.10150765921338]",
      "humidity": 40,
      "pressure": 952,
      "temp": 60.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 206,
      "city names": "kindu",
      "cloudiness": 88,
      "geo": "[-2.41156262842469, 26.32995521477909]",
      "humidity": 98,
      "pressure": 959,
      "temp": 69.53000000000003,
      "windiness": 0
    },
    {
      "FIELD1": 207,
      "city names": "kavieng",
      "cloudiness": 48,
      "geo": "[-1.660319838342275, 150.2418145374894]",
      "humidity": 100,
      "pressure": 1020,
      "temp": 83.93,
      "windiness": 2
    },
    {
      "FIELD1": 208,
      "city names": "saint george",
      "cloudiness": 75,
      "geo": "[31.970336370154826, -62.15036730611209]",
      "humidity": 78,
      "pressure": 1016,
      "temp": 76.72999999999996,
      "windiness": 8
    },
    {
      "FIELD1": 209,
      "city names": "sosva",
      "cloudiness": 20,
      "geo": "[59.72602060242616, 61.40061867841965]",
      "humidity": 84,
      "pressure": 1017,
      "temp": 42.52999999999997,
      "windiness": 3
    },
    {
      "FIELD1": 210,
      "city names": "ponta delgada",
      "cloudiness": 40,
      "geo": "[31.007566325424946, -26.757578077183183]",
      "humidity": 78,
      "pressure": 1020,
      "temp": 71.32999999999998,
      "windiness": 6
    },
    {
      "FIELD1": 211,
      "city names": "redding",
      "cloudiness": 90,
      "geo": "[40.570709921790126, -123.24256636635388]",
      "humidity": 65,
      "pressure": 1009,
      "temp": 67.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 212,
      "city names": "kawalu",
      "cloudiness": 0,
      "geo": "[-11.507490632466684, 106.87821729600552]",
      "humidity": 66,
      "pressure": 928,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 213,
      "city names": "capreol",
      "cloudiness": 90,
      "geo": "[46.980144431037985, -81.50384253057172]",
      "humidity": 75,
      "pressure": 1026,
      "temp": 42.52999999999997,
      "windiness": 4
    },
    {
      "FIELD1": 214,
      "city names": "bahia honda",
      "cloudiness": 48,
      "geo": "[24.09443745881798, -83.39443201590726]",
      "humidity": 75,
      "pressure": 1018,
      "temp": 80.32999999999998,
      "windiness": 3
    },
    {
      "FIELD1": 215,
      "city names": "freeport",
      "cloudiness": 90,
      "geo": "[27.858764443765324, -94.89085666224332]",
      "humidity": 100,
      "pressure": 1017,
      "temp": 60.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 216,
      "city names": "coihaique",
      "cloudiness": 75,
      "geo": "[-47.710815323931456, -79.34869034687239]",
      "humidity": 60,
      "pressure": 1011,
      "temp": 38.93000000000001,
      "windiness": 2
    },
    {
      "FIELD1": 217,
      "city names": "deputatskiy",
      "cloudiness": 88,
      "geo": "[73.19005346419397, 142.53557066430648]",
      "humidity": 91,
      "pressure": 939,
      "temp": 28.129999999999995,
      "windiness": 5
    },
    {
      "FIELD1": 218,
      "city names": "yar-sale",
      "cloudiness": 0,
      "geo": "[66.83773847923041, 70.59144909860834]",
      "humidity": 100,
      "pressure": 1016,
      "temp": 31.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 219,
      "city names": "tezu",
      "cloudiness": 20,
      "geo": "[27.492079991165497, 98.48154720557721]",
      "humidity": 72,
      "pressure": 882,
      "temp": 69.53000000000003,
      "windiness": 0
    },
    {
      "FIELD1": 220,
      "city names": "dikson",
      "cloudiness": 56,
      "geo": "[72.8442215969068, 75.86050157235519]",
      "humidity": 100,
      "pressure": 1013,
      "temp": 37.129999999999995,
      "windiness": 8
    },
    {
      "FIELD1": 221,
      "city names": "tafresh",
      "cloudiness": 0,
      "geo": "[34.71691793487311, 50.12993127864627]",
      "humidity": 76,
      "pressure": 831,
      "temp": 40.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 222,
      "city names": "lanxi",
      "cloudiness": 0,
      "geo": "[46.23033700861805, 126.47883053999874]",
      "humidity": 54,
      "pressure": 1008,
      "temp": 71.32999999999998,
      "windiness": 1
    },
    {
      "FIELD1": 223,
      "city names": "krasnyy chikoy",
      "cloudiness": 8,
      "geo": "[48.848679849411326, 108.79805921506664]",
      "humidity": 56,
      "pressure": 906,
      "temp": 55.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 224,
      "city names": "tabou",
      "cloudiness": 92,
      "geo": "[0.7666032340228526, -5.865644519079325]",
      "humidity": 100,
      "pressure": 1023,
      "temp": 76.72999999999996,
      "windiness": 4
    },
    {
      "FIELD1": 225,
      "city names": "cabra",
      "cloudiness": 20,
      "geo": "[13.841319368392206, 118.78507952814414]",
      "humidity": 100,
      "pressure": 1022,
      "temp": 82.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 226,
      "city names": "diego de almagro",
      "cloudiness": 0,
      "geo": "[-24.948345528806115, -68.16140086684766]",
      "humidity": 81,
      "pressure": 918,
      "temp": 55.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 227,
      "city names": "mao",
      "cloudiness": 20,
      "geo": "[14.876407858419654, 15.743606882120702]",
      "humidity": 69,
      "pressure": 983,
      "temp": 74.93,
      "windiness": 2
    },
    {
      "FIELD1": 228,
      "city names": "tekirdag",
      "cloudiness": 75,
      "geo": "[40.77723815306172, 27.729358102326273]",
      "humidity": 100,
      "pressure": 1013,
      "temp": 58.72999999999996,
      "windiness": 6
    },
    {
      "FIELD1": 229,
      "city names": "carinhanha",
      "cloudiness": 0,
      "geo": "[-13.974408570453491, -44.10195144988765]",
      "humidity": 42,
      "pressure": 969,
      "temp": 78.53000000000003,
      "windiness": 6
    },
    {
      "FIELD1": 230,
      "city names": "lyambir",
      "cloudiness": 0,
      "geo": "[54.21357988962879, 45.04840275700283]",
      "humidity": 75,
      "pressure": 1011,
      "temp": 31.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 231,
      "city names": "vila franca do campo",
      "cloudiness": 40,
      "geo": "[39.452169393530625, -21.273841691474757]",
      "humidity": 78,
      "pressure": 1020,
      "temp": 71.32999999999998,
      "windiness": 6
    },
    {
      "FIELD1": 232,
      "city names": "zhigansk",
      "cloudiness": 88,
      "geo": "[66.77460411478077, 124.22897061404109]",
      "humidity": 89,
      "pressure": 1006,
      "temp": 35.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 233,
      "city names": "richards bay",
      "cloudiness": 0,
      "geo": "[-28.71288918185899, 36.40006212489496]",
      "humidity": 75,
      "pressure": 1007,
      "temp": 64.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 234,
      "city names": "cabo san lucas",
      "cloudiness": 40,
      "geo": "[22.03422268746256, -111.7695042862694]",
      "humidity": 83,
      "pressure": 1014,
      "temp": 80.32999999999998,
      "windiness": 3
    },
    {
      "FIELD1": 235,
      "city names": "fredericksburg",
      "cloudiness": 40,
      "geo": "[37.998788161968776, -77.24275555964205]",
      "humidity": 75,
      "pressure": 1020,
      "temp": 74.93,
      "windiness": 2
    },
    {
      "FIELD1": 236,
      "city names": "kurchum",
      "cloudiness": 12,
      "geo": "[48.7338474893553, 84.2431097786914]",
      "humidity": 70,
      "pressure": 975,
      "temp": 58.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 237,
      "city names": "port blair",
      "cloudiness": 56,
      "geo": "[12.934218605065297, 87.39996331608575]",
      "humidity": 98,
      "pressure": 1024,
      "temp": 83.93,
      "windiness": 1
    },
    {
      "FIELD1": 238,
      "city names": "whitefish",
      "cloudiness": 90,
      "geo": "[48.57907201517767, -114.5170509850958]",
      "humidity": 68,
      "pressure": 1011,
      "temp": 51.52999999999997,
      "windiness": 0
    },
    {
      "FIELD1": 239,
      "city names": "bubaque",
      "cloudiness": 36,
      "geo": "[6.349250707763403, -20.27600994881334]",
      "humidity": 100,
      "pressure": 1023,
      "temp": 78.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 240,
      "city names": "corinto",
      "cloudiness": 92,
      "geo": "[11.337899780978162, -88.49751441960126]",
      "humidity": 78,
      "pressure": 1012,
      "temp": 80.32999999999998,
      "windiness": 1
    },
    {
      "FIELD1": 241,
      "city names": "skibbereen",
      "cloudiness": 75,
      "geo": "[47.5125999355173, -9.93560732484542]",
      "humidity": 93,
      "pressure": 1025,
      "temp": 58.72999999999996,
      "windiness": 6
    },
    {
      "FIELD1": 242,
      "city names": "bambanglipuro",
      "cloudiness": 0,
      "geo": "[-12.315805949562431, 110.19387204531336]",
      "humidity": 56,
      "pressure": 993,
      "temp": 87.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 243,
      "city names": "paamiut",
      "cloudiness": 44,
      "geo": "[62.046106834109935, -50.075661321021784]",
      "humidity": 97,
      "pressure": 1031,
      "temp": 37.129999999999995,
      "windiness": 4
    },
    {
      "FIELD1": 244,
      "city names": "yeppoon",
      "cloudiness": 20,
      "geo": "[-17.482309484468686, 155.9322174209446]",
      "humidity": 36,
      "pressure": 1023,
      "temp": 80.32999999999998,
      "windiness": 4
    },
    {
      "FIELD1": 245,
      "city names": "korla",
      "cloudiness": 0,
      "geo": "[41.47521223634479, 86.49965002335244]",
      "humidity": 39,
      "pressure": 900,
      "temp": 58.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 246,
      "city names": "lagoa",
      "cloudiness": 0,
      "geo": "[47.93120730595615, -32.30542679434947]",
      "humidity": 60,
      "pressure": 1016,
      "temp": 71.32999999999998,
      "windiness": 1
    },
    {
      "FIELD1": 247,
      "city names": "sumbe",
      "cloudiness": 92,
      "geo": "[-11.028957170646308, 13.100749136581186]",
      "humidity": 100,
      "pressure": 1012,
      "temp": 67.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 248,
      "city names": "matay",
      "cloudiness": 0,
      "geo": "[28.967006876434368, 29.408362159210355]",
      "humidity": 60,
      "pressure": 1016,
      "temp": 69.53000000000003,
      "windiness": 4
    },
    {
      "FIELD1": 249,
      "city names": "hirara",
      "cloudiness": 20,
      "geo": "[20.23962303798986, 128.64006590284282]",
      "humidity": 57,
      "pressure": 1015,
      "temp": 80.32999999999998,
      "windiness": 6
    },
    {
      "FIELD1": 250,
      "city names": "prince rupert",
      "cloudiness": 1,
      "geo": "[54.47949997918087, -129.71742125525827]",
      "humidity": 32,
      "pressure": 1011,
      "temp": 55.12999999999994,
      "windiness": 5
    },
    {
      "FIELD1": 251,
      "city names": "ust-koksa",
      "cloudiness": 92,
      "geo": "[50.5505059748823, 85.76446695895987]",
      "humidity": 61,
      "pressure": 842,
      "temp": 47.93000000000001,
      "windiness": 1
    },
    {
      "FIELD1": 252,
      "city names": "zolotkovo",
      "cloudiness": 24,
      "geo": "[55.47388927137999, 40.86152742765009]",
      "humidity": 90,
      "pressure": 1015,
      "temp": 33.52999999999997,
      "windiness": 4
    },
    {
      "FIELD1": 253,
      "city names": "san luis",
      "cloudiness": 90,
      "geo": "[28.89883812718294, -113.5577257255162]",
      "humidity": 87,
      "pressure": 1009,
      "temp": 74.93,
      "windiness": 3
    },
    {
      "FIELD1": 254,
      "city names": "celestun",
      "cloudiness": 12,
      "geo": "[22.063799839226263, -91.0774169386061]",
      "humidity": 96,
      "pressure": 1027,
      "temp": 83.93,
      "windiness": 7
    },
    {
      "FIELD1": 255,
      "city names": "palmerston",
      "cloudiness": 0,
      "geo": "[-12.508924436383253, 129.63832204107797]",
      "humidity": 31,
      "pressure": 1014,
      "temp": 87.53000000000003,
      "windiness": 8
    },
    {
      "FIELD1": 256,
      "city names": "labuhan",
      "cloudiness": 12,
      "geo": "[-19.76012672412145, 94.83182573912785]",
      "humidity": 70,
      "pressure": 998,
      "temp": 85.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 257,
      "city names": "wattegama",
      "cloudiness": 68,
      "geo": "[5.7878697822009, 83.04592038547872]",
      "humidity": 96,
      "pressure": 972,
      "temp": 74.93,
      "windiness": 1
    },
    {
      "FIELD1": 258,
      "city names": "puerto carreno",
      "cloudiness": 56,
      "geo": "[7.274676432974019, -66.09088902513302]",
      "humidity": 94,
      "pressure": 952,
      "temp": 73.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 259,
      "city names": "mbandaka",
      "cloudiness": 92,
      "geo": "[-0.5819077761058509, 17.48408219044623]",
      "humidity": 100,
      "pressure": 982,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 260,
      "city names": "mentakab",
      "cloudiness": 8,
      "geo": "[3.684635613376585, 102.30064791686465]",
      "humidity": 80,
      "pressure": 1013,
      "temp": 83.93,
      "windiness": 1
    },
    {
      "FIELD1": 261,
      "city names": "churachandpur",
      "cloudiness": 75,
      "geo": "[23.92671369283832, 93.39102035555135]",
      "humidity": 88,
      "pressure": 1016,
      "temp": 73.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 262,
      "city names": "smithers",
      "cloudiness": 90,
      "geo": "[57.18671917899664, -125.50377356121729]",
      "humidity": 51,
      "pressure": 1018,
      "temp": 38.93000000000001,
      "windiness": 2
    },
    {
      "FIELD1": 263,
      "city names": "esso",
      "cloudiness": 24,
      "geo": "[55.73173402254943, 157.45126079629824]",
      "humidity": 69,
      "pressure": 876,
      "temp": 31.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 264,
      "city names": "rio gallegos",
      "cloudiness": 0,
      "geo": "[-49.859026685165816, -70.27809456449664]",
      "humidity": 74,
      "pressure": 999,
      "temp": 37.129999999999995,
      "windiness": 8
    },
    {
      "FIELD1": 265,
      "city names": "roros",
      "cloudiness": 92,
      "geo": "[62.453673723625826, 11.393033883669517]",
      "humidity": 100,
      "pressure": 1001,
      "temp": 26.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 266,
      "city names": "hambantota",
      "cloudiness": 68,
      "geo": "[-5.926186362635917, 84.64283302680008]",
      "humidity": 100,
      "pressure": 1020,
      "temp": 80.32999999999998,
      "windiness": 5
    },
    {
      "FIELD1": 267,
      "city names": "astana",
      "cloudiness": 40,
      "geo": "[50.42022472738668, 71.7287284266597]",
      "humidity": 93,
      "pressure": 1021,
      "temp": 38.93000000000001,
      "windiness": 2
    },
    {
      "FIELD1": 268,
      "city names": "piney green",
      "cloudiness": 1,
      "geo": "[33.92535013777707, -76.90922600689093]",
      "humidity": 92,
      "pressure": 1025,
      "temp": 67.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 269,
      "city names": "port hardy",
      "cloudiness": 90,
      "geo": "[41.715873782746655, -141.1839371633517]",
      "humidity": 93,
      "pressure": 1009,
      "temp": 51.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 270,
      "city names": "flinders",
      "cloudiness": 0,
      "geo": "[-35.514575682366726, 131.04849612528585]",
      "humidity": 49,
      "pressure": 1025,
      "temp": 71.32999999999998,
      "windiness": 3
    },
    {
      "FIELD1": 271,
      "city names": "sabha",
      "cloudiness": 88,
      "geo": "[26.487078161412157, 14.282282521631203]",
      "humidity": 34,
      "pressure": 974,
      "temp": 73.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 272,
      "city names": "kayankulam",
      "cloudiness": 12,
      "geo": "[9.009920270540945, 76.3151987462241]",
      "humidity": 100,
      "pressure": 1023,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 273,
      "city names": "ranong",
      "cloudiness": 75,
      "geo": "[10.777147597753583, 95.90165862196875]",
      "humidity": 88,
      "pressure": 1011,
      "temp": 80.32999999999998,
      "windiness": 2
    },
    {
      "FIELD1": 274,
      "city names": "yining",
      "cloudiness": 20,
      "geo": "[43.43616865428805, 81.72014151637603]",
      "humidity": 41,
      "pressure": 984,
      "temp": 74.93,
      "windiness": 1
    },
    {
      "FIELD1": 275,
      "city names": "marrakesh",
      "cloudiness": 0,
      "geo": "[32.43912902779738, -7.24459659128766]",
      "humidity": 73,
      "pressure": 1016,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 276,
      "city names": "maromitsa",
      "cloudiness": 80,
      "geo": "[59.9390733689489, 47.916974234538486]",
      "humidity": 90,
      "pressure": 1007,
      "temp": 44.329999999999984,
      "windiness": 2
    },
    {
      "FIELD1": 277,
      "city names": "bolgatanga",
      "cloudiness": 44,
      "geo": "[10.520176453194466, -0.4001280482151799]",
      "humidity": 88,
      "pressure": 999,
      "temp": 74.93,
      "windiness": 3
    },
    {
      "FIELD1": 278,
      "city names": "kigoma",
      "cloudiness": 44,
      "geo": "[-4.8737380719706636, 28.83661698626193]",
      "humidity": 91,
      "pressure": 924,
      "temp": 78.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 279,
      "city names": "chumikan",
      "cloudiness": 32,
      "geo": "[55.52484181360728, 134.56150772039877]",
      "humidity": 62,
      "pressure": 997,
      "temp": 51.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 280,
      "city names": "limoges",
      "cloudiness": 0,
      "geo": "[46.302534580031164, 1.3305499306628974]",
      "humidity": 70,
      "pressure": 1026,
      "temp": 42.52999999999997,
      "windiness": 3
    },
    {
      "FIELD1": 281,
      "city names": "kahului",
      "cloudiness": 20,
      "geo": "[32.03995450244682, -151.04521056373596]",
      "humidity": 63,
      "pressure": 1013,
      "temp": 82.12999999999994,
      "windiness": 7
    },
    {
      "FIELD1": 282,
      "city names": "necochea",
      "cloudiness": 0,
      "geo": "[-45.58702236184069, -56.9389742029979]",
      "humidity": 71,
      "pressure": 1025,
      "temp": 37.129999999999995,
      "windiness": 3
    },
    {
      "FIELD1": 283,
      "city names": "eirunepe",
      "cloudiness": 20,
      "geo": "[-6.8780070153869275, -69.40140386117753]",
      "humidity": 91,
      "pressure": 1006,
      "temp": 76.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 284,
      "city names": "meulaboh",
      "cloudiness": 88,
      "geo": "[0.4414461232935025, 94.69922643791074]",
      "humidity": 100,
      "pressure": 1022,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 285,
      "city names": "caravelas",
      "cloudiness": 92,
      "geo": "[-20.66691446793149, -32.12255427462168]",
      "humidity": 100,
      "pressure": 1030,
      "temp": 76.72999999999996,
      "windiness": 7
    },
    {
      "FIELD1": 286,
      "city names": "vanimo",
      "cloudiness": 0,
      "geo": "[-1.9190946028881513, 140.63265624832877]",
      "humidity": 100,
      "pressure": 1021,
      "temp": 83.93,
      "windiness": 6
    },
    {
      "FIELD1": 287,
      "city names": "thompson",
      "cloudiness": 75,
      "geo": "[63.745444542220866, -100.87522382946602]",
      "humidity": 83,
      "pressure": 1016,
      "temp": 31.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 288,
      "city names": "narsaq",
      "cloudiness": 32,
      "geo": "[74.93209847243062, -64.55758878552416]",
      "humidity": 40,
      "pressure": 1022,
      "temp": 33.52999999999997,
      "windiness": 7
    },
    {
      "FIELD1": 289,
      "city names": "riyadh",
      "cloudiness": 0,
      "geo": "[23.433521493295757, 44.35188471981783]",
      "humidity": 37,
      "pressure": 1016,
      "temp": 74.93,
      "windiness": 2
    },
    {
      "FIELD1": 290,
      "city names": "saint-philippe",
      "cloudiness": 75,
      "geo": "[-51.6274826749989, 64.75071258542195]",
      "humidity": 77,
      "pressure": 1020,
      "temp": 64.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 291,
      "city names": "praya",
      "cloudiness": 20,
      "geo": "[-14.218769117954622, 116.11945883013203]",
      "humidity": 55,
      "pressure": 1013,
      "temp": 87.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 292,
      "city names": "bambous virieux",
      "cloudiness": 75,
      "geo": "[-32.5935906634498, 76.65820402296714]",
      "humidity": 78,
      "pressure": 1020,
      "temp": 71.32999999999998,
      "windiness": 5
    },
    {
      "FIELD1": 293,
      "city names": "makokou",
      "cloudiness": 92,
      "geo": "[0.17379147035605058, 13.140536423805486]",
      "humidity": 100,
      "pressure": 979,
      "temp": 67.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 294,
      "city names": "kaitangata",
      "cloudiness": 32,
      "geo": "[-56.79329672499453, 172.489636675846]",
      "humidity": 79,
      "pressure": 1015,
      "temp": 47.93000000000001,
      "windiness": 6
    },
    {
      "FIELD1": 295,
      "city names": "dukat",
      "cloudiness": 88,
      "geo": "[64.32342321776787, 154.73630160848336]",
      "humidity": 92,
      "pressure": 899,
      "temp": 28.129999999999995,
      "windiness": 1
    },
    {
      "FIELD1": 296,
      "city names": "margate",
      "cloudiness": 64,
      "geo": "[-35.89482448196384, 37.39261206231163]",
      "humidity": 92,
      "pressure": 1010,
      "temp": 67.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 297,
      "city names": "saldanha",
      "cloudiness": 88,
      "geo": "[-44.771589352540445, -6.826858957577258]",
      "humidity": 87,
      "pressure": 1021,
      "temp": 53.329999999999984,
      "windiness": 3
    },
    {
      "FIELD1": 298,
      "city names": "bitung",
      "cloudiness": 20,
      "geo": "[3.2744559848980117, 126.06665666996025]",
      "humidity": 52,
      "pressure": 1010,
      "temp": 91.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 299,
      "city names": "merauke",
      "cloudiness": 88,
      "geo": "[-7.905978124702926, 136.78733392481712]",
      "humidity": 94,
      "pressure": 1024,
      "temp": 76.72999999999996,
      "windiness": 6
    },
    {
      "FIELD1": 300,
      "city names": "barinas",
      "cloudiness": 24,
      "geo": "[8.450682186601668, -69.79869028297057]",
      "humidity": 84,
      "pressure": 1007,
      "temp": 76.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 301,
      "city names": "kruisfontein",
      "cloudiness": 0,
      "geo": "[-59.35448994233943, 25.55640857080803]",
      "humidity": 92,
      "pressure": 1020,
      "temp": 58.72999999999996,
      "windiness": 6
    },
    {
      "FIELD1": 302,
      "city names": "abu dhabi",
      "cloudiness": 48,
      "geo": "[23.827820158666043, 54.602207598109885]",
      "humidity": 83,
      "pressure": 1010,
      "temp": 80.32999999999998,
      "windiness": 2
    },
    {
      "FIELD1": 303,
      "city names": "boralday",
      "cloudiness": 75,
      "geo": "[44.03705564048644, 76.1859200605561]",
      "humidity": 48,
      "pressure": 1021,
      "temp": 60.53000000000003,
      "windiness": 2
    },
    {
      "FIELD1": 304,
      "city names": "traverse city",
      "cloudiness": 90,
      "geo": "[44.79193649541102, -85.93269225365037]",
      "humidity": 89,
      "pressure": 1020,
      "temp": 47.93000000000001,
      "windiness": 3
    },
    {
      "FIELD1": 305,
      "city names": "kuandian",
      "cloudiness": 0,
      "geo": "[39.5956850780359, 126.18943520468463]",
      "humidity": 69,
      "pressure": 985,
      "temp": 58.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 306,
      "city names": "saint-francois",
      "cloudiness": 20,
      "geo": "[16.639253578830605, -59.51450028920283]",
      "humidity": 88,
      "pressure": 1013,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 307,
      "city names": "coolum beach",
      "cloudiness": 0,
      "geo": "[-25.421737826822508, 157.41636891861168]",
      "humidity": 67,
      "pressure": 1026,
      "temp": 71.32999999999998,
      "windiness": 4
    },
    {
      "FIELD1": 308,
      "city names": "eyl",
      "cloudiness": 92,
      "geo": "[5.432707544373969, 54.57310350138914]",
      "humidity": 99,
      "pressure": 1015,
      "temp": 73.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 309,
      "city names": "mount isa",
      "cloudiness": 32,
      "geo": "[-21.04950521940809, 137.8144884987434]",
      "humidity": 22,
      "pressure": 1018,
      "temp": 89.32999999999998,
      "windiness": 7
    },
    {
      "FIELD1": 310,
      "city names": "garissa",
      "cloudiness": 76,
      "geo": "[-1.2276147642448194, 39.43279594268017]",
      "humidity": 91,
      "pressure": 1005,
      "temp": 69.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 311,
      "city names": "issoire",
      "cloudiness": 0,
      "geo": "[45.409723167049975, 3.3407192814951543]",
      "humidity": 65,
      "pressure": 1025,
      "temp": 46.129999999999995,
      "windiness": 0
    },
    {
      "FIELD1": 312,
      "city names": "egvekinot",
      "cloudiness": 88,
      "geo": "[64.703500640892, -177.7560474619564]",
      "humidity": 100,
      "pressure": 959,
      "temp": 46.129999999999995,
      "windiness": 2
    },
    {
      "FIELD1": 313,
      "city names": "sao joao da barra",
      "cloudiness": 68,
      "geo": "[-24.466138446697116, -36.56683169427052]",
      "humidity": 96,
      "pressure": 1028,
      "temp": 74.93,
      "windiness": 12
    },
    {
      "FIELD1": 314,
      "city names": "stokmarknes",
      "cloudiness": 75,
      "geo": "[71.9874701605901, 13.53106523414911]",
      "humidity": 70,
      "pressure": 1001,
      "temp": 42.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 315,
      "city names": "canavieiras",
      "cloudiness": 92,
      "geo": "[-15.628883544067534, -38.76245193553666]",
      "humidity": 82,
      "pressure": 1027,
      "temp": 74.93,
      "windiness": 2
    },
    {
      "FIELD1": 316,
      "city names": "lakes entrance",
      "cloudiness": 8,
      "geo": "[-40.01322540367385, 149.83860757116463]",
      "humidity": 64,
      "pressure": 1029,
      "temp": 65.93,
      "windiness": 2
    },
    {
      "FIELD1": 317,
      "city names": "clinton",
      "cloudiness": 1,
      "geo": "[35.23001906674938, -98.89268583881272]",
      "humidity": 94,
      "pressure": 1021,
      "temp": 74.93,
      "windiness": 1
    },
    {
      "FIELD1": 318,
      "city names": "fare",
      "cloudiness": 64,
      "geo": "[-12.561783707827914, -149.45250002788976]",
      "humidity": 100,
      "pressure": 1026,
      "temp": 74.93,
      "windiness": 4
    },
    {
      "FIELD1": 319,
      "city names": "arawa",
      "cloudiness": 32,
      "geo": "[-4.524482038526216, 155.29909770861696]",
      "humidity": 100,
      "pressure": 1002,
      "temp": 80.32999999999998,
      "windiness": 2
    },
    {
      "FIELD1": 320,
      "city names": "fairbanks",
      "cloudiness": 1,
      "geo": "[70.94545620220111, -146.26786657002907]",
      "humidity": 6,
      "pressure": 1013,
      "temp": 64.12999999999994,
      "windiness": 4
    },
    {
      "FIELD1": 321,
      "city names": "jacksonville",
      "cloudiness": 75,
      "geo": "[31.903541324870673, -95.4484048757952]",
      "humidity": 87,
      "pressure": 1022,
      "temp": 76.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 322,
      "city names": "praia da vitoria",
      "cloudiness": 40,
      "geo": "[48.02010109131351, -22.83291077710612]",
      "humidity": 83,
      "pressure": 1021,
      "temp": 71.32999999999998,
      "windiness": 8
    },
    {
      "FIELD1": 323,
      "city names": "moissala",
      "cloudiness": 12,
      "geo": "[8.441269080035354, 17.37967609342124]",
      "humidity": 95,
      "pressure": 981,
      "temp": 69.53000000000003,
      "windiness": 4
    },
    {
      "FIELD1": 324,
      "city names": "plettenberg bay",
      "cloudiness": 0,
      "geo": "[-42.004169560128, 23.46264479287737]",
      "humidity": 100,
      "pressure": 1024,
      "temp": 58.72999999999996,
      "windiness": 7
    },
    {
      "FIELD1": 325,
      "city names": "chapais",
      "cloudiness": 90,
      "geo": "[55.68606980392292, -74.0216277646917]",
      "humidity": 83,
      "pressure": 1029,
      "temp": 31.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 326,
      "city names": "jumla",
      "cloudiness": 0,
      "geo": "[32.8491978447466, 84.77624694454607]",
      "humidity": 91,
      "pressure": 685,
      "temp": 40.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 327,
      "city names": "san joaquin",
      "cloudiness": 32,
      "geo": "[-19.523095663916465, -59.26316142999296]",
      "humidity": 83,
      "pressure": 1003,
      "temp": 76.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 328,
      "city names": "kamaishi",
      "cloudiness": 20,
      "geo": "[37.285356898409816, 147.4546995490735]",
      "humidity": 56,
      "pressure": 1010,
      "temp": 69.53000000000003,
      "windiness": 4
    },
    {
      "FIELD1": 329,
      "city names": "pucallpa",
      "cloudiness": 75,
      "geo": "[-9.465521011643801, -73.73868052072339]",
      "humidity": 78,
      "pressure": 1010,
      "temp": 78.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 330,
      "city names": "glomfjord",
      "cloudiness": 75,
      "geo": "[66.90040006330932, 13.95171000905819]",
      "humidity": 86,
      "pressure": 1002,
      "temp": 40.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 331,
      "city names": "newport",
      "cloudiness": 90,
      "geo": "[44.42764524224364, -123.69078209072963]",
      "humidity": 96,
      "pressure": 1026,
      "temp": 56.93000000000001,
      "windiness": 3
    },
    {
      "FIELD1": 332,
      "city names": "kutum",
      "cloudiness": 24,
      "geo": "[18.384305287761663, 25.92639565335557]",
      "humidity": 35,
      "pressure": 896,
      "temp": 69.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 333,
      "city names": "leshukonskoye",
      "cloudiness": 76,
      "geo": "[68.09044642585118, 47.09524584604745]",
      "humidity": 91,
      "pressure": 1010,
      "temp": 42.52999999999997,
      "windiness": 3
    },
    {
      "FIELD1": 334,
      "city names": "batavia",
      "cloudiness": 90,
      "geo": "[43.05545254451857, -78.14885978364721]",
      "humidity": 96,
      "pressure": 1023,
      "temp": 51.52999999999997,
      "windiness": 3
    },
    {
      "FIELD1": 335,
      "city names": "taungdwingyi",
      "cloudiness": 44,
      "geo": "[20.343710136902075, 95.49996925644018]",
      "humidity": 91,
      "pressure": 1006,
      "temp": 80.32999999999998,
      "windiness": 3
    },
    {
      "FIELD1": 336,
      "city names": "lorengau",
      "cloudiness": 36,
      "geo": "[0.4744998742015838, 144.85919261461618]",
      "humidity": 100,
      "pressure": 1020,
      "temp": 83.93,
      "windiness": 3
    },
    {
      "FIELD1": 337,
      "city names": "lushnje",
      "cloudiness": 20,
      "geo": "[40.927570536343126, 19.657464188928202]",
      "humidity": 82,
      "pressure": 1012,
      "temp": 56.93000000000001,
      "windiness": 2
    },
    {
      "FIELD1": 338,
      "city names": "zanjan",
      "cloudiness": 8,
      "geo": "[36.91623747914075, 48.57212067760116]",
      "humidity": 100,
      "pressure": 828,
      "temp": 40.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 339,
      "city names": "westport",
      "cloudiness": 92,
      "geo": "[54.240930125215016, -9.654075394627029]",
      "humidity": 99,
      "pressure": 1027,
      "temp": 53.329999999999984,
      "windiness": 7
    },
    {
      "FIELD1": 340,
      "city names": "itarema",
      "cloudiness": 0,
      "geo": "[6.927865645913869, -38.52584603119425]",
      "humidity": 82,
      "pressure": 1020,
      "temp": 74.93,
      "windiness": 6
    },
    {
      "FIELD1": 341,
      "city names": "damaturu",
      "cloudiness": 24,
      "geo": "[11.40541295472677, 12.427896384247788]",
      "humidity": 77,
      "pressure": 975,
      "temp": 74.93,
      "windiness": 4
    },
    {
      "FIELD1": 342,
      "city names": "gamba",
      "cloudiness": 92,
      "geo": "[-8.797558692904758, 2.048180921399279]",
      "humidity": 100,
      "pressure": 1024,
      "temp": 74.93,
      "windiness": 3
    },
    {
      "FIELD1": 343,
      "city names": "tocopilla",
      "cloudiness": 32,
      "geo": "[-21.649897223767923, -72.52440796253833]",
      "humidity": 100,
      "pressure": 944,
      "temp": 55.12999999999994,
      "windiness": 0
    },
    {
      "FIELD1": 344,
      "city names": "srednekolymsk",
      "cloudiness": 48,
      "geo": "[69.0032872533063, 157.18569011979127]",
      "humidity": 69,
      "pressure": 993,
      "temp": 35.329999999999984,
      "windiness": 3
    },
    {
      "FIELD1": 345,
      "city names": "jijiang",
      "cloudiness": 0,
      "geo": "[28.96362592214912, 106.43216437487393]",
      "humidity": 38,
      "pressure": 1021,
      "temp": 76.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 346,
      "city names": "nuuk",
      "cloudiness": 0,
      "geo": "[62.58600832324123, -51.343395844914596]",
      "humidity": 80,
      "pressure": 1020,
      "temp": 33.52999999999997,
      "windiness": 5
    },
    {
      "FIELD1": 347,
      "city names": "norman wells",
      "cloudiness": 75,
      "geo": "[73.9682108016045, -122.1478109514337]",
      "humidity": 97,
      "pressure": 1030,
      "temp": 31.72999999999996,
      "windiness": 4
    },
    {
      "FIELD1": 348,
      "city names": "naze",
      "cloudiness": 40,
      "geo": "[24.081249281201153, 138.00723432231916]",
      "humidity": 47,
      "pressure": 1015,
      "temp": 80.32999999999998,
      "windiness": 6
    },
    {
      "FIELD1": 349,
      "city names": "biak",
      "cloudiness": 20,
      "geo": "[3.0196528288931006, 137.30865093074874]",
      "humidity": 80,
      "pressure": 1008,
      "temp": 82.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 350,
      "city names": "rudnichnyy",
      "cloudiness": 8,
      "geo": "[60.54170081753742, 52.94013542588348]",
      "humidity": 79,
      "pressure": 999,
      "temp": 40.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 351,
      "city names": "balabac",
      "cloudiness": 20,
      "geo": "[7.504735680755289, 116.61953218813966]",
      "humidity": 100,
      "pressure": 1022,
      "temp": 82.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 352,
      "city names": "isla mujeres",
      "cloudiness": 75,
      "geo": "[22.460728825735885, -86.21665537285874]",
      "humidity": 88,
      "pressure": 1015,
      "temp": 74.93,
      "windiness": 2
    },
    {
      "FIELD1": 353,
      "city names": "den helder",
      "cloudiness": 90,
      "geo": "[53.08012791944739, 3.9945692031359386]",
      "humidity": 81,
      "pressure": 1016,
      "temp": 51.52999999999997,
      "windiness": 5
    },
    {
      "FIELD1": 354,
      "city names": "jiwani",
      "cloudiness": 32,
      "geo": "[25.59302455374808, 61.47711908667759]",
      "humidity": 97,
      "pressure": 1022,
      "temp": 76.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 355,
      "city names": "sale",
      "cloudiness": 32,
      "geo": "[-38.152636309809324, 146.89345739433804]",
      "humidity": 68,
      "pressure": 1031,
      "temp": 64.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 356,
      "city names": "albanel",
      "cloudiness": 75,
      "geo": "[51.888084681720585, -72.54693426696595]",
      "humidity": 86,
      "pressure": 1030,
      "temp": 33.52999999999997,
      "windiness": 1
    },
    {
      "FIELD1": 357,
      "city names": "gaoua",
      "cloudiness": 64,
      "geo": "[10.218999753736469, -3.3840313403835864]",
      "humidity": 99,
      "pressure": 991,
      "temp": 69.53000000000003,
      "windiness": 2
    },
    {
      "FIELD1": 358,
      "city names": "svetlogorsk",
      "cloudiness": 0,
      "geo": "[67.80704023771816, 93.26041114885783]",
      "humidity": 74,
      "pressure": 1025,
      "temp": 33.52999999999997,
      "windiness": 1
    },
    {
      "FIELD1": 359,
      "city names": "san jose",
      "cloudiness": 88,
      "geo": "[8.610642779816544, -92.23870958470411]",
      "humidity": 99,
      "pressure": 1005,
      "temp": 71.32999999999998,
      "windiness": 1
    },
    {
      "FIELD1": 360,
      "city names": "miri",
      "cloudiness": 75,
      "geo": "[4.670631971095588, 114.02834737838549]",
      "humidity": 66,
      "pressure": 1010,
      "temp": 87.53000000000003,
      "windiness": 2
    },
    {
      "FIELD1": 361,
      "city names": "san patricio",
      "cloudiness": 75,
      "geo": "[13.472911156639285, -108.64466327006392]",
      "humidity": 83,
      "pressure": 1012,
      "temp": 83.93,
      "windiness": 0
    },
    {
      "FIELD1": 362,
      "city names": "alice springs",
      "cloudiness": 0,
      "geo": "[-25.93429404584876, 135.18193565719162]",
      "humidity": 11,
      "pressure": 1017,
      "temp": 89.32999999999998,
      "windiness": 2
    },
    {
      "FIELD1": 363,
      "city names": "seoul",
      "cloudiness": 20,
      "geo": "[37.44180945880015, 128.9028201406394]",
      "humidity": 45,
      "pressure": 1018,
      "temp": 64.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 364,
      "city names": "mandalgovi",
      "cloudiness": 0,
      "geo": "[43.35529418590917, 108.51587201900765]",
      "humidity": 63,
      "pressure": 877,
      "temp": 51.52999999999997,
      "windiness": 3
    },
    {
      "FIELD1": 365,
      "city names": "erzin",
      "cloudiness": 0,
      "geo": "[46.88366389540434, 94.7222737880283]",
      "humidity": 37,
      "pressure": 858,
      "temp": 53.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 366,
      "city names": "bocas del toro",
      "cloudiness": 80,
      "geo": "[9.430887319949505, -82.18686879633904]",
      "humidity": 100,
      "pressure": 1024,
      "temp": 80.32999999999998,
      "windiness": 4
    },
    {
      "FIELD1": 367,
      "city names": "vegueta",
      "cloudiness": 0,
      "geo": "[-11.06266005597439, -77.96593516498159]",
      "humidity": 77,
      "pressure": 837,
      "temp": 53.329999999999984,
      "windiness": 0
    },
    {
      "FIELD1": 368,
      "city names": "okhotsk",
      "cloudiness": 0,
      "geo": "[59.4936289905269, 145.55630106157327]",
      "humidity": 83,
      "pressure": 995,
      "temp": 44.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 369,
      "city names": "takayama",
      "cloudiness": 75,
      "geo": "[36.01436024238134, 137.45282608059455]",
      "humidity": 72,
      "pressure": 1015,
      "temp": 67.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 370,
      "city names": "sobolevo",
      "cloudiness": 36,
      "geo": "[56.3327809870469, 153.07904543128035]",
      "humidity": 88,
      "pressure": 1000,
      "temp": 37.129999999999995,
      "windiness": 5
    },
    {
      "FIELD1": 371,
      "city names": "antalaha",
      "cloudiness": 92,
      "geo": "[-14.764321162292305, 55.47355572988906]",
      "humidity": 98,
      "pressure": 1018,
      "temp": 67.72999999999996,
      "windiness": 4
    },
    {
      "FIELD1": 372,
      "city names": "onega",
      "cloudiness": 80,
      "geo": "[62.808399295753446, 38.333952415848756]",
      "humidity": 99,
      "pressure": 1013,
      "temp": 47.93000000000001,
      "windiness": 4
    },
    {
      "FIELD1": 373,
      "city names": "weligama",
      "cloudiness": 68,
      "geo": "[1.1581013473356023, 78.67858346939306]",
      "humidity": 98,
      "pressure": 1016,
      "temp": 78.53000000000003,
      "windiness": 5
    },
    {
      "FIELD1": 374,
      "city names": "gombong",
      "cloudiness": 0,
      "geo": "[-9.986742908356206, 108.78518289507997]",
      "humidity": 55,
      "pressure": 981,
      "temp": 85.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 375,
      "city names": "gondanglegi",
      "cloudiness": 12,
      "geo": "[-13.865482189656689, 111.992772368043]",
      "humidity": 60,
      "pressure": 981,
      "temp": 85.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 376,
      "city names": "muzhi",
      "cloudiness": 76,
      "geo": "[65.61044575887976, 63.55160327895118]",
      "humidity": 97,
      "pressure": 1011,
      "temp": 26.329999999999984,
      "windiness": 3
    },
    {
      "FIELD1": 377,
      "city names": "harper",
      "cloudiness": 80,
      "geo": "[1.1166624991168987, -9.33422097405034]",
      "humidity": 100,
      "pressure": 1023,
      "temp": 78.53000000000003,
      "windiness": 5
    },
    {
      "FIELD1": 378,
      "city names": "cascais",
      "cloudiness": 0,
      "geo": "[37.555542949370846, -10.46868185046489]",
      "humidity": 37,
      "pressure": 1018,
      "temp": 64.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 379,
      "city names": "araci",
      "cloudiness": 12,
      "geo": "[-11.214350454284983, -39.151340209727806]",
      "humidity": 89,
      "pressure": 994,
      "temp": 67.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 380,
      "city names": "ahipara",
      "cloudiness": 80,
      "geo": "[-32.516079864094586, 169.7975245499132]",
      "humidity": 90,
      "pressure": 1024,
      "temp": 56.93000000000001,
      "windiness": 2
    },
    {
      "FIELD1": 381,
      "city names": "santa rosalia",
      "cloudiness": 5,
      "geo": "[27.7389258652327, -111.94104061372336]",
      "humidity": 52,
      "pressure": 1010,
      "temp": 89.32999999999998,
      "windiness": 5
    },
    {
      "FIELD1": 382,
      "city names": "namibe",
      "cloudiness": 56,
      "geo": "[-16.443397297090655, 5.042648932848124]",
      "humidity": 100,
      "pressure": 1020,
      "temp": 65.93,
      "windiness": 2
    },
    {
      "FIELD1": 383,
      "city names": "diapaga",
      "cloudiness": 44,
      "geo": "[12.534811707822456, 2.15804308433286]",
      "humidity": 89,
      "pressure": 989,
      "temp": 71.32999999999998,
      "windiness": 1
    },
    {
      "FIELD1": 384,
      "city names": "mamallapuram",
      "cloudiness": 40,
      "geo": "[12.176446618602853, 82.16943892473671]",
      "humidity": 83,
      "pressure": 1011,
      "temp": 83.93,
      "windiness": 1
    },
    {
      "FIELD1": 385,
      "city names": "karsiyang",
      "cloudiness": 20,
      "geo": "[26.8688052001486, 88.40408349662721]",
      "humidity": 94,
      "pressure": 893,
      "temp": 67.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 386,
      "city names": "gazojak",
      "cloudiness": 44,
      "geo": "[41.20451051395901, 61.79836286872364]",
      "humidity": 43,
      "pressure": 1021,
      "temp": 64.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 387,
      "city names": "mogadishu",
      "cloudiness": 76,
      "geo": "[-0.2957124038547079, 47.566096679440705]",
      "humidity": 100,
      "pressure": 1027,
      "temp": 76.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 388,
      "city names": "baykit",
      "cloudiness": 32,
      "geo": "[63.33354622371087, 93.86116520262647]",
      "humidity": 85,
      "pressure": 951,
      "temp": 38.93000000000001,
      "windiness": 6
    },
    {
      "FIELD1": 389,
      "city names": "west wendover",
      "cloudiness": 75,
      "geo": "[40.851170583607285, -114.78540314653786]",
      "humidity": 24,
      "pressure": 1014,
      "temp": 69.53000000000003,
      "windiness": 2
    },
    {
      "FIELD1": 390,
      "city names": "lompoc",
      "cloudiness": 1,
      "geo": "[25.553253383286915, -131.07031123504066]",
      "humidity": 83,
      "pressure": 1009,
      "temp": 62.329999999999984,
      "windiness": 3
    },
    {
      "FIELD1": 391,
      "city names": "nemuro",
      "cloudiness": 75,
      "geo": "[35.76849208499918, 150.43999503715617]",
      "humidity": 93,
      "pressure": 1001,
      "temp": 55.12999999999994,
      "windiness": 6
    },
    {
      "FIELD1": 392,
      "city names": "pryazha",
      "cloudiness": 100,
      "geo": "[61.769997083615806, 33.85673879602729]",
      "humidity": 100,
      "pressure": 1006,
      "temp": 44.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 393,
      "city names": "port macquarie",
      "cloudiness": 0,
      "geo": "[-34.587885239621414, 157.16094000028858]",
      "humidity": 46,
      "pressure": 1026,
      "temp": 71.32999999999998,
      "windiness": 3
    },
    {
      "FIELD1": 394,
      "city names": "gebze",
      "cloudiness": 75,
      "geo": "[40.92206547273696, 29.54546973757067]",
      "humidity": 88,
      "pressure": 1013,
      "temp": 60.53000000000003,
      "windiness": 7
    },
    {
      "FIELD1": 395,
      "city names": "gravdal",
      "cloudiness": 92,
      "geo": "[73.19728285511522, 10.590079243853523]",
      "humidity": 87,
      "pressure": 1003,
      "temp": 42.52999999999997,
      "windiness": 6
    },
    {
      "FIELD1": 396,
      "city names": "elko",
      "cloudiness": 40,
      "geo": "[39.50562649540811, -116.50362082063822]",
      "humidity": 4,
      "pressure": 1014,
      "temp": 71.32999999999998,
      "windiness": 0
    },
    {
      "FIELD1": 397,
      "city names": "helong",
      "cloudiness": 0,
      "geo": "[42.69233855295249, 128.89545061356745]",
      "humidity": 53,
      "pressure": 973,
      "temp": 73.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 398,
      "city names": "nisia floresta",
      "cloudiness": 20,
      "geo": "[-3.6945148578883646, -27.24004282901865]",
      "humidity": 69,
      "pressure": 1015,
      "temp": 76.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 399,
      "city names": "port hedland",
      "cloudiness": 0,
      "geo": "[-17.07663714673187, 118.62039811257785]",
      "humidity": 27,
      "pressure": 1014,
      "temp": 89.32999999999998,
      "windiness": 4
    },
    {
      "FIELD1": 400,
      "city names": "mabaruma",
      "cloudiness": 0,
      "geo": "[7.097859145987243, -60.2651420054721]",
      "humidity": 90,
      "pressure": 1023,
      "temp": 78.53000000000003,
      "windiness": 3
    },
    {
      "FIELD1": 401,
      "city names": "laksar",
      "cloudiness": 0,
      "geo": "[29.60517685774171, 77.95333156540704]",
      "humidity": 79,
      "pressure": 976,
      "temp": 71.32999999999998,
      "windiness": 1
    },
    {
      "FIELD1": 402,
      "city names": "hervey bay",
      "cloudiness": 0,
      "geo": "[-23.098461817027143, 157.9045485821905]",
      "humidity": 82,
      "pressure": 1035,
      "temp": 71.32999999999998,
      "windiness": 7
    },
    {
      "FIELD1": 403,
      "city names": "cap-aux-meules",
      "cloudiness": 20,
      "geo": "[47.99146064301186, -60.90684914224812]",
      "humidity": 70,
      "pressure": 1028,
      "temp": 47.93000000000001,
      "windiness": 4
    },
    {
      "FIELD1": 404,
      "city names": "tura",
      "cloudiness": 92,
      "geo": "[63.092447656040974, 99.37626430316641]",
      "humidity": 100,
      "pressure": 958,
      "temp": 35.329999999999984,
      "windiness": 2
    },
    {
      "FIELD1": 405,
      "city names": "makakilo city",
      "cloudiness": 1,
      "geo": "[8.134980875663587, -163.84900317558137]",
      "humidity": 67,
      "pressure": 1014,
      "temp": 82.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 406,
      "city names": "adre",
      "cloudiness": 36,
      "geo": "[12.852210557174061, 22.744542036651808]",
      "humidity": 53,
      "pressure": 930,
      "temp": 74.93,
      "windiness": 4
    },
    {
      "FIELD1": 407,
      "city names": "piacabucu",
      "cloudiness": 92,
      "geo": "[-12.608124010432192, -34.55267714026584]",
      "humidity": 82,
      "pressure": 1018,
      "temp": 73.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 408,
      "city names": "keflavik",
      "cloudiness": 75,
      "geo": "[64.35199859681072, -22.946121548560825]",
      "humidity": 75,
      "pressure": 1006,
      "temp": 40.72999999999996,
      "windiness": 14
    },
    {
      "FIELD1": 409,
      "city names": "terra santa",
      "cloudiness": 0,
      "geo": "[-1.709051559866765, -56.304471154646166]",
      "humidity": 54,
      "pressure": 1016,
      "temp": 83.93,
      "windiness": 2
    },
    {
      "FIELD1": 410,
      "city names": "podhum",
      "cloudiness": 92,
      "geo": "[43.6797573909862, 17.03888908157606]",
      "humidity": 77,
      "pressure": 1008,
      "temp": 64.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 411,
      "city names": "tyumentsevo",
      "cloudiness": 92,
      "geo": "[53.3940297952733, 81.32254403404818]",
      "humidity": 80,
      "pressure": 1010,
      "temp": 44.329999999999984,
      "windiness": 2
    },
    {
      "FIELD1": 412,
      "city names": "campbell river",
      "cloudiness": 90,
      "geo": "[51.98792834850636, -124.70854534183917]",
      "humidity": 93,
      "pressure": 1008,
      "temp": 51.52999999999997,
      "windiness": 0
    },
    {
      "FIELD1": 413,
      "city names": "krasnozerskoye",
      "cloudiness": 76,
      "geo": "[54.12455676687111, 78.9912085445456]",
      "humidity": 84,
      "pressure": 1015,
      "temp": 40.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 414,
      "city names": "cairns",
      "cloudiness": 20,
      "geo": "[-15.511421355479882, 146.09221225781965]",
      "humidity": 44,
      "pressure": 1019,
      "temp": 80.32999999999998,
      "windiness": 12
    },
    {
      "FIELD1": 415,
      "city names": "prudentopolis",
      "cloudiness": 24,
      "geo": "[-25.319831304047398, -51.03602455619077]",
      "humidity": 90,
      "pressure": 930,
      "temp": 62.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 416,
      "city names": "saint-augustin",
      "cloudiness": 75,
      "geo": "[55.559026199428274, -59.8409723613652]",
      "humidity": 93,
      "pressure": 1028,
      "temp": 46.129999999999995,
      "windiness": 1
    },
    {
      "FIELD1": 417,
      "city names": "sao miguel do araguaia",
      "cloudiness": 24,
      "geo": "[-12.948989053751433, -53.158528121676]",
      "humidity": 83,
      "pressure": 990,
      "temp": 76.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 418,
      "city names": "kalispell",
      "cloudiness": 90,
      "geo": "[48.161399528059945, -113.8638797989145]",
      "humidity": 68,
      "pressure": 1011,
      "temp": 51.52999999999997,
      "windiness": 1
    },
    {
      "FIELD1": 419,
      "city names": "willowmore",
      "cloudiness": 12,
      "geo": "[-33.114856833420724, 22.94910078956144]",
      "humidity": 91,
      "pressure": 924,
      "temp": 40.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 420,
      "city names": "ulaanbaatar",
      "cloudiness": 0,
      "geo": "[48.19025442738808, 106.30693352877057]",
      "humidity": 56,
      "pressure": 1022,
      "temp": 42.52999999999997,
      "windiness": 1
    },
    {
      "FIELD1": 421,
      "city names": "high level",
      "cloudiness": 90,
      "geo": "[58.90131109718425, -117.97552790872282]",
      "humidity": 59,
      "pressure": 1024,
      "temp": 31.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 422,
      "city names": "santo antonio do sudoeste",
      "cloudiness": 24,
      "geo": "[-26.052242528032465, -53.988882688116334]",
      "humidity": 88,
      "pressure": 985,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 423,
      "city names": "newala",
      "cloudiness": 56,
      "geo": "[-11.65634246358023, 39.57492091826751]",
      "humidity": 96,
      "pressure": 986,
      "temp": 64.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 424,
      "city names": "price",
      "cloudiness": 75,
      "geo": "[39.07909862911049, -110.61949448329138]",
      "humidity": 64,
      "pressure": 1020,
      "temp": 62.329999999999984,
      "windiness": 3
    },
    {
      "FIELD1": 425,
      "city names": "tshela",
      "cloudiness": 76,
      "geo": "[-5.243986076749948, 13.029883192663988]",
      "humidity": 89,
      "pressure": 978,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 426,
      "city names": "boca do acre",
      "cloudiness": 8,
      "geo": "[-8.749110933709574, -66.7110997172428]",
      "humidity": 88,
      "pressure": 1004,
      "temp": 76.72999999999996,
      "windiness": 0
    },
    {
      "FIELD1": 427,
      "city names": "ovalle",
      "cloudiness": 0,
      "geo": "[-31.051202590115807, -72.73683109228531]",
      "humidity": 83,
      "pressure": 986,
      "temp": 47.93000000000001,
      "windiness": 1
    },
    {
      "FIELD1": 428,
      "city names": "kununurra",
      "cloudiness": 0,
      "geo": "[-16.899532484832108, 126.42285994514742]",
      "humidity": 30,
      "pressure": 1014,
      "temp": 92.93,
      "windiness": 4
    },
    {
      "FIELD1": 429,
      "city names": "manacapuru",
      "cloudiness": 0,
      "geo": "[-2.864657027466535, -60.72687827213885]",
      "humidity": 48,
      "pressure": 1017,
      "temp": 82.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 430,
      "city names": "parabel",
      "cloudiness": 8,
      "geo": "[58.61402498111164, 81.14783154806207]",
      "humidity": 71,
      "pressure": 1019,
      "temp": 40.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 431,
      "city names": "haines junction",
      "cloudiness": 0,
      "geo": "[59.875280545573446, -138.80053759693004]",
      "humidity": 52,
      "pressure": 911,
      "temp": 31.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 432,
      "city names": "coahuayana",
      "cloudiness": 44,
      "geo": "[11.439747845839278, -106.46694132616577]",
      "humidity": 79,
      "pressure": 902,
      "temp": 69.53000000000003,
      "windiness": 0
    },
    {
      "FIELD1": 433,
      "city names": "dunedin",
      "cloudiness": 92,
      "geo": "[-52.60636260003439, 178.94924545373675]",
      "humidity": 100,
      "pressure": 991,
      "temp": 44.329999999999984,
      "windiness": 5
    },
    {
      "FIELD1": 434,
      "city names": "nome",
      "cloudiness": 1,
      "geo": "[64.55606398511705, -165.06571929476203]",
      "humidity": 100,
      "pressure": 1020,
      "temp": 73.12999999999994,
      "windiness": 1
    },
    {
      "FIELD1": 435,
      "city names": "nampula",
      "cloudiness": 75,
      "geo": "[-15.169298852035354, 39.52279881929147]",
      "humidity": 94,
      "pressure": 1018,
      "temp": 69.53000000000003,
      "windiness": 4
    },
    {
      "FIELD1": 436,
      "city names": "olinda",
      "cloudiness": 75,
      "geo": "[-10.632051882284614, -27.305180652371774]",
      "humidity": 88,
      "pressure": 1012,
      "temp": 74.93,
      "windiness": 2
    },
    {
      "FIELD1": 437,
      "city names": "otane",
      "cloudiness": 0,
      "geo": "[-40.75480617442234, 177.47297854924346]",
      "humidity": 48,
      "pressure": 971,
      "temp": 60.53000000000003,
      "windiness": 5
    },
    {
      "FIELD1": 438,
      "city names": "ca mau",
      "cloudiness": 8,
      "geo": "[8.631758758607234, 104.1656477079245]",
      "humidity": 93,
      "pressure": 1024,
      "temp": 83.93,
      "windiness": 2
    },
    {
      "FIELD1": 439,
      "city names": "khiv",
      "cloudiness": 0,
      "geo": "[41.76743040720467, 47.79904126358707]",
      "humidity": 84,
      "pressure": 948,
      "temp": 46.129999999999995,
      "windiness": 1
    },
    {
      "FIELD1": 440,
      "city names": "kolondieba",
      "cloudiness": 48,
      "geo": "[11.007673638887383, -6.454216495040782]",
      "humidity": 95,
      "pressure": 986,
      "temp": 69.53000000000003,
      "windiness": 2
    },
    {
      "FIELD1": 441,
      "city names": "palana",
      "cloudiness": 92,
      "geo": "[59.452533523449745, 158.98753817868334]",
      "humidity": 98,
      "pressure": 964,
      "temp": 37.129999999999995,
      "windiness": 1
    },
    {
      "FIELD1": 442,
      "city names": "sistranda",
      "cloudiness": 75,
      "geo": "[64.98882365458033, 8.69846973580303]",
      "humidity": 86,
      "pressure": 1002,
      "temp": 40.72999999999996,
      "windiness": 2
    },
    {
      "FIELD1": 443,
      "city names": "nadvoitsy",
      "cloudiness": 88,
      "geo": "[64.49351736575403, 34.050913938055885]",
      "humidity": 100,
      "pressure": 1004,
      "temp": 42.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 444,
      "city names": "sur",
      "cloudiness": 0,
      "geo": "[20.358419257101048, 63.78478670017324]",
      "humidity": 88,
      "pressure": 993,
      "temp": 83.93,
      "windiness": 2
    },
    {
      "FIELD1": 445,
      "city names": "cassilandia",
      "cloudiness": 24,
      "geo": "[-18.67620185446755, -51.665388072756315]",
      "humidity": 81,
      "pressure": 962,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 446,
      "city names": "nesna",
      "cloudiness": 92,
      "geo": "[66.55554808981799, 13.245236908696938]",
      "humidity": 95,
      "pressure": 977,
      "temp": 37.129999999999995,
      "windiness": 1
    },
    {
      "FIELD1": 447,
      "city names": "wawina",
      "cloudiness": 36,
      "geo": "[15.473362983679095, -84.55341953639791]",
      "humidity": 85,
      "pressure": 1018,
      "temp": 76.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 448,
      "city names": "tsogni",
      "cloudiness": 92,
      "geo": "[-3.0945389488546766, 10.027273197697724]",
      "humidity": 100,
      "pressure": 1024,
      "temp": 74.93,
      "windiness": 3
    },
    {
      "FIELD1": 449,
      "city names": "quirinopolis",
      "cloudiness": 8,
      "geo": "[-18.660032034894286, -50.765887641843136]",
      "humidity": 86,
      "pressure": 967,
      "temp": 67.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 450,
      "city names": "seminole",
      "cloudiness": 1,
      "geo": "[27.406415610288164, -84.07910516271372]",
      "humidity": 60,
      "pressure": 1021,
      "temp": 71.32999999999998,
      "windiness": 3
    },
    {
      "FIELD1": 451,
      "city names": "krasnogvardeyskoye",
      "cloudiness": 12,
      "geo": "[50.75300016087439, 38.49565312652848]",
      "humidity": 56,
      "pressure": 1012,
      "temp": 64.12999999999994,
      "windiness": 5
    },
    {
      "FIELD1": 452,
      "city names": "sangar",
      "cloudiness": 0,
      "geo": "[64.42548040299707, 126.361902492382]",
      "humidity": 58,
      "pressure": 983,
      "temp": 35.329999999999984,
      "windiness": 3
    },
    {
      "FIELD1": 453,
      "city names": "seymchan",
      "cloudiness": 56,
      "geo": "[62.830661691164295, 153.36037233137648]",
      "humidity": 96,
      "pressure": 955,
      "temp": 29.930000000000007,
      "windiness": 1
    },
    {
      "FIELD1": 454,
      "city names": "podgornoye",
      "cloudiness": 48,
      "geo": "[57.84407972062337, 82.28057962192662]",
      "humidity": 59,
      "pressure": 1015,
      "temp": 42.52999999999997,
      "windiness": 2
    },
    {
      "FIELD1": 455,
      "city names": "hare bay",
      "cloudiness": 20,
      "geo": "[49.05643843041554, -53.86762009760308]",
      "humidity": 75,
      "pressure": 1022,
      "temp": 40.72999999999996,
      "windiness": 5
    },
    {
      "FIELD1": 456,
      "city names": "trebur",
      "cloudiness": 20,
      "geo": "[49.93211061604245, 8.470234735857076]",
      "humidity": 86,
      "pressure": 1022,
      "temp": 40.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 457,
      "city names": "salgado",
      "cloudiness": 40,
      "geo": "[-11.101048503062685, -37.48399127186724]",
      "humidity": 69,
      "pressure": 1016,
      "temp": 76.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 458,
      "city names": "hay river",
      "cloudiness": 75,
      "geo": "[62.47145806398447, -116.99331376961047]",
      "humidity": 50,
      "pressure": 1023,
      "temp": 33.52999999999997,
      "windiness": 8
    },
    {
      "FIELD1": 459,
      "city names": "mizan teferi",
      "cloudiness": 88,
      "geo": "[5.744579378798818, 34.934305429972085]",
      "humidity": 96,
      "pressure": 870,
      "temp": 60.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 460,
      "city names": "kjollefjord",
      "cloudiness": 80,
      "geo": "[71.59703175514585, 27.135479385758003]",
      "humidity": 85,
      "pressure": 996,
      "temp": 35.329999999999984,
      "windiness": 6
    },
    {
      "FIELD1": 461,
      "city names": "verkhoyansk",
      "cloudiness": 0,
      "geo": "[67.29161037060751, 133.5637012796388]",
      "humidity": 76,
      "pressure": 969,
      "temp": 24.529999999999973,
      "windiness": 1
    },
    {
      "FIELD1": 462,
      "city names": "tilichiki",
      "cloudiness": 92,
      "geo": "[59.58306877930727, 170.76071512250167]",
      "humidity": 96,
      "pressure": 979,
      "temp": 42.52999999999997,
      "windiness": 6
    },
    {
      "FIELD1": 463,
      "city names": "atherton",
      "cloudiness": 20,
      "geo": "[-18.45194459665646, 143.37591706309757]",
      "humidity": 44,
      "pressure": 1019,
      "temp": 80.32999999999998,
      "windiness": 12
    },
    {
      "FIELD1": 464,
      "city names": "okha",
      "cloudiness": 92,
      "geo": "[56.34060522594646, 145.3921762019042]",
      "humidity": 66,
      "pressure": 1006,
      "temp": 47.93000000000001,
      "windiness": 7
    },
    {
      "FIELD1": 465,
      "city names": "aksarka",
      "cloudiness": 20,
      "geo": "[68.6981481078628, 68.00069091035601]",
      "humidity": 91,
      "pressure": 1013,
      "temp": 26.329999999999984,
      "windiness": 4
    },
    {
      "FIELD1": 466,
      "city names": "marsaxlokk",
      "cloudiness": 75,
      "geo": "[34.820148021634566, 16.66706049136451]",
      "humidity": 82,
      "pressure": 1012,
      "temp": 67.72999999999996,
      "windiness": 4
    },
    {
      "FIELD1": 467,
      "city names": "boulsa",
      "cloudiness": 48,
      "geo": "[12.470552891349996, -0.3914683602033904]",
      "humidity": 94,
      "pressure": 988,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 468,
      "city names": "pingliang",
      "cloudiness": 0,
      "geo": "[36.105568242505754, 107.2765001496457]",
      "humidity": 38,
      "pressure": 864,
      "temp": 58.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 469,
      "city names": "yulara",
      "cloudiness": 68,
      "geo": "[-26.934823295190697, 128.03367688023536]",
      "humidity": 21,
      "pressure": 1018,
      "temp": 83.93,
      "windiness": 6
    },
    {
      "FIELD1": 470,
      "city names": "san pedro",
      "cloudiness": 40,
      "geo": "[9.367818089383988, -74.97195492129478]",
      "humidity": 73,
      "pressure": 1014,
      "temp": 73.12999999999994,
      "windiness": 7
    },
    {
      "FIELD1": 471,
      "city names": "pangobilian",
      "cloudiness": 76,
      "geo": "[8.10205816703565, 118.56027197256418]",
      "humidity": 94,
      "pressure": 1008,
      "temp": 82.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 472,
      "city names": "samarai",
      "cloudiness": 92,
      "geo": "[-11.530516134951768, 152.60496853909308]",
      "humidity": 100,
      "pressure": 1021,
      "temp": 74.93,
      "windiness": 6
    },
    {
      "FIELD1": 473,
      "city names": "shyryayeve",
      "cloudiness": 8,
      "geo": "[47.58945496842958, 30.11086378939146]",
      "humidity": 94,
      "pressure": 1010,
      "temp": 44.329999999999984,
      "windiness": 1
    },
    {
      "FIELD1": 474,
      "city names": "la verne",
      "cloudiness": 40,
      "geo": "[34.29709697785067, -117.73059473296044]",
      "humidity": 36,
      "pressure": 1009,
      "temp": 80.32999999999998,
      "windiness": 4
    },
    {
      "FIELD1": 475,
      "city names": "lewistown",
      "cloudiness": 1,
      "geo": "[47.591016708937275, -107.90231674683962]",
      "humidity": 82,
      "pressure": 1017,
      "temp": 73.12999999999994,
      "windiness": 3
    },
    {
      "FIELD1": 476,
      "city names": "saint-leu",
      "cloudiness": 75,
      "geo": "[-21.914153779962206, 54.452599705055775]",
      "humidity": 77,
      "pressure": 1020,
      "temp": 64.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 477,
      "city names": "dolores",
      "cloudiness": 0,
      "geo": "[-36.895243922887126, -55.83884304016094]",
      "humidity": 67,
      "pressure": 1032,
      "temp": 40.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 478,
      "city names": "general cepeda",
      "cloudiness": 40,
      "geo": "[25.243402155633802, -101.39704656419626]",
      "humidity": 63,
      "pressure": 1025,
      "temp": 65.93,
      "windiness": 4
    },
    {
      "FIELD1": 479,
      "city names": "akom",
      "cloudiness": 92,
      "geo": "[2.627334724876519, 10.683398469089752]",
      "humidity": 95,
      "pressure": 954,
      "temp": 67.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 480,
      "city names": "shitanjing",
      "cloudiness": 0,
      "geo": "[41.25015680537663, 104.22405008650986]",
      "humidity": 24,
      "pressure": 859,
      "temp": 56.93000000000001,
      "windiness": 1
    },
    {
      "FIELD1": 481,
      "city names": "dudinka",
      "cloudiness": 56,
      "geo": "[73.05923364419726, 86.11776761847898]",
      "humidity": 100,
      "pressure": 1005,
      "temp": 33.52999999999997,
      "windiness": 6
    },
    {
      "FIELD1": 482,
      "city names": "rafai",
      "cloudiness": 92,
      "geo": "[4.3860383909791665, 24.290626255515633]",
      "humidity": 99,
      "pressure": 959,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 483,
      "city names": "wanlaweyn",
      "cloudiness": 12,
      "geo": "[2.330390468237141, 44.128110399663484]",
      "humidity": 95,
      "pressure": 1017,
      "temp": 69.53000000000003,
      "windiness": 1
    },
    {
      "FIELD1": 484,
      "city names": "zhezkazgan",
      "cloudiness": 0,
      "geo": "[47.09367663372956, 69.29142778049516]",
      "humidity": 61,
      "pressure": 1021,
      "temp": 49.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 485,
      "city names": "pierre",
      "cloudiness": 1,
      "geo": "[45.262902842621855, -101.18446418707782]",
      "humidity": 82,
      "pressure": 1018,
      "temp": 49.72999999999996,
      "windiness": 4
    },
    {
      "FIELD1": 486,
      "city names": "khasan",
      "cloudiness": 0,
      "geo": "[40.3505603831633, 130.22442736635765]",
      "humidity": 95,
      "pressure": 1017,
      "temp": 60.53000000000003,
      "windiness": 4
    },
    {
      "FIELD1": 487,
      "city names": "kenora",
      "cloudiness": 75,
      "geo": "[53.04566979337167, -94.25005836224206]",
      "humidity": 81,
      "pressure": 1019,
      "temp": 44.329999999999984,
      "windiness": 4
    },
    {
      "FIELD1": 488,
      "city names": "morondava",
      "cloudiness": 0,
      "geo": "[-21.026184235248934, 44.52431834620904]",
      "humidity": 98,
      "pressure": 1023,
      "temp": 67.72999999999996,
      "windiness": 1
    },
    {
      "FIELD1": 489,
      "city names": "paita",
      "cloudiness": 20,
      "geo": "[-7.858446395475482, -86.93831912005298]",
      "humidity": 86,
      "pressure": 1011,
      "temp": 65.93,
      "windiness": 2
    },
    {
      "FIELD1": 490,
      "city names": "burlington",
      "cloudiness": 1,
      "geo": "[41.06696261210928, -91.0864062742799]",
      "humidity": 93,
      "pressure": 1025,
      "temp": 65.93,
      "windiness": 1
    },
    {
      "FIELD1": 491,
      "city names": "podosinovets",
      "cloudiness": 76,
      "geo": "[59.994567789372354, 47.14961001706931]",
      "humidity": 88,
      "pressure": 1009,
      "temp": 44.329999999999984,
      "windiness": 3
    },
    {
      "FIELD1": 492,
      "city names": "hobyo",
      "cloudiness": 68,
      "geo": "[2.598845899061672, 49.40868918463434]",
      "humidity": 94,
      "pressure": 1017,
      "temp": 73.12999999999994,
      "windiness": 5
    },
    {
      "FIELD1": 493,
      "city names": "trinidad",
      "cloudiness": 1,
      "geo": "[37.67007747503389, -104.51092818405023]",
      "humidity": 48,
      "pressure": 1021,
      "temp": 67.72999999999996,
      "windiness": 3
    },
    {
      "FIELD1": 494,
      "city names": "kamskiye polyany",
      "cloudiness": 0,
      "geo": "[55.56175613583238, 51.54369352751692]",
      "humidity": 86,
      "pressure": 1023,
      "temp": 37.129999999999995,
      "windiness": 5
    },
    {
      "FIELD1": 495,
      "city names": "ylivieska",
      "cloudiness": 92,
      "geo": "[63.16448513395383, 24.389806516392696]",
      "humidity": 99,
      "pressure": 1005,
      "temp": 33.52999999999997,
      "windiness": 1
    },
    {
      "FIELD1": 496,
      "city names": "steinbach",
      "cloudiness": 90,
      "geo": "[48.927634536404696, -96.85324381699448]",
      "humidity": 57,
      "pressure": 1017,
      "temp": 49.72999999999996,
      "windiness": 4
    },
    {
      "FIELD1": 497,
      "city names": "mikhaylovka",
      "cloudiness": 75,
      "geo": "[44.33831222402276, 72.04854280343542]",
      "humidity": 93,
      "pressure": 1020,
      "temp": 37.129999999999995,
      "windiness": 3
    },
    {
      "FIELD1": 498,
      "city names": "shimoda",
      "cloudiness": 40,
      "geo": "[26.138734605556962, 141.0722424509633]",
      "humidity": 64,
      "pressure": 1012,
      "temp": 73.12999999999994,
      "windiness": 2
    },
    {
      "FIELD1": 499,
      "city names": "alexandria",
      "cloudiness": 0,
      "geo": "[33.567190918573715, 29.196418901745005]",
      "humidity": 100,
      "pressure": 1029,
      "temp": 71.32999999999998,
      "windiness": 2
    }
   ]