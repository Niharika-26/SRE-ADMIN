from asyncio import tasks
from fastapi import FastAPI,Request
import json
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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
    'label': 'call',},]

# app.add_middleware()
@app.get('/data')
def data():
    return {"tasks": file, "envirnoments": envirnoments, "jobs":jobs}

# @app.get("/data/{limit}")
# def read_item(limit: str ):
#   listoftasks=[]
#   #tasks=file.read()
#   for tasks in file:
#     if limit.lower()==tasks['env'].lower():
#         listoftasks.append(tasks)
#   return listoftasks

# @app.get("/data/{value}")
# def read_env(value: str ):
#   listofenvs=[]
#   #tasks=file.read()
#   for envs in file:
#     if value.lower()==envs['env'].lower():
#         listofenvs.append(envs)
#   return listofenvs











