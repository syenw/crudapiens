const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const handler = require('./handler');
const { handle } = require('express/lib/application');

app.use(bodyParser.json());

app.get('/items', handler.ItemAll)
app.post('/item', handler.ItemAdd)
app.put('/item/update', handler.ItemUpdate)
app.delete('/item/delete', handler.ItemDelete)
app.get('/item/(:id)', handler.ItemOneMultipleJoin)

app.get('/locations', handler.LocationAll)
app.post('/location', handler.locationAdd)
app.get('/location/(:id)', handler.locationOneJoin)
app.put('/location/update', handler.locationUpdate)
app.delete('/location/delete', handler.locationDelete)

app.get('/achievment_plannings', handler.AchievmentPlanningAll)
app.post('/achievment_planning', handler.AchievmentPlanningAdd)
app.get('/achievment_planning/(:id)', handler.AchievmentPlanningOneJoin)
app.put('/achievment_planning/update', handler.AchievmentPlanningUpdate)

app.post('/transaction_production', handler.TransactionProductionAdd)
app.get('/transaction_production/(:id)', handler.TransactionProductionMultipleJoin)

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});

