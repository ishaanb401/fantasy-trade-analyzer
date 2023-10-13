import { Client } from 'espn-fantasy-football-api';
import React from 'react';
import ReactDOM from 'react-dom';

// Create a Client instance and configure it
const myClient = new Client({ leagueId: 387659 });
myClient.setCookies({ espnS2: 'YOUR_ESPN_S2', SWID: 'YOUR_SWID' });