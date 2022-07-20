from asyncio import tasks
from typing import Dict
from fastapi import FastAPI,Request
import json
from datetime import date,timedelta
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from schemas import TaskBase

file=open("data.json")
file=json.load(file)
app = FastAPI()
#fronend


origins = ['http://localhost:3000','http://127.0.0.1:3000']
app.add_middleware(CORSMiddleware,
allow_origins = origins,
allow_credentials = True,
allow_methods = ['*'],
allow_headers = ['*']
)

envirnoments =[{
    'value': 'hii',
    'label': 'hii',},{
    'value': 'hello',
    'label': 'hello',},]

jobs =[{
    'value': 'text',
    'label': 'text',},{
    'value': 'call',
    'label': 'call',},{
    'value': 'test',
    'label': 'test',},]

# app.add_middleware()
@app.get('/data')
def data():
    return {"tasks": file, "envirnoments": envirnoments, "jobs":jobs}


@app.post('/data')
def post_data(request: TaskBase):
    modifieddate = date.today().strftime("%d-%m-%y")
    duedate = date.today()+timedelta(5)
    if request.currenttask:
        newTask = dict(
            taskname= request.taskname,
            environmentname= request.environmentname,
            responsedata= request.currenttask["responsedata"],
            dueat= duedate.strftime("%d-%m-%y"),
            modifiedat= modifieddate,
            status= "pending",
            )
    else:
        newTask = dict(
            taskname = request.taskname,
            environmentname = request.environmentname,
            responsedata ="fvfdvxc",
            dueat=duedate.strftime("%d-%m-%y"),
            modifiedat=modifieddate,
            status="success",
        )
    file.insert(0,newTask)
    overridedata=[]
    for data in file:
        overridedata.append(json.dumps(data,indent=4))
    overridedata = str(overridedata)
    with open("data.json", "w") as outfile:
        outfile.write(overridedata)
    return file
    












