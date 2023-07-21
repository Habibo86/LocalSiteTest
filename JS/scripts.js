// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

// ----------- charts ------------//

// barchart

var options = {
    series: [
        {
            data: [
                {
                    x: 'Q274',
                    y: 74208
                },
                {
                    x: 'S162',
                    y: 57667
                },
                {
                    x: 'D255',
                    y: 40853
                },
                {
                    x: 'QA201',
                    y: 37461
                },
                {
                    x: 'QB201',
                    y: 37458
                },
                {
                    x: 'D260',
                    y: 36562
                },
                {
                    x: 'S155',
                    y: 29044
                },
                {
                    x: 'D254',
                    y: 27335
                },
                {
                    x: 'D252',
                    y: 26915
                },
                {
                    x: 'D253',
                    y: 26847
                },
                {
                    x: 'F219',
                    y: 23229
                },
                {
                    x: 'F220',
                    y: 23229
                },
                {
                    x: 'F221',
                    y: 23229
                },
                {
                    x: 'F222',
                    y: 23229
                },
                {
                    x: 'F223',
                    y: 23229
                },
                {
                    x: 'F224',
                    y: 23229
                },
                {
                    x: 'H21',
                    y: 21393
                },
                {
                    x: 'D256',
                    y: 20953
                },
                {
                    x: 'D250',
                    y: 19311
                },
                {
                    x: 'D258',
                    y: 19334
                },
                {
                    x: 'D259',
                    y: 19482
                },
                {
                    x: 'D257',
                    y: 17544
                },
                {
                    x: 'D251',
                    y: 15960
                },
                {
                    x: 'I271',
                    y: 7400
                },
                {
                    x: 'C218',
                    y: 3106
                },
                {
                    x: 'W188',
                    y: 29
                },
                {
                    x: 'W189',
                    y: 29
                },
                {
                    x: 'W190',
                    y: 29
                },
                {
                    x: 'V193',
                    y: 29
                },
                {
                    x: 'V194',
                    y: 29
                },
                {
                    x: 'V195',
                    y: 29
                },
                {
                    x: 'Z187',
                    y: 29
                },
                {
                    x: 'QC213',
                    y: 29
                },
            ]
        }
    ],
    legend: {
        show: false
    },
    chart: {
        height: 350,
        type: 'treemap'
    },
    colors: [
        '#3B93A5',
        '#e4aa7a',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#e4aa7a',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#e4aa7a',
        '#e4aa7a',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#3B93A5',
        '#e4aa7a',
    ],
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: false
        }
    }
};

var Treemap = new ApexCharts(document.querySelector("#Treemap"), options);
Treemap.render();


//hjkhjkl

