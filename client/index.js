import {Grid} from 'ag-grid-community';
import 'ag-grid-enterprise';

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { LicenseManager } from 'ag-grid-enterprise'
LicenseManager.setLicenseKey("[TRIAL]_CompanyName=SYSTEM,LicensedApplication=Trial Support - April,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=-1,LicensedProductionInstancesCount=0,AssetReference=AG-037732,SupportServicesEnd=30_April_2023_[v2]_MTY4MjgwOTIwMDAwMA==ac53951bd0f776b7f44f66ab27d46014")


const gridOptions = {

    rowModelType: 'serverSide',

    columnDefs: [
        {field: 'CountyID', filter: 'agTextColumnFilter'},
        {field: 'StateID',  filter: 'agTextColumnFilter'},
        {field: 'Status',  filter: 'agTextColumnFilter'},
        {field: 'County',  filter: 'agTextColumnFilter'},
        {field: 'Precinct',  filter: 'agTextColumnFilter'},
        {field: 'CongDist',  filter: 'agNumberColumnFilter'},
        {field: 'AssmDist',  filter: 'agNumberColumnFilter'},
        {field: 'SenDist',  filter: 'agNumberColumnFilter'},
        {field: 'BrdofEd',  filter: 'agNumberColumnFilter'},
        {field: 'Regent',  filter: 'agNumberColumnFilter'},
        {field: 'CntyComm',  filter: 'agNumberColumnFilter'},
        {field: 'Precinct',  filter: 'agTextColumnFilter'},
        {field: 'Rwards',  filter: 'agNumberColumnFilter'},
        {field: 'Swards',  filter: 'agNumberColumnFilter'},
        {field: 'Schbdtrust',  filter: 'agNumberColumnFilter'},
        {field: 'schbdatlrg',  filter: 'agNumberColumnFilter'},
        {field: 'First',  filter: 'agTextColumnFilter'},
        {field: 'Last',  filter: 'agTextColumnFilter'},
        {field: 'Middle',  filter: 'agTextColumnFilter'},
        {field: 'Suffix',  filter: true},
        {field: 'Phone',  filter: 'agTextColumnFilter'},
        {field: 'email',  filter: 'agTextColumnFilter'},
        {field: 'BirthDate',  filter: 'agDateColumnFilter'},
        {field: 'RegDate',  filter: 'agDateColumnFilter'},
        {field: 'Party',  filter: 'agTextColumnFilter'},
        {field: 'StreetNo',  filter: true},
        {field: 'StreetName',  filter: 'agTextColumnFilter'},
        {field: 'Address1',  filter: true},
        {field: 'Address2',  filter: true},
        {field: 'City',  filter: 'agTextColumnFilter'},
        {field: 'State',  filter: true},
        {field: 'RegisteredDays',  filter: true},
        {field: 'Age',  filter: true},
        {field: '11/03/20 general', hide: true, filter: true},
        {field: '06/09/20 primary', hide: true,  filter: true},
        {field: '11/06/18 general', hide: true,  filter: true},
        {field: '06/12/18 primary', hide: true,  filter: true},
        {field: '11/08/16 general', hide: true,  filter: true},
        {field: '06/14/16 primary', hide: true,  filter: true},
        {field: '11/04/14 general', hide: true,  filter: true},
        {field: '06/10/14 primary', hide: true,  filter: true},
        {field: '11/06/12 general', hide: true,  filter: true},
        {field: '06/12/12 primary', hide: true,  filter: true},
        {field: '11/02/10 general', hide: true,  filter: true},
        {field: '06/08/10 primary', hide: true,  filter: true},
        {field: '11/04/08 general', hide: true,  filter: true},
        {field: '08/12/08 primary', hide: true,  filter: true},
        {field: '11/07/06 general', hide: true,  filter: true},
        {field: '08/15/06 primary', hide: true,  filter: true},
        {field: '11/02/04 general', hide: true,  filter: true},
        {field: '09/07/04 primary', hide: true,  filter: true},
        {field: '11/05/02 general', hide: true,  filter: true},
        {field: '09/03/02 primary', hide: true,  filter: true},
        {field: 'TotalVotes',  filter: 'agNumberColumnFilter'},
        {field: 'Generals',  filter: 'agNumberColumnFilter'},
        {field: 'Primaries',  filter: 'agNumberColumnFilter'},
        {field: 'Polls',  filter: 'agNumberColumnFilter'},
        {field: 'Absentee',  filter: 'agNumberColumnFilter'},
        {field: 'Early',  filter: 'agNumberColumnFilter'},
        {field: 'Provisional',  filter: 'agNumberColumnFilter'},
        {field: 'LikelytoVote',  filter: 'agTextColumnFilter'},
        {field: 'Score',  filter: 'agNumberColumnFilter'},
   ],

    defaultColDef: {
        sortable: true
    }

    // debug: true,
    // cacheBlockSize: 20,
    // maxBlocksInCache: 3,
    // purgeClosedRowNodes: true,
    // maxConcurrentDatasourceRequests: 2,
    // blockLoadDebounceMillis: 1000
};

const gridDiv = document.querySelector('#myGrid');
new Grid(gridDiv, gridOptions);

const datasource = {
    getRows(params) {
         console.log(JSON.stringify(params.request, null, 1));

         fetch('./olympicWinners/', {
             method: 'post',
             body: JSON.stringify(params.request),
             headers: {"Content-Type": "application/json; charset=utf-8"}
         })
         .then(httpResponse => httpResponse.json())
         .then(response => {
             params.successCallback(response.rows, response.lastRow);
         })
         .catch(error => {
             console.error(error);
             params.failCallback();
         })
    }
};

gridOptions.api.setServerSideDatasource(datasource);